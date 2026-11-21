# SEO / GEO / AEO audit — jigishakiranshah.in

Audit date: 26 October 2026. Checked against the live deployment and the repository, not against intentions.

**Re-verified 10 November 2026** against the live deployment. Three things below changed after this audit was
written, and the stale figures have been corrected in place:

- The site now serves **69 URLs, not 53** — `/gu`, `/hi`, `/policy-card`, two more area pages (Prahlad Nagar,
  Gandhinagar), four more service pages (keyman, partnership, employer–employee, LIC surrender), two more guides.
- **Cal.com is gone.** `/book` now composes a WhatsApp message and opens the chat; Jigisha confirms the time there.
  The `booking_calendar_loaded` / `booking_calendar_failed` events in `src/lib/analytics.ts` are dead code.
- Apex → `www` is a **308 permanent redirect**, verified with `curl -I`. The "redirect wasn't accessible" claim
  that has circulated in outside audits is wrong; the redirect has been in place and working.

Definitions used here, because the acronyms get mixed up:

- **SEO** — ranking in Google/Bing search results.
- **GEO** (generative engine optimisation) — being cited by ChatGPT, Perplexity, Gemini, Copilot and Google AI
  Overviews.
- **AEO** (answer engine optimisation) — being the *answer*, in a featured snippet, a map pack, or a voice reply.

All three run on the same foundation: real pages, real facts, one identifiable entity. Where they differ is in
format and distribution, and that is what §4 and §5 cover.

---

## 1. Scorecard

| Area | State | Notes |
|---|---|---|
| Prerendered HTML for every route | ✅ | 69 routes rendered at build; crawlers that ignore JS still see full content |
| Per-page title / description / canonical | ✅ | One source of truth: each page's `useSEO` call. Audited: 69/69 self-referencing, no duplicates, no trailing slashes |
| Sitemap | ✅ | Generated from the route list, so it cannot drift. 69 URLs |
| hreflang | ✅ | `/`, `/gu`, `/hi` carry reciprocal `en-IN` / `gu-IN` / `hi-IN` + `x-default`; verified in live HTML |
| robots.txt | ✅ | AI crawlers explicitly allowed |
| Structured data | ✅ | WebSite, LocalBusiness+FinancialService+InsuranceAgency, Person, Service, FAQPage, Article, BlogPosting, BreadcrumbList |
| Entity consistency | ✅ (fixed today) | Area pages no longer invent 12 duplicate agencies |
| `llms.txt` / `llms-full.txt` | ✅ (fixed today) | Now generated from content at build |
| Local landing pages | ✅ | 14 real area pages with maps and local FAQs |
| Lead capture | ⚪ none by design | Forms open WhatsApp; nothing stored. See `docs/LEAD-CAPTURE.md` |
| Traffic | ❌ | ~16 clicks / 28 days (28 days to 8 Oct 2026). Nothing ranks except brand, home and contact |
| Citations / GBP | ❌ unknown | No evidence of claimed listings. See `docs/CITATIONS.md` |
| Weekly content | ⚠️ | 5 stories, 12 guides — good depth, published in bursts |
| Internal linking | ⚠️ (improved today) | Footer was missing 2 services and 6 areas |
| Core Web Vitals | ⚠️ not measured | Fonts self-hosted and hero is a 64 KB WebP — both fixed. Remaining weight is the JS bundle; nobody has run field data yet |

---

## 2. Sitemap inventory

`https://www.jigishakiranshah.in/sitemap.xml` — 69 URLs, regenerated on every build by `scripts/prerender.mjs`.

| Group | Count | URLs |
|---|---|---|
| Home | 1 | `/` |
| Language landing pages | 2 | `/gu`, `/hi` |
| Services hub | 1 | `/services` |
| Product pages | 13 | life-insurance, family-financial-protection, term-insurance, retirement, child-education, wealth-creation, money-back, health-insurance, corporate-insurance, business-insurance-gidc-vatva, keyman-insurance, partnership-insurance, employer-employee-insurance |
| Servicing pages | 8 | policy-review-claims, lic-policy-revival, nominee-change, lic-policy-tracing, nri-lic-services, lic-policy-loan, lic-address-name-change, lic-surrender |
| Areas hub | 1 | `/areas` |
| Area pages | 14 | shela, south-bopal, bopal, satellite, sg-highway, science-city, vastrapur, ambawadi, maninagar, naranpura, gota, chandkheda, prahlad-nagar, gandhinagar |
| Guides hub + guides | 13 | 11 comparisons/persona/process guides + 1 document checklist + 1 revival-vs-surrender-vs-paid-up |
| Blog hub + posts | 6 | 5 client stories |
| Tools & trust | 10 | about, reviews, contact, book, protection-check, calculators, resources, gallery, privacy, policy-card |

