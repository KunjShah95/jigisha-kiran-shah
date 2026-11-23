import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../lib/contact'

const STEPS = [
  {
    title: 'Tell Jigisha what you need',
    description:
      'Send a message about your family, a policy you already have, your child’s education or retirement. The first chat is free.',
  },
  {
    title: 'Understand your choices',
    description:
      'She explains the options in plain words: what you pay, what you get, and what is not guaranteed. Take your time to decide.',
  },
  {
    title: 'Get help after you buy',
    description:
      'She helps with policy changes and claim paperwork. LIC issues the policy and decides every claim.',
  },
]

export default function AdvisorProcess() {
  return (
    <section aria-labelledby="advisor-process-heading" className="bg-paper py-14 lg:py-24 border-t border-border">
      <div className="container">
        <div className="max-w-2xl mb-8 lg:mb-12">
          <h2 id="advisor-process-heading" className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] leading-[1.05]">
            Know what to expect <span className="text-emerald">before you begin.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ink/60 max-w-xl">
            You deal with Jigisha herself, not a call centre. Clear answers now, and help for as long as your policy runs.
          </p>
        </div>

        <ol className="grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border">
          {STEPS.map(({ title, description }, index) => (
            <li key={title} className="sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <span className="font-display text-4xl font-extrabold tracking-tight text-emerald/25 sm:text-5xl" aria-hidden="true">
                0{index + 1}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-ink sm:text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{description}</p>
            </li>
          ))}
        </ol>

        <a
          href={whatsappUrl('Hi Jigisha ben, I found you on your website. I have a question about LIC insurance.')}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="process-whatsapp"
          className="mt-10 inline-flex min-h-11 items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-whatsapp-dark active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4 fill-current" aria-hidden="true" />
          Message Jigisha on WhatsApp
        </a>
      </div>
    </section>
  )
}