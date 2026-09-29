/**
 * Post-build prerenderer for SEO / GEO / AEO.
 *
 * The site is a React SPA. Google runs JavaScript, but most AI answer
 * engines (GPTBot, ClaudeBot, PerplexityBot, CCBot) do not — they read the
 * raw HTML. This script server-renders every route with the SSR bundle
 * (dist-ssr/entry-server.js) so each URL ships its full content, its own
 * title/description/canonical, and its own JSON-LD. The client then
 * hydrates the same markup (see src/main.tsx).
 *
 * Route list and meta come from the app itself (entry-server ROUTES +
 * each page's useSEO call) — nothing is duplicated here.
 *
 * Also writes dist/404.html (served with a real 404 status by Vercel)
 * and dist/sitemap.xml.
 *
 * Run: wired into `npm run build` after the client and SSR builds.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const SITE = 'https://www.jigishakiranshah.in';

const { render, ROUTES } = await import(pathToFileURL(join(ROOT, 'dist-ssr', 'entry-server.js')).href);

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// JSON inside <script> must not be able to close the tag.
const safeJson = (o) => JSON.stringify(o).replace(/</g, '\\u003c');

// Pristine client shell. The static homepage JSON-LD is stripped: every
// page (home included) now injects its own blocks from useSEO.
const template = readFileSync(join(DIST, 'index.html'), 'utf8').replace(
  /\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
  '',
);

const setTag = (html, re, tag) => {
  if (!re.test(html)) throw new Error(`prerender: template is missing ${re}`);
  return html.replace(re, tag);
};

function buildPage(body, head) {
  let html = template;
  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(head.title)}</title>`);
  html = setTag(html, /<meta\s+name="description"[\s\S]*?>/, `<meta name="description" content="${esc(head.description)}" />`);
  html = setTag(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${head.canonical}" />`);
  html = setTag(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(head.ogTitle)}" />`);
  html = setTag(html, /<meta property="og:description"[\s\S]*?>/, `<meta property="og:description" content="${esc(head.ogDescription)}" />`);
  html = setTag(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${head.canonical}" />`);
  html = setTag(html, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(head.ogTitle)}" />`);
  html = setTag(html, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(head.ogDescription)}" />`);
  if (head.keywords) {
    html = setTag(html, /<meta\s+name="keywords"[\s\S]*?>/, `<meta name="keywords" content="${esc(head.keywords)}" />`);
  }
  if (head.noindex) {
    html = setTag(html, /<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex, nofollow" />');
  }
  const ld = head.jsonLd
    .map((b) => `  <script type="application/ld+json" data-page-jsonld="true">${safeJson(b)}</script>`)
    .join('\n');
  html = html.replace('</head>', `${ld}\n</head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return html;
}

let count = 0;
for (const r of ROUTES) {
  const { html: body, head } = await render(r.path);
  if (!head) throw new Error(`prerender: ${r.path} rendered without calling useSEO`);
  if (head.noindex) throw new Error(`prerender: ${r.path} rendered as noindex (missing data?)`);
  if (!/<h1[\s>]/.test(body)) throw new Error(`prerender: ${r.path} has no <h1>`);
  const outDir = join(DIST, r.path.slice(1));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), buildPage(body, head));
  count++;
}

// Real 404 page — Vercel serves dist/404.html with status 404 for unknown URLs.
{
  const { html: body, head } = await render('/__not-found__');
  writeFileSync(join(DIST, '404.html'), buildPage(body, head));
}

// Sitemap generated from the same route list, so it can never drift.
const today = new Date().toISOString().slice(0, 10);
const urls = ROUTES.map(
  (r) =>
    `  <url>\n    <loc>${SITE}${r.path === '/' ? '/' : r.path}</loc>\n    <lastmod>${(r.updated || today).slice(0, 10)}</lastmod>\n    <priority>${r.priority.toFixed(1)}</priority>\n  </url>`,
).join('\n');
writeFileSync(
  join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

console.log(`prerender: ${count} routes + 404.html + sitemap.xml (${ROUTES.length} URLs)`);
