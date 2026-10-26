# Why the website is not producing leads

Audit date: 26 October 2026. Everything below was checked against the live site, not the repo.

## Bottom line

Three separate problems are stacked on top of each other, and only one of them is a website problem.

| # | Problem | Evidence | Who can fix it |
|---|---|---|---|
| 1 | **Every website enquiry is being thrown away.** The lead endpoint has no destination configured, so it returns "success" and stores nothing. | `POST https://www.jigishakiranshah.in/api/lead` → `{"ok":true,"saved":0}` on 26 Oct 2026 | Owner (15 minutes, see §2) |
| 2 | **There is almost no traffic to convert.** Search Console shows ~16 clicks in 28 days. At a 2–3% enquiry rate that is 0.3–0.5 leads per month — before problem 1 deletes them. | `docs/GROWTH-PLAYBOOK.md` §1a | Owner + content work (§4) |
| 3 | **The high-intent pages only offered "call" or "open WhatsApp".** A visitor on desktop, at work, or unwilling to compose a message had no low-friction option. | Live `service` and `area` pages, 26 Oct | Fixed in code today (§3) |

The uncomfortable but honest version: **a website cannot produce clients it never meets.** At 16 clicks a month
the site is a brochure, not a lead engine. The lead leak made it worse — the few people who did enquire were
lost. Both are fixable, and in that order.

---

## 1. The lead leak (critical)

`api/lead.ts` writes every enquiry to one or more destinations:

- `LEAD_WEBHOOK_URL` — a Google Apps Script web app that appends a row to a Sheet
- `RESEND_API_KEY` + `LEAD_EMAIL_TO` — an email alert

If neither is set, the code logs the lead and returns `{ ok: true, saved: 0 }`. The visitor sees a success
message, WhatsApp opens, and if they don't press send **the enquiry exists only in a Vercel function log that
expires.** The `saved: 0` in the live response proves neither destination is configured in production.

This is also why the `lead_saved` analytics event never fires — the funnel looks empty because it *is* empty.

**Proof command (run any time):**

```powershell
Invoke-WebRequest -Uri https://www.jigishakiranshah.in/api/lead -UseBasicParsing
```

- `503` + `"ok":false` → still broken.
- `200` + `"ok":true` → leads are being stored.

The endpoint now answers `GET` with this health report, and `POST` now returns a `warning` when nothing was
stored. The frontend no longer counts `saved: 0` as success (`src/lib/leads.ts`), so a visitor whose lead could
not be saved is pushed to WhatsApp instead of being told it worked.

## 2. The 15-minute fix only the owner can do

Pick **one** of these. The Sheet is better because it gives a call-back list you can work through.

### Option A — Google Sheet (recommended)

1. Open <https://sheets.google.com> → new sheet named `Website leads`.
2. Extensions → Apps Script. Paste the script from `docs/lead-capture-apps-script.gs`.
3. Deploy → New deployment → type **Web app** → Execute as **Me** → Who has access **Anyone**. Copy the URL.
4. Vercel → project → Settings → Environment Variables → Production:
   - `LEAD_WEBHOOK_URL` = the web app URL
5. Deployments → Redeploy (env changes need a new deployment).
6. Submit the contact form once from your phone. The row must appear in the sheet within seconds.

### Option B — Email alert

1. Create a free Resend account → API key.
2. Vercel env vars: `RESEND_API_KEY`, `LEAD_EMAIL_TO=jkshahlic@gmail.com`.
3. Redeploy and test.

### Then verify

```powershell
Invoke-WebRequest -Uri https://www.jigishakiranshah.in/api/lead -UseBasicParsing
```

Must return `200` and `"ok":true`. Bookmark that URL — it is the single fastest way to know whether the site is
capturing leads.

> Until this is done, nothing else in this document matters. Every rupee and hour spent on traffic leaks straight
> out of the same hole.

---

## 3. What changed in the code today

| Change | File | Why it matters |
|---|---|---|
| `GET /api/lead` health report; `POST` warns when nothing was stored | `api/lead.ts` | Makes the invisible failure visible |
| `submitLead` returns true only when a destination accepted the lead | `src/lib/leads.ts` | Stops false "sent" states and fake analytics |
| New two-field call-back card on all 9 service pages and all 12 area pages | `src/components/CallbackCard.tsx`, `ServicePage.tsx`, `AreaPage.tsx` | Lowest-friction conversion; falls back to WhatsApp if the save fails |
| Fixed visible `\u2605`, `\u2013`, `\u2192` text on all 12 area pages | `src/pages/AreaPage.tsx` | Was live and looked broken |
| `/gallery` was 404 on production and absent from the sitemap | `src/entry-server.tsx` | Now prerendered, indexed, linked in the footer |
| Footer now links all 9 services and all 12 areas | `src/components/Footer.tsx` | Internal links were missing 2 services and 6 areas |
| 12 duplicate `InsuranceAgency` entities removed; area pages now emit `Service` + `provider` reference | `src/pages/AreaPage.tsx` | One business entity for Google/AI to trust, not 12 |
| `llms.txt` / `llms-full.txt` generated at build time | `src/lib/llms.ts`, `scripts/prerender.mjs` | They were stale: 6 of 12 areas, 2 guides missing, a literal `\u2019` |
| Homepage title now leads with "LIC Agent in Ahmedabad" | `src/pages/HomePage.tsx`, `src/hooks/useSEO.ts` | Generic queries were landing on the homepage with zero clicks |

