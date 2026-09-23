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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {isProductionHost() ? <Analytics /> : null}
    </BrowserRouter>
  </React.StrictMode>,
)
