/**
 * Server entry used only at build time by scripts/prerender.mjs.
 *
 * Renders each route to full HTML so crawlers that don't run JavaScript
 * (GPTBot, ClaudeBot, PerplexityBot, most AI answer engines) read the whole
 * page — headings, plan tables, FAQs — not an empty <div id="root">.
 */
import { StrictMode } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Writable } from 'node:stream'
import App from './App'
import { ssrHead, type PageHead } from './hooks/useSEO'
import { AREAS } from './data/areas'
import { POSTS } from './data/posts'
import { GUIDES } from './data/guides'
import { SERVICE_PAGES } from './data/servicePages'
import { buildLlmsTxt, buildLlmsFullTxt } from './lib/llms'

export { buildLlmsTxt, buildLlmsFullTxt }
// Article data for the RSS feed written by scripts/prerender.mjs.
export { POSTS, GUIDES }

export interface RouteInfo {
  path: string
  /** ISO date the content last changed (sitemap lastmod); undefined = build date */
  updated?: string
  priority: number
}

export const ROUTES: RouteInfo[] = [
  { path: '/', priority: 1.0 },
  { path: '/gu', updated: '2026-11-09', priority: 0.9 },
  { path: '/hi', updated: '2026-11-09', priority: 0.9 },
  { path: '/services', priority: 0.9 },
  { path: '/contact', priority: 0.9 },
  { path: '/book', priority: 0.9 },
  { path: '/protection-check', priority: 0.9 },
  { path: '/about', priority: 0.8 },
  { path: '/reviews', priority: 0.7 },
  { path: '/areas', priority: 0.8 },
  { path: '/guides', priority: 0.8 },
  { path: '/resources', priority: 0.7 },
  { path: '/calculators', priority: 0.7 },
  { path: '/policy-card', updated: '2026-11-09', priority: 0.8 },
  { path: '/blog', priority: 0.7 },
  { path: '/gallery', priority: 0.5 },
  { path: '/privacy', updated: '2026-11-09', priority: 0.3 },
  ...SERVICE_PAGES.map((s) => ({ path: `/services/${s.slug}`, updated: s.updated, priority: 0.9 })),
  ...AREAS.map((a) => ({ path: `/areas/${a.slug}`, priority: 0.8 })),
  ...GUIDES.map((g) => ({ path: `/guides/${g.slug}`, updated: g.updated, priority: 0.8 })),
  ...POSTS.map((p) => ({ path: `/blog/${p.slug}`, updated: p.updated, priority: 0.7 })),
]

export function render(url: string): Promise<{ html: string; head: PageHead | null }> {
  ssrHead.current = null
  return new Promise((resolve, reject) => {
    // Collect raw bytes and decode once at the end, so a multi-byte character
    // split across two chunks is never decoded in halves.
    const chunks: Buffer[] = []
    const sink = new Writable({
      write(chunk, _enc, cb) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
        cb()
      },
      final(cb) {
        // React 18.3's server renderer flushes its whole 2,048-byte buffer
        // when a multi-byte character (Gujarati, Hindi, ₹, curly quotes) does
        // not fit in the remaining space, so the unused zero-filled tail goes
        // out as NUL bytes. NUL is never valid in HTML: strip it. Fixed upstream
        // in React 19; check-seo fails the build if any page still has one.
        const html = Buffer.concat(chunks).toString('utf8').replace(/\u0000/g, '')
        resolve({ html, head: ssrHead.current })
        cb()
      },
    })
    // onAllReady waits for every lazy route chunk, so the output is the
    // finished page, never the Suspense spinner.
    const stream = renderToPipeableStream(
      <StrictMode>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </StrictMode>,
      {
        onAllReady() {
          stream.pipe(sink)
        },
        onShellError: reject,
        onError(err) {
          reject(err)
        },
      },
    )
  })
}
