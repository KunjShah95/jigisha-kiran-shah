import { ArrowRight, BadgeCheck, MessageCircle, Phone, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { whatsappUrl } from '../lib/contact'

// WhatsApp is the primary CTA: it was the only path that converted in the
// first year's analytics, while 0 completed the booking flow.
const HERO_WA_TEXT = "Hi Jigisha ben, I found you on your website. I'd like to check if my family's life cover is enough."

const PROOF = [
  { value: '22+', label: 'years advising families' },
  { value: '2×', label: 'MDRT top-advisor award' },
  { value: '2,700+', label: 'families served' },
  { value: '1,000+', label: 'claims supported' },
] as const

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-paper pt-24 lg:pt-28">
      {/* Quiet depth: one soft sage wash behind the photo column, no blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-y-0 right-0 hidden w-[44%] bg-sage/40 lg:block" />
      </div>

      <div className="container relative">
        <div className="grid items-center gap-10 pb-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:gap-16 lg:pb-20">
          <div className="max-w-2xl">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-deep">
              LIC Advisor · Ahmedabad · Since 2004
            </p>
            <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.2rem]">
              Is your family&rsquo;s life cover <span className="text-emerald">enough?</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/65 sm:text-lg">
              Get a straight answer on WhatsApp from Jigisha Kiran Shah. Free to ask, no forms, no pressure.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappUrl(HERO_WA_TEXT)}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="hero-whatsapp"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-sm font-bold text-white transition duration-200 hover:bg-whatsapp-dark active:scale-[0.98]"
              >
                <MessageCircle className="h-5 w-5 fill-current" aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+919824025435"
                data-cta="hero-call"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:border-emerald hover:text-emerald-deep"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call +91 98240 25435
              </a>
            </div>
          </div>

          <figure className="relative mx-auto w-full max-w-[30rem] lg:ml-auto">
            <div className="relative overflow-hidden rounded-2xl bg-white p-2 shadow-[0_24px_60px_rgba(13,21,18,0.14)] ring-1 ring-border">
              {/* The MDRT felicitation frame, cropped to Jigisha, the certificate
                  and the LIC official. WebP copy is ~50% smaller. */}
              <picture className="block overflow-hidden rounded-xl">
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
              <figcaption className="flex items-center gap-2.5 px-3 py-3 sm:px-4">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-sage px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-deep">
                  <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  2× MDRT
                </span>
                <span className="text-[11px] leading-snug text-ink/60">
                  Felicitated by LIC, Ahmedabad · 2023 &amp; 2024
                </span>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>

      {/* Proof strip — the credentials, stated once, directly under the hero */}
      <div className="border-t border-border bg-white/60">
        <div className="container">
          <dl className="grid grid-cols-2 divide-border sm:grid-cols-4 sm:divide-x">
            {PROOF.map(({ value, label }, index) => (
              <div key={label} className={`py-5 sm:px-6 sm:first:pl-0 ${index > 0 ? 'sm:border-l-0' : ''} ${index % 2 === 1 ? 'border-l border-border pl-5 sm:pl-6' : ''}`}>
                <dt className="font-display text-2xl font-extrabold leading-none tracking-tight text-ink sm:text-[1.75rem]">{value}</dt>
                <dd className="mt-1.5 text-xs text-ink/55">{label}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border py-3.5 text-xs text-ink/60">
            <Link to="/reviews" className="inline-flex items-center gap-2 font-medium transition-colors hover:text-emerald-deep">
              <span className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-3 w-3 fill-emerald text-emerald" aria-hidden="true" />
                ))}
              </span>
              5.0 on Google · 70+ reviews
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </Link>
            <span className="hidden sm:inline text-ink/30" aria-hidden="true">·</span>
            <span>
              Already have an LIC policy, even from another agent?{' '}
              <Link to="/services/policy-review-claims" data-cta="hero-policy-review" className="font-bold text-emerald-deep underline underline-offset-2 hover:text-emerald">
                Get it checked free
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}