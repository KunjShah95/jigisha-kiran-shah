import { Award, ShieldCheck, HeartPulse, Headphones, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSpotlight } from '../hooks/useSpotlight';
import { MovingBorderButton } from './aceternity/MovingBorderButton';

const PILLARS = [
  {
    id: 'claim-assistance',
    icon: ShieldCheck,
    title: 'Hands-on claim assistance',
    description:
      '1,000+ claims supported to settlement — intimation, documents and branch follow-up handled with your family. Settlement decisions rest with LIC.',
    span: 'lg:col-span-7 lg:row-span-2',
  },
  {
    id: 'expertise',
    icon: Award,
    title: 'Recognised expertise',
    description: 'MDRT qualifier in 2023 & 2024, licensed LIC agent since 2004.',
    span: 'lg:col-span-5',
  },
  {
    id: 'wealth',
    icon: HeartPulse,
    title: 'Wealth architecture',
    description: 'Planning tailored to your goals and family legacy.',
    span: 'lg:col-span-5',
  },
  {
    id: 'concierge',
    icon: Headphones,
    title: 'Concierge support',
    description: 'Direct, prioritized access for policy management and emergency assistance.',
    span: 'lg:col-span-12',
  },
] as const;

const WhyUs = () => {
  const onMove = useSpotlight();

  return (
    <section className="py-20 lg:py-28 bg-midnight text-white relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="dot-grid opacity-[0.25] invert" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px]" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-14">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-medium leading-tight">
              Two decades of LIC experience, <span className="text-gold italic">one point of contact</span>
            </h2>
          </div>
          <p className="text-gray-400 font-light leading-relaxed max-w-sm">
            Claim-ready paperwork and personal guidance for every milestone — protecting your future and securing your dreams.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-4">
          {PILLARS.map((p) => (
            <div
              key={p.id}
              onMouseMove={onMove}
              className={`spotlight-card spotlight-dark group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 lg:p-8 flex flex-col justify-center transition-colors duration-300 hover:border-gold/30 hover:bg-white/[0.06] ${p.span}`}
            >
              <div className="relative z-10 flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-gold/15 border border-gold/20 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <p.icon size={20} aria-hidden="true" className="text-gold group-hover:text-midnight transition-colors duration-300" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg lg:text-xl font-bold font-display mb-2 text-white">{p.title}</h3>
                  <p className="text-sm lg:text-[15px] text-gray-400 leading-relaxed font-light max-w-md">{p.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <MovingBorderButton containerClassName="inline-block" borderColor="#f3d6b4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-base min-h-11"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </MovingBorderButton>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
