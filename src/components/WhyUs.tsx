import { Award, ShieldCheck, HeartPulse, Headphones, MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../lib/contact';
import { useSpotlight } from '../hooks/useSpotlight';

const PILLARS = [
  {
    id: 'claim-assistance',
    icon: ShieldCheck,
    title: 'Help when a claim comes up',
    description:
      'Jigisha has helped families through 1,000+ claims. She fills in the forms, gathers the documents and follows up at the LIC branch. LIC makes the final decision on every claim.',
    span: 'lg:col-span-7 lg:row-span-2',
    tint: 'bg-white',
  },
  {
    id: 'expertise',
    icon: Award,
    title: 'An award-winning advisor',
    description: 'Licensed LIC agent since 2004. Won the MDRT top-advisor award in 2023 and 2024.',
    span: 'lg:col-span-5',
    tint: 'bg-sage/60',
  },
  {
    id: 'wealth',
    icon: HeartPulse,
    title: 'Plans built around your goals',
    description: 'No one-size-fits-all pitch. She starts with your family, your income and what you want to achieve.',
    span: 'lg:col-span-5',
    tint: 'bg-white',
  },
  {
    id: 'concierge',
    icon: Headphones,
    title: 'One person you can always reach',
    description: 'Message or call Jigisha directly for policy changes, premium questions or an urgent claim.',
    span: 'lg:col-span-12',
    tint: 'bg-ink text-white',
  },
] as const;

const WhyUs = () => {
  const onMove = useSpotlight();

  return (
    <section className="py-14 lg:py-24 bg-paper border-t border-border">
      <div className="container">
        <div className="max-w-2xl mb-8 lg:mb-12">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] leading-[1.05]">
            22 years of LIC experience, <span className="text-emerald">one person to talk to.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ink/60 max-w-xl">
            Simple explanations and personal help at every stage, from your first question to your last claim.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4">
          {PILLARS.map((p) => {
            const dark = p.tint.includes('bg-ink');
            return (
              <div
                key={p.id}
                onMouseMove={onMove}
                className={`spotlight-card ${dark ? 'spotlight-dark' : ''} group relative overflow-hidden rounded-2xl border p-5 lg:p-7 flex flex-col justify-center transition-all duration-300 hover:-translate-y-0.5 ${p.span} ${
                  dark ? 'border-ink bg-ink' : 'border-border hover:border-emerald/40'
                } ${p.tint}`}
              >
                <div className="relative z-10 flex items-start gap-3.5 sm:gap-4">
                  <div className={`shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    dark ? 'bg-emerald' : 'bg-sage group-hover:bg-emerald'
                  }`}>
                    <p.icon size={18} aria-hidden="true" className={`transition-colors duration-300 ${dark ? 'text-white' : 'text-emerald-deep group-hover:text-white'}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className={`font-display text-base lg:text-xl font-bold tracking-tight mb-1.5 sm:text-lg ${dark ? 'text-white' : 'text-ink'}`}>{p.title}</h3>
                    <p className={`text-[13px] lg:text-[15px] leading-relaxed max-w-md sm:text-sm ${dark ? 'text-white/60' : 'text-ink/60'}`}>{p.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 lg:mt-12">
          <a
            href={whatsappUrl('Hi Jigisha ben, I found you on your website. I would like to talk about my family’s insurance.')}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whyus-whatsapp"
            className="inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-7 py-3.5 text-white font-bold text-sm min-h-11 transition-colors hover:bg-whatsapp-dark active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
            Chat with Jigisha on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;