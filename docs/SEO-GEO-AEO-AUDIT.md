# SEO / GEO / AEO audit — jigishakiranshah.in

Audit date: 26 October 2026. Checked against the live deployment and the repository, not against intentions.

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
| Prerendered HTML for every route | ✅ | 46 routes rendered at build; crawlers that ignore JS still see full content |
| Per-page title / description / canonical | ✅ | One source of truth: each page's `useSEO` call |
| Sitemap | ✅ | Generated from the route list, so it cannot drift. 46 URLs |
| robots.txt | ✅ | AI crawlers explicitly allowed |
| Structured data | ✅ | WebSite, LocalBusiness+FinancialService+InsuranceAgency, Person, Service, FAQPage, Article, BlogPosting, BreadcrumbList |
| Entity consistency | ✅ (fixed today) | Area pages no longer invent 12 duplicate agencies |
| `llms.txt` / `llms-full.txt` | ✅ (fixed today) | Now generated from content at build |
| Local landing pages | ✅ | 12 real area pages with maps and local FAQs |
| Lead capture | ⚠️ **broken in production** | No destination configured. See `docs/LEADS-ROOT-CAUSE.md` |
| Traffic | ❌ | ~16 clicks / 28 days. Nothing ranks except brand, home and contact |
| Citations / GBP | ❌ unknown | No evidence of claimed listings. See `docs/CITATIONS.md` |
| Weekly content | ⚠️ | 5 stories, 7 guides — good depth, published in bursts |
| Internal linking | ⚠️ (improved today) | Footer was missing 2 services and 6 areas |
| Core Web Vitals | ⚠️ not measured | Render-blocking Google Fonts, 274 KB hero JPEG, 317 KB JS bundle |

---

## 2. Sitemap inventory

`https://www.jigishakiranshah.in/sitemap.xml` — 46 URLs, regenerated on every build by `scripts/prerender.mjs`.

| Group | Count | URLs |
|---|---|---|
| Home | 1 | `/` |
| Services hub | 1 | `/services` |
| Service pages | 9 | term-insurance, retirement, child-education, wealth-creation, money-back, health-insurance, corporate-insurance, business-insurance-gidc-vatva, policy-review-claims |
| Areas hub | 1 | `/areas` |
| Area pages | 12 | shela, south-bopal, bopal, satellite, sg-highway, science-city, vastrapur, ambawadi, maninagar, naranpura, gota, chandkheda |
| Guides hub + guides | 8 | 7 comparisons/persona guides |
| Blog hub + posts | 6 | 5 client stories |
| Tools & trust | 8 | about, reviews, contact, book, protection-check, calculators, resources, gallery |

**Fixed today:** `/gallery` existed in the app but was missing from `ROUTES` — it 404'd on production and was
absent from the sitemap, while the footer linked to it. Now prerendered, indexed, and in the sitemap.

**Deliberately excluded:** `/404` (noindex) and any query-string variant (`?objective=…`) — those canonicalise to
the clean path.

---

## 3. Technical findings

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
| `aggregateRating` on LocalBusiness | Medium risk | 10 min | Google's review policy discourages self-serving ratings even when the reviews are real. It has not caused a problem, but it is the most likely source of a structured-data warning. Keep `reviewCount` accurate or move the rating to a `Review`-free presentation. |
| Blog posts have no FAQ block | Low | 1 h | Guides have `FAQPage`; stories do not. Adding 3 post-specific FAQs per story would give AI engines clean answers to quote. |
| Hero image is a 274 KB JPEG | Medium | 1 h | Convert to WebP/AVIF and add `width`/`height` to stop layout shift. Likely the largest LCP win. |
| Google Fonts are render-blocking | Medium | 2 h | Self-host the two families, subset to Latin + Gujarati, `font-display: swap`, preload the display face. |
| 317 KB main JS bundle | Low-medium | 1 day | Route splitting is in place; the rest is component weight. Not urgent at this traffic level. |
| No `hreflang` (single language) | None | — | Correct to omit. Add only when `/gu` ships. |
| No FAQ on `/areas` hub | Low | 30 min | The hub is currently a link list. Add 5 city-level FAQs. |

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

Pages that already meet the standard: `/`, `/services/*`, `/areas/*`, `/guides/*`, `/blog/*`.
Pages that do not: `/services` (hub), `/areas` (hub), `/reviews`, `/resources`.

---

## 5. GEO — getting cited by AI answer engines

What is in place:

- **AI crawlers allowed** in `robots.txt`: GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot,
  anthropic-ai, Google-Extended, Bingbot, Applebot, CCBot, Diffbot, YouBot. No crawl-delay.
- **`llms.txt` and `llms-full.txt`** at the domain root, served as `text/plain`, now generated at build.
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
4. **Gujarati content.** Gujarati-language models and voice assistants have almost no local insurance content to
   cite. One good `/gu` page is a disproportionate GEO win.

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
| **jigishakiranshah.in** | 200 | 4 | 10 | 3 | 1 (+ call-back on 21 pages) | **Cal.com** |

**Read:** on technical SEO/GEO this site is ahead of every competitor — schema depth, prerendering, 12 area pages,
`llms.txt`, live booking. None of them have booking; only one has meaningful structured data.

So the gap is **not** the website. Which is exactly why "the website isn't giving us leads" is the wrong diagnosis
and why fixing `docs/LEADS-ROOT-CAUSE.md` §1 and §4 matters more than another redesign.

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
| Leads actually stored | `GET /api/lead` + lead sheet | Weekly |
| GBP calls / directions / website clicks | Business Profile → Performance | Monthly |
| AI citations | §5 checklist | Monthly |
| Core Web Vitals | PageSpeed Insights, mobile, field data | After each deploy |

**Baseline to beat (28 days to 8 Oct 2026):** ~16 clicks, ~430 impressions, brand-dominated.
Target by day 90: **≥100 non-branded clicks/month, ≥12 stored leads/month, ≥30 GBP calls/month.**

---

## 8. Risks and compliance notes

1. **Rating markup** — see §3. Keep `reviewCount` truthful.
2. **Plan accuracy** — LIC withdraws plans. Any page naming a plan must be checked against the current brochure
   before it receives paid traffic.
3. **"Advice" framing** — the site correctly uses "subject matter of solicitation" and avoids guaranteed-return
   language. Keep that in any new page, especially the revival and claim-documents pages where it is tempting to
   promise outcomes.
4. **Area pages** — 12 pages is safe. Do not scale to 40 thin location pages; that is the doorway-page pattern
   Google penalises, and it would also dilute the entity.
5. **Lead data** — name, phone, goal only. Delete non-converting rows after 12 months. The privacy note in
   `GROWTH-PLAYBOOK.md` §5a still applies.
