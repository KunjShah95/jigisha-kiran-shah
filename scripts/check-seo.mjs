/**
 * Post-build SEO integrity check.
 *
 * Every failure here is a bug that was live at some point:
 *   - literal `\u2605` rendered on all 12 area pages
 *   - /gallery linked in the footer but 404ing and missing from the sitemap
 *   - llms.txt listing 6 of 12 area pages
 *   - malformed JSON-LD taking a page out of rich results
 *
 * Runs at the end of `npm run build`, after prerender. Exits non-zero so a
 * broken deploy never reaches production.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(process.cwd(), 'dist');
const SITE = 'https://www.jigishakiranshah.in';

const failures = [];
const warnings = [];
const fail = (m) => failures.push(m);
const warn = (m) => warnings.push(m);

const sitemap = readFileSync(join(DIST, 'sitemap.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (locs.length === 0) fail('sitemap.xml has no <loc> entries');

const fileFor = (pathname) =>
  pathname === '/' ? join(DIST, 'index.html') : join(DIST, pathname.slice(1), 'index.html');

const seenPaths = new Set();

for (const loc of locs) {
  const { pathname } = new URL(loc);
  const clean = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  if (seenPaths.has(clean)) fail(`sitemap: duplicate URL ${clean}`);
  seenPaths.add(clean);

  const file = fileFor(clean);
  if (!existsSync(file)) {
    fail(`sitemap lists ${clean} but ${file} was not prerendered`);
    continue;
  }
  const html = readFileSync(file, 'utf8');

  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim();
  if (!title) fail(`${clean}: missing <title>`);
  else {
    if (title.length > 70) warn(`${clean}: title is ${title.length} chars (will truncate): ${title}`);
    if (title.length < 15) warn(`${clean}: title is very short: ${title}`);
  }

  const desc = html.match(/<meta\s+name="description"\s+content="([^"]*)"/)?.[1];
  if (!desc) fail(`${clean}: missing meta description`);
  else if (desc.length < 70 || desc.length > 175) {
    warn(`${clean}: description is ${desc.length} chars (aim 70–160)`);
  }

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canonical !== `${SITE}${clean === '/' ? '/' : clean}`) {
    fail(`${clean}: canonical is ${canonical || 'missing'}, expected ${SITE}${clean}`);
  }

  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1s !== 1) fail(`${clean}: ${h1s} <h1> tags (expected exactly 1)`);

  // Escape sequences belong in code, never in rendered text.
  const escapes = html.match(/\\u[0-9a-fA-F]{4}/g);
  if (escapes) fail(`${clean}: literal escape ${escapes[0]} in rendered HTML`);

  for (const [, raw] of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(raw);
    } catch (e) {
      fail(`${clean}: invalid JSON-LD (${e.message})`);
    }
  }

  if (html.includes('name="robots" content="noindex')) fail(`${clean}: sitemap URL is marked noindex`);
}

// llms.txt must describe the whole site, not a subset.
const llmsPath = join(DIST, 'llms.txt');
if (!existsSync(llmsPath)) fail('llms.txt was not generated');
else {
  const llms = readFileSync(llmsPath, 'utf8');
  const expected = [...seenPaths].filter((p) => /\/(areas|guides|blog)\/[^/]+$/.test(p));
  for (const p of expected) {
    if (!llms.includes(`${SITE}${p}`)) fail(`llms.txt does not list ${p}`);
  }
  if (/\uFFFD/.test(llms)) fail('llms.txt contains a replacement character (encoding damage)');
  if (/\\u[0-9a-fA-F]{4}/.test(llms)) fail('llms.txt contains a literal escape sequence');
  if (!existsSync(join(DIST, 'llms-full.txt'))) fail('llms-full.txt was not generated');
}

// A link to a route that does not exist is a 404 for a user and a dead end for a crawler.
const home = readFileSync(join(DIST, 'index.html'), 'utf8');
const internal = new Set(
  [...home.matchAll(/href="(\/[^"#?]*)/g)].map((m) => (m[1] === '/' ? '/' : m[1].replace(/\/$/, ''))),
);
for (const link of internal) {
  if (link.startsWith('/assets') || link.startsWith('/api')) continue;
  // Files (llms.txt, og-image.jpg, .vcf, svg icons) are not routes.
  if (/\.[a-z0-9]{2,5}$/i.test(link)) continue;
  if (!seenPaths.has(link)) fail(`homepage links to ${link}, which is not in the sitemap`);
}

for (const w of warnings.slice(0, 15)) console.warn(`  warn  ${w}`);
if (warnings.length > 15) console.warn(`  … and ${warnings.length - 15} more warning(s)`);
if (failures.length) {
  console.error(`\nSEO check FAILED — ${failures.length} problem(s):`);
  for (const f of failures) console.error(`  fail  ${f}`);
  process.exitCode = 1;
} else {
  console.log(`SEO check passed — ${seenPaths.size} URLs, ${warnings.length} warning(s).`);
}
