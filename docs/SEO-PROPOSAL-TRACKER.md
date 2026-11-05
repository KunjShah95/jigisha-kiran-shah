# SEO & Digital Growth Proposal — implementation tracker

Tracks the *SEO Audit & Digital Growth Proposal* (Nov 2026) against what the site actually does. Updated 5 November
2026.

Legend: **DONE** = live in the code · **PARTIAL** = some of it is in place · **OFF-SITE** = has to be done in a
dashboard or by a person, not in this repository · **TODO** = not started.

Related docs: `KEYWORD-MAP.md` (keyword → URL), `SEO-GEO-AEO-AUDIT.md` (technical audit), `CITATIONS.md`
(directories and NAP), `GROWTH-PLAYBOOK.md` (weekly routine), `LEAD-CAPTURE.md` (how forms work).

---

## What changed in this round

| Change | Why (proposal §) |
|---|---|
| New page `/services/life-insurance`: life insurance hub linking to every plan page, with FAQs answering *why is life insurance important* and *how much cover does a family need* | §3 primary + informational keywords, §4 "Life Insurance" page |
| New page `/services/family-financial-protection`: what a family review covers, when to review, life vs health insurance | §4 "Family Financial Protection" page, §3 secondary + informational keywords |
| FAQ *What is business partnership protection?* on `/services/corporate-insurance` | §3 informational keyword, §4 "Business Protection" |
| New area pages `/areas/prahlad-nagar` and `/areas/gandhinagar` | §2 geographic priority |
| New `/privacy` page, linked from the footer and from every enquiry form | §9 privacy policy + consent notice |
| Consent note under every form; removed copy that said details "are saved" (nothing is stored; see `LEAD-CAPTURE.md`) | §9 consent, accuracy |
| Homepage title → *Life Insurance Advisor in Ahmedabad \| Jigisha Kiran Shah, LIC*; new meta description | §5 suggested title/description (kept "LIC" so existing LIC-agent rankings are not given up) |
| Removed hard-coded `aggregateRating` (said 73; page says 70+) from LocalBusiness schema; added `ProfessionalService` type | §6 "no misleading ratings", ProfessionalService schema |
| Optional Microsoft Clarity via `VITE_CLARITY_ID` (production host only); `/privacy` lists it automatically when set | §13 measurement |

Build: 60 prerendered URLs, `npm run build` SEO check passes with 0 warnings.

---

## Section-by-section status

### §2 Target audience & geography

| Item | Status | Where |
|---|---|---|
| Young professionals, couples, parents, business owners, seniors, families | DONE | Service pages + persona guides (`/guides/lic-plans-salaried-employees`, `-business-owners`, `-senior-citizens`) |
| Ahmedabad, Bopal, South Bopal, Satellite, SG Highway | DONE | `/areas/*` |
| Prahlad Nagar, Gandhinagar | DONE | `/areas/prahlad-nagar`, `/areas/gandhinagar` |

### §3 Keyword research

| Item | Status | Notes |
|---|---|---|
| Map keywords to pages | DONE | `KEYWORD-MAP.md` §9 adds the proposal's keywords |
| Validate volume / difficulty | OFF-SITE | Google Keyword Planner (Gujarat) + Search Console queries. Do not invent numbers |

### §4 Website structure

| Proposed page | URL | Status |
|---|---|---|
| Homepage | `/` | DONE |
| About Jigisha | `/about` | DONE |
| Life Insurance | `/services/life-insurance` | DONE (new) |
| Health Insurance | `/services/health-insurance` | DONE |
| Family Financial Protection | `/services/family-financial-protection` | DONE (new) |
| Business Protection | `/services/corporate-insurance`, `/services/business-insurance-gidc-vatva` | DONE |
| Policy Review | `/services/policy-review-claims` | DONE |
| Blog / Resources | `/blog`, `/guides`, `/resources`, `/calculators` | DONE |
| Testimonials | `/reviews` | DONE |
| Contact | `/contact`, `/book` | DONE |

Unique title, description, single H1 and canonical on every page are enforced by `scripts/check-seo.mjs` at build.

### §5 Homepage

| Item | Status | Notes |
|---|---|---|
| SEO title / meta description | DONE | Adapted from the proposal, ≤ 160 chars so the phone CTA is not cut |
| Headline | Not changed | The current H1 (*Is your family's life cover enough?*) was redesigned recently; A/B the proposal's headline against it rather than swapping blind |
| CTAs: consultation, policy review, WhatsApp | DONE | Hero, objective picker, floating WhatsApp, call-back cards |
| Verify experience / credential claims | OFF-SITE | Jigisha to confirm "22+ years", "2,700+ families", "1,000+ claims", MDRT years before each campaign |

### §6 Technical SEO

| Check | Status | Where |
|---|---|---|
| HTTPS + preferred domain | DONE | `vercel.json` redirects apex → `www`, strips trailing slash |
| Search Console | PARTIAL | Verification file `public/google1f87f3a8e55096ba.html` is live. Submit `sitemap.xml` and check coverage monthly |
| GA4 | PARTIAL | Code ready; set `VITE_GA4_ID` in Vercel (Production) and redeploy |
| XML sitemap | DONE | Generated from the route list at build |
| robots.txt | DONE | Search + AI crawlers explicitly allowed |
| Indexing status | OFF-SITE | Search Console → Pages |
| Broken links / 404 | DONE | Build fails on a homepage link to a missing route; real 404 page |
| Canonicals | DONE | Self-referencing, checked at build |
| Titles / descriptions | DONE | Checked at build (unique, length) |
| Mobile layout | DONE | Verified at 390 px, no horizontal scroll |
| Images / Core Web Vitals | PARTIAL | Self-hosted fonts, prerendered HTML. Measure with PageSpeed Insights on the live URL; the main JS chunk is > 500 kB |
| Alt text | DONE | Spot-checked; keep adding alt text to new gallery images |
| Breadcrumbs | DONE | Visible on service/guide/blog/privacy pages + BreadcrumbList JSON-LD |
| Duplicate content | DONE | Duplicate titles/canonicals fail the build |
| Structured data | DONE | Person, LocalBusiness/ProfessionalService/InsuranceAgency, WebSite, BreadcrumbList, Article, BlogPosting, Service, FAQPage. Validate in Google's Rich Results Test after deploy |

### §7 Google Business Profile — OFF-SITE, highest priority

The site links to the profile (`REVIEW_URL` in `src/lib/seo.ts`). Everything else happens in the GBP dashboard:

- [ ] Confirm the profile is claimed and verified by Jigisha.
- [ ] Primary category *Insurance agency*; add *Life insurance agency* if available.
- [ ] Name exactly as on the site, no keywords added to the name (against GBP rules).
- [ ] Address, phone, hours identical to `ADDRESS`, `PHONE_DISPLAY`, `HOURS` in `src/lib/seo.ts`.
- [ ] Services list mirrors `OFFER_CATALOG` in `src/lib/seo.ts`.
- [ ] Website link → `https://www.jigishakiranshah.in/`; WhatsApp/chat enabled where supported.
- [ ] Genuine photographs: office, Jigisha, MDRT events (reuse `/gallery`).
- [ ] One educational post per week (link to a service page or guide).
- [ ] Ask satisfied clients for reviews after a claim or policy delivery. No incentives, no review gating.
- [ ] Reply to every review within a week.
- [ ] Keep NAP consistent across directories — `CITATIONS.md`.

### §8 Content marketing

Proposal topics against current content. Every new article needs a factual and regulatory review before publishing.

| # | Proposed topic | Covered by | Status |
|---|---|---|---|
| 1 | Why every family should review its financial protection plan | `/services/family-financial-protection` | PARTIAL — page live, article TODO |
| 2 | Five things to consider before choosing life insurance | `/services/life-insurance` | PARTIAL — article TODO |
| 3 | Why reviewing your existing policy matters | `/services/policy-review-claims` | PARTIAL — article TODO |
| 4 | Financial protection for young professionals | `/guides/lic-plans-salaried-employees` | DONE |
| 5 | Protecting your business partnership | `/services/corporate-insurance` FAQ | PARTIAL — article TODO |
| 6 | Employer-employee insurance for business owners | `/services/business-insurance-gidc-vatva` | DONE |
| 7 | Children's education planning | `/services/child-education`, `/calculators` | DONE |
| 8 | Life vs health insurance | `/services/family-financial-protection` FAQ | PARTIAL — article TODO |
| 9 | Considerations for business owners | `/guides/lic-plans-business-owners` | DONE |
| 10 | How life changes affect insurance needs | `/services/family-financial-protection` section | PARTIAL — article TODO |

How to add an article: append to `src/data/posts.ts` (story) or `src/data/guides.ts` (explainer). Route, sitemap,
llms.txt and Article/BlogPosting schema follow automatically. Cadence: 2–4 per month.

### §9 Lead generation

| Item | Status |
|---|---|
| Floating WhatsApp, click-to-call | DONE |
| Consultation booking | DONE (`/book`) |
| Policy review enquiry | DONE (objective "Review my existing LIC policies" preselected from review pages) |
| Short contact form, call-back cards | DONE |
| Testimonials | DONE (`/reviews`) |
| Privacy policy + consent notice | DONE (new) |
| No sensitive data in public forms | DONE — forms ask only for name, phone and goal and warn against sharing policy/bank/medical details |

### §10 Social

| Item | Status |
|---|---|
| LinkedIn, YouTube in footer + `sameAs` schema | DONE |
| Instagram, Facebook, WhatsApp Business | OFF-SITE — create or confirm the profiles, then add the URLs to `SAME_AS` in `src/lib/seo.ts` and to the footer |
| Every post links to a page | OFF-SITE — use UTM tags (`?utm_source=linkedin&utm_medium=social`) |

### §11 Backlinks — OFF-SITE

Use `CITATIONS.md` and `CITATIONS-TRACKING.csv`. Only genuine local directories, associations and guest articles; no
paid link packages.

### §12 AI search (AEO/GEO)

| Item | Status |
|---|---|
| Direct-answer FAQs, descriptive headings | DONE |
| Author/professional info, Person schema | DONE |
| Sources cited | DONE (LIC, IRDAI, Bima Bharosa on service pages) |
| `llms.txt` / `llms-full.txt` generated from content | DONE |
| Consistent identity across the web | OFF-SITE — `CITATIONS.md` |

### §13 Analytics

| Tool | Status | To switch on |
|---|---|---|
| Vercel Web Analytics + conversion events | DONE | — |
| GA4 | Code ready | Vercel env `VITE_GA4_ID=G-…`, redeploy. Mark `contact_whatsapp`, `contact_call`, `consultation_form_submit` as key events |
| Microsoft Clarity | Code ready (new) | Vercel env `VITE_CLARITY_ID=…`, redeploy. In Clarity → Settings → Masking keep **Strict** |
| Search Console | Verified | Submit sitemap; link to GA4 |
| GBP performance | OFF-SITE | GBP dashboard → Performance |

Monthly KPI sheet: impressions, clicks, CTR, average position (Search Console); organic sessions (GA4/Vercel);
`contact_whatsapp`, `contact_call`, `consultation_form_submit` counts (Vercel/GA4 events); qualified enquiries
(Jigisha's own count from WhatsApp). Compare with the first month's baseline — do not promise rankings.

### §14 90-day roadmap — where it stands

- **Month 1 (foundation):** technical SEO, homepage, service pages, local pages — done in code. Remaining: set
  `VITE_GA4_ID`, submit sitemap in Search Console, GBP audit (§7).
- **Month 2:** 4 articles from the §8 TODO list; GBP weekly posts; first 10 citations from `CITATIONS.md`.
- **Month 3:** 4 more articles; rewrite titles/descriptions of pages with impressions but CTR < 2 % (Search Console);
  review Clarity recordings of `/contact` and `/book`.

---

## Second proposal (Comprehensive SEO Audit & Growth Strategy) — delta

Most of it repeats the first proposal and is covered above. What was new:

| Item | Status | Notes |
|---|---|---|
| "Live domain did not return a readable page" | Not a site fault | Fetched 5 Nov 2026: home and service pages return full server-rendered HTML with titles and content. The auditor's browser failed, not the site |
| GA4 event names `whatsapp_click`, `phone_click`, `contact_form_submit`, `consultation_request`, `service_page_view` | DONE | `GA4_NAME` map in `src/lib/analytics.ts`. Vercel keeps the old names so its dashboards don't break. Params are page, CTA, objective, service slug — never form contents |
| Enquiry form: preferred contact time | DONE | Optional "Best time to call" on `/contact` (same windows as `/book`) |
| Enquiry form: consent to be contacted | DONE | Consent notice under every form (first round). Not a checkbox: nothing is stored, and the visitor sends the WhatsApp message themselves |
| Spam protection on forms | Not applicable | Forms have no server endpoint; they open WhatsApp |
| WebP images | DONE (hero + about) | Hero 124 KB → 64 KB via `<picture>` with JPEG fallback; about photo 115 KB → 74 KB. Gallery JPEGs still to convert |
| Core Web Vitals targets (LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1) | OFF-SITE | Measure on PageSpeed Insights (field data) after deploy |
| Location consistency: public listings show **Maninagar** and **Shela** | OFF-SITE — **confirm with Jigisha** | The site says Shela (Orchid Legacy, Applewoods). If Maninagar was an earlier office, update or close those listings so every directory shows one address. `/areas/maninagar` stays: it describes a served area, not an office |
| Justdial listing (5.0, 63 ratings) | OFF-SITE | Claim it, align name/address/phone with `src/lib/seo.ts`, then add its URL to `SAME_AS`. Do not copy its rating into schema |
| Find Everything Local listing | OFF-SITE | Same as Justdial — align NAP, then add to `CITATIONS-TRACKING.csv` |
| Ahrefs / Screaming Frog | Optional | Search Console + `npm run check:seo` already cover crawl errors; Ahrefs only adds backlink and difficulty data |
| 12-article calendar (adds NRI families, married couples, pre-retirement) | TODO | Merge with §8 list; NRI article should link to `/services/nri-lic-services` |
| 5–10 genuine referring domains in 90 days | OFF-SITE | `CITATIONS.md` |
