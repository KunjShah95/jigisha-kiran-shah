import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, ShieldCheck, Clock, BookOpen, Calculator as CalcIcon, GitCompareArrows } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Hero from '../components/Hero'
import AdvisorProcess from '../components/AdvisorProcess'
import WhyUs from '../components/WhyUs'
import Calculator from '../components/Calculator'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import ObjectivePicker from '../components/ObjectivePicker'
import { TracingBeam } from '../components/aceternity/TracingBeam'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSpotlight } from '../hooks/useSpotlight'
import { useSEO } from '../hooks/useSEO'
import { faqJsonLd, localBusinessJsonLd, websiteJsonLd, personJsonLd } from '../lib/seo'
import { POSTS } from '../data/posts'

/** Compact discovery band — one row on desktop, two tiles per row on phones. */
const BAND: Array<{
  to: string
  icon: LucideIcon
  title: string
  subtitle: string
  dark?: boolean
  cta?: string
}> = [
  {
    to: '/services',
    icon: ShieldCheck,
    title: 'Explore LIC Plans',
    subtitle: 'Term, pension, child & wealth plans',
  },
  {
    to: '/calculators',
    icon: CalcIcon,
    title: 'Free Calculators',
    subtitle: 'Retirement & education corpus',
  },
  {
    to: '/guides/jeevan-utsav-vs-jeevan-umang',
    icon: GitCompareArrows,
    title: 'Jeevan Utsav vs Umang',
    subtitle: 'Income, bonuses & premium terms',
    cta: 'home-featured-guide',
  },
  {
    to: '/reviews',
    icon: Star,
    title: '5.0★ · 70+ Google Reviews',
    subtitle: 'Real stories from 2,700+ families',
    dark: true,
  },
]

export default function HomePage() {
  useSEO({
    title: 'LIC Agent in Ahmedabad | Jigisha Kiran Shah, 2x MDRT',
    description:
      'LIC agent in Ahmedabad with 22+ years, 2x MDRT and a 5.0★ Google rating. Term, pension, child education and claim help from the Shela office. Free call back: +91 98240 25435.',
    ogTitle: 'Jigisha Kiran Shah — LIC Advisor in Ahmedabad, Shela',
    ogDescription:
      'Trusted LIC advisor in Ahmedabad: term insurance, retirement & pension plans, child education. 22+ yrs, 2x MDRT, 5.0★ rated. Free consultation.',
    path: '/',
    htmlLang: 'en-IN',
    alternateLanguages: { 'en-IN': '/', 'gu-IN': '/gu', 'x-default': '/' },
    keywords:
      'LIC advisor Ahmedabad, LIC agent Ahmedabad, LIC agent near me, life insurance agent Ahmedabad, life insurance agency Shela, LIC agent Shela, life insurance agent Shela, best LIC agent Ahmedabad, retirement planning Ahmedabad, term insurance Ahmedabad, pension plans Gujarat, Jigisha Kiran Shah',
    jsonLd: [websiteJsonLd(), localBusinessJsonLd(), personJsonLd(), faqJsonLd()],
  })
  useScrollReveal()

  const [scrollProgress, setScrollProgress] = useState(0)
  const onMove = useSpotlight()

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
      <ObjectivePicker />
      <AdvisorProcess />
      <WhyUs />
      {/* Compact discovery band — links home visitors to Services & Reviews
          without the weight of full sections (keeps mobile scroll short) */}
      <section aria-label="Explore services and reviews" className="py-10 lg:py-16 bg-cream relative overflow-hidden">
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {BAND.map(({ to, icon: Icon, title, subtitle, dark, cta }) => (
            <Link
              key={to}
              to={to}
              onMouseMove={onMove}
              data-cta={cta}
              className={`spotlight-card group relative overflow-hidden flex flex-col gap-2.5 p-3.5 rounded-2xl border transition-all hover:-translate-y-0.5 min-h-11 sm:flex-row sm:items-center sm:gap-4 sm:p-5 sm:rounded-3xl ${
                dark
                  ? 'spotlight-dark bg-midnight border-white/10'
                  : 'bg-white border-border hover:border-gold/40 shadow-[0_1px_0_0_rgba(0,0,0,0.03)]'
              }`}
            >
              <span
                className={`relative z-10 w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                  dark ? 'bg-gold' : 'bg-gold/10 group-hover:bg-gold'
                }`}
              >
                <Icon
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                    dark ? 'text-midnight' : 'text-gold-dark group-hover:text-white'
                  }`}
                  aria-hidden="true"
                />
              </span>
              <span className="relative z-10 flex-1 min-w-0">
                <span className={`block font-bold text-sm sm:text-base ${dark ? 'text-white' : 'text-midnight'}`}>
                  {title}
                </span>
                <span className={`block text-xs sm:text-sm font-light ${dark ? 'text-white/50' : 'text-gray-500'}`}>
                  {subtitle}
                </span>
              </span>
              <ArrowRight
                className={`relative z-10 w-4 h-4 sm:w-5 sm:h-5 shrink-0 hidden sm:block group-hover:translate-x-1 transition-transform ${
                  dark ? 'text-gold' : 'text-gold-dark'
                }`}
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </section>
      <Calculator />
      <Testimonials />
      {/* Stories & guides preview — internal linking: lifts pages/visit and
          distributes homepage authority to blog posts */}
      <section aria-label="Stories and guides" className="py-10 lg:py-20 bg-white relative overflow-hidden">
        <div className="container">
          <div className="flex items-end justify-between gap-4 mb-5 lg:mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-midnight">
                22 years of lessons, <span className="text-gold italic">plainly told</span>
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
          <TracingBeam>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {POSTS.slice(0, 4).map((post, i) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  data-cta={`home-story-${post.slug}`}
                  onMouseMove={onMove}
                  className={`spotlight-card group relative overflow-hidden flex-col p-4 sm:p-5 bg-cream/70 rounded-2xl border border-border hover:border-gold/40 hover:-translate-y-0.5 transition-all ${
                    i === 3 ? 'hidden sm:flex' : 'flex'
                  }`}
                >
                  <span className="relative z-10 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-gold-dark mb-1.5">
                    {post.targetQuery}
                  </span>
                  <span className="relative z-10 font-bold text-midnight text-sm sm:text-[15px] leading-snug mb-2 group-hover:text-gold-dark transition-colors">
                    {post.title}
                  </span>
                  <span className="relative z-10 mt-auto inline-flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    {post.readMinutes} min read
                  </span>
                </Link>
              ))}
            </div>
          </TracingBeam>
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
      <FAQ searchable />
    </>
  )
}
