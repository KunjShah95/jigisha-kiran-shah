# Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the homepage hero and "Why Us" section around a single clear message and single
primary CTA, and surface the existing (currently unused) testimonial carousel on the homepage, so
a first-time visitor understands the offer and has one obvious next action within 30 seconds.

**Architecture:** Pure frontend edit to existing React components (no new routes, no backend
changes). This codebase has no test runner configured (`package.json` only has
`dev`/`build`/`preview`/`check:leads`/`check:seo` scripts) — verification is `npm run dev` +
manual visual check per step, and `npm run build` at the end to confirm SSR prerender/SEO checks
still pass. Reuse existing infra instead of adding new: the spotlight-hover system
(`useSpotlight` hook + `.spotlight-card`/`.spotlight-dark` CSS already in `src/index.css`) and the
global mobile sticky CTA bar (already in `src/components/Layout.tsx`) both already exist — do not
recreate them.

**Tech Stack:** React 18 + TypeScript, Tailwind v4 (`@theme` tokens in `src/index.css`), React
Router, lucide-react icons.

---

## Scope note (revised from spec)

The original spec assumed some infra was missing. On inspection it already exists:
- Sticky mobile CTA bar: already global in `Layout.tsx:43-65` (WhatsApp + Call Now). **No new
  component needed** — spec's "StickyMobileCTA.tsx" task is dropped.
- Spotlight hover-glow on cards: already implemented (`src/hooks/useSpotlight.ts` +
  `.spotlight-card` CSS in `src/index.css:257-276`), already used in `WhyUs.tsx`. **No new
  `SpotlightCard` wrapper needed** — reuse `useSpotlight()` + the existing CSS classes directly.
- `WhatsAppButton` is already mounted globally in `Layout.tsx:42`. **No change needed there.**
- `Testimonials.tsx` is fully built (carousel, dots, prev/next, mobile single-card view) but is
  **not imported anywhere in `HomePage.tsx`** — it only needs to be added to the page.

This shrinks the plan to 3 tasks: Hero rewrite, WhyUs bento rework, HomePage assembly (discovery
band spotlight + insert Testimonials).

## File Structure

- Modify `src/components/Hero.tsx` — single primary CTA, collapsed trust strip, drop decorative
  rotated frame, drop inline WhatsApp CTA.
- Modify `src/components/WhyUs.tsx` — bento grid (1 large differentiator tile + 3 smaller), keep
  existing spotlight-dark hover.
- Modify `src/pages/HomePage.tsx` — add `.spotlight-card` hover to the 2 discovery-band link
  cards; import and render `Testimonials` between `Calculator` and the Stories/guides section.

---

### Task 1: Hero — single CTA, collapsed trust strip

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Replace the two-badge header row + 4-tile stat grid with one trust strip**

