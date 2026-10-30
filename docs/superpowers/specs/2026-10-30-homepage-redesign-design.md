# Homepage Redesign — Conversion-First Premium Polish

## Goal
Elevate the homepage to recent.design / Aceternity / 21st.dev craft level while keeping the
existing light, premium-trust brand (gold/midnight/cream, Fraunces + Plus Jakarta Sans). Primary
success metric: a first-time visitor understands who this is, what they offer, and what to do
next within 30 seconds, with one unambiguous primary conversion path (book free consultation).

## Non-goals
- No dark/hacker-SaaS aesthetic (rejected — insurance needs trust, not edge).
- No rebuild of Header, Footer, Calculator, FAQ, ObjectivePicker internals — only usage/placement
  may shift. These components already function and read as reasonably polished.
- No other pages in this pass (services, about, blog, etc.) — homepage only.
- No backend/lead-capture logic changes.

## Current state (baseline)
- `Hero.tsx`: 2 badges + headline + subhead + 3 CTAs (Book / WhatsApp / Review Policies) of near
  equal visual weight + 4-tile stat row + photo with rotated decorative border + floating quote
  badge + `HeroCoverageWidget`.
- `WhyUs.tsx`: stacked/grid cards (to confirm exact layout on open, same weight throughout).
- Homepage order: Hero → ObjectivePicker → WhyUs → discovery band (2 link cards) → Calculator →
  Stories/guides → FAQ.
- `WhatsAppButton.tsx` exists as a separate floating component (need to confirm it's mounted
  globally in `Layout.tsx`; hero's inline WhatsApp CTA is redundant with it).

## Design

### 1. Hero — single clear hook, one primary CTA
- Headline: cut to ~8 words, large, no competing clauses.
- Trust proof: collapse the 2 pill badges + 4 stat tiles into **one** compact horizontal trust
  strip (thin, numbers-as-text style, not boxed cards) sitting just under the headline/subhead —
  always visible without scrolling on common viewports.
- CTAs: **one** primary button ("Book Free Consultation"). "Review My Policies" becomes a
  secondary text link (not a button). Inline WhatsApp CTA removed from hero — rely on the
  persistent floating `WhatsAppButton`. If `WhatsAppButton` is not currently mounted in
  `Layout.tsx`, mount it there as part of this change.
- Visual: keep the advisor photo (face = trust). Drop the rotated double-border decorative frame
  (reads templated). Keep a single floating proof badge — the 5★ quote — simplified.
- Keep `HeroCoverageWidget` (interactive, functional, good mid-funnel hook) but only if it does not
  visually compete with the primary CTA for attention; may move slightly lower/lighter-weight.

### 2. WhyUs — bento grid
- Replace uniform stacked/grid cards with an asymmetric bento layout: one large tile for the
  strongest differentiator (22 yrs / MDRT / claim-help story — pick the single best one), 3-4
  smaller supporting tiles around it.
- Apply spotlight-on-hover micro-interaction (cursor-tracked radial glow on card surface) —
  Aceternity-signature treatment, kept subtle (low opacity, gold-tinted) to match premium-trust
  tone, not a dark hacker aesthetic.

### 3. Services discovery band → spotlight cards
- Keep the existing 2-card "Explore LIC Plans" / "5.0★ reviews" band but give both cards the same
  spotlight-hover treatment as WhyUs for visual consistency.

### 4. Testimonials
- Convert `Testimonials.tsx` display (wherever it's used/added to homepage) from static layout to
  a marquee/carousel so more proof surfaces without adding scroll length. Confirm current usage —
  if not currently on homepage, add it between Calculator and Stories/guides.

### 5. Sticky mobile CTA bar
- New small component: a thin bar pinned to the bottom of the viewport on mobile only, holding the
  single primary CTA ("Book Free Consultation") so it's always one tap away during long scroll.
  Suppressed when footer/contact section is in view to avoid overlap.

### 6. Section order (final)
Hero → ObjectivePicker → WhyUs (bento) → Services discovery band (spotlight cards) → Calculator →
Testimonials (marquee) → Stories/guides → FAQ.
(ObjectivePicker, Calculator, Stories/guides, FAQ keep current internals — reorder only if a
rebuilt WhyUs/Hero makes current order visually awkward.)

### 7. Motion language
- Subtle, premium: spotlight-hover on cards, magnetic hover on primary buttons, existing
  scroll-progress bar and count-up numbers kept as-is, existing `reveal` scroll-in animations kept.
- No background beams, no moving-border glow rings, no dark-mode variant.

## Files touched
- `src/components/Hero.tsx` — rewrite per section 1
- `src/components/WhyUs.tsx` — rewrite as bento grid with spotlight hover
- `src/pages/HomePage.tsx` — discovery band cards get spotlight treatment; confirm/insert
  Testimonials; confirm order
- `src/components/Testimonials.tsx` — convert to marquee/carousel
- `src/components/Layout.tsx` — confirm `WhatsAppButton` mounted globally
- New: `src/components/StickyMobileCTA.tsx`
- Possibly new: shared `SpotlightCard` wrapper/util for hover-glow reuse across WhyUs + discovery
  band cards

## Testing
- `npm run dev`, visually verify hero reads in one glance, single primary CTA stands out, mobile
  sticky CTA bar behaves (appears, hides near footer), spotlight hover works on card hover (desktop)
  and doesn't break touch (mobile — spotlight hover simply inert, no broken layout).
- Check `prefers-reduced-motion` still respected (existing global rule in `index.css`).
- Run `npm run build` to confirm SSR prerender + SEO checks still pass unchanged (no content/meta
  changes in this pass).
