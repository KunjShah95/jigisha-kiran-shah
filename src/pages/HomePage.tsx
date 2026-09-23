import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, ShieldCheck, Clock, BookOpen } from 'lucide-react'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
import Calculator from '../components/Calculator'
import FAQ from '../components/FAQ'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSEO } from '../hooks/useSEO'
import { faqJsonLd, localBusinessJsonLd, websiteJsonLd, personJsonLd } from '../lib/seo'
import { POSTS } from '../data/posts'

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
      {/* Stories & guides preview — internal linking: lifts pages/visit and
          distributes homepage authority to blog posts */}
      <section aria-label="Stories and guides" className="py-10 lg:py-14 bg-white relative overflow-hidden">
        <div className="container reveal">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-block px-3 py-1 bg-gold/10 text-gold-dark text-[11px] font-bold tracking-[0.2em] uppercase rounded-full mb-3">
                Stories & Guides
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-medium text-midnight">
                22 Years of Lessons, <span className="text-gold italic">Plainly Told</span>
              </h2>
            </div>
            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-gold-dark hover:gap-3 transition-all shrink-0"
            >
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              All stories
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col p-5 bg-cream rounded-2xl border border-border hover:border-gold/40 hover:shadow-lg transition-all"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold-dark mb-2">
                  {post.targetQuery}
                </span>
                <span className="font-bold text-midnight text-[15px] leading-snug mb-2 group-hover:text-gold-dark transition-colors">
                  {post.title}
                </span>
                <span className="mt-auto inline-flex items-center gap-1.5 text-xs text-gray-500">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {post.readMinutes} min read
                </span>
              </Link>
            ))}
          </div>
          <Link
            to="/blog"
            className="mt-4 sm:hidden inline-flex items-center gap-2 text-sm font-bold text-gold-dark"
          >
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            All stories
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
      <FAQ />
    </>
  )
}