**Fixed today:** `/gallery` existed in the app but was missing from `ROUTES` — it 404'd on production and was
absent from the sitemap, while the footer linked to it. Now prerendered, indexed, and in the sitemap.

**Deliberately excluded:** `/404` (noindex) and any query-string variant (`?objective=…`) — those canonicalise to
the clean path.

---

## 3. Technical findings

### Canonical audit — 26 Oct 2026 (all 53 pages)

| Check | Result |
|---|---|
| Missing canonical | 0 |
| Canonical not on `https://www.` | 0 |
| Canonical with a trailing slash | 0 |
| Canonical that does not match the page's own URL | 0 |
| Two pages sharing a canonical | 0 |
| Two pages sharing a `<title>` | 0 |
| Two pages sharing a meta description | 0 |
| `og:url` disagreeing with canonical | 0 |
| Title length | 46–64 chars (median 60) |
| Description length | 112–160 chars (median 149) |

Canonicals were already correct, so nothing needed changing. They are now **enforced**: `scripts/check-seo.mjs`
fails the build on a missing/mismatched/duplicated canonical or a duplicated title, so a future page cannot
silently break them. The one genuine risk was structural, not visible: with 53 pages generated from data files, a
copy-pasted page is far more likely to inherit the previous page's canonical than to have none at all.

### Shipped today

1. **12 live pages had visible escape codes.** `\u2605`, `\u2013`, `\u2192` were written inside JSX text rather than
   in a string literal, so every area page rendered `5.0\u2605 Google Reviews`. Confirmed in production HTML before
   the fix. This is the kind of thing that quietly destroys trust in a "premium" site.
2. **Entity duplication removed.** Each area page emitted its own `InsuranceAgency` with a different name. Twelve
   competing entities is worse than one strong one. Area pages now emit `Service` with `provider: {@id}` pointing at
   the single `#business` node on the homepage.
3. **`OfferCatalog` added** to the business node — nine services, each with its own URL, so search engines and LLMs
   can see the full menu from one entity.
4. **`sameAs` now includes the Google Business Profile.** The GBP is the strongest entity confirmation available; it
   was missing from the schema.
5. **`llms.txt` regenerated on every build.** The static files were 6 months stale and had already drifted: 6 of 12
   area pages, 2 of 7 guides, no calculators/gallery, plus a literal `\u2019`.
6. **Homepage title now leads with the query.** `LIC Agent in Ahmedabad | Jigisha Kiran Shah, 2x MDRT` instead of
   brand-first. Search Console shows non-branded impressions landing on `/` with zero clicks — a title problem.
   `useSEO` now appends the brand only when it is absent, so no double-brand titles.
7. **Footer links every service and every area**, generated from the data file so it cannot fall behind again.

### Open technical items

| Item | Impact | Effort | Note |
|---|---|---|---|
| `aggregateRating` on LocalBusiness | ✅ done | — | Removed from the business node entirely (verified in live HTML), so the self-serving-rating risk is gone. The 5.0 and the review count now live in visible page content, where Google permits them. |
| Blog posts have no FAQ block | ✅ done | — | Stories now emit `FAQPage` (verified live on `/blog/*`) |
| Hero image | ✅ done | — | Now `<picture>`: 64 KB WebP for modern browsers, JPEG fallback, explicit `width`/`height` (610×762), `loading="eager"`. Verified live. |
| Google Fonts are render-blocking | ✅ done | — | Self-hosted `/fonts/*.woff2` with `font-display: swap`; deliberately not preloaded because preloading raced the hero for bandwidth |
| 317 KB main JS bundle | Low-medium | 1 day | Route splitting is in place; the rest is component weight. Not urgent at this traffic level. |
| `hreflang` | ✅ done | — | `/gu` and `/hi` shipped, so the reciprocal `en-IN` / `gu-IN` / `hi-IN` + `x-default` set is now required and present on all three |
| No FAQ on `/areas` hub | ✅ done | — | Hub now emits `FAQPage`; `/services` hub is the one still missing it |

