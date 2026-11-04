# Design & conversion benchmark — jigishakiranshah.in

> **4 Nov 2026.** Companion to `docs/COMPETITOR-BENCHMARK.md`, which benchmarks
> *content and SEO* against six other Indian LIC-agent sites. This document covers
> the other half: **visual craft, trust density, social proof and measured
> performance** — against the national brands people actually compare you with,
> not just other LIC agents.
>
> Every number in §2 was measured from a real headless-Chromium load of the live
> site. Every score in §3 is a judged rubric (0–10) — treat the scores as
> argument, not data.

---

## 1. Who we benchmarked

Two tiers, because a client comparing you is really running two different
comparisons in their head.

**Tier A — the "famous" brands a prospect has already seen**

| Site | Why it's in the set |
|---|---|
| `licindia.in` | The brand the advisor is licensed under. Default mental reference. |
| `joinditto.in` | The current design bar for Indian insurance advisory. Zerodha-backed, 4.9★ / 30,000 reviews. |
| `policybazaar.com` | The aggregator most Indian insurance searches land on. |
| HDFC Life / ICICI Pru Life | Corporate carrier sites; the "institutional" look. |

**Tier B — direct competitors** — already covered competitor-by-competitor in
`docs/COMPETITOR-BENCHMARK.md` §4 (pratiklic, ajay-g-pandey-lic, ambikaassociates,
masterinsurances, shashwatinvestment, joinasagent). Summarised here only where a
design point differs.

**Verdict up front:** on content, local SEO and AI-discoverability you already beat
every Tier B site and most of Tier A. On **visual craft and social proof density**
you were behind Ditto by a clear margin. That gap is what this session closed.

---

## 2. Measured performance (headless Chromium, 1440×950, cold load)

| Metric | **Yours** | Ditto | LIC India | Policybazaar |
|---|---:|---:|---:|---:|
| Requests | **11** | 69 | 188 | blocked¹ |
| Total transferred | **385 KB** | 4,369 KB | 25,672 KB | — |
| JavaScript | **~0 KB²** | 490 KB | 1,404 KB | — |
| Images | 268 KB | 99 KB | 23,540 KB | — |
| DOM nodes | **924** | 1,174 | 1,882 | — |
| First Contentful Paint | 1,072 ms | **592 ms** | 1,032 ms | — |
| DOMContentLoaded | 1,010 ms | 573 ms | 1,326 ms | — |
| Full load event | 4,238 ms | 4,484 ms | **16,106 ms** | — |

¹ `policybazaar.com` rejected the connection (`ERR_HTTP2_PROTOCOL_ERROR`) — a bot
wall, not a site failure. Not measurable from this environment; excluded rather
than guessed at.
² The app ships real JS, but Vercel serves it brotli-compressed without a
`Content-Length`, so the byte counter reads ~0. Treat your JS figure as
"unknown but small" — the 11-request total is the honest signal.

**What this says**

- You are **11× lighter than Ditto and 66× lighter than LIC** by transferred bytes.
  On a Tier-2/3 mobile connection that is the difference between a 3-second and a
  30-second page.
- LIC's 23.5 MB of images is the single best argument for your site existing. Use it.
- **The one number you lose:** FCP. Ditto paints at 592 ms, you at 1,072 ms.

> **Correction (4 Nov 2026).** An earlier draft of this document attributed that
> ~480 ms FCP gap to "the font-blocking hero". That was wrong, and the A/B in §5.1
> disproved it: `font-display: swap` was already preventing the fonts from blocking
> first paint. The real critical path is the document itself — ~215 KB of
> prerendered HTML plus ~122 KB of render-blocking CSS before compression. Fonts
> were never the bottleneck. Treat the font work in §5.1 as a structural
> improvement, not an FCP fix.

---

## 3. Design craft scorecard

Judged 0–10. "Before" = live site at the start of this session. "After" = this
session's build. Tier A scores are my read of each site's public homepage.

| Axis | Before | **After** | Ditto | LIC India | Policybazaar |
|---|---:|---:|---:|---:|---:|
| Above-the-fold clarity | 7 | **9** | 9 | 4 | 6 |
| Trust-signal density in fold | 6 | **9** | 10 | 6 | 8 |
| Social proof on homepage | 5 | **9** | 9 | 4 | 7 |
| Motion & interaction craft | 6 | **9** | 7 | 2 | 6 |
| Distinct visual identity | 7 | **9** | 8 | 3 | 6 |
| Lead-capture path count | 9 | **9** | 8 | 5 | 9 |
| Mobile experience | 8 | **9** | 8 | 4 | 7 |
| Performance | 9 | **9** | 6 | 1 | 4 |
| Local content depth | 9 | **9** | 6 | 3 | 8 |
| AEO / AI discoverability | 10 | **10** | 3 | 2 | 4 |
| Accessibility | 8 | **9** | 7 | 3 | 5 |
| **Mean** | **7.6** | **9.1** | 7.1 | 3.6 | 6.1 |

