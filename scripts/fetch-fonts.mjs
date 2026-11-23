#!/usr/bin/env node
/**
 * Downloads the brand fonts from Fontshare (Indian Type Foundry) into
 * public/fonts/ so they can be self-hosted. Run only when families or
 * weights change.
 *
 *   node scripts/fetch-fonts.mjs
 *
 * Why self-host: a render-blocking <link> to a third-party font CSS forces a
 * chained round trip before first paint (DNS -> TLS -> CSS -> font discovery).
 * Self-hosting collapses it to same-origin requests the browser can start
 * during HTML parsing. See docs/DESIGN-BENCHMARK-2026.md §2.
 *
 * Cabinet Grotesk (display) ships static weights 500/700/800 and has no
 * italic. Satoshi (body) ships 400/500/700 plus italic 400. Fontshare's CSS
 * API encodes italic as weight+1 (401 = italic 400).
 */

import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const OUT_DIR = 'public/fonts'
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'

/** family -> list of [cssWeightCode, outputFileName] */
const FACES = {
  'cabinet-grotesk': [
    [500, 'cabinet-grotesk-500.woff2'],
    [700, 'cabinet-grotesk-700.woff2'],
    [800, 'cabinet-grotesk-800.woff2'],
  ],
  satoshi: [
    [400, 'satoshi-400.woff2'],
    [500, 'satoshi-500.woff2'],
    [700, 'satoshi-700.woff2'],
    [401, 'satoshi-italic-400.woff2'],
  ],
}

const get = async (url) => {
  const res = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`)
  return res
}

await mkdir(OUT_DIR, { recursive: true })

for (const [family, faces] of Object.entries(FACES)) {
  const codes = faces.map(([code]) => code).join(',')
  const css = await (
    await get(`https://api.fontshare.com/v2/css?f[]=${family}@${codes}&display=swap`)
  ).text()

  // Each @font-face block carries font-weight, optional font-style and a
  // protocol-relative cdn.fontshare.com woff2 URL.
  const BLOCK = /@font-face\s*\{([^}]+)\}/g
  const byCode = new Map()
  for (const [, body] of css.matchAll(BLOCK)) {
    const weight = Number(/font-weight:\s*(\d+)/.exec(body)?.[1])
    const italic = /font-style:\s*italic/.test(body)
    const url = /url\('(\/\/[^']+\.woff2)'\)/.exec(body)?.[1]
    if (!weight || !url) continue
    byCode.set(italic ? weight + 1 : weight, `https:${url}`)
  }

  for (const [code, file] of faces) {
    const url = byCode.get(code)
    if (!url) throw new Error(`No woff2 for ${family} code ${code}`)
    const buf = Buffer.from(await (await get(url)).arrayBuffer())
    await writeFile(join(OUT_DIR, file), buf)
    console.log(`${file}  ${(buf.length / 1024).toFixed(1)} KB`)
  }
}

console.log('Done. Update public/fonts/manifest.json if weights changed.')