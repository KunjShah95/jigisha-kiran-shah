import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { Analytics } from '@vercel/analytics/react'
import { isProductionHost, applyTrackingOptOut, isTrackingDisabled } from './lib/env'
import { initGA4, initClarity } from './lib/analytics'
import { captureFirstTouch } from './lib/attribution'

// Before anything else, while the landing URL and referrer are intact.
captureFirstTouch()

// Staging/preview guard: never pollute production analytics, and never let
// crawlers index a non-production URL (belt-and-braces; Vercel also noindexes previews).
if (!isProductionHost()) {
  const meta = document.createElement('meta')
  meta.setAttribute('name', 'robots')
  meta.setAttribute('content', 'noindex, nofollow')
  document.head.appendChild(meta)
}

// ?notrack=1 / ?notrack=0 — exclude this device from analytics (see lib/env.ts).
applyTrackingOptOut()
const countVisits = isProductionHost() && !isTrackingDisabled()

if (countVisits) {
  initGA4(import.meta.env.VITE_GA4_ID)
  initClarity(import.meta.env.VITE_CLARITY_ID)
}

const root = document.getElementById('root')!
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {countVisits ? <Analytics /> : null}
    </BrowserRouter>
  </React.StrictMode>
)

// Prerendered pages (scripts/prerender.mjs) already contain the full markup:
// hydrate it in place instead of wiping it. Dev server serves an empty root.
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, app)
else ReactDOM.createRoot(root).render(app)