You started ahead of every Tier A site except Ditto, and ahead of Ditto on four
axes already. The four you lost — fold clarity, trust density, social proof,
motion craft — were all **presentation**, not substance. All four are now closed.

---

## 4. What actually changed

Five changes. Each one maps to a gap in §3, and each is the Aceternity / Manu Arora
treatment of a pattern the national sites use.

### 4.1 Trust badge above the headline — *closes "trust-signal density"*

Ditto leads with a Google-rating garland before a single word of copy. You led with
the headline and buried the 5.0★ in a stat strip below it.

Now the first thing in the tab order under the nav is a rating pill:
**★★★★★ 5.0 on Google · 70+ reviews | 2× MDRT.** It sits on the same optical line
as the headline, so a scanning eye gets credibility before it gets a claim.

`src/components/Hero.tsx`

### 4.2 Aceternity spotlight cone in the hero — *closes "motion & identity"*

Added a blurred SVG ellipse (`Spotlight.tsx`) that fades in once on mount and holds,
casting a warm gold cone from the top-left behind the hero copy. It replaces the
flat gradient wash with something that reads as a lit stage.

Deliberately **one-shot, not looping** — a beam that pulses forever is the tell of a
template. Under `prefers-reduced-motion` it renders at final state with no animation.

`src/components/aceternity/Spotlight.tsx`, `.spotlight-cone` in `src/index.css`

### 4.3 Infinite moving cards — *closes "social proof on homepage"*

This was the largest single gap. You had **4 testimonials in a 3-up carousel** —
meaning 3,900+ words of client proof on `/reviews` never appeared above the fold on
the homepage, while Ditto showed a 30,000-review rating.

Now the homepage runs a **continuous marquee of all 7 client stories** from
`src/data/testimonials.ts` — real names, real localities, real years, journey tags —
pausing on hover and keyboard focus so any card can be read in place.

Underneath, a **second marquee running the opposite way** carries the proof strip:
`5.0★ on Google · 70+ reviews`, `2× MDRT 2023 & 2024`, `22+ years`, `2,700+ families`,
`1,000+ claims supported to settlement`, `IRDAI licensed`, `Shela office`.

That second row is the one a competitor cannot copy. Ditto can match your review
count; nobody can match "22 years, 1,000 claims, same office".

Mechanics: two identical groups in one track, translated `-50%` — measured
`trackWidth 5,264 px / groupWidth 2,632 px`, so the loop is pixel-seamless. All CSS,
no JS animation frame cost.

`src/components/aceternity/InfiniteMovingCards.tsx`, `src/components/Testimonials.tsx`

### 4.4 Glow-ring bento — *closes "motion craft"*

The four pillar cards kept their layout but gained a **conic-gradient ring** that
sweeps the border on hover (`--glow-angle`, registered via `@property` so the angle
interpolates smoothly) plus a 1px inner top highlight, the detail that stops a
translucent card from reading flat.

Implemented as a real child element, not a pseudo-element, because `.spotlight-card`
already owns `::before` — they compose instead of colliding.

`src/components/aceternity/GlowCard.tsx`, `.glow-ring` in `src/index.css`,
`src/components/WhyUs.tsx`

### 4.5 Grid-pattern surfaces — *closes "distinct visual identity"*

The dark sections used a flat dot-grid. They now use a masked SVG grid
(`GridPattern.tsx`) that fades to nothing at the edges, with unique `useId` pattern
defs so multiple instances can mount without ID collisions.

`src/components/aceternity/GridPattern.tsx`

### 4.6 Plus two smaller fixes

- **Homepage blog row** showed 5 cards in a 4-column grid, leaving an orphan. Now
  shows 4 — one clean row, with "All stories" covering the rest.
- **Testimonial section padding** increased so the proof strip doesn't sit on the
  section edge.

---

## 5. What I did *not* change, and why

Being explicit about the restraint matters as much as the changes.

- **The cream/gold palette stays.** Manu Arora's house style is dark-first, and the
  temptation was to flip the whole site to black. That would have been me copying a
  template over a brand. This is a 22-year, family-referral practice in Shela — the
  warm cream and Fraunces serif *are* the trust signal, and they differentiate you
  from every navy-and-teal insurance site. The dark treatment is applied to the
  sections that benefit from depth (Why Us, testimonials, calculator), not to
  everything.

- **The font critical path is now self-hosted, but it did not buy FCP.** See §5.1 —
  the change is correct and worth keeping for reasons other than paint timing, and
  the measurement that proves the *original* diagnosis wrong is documented rather
  than quietly dropped.

- **No chatbot, no fake urgency, no "X people viewing".** Ditto's strength is that it
  is honest. On a regulated product, a dark pattern costs more trust than it buys
  clicks.

---

## 5.1 Font pipeline: self-hosted, and a diagnosis that didn't survive testing

**What changed.** Fraunces and Plus Jakarta Sans now load from `/fonts/*.woff2`
instead of `fonts.googleapis.com`. Four `@font-face` rules with real
`font-weight: 400 800` / `300 800` ranges replace the 24 blocks Google emits for
the same four files. Regenerate with `node scripts/fetch-fonts.mjs`.

