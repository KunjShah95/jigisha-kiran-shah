# Getting cited by ChatGPT, Perplexity, Gemini, Copilot and Claude

Nobody can guarantee an AI engine will cite a site. What decides it is the same in every engine: **(1)** the
engine's crawler can read the page, **(2)** the page is in the search index the engine draws from, and **(3)**
other sources on the web agree with what the page says. The site side of (1) is done; (2) and (3) are mostly
off-site work.

## Where each engine gets its answers

| Engine | Index it relies on | What gets her in |
|---|---|---|
| ChatGPT (search) | Bing + its own crawler (OAI-SearchBot); places data for local queries | Bing Webmaster Tools, Bing Places, IndexNow (done in code) |
| Microsoft Copilot | Bing | Same as ChatGPT |
| Perplexity | Own crawler (PerplexityBot) + Bing | Same as ChatGPT; citations on other sites |
| Google Gemini / AI Overviews | Google index + Google Business Profile | Search Console, GBP, reviews |
| Claude (web search) | Brave Search | No submission form: Brave finds pages through links, so citations and distribution |
| Apple Intelligence / Siri | Apple Maps + Applebot | Apple Business Connect |

## Step 0 — make sure nothing blocks the crawlers (do this first)

robots.txt allows every AI crawler, and the build fails if that changes. But **Vercel can block bots before
robots.txt is ever read**:

- Vercel → project `jigisha-kiran-shah` → **Firewall** → Bot management / "AI bots" rule: must be **Off** or
  **Log**, not **Deny** or **Challenge**.
- Attack Challenge Mode must be **off** (it challenges every crawler).

If either is blocking, nothing else in this document works.

## Already done in the code

- Every page is server-rendered HTML. AI crawlers don't run JavaScript, and they still see full content.
- robots.txt explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot,
  Google-Extended, Bingbot, Applebot and others; enforced at build.
- `/llms.txt` and `/llms-full.txt` are generated from the page content. They give the exact NAP, her Google Maps
  name, her official LIC Saathi page, the one office and the full service area.
- Schema: Person, LocalBusiness/InsuranceAgency, FAQPage, Article, BreadcrumbList, with `sameAs` links to Google,
  LinkedIn, YouTube and LIC Saathi.
- Question-and-answer FAQs on every service, area and guide page, written as direct answers.
- IndexNow pings Bing (and through it ChatGPT, Copilot, Perplexity) after every production deploy.
- `/feed.xml` for faster recrawling and auto-posting.

## Off-site — in order

1. **Merge the open PR** so the latest facts and IndexNow go live.
2. **Vercel Firewall check** (step 0).
3. **Bing Webmaster Tools** → add the site → "Import from Google Search Console". Submit `sitemap.xml` and
   `feed.xml`. This is the ChatGPT/Copilot route.
4. **Bing Places** → import from Google Business Profile. ChatGPT's local answers lean on places data.
5. **Google Business Profile**: website field → the site (it currently points to LIC Saathi). AI engines
   cross-check the website against the map listing.
6. **Apple Business Connect**: claim the Shela pin.
7. **Fix the two Maninagar listings** (LocalEye, IDBF). An AI engine that finds two addresses may quote the
   wrong one, or neither.
8. **Earn mentions** on pages AI engines already cite for "LIC agent Ahmedabad": directories, the Policylane
   top-10 list, local association sites (see `CITATIONS.md`).
9. **Keep publishing** through `DISTRIBUTION-PLAYBOOK.md`. Engines cite pages that other pages link to.

## Monthly test — is it working?

On the first Monday of each month, ask each engine these prompts **in a logged-out / private window** and record
the result in the table below: **cited** (links to jigishakiranshah.in), **named** (mentions her without the
link), or **absent**.

1. Who is Jigisha Kiran Shah?
2. LIC agent in Shela, Ahmedabad
3. Best LIC advisor in Bopal / South Bopal
4. LIC agent near SG Highway Ahmedabad
5. Jeevan Utsav vs Jeevan Umang — which is better?
6. How do I change the nominee on my LIC policy in Ahmedabad?
7. Who can help with an LIC death claim in Ahmedabad?
8. How much term insurance do I need? (Ahmedabad)
9. LIC policy revival help Ahmedabad
10. Business partnership insurance Ahmedabad

| Month | Engine | #1 | #2 | #3 | #4 | #5 | #6 | #7 | #8 | #9 | #10 | Wrong facts seen? |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Dec 2026 | ChatGPT | | | | | | | | | | | |
| Dec 2026 | Perplexity | | | | | | | | | | | |
| Dec 2026 | Gemini | | | | | | | | | | | |
| Dec 2026 | Copilot | | | | | | | | | | | |
| Dec 2026 | Claude | | | | | | | | | | | |

**If an engine states a wrong fact** (old Maninagar address, wrong phone, wrong years), find the page it cites,
fix that source first, then use the engine's feedback button. Correcting the source fixes every engine; the
feedback button fixes one answer at most.

Expect #1 ("who is…") to turn up first, because brand searches already work. Area and plan prompts follow only as
citations and reviews build up: think months, not days.
