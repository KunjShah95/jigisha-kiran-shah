import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Phone, MessageCircle, ArrowRight, Star, ShieldCheck } from 'lucide-react'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
import Calculator from '../components/Calculator'
import FAQ from '../components/FAQ'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSEO } from '../hooks/useSEO'
import { faqJsonLd, localBusinessJsonLd, websiteJsonLd, personJsonLd } from '../lib/seo'

export default function HomePage() {
  useSEO({
    title: 'Jigisha Kiran Shah | LIC Advisor in Ahmedabad, Shela',
    description:
      'LIC advisor in Ahmedabad (Shela) — 22+ yrs, 2x MDRT, 5.0★ rated. Term insurance, pension plans & child education for 2,700+ families. Free consultation: +91 98240 25435.',
    ogTitle: 'Jigisha Kiran Shah — LIC Advisor in Ahmedabad, Shela',
    ogDescription:
      'Trusted LIC advisor in Ahmedabad: term insurance, retirement & pension plans, child education. 22+ yrs, 2x MDRT, 5.0★ rated. Free consultation.',
    path: '/',
    keywords:
      'LIC advisor Ahmedabad, LIC agent near me, life insurance agent Shela, best LIC agent Ahmedabad, retirement planning Ahmedabad, term insurance Ahmedabad, pension plans Gujarat, Jigisha Kiran Shah',
    jsonLd: [websiteJsonLd(), localBusinessJsonLd(), personJsonLd(), faqJsonLd()],
  })
  useScrollReveal()

  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0
      setScrollProgress(currentProgress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div
        className="scroll-progress"
        style={{
          width: `${scrollProgress}%`,
          transition: 'width 0.1s ease-out',
        }}
        aria-hidden="true"
      />
      <Hero />
      <WhyUs />
      {/* Compact discovery band — links home visitors to Services & Reviews
          without the weight of full sections (keeps mobile scroll short) */}
      <section aria-label="Explore services and reviews" className="py-10 lg:py-14 bg-cream relative overflow-hidden">
        <div className="container grid sm:grid-cols-2 gap-3 md:gap-4 reveal">
          <Link
            to="/services"
            className="group flex items-center gap-4 p-5 md:p-6 bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-gold/40 transition-all min-h-11"
          >
            <span className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
              <ShieldCheck className="w-5 h-5 text-gold-dark group-hover:text-white transition-colors" aria-hidden="true" />
            </span>
            <span className="flex-1 min-w-0">
              <span className="block font-bold text-midnight text-[15px] md:text-base">Explore LIC Plans</span>
              <span className="block text-xs md:text-sm text-gray-500 font-light">Term, pension, child & wealth plans</span>
            </span>
            <ArrowRight className="w-5 h-5 text-gold-dark shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
          <Link
            to="/reviews"
            className="group flex items-center gap-4 p-5 md:p-6 bg-midnight rounded-2xl border border-white/10 shadow-sm hover:shadow-lg transition-all min-h-11"
          >
            <span className="w-11 h-11 rounded-xl bg-gold flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 text-midnight fill-midnight" aria-hidden="true" />
            </span>
            <span className="flex-1 min-w-0">
              <span className="block font-bold text-white text-[15px] md:text-base">5.0★ · 100+ Google Reviews</span>
              <span className="block text-xs md:text-sm text-white/60 font-light">Real stories from 2,700+ families</span>
            </span>
            <ArrowRight className="w-5 h-5 text-gold shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </section>
      <Calculator />
      <FAQ />

      {/* Mobile Sticky CTA Bar */}
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
    </>
  )
}