---

## 4. The demand problem (the real one)

### The arithmetic

| Monthly organic clicks | Enquiry rate | Enquiries | Of those, answered | New clients at 1 in 4 |
|---|---|---|---|---|
| 16 (today) | 3% | 0.5 | 0.5 | 0.1 per month |
| 150 | 3% | 4.5 | 4 | 1 per month |
| 400 | 3% | 12 | 11 | 2–3 per month |
| 400 + 40 GBP calls | — | 50 | 45 | 6–9 per month |

The website is one input. For a local LIC advisor in Ahmedabad, **Google Business Profile and referrals
out-produce the website, usually by a wide margin.** Anyone who tells you a brochure site will fill a client
book is selling you a website.

### Where local insurance enquiries actually come from

1. **Google Maps / local pack** — "LIC agent near me", "insurance agent Shela". Highest intent, highest close rate.
2. **Referrals and WhatsApp forwards** — already her strongest channel; the site's job is to make the referral
   verifiable in 10 seconds.
3. **Existing policyholders** — service, revival, claims, nominee changes. The most under-used source: she already
   has 2,700 families who do not know she handles this.
4. **Organic search** — slow, compounding, currently near zero.
5. **Paid** — fastest, but only worth it once the lead capture works and someone answers within an hour.

### The 90-day plan

**Days 1–7**
- Fix the lead destination (§2) and test it from a phone.
- Claim/complete Google Business Profile: primary category **Insurance agency**; add every service from the site;
  service areas Shela, South Bopal, Bopal, Satellite, SG Highway, Science City, Vastrapur, Ambawadi, Maninagar,
  Naranpura, Gota, Chandkheda; hours Mon–Sat 9–6; website with UTM
  `https://www.jigishakiranshah.in/?utm_source=google&utm_medium=organic&utm_campaign=gbp`.
- Add 10 real photos (office, building entrance, desk, certificates). Profiles with photos get materially more
  calls than profiles without.
- Ask 5 recent clients for a Google review using the message in `GROWTH-PLAYBOOK.md` §4.
- Submit the sitemap in Search Console and Bing Webmaster Tools; request indexing for the 9 service pages.

**Days 8–30**
- Work through `docs/CITATIONS.md` Tier 1 and Tier 2. Same name, address, phone everywhere.
- Publish 2 pieces from the content queue in `GROWTH-PLAYBOOK.md` §8.
- Post on GBP weekly (one guide, one FAQ, one client story — rotated).
- Call every lead within one working hour. Track in `docs/lead-sheet-template.csv`.
- Send one WhatsApp broadcast to existing clients: "I now handle policy revival, nominee updates and claims for
  any LIC policy, even ones I didn't sell." This alone can produce more enquiries than the website does.

**Days 31–90**
- Build the 8 missing pages in `docs/KEYWORD-MAP.md` §6 (revival, nominee, claim status, NRI, surrender, policy
  loan, address change, policy tracing).
- One first-hand article every two weeks.
- Review Search Console non-branded impressions monthly; kill pages that get impressions but no clicks and rewrite
  their titles.

---

## 5. What to measure weekly (not monthly)

| Metric | Where | Target by day 90 |
|---|---|---|
| `lead_saved` events | Vercel Analytics → Events | ≥ 12/month |
| Rows in the lead sheet | Google Sheet | equals `lead_saved` |
| GBP calls + direction requests | Business Profile → Performance | ≥ 30/month |
| Non-branded organic clicks | Search Console | ≥ 100/month |
| Enquiry → consultation booked | lead sheet | ≥ 50% |
| Consultation → client | lead sheet | ≥ 25% |

If `lead_saved` is high but rows are missing, the destination is broken again. If rows are high but clients are
low, the problem has moved from marketing to follow-up — which is a better problem to have.

---

## 6. Things the site says that must be verified before scaling traffic

Listed in `GROWTH-PLAYBOOK.md` §2. Repeating the two that can cause real trouble:

- **5.0★ / 73 reviews** — the schema hardcodes `reviewCount: 73`. Update it or remove it when it drifts; a stale
  rating is a trust problem and a structured-data risk.
- **Plan names and benefits** — LIC withdraws and relaunches plans. Every plan named on the site (Jeevan Umang,
  Jeevan Utsav, Bima Shree, Arogya Rakshak…) must match the current brochure before you spend money sending
  traffic to those pages.