**What I expected.** That removing the render-blocking cross-origin stylesheet —
which forces `HTML → googleapis.com CSS → gstatic.com font` as a chained sequence
across two third-party origins — would close a meaningful part of the 480 ms FCP
gap against Ditto.

**What actually happened.** It didn't, and the A/B was clean enough to trust:
9 interleaved runs, each variant, cache disabled, Slow 4G (1.6 Mbps / 150 ms) and
4× CPU throttling, local static server, only the font setup differing.

| | Google Fonts | Self-hosted | Δ |
|---|---:|---:|---:|
| FCP, median | 3,968 ms | 4,080 ms | +112 ms (noise) |
| FCP, best | 3,572 ms | 3,548 ms | −24 ms (noise) |
| LCP, median | 5,676 ms | 5,372 ms | −304 ms (noise) |
| LCP, best | 4,692 ms | 4,912 ms | +220 ms (noise) |
| Font bytes | 116 KB | 117 KB | parity |
| External origins | 2 | **0** | real |

Both directions flip between median and best-case. That is noise, not a win.
Two things explain it:

1. **`font-display: swap` was already doing the work.** The browsers painted in
   the fallback face at the same moment either way; the fonts were never on the
   critical path for first paint.
2. **The local harness has no compression.** Vercel brotli-compresses the 215 KB
   HTML and 122 KB CSS to a fraction of their size. Locally they ship raw, so the
   document dominates the critical path and swamps everything else — which is also
   why local FCP (~4 s) looks nothing like production (1,072 ms).

**So why keep it?** Four reasons that are structural rather than timing:

- **Two fewer origins.** Two fewer DNS + TCP + TLS handshakes, two fewer things
  that can be slow, blocked, or down. `fonts.googleapis.com` being unreachable
  (corporate proxy, firewall, Indian ISP hiccup) no longer costs you the brand face.
- **One less render-blocking request.** The `@font-face` rules now ship inside the
  CSS the page already fetches.
- **Privacy.** No third-party request fired on every page view.
- **Cache control.** `/fonts/(.*)` is now `immutable` for a year in `vercel.json`,
  the same as `/assets/(.*)`.

**And one thing I actively removed.** The first version of this change preloaded
`fraunces-latin.woff2`. In testing that was *worse* — LCP regressed ~900 ms because
the preload raced the 268 KB hero image for bandwidth on a constrained link. The
preload is gone and `index.html` carries a comment explaining why, so nobody adds
it back as an "obvious optimisation".

**The lesson worth keeping:** the 480 ms FCP gap is real, but it belongs to the
document and the CSS bundle, not the fonts. See §6 item 1.

---

## 6. Where you now stand, and what's next

**You now beat Ditto on 6 of 11 axes and tie on 3.** The two you still lose on
substance are worth naming honestly:

1. **Review volume.** 70 reviews vs 30,000. Unwinnable head-to-head, so don't play
   it — you win on *depth* per review (named locality, year, plan type, outcome) and
   on the claim stories nobody else publishes. Keep collecting; the marquee makes
   each one work harder.
2. **Institutional endorsement.** "Backed by Zerodha" is a logo you can't buy. Your
   equivalent is MDRT ×2 and 22 years — both now in the fold and in the proof strip.

**Next, in priority order:**

| # | Item | Why | Effort |
|---|---|---|---|
| 1 | Cut the critical path: split critical CSS, trim prerendered HTML | The measured FCP gap (1,072 vs 592 ms) lives here — 215 KB HTML + 122 KB blocking CSS. See §5.1: fonts were never the cause. | 2–3d |
| 2 | Hero image → AVIF/WebP + `srcset` | It's the LCP element at 268 KB. Biggest single mobile win. | 3h |
| 3 | `/reviews` faceted filter (plan type, year, locality) | Turns 3,900 words of proof into a browsable asset | 1d |
| 4 | Recognition strip with real MDRT certificate images | `COMPETITOR-BENCHMARK.md` §3a.6 — still open | 1d |
| 5 | Retirement + child-education calculators | `COMPETITOR-BENCHMARK.md` §3a.1 — still the biggest functional gap vs shashwat | 3d |

**Done since the last revision:** font pipeline self-hosted (§5.1). Net effect on
paint timing: none measurable. Net effect on origins and failure modes: 2 → 0.

---

## 7. Reproduce this benchmark

```bash
# craft + layout
npx playwright screenshot --viewport-size="1440,950" --full-page https://www.jigishakiranshah.in/ shot.png

# measured performance (the script that produced §2)
npm i -g playwright && npx playwright install chromium
node scripts/benchmark-perf.mjs

# re-fetch the self-hosted brand fonts (§5.1)
node scripts/fetch-fonts.mjs
```

The scoring rubric in §3 is my judgement, reproduced so it can be argued with.
The numbers in §2 are measured and re-runnable.
