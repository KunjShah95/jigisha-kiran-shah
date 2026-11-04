#!/usr/bin/env node
/**
 * Downloads the brand fonts from Google Fonts into public/fonts/ so they can be
 * self-hosted. Run this only when the font families or weight ranges change.
 *
 *   node scripts/fetch-fonts.mjs
 *
 * Why self-host (context for whoever reads this next):
 *   The site used to load a render-blocking <link rel="stylesheet"> from
 *   fonts.googleapis.com. That forced a chained round trip before first paint:
 *   resolve googleapis.com -> fetch 17 KB of CSS -> parse -> only then discover
 *   the fonts.gstatic.com files. Self-hosting collapses it to a same-origin
 *   request the browser can start during HTML parsing.
 *
 * Why the range syntax:
 *   Fraunces and Plus Jakarta Sans are variable fonts. Asking for discrete
 *   weights (300;400;500;600;700;800) makes Google emit 24 @font-face blocks
 *   that all point at the same 4 files. Asking for `wght@300..800` emits 4
 *   blocks with a `font-weight: 300 800` range — same bytes, a quarter of the
 *   CSS. The script asserts that, so a future family swap that isn't variable
 *   fails loudly here instead of silently synthesising weights in the browser.
 */

import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const OUT_DIR = 'public/fonts'

// A current desktop Chrome UA is required; Google serves legacy formats otherwise.
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'

const CSS_URL =
  'https://fonts.googleapis.com/css2?' +
  'family=Fraunces:wght@400..800&' +
  'family=Plus+Jakarta+Sans:wght@300..800&' +
  'display=swap'

// Only latin scripts ship. Gujarati copy on /protection-check has no coverage in
// either family and already falls back to the system font — bundling a Gujarati
// face would add weight for zero visual change.
const SUBSETS = new Set(['latin', 'latin-ext'])

const slug = (family) => family.toLowerCase().replace(/\s+/g, '-')

const get = async (url) => {
  const res = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`)
  return res
}

const css = await (await get(CSS_URL)).text()

// Google emits "/* subset */" immediately before each @font-face block.
const BLOCK = /\/\*\s*([a-z0-9-]+)\s*\*\/\s*@font-face\s*\{([^}]+)\}/g

const faces = new Map()
for (const [, subset, body] of css.matchAll(BLOCK)) {
  const family = /font-family:\s*'([^']+)'/.exec(body)?.[1]
  const weight = /font-weight:\s*([^;]+);/.exec(body)?.[1]?.trim()
  const url = /url\((https:[^)]+\.woff2)\)/.exec(body)?.[1]
  const unicodeRange = /unicode-range:\s*([^;]+);/.exec(body)?.[1]?.trim()
  if (!family || !url || !SUBSETS.has(subset)) continue

  const key = `${family}|${subset}`
  if (!faces.has(key)) faces.set(key, { family, subset, weight, url, unicodeRange })
}

if (faces.size === 0) {
  throw new Error('No latin @font-face blocks found — Google changed its response format.')
}

await mkdir(OUT_DIR, { recursive: true })

const manifest = []
for (const face of faces.values()) {
  // A range like "300 800" proves the file is variable; a single value means
  // Google shipped a static instance and our one-file-per-family model is wrong.
  if (!/^\d+\s+\d+$/.test(face.weight ?? '')) {
    throw new Error(
      `${face.family} (${face.subset}) is not variable — got font-weight "${face.weight}". ` +
        'Re-check the family supports a weight range before self-hosting.'
    )
  }

  const name = `${slug(face.family)}-${face.subset}.woff2`
  const bytes = Buffer.from(await (await get(face.url)).arrayBuffer())
  await writeFile(join(OUT_DIR, name), bytes)

  manifest.push({
    file: name,
    family: face.family,
    subset: face.subset,
    weight: face.weight,
    unicodeRange: face.unicodeRange,
    kb: Number((bytes.length / 1024).toFixed(1)),
  })

  console.log(`${name.padEnd(38)} ${(bytes.length / 1024).toFixed(1).padStart(6)} KB  ${face.weight}`)
}

await writeFile(join(OUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n')

const total = manifest.reduce((sum, m) => sum + m.kb, 0)
console.log(`\n${manifest.length} files, ${total.toFixed(1)} KB total -> ${OUT_DIR}/`)
console.log('Copy the font-weight and unicode-range values into @font-face in src/index.css.')
