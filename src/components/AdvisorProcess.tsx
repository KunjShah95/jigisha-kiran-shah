import { ArrowRight, FileSearch, MessageCircle, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const STEPS = [
  {
    icon: MessageCircle,
    title: 'Start with your situation',
    description:
      'Share what matters to you — family protection, a policy you already hold, education or retirement. Your first consultation is free.',
  },
  {
    icon: FileSearch,
    title: 'Understand your options',
    description:
      'Review suitable LIC options together, including premiums, benefits and what is not guaranteed. Take time to decide what fits.',
  },
  {
    icon: ShieldCheck,
    title: 'Get help beyond the paperwork',
    description:
      'Jigisha can help with policy servicing and claim documents. LIC issues policies and makes claim decisions.',
  },
]

export default function AdvisorProcess() {
  return (
    <section aria-labelledby="advisor-process-heading" className="bg-cream py-12 lg:py-16">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.5fr] lg:items-end lg:gap-12">
          <div className="max-w-lg">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-dark">
              Personal guidance, start to finish
            </p>
            <h2 id="advisor-process-heading" className="font-display text-2xl font-medium leading-tight text-midnight sm:text-3xl md:text-4xl">
              Know what to expect <span className="text-gold italic">before you begin.</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Speak directly with Jigisha, an LIC agent in Ahmedabad. Get clear explanations and support that continues after you choose a policy.
            </p>
            <Link
              to="/book"
              data-cta="process-book"
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-midnight px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-gold"
            >
              Book a free consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <ol className="grid gap-3 sm:grid-cols-3">
            {STEPS.map(({ icon: Icon, title, description }, index) => (
              <li key={title} className="rounded-2xl border border-border bg-white p-4 shadow-[0_1px_0_rgba(23,23,23,0.03)]">
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold/10 text-gold-dark">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold tabular-nums text-gray-400">0{index + 1}</span>
                </div>
                <h3 className="font-display text-base font-semibold leading-snug text-midnight sm:text-lg">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-gray-600 sm:text-sm">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