---

## 4. AEO — the answer block standard

Every page that targets a question should open with the answer, not with a preamble. AI engines lift the first
40–60 words; Google uses the same passage for snippets. Use this shape under the H1:

```markdown
**{Direct answer in one sentence, naming the entity and the place.}**
{One supporting sentence with a number, a date or a specific condition.}
```

Examples already on the site, and ones to copy:

> **Jigisha Kiran Shah is a senior LIC advisor in Shela, Ahmedabad, practising since 2004.**
> She is a two-time MDRT achiever (2023 and 2024) and has served more than 2,700 families with a 5.0-star Google
> rating.

Rules:

1. **Name the entity in the first sentence.** "She" and "we" are unusable in a citation.
2. **One idea per H2, phrased as the question.** "How much term insurance do I need?" not "Coverage considerations".
3. **Numbers with units and dates.** "₹1 crore", "since 2004", "19 days", "updated October 2026". Vague claims are
   not quotable.
4. **No hedging.** "May vary by age" belongs in a second sentence, not the first.
5. **Answer the objection in the same block.** Cost, eligibility, "is this a scam", "do I need to switch agents".
6. **Link to the official source** (LIC, IRDAI, Bima Bharosa) near any product claim. It is a trust signal for both
   Google and LLMs, and it protects against being classified as promotional content.

Pages that already meet the standard: `/`, `/services/*`, `/areas/*`, `/guides/*`, `/blog/*`, `/areas`.
Pages that do not: `/services` (hub — no `FAQPage`), `/reviews`, `/resources`. Verified live 10 Nov 2026.

---

## 5. GEO — getting cited by AI answer engines

What is in place:

- **AI crawlers explicitly allowed** in `robots.txt` — the full current set: OpenAI (GPTBot, OAI-SearchBot,
  ChatGPT-User), Anthropic (ClaudeBot, Claude-SearchBot, Claude-Web, anthropic-ai), Perplexity (PerplexityBot,
  Perplexity-User), Google (Googlebot, Google-Extended), Bingbot, Apple (Applebot, Applebot-Extended),
  DuckDuckGo (DuckAssistBot), Meta, Amazon, Common Crawl, Cohere, Mistral, AI2 and others. No crawl-delay.
  `npm run check:seo` fails the build if a required agent loses its `Allow: /`, so a future `User-agent: *`
  rule can never silently cut the site out of citations.
- **`llms.txt` and `llms-full.txt`** at the domain root, served as `text/plain`, generated at build from the
  same arrays that produce the routes. `llms-full.txt` now carries the complete site map (every service,
  area, guide and story). The build fails if either file omits a URL that is in the sitemap.
- **Prerendered HTML** — most AI crawlers do not execute JavaScript. This is the single most important GEO decision
  on the site, and it was already right.
- **Entity graph** with stable `@id`s, `sameAs` links, `knowsAbout`, `areaServed`, `hasOfferCatalog`.
- **FAQ blocks in schema matching the visible text** (Google requires the match; LLMs benefit from it too).

What is missing, in order of value:

1. **Third-party corroboration.** LLMs cite sources they find repeatedly and independently. Right now almost every
   fact about this practice originates on this website. Citations (`docs/CITATIONS.md`), a real GBP, LinkedIn,
   YouTube descriptions and local press are what turn "a website that says so" into "a known advisor".
2. **A Wikipedia-shaped identity is not the goal** — for a local practitioner it is unattainable and unnecessary.
   The realistic target is: GBP + 8 directories + LinkedIn + YouTube + 2 local mentions, all saying the same thing.
3. **Freshness signals.** Add an "Updated {month year}" line to every guide and story (guides already carry
   `updated` in schema; show it on the page). LLMs weight recency for "best/current" queries.
4. **Gujarati and Hindi content.** ✅ Shipped — `/gu` and `/hi` are live, prerendered, hreflang-linked, and in the
   sitemap. Gujarati-language models have almost no local insurance content to cite, so this remains a
   disproportionate GEO asset; the next step is two or three `/gu` guides, not more landing pages.

