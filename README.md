# jigishakiranshah.in

Website for **Jigisha Kiran Shah**, LIC advisor in Shela, Ahmedabad. React + TypeScript + Vite, prerendered to
static HTML, deployed on Vercel.

The site is a lead-generation asset, not a brochure. Its job is a qualified phone call, WhatsApp message or booked
consultation — not traffic for its own sake.

## Commands

```bash
npm install
npm run dev          # local dev server
npm run build        # tsc + client build + SSR build + prerender + SEO check
npm run preview      # serve dist/
npm run check:seo    # validate the built HTML (runs automatically in build)
```

`npm run build` fails if any page is missing a title, canonical or single `<h1>`, if JSON-LD is malformed, if a
rendered page contains a literal `\uXXXX` escape, or if `llms.txt` does not list every area/guide/story. Those
checks exist because each of those bugs was live at some point.

## How the SEO layer works

- **One source of truth per page.** Each page calls `useSEO()` with its title, description, canonical path and
  JSON-LD. `scripts/prerender.mjs` renders every route with the SSR bundle and writes the real HTML, so crawlers
  that ignore JavaScript (most AI bots) see the full page.
- **Routes are the sitemap.** `ROUTES` in `src/entry-server.tsx` drives both prerendering and `sitemap.xml`. Add a
  route there and it appears in both.
- **`llms.txt` / `llms-full.txt` are generated** from the same data files at build time (`src/lib/llms.ts`). Never
  edit them by hand; they live in `dist/`, not `public/`.
- **One business entity.** The homepage defines `#business` and `#person` with `@id`s. Every other page references
  those instead of redefining them.

## Lead capture

There is none on the server. Every form (contact, homepage assessment, `/book`, call back,
Protection Check) composes the enquiry and opens WhatsApp — that is the only channel it travels
on. The site is fully static, with no serverless function and nothing to configure.

The trade-off: a visitor who enters their details and closes WhatsApp without pressing send is
not recorded anywhere. Details in `docs/LEAD-CAPTURE.md`.

## Docs

| Document | What it covers |
|---|---|
| `docs/LEAD-CAPTURE.md` | How enquiries reach Jigisha now, and the trade-off of storing none |
| `docs/SEO-GEO-AEO-AUDIT.md` | Technical audit, sitemap inventory, AEO/GEO standard, competitor snapshot |
| `docs/KEYWORD-MAP.md` | Keyword → URL mapping, gap list, build order |
| `docs/CITATIONS.md` | NAP block, GBP checklist, directory submissions |
| `docs/COMPETITOR-BENCHMARK.md` | Feature-by-feature comparison with six peer sites |
| `docs/GROWTH-PLAYBOOK.md` | Off-site work, measurement events, content calendar |
| `docs/lead-sheet-template.csv` | Full-funnel lead tracking template |

## Stack

React 18 · TypeScript · Vite 5 · Tailwind CSS 4 · React Router 7 · Vercel (static + one serverless function) ·
Cal.com booking · optional GA4 via `VITE_GA4_ID`.
