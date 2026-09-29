import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { Analytics } from '@vercel/analytics/react'
import { isProductionHost } from './lib/env'

// Staging/preview guard: never pollute production analytics, and never let
// crawlers index a non-production URL (belt-and-braces; Vercel also noindexes previews).
if (!isProductionHost()) {
  const meta = document.createElement('meta')
  meta.setAttribute('name', 'robots')
  meta.setAttribute('content', 'noindex, nofollow')
  document.head.appendChild(meta)
}

const root = document.getElementById('root')!
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {isProductionHost() ? <Analytics /> : null}
    </BrowserRouter>
  </React.StrictMode>
)

// Prerendered pages (scripts/prerender.mjs) already contain the full markup:
// hydrate it in place instead of wiping it. Dev server serves an empty root.
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, app)
else ReactDOM.createRoot(root).render(app)
