# Multi-Page Website Conversion

## Summary

Convert the single-page React app for LIC Advisor Jigisha Kiran Shah into a 5-page multi-page website to improve SEO, reduce bounce rate, and enable page-specific analytics.

## Routes & Page Content

| Route | Page | Sections |
|-------|------|----------|
| `/` | HomePage | Hero + WhyUs + Calculator |
| `/services` | ServicesPage | Services (6 LIC product cards) |
| `/about` | AboutPage | About (story, MDRT, values, features) |
| `/reviews` | ReviewsPage | Testimonials + Reviews (videos, Google slider, CTAs) |
| `/contact` | ContactPage | Contact form + contact methods |

## Architecture

- **Router:** `react-router-dom` v6 (BrowserRouter)
- **Index:** `main.tsx` wraps App with `<BrowserRouter>`
- **App.tsx:** `<Routes>` definitions instead of flat render
- **Layout:** Shared `Layout` component wrapping Header + `<Outlet>` + Footer + WhatsAppButton
- **Scroll reveal:** Extracted to reusable `useScrollReveal` hook, invoked per-page
- **Meta tags:** Reusable `useDocumentTitle` hook, called per-page

## Files to Create

- `src/pages/HomePage.tsx` — Hero + WhyUs + Calculator
- `src/pages/ServicesPage.tsx` — Services section
- `src/pages/AboutPage.tsx` — About section
- `src/pages/ReviewsPage.tsx` — Testimonials + Reviews
- `src/pages/ContactPage.tsx` — Contact section
- `src/components/Layout.tsx` — Header + Outlet + Footer + WhatsAppButton
- `src/hooks/useScrollReveal.ts` — shared scroll reveal logic
- `src/hooks/useDocumentTitle.ts` — per-page title setter

## Files to Modify

- `src/main.tsx` — wrap with BrowserRouter
- `src/App.tsx` — replace flat section render with Routes
- `src/components/Header.tsx` — replace `<a href="#...">` with `<Link to="...">`, add active link highlighting via `useLocation()`
- `src/components/Footer.tsx` — replace `<a href="#...">` with `<Link to="...">`

## Files Unchanged

- All section components (Hero, Services, About, WhyUs, Testimonials, Reviews, Contact, Calculator, WhatsAppButton)
- `src/index.css`, `vite.config.ts`, `package.json`, `index.html`

## Key Behaviors

- **Scroll progress bar:** Only on HomePage (not in Layout)
- **Per-page title:** Set via `useDocumentTitle("Title — Jigisha Kiran Shah")` in each page component
- **Calculator:** Moved from unused import to rendered on HomePage below WhyUs
- **Hash anchor removal:** All `id="home"`, `id="services"`, etc. removed from section components (no longer needed)
- **Active nav:** Header highlights current route using `useLocation().pathname`
- **Smooth scroll:** Removed from global CSS (no hash scrolling needed)