### Monthly AI visibility check

Ask the same eight questions of Google AI Mode, ChatGPT search, Perplexity, Copilot and Gemini. Log date, engine,
cited (yes/no), URL cited, competitor named.

1. Best LIC agent in Shela Ahmedabad
2. LIC advisor near South Bopal
3. How much term insurance do I need in Ahmedabad
4. How to revive a lapsed LIC policy in Ahmedabad
5. Who can help with a LIC death claim in Ahmedabad
6. Jeevan Akshay VII vs Jeevan Umang for retirement
7. LIC plans for child education Ahmedabad
8. Who is Jigisha Kiran Shah

Track referrals from `chatgpt.com`, `perplexity.ai`, `copilot.microsoft.com`, `gemini.google.com` in Vercel
Analytics → Referrers. Today the expected answer to most of these is a competitor or a generic insurance portal;
that is the gap this work is meant to close.

---

## 6. Competitor position (live check, 26 October 2026)

All six competitor sites responded. Checked for the things that decide local search and AI citation outcomes.

| Site | HTTP | JSON-LD blocks | WhatsApp entry points | Phone links | Forms | Booking |
|---|---|---|---|---|---|---|
| pratiklic.com | 200 | 0 | 39 | 3 | 1 | none |
| ambikaassociates.co.in | 200 | 1 | 3 | 5 | 0 | none |
| masterinsurances.com | 200 | 0 | 0 | 4 | 1 | none |
| shashwatinvestment.com | 200 | 0 | 0 | 1 | 0 | none |
| joinasagent.in | 200 | 0 | 0 | 1 | 0 | none |
| ajay-g-pandey-lic.vercel.app | 200 | 3 | 6 | 2 | 1 | none |
| **jigishakiranshah.in** | 200 | 4 | 10 | 3 | 1 (+ call-back on 21 pages) | **WhatsApp form** |

**Read:** on technical SEO/GEO this site is ahead of every competitor — schema depth, prerendering, 14 area pages,
`llms.txt`, a WhatsApp booking form. None of them have dedicated booking; only one has meaningful structured data.

So the gap is **not** the website. Which is exactly why "the website isn't giving us leads" is the wrong diagnosis
and why the off-site work in `docs/CITATIONS.md` and the content plan matter more than another redesign.

### What they do better (worth borrowing, selectively)

- **pratiklic.com — 39 WhatsApp entry points.** Almost every block ends in a chat link. Ours has 6+ and now a
  call-back form; auditing every section for a next action is still worthwhile.
- **ambikaassociates.co.in — downloadable claim forms** and multi-insurer breadth. We have `/resources` with links;
  hosting the actual LIC PDFs (with a "check the current version" note) would earn long-tail traffic.
- **shashwatinvestment.com — calculator suite** (SIP, education, retirement, marriage, vacation, dream house). We
  have two. Two more (loan-vs-cover, pension-gap) would match them.
- **joinasagent.in — "Important links" hub and Achievers/Gallery.** `/resources` and `/gallery` now cover this.
- **ajay-g-pandey-lic — a "Plan Finder"** and a chatbot. Ours (`/protection-check`) is stronger; a chatbot is not
  worth the accuracy risk.

### What not to copy

- Vanity counters ("20,000+ clients", "9,000 happy claims") — unverifiable and, in the claims case, compliance-risky.
- Keyword-stuffed business names.
- "100% claim settlement" style claims.

---

## 7. Measurement

| What | Where | Cadence |
|---|---|---|
| Non-branded clicks and impressions | Search Console → Performance, filter out `jigisha` | Weekly |
| Queries with impressions and 0 clicks | Search Console → Queries | Weekly — rewrite those titles |
| Indexed vs discovered-not-indexed | Search Console → Pages | Monthly |
| Enquiries received on WhatsApp | WhatsApp chat list | Weekly |
| GBP calls / directions / website clicks | Business Profile → Performance | Monthly |
| AI citations | §5 checklist | Monthly |
| Core Web Vitals | PageSpeed Insights, mobile, field data | After each deploy |

**Baseline to beat (28 days to 8 Oct 2026):** ~16 clicks, ~430 impressions, brand-dominated.
Target by day 90: **≥100 non-branded clicks/month, ≥12 stored leads/month, ≥30 GBP calls/month.**

---

