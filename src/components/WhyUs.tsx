import { Award, ShieldCheck, HeartPulse, Headphones, MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../lib/contact';
import { useSpotlight } from '../hooks/useSpotlight';
import { MovingBorderButton } from './aceternity/MovingBorderButton';
import { GlowCard } from './aceternity/GlowCard';
import { GridPattern } from './aceternity/GridPattern';

const PILLARS = [
  {
    id: 'claim-assistance',
    icon: ShieldCheck,
    title: 'Help when a claim comes up',
    description:
      'Jigisha has helped families through 1,000+ claims. She fills in the forms, gathers the documents and follows up at the LIC branch. LIC makes the final decision on every claim.',
    span: 'lg:col-span-7 lg:row-span-2',
  },
  {
    id: 'expertise',
    icon: Award,
    title: 'An award-winning advisor',
    description: 'Licensed LIC agent since 2004. Won the MDRT top-advisor award in 2023 and 2024.',
    span: 'lg:col-span-5',
  },
  {
    id: 'wealth',
    icon: HeartPulse,
    title: 'Plans built around your goals',
    description: 'No one-size-fits-all pitch. She starts with your family, your income and what you want to achieve.',
    span: 'lg:col-span-5',
  },
  {
    id: 'concierge',
    icon: Headphones,
    title: 'One person you can always reach',
    description: 'Message or call Jigisha directly for policy changes, premium questions or an urgent claim.',
    span: 'lg:col-span-12',
  },
] as const;

const WhyUs = () => {
  const onMove = useSpotlight();

  return (
    <section className="py-14 lg:py-24 bg-midnight text-white relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0">
        <GridPattern
          size={64}
          className="text-white/[0.07] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black_30%,transparent_80%)]"
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px]" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-7 lg:mb-14">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-display font-medium leading-tight">
              22 years of LIC experience, <span className="text-gold italic">one person to talk to</span>
            </h2>
          </div>
          <p className="text-gray-400 font-light leading-relaxed max-w-sm text-sm sm:text-base">
            Simple explanations and personal help at every stage, from your first question to your last claim.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4">
          {PILLARS.map((p) => (
            <GlowCard
              key={p.id}
              className={`${p.span} rounded-3xl`}
              glowColor="rgba(243, 214, 180, 0.95)"
            >
              <div
                onMouseMove={onMove}
                className="spotlight-card spotlight-dark relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 lg:p-8 flex flex-col justify-center transition-colors duration-300 group-hover:border-gold/30 group-hover:bg-white/[0.06] h-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
              >
                <div className="relative z-10 flex items-start gap-3.5 sm:gap-4">
                  <div className="shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gold/15 border border-gold/20 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                    <p.icon size={18} aria-hidden="true" className="text-gold group-hover:text-midnight transition-colors duration-300" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base lg:text-xl font-bold font-display mb-1.5 sm:text-lg text-white">{p.title}</h3>
                    <p className="text-[13px] lg:text-[15px] text-gray-400 leading-relaxed font-light max-w-md sm:text-sm">{p.description}</p>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        <div className="mt-8 lg:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <MovingBorderButton containerClassName="inline-block" borderColor="#f3d6b4">
            <a
              href={whatsappUrl('Hi Jigisha ben, I found you on your website. I would like to talk about my family’s insurance.')}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whyus-whatsapp"
              className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-base min-h-11"
            >
              <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
              Chat with Jigisha on WhatsApp
            </a>
          </MovingBorderButton>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
