# Product Intelligence Report — jigishakiranshah.in

9 November 2026. Written to the brief "Senior Product Growth Engineer / PM / Data Analyst / CRO / Revenue
Strategist". Every number below is from a source listed in §0. Anything not backed by data is labelled
**Hypothesis**.

---

## 0. Data actually inspected — and what is missing

| Source | Status | Notes |
|---|---|---|
| Payment gateway | **Does not exist** | The site takes no payments. Revenue is LIC commission on policies sold offline (first-year + renewal commission). There is nothing to analyse here, and nothing should be built that pretends otherwise |
| Microsoft Clarity | **Not running** | Loader is in the code; `VITE_CLARITY_ID` is not set, so zero sessions are recorded. No heatmaps, rage clicks or scroll data exist |
| Vercel Analytics | **Not seen** | The Vercel dashboard shared on 6 Nov was for `lattice.kunjshah.in`, a different project. No traffic, referrer, device or event data for this site has been shared |
| GA4 | **Not running** | Code ready; `VITE_GA4_ID` not set |
| Google Search Console | **Partial** | Performance: all 104 queries, 12 Sep – 7 Nov 2026 (shared 9 Nov). Indexing: report to 23 Oct (shared 6 Nov). No page-level performance, no CTR/position by page |
| Google Business Profile | **Indirect** | Public listing: 5.0★, 73 reviews (8 Nov report); website field points to LIC Saathi, not this site (6 Nov audit). No GBP Insights (calls, direction requests) |
| Citations / competitors | **Researched** | Web search, 6 Nov (see `CITATIONS.md`, `KEYWORD-MAP.md` §10) |
| The site | **Full** | 67 prerendered URLs, all code |

**Consequence:** every statement about on-site behaviour (engagement, drop-off, conversion rate, returning users)
would be invented. This report does not make any. The single most important finding is that the business is
currently **unmeasured**.

---

## 1. Executive summary

- **Facts.** In 8 weeks Google showed the site 620 times and sent 14 clicks. 12 of the 14 clicks (86%) came from
  people who already typed her name. The other 512 impressions produced 2 clicks (0.39% CTR).
- **Interpretation.** The website is not yet acquiring anyone. It is a credibility check for people who heard of
  her elsewhere — most likely from referrals and the Google Maps listing.
- **The leak.** Her Maps listing (73 reviews, 5.0★, the strongest asset she has online) links to her LIC Saathi
  page, not to this website. The best-performing channel bypasses the site entirely.
- **What the data says people want.** After her name, the largest non-noise clusters are *owning a policy and
  needing a branch* (69 impressions) and *Hindi term insurance* (56 for Ahmedabad/Gujarat). Plan-comparison research
  (Jeevan Utsav vs Umang) is third (96 incl. plan names).
- **What I'd do in 30 days.** Fix the Maps website link, switch on measurement, and build the funnel around
  existing policyholders (servicing → relationship → new policies), rather than adding more pages Google has not yet
  crawled.

---

## 2. Current product health

**What the product is.** A prerendered marketing and education site for an individual LIC agent (since 2004, MDRT
2023 & 2024, one office in Shela, serves Ahmedabad and Gandhinagar). The core actions are: WhatsApp, call, book a
consultation, call-back form, the protection check. Forms do not store anything; they open WhatsApp (by design,
`LEAD-CAPTURE.md`).

**Monetisation model.** LIC commission. The levers are (a) new policies sold, (b) renewal commission while
policies stay in force (persistency), and (c) servicing that keeps families loyal and produces referrals. The
website can influence (a) and (c) directly.

| Dimension | State | Evidence |
|---|---|---|
| Technical SEO | Strong | Prerendered HTML, unique titles/canonicals enforced at build, schema, sitemap, feed, IndexNow, `llms.txt` |
| Indexing | **Weak** | 23 Oct: `/about`, `/areas/shela`, `/areas/sg-highway`, `/reviews`, `/blog`, a story — "discovered, not indexed, last crawled N/A" |
| Organic acquisition | **Near zero** | 2 non-brand clicks in 8 weeks |
| Local reputation | Strong | 73 Google reviews at 5.0★; competitors in the same area 58–139 |
| Entity consistency | **Weak** | Maps → LIC Saathi; LocalEye, IDBF and (likely) Justdial still show the old Maninagar address |
| Measurement | **Absent** | No GA4, no Clarity, no Vercel data reviewed, no lead log |
| Content depth | Strong (possibly too fast) | 67 URLs; 12 added since 5 Nov (55 → 67) |
| Encoding bug | Fixed in PR #5 | `/gu`, `/services/life-insurance`, `/services/lic-policy-loan` were live with NUL bytes from React 18.3 SSR |

