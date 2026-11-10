import { ArrowRight, BadgeCheck, MessageCircle, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { whatsappUrl } from '../lib/contact'

// WhatsApp is the primary CTA: it was the only path that converted in the
// first year's analytics (9 visitors), while 0 completed the booking flow.
const HERO_WA_TEXT = "Hi Jigisha ben, I found you on your website. I'd like to check if my family's life cover is enough."

const PROOF = [
  { value: '22+', label: 'years advising families' },
  { value: '2×', label: 'MDRT · 2023 & 2024' },
  { value: '2,700+', label: 'families served' },
] as const

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f6f0e7] pt-24 pb-12 lg:pt-28 lg:pb-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-24 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#e8d2b5]/55 blur-[100px]" />
        <div className="absolute -bottom-64 left-[24%] h-[30rem] w-[30rem] rounded-full bg-white/80 blur-[100px]" />
        <div className="absolute inset-y-0 right-0 hidden w-[42%] border-l border-[#dfd3c3] bg-white/25 lg:block" />
      </div>

      <div className="container relative">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(390px,0.92fr)] lg:gap-14 xl:gap-20">
          <div className="max-w-2xl">
            <h1 className="max-w-[13ch] font-display text-[2.8rem] font-medium leading-[1.04] tracking-[-0.035em] text-midnight sm:text-6xl lg:text-[4.25rem] xl:text-[4.65rem]">
              Is your family&rsquo;s life cover <span className="text-gold-dark italic">enough?</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#59544d] sm:text-lg">
              Start with a conversation, not a form. Review the full picture one-to-one with Jigisha Kiran Shah, an LIC agent in Ahmedabad with 22+ years of experience.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={whatsappUrl(HERO_WA_TEXT)}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="hero-whatsapp"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(37,211,102,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-whatsapp-dark focus-visible:outline-offset-4"
              >
                <MessageCircle className="h-5 w-5 fill-current" aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <Link
                to="/book"
                data-cta="hero-book"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#cdbba3] bg-white/70 px-5 py-3.5 text-sm font-semibold text-midnight transition-colors hover:border-gold-dark hover:bg-white"
              >
                Book a free consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-2 text-xs text-gray-600">
              Free, for any LIC policy — even one another agent sold.{' '}
              <Link to="/services/policy-review-claims" data-cta="hero-policy-review" className="font-semibold text-gold-dark underline underline-offset-2 hover:text-gold">
                Get a free policy review
              </Link>
            </p>

            <dl className="mt-7 grid max-w-xl grid-cols-3 border-t border-[#d9cdbc] pt-4">
              {PROOF.map(({ value, label }, index) => (
                <div key={label} className={`pr-2 ${index > 0 ? 'border-l border-[#d9cdbc] pl-3 sm:pl-6' : ''}`}>
                  <dt className="font-display text-2xl font-semibold leading-none tracking-tight text-midnight sm:text-[1.75rem]">{value}</dt>
                  <dd className="mt-2 text-[10px] leading-snug text-gray-600 sm:text-xs">{label}</dd>
                </div>
              ))}
            </dl>
            <Link to="/reviews" className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-gray-600 transition-colors hover:text-gold-dark">
              <span className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-3 w-3 fill-gold text-gold" aria-hidden="true" />
                ))}
              </span>
              5.0 on Google · Read client reviews <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </Link>
          </div>

          <figure className="relative mx-auto w-full max-w-[32rem] lg:ml-auto">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[1.75rem] border border-[#d7c7b2] sm:-inset-4" />
            <div className="relative overflow-hidden rounded-[1.5rem] bg-white shadow-[0_24px_70px_rgba(63,47,29,0.13)]">
              {/* The MDRT felicitation frame, cropped to Jigisha, the certificate
                  and the LIC official, so the hero shows the person the visitor
                  would actually meet. Crop lives in public/hero-mrdt.jpg; the WebP
                  copy is ~50% smaller and is what modern browsers load. */}
              <picture className="block">
              <source srcSet="/hero-mrdt.webp" type="image/webp" />
              <img
                src="/hero-mrdt.jpg"
                alt="Jigisha Kiran Shah, holding a bouquet, beside the MDRT 2023 certificate at the LIC felicitation in Ahmedabad"
                width={610}
                height={762}
                loading="eager"
                decoding="async"
                className="aspect-[5/4] w-full object-cover object-center sm:aspect-[4/5]"
              />
              </picture>
              <figcaption className="flex items-center gap-2.5 border-t border-[#eee7dd] px-4 py-3 sm:px-5">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#f5ebdc] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-gold-dark">
                  <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  2× MDRT
                </span>
                <span className="text-[11px] leading-snug text-gray-600">
                  Felicitated by LIC, Ahmedabad · 2023 &amp; 2024
                </span>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
