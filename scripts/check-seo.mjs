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
const seenTitles = new Map();
const seenCanonicals = new Map();

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
    if (seenTitles.has(title)) fail(`${clean}: title duplicates ${seenTitles.get(title)}`);
    seenTitles.set(title, clean);
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
  if (canonical) {
    if (seenCanonicals.has(canonical)) fail(`${clean}: canonical duplicates ${seenCanonicals.get(canonical)}`);
    seenCanonicals.set(canonical, clean);
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

// llms.txt must describe the whole site, not a subset. Service pages are
// included now: a new service page that never reaches llms.txt is invisible to
// the answer engines that read this file as the site's map.
const llmsPath = join(DIST, 'llms.txt');
const llmsFullPath = join(DIST, 'llms-full.txt');
if (!existsSync(llmsPath)) fail('llms.txt was not generated');
else {
  const llms = readFileSync(llmsPath, 'utf8');
  const expected = [...seenPaths].filter((p) => /\/(areas|guides|blog|services)\/[^/]+$/.test(p));
  for (const p of expected) {
    if (!llms.includes(`${SITE}${p}`)) fail(`llms.txt does not list ${p}`);
  }
  if (/\\uFFFD/.test(llms) || llms.includes('\uFFFD')) fail('llms.txt contains a replacement character (encoding damage)');
  if (/\\u[0-9a-fA-F]{4}/.test(llms)) fail('llms.txt contains a literal escape sequence');
  if (!existsSync(llmsFullPath)) fail('llms-full.txt was not generated');
}

// llms-full.txt claims to be the complete reference. Hold it to that: every URL
// in the sitemap must appear in it.
if (existsSync(llmsFullPath)) {
  const full = readFileSync(llmsFullPath, 'utf8');
  for (const p of seenPaths) {
    if (!full.includes(`${SITE}${p}`)) fail(`llms-full.txt does not list ${p}`);
  }
  if (full.includes('\uFFFD')) fail('llms-full.txt contains a replacement character (encoding damage)');
}

// The RSS feed doubles as a sitemap. Every guide and story must be in it,
// and every item must point at a URL that is in sitemap.xml.
const feedPath = join(DIST, 'feed.xml');
if (!existsSync(feedPath)) fail('feed.xml was not generated');
else {
  const feed = readFileSync(feedPath, 'utf8');
  const links = [...feed.matchAll(/<link>([^<]+)<\/link>/g)].map((m) => m[1]).slice(1);
  const articles = [...seenPaths].filter((p) => /^\/(guides|blog)\/[^/]+$/.test(p));
  for (const p of articles) if (!links.includes(`${SITE}${p}`)) fail(`feed.xml does not list ${p}`);
  for (const l of links) if (!seenPaths.has(new URL(l).pathname)) fail(`feed.xml links to ${l}, not in sitemap`);
}

// AI crawlers must be explicitly allowed. A later `User-agent: *` Disallow
// would otherwise cut the site out of citations without anyone noticing.
const robotsPath = join(DIST, 'robots.txt');
if (!existsSync(robotsPath)) fail('robots.txt was not copied into dist/');
else {
  const robots = readFileSync(robotsPath, 'utf8');
  /** Split robots.txt into { agents, rules } groups. */
  const groups = [];
  let current = null;
  for (const rawLine of robots.split(/\r?\n/)) {
    const line = rawLine.replace(/#.*$/, '').trim();
    if (!line) { current = null; continue; }
    const m = line.match(/^([A-Za-z-]+):\s*(.*)$/);
    if (!m) continue;
    const key = m[1].toLowerCase();
    const value = m[2].trim();
    if (key === 'user-agent') {
      if (!current || current.rules.length) {
        current = { agents: [], rules: [] };
        groups.push(current);
      }
      current.agents.push(value);
    } else if (current) {
      current.rules.push({ key, value });
    }
  }

  const REQUIRED_BOTS = [
    'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
    'ClaudeBot', 'Claude-SearchBot',
    'PerplexityBot',
    'Googlebot', 'Google-Extended',
    'Bingbot', 'Applebot', 'Applebot-Extended', 'CCBot',
  ];
  const has = (g, k, v) => g.rules.some((r) => r.key === k && r.value === v);
  for (const bot of REQUIRED_BOTS) {
    const group = groups.find((g) => g.agents.some((a) => a.toLowerCase() === bot.toLowerCase()));
    if (!group) fail(`robots.txt has no explicit group for ${bot}`);
    else if (has(group, 'disallow', '/')) fail(`robots.txt blocks ${bot} with "Disallow: /"`);
    else if (!has(group, 'allow', '/')) fail(`robots.txt group for ${bot} is missing "Allow: /"`);
  }
  if (!/^\s*Sitemap:\s*https?:\/\//im.test(robots)) fail('robots.txt does not declare a Sitemap');
}

// Every service page must be discoverable from the one business entity:
// the homepage OfferCatalog is what search engines and LLMs read as the menu.
const home = readFileSync(join(DIST, 'index.html'), 'utf8');
for (const p of seenPaths) {
  if (!p.startsWith('/services/')) continue;
  if (!home.includes(`${SITE}${p}"`)) fail(`OfferCatalog on the homepage does not list ${p}`);
}

// A link to a route that does not exist is a 404 for a user and a dead end for a crawler.
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
