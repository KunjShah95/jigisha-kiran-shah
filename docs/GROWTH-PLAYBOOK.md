# Growth playbook — jigishakiranshah.in

What the website code now handles, and the off-site work that needs Jigisha's
accounts or records. Goal: qualified WhatsApp enquiries, calls and booked
consultations — not traffic for its own sake.

## 1. Already in the code

| Area | What exists |
|---|---|
| SEO | Prerendered HTML for every route, per-page title/description/canonical, sitemap, robots, 8 service pages, 6 area pages, guides, stories |
| AEO / GEO | FAQPage, Person, LocalBusiness/InsuranceAgency, Service, BlogPosting, Breadcrumb schema; `llms.txt` + `llms-full.txt`; AI crawlers allowed |
| CRO | Objective picker on homepage, objective-first forms (name, phone, goal; rest optional), "What happens next" on forms and service pages, page-aware WhatsApp prefills, mobile sticky Call/WhatsApp |
| Trust | IRDAI "subject matter of solicitation" disclaimer in footer, links to LIC / IRDAI / Bima Bharosa on service pages, no "100% claims" or guaranteed-return wording |
| Measurement | Vercel Analytics events (see §4); GA4 loads if `VITE_GA4_ID` is set |

## 1a. Search Console baseline (28 days to 8 Oct 2026)

- ~16 clicks / ~430 impressions. Mostly branded: "jigisha kiran shah" 6 clicks / 80 impressions.
- Only `/`, `/contact` and `/guides` get impressions, so service, area and blog pages are not ranking yet.
- Non-www URLs (`http://jigishakiranshah.in/`, `https://jigishakiranshah.in/contact`) still show up. Live check on 11 Oct 2026: they all 308-redirect to `https://www.`, so Google will merge them over time. Optional: in Vercel → Domains, set the apex to redirect straight to `www` so `http://` takes one hop instead of two.
- Generic queries landing on the homepage with 0 clicks: "retirement planning" (60), "life insurance" (53). Response: retirement page retitled "Retirement Planning in Ahmedabad".
- "jeevan utsav" (8 impressions, no matching page). Response: new guide `/guides/jeevan-utsav-vs-jeevan-umang`.

**Do now in Search Console:**
1. Sitemaps → resubmit `https://www.jigishakiranshah.in/sitemap.xml` (39 URLs after this deploy).
2. URL Inspection → Request indexing for: `/services/retirement`, `/services/term-insurance`, `/services/policy-review-claims`, `/services/child-education`, `/guides/jeevan-utsav-vs-jeevan-umang`, `/areas/shela`.
3. Pages report → check "Discovered – currently not indexed" and "Crawled – currently not indexed". If the service pages are listed there, they need more internal links and external mentions, not more pages.
4. Re-check queries in 4 weeks and compare non-branded impressions with this baseline.

## 2. Verify these claims against records (days 1–14)

Every number below is shown on the site. Keep proof on file; change the site if any is off.

| Claim | Where it appears | Proof to keep |
|---|---|---|
| 22+ years, agent since 2004 | Hero, About, schema | LIC agency appointment letter |
| 2,700+ families | Hero, Reviews, llms.txt | Client/policy count from LIC agent portal |
| 1,000+ claims supported to settlement | WhyUs, FAQ, llms.txt | Claims register / branch records |
| MDRT 2023 & 2024 | Hero, About, Footer, schema | MDRT membership certificates |
| LIC Club membership | Footer, schema | Current club certificate (name the club level if possible) |
| 5.0★, 70+ Google reviews (schema says 73) | Hero, home band, Reviews, schema | Google Business Profile — update `reviewCount` in `src/lib/seo.ts` when it changes |
| ₹100 Cr+ sum assured, 99% satisfaction | `src/data/stats.ts` (not rendered right now) | Delete if not provable |
| Reply hours Mon–Sat 9–6 | Forms "What happens next", FAQ, schema | Confirm real hours |

Also review these product statements with Jigisha:
- **Liability insurance** was listed under Corporate. LIC is a life insurer and does not sell public/product/professional liability cover, so it was removed. If Jigisha arranges it through another licensed insurer, add it back as a referral service, not an LIC plan.
- Plan names and benefits (Jeevan Tarun, Jeevan Akshay VII, Tech Term, Bima Shree, Arogya Rakshak …): check each against the current LIC brochure. Plans get withdrawn and new versions launched.

## 3. Off-site setup (needs owner logins)

