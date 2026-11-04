#!/usr/bin/env node
/**
 * Cross-site performance benchmark for docs/DESIGN-BENCHMARK-2026.md §2.
 *
 * Measures request count, transferred bytes, JS/image split, DOM size and paint
 * timings for our live site and the competitor set, from one cold headless load
 * each at a fixed viewport.
 *
 * Setup (Playwright is intentionally not a project dependency — this is an
 * occasional measurement, not part of the build):
 *
 *   npm i -g playwright && npx playwright install chromium
 *   node scripts/benchmark-perf.mjs
 *
 * Caveats worth remembering before quoting a number:
 *  - `content-length` is absent on brotli-compressed responses, so a CDN that
 *    compresses without declaring length reports ~0 bytes. Our own JS figure is
 *    affected; the request count is the honest signal for that row.
 *  - Sites behind a bot wall (PolicyBazaar rejects HTTP/2 from headless) are
 *    reported as errors rather than dropped, so the gap is visible.
 *  - Numbers are single-run and network-dependent. Re-run before comparing.
 */

import { chromium } from 'playwright'

const SITES = [
  ['yours', 'https://www.jigishakiranshah.in/'],
  ['ditto', 'https://joinditto.in/'],
  ['licindia', 'https://licindia.in/'],
  ['policybazaar', 'https://www.policybazaar.com/'],
]

const VIEWPORT = { width: 1440, height: 950 }
const SETTLE_MS = 3000

const kb = (n) => Math.round(n / 1024)

async function measure(browser, url) {
  const ctx = await browser.newContext({ viewport: VIEWPORT })
  const page = await ctx.newPage()

  let bytes = 0
  let requests = 0
  let jsBytes = 0
  let imgBytes = 0

  page.on('response', (res) => {
    requests += 1
    const headers = res.headers()
    const len = Number.parseInt(headers['content-length'] ?? '0', 10) || 0
    bytes += len
    const type = headers['content-type'] ?? ''
    if (/javascript/.test(type)) jsBytes += len
    if (/image/.test(type)) imgBytes += len
  })

  const startedAt = Date.now()
  await page.goto(url, { waitUntil: 'load', timeout: 45_000 })
  await page.waitForTimeout(SETTLE_MS)
  const wallMs = Date.now() - startedAt

  const metrics = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0] ?? {}
    const paints = performance.getEntriesByType('paint')
    const fcp = paints.find((p) => p.name === 'first-contentful-paint')
    return {
      domNodes: document.getElementsByTagName('*').length,
      fcp: fcp ? Math.round(fcp.startTime) : null,
      dcl: Math.round(nav.domContentLoadedEventEnd ?? 0),
    }
  })

  await ctx.close()

  return {
    site: url,
    requests,
    totalKb: kb(bytes),
    jsKb: kb(jsBytes),
    imgKb: kb(imgBytes),
    domNodes: metrics.domNodes,
    fcpMs: metrics.fcp,
    dclMs: metrics.dcl,
    wallMs,
  }
}

const browser = await chromium.launch()
const rows = []

for (const [name, url] of SITES) {
  try {
    const result = await measure(browser, url)
    rows.push({ name, ...result })
  } catch (error) {
    rows.push({ name, site: url, error: String(error).split('\n')[0].slice(0, 70) })
  }
}

await browser.close()

console.table(
  rows.map((r) =>
    r.error
      ? { name: r.name, error: r.error }
      : {
          name: r.name,
          requests: r.requests,
          totalKb: r.totalKb,
          jsKb: r.jsKb,
          imgKb: r.imgKb,
          domNodes: r.domNodes,
          fcpMs: r.fcpMs,
          dclMs: r.dclMs,
          wallMs: r.wallMs,
        }
  )
)
