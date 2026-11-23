import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Calculator as CalcIcon, GitCompareArrows, Star, MessageCircle, Phone, Clock } from 'lucide-react'
import Hero from '../components/Hero'
import ScrollProgress from '../components/ScrollProgress'
import AdvisorProcess from '../components/AdvisorProcess'
import WhyUs from '../components/WhyUs'
import Calculator from '../components/Calculator'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import ObjectivePicker from '../components/ObjectivePicker'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSpotlight } from '../hooks/useSpotlight'
import { useSEO } from '../hooks/useSEO'
import { faqJsonLd, localBusinessJsonLd, websiteJsonLd, personJsonLd } from '../lib/seo'
import { whatsappUrl } from '../lib/contact'
import { POSTS } from '../data/posts'

export default function HomePage() {
  useSEO({
    title: 'Life Insurance Advisor in Ahmedabad | Jigisha Kiran Shah, LIC',
    description:
      'Life insurance and family protection advice in Ahmedabad from Jigisha Kiran Shah, LIC advisor since 2004. Free to ask: WhatsApp or call +91 98240 25435.',
    ogTitle: 'Jigisha Kiran Shah — LIC Advisor in Ahmedabad, Shela',
    ogDescription:
      'Trusted LIC advisor in Ahmedabad: term insurance, retirement & pension plans, child education. 22+ yrs, 2x MDRT, 5.0★ rated. Free consultation.',
    path: '/',
    htmlLang: 'en-IN',
    alternateLanguages: { 'en-IN': '/', 'gu-IN': '/gu', 'hi-IN': '/hi', 'x-default': '/' },
    keywords:
      'life insurance advisor Ahmedabad, life insurance consultant Ahmedabad, insurance advisor Ahmedabad, financial protection advisor Ahmedabad, LIC advisor Ahmedabad, LIC agent Ahmedabad, LIC agent near me, life insurance agent Ahmedabad, life insurance agency Shela, LIC agent Shela, life insurance agent Shela, best LIC agent Ahmedabad, retirement planning Ahmedabad, term insurance Ahmedabad, pension plans Gujarat, Jigisha Kiran Shah',
    jsonLd: [websiteJsonLd(), localBusinessJsonLd(), personJsonLd(), faqJsonLd()],
  })
  useScrollReveal()

  const onMove = useSpotlight()

  return (
    <>
      <ScrollProgress />
      <Hero />
      <ObjectivePicker />
      <AdvisorProcess />
      <WhyUs />

      {/* Discovery bento — four asymmetric cells, each a different surface,
          linking home visitors deeper into the site */}
      <section aria-label="Explore services and reviews" className="py-14 lg:py-24 bg-white border-t border-border">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4">
            <Link
              to="/services"
              onMouseMove={onMove}
              className="spotlight-card group relative overflow-hidden rounded-2xl bg-sage/70 border border-emerald/15 p-6 lg:p-8 flex flex-col justify-between gap-6 sm:col-span-2 lg:col-span-5 lg:row-span-2 transition-all hover:-translate-y-0.5 hover:border-emerald/40"
            >
              <span className="relative z-10 w-12 h-12 rounded-xl bg-emerald flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-white" aria-hidden="true" />
              </span>
              <span className="relative z-10">
                <span className="block font-display text-2xl lg:text-3xl font-extrabold tracking-tight text-ink">Explore LIC plans</span>
                <span className="block mt-2 text-sm text-ink/60 max-w-xs">Family cover, pension, child education and savings — explained in plain words.</span>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-deep group-hover:gap-3 transition-all">
                  See all plans <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </span>
            </Link>

            <Link
              to="/calculators"
              onMouseMove={onMove}
              className="spotlight-card group relative overflow-hidden rounded-2xl bg-paper border border-border p-6 flex flex-col justify-between gap-4 lg:col-span-4 transition-all hover:-translate-y-0.5 hover:border-emerald/40"
            >
              <span className="relative z-10 w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center group-hover:bg-emerald group-hover:border-emerald transition-colors">
                <CalcIcon className="w-5 h-5 text-emerald-deep group-hover:text-white transition-colors" aria-hidden="true" />
              </span>
              <span className="relative z-10">
                <span className="block font-display text-lg font-extrabold tracking-tight text-ink">Free calculators</span>
                <span className="block mt-1 text-sm text-ink/55">How much should you save?</span>
              </span>
            </Link>

            <Link
              to="/reviews"
              onMouseMove={onMove}
              className="spotlight-card spotlight-dark group relative overflow-hidden rounded-2xl bg-emerald p-6 flex flex-col justify-between gap-4 lg:col-span-3 transition-all hover:-translate-y-0.5 hover:bg-emerald-deep"
            >
              <span className="relative z-10 flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" aria-hidden="true" />
                ))}
              </span>
              <span className="relative z-10">
                <span className="block font-display text-lg font-extrabold tracking-tight text-white">5.0 on Google</span>
                <span className="block mt-1 text-sm text-white/75">70+ reviews · 2,700+ families</span>
              </span>
            </Link>

            <Link
              to="/guides/jeevan-utsav-vs-jeevan-umang"
              data-cta="home-featured-guide"
              onMouseMove={onMove}
              className="spotlight-card spotlight-dark group relative overflow-hidden rounded-2xl bg-ink p-6 lg:p-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:col-span-2 lg:col-span-7 transition-all hover:-translate-y-0.5"
            >
              <span className="relative z-10 w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                <GitCompareArrows className="w-5 h-5 text-emerald-bright" aria-hidden="true" />
              </span>
              <span className="relative z-10 flex-1 min-w-0">
                <span className="block font-display text-lg font-extrabold tracking-tight text-white">Jeevan Utsav vs Jeevan Umang</span>
                <span className="block mt-1 text-sm text-white/55">Two lifelong-income plans, side by side.</span>
              </span>
              <ArrowRight className="relative z-10 w-5 h-5 text-emerald-bright shrink-0 hidden sm:block group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Calculator />

      {/* Stories & guides preview — internal linking: lifts pages/visit and
          distributes homepage authority to blog posts */}
      <section aria-label="Stories and guides" className="py-14 lg:py-24 bg-paper border-t border-border">
        <div className="container">
          <div className="flex items-end justify-between gap-4 mb-6 lg:mb-10">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl leading-[1.05] max-w-xl">
              22 years of lessons, <span className="text-emerald">plainly told.</span>
            </h2>
            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-emerald-deep hover:gap-3 transition-all shrink-0"
            >
              All stories
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-10 border-t border-border">
            {POSTS.slice(0, 4).map((post, i) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                data-cta={`home-story-${post.slug}`}
                className={`group flex items-start gap-4 border-b border-border py-5 transition-colors hover:bg-white/60 sm:px-2 ${
                  i === 3 ? 'hidden sm:flex' : 'flex'
                }`}
              >
                <span className="font-display text-lg font-extrabold text-emerald/30 tabular-nums shrink-0 pt-0.5" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-bold text-ink text-[15px] leading-snug group-hover:text-emerald-deep transition-colors">
                    {post.title}
                  </span>
                  <span className="mt-1.5 flex items-center gap-2 text-xs text-ink/50">
                    <span className="font-bold uppercase tracking-[0.1em] text-emerald-deep/70">{post.targetQuery}</span>
                    <span aria-hidden="true">·</span>
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    {post.readMinutes} min read
                  </span>
                </span>
                <ArrowRight className="w-4 h-4 text-emerald-deep shrink-0 mt-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <Link
            to="/blog"
            className="mt-5 sm:hidden inline-flex items-center gap-2 text-sm font-bold text-emerald-deep"
          >
            All stories
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <FAQ searchable />

      {/* Dark closing band flows into the footer — one deliberate theme switch */}
      <Testimonials />
      <section aria-label="Book a consultation" className="bg-ink text-white pb-16 lg:pb-24">
        <div className="container">
          <div className="border-t border-white/10 pt-12 lg:pt-16 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight leading-[1.05] sm:text-4xl lg:text-5xl">
                Talk to Jigisha <span className="text-emerald-bright">today.</span>
              </h2>
              <p className="mt-3 text-white/60 text-sm sm:text-base max-w-md">
                Free to ask. Open Mon–Sat, 9 AM–6 PM. Office at Orchid Legacy, Shela, Ahmedabad.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <a
                href={whatsappUrl("Hi Jigisha ben, I found you on your website. I'd like to book a free consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="final-whatsapp"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-whatsapp-dark active:scale-[0.98]"
              >
                <MessageCircle className="h-5 w-5 fill-current" aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+919824025435"
                data-cta="final-call"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-emerald-bright hover:text-emerald-bright"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call +91 98240 25435
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}