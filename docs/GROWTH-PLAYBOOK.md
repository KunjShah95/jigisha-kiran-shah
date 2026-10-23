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

## 1b. "Alternate page with proper canonical tag" (Search Console)

**What it is.** Google found a URL whose `<link rel="canonical">` points to a
different URL, so it treats the first as an *alternate* and indexes the canonical
instead. On this site the canonical is always `https://www.jigishakiranshah.in<path>`
(no trailing slash, no query string). The variants that show up as alternates are
therefore: the apex host (`jigishakiranshah.in`), `http://` (either host), trailing
slashes (`/contact/`), and query strings (`/contact?objective=review`).

This is usually **informational, not an error** — it means canonicalisation is working.
It only blocks indexing if the *canonical* URL itself is not indexed (check the
"Discovered – currently not indexed" / "Crawled – currently not indexed" reports).
Code-level canonicals are correct per page (verified in `src/hooks/useSEO.ts` and the
prerendered HTML), and there are no internal links to non-canonical variants.

**Fixes (owner actions):**
1. **Vercel → Project → Settings → Domains:** set the apex domain
   `jigishakiranshah.in` to redirect straight to `www.jigishakiranshah.in`. This
   collapses `http://apex` → `https://www` into **one hop** instead of two
   (`http://apex` → `https://apex` → `https://www`), which is the main reason Google
   keeps the apex around as an alternate.
2. **Search Console → URL Inspection:** paste each canonical URL of the affected
   pages (service, area, blog) and click "Request indexing". Do this for the new
   pages too: `/resources`, `/calculators`.
3. **Search Console → Pages report:** filter by "Alternate page with proper canonical
   tag" and confirm every listed URL is a variant (apex / http / trailing slash /
   query string). If a *canonical-looking* URL (www, https, no slash) appears there,
   its canonical tag is wrong — fix in the page's `useSEO({ path })` call.
4. Optional: in Search Console → Settings → Crawl stats, no further action needed.
   Do **not** add `Disallow: /*?` to robots.txt — it would also block UTM-tagged
   links and is unnecessary given the canonical tags.

**Code changes made for this:** `vercel.json` trailing-slash normalisation redirect
added as belt-and-braces on top of `trailingSlash: false`. No page-level changes.

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
| `lead_saved` | Form saved by `/api/lead` (real lead, even if WhatsApp send is skipped) | `form` (contact / assessment / booking / check) |
| `booking_cta_click` | Any link to `/book` | `cta` |
| `booking_started` | Cal.com calendar loaded, or first field touched on the request form | `via` (cal / request), `objective` |
| `booking_completed` | Cal.com confirms a booking | `via`, `objective` |
| `booking_request_submit` | Booking request form sent (no Cal.com) | `objective`, `mode` |
| `protection_check_started` / `_completed` | Goal picked / report reached on `/protection-check` | `goal`, `lang` |
| `protection_check_handoff` | Report → book, WhatsApp or call back | `goal`, `via` |

**Funnel to read monthly:** visitors → `booking_cta_click` → `booking_started` → `booking_completed` or `booking_request_submit` → attended (lead sheet).
Check funnel separately: `protection_check_started` → `_completed` → `_handoff`. `consultation_form_submit` counts clicks; `lead_saved` counts stored leads. Trust the second.

Every WhatsApp message arrives with a first line naming the goal or page, so Jigisha can log
the source. Log every enquiry in `docs/lead-sheet-template.csv` (copy it to Google Sheets). Columns track the
full funnel — enquiry → qualified → consultation booked → attended → became client — so the
monthly scorecard measures outcomes, not WhatsApp clicks.

## 5a. Lead capture and booking setup (needs owner logins)

The forms (contact, homepage assessment, `/book`, Protection Check call-back) POST to `/api/lead` first, then open WhatsApp.
Until a destination is configured, leads go only to the Vercel function log (Vercel → Logs, search `LEAD`). Logs expire, so do step 1 first.

1. **Google Sheet (recommended):** follow `docs/lead-capture-apps-script.gs`, then set `LEAD_WEBHOOK_URL` in Vercel (Production).
2. **Email alert (optional):** Resend account → API key → `RESEND_API_KEY`, `LEAD_EMAIL_TO=jkshahlic@gmail.com`, and `LEAD_EMAIL_FROM` once a domain is verified (until then the default sender can only email the Resend account owner).
3. **Live booking slots (set up 13 Oct 2026):** Cal.com account `jigisha-kiran-shah-emz0xs`, event "Free LIC Consultation" (`/free-consultation`, 20 min, phone / Shela office / Cal Video, 2 h notice, 10 min buffer), hours Mon–Sat 9–6 IST. `/book` embeds it by default and fires `booking_completed`. Cal.com emails Jigisha each booking. Connect her Google Calendar in Cal.com → Settings → Calendars so personal events block slots. The link is set in `src/pages/BookPage.tsx` (`CAL_LINK`), not an env var. Never put the Cal.com API key in Vercel env vars: `VITE_*` values are published in the site's JavaScript.
4. Test after each deploy: submit `/book` once from your phone, and check the row, email or booking arrives.

**Privacy:** only name, phone, goal and what the visitor typed are stored. The Protection Check runs in the browser. Its figures are sent only if the visitor asks for a call back or opens WhatsApp. Delete rows that never became clients after 12 months.

**Before promoting the Gujarati toggle:** Jigisha to read `src/data/protectionCopy.ts` (`gu` block) and confirm the Gujarati spelling of her name (currently જીગીશાબેન) and the wording.

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
