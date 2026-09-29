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

export interface RouteInfo {
  path: string
  /** ISO date the content last changed (sitemap lastmod); undefined = build date */
  updated?: string
  priority: number
}

export const ROUTES: RouteInfo[] = [
  { path: '/', priority: 1.0 },
  { path: '/services', priority: 0.9 },
  { path: '/contact', priority: 0.9 },
  { path: '/about', priority: 0.8 },
  { path: '/reviews', priority: 0.7 },
  { path: '/areas', priority: 0.8 },
  { path: '/guides', priority: 0.8 },
  { path: '/blog', priority: 0.7 },
  ...SERVICE_PAGES.map((s) => ({ path: `/services/${s.slug}`, priority: 0.9 })),
  ...AREAS.map((a) => ({ path: `/areas/${a.slug}`, priority: 0.8 })),
  ...GUIDES.map((g) => ({ path: `/guides/${g.slug}`, updated: g.updated, priority: 0.8 })),
  ...POSTS.map((p) => ({ path: `/blog/${p.slug}`, updated: p.updated, priority: 0.7 })),
]

export function render(url: string): Promise<{ html: string; head: PageHead | null }> {
  ssrHead.current = null
  return new Promise((resolve, reject) => {
    let html = ''
    const sink = new Writable({
      write(chunk, _enc, cb) {
        html += chunk.toString()
        cb()
      },
      final(cb) {
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
