import { ArrowRight, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom'
import heroImage from '../assets/images/hero-image.jpeg';
import CountUp from './CountUp';
import HeroCoverageWidget from './HeroCoverageWidget';
import { MovingBorderButton } from './aceternity/MovingBorderButton';
import { Meteors } from './aceternity/Meteors';
import { TextGenerate } from './aceternity/TextGenerate';
import { TiltCard } from './aceternity/TiltCard';

const STATS = [
  { icon: Award, value: '2×', label: 'MDRT 2023 & 2024' },
  { icon: null, value: 22, suffix: '+', label: 'years experience' },
  { icon: null, value: 2.7, decimals: 1, suffix: 'k+', label: 'families served' },
  { icon: Star, value: '5.0', label: 'rating on Google' },
] as const;

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-cream py-20 lg:py-0 lg:min-h-[96vh] flex items-center">
      {/* Signature canvas: dot-grid fading to edges, meteors drifting across */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="dot-grid" />
        <Meteors count={8} className="opacity-70" />
        <div className="absolute top-[-10%] right-[-10%] w-[560px] h-[560px] rounded-full bg-gold/15 blur-[120px]" />
        <div className="absolute bottom-[-15%] left-[-5%] w-[420px] h-[420px] rounded-full bg-midnight/10 blur-[110px]" />
      </div>

      <div className="container relative z-10 w-full pt-28 lg:pt-32">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-10 items-start">
          {/* Content column */}
          <div className="min-w-0">
            <h1 className="font-display font-bold text-midnight leading-[1.08] tracking-tight text-[2.5rem] sm:text-5xl lg:text-[3.4rem] mb-6">
              <TextGenerate
                words="Insurance advice built around your family's protection"
                gradientWord="protection"
              />
            </h1>

            <p className="text-base lg:text-lg text-gray-600 font-light leading-relaxed max-w-xl mb-8">
              See how much cover your family actually needs, review the policies you already hold, and plan for your child's education and your retirement — with Jigisha Kiran Shah, trusted by{' '}
              <strong className="text-midnight font-semibold">2,700+ families</strong>.
            </p>

            {/* Stat strip: four quiet chips, not a loud card */}
            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border mb-9 max-w-xl">
              {STATS.map((s, i) => (
                <div key={i} className="bg-white/80 px-3.5 py-3">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="flex items-center gap-1 font-display font-bold text-midnight text-lg tabular-nums">
                    {s.icon ? <s.icon className="w-4 h-4 text-gold" aria-hidden="true" /> : null}
                    {typeof s.value === 'number' ? (
                      <CountUp end={s.value} decimals={'decimals' in s ? s.decimals : 0} suffix={'suffix' in s ? s.suffix : ''} />
                    ) : (
                      s.value
                    )}
                  </dd>
                  <dd className="text-[11px] text-gray-500 font-light leading-snug mt-0.5">{s.label}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4" role="group" aria-label="Primary actions">
              <MovingBorderButton containerClassName="w-full sm:w-auto" borderColor="#f3d6b4">
                <Link
                  to="/contact"
                  data-cta="hero-book"
                  className="inline-flex items-center justify-center px-7 py-3.5 lg:px-9 lg:py-4 text-white font-bold gap-2 group text-sm lg:text-base w-full sm:w-auto min-h-11"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </MovingBorderButton>
              <Link
                to="/services/policy-review-claims"
                className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-midnight hover:text-gold-dark transition-colors min-h-11"
              >
                Already have a policy? Get a free review
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Visual column: layered console — portrait card + live widget */}
          <div className="relative min-w-0">
            <TiltCard className="relative rounded-[1.75rem] overflow-hidden border border-border shadow-2xl group bg-midnight">
              <div className="relative aspect-[5/4]">
                <img
                  src={heroImage}
                  alt="Jigisha Kiran Shah - Senior LIC Wealth Advisor Ahmedabad"
                  className="w-full h-full object-cover object-top opacity-90"
                  {...{ fetchpriority: 'high' }}
                  decoding="async"
                  width={768}
                  height={614}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-midnight via-midnight/10 to-transparent" />

                {/* Corner frame marks — signature detail replacing the old caption-on-hover */}
                <span aria-hidden="true" className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-gold/70 rounded-tl-md" />
                <span aria-hidden="true" className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-gold/70 rounded-tr-md" />

                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-3">
                  <div>
                    <div className="font-display text-lg font-bold text-white mb-0.5">Jigisha Kiran Shah</div>
                    <p className="text-white/60 text-xs font-medium">Senior Advisor · 22 yrs</p>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Floating review note */}
            <div className="hidden md:block absolute -top-4 -right-4 bg-white rounded-xl shadow-xl border border-border p-4 max-w-[190px] animate-float z-20">
              <p className="text-[11px] text-gray-700 font-medium leading-relaxed italic">
                "She transformed how we think about our family's financial future."
              </p>
            </div>

            <HeroCoverageWidget />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
