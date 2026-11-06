# Distribution playbook — 12 weeks

**Why this exists.** Search Console (23 Oct 2026) shows Google has *discovered* `/about`, `/areas/shela`,
`/areas/sg-highway`, `/reviews`, `/blog` and `/blog/jevan-labh-or-the-alarm-clock` but never crawled them. The site
is technically fine (every page has 7+ internal links, clean sitemap, prerendered HTML). Google simply spends little
crawl effort on a site the rest of the web rarely points to. The fix is distribution: real people and real pages
linking to specific URLs, every week.

What each channel does — honestly:

| Channel | Helps ranking directly? | What it does |
|---|---|---|
| Google Business Profile posts | Indirectly | Keeps the profile active for the map pack; the "Learn more" link is a crawled Google-owned link to the page |
| LinkedIn / Facebook / YouTube links | No (nofollow) | Real visitors, crawl discovery, brand searches ("jigisha kiran shah" is already the #1 query) |
| WhatsApp status / broadcast | No | Visitors and enquiries from people who already know her — the highest-converting traffic |
| Directory listings, Policylane mention, society/association sites | Yes | Followed links + consistent NAP: the actual ranking signal. See `CITATIONS.md` |
| Google reviews | Yes, for the map pack | The single biggest local lever (competitors: 58–139; her listing: 29) |

## Rules

1. **One page per week.** Every post that week links to that one URL.
2. **Always tag links** so Vercel Analytics and GA4 show which post worked:
   `?utm_source=<gbp|linkedin|whatsapp|facebook>&utm_medium=social&utm_campaign=<week>`
   e.g. `https://www.jigishakiranshah.in/areas/shela?utm_source=linkedin&utm_medium=social&utm_campaign=w01`
   (the page's canonical tag strips the tags for Google, so this never creates duplicates).
3. **Same day, request indexing** for that week's URL in Search Console → URL Inspection.
4. **Her existing LinkedIn posts** (retirement, child education, partnership protection) are already good. The only
   change: end each one with the matching page link instead of only the phone number.
5. Nothing in a post that is not on the page: no return figures, no "best", no guarantees. Insurance is the subject
   matter of solicitation.

## The 12 weeks

### W01 — `/areas/shela` (never crawled)
- **GBP post:** "Our office is in Shela, at Orchid Legacy, Applewoods Township. Families in Shela and Applewoods can
  meet in person, Monday to Saturday, 9 AM–6 PM, for new LIC policies, policy reviews, nominee changes and claim
  help. First consultation is free." → Button: Learn more → the Shela page.
- **LinkedIn:** a short note on 22 years of advising families from Shela, with one example of what a policy review
  found (no names). Link at the end.
- **WhatsApp status:** office photo + "LIC help in Shela — no branch visit needed" + link.

### W02 — `/about` (never crawled)
- **GBP:** "Advising Ahmedabad families on LIC since 2004. MDRT qualifier in 2023 and 2024." → About page.
- **LinkedIn:** the MDRT felicitation photo, what MDRT means in one line, link to About.
- **Also:** put the About URL in the LinkedIn profile's Featured section.

### W03 — `/reviews` (never crawled) + review drive
- **GBP:** "Thank you to every family who has shared their experience." → Reviews page.
- **WhatsApp to 20 recent clients (policy delivered or claim settled):**
  "Namaste {name}, thank you for trusting me with {your policy / the claim}. If you're happy with the service, would
  you share a few honest words on Google? It helps other families find the right help: {review link}. — Jigisha"
  Get `{review link}` from GBP → Ask for reviews. No gifts, no discounts, no asking only happy clients to post
  five stars.
- Reply to every new review within a week.

### W04 — `/guides/jeevan-utsav-vs-jeevan-umang`
- 29 impressions, 1 click in Search Console — people are asking this.
- **LinkedIn:** "Jeevan Utsav pays a fixed 10% income with no bonus; Jeevan Umang pays 8% plus bonuses that are not
  guaranteed. Which suits you depends on when you need the income and how long you can pay." → guide.
- **WhatsApp status:** the same two lines + link.

### W05 — `/services/policy-review-claims`
- **GBP:** "Hold LIC policies bought years ago, from different agents? A free review lists every policy's cover,
  maturity date and nominee on one page. Help is available even if another agent sold the policy." → page.

### W06 — `/areas/sg-highway` (never crawled)
- **LinkedIn:** aimed at professionals and business owners along SG Highway: term cover sized to income plus loans,
  and partnership protection. → SG Highway page.

### W07 — `/blog/jevan-labh-or-the-alarm-clock` (never crawled)
- **LinkedIn / Facebook:** the story's opening paragraph as the post, "read the full story" + link.

### W08 — `/services/family-financial-protection` (new)
- **GBP:** "Marriage, a child, a new home loan — each changes how much protection your family needs. Review it
  after every big life change." → page.

### W09 — `/services/term-insurance`
- **LinkedIn:** the 10–15× income plus loans rule, with a worked example from the page. → page.

### W10 — `/areas/bopal`
- People search "lic office bopal". **GBP:** "Looking for the LIC office in Bopal? Many errands — premium receipts,
  nominee changes, revival, loan and claim papers — can be prepared with your agent first, so you visit the
  branch only when LIC requires it." → Bopal page.

### W11 — `/services/corporate-insurance`
- Reuse her October partnership-protection post (Hindi), adding the link. → page.

### W12 — `/blog`
- **LinkedIn:** "12 weeks of plain-language LIC guides — all in one place." → blog. Then start again from W01 with
  the next set of pages (guides, other areas).

## Every month

- **Search Console → Pages:** did the never-crawled URLs move to Indexed? Note it in `SEO-PROPOSAL-TRACKER.md`.
- **Vercel Analytics → UTM Parameters:** which source and week brought visitors.
- **Citations:** two new directory listings or corrections per month from `CITATIONS-TRACKING.csv`.
- **Reviews:** count on the Google listing. Target: steady new reviews every month, not a burst.

## Automation (optional)

`https://www.jigishakiranshah.in/feed.xml` lists every guide and story, newest first. A feed tool (for example
Zapier or IFTTT "RSS → LinkedIn") can draft a LinkedIn post whenever a new article is published. Keep a human
review before anything is posted.
