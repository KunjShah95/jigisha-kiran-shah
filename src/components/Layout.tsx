import { Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Phone, MessageCircle } from 'lucide-react'
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
      {/* Global mobile sticky CTA — every page gets thumb-reach call/WhatsApp,
          with safe-area padding and a spacer so content is never covered */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-border shadow-2xl px-4 pt-3 flex gap-3" style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}>
        <a
          href="https://wa.me/919824025435"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-whatsapp text-white font-bold py-3 rounded-xl text-sm hover:bg-whatsapp-dark transition-colors min-h-11"
        >
          <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href="tel:+919824025435"
          className="flex-1 flex items-center justify-center gap-2 bg-midnight text-white font-bold py-3 rounded-xl text-sm hover:bg-midnight-light transition-colors min-h-11"
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          Call Now
        </a>
      </div>
      <div aria-hidden="true" className="h-20 md:hidden" />
    </div>
  )
}