1. **Google Search Console** — verify the domain property (the HTML file `public/google1f87f3a8e55096ba.html` is already deployed), submit `https://www.jigishakiranshah.in/sitemap.xml`, request indexing for `/services/policy-review-claims`.
2. **Google Business Profile** — primary category "Insurance agency"; add services matching the service pages; service areas Shela, South Bopal, Bopal, Satellite, SG Highway, Science City; hours; website URL with UTM: `https://www.jigishakiranshah.in/?utm_source=google&utm_medium=organic&utm_campaign=gbp`. Post monthly (one guide or story).
3. **GA4 (optional)** — create a property, then in Vercel → Project → Settings → Environment Variables (Production) add `VITE_GA4_ID=G-XXXXXXX` and redeploy. Mark `contact_whatsapp`, `contact_call`, `consultation_form_submit` as key events.
4. **Bing Webmaster Tools** — import from Search Console (covers Copilot / ChatGPT search, which uses Bing).
5. **Citations (same name, address, phone everywhere)** — Justdial, Sulekha, IndiaMART (business profile), Facebook page, LinkedIn, Apple Business Connect. Use exactly:
   `Jigisha Kiran Shah - LIC Advisor · Orchid Legacy, D3-1303, Applewoods Township, Shela, Ahmedabad, Gujarat 380058 · +91 98240 25435`
6. **Independent mentions** — LIC branch / club newsletters, MDRT member stories, local Shela/Bopal society newsletters, a talk at a local RWA or school PTA on child-education planning. These count for more than directory listings for AI citations.

## 4. Reviews — ethical ask

After a real milestone (policy delivered, claim settled, review meeting), send on WhatsApp:

> Thank you for trusting me with your family's planning. If you were happy with the help, a short Google review would mean a lot: https://share.google/VQAFgVhdk114U2ozd — please don't mention policy numbers or amounts.

Never offer gifts or discounts in exchange for reviews, and never write reviews for clients.

## 5. Measurement — events now sent

| Event | Fires when | Props |
|---|---|---|
| `contact_whatsapp` | Any WhatsApp chat link clicked | `cta` (hero-whatsapp, sticky-whatsapp, objective-term, service-whatsapp, area-whatsapp …), `page` |
| `contact_call` | Any `tel:` link | `cta`, `page` |
| `consultation_form_submit` | Contact or assessment form sent | `form` (contact / assessment), `objective` |
| `objective_select` | Homepage goal card opened | `objective` |
| `share_whatsapp` | Article shared on WhatsApp (not a lead) | `page` |
| `contact_email`, `directions_click` | Email / map links | `cta`, `page` |

Every WhatsApp message arrives with a first line naming the goal or page, so Jigisha can log
the source. Log every enquiry in `docs/lead-sheet-template.csv` (copy it to Google Sheets). Columns track the
full funnel — enquiry → qualified → consultation booked → attended → became client — so the
monthly scorecard measures outcomes, not WhatsApp clicks.

## 6. Monthly scorecard

Set targets only after 2–3 months of baseline.

| Metric | Source |
|---|---|
| Non-branded organic clicks | Search Console (filter out "jigisha") |
| Impressions for target queries | Search Console |
| GBP calls, website clicks, direction requests | Business Profile → Performance |
| WhatsApp / call / form events | Vercel Analytics → Events |
| Enquiries → qualified → booked → attended → new clients (conversion % at each step) | `docs/lead-sheet-template.csv` |
| AI citations | §7 |

## 7. AI visibility check (monthly)

Ask each of Google (AI Overview / AI Mode), ChatGPT search, Perplexity, Copilot and Gemini the
same questions, and log: date · engine · cited? · which URL · competitor named.

1. Best LIC agent in Shela Ahmedabad
2. LIC advisor near South Bopal
3. How much term insurance do I need in Ahmedabad
4. How to revive a lapsed LIC policy in Ahmedabad
5. Who can help with an LIC death claim in Ahmedabad
6. Jeevan Akshay VII vs Jeevan Umang for retirement
7. LIC plans for child education Ahmedabad
8. Who is Jigisha Kiran Shah

Check Vercel Analytics → Referrers for chatgpt.com, perplexity.ai, copilot.microsoft.com, gemini.google.com.

## 8. Content calendar (days 31–60)

One useful, first-hand piece every two weeks; no mass-produced pages. Ideas from real client questions:
- "I found an old LIC policy of my father's — what now?" (policy tracing, claims)
- Lapsed policy revival: a worked example with arrears and interest
- Nominee vs legal heir: who actually receives the claim money
- Term cover for home-loan borrowers in Shela / South Bopal
- Turning a policy maturity into a monthly pension

Each piece: author byline, date, a real (anonymised, permission-given) example, link to the matching service page, and a WhatsApp prefill for that topic.
