import { ArrowRight, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom'
import heroImage from '../assets/images/hero-image.jpeg';
import CountUp from './CountUp';
import HeroCoverageWidget from './HeroCoverageWidget';

const Hero = () => {
  return (
    <section className="hero relative overflow-hidden flex items-center bg-transparent py-8 lg:py-0 lg:min-h-[95vh]">
      {/* Signature: drifting aurora mesh */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="aurora" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.06]" />
      </div>

      <div className="container relative z-10 w-full pt-28 lg:pt-32 pb-12 lg:pb-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 hero__content reveal">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-midnight leading-[1.15] mb-4 lg:mb-6 tracking-tight">
              LIC Life Insurance Advisor in Ahmedabad for Your <span className="text-gradient-gold italic relative inline-block">
                Family's Protection
                <svg aria-hidden="true" className="absolute w-full h-2 lg:h-3 -bottom-1 lg:-bottom-2 left-0 text-gold" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-base lg:text-xl text-gray-600 mb-6 lg:mb-8 max-w-xl leading-relaxed font-light">
              Understand how much protection your family really needs, review the policies you already hold, and plan for your child's education and your retirement — with personal guidance from Jigisha Kiran Shah, trusted by <strong className="text-midnight font-semibold">2,700+ families</strong> and rated <strong className="text-gold-dark font-semibold">5.0 ★ on Google</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 lg:mb-8 text-sm text-gray-600">
              <span className="inline-flex items-center gap-1.5 font-semibold text-midnight">
                <Award className="w-4 h-4 text-gold" aria-hidden="true" />
                2× MDRT 2023 & 2024
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CountUp end={22} suffix="+ yrs" className="font-bold text-midnight tabular-nums" />
                experience
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CountUp end={2.7} decimals={1} suffix="k+" className="font-bold text-midnight tabular-nums" />
                families served
              </span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-midnight">
                <Star className="w-4 h-4 text-gold fill-gold" aria-hidden="true" />
                5.0 on Google
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-5 mb-8 lg:mb-10">
              <Link
                to="/contact"
                data-cta="hero-book"
                className="inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 bg-midnight text-white font-bold rounded-xl hover:bg-gold transition-all duration-300 gap-2 group btn-beam shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] text-sm lg:text-base w-full sm:w-auto min-h-11"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link
                to="/services/policy-review-claims"
                className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-midnight hover:text-gold-dark transition-colors min-h-11"
              >
                Already have a policy? Get a free review
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-8 reveal-right block">
            <div className="relative w-full aspect-4/5 max-w-sm lg:max-w-md mx-auto">
              <div className="relative h-full w-full rounded-3xl lg:rounded-4xl overflow-hidden shadow-2xl z-10 group">
                 <img 
                  src={heroImage} 
                  alt="Jigisha Kiran Shah - Senior LIC Wealth Advisor Ahmedabad" 
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  {...{ fetchpriority: 'high' }}
                  decoding="async"
                  width={768}
                  height={960}
                />
                
                <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-midnight/90 via-midnight/20 to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-gold px-3 py-0.5 lg:px-4 lg:py-1 self-start inline-block rounded-md text-[11px] lg:text-xs font-bold text-white uppercase tracking-wider mb-2 lg:mb-3">
                    Senior Advisor
                  </div>
                  <div className="font-display text-xl lg:text-3xl font-bold mb-0.5 lg:mb-1">Jigisha Kiran Shah</div>
                  <p className="text-white/80 text-xs lg:text-sm font-medium">Expert Financial guidance for 2 decades</p>
                </div>
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -top-4 lg:-top-6 right-2 lg:-right-2 bg-white/95 backdrop-blur-md p-4 lg:p-5 rounded-xl shadow-xl border border-white/40 max-w-[180px] lg:max-w-[200px] animate-float z-20 hidden md:block">
                <div className="flex gap-1 text-gold mb-1 lg:mb-2" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-[11px] lg:text-xs text-gray-700 font-medium leading-relaxed italic">
                  "She transformed how we think about our family's financial future."
                </p>
              </div>
            </div>

            {/* Interactive artifact: live coverage estimate */}
            <HeroCoverageWidget />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
