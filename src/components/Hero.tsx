import { ArrowRight, BadgeCheck, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import HeroCoverageWidget from './HeroCoverageWidget'

const PROOF = [
  { value: '22+', label: 'years advising families' },
  { value: '2×', label: 'MDRT · 2023 & 2024' },
  { value: '2,700+', label: 'families served' },
] as const

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f6f0e7] pt-28 pb-14 sm:pt-32 lg:pt-36 lg:pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-24 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#e8d2b5]/55 blur-[100px]" />
        <div className="absolute -bottom-64 left-[24%] h-[30rem] w-[30rem] rounded-full bg-white/80 blur-[100px]" />
        <div className="absolute inset-y-0 right-0 hidden w-[42%] border-l border-[#dfd3c3] bg-white/25 lg:block" />
      </div>

      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(390px,0.92fr)] lg:gap-14 xl:gap-20">
          <div className="max-w-2xl">
            <h1 className="max-w-[13ch] font-display text-[2.8rem] font-medium leading-[1.04] tracking-[-0.035em] text-midnight sm:text-6xl lg:text-[4.25rem] xl:text-[4.65rem]">
              Is your family&rsquo;s life cover <span className="text-gold-dark italic">enough?</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#59544d] sm:text-lg">
              Start with a simple estimate. Then, if you want, review the full picture one-to-one with Jigisha Kiran Shah, an LIC agent in Ahmedabad with 22+ years of experience.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                to="/book"
                data-cta="hero-book"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-midnight px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(23,23,23,0.14)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#29292d] focus-visible:outline-offset-4"
              >
                Book a free consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                to="/services/policy-review-claims"
                data-cta="hero-policy-review"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#cdbba3] bg-white/70 px-5 py-3.5 text-sm font-semibold text-midnight transition-colors hover:border-gold-dark hover:bg-white"
              >
                Get a free policy review
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-2 text-xs text-gray-600">Your first consultation is free. Talk by phone, WhatsApp or in person.</p>

            <dl className="mt-9 grid max-w-xl grid-cols-3 border-t border-[#d9cdbc] pt-5">
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

          <div className="relative mx-auto w-full max-w-[32rem] lg:ml-auto">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[1.75rem] border border-[#d7c7b2] sm:-inset-4" />
            <div className="relative rounded-[1.5rem] bg-white p-4 shadow-[0_24px_70px_rgba(63,47,29,0.13)] sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3 border-b border-[#eee7dd] pb-4">
                <div>
                  <h2 className="font-display text-2xl font-semibold leading-tight text-midnight sm:text-[1.7rem]">Quick Cover Check</h2>
                  <p className="mt-1 text-xs leading-relaxed text-gray-600">A rough starting point. No form to fill in.</p>
                </div>
                <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5ebdc] text-gold-dark sm:flex" aria-hidden="true">
                  <BadgeCheck className="h-5 w-5" />
                </span>
              </div>
              <HeroCoverageWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