## 8. Risks and compliance notes

1. **Rating markup** — resolved: `aggregateRating` was removed from the schema (see §3). Keep the visible review
   count honest instead, and keep collecting genuine reviews.
2. **Plan accuracy** — LIC withdraws plans. Any page naming a plan must be checked against the current brochure
   before it receives paid traffic.
3. **"Advice" framing** — the site correctly uses "subject matter of solicitation" and avoids guaranteed-return
   language. Keep that in any new page, especially the revival and claim-documents pages where it is tempting to
   promise outcomes.
4. **Area pages** — 12 pages is safe. Do not scale to 40 thin location pages; that is the doorway-page pattern
   Google penalises, and it would also dilute the entity.
5. **Lead data** — name, phone, goal only. Delete non-converting rows after 12 months. The privacy note in
   `GROWTH-PLAYBOOK.md` §5a still applies.

---

## 9. Senior review — 21 November 2026 (what is actually causing the problem)

Method: read the repository, ran `npm run build` (69 routes, `check:seo` passes, 0 warnings), checked the live
site's status codes and redirects, and rendered the pages at desktop and 390 px width. Search Console and GBP data
were not available, so traffic figures below are the ones already recorded in §7.

**Root cause: not on-page SEO.** Technical SEO, schema, prerendering, `llms.txt` and AI-crawler access are all
sound. The ~16 clicks / 28 days is an authority and entity problem (few third-party mentions, unverified
citations, thin review/GBP signal), plus a conversion problem once visitors do arrive.

| # | Issue | Impact | Status |
|---|---|---|---|
| 1 | Header CTA was "Book Free Consultation" → `/book` (a form), the one path that converted 0 times. WhatsApp, the path that did convert, was not in the header | High (conversion) | Fixed: header, mobile menu, hero, process and why-us CTAs open WhatsApp with page-aware prefill |
| 2 | Floating WhatsApp label only appeared on hover (invisible on touch/desktop-idle) | Medium | Fixed: label always visible |
| 3 | Contact page led with Phone; WhatsApp was one of five equal cards; phone number was a required form field | High | Fixed: full-width WhatsApp card first; phone now optional |
| 4 | Jargon in the visible copy (MDRT, HUF, MWP, corpus, sum assured, "wealth architecture", "concierge support", "customer services: nomination change, minor to major…") | High (bounce, and AI engines quote plain sentences more readily) | Fixed on home, hero, picker, services hub, footer, about, FAQ, contact. Service/guide body copy still uses LIC terms, see below |
| 5 | `/services` said "15 plans and services"; the site has 21 | Medium (AEO: a wrong number gets quoted) | Fixed: count now comes from `SERVICE_PAGES.length` |
| 6 | `/services` rendered a visible FAQ with no `FAQPage` schema | Medium | Fixed |
| 7 | No machine-readable contact method in schema; AI assistants asked "how do I contact her" had only prose | Medium (GEO) | Fixed: `contactPoint` with phone/WhatsApp number, hours, languages |
| 8 | `priceRange: "Free Consultation"` is not a valid price range | Low | Removed |
| 9 | FAQ had no answer to the questions people actually ask: "can I just WhatsApp?", "do I have to visit?", "Hindi/Gujarati?" | Medium (AEO) | Added three; contact answer now leads with WhatsApp |

### Still open (highest value first)

1. **Off-site entity work** (`docs/CITATIONS.md`): verified GBP with the WhatsApp number as a contact method, a
   steady flow of genuine reviews, LinkedIn/YouTube descriptions that repeat the same facts, two local mentions.
2. **Plain-language pass on `servicePages.ts` and `guides.ts`** (about 2,300 lines): the product names must stay
   (people search them), but each page should open with a one-line plain explanation before the term.
3. **A plain-English glossary page** ("What does sum assured / maturity / nominee / lapsed mean?"): strong
   long-tail and AI-citation target, and it removes the need for jargon explanations everywhere else.
4. **Gujarati guides** (two or three) rather than more landing pages.
5. Measure: GBP "message" clicks and WhatsApp chats per week are now the lead metric. Vercel events
   `header-whatsapp`, `hero-whatsapp`, `process-whatsapp`, `whyus-whatsapp`, `contact-whatsapp-primary` and
   `services-whatsapp` replace the old `*-book` events.