---

## 3. User behaviour analysis

**On-site behaviour: no data.** Without Clarity, GA4 or Vercel numbers there is no scroll depth, click map or
funnel. The site already emits the right events (`contact_whatsapp`, `contact_call`, `consultation_form_submit` →
GA4 `generate_lead`, `booking_completed`, `service_page_view`) and since 8 Nov every WhatsApp enquiry carries a
"How I found you" line. They are simply not being read yet.

**Search behaviour (facts, 12 Sep – 7 Nov):**

| Intent cluster | Queries | Impressions | Clicks | Share of impressions |
|---|---:|---:|---:|---:|
| Her name (jigisha kiran shah, jigisha shah, jigisha) | 7 | 108 | 12 | 17% |
| Broad / national / noise (retirement planning, life insurance, insurance, "yes") | 9 | 141 | 0 | 23% |
| Plan names & comparisons (Utsav vs Umang ×12 wordings, Jeevan Kiran, Akshay) | 20 | 96 | 1 | 15% |
| **Branch-seeking ("lic office bopal/gota/chandkheda", branch contact)** | 7 | 69 | 0 | 11% |
| **Hindi (term insurance in Ahmedabad/Gujarat)** | 15 | 64 (56 local) | 0 | 10% |
| Find an advisor, local (advisor/agent Ahmedabad, near me) | 19 | 58 | 1 | 9% |
| Term insurance, English | 3 | 32 | 0 | 5% |
| Health / mediclaim | 9 | 29 | 0 | 5% |
| Senior citizens | 9 | 13 | 0 | 2% |
| Servicing (revival, nominee, address) | 3 | 6 | 0 | 1% |
| Gujarati | 3 | 4 | 0 | 0.6% |

---

## 4. Cross-platform correlations

| # | Correlation | Status |
|---|---|---|
| C1 | Name searches get clicks (12/108, 11% CTR); everything else gets 2/512. + The Maps listing has 73 reviews and links elsewhere. → People who find her do so through Maps or word of mouth, then search her name to check her out | **Verified inputs, interpreted conclusion** |
| C2 | Branch-seeking queries (69 impr.) + the site's own pages for those areas existed and got 0 clicks + LIC's real Bopal branch is a mapped place. → Google matches "LIC office X" to her area pages, but searchers want the branch, so they skip her result | **Verified inputs; reason is interpretation** |
| C3 | 56 Hindi impressions for Ahmedabad/Gujarat term insurance vs 4 Gujarati impressions, while `/gu` existed and `/hi` did not | **Verified.** Why Hindi beats Gujarati is a hypothesis (below) |
| C4 | Pages that Google had not crawled by 23 Oct include `/about` and `/areas/shela` — her home area and her trust page — while 12 new URLs were added since 5 Nov | **Verified** |
| C5 | "jigisha shah" (8 impr., 0 clicks): other insurance professionals in Ahmedabad share that name (a Navkar Financial advisor; an HDFC ERGO agent in Naroda; a CFP in Navrangpura) | **Verified** (6 Nov research) |
| C6 | Old Maninagar address on LocalEye, IDBF and probably Justdial + "kiran shah naranpura" / "lic naranpura" impressions | **Hypothesis**: east-Ahmedabad visibility may still be tied to the old address |

---

## 5. Hidden patterns and unexpected discoveries

1. **Policyholders, not buyers, are the biggest non-brand intent.** Branch-seeking (69) + servicing (6) + much
   of senior/maturity interest are people who *already own LIC policies*. The site was built mainly for buyers.
   *Why it matters:* for an agent, a policyholder who needs help is the cheapest new relationship there is, and
   servicing builds the trust that sells the next policy.
2. **Hindi beats Gujarati by 14×** (56 vs 4). *Hypotheses:* (a) Ahmedabad's large non-Gujarati working
   population (SG Highway, GIFT City, IT and industrial workforce) searches insurance in Hindi or English;
   (b) Gujarati speakers search insurance in English. Either way, Hindi is an open field: Google even tested the
   site for Hindi term queries in Itanagar, Assam and Puducherry (8 impressions). Only the Ahmedabad/Gujarat part
   is worth serving.
3. **Plan-comparison research is the only buying-intent cluster with volume** — and it is late-funnel. Someone
   comparing Jeevan Utsav with Umang has already decided to buy a guaranteed-income plan. One click from 96
   impressions means the result is shown but not chosen (title changed 6 Nov; unmeasured yet).