Replace lines 20-29 (the `flex flex-wrap` badge row) and lines 71-101 (the 4-tile
`grid-cols-2 md:grid-cols-4` stat block) with a single compact trust strip placed right after the
subhead paragraph. Keep `CountUp` for the numbers (it's already imported). The strip is plain
text/inline items, not boxed cards — no `border`, no `bg-white`, no individual tile padding:

```tsx
<div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 lg:mb-8 text-sm text-gray-600">
  <span className="inline-flex items-center gap-1.5 font-semibold text-midnight">
    <Award className="w-4 h-4 text-gold" aria-hidden="true" />
    2× MDRT 2023 & 2024
  </span>
  <span className="inline-flex items-center gap-1.5">
    <CountUp end={22} suffix="+ yrs" className="font-bold text-midnight tabular-nums" />
    experience
  </span>
  <span className="inline-flex items-center gap-1.5">
    <CountUp end={2.7} decimals={1} suffix="k+" className="font-bold text-midnight tabular-nums" />
    families served
  </span>
  <span className="inline-flex items-center gap-1.5 font-semibold text-midnight">
    <Star className="w-4 h-4 text-gold fill-gold" aria-hidden="true" />
    5.0 on Google
  </span>
</div>
```

Place this directly above the CTA row (before the `<div className="flex flex-col sm:flex-row gap-3...">` CTA block), so order becomes: headline → subhead → trust strip → CTA → (no more stat grid below CTAs). Remove the now-orphaned `"LIC Advisor · Shela, Ahmedabad · Since 2004"` pill along with the badge row — that fact is already in the headline/subhead context and the office location lives in the footer/contact page.

- [ ] **Step 2: Reduce hero CTAs to one primary + one secondary text link, drop inline WhatsApp**

Replace the 3-button CTA block (lines 44-69) with:

```tsx
<div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-5 mb-8 lg:mb-10">
  <Link
    to="/contact"
    data-cta="hero-book"
    className="inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 bg-midnight text-white font-bold rounded-xl hover:bg-gold transition-all duration-300 gap-2 group btn-beam shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] text-sm lg:text-base w-full sm:w-auto min-h-11"
  >
    <span>Book Free Consultation</span>
    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
  </Link>
  <Link
    to="/services/policy-review-claims"
    className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-midnight hover:text-gold-dark transition-colors min-h-11"
  >
    Already have a policy? Get a free review
    <ArrowRight className="w-4 h-4" aria-hidden="true" />
  </Link>
</div>
```

Remove the `MessageCircle` import and `whatsappUrl` import/usage from `Hero.tsx` if no longer
referenced elsewhere in the file (check before removing — `HeroCoverageWidget` does not use them,
so they become unused once the inline WhatsApp CTA is gone). The floating `WhatsAppButton`
(desktop) and the global mobile sticky bar (`Layout.tsx`) already cover WhatsApp on every page,
including this one — no functionality is lost.

- [ ] **Step 3: Simplify the visual column — drop the rotated decorative border frame**

In the "Visual Column" block, remove the two `aria-hidden` rotated-border `div`s (the
`rotate-3 scale-105` and `-rotate-2 scale-105` decorative frames just before the photo). Keep the
photo, its gradient overlay, and the "Senior Advisor" caption card as-is — just drop the two frame
divs so the image reads as one clean card instead of a stack of rotated borders.

- [ ] **Step 4: Simplify the floating quote badge**

Keep the floating 5-star quote badge (`"She transformed how we think about our family's financial
future."`) but it's already fairly minimal — no change needed here beyond what Step 1 already
removed elsewhere. Leave `HeroCoverageWidget` untouched (still a strong mid-funnel interactive
hook, doesn't compete with the single hero CTA since it's below the fold in the visual column).

- [ ] **Step 5: Visual check**

Run: `npm run dev`
Open the homepage in a browser. Confirm:
- Headline + subhead + trust strip + one primary button are visible without scrolling on a
  standard 1440×900 desktop viewport and on a 390×844 mobile viewport.
- Only one button-styled CTA exists in the hero ("Book Free Consultation"); the policy-review link
  reads as a text link, not a button.
- No leftover unused-import TypeScript errors in the terminal (`MessageCircle`/`whatsappUrl` if
  removed).

- [ ] **Step 6: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat(hero): collapse trust signals to one strip, single primary CTA"
```

---

### Task 2: WhyUs — bento grid

**Files:**
- Modify: `src/components/WhyUs.tsx`

- [ ] **Step 1: Pick the lead differentiator and restructure the grid**

Replace the uniform `grid md:grid-cols-2 lg:grid-cols-4` 4-card grid (lines 47-65) with an
asymmetric bento layout: the claim-assistance card (`Hands-On Claim Assistance` — the strongest,
most concrete trust differentiator: "1,000+ claims supported to settlement") becomes one large
tile; the other three (`Recognised Expertise`, `Wealth Architecture`, `Concierge Support`) become
smaller tiles stacked beside/below it. Use a 12-column grid so the large tile spans more width on
desktop and all 4 stack to 1 column on mobile:

```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 reveal">
  {/* Large tile: lead differentiator */}
  <div
    onMouseMove={onMove}
    className="spotlight-card spotlight-dark group lg:col-span-6 lg:row-span-2 bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-center"
  >
    <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className="w-16 h-16 bg-linear-to-br from-gold to-gold-dark rounded-2xl rotate-3 group-hover:rotate-6 flex items-center justify-center mb-5 shadow-lg shadow-gold/20 transition-transform duration-300">
        <ShieldCheck size={28} className="text-midnight -rotate-3 group-hover:-rotate-6 transition-transform duration-300" />
      </div>
      <h3 className="text-2xl font-bold font-display mb-3 text-white group-hover:text-gold transition-colors">
        Hands-On Claim Assistance
      </h3>
      <p className="text-base text-gray-400 leading-relaxed font-light group-hover:text-gray-200 transition-colors max-w-md">
        1,000+ claims supported to settlement — intimation, documents and branch follow-up handled with your family. Settlement decisions rest with LIC.
      </p>
    </div>
  </div>

  {/* Three smaller supporting tiles */}
  {reasons.filter((r) => r.title !== 'Hands-On Claim Assistance').map((reason, index) => (
    <div
      key={index}
      onMouseMove={onMove}
      className="spotlight-card spotlight-dark group lg:col-span-6 bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex items-start gap-4">
        <div className="w-12 h-12 shrink-0 bg-linear-to-br from-gold to-gold-dark rounded-xl rotate-3 group-hover:rotate-6 flex items-center justify-center shadow-lg shadow-gold/20 transition-transform duration-300">
          <reason.icon size={20} className="text-midnight -rotate-3 group-hover:-rotate-6 transition-transform duration-300" />
        </div>
        <div>
          <h3 className="text-base font-bold font-display mb-1.5 text-white group-hover:text-gold transition-colors">{reason.title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed font-light group-hover:text-gray-200 transition-colors">{reason.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>
```

Note: `reasons.filter(...)` relies on `title` matching exactly — this is fine since `reasons` is a
small local const array in the same file, not external data.

- [ ] **Step 2: Visual check**

Run: `npm run dev`
Confirm on desktop (≥1024px): large claim-assistance tile sits on the left spanning 2 rows, the 3
supporting tiles fill the right side. On mobile (<768px): all 4 stack in a single column, large
tile first. Spotlight hover glow still tracks the cursor on each tile (move mouse over a card,
confirm the warm glow follows).

- [ ] **Step 3: Commit**

```bash
git add src/components/WhyUs.tsx
git commit -m "feat(why-us): rework into bento grid led by claim-assistance differentiator"
```

---

### Task 3: HomePage — spotlight discovery cards + surface testimonials

**Files:**
- Modify: `src/pages/HomePage.tsx`

- [ ] **Step 1: Add spotlight hover to the two discovery-band link cards**

Import `useSpotlight` and apply `onMouseMove={onMove}` + the `spotlight-card` class to both
`<Link>` cards in the "Explore services and reviews" section (lines 56-85). Add to imports:

```tsx
import { useSpotlight } from '../hooks/useSpotlight'
```

Inside the component body, alongside the existing `scrollProgress` state:

```tsx
const onMove = useSpotlight()
```

On the first card (`to="/services"`, light background), add `spotlight-card` (no `-dark` variant,
since this card has a white background and the default tint already suits light surfaces) and
`onMouseMove={onMove}`:

```tsx
<Link
  to="/services"
  onMouseMove={onMove}
  className="spotlight-card group flex items-center gap-4 p-5 md:p-6 bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-gold/40 transition-all min-h-11 relative overflow-hidden"
>
```

On the second card (`to="/reviews"`, dark `bg-midnight` background), add `spotlight-card
spotlight-dark` and `onMouseMove={onMove}`:

```tsx
<Link
  to="/reviews"
  onMouseMove={onMove}
  className="spotlight-card spotlight-dark group flex items-center gap-4 p-5 md:p-6 bg-midnight rounded-2xl border border-white/10 shadow-sm hover:shadow-lg transition-all min-h-11 relative overflow-hidden"
>
```

(`relative overflow-hidden` is required for the `.spotlight-card::before` glow layer to clip
correctly inside the rounded card — check the existing `WhyUs.tsx` cards already rely on their
parent having `relative overflow-hidden`, so this matches that pattern.)

- [ ] **Step 2: Import and insert Testimonials between Calculator and Stories/guides**

Add to imports at the top of `HomePage.tsx`:

```tsx
import Testimonials from '../components/Testimonials'
```

In the JSX return, insert `<Testimonials />` directly after `<Calculator />` and before the
`{/* Stories & guides preview ... */}` comment/section:

```tsx
<Calculator />
<Testimonials />
{/* Stories & guides preview — internal linking: ... */}
```

- [ ] **Step 3: Visual check**

Run: `npm run dev`
Confirm: hovering either discovery-band card shows the cursor-tracked glow (warm radial highlight
following the mouse). Scroll down past the calculator — the testimonial carousel now appears
(dark section, star ratings, dot navigation, prev/next arrows) before the Stories & Guides section.
Click the dot indicators and prev/next arrows — testimonials cycle correctly.

- [ ] **Step 4: Commit**

```bash
git add src/pages/HomePage.tsx
git commit -m "feat(homepage): add spotlight hover to discovery cards, surface testimonials"
```

---

### Task 4: Full build verification

**Files:** none (verification only)

- [ ] **Step 1: Run the production build**

Run: `npm run build`
Expected: TypeScript compiles with no errors, Vite build succeeds, SSR prerender step completes,
and `scripts/check-seo.mjs` passes (no new broken meta/canonical issues — this task made no
content/meta changes, only JSX structure/classes).

- [ ] **Step 2: Preview the production build**

Run: `npm run preview`
Open the printed local URL, re-check the same things as the Task 1/2/3 visual checks (hero single
CTA, trust strip, bento WhyUs, spotlight discovery cards, testimonials visible) against the
production build, not just dev mode.

- [ ] **Step 3: Final commit (if any build-only fixes were needed)**

Only if Step 1 or 2 surfaced an issue requiring a fix:

```bash
git add -A
git commit -m "fix: resolve build issues from homepage redesign"
```

If no issues were found, skip this step — nothing to commit.

---

## Self-review notes (plan author)

- **Spec coverage:** Hero simplification (spec §1) → Task 1. WhyUs bento (spec §2) → Task 2.
  Discovery band spotlight (spec §3) → Task 3 Step 1. Testimonials marquee (spec §4) — component
  already has carousel behavior built-in; only needed surfacing, not a rebuild → Task 3 Step 2.
  Sticky mobile CTA (spec §5) — already exists globally, no task needed (documented in Scope
  note). Section order (spec §6) — unchanged except Testimonials insertion, which matches spec's
  final order (Calculator → Testimonials → Stories/guides). Motion language (spec §7) — satisfied
  by reusing existing spotlight/magnetic-hover infra, no new dark-mode or beam effects added.
- **Placeholder scan:** no TBD/TODO; every step has literal code.
- **Type consistency:** `useSpotlight()` return type and usage (`onMouseMove={onMove}`) matches
  its existing usage in `WhyUs.tsx` exactly. `reasons` array shape (`icon`, `title`, `description`)
  unchanged in Task 2 — only the grid wrapper changes, not the data.
