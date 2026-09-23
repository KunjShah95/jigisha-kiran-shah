/**
 * Post-build prerenderer for SEO.
 *
 * This site is a client-side React SPA: without this script every route
 * serves the same homepage shell, so Google only ever indexed `/`
 * (see Search Console Pages report: only / had impressions).
 *
 * The script copies dist/index.html per route and rewrites the
 * crawl-critical head tags (title, description, canonical, OG) plus
 * injects a static content snapshot inside #root (replaced by React on
 * hydrate — same content, not cloaking) and a per-page BreadcrumbList.
 *
 * Run: `node scripts/prerender.mjs` (wired into `npm run build`).
 * Route meta below must mirror the useSEO() calls in src/pages/*.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const SITE = 'https://www.jigishakiranshah.in';
const BRAND = 'Jigisha Kiran Shah';

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const page = (route, { title, description, h1, intro, crumbs }) => ({
  route,
  title,
  description,
  h1,
  intro,
  crumbs,
});

const ROUTES = [
  page('/', {
    title: `${BRAND} | LIC Advisor in Ahmedabad, Shela`,
    description:
      'LIC advisor in Ahmedabad (Shela) — 22+ yrs, 2x MDRT, 5.0★ rated. Term insurance, pension plans & child education for 2,700+ families. Free consultation: +91 98240 25435.',
    h1: 'LIC Advisor in Ahmedabad, Safeguarding Your Wealth & Legacy',
    intro:
      'Senior LIC advisor in Shela, Ahmedabad since 2004. 2-time MDRT achiever (2023 & 2024), 2,700+ families served, 1,000+ claims settled. Term insurance, retirement & pension plans, child education, endowment, ULIP and health cover.',
    crumbs: null,
  }),
  page('/services', {
    title: 'LIC Insurance Plans Ahmedabad | Term, Endowment, ULIP, Pension',
    description:
      'All LIC insurance plans in Ahmedabad: Term (Tech Term, Jeevan Amar), Endowment (Jeevan Labh), Pension (Jeevan Akshay VII), Child plans (Jeevan Tarun), ULIP & health. Free advice: +91 98240 25435.',
    h1: 'LIC Insurance Plans in Ahmedabad',
    intro:
      'Term Life (Tech Term, Jeevan Amar), Endowment (Jeevan Labh), Money-Back, Retirement & Pension (Jeevan Akshay VII, Jeevan Umang), Child Education (Jeevan Tarun), Health (Arogya Rakshak) and Corporate/HUF cover — curated by Jigisha Kiran Shah, 2x MDRT advisor.',
    crumbs: 'Services',
  }),
  page('/about', {
    title: `About ${BRAND} | LIC Advisor Ahmedabad, 2x MDRT`,
    description:
      'Meet Jigisha Kiran Shah — senior LIC advisor in Shela, Ahmedabad. 22+ years since 2004, 2-time MDRT 2023 & 2024, 2,700+ families, 5.0★ Google rating.',
    h1: "LIC Advisor in Ahmedabad, Dedicated to Your Family's Security",
    intro:
      'Jigisha Kiran Shah is a senior LIC advisor based at Orchid Legacy, Applewoods Township, Shela, Ahmedabad since 2004 — 2-time MDRT achiever (2023 & 2024) serving 2,700+ families across Gujarat.',
    crumbs: 'About',
  }),
  page('/reviews', {
    title: 'Client Reviews & Testimonials | 5.0★ LIC Agent Ahmedabad',
    description:
      'Verified reviews for LIC advisor Jigisha Kiran Shah: 5.0★ Google rating, 100+ reviews from 2,700+ Ahmedabad families. Term, pension & child-plan client stories.',
    h1: 'Real Stories, Real LIC Results in Ahmedabad',
    intro:
      'Rated 5.0 stars on Google with 100+ verified reviews. Families across Shela, Bopal, Satellite, SG Highway and all Ahmedabad share how term cover, pension plans and claims support worked for them.',
    crumbs: 'Reviews',
  }),
  page('/contact', {
    title: 'Contact LIC Advisor Ahmedabad | Book Free Consultation',
    description:
      'Contact Jigisha Kiran Shah — LIC advisor in Shela, Ahmedabad. Free consultation: call +91 98240 25435, WhatsApp, or visit Orchid Legacy, Applewoods Township. Mon–Sat 9–6.',
    h1: 'Contact Your LIC Advisor in Ahmedabad',
    intro:
      'Book a free consultation: call or WhatsApp +91 98240 25435, email jkshahlic@gmail.com, or visit Orchid Legacy, D3-1303, Applewoods Township, Shela, Ahmedabad 380058. Open Monday–Saturday, 9 AM–6 PM.',
    crumbs: 'Contact',
  }),
  page('/areas', {
    title: 'Areas Served | LIC Advisor Shela, Bopal, Satellite, SG Highway',
    description:
      'LIC advisor Jigisha Kiran Shah serves Shela, South Bopal, Bopal, Satellite, SG Highway, Science City & all Ahmedabad. Term, pension, child plans & claims. +91 98240 25435.',
    h1: 'LIC Advisor Areas Served Across Ahmedabad',
    intro:
      'Based in Shela at Orchid Legacy, Applewoods Township — serving families across Ahmedabad by phone, WhatsApp, and in-person meetings.',
    crumbs: 'Areas Served',
  }),
  page('/blog', {
    title: 'LIC Stories & Guides for Ahmedabad Families | Term, Pension, Claims',
    description:
      'Real LIC stories & plain-language guides from advisor Jigisha Kiran Shah (22+ yrs, 2x MDRT): term insurance, Jeevan Akshay pension, Jeevan Labh child plans, claims.',
    h1: 'LIC Stories & Guides for Ahmedabad Families',
    intro:
      'True-to-life stories and practical rules from 22 years of advising Ahmedabad families: term cover, pensions, children\u2019s education, and getting claims paid.',
    crumbs: 'Stories & Guides',
  }),
];

const AREAS = [
  ['shela', 'Shela', 'based in Shela itself — office at Orchid Legacy, D3-1303, Applewoods Township. In-person consultations at home or office, plus phone and WhatsApp support.'],
  ['south-bopal', 'South Bopal', 'term cover, retirement planning with Jeevan Akshay VII, and child education plans like Jeevan Tarun. The Shela office is a short drive away.'],
  ['bopal', 'Bopal', 'money-back plans, Jeevan Labh endowment, health cover (Arogya Rakshak, Cancer Cover), and complete claims assistance, 10–20 minutes from Shela.'],
  ['satellite', 'Satellite', 'pension plans, Jeevan Umang whole-life cover, and term insurance top-ups for professionals and business families, by phone, WhatsApp or in-person.'],
  ['sg-highway', 'SG Highway', 'high-value term cover (Tech Term, Jeevan Amar), employer-employee insurance, HUF policies, and retirement annuities for busy professionals.'],
  ['science-city', 'Science City', 'Jeevan Tarun and Children\u2019s Money Back plans with premium-waiver benefits, plus term cover sized to outstanding home loans for young families.'],
];
for (const [slug, name, detail] of AREAS) {
  ROUTES.push(
    page(`/areas/${slug}`, {
      title: `LIC Advisor in ${name}, Ahmedabad | Term, Pension, Child Plans`,
      description: `LIC advisor serving ${name}, Ahmedabad — term insurance, retirement & pension plans, child education and claims support. 22+ yrs, 2x MDRT. +91 98240 25435.`,
      h1: `LIC Advisor in ${name}, Ahmedabad`,
      intro: `Jigisha Kiran Shah serves ${name} families with ${detail}`,
      crumbs: `LIC Advisor ${name}`,
    }),
  );
}

const POSTS = [
  ['the-policy-he-bought-after-the-funeral', 'Term Insurance in Ahmedabad: 5 Nominee Mistakes to Avoid',
    'Term insurance in Ahmedabad: how a missing nominee delayed one LIC claim by 4 months. Free term cover & claims help from Jigisha Kiran Shah: +91 98240 25435.',
    'The policy a Shela family bought after the funeral',
    'A true-to-life story: three LIC policies, one missing nominee, and the 4-month paperwork battle — plus the free one-page rule that prevents it.'],
  ['the-pension-that-arrived-before-the-milk', 'LIC Pension Plans in Ahmedabad: Jeevan Akshay VII Guide',
    'LIC pension plans in Ahmedabad: how Jeevan Akshay VII gives guaranteed monthly income after retirement. Free pension-gap calculation: +91 98240 25435.',
    "The pension that arrived before the milkman's bell",
    'How a retired Ahmedabad teacher turned a lump sum into guaranteed monthly pension with LIC Jeevan Akshay VII — and the 3 numbers every pre-retiree must calculate.'],
  ['jevan-labh-or-the-alarm-clock', 'LIC Jeevan Labh for Child Education in Ahmedabad',
    'LIC Jeevan Labh for child education in Ahmedabad: how a South Bopal father locked his daughter\u2019s college fund. Free consultation: +91 98240 25435.',
    'Jeevan Labh and the alarm clock: why your child\u2019s education plan must fail to tempt you',
    'Why LIC endowment plans like Jeevan Labh work as disciplined education savings — the story of a South Bopal father and a maturity timed to age 18.'],
  ['retirement-planning-ahmedabad-50s-checklist', 'Retirement Planning in Ahmedabad: 5-Step 50s Checklist',
    'Retirement planning in Ahmedabad: the 5-number checklist I run with every 50+ client — expenses, gap, pension, health & corpus. Free review: +91 98240 25435.',
    'Retirement planning at 50: the Satellite engineer who ran the numbers twice',
    'A retired Satellite engineer underestimated his expenses by half. The 5-number retirement checklist — expenses, gap, annuity, health buffer — that fixed it.'],
];
for (const [slug, seoTitle, desc, h1, intro] of POSTS) {
  ROUTES.push(page(`/blog/${slug}`, { title: seoTitle, description: desc, h1, intro, crumbs: seoTitle }));
}

// --- build ---
const template = readFileSync(join(DIST, 'index.html'), 'utf8');
const assetJs = (template.match(/<script[^>]*src="([^"]+\.js)"[^>]*><\/script>/) || [])[1] || '';
const assetCss = (template.match(/<link[^>]*href="([^"]+\.css)"[^>]*>/) || [])[1] || '';

const replaceTag = (html, re, replacement) => {
  if (!re.test(html)) return html;
  return html.replace(re, replacement);
};

let count = 0;
for (const r of ROUTES) {
  if (r.route === '/') continue; // homepage shell is already correct
  const canonical = `${SITE}${r.route}`;
  const fullTitle = `${r.title} | ${BRAND}`;

  let html = template;
  html = replaceTag(html, /<title>.*?<\/title>/s, `<title>${esc(fullTitle)}</title>`);
  html = replaceTag(html, /<meta name="description"[^>]*>/, `<meta name="description" content="${esc(r.description)}" />`);
  html = replaceTag(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`);
  html = replaceTag(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(fullTitle)}" />`);
  html = replaceTag(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(r.description)}" />`);
  html = replaceTag(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}" />`);
  html = replaceTag(html, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(fullTitle)}" />`);
  html = replaceTag(html, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(r.description)}" />`);

  // Per-page breadcrumb JSON-LD (homepage keeps its global LocalBusiness/FAQ blocks)
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: r.crumbs || r.title, item: canonical },
    ],
  };
  html = html.replace(
    '</head>',
    `    <script type="application/ld+json">${JSON.stringify(breadcrumb)}</script>\n  </head>`,
  );

  // Static snapshot: identical promise to the client-rendered page (replaced on hydrate)
  const snapshot = `<main id="seo-snapshot"><h1>${esc(r.h1)}</h1><p>${esc(r.intro)}</p><p><a href="/">Jigisha Kiran Shah — LIC Advisor in Ahmedabad, Shela</a> · Call <a href="tel:+919824025435">+91 98240 25435</a></p></main>`;
  html = html.replace('<div id="root"></div>', `<div id="root">${snapshot}</div>`);

  const outDir = join(DIST, r.route.slice(1));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html);
  count++;
}

console.log(`prerender: ${count} routes written (assets: ${assetJs} ${assetCss})`);
