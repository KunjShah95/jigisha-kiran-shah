import { FileSearch, MessageCircle, ShieldCheck } from 'lucide-react'
import { whatsappUrl } from '../lib/contact'

const STEPS = [
  {
    icon: MessageCircle,
    title: 'Tell Jigisha what you need',
    description:
      'Send a message about your family, a policy you already have, your child’s education or retirement. The first chat is free.',
  },
  {
    icon: FileSearch,
    title: 'Understand your choices',
    description:
      'She explains the options in plain words: what you pay, what you get, and what is not guaranteed. Take your time to decide.',
  },
  {
    icon: ShieldCheck,
    title: 'Get help after you buy',
    description:
      'She helps with policy changes and claim paperwork. LIC issues the policy and decides every claim.',
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
              You deal with Jigisha herself, not a call centre. Clear answers now, and help for as long as your policy runs.
            </p>
            <a
              href={whatsappUrl('Hi Jigisha ben, I found you on your website. I have a question about LIC insurance.')}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="process-whatsapp"
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-whatsapp px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-whatsapp-dark"
            >
              <MessageCircle className="h-4 w-4 fill-current" aria-hidden="true" /> Message Jigisha on WhatsApp
            </a>
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