4. **The national head terms are vanity.** "retirement planning" (63) and "life insurance" (57) are 23% of all
   impressions with zero clicks: the site appears on deep pages for them. Optimising for these would be wasted effort.
5. **Name collision.** "Jigisha Kiran Shah" is unique; "Jigisha Shah" is not. Every profile and post must use the
   full name, or brand search leaks to other agents.
6. **The site has outrun Google.** Content was added faster than Google crawls a low-authority site. More pages now
   have little marginal value until authority (links, citations, reviews pointing to the site) catches up.

---

## 6. UX and usability problems

Verified from the code (no behavioural data exists):

- **Leads can vanish.** Every form opens WhatsApp; if the visitor does not press send, nothing is recorded anywhere.
  This is a documented, deliberate trade-off. The cost is unknown because nobody measures form submits vs WhatsApp
  messages received. *Hypothesis:* on desktop, where WhatsApp Web may not be logged in, the loss is larger.
- **Branch-seekers land on an agent page.** Fixed for Bopal, Gota, Chandkheda, Naranpura (honest "not a branch"
  answer + LIC branch locator). Remaining risk: those visitors bounce, which is fine; the goal is the few who
  realise an agent saves the trip.
- **Fixed recently:** comparison tables clipped on phones (8 Nov), encoding damage on three pages (PR #5).

What Clarity would answer once it is on: do mobile visitors reach the WhatsApp button; do people open the Book page
and leave; which FAQ items are opened.

---

## 7. SEO and acquisition opportunities

| Opportunity | Evidence | Action |
|---|---|---|
| Maps → website | Maps listing links to LIC Saathi | Change the GBP website field to the site with the GBP UTM. Highest-leverage SEO change available |
| Hindi term insurance | 56 local impressions, no Hindi page until PR #5 | Merge PR #5, request indexing for `/hi` |
| Policyholder servicing | 69 branch-seeking + servicing impressions | Lead with "help with any LIC policy, any agent" on the homepage and Maps listing (see P1 below) |
| Utsav vs Umang | 96 impressions, 1 click | Measure the 6 Nov title for 4 weeks. Then, if still weak, a dedicated Jeevan Utsav plan page ("plan details", "premium chart" queries) |
| Crawl authority | Core pages uncrawled | Citations fixed (Maps link, Maninagar listings, Justdial), Bing Webmaster Tools, request indexing manually |
| Name disambiguation | "jigisha shah" collision | Always "Jigisha Kiran Shah" on LinkedIn, YouTube, posts, listings |

---

## 8. Monetisation and revenue opportunities

No payment data exists, so revenue impact is reasoned, not measured.

1. **Orphan-policy allotment (not mentioned in any previous plan).** LIC's agent-portability rules let a branch
   allot lapsed orphan policies to eligible agents; the allottee agent earns commission on revived arrears and on
   later renewals (source: LIC agent portability rules as described by PolicyWala, 2016; LIC Agents Regulations 2017
   §8(1)(g) confirms agents service "orphan policies allotted to him"). The 2016 eligibility criteria were roughly
   three years' tenure, at least 75 policies in force and a lapse ratio under 10%. A 22-year MDRT agent very likely
   qualifies. **Action:** Jigisha asks her development officer whether she can be an allottee agent and how many
   lapsed orphan policies the branch holds. *Verify current rules with the branch; the cited criteria may have
   changed.*
2. **Maturity moments.** Families receiving maturity money are the warmest prospects for annuity and new cover, and
   for her own clients the maturity dates are already in her records. The new maturity guide is the public
   version; the private version is her own client list sorted by maturity date.
3. **Business protection.** Keyman, partnership and employer-employee policies are larger tickets. Pages now exist;
   the distribution is LinkedIn (she already posts partnership content) and CAs.
4. **Persistency is revenue.** Renewal commission continues only while premiums are paid. Anything that keeps her
   clients' policies in force (reminders, nominee checks, revival help) protects existing income.

What I would **not** do: paid ads before measurement exists; a paid tool or subscription (no evidence anyone would
pay, and it adds regulatory surface).

---

## 9. Retention opportunities

For an agent, "returning users" means clients who keep policies in force and come back for the next one.

- **Annual review rhythm:** a yearly WhatsApp to every client — "your family's one-page policy summary, updated".
- **Premium-due help:** clients whose policies lapse are lost renewal income. A gentle reminder before due dates
  (from her own records, with consent) is retention, not marketing.
- **The one-sheet:** see the unconventional idea in §11.

---

## 10. Prioritised action plan

| Opportunity | Supporting evidence | Expected impact | Complexity | Priority |
|---|---|---|---|---|
| Change the Google Maps website link from LIC Saathi to the site (with GBP UTM) | Maps = only channel with proven demand (73 reviews); 86% of clicks are name searches | High: connects her best channel to the site | 5 minutes, her GBP login | **P0** |
| Switch on GA4 and Clarity; keep a lead log from the "How I found you" line | No on-site data exists at all | High: every later decision depends on it | 15 minutes (Vercel env vars) + 2 min per lead | **P0** |
| Merge PR #5 and request indexing (`/hi`, `/about`, `/areas/shela`, new pages) | NUL bytes on 3 live pages; core pages uncrawled; 56 Hindi impressions | Medium–high | Merge + 20 minutes in Search Console | **P0** |
| Ask the branch about orphan-policy allotment | LIC portability rules; Agents Regulations §8(1)(g) | Potentially high revenue: existing policies, renewal commission | One conversation | **P0** |
| Fix the old Maninagar address on LocalEye, IDBF, Justdial | 6 Nov citation audit | Medium: entity consistency, crawl trust | 1–2 hours | **P1** |
| Lead with "help with any LIC policy, any agent" (homepage hero line, GBP description, posts) — *hero line done 9 Nov; GBP description and posts still to do* | 69 branch-seeking impressions; servicing guides exist | Medium | Small copy change | **P1** |
| Review drive: steady new reviews monthly | 73 vs 139 for the area leader | Medium–high for Maps | Ongoing, 10 minutes a week | **P1** |
| Utsav vs Umang: measure, then decide on a plan page | 96 impressions, 1 click; title changed 6 Nov | Medium | Wait 4 weeks | **P2** |
| Stop adding pages until the core pages are indexed | C4 | Saves effort | None | **P2** |
| Family Policy Card tool (§11) — *built 9 Nov* | Servicing intent; her one-sheet principle | Medium, compounding | Done | **P3** |

**How we'll know it worked (30 days):**

- **Maps link:** Search Console starts showing clicks on non-brand local queries, and Vercel/GA4 shows a
  `utm_campaign=gbp` source.
- **Measurement:** a filled lead log split by channel.
- **Indexing:** the six pages move from "Discovered" to "Indexed".
- **Orphan policies:** a yes or no from the branch, and if yes, the number of policies allotted.

---

## 11. The answers asked for

**5 biggest things we are doing wrong**
1. **Sending the best channel elsewhere.** Maps (73 reviews) links to LIC Saathi, not the site.
2. **Running blind.** No GA4, no Clarity, no Vercel review, no lead log. 14 search clicks is all we know.
3. **Building faster than Google trusts us.** 12 new pages in five days while `/about` and `/areas/shela` were never crawled.
4. **Inconsistent identity.** Old Maninagar address on three directories; "Jigisha Shah" shared with other agents.
5. **Designing for buyers when the demand is policyholders.** The largest non-brand intent is "I own a policy and
   need help", and the site only recently started answering it.

**5 biggest missed opportunities**
1. Orphan-policy allotment: income from policies that already exist.
2. Hindi-speaking Ahmedabad: 14× the Gujarati search demand, almost no competition.
3. Maturity moments: warm prospects with money arriving on a known date.
4. Business owners via LinkedIn: she already writes the content; it now has pages to link to.
5. The Maps-to-site connection: one field change.

**3 changes to implement immediately**
1. Change the Maps website link to the site with `?utm_source=google&utm_medium=organic&utm_campaign=gbp`.
2. Set `VITE_GA4_ID` and `VITE_CLARITY_ID` in Vercel and redeploy; start the lead log.
3. Merge PR #5; request indexing for `/hi`, `/about`, `/areas/shela`.

**One unconventional idea: the Family Policy Card** — *built 9 Nov 2026 at `/policy-card`*

A free tool on the site where a family lists its LIC policies:
- what each one is called;
- the sum assured;
- the maturity date;
- the nominee;
- the servicing branch;
- optionally, the last four digits of the policy number.

It produces a one-page card they can print or share on WhatsApp with a family member. It runs entirely in the
browser; nothing is stored, which matches the site's privacy promise.

*Why it fits the evidence:*
- It serves the largest non-brand intent: people who own policies.
- It turns her own stated principle into a product: "a claim becomes a nightmare when the family does not know the
  policy exists".
- It flags gaps automatically: no nominee, a maturity in the next 12 months, total cover far below 10× income.

*Why it could grow the business:*
- Every shared card carries a small "made with Jigisha Kiran Shah's free tool" line and link, so it spreads within
  families: a referral loop.
- Families come back yearly to update it.
- Each flagged gap is a natural reason to book a review.

*Measure:* cards created (an event, never the contents), cards shared, and bookings that follow.
