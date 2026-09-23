import { Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import { initAnalytics } from '../lib/analytics'

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" aria-busy="true" aria-live="polite">
      <div aria-hidden="true" className="size-8 rounded-full border-2 border-gold/30 border-t-gold animate-spin" />
      <span className="sr-only">Loading…</span>
    </div>
  )
}

export default function Layout() {
  useEffect(() => {
    initAnalytics();
  }, []);
  return (
    <div className="app">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-midnight focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
