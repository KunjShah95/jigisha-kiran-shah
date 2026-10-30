import { Award, ShieldCheck, HeartPulse, Headphones, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSpotlight } from '../hooks/useSpotlight';

const reasons = [
  {
    icon: Award,
    title: 'Recognised Expertise',
    description: 'MDRT qualifier in 2023 & 2024 and a licensed LIC agent since 2004.',
  },
  {
    icon: ShieldCheck,
    title: 'Hands-On Claim Assistance',
    description: '1,000+ claims supported to settlement — intimation, documents and branch follow-up handled with your family. Settlement decisions rest with LIC.'
  },
  {
    icon: HeartPulse,
    title: 'Wealth Architecture',
    description: 'Strategic planning tailored to your unique financial goals and family legacy.'
  },
  {
    icon: Headphones,
    title: 'Concierge Support',
    description: 'Direct, prioritized access for policy management and emergency assistance.'
  }
]

const WhyUs = () => {
  const onMove = useSpotlight()
  return (
    <section className="py-16 lg:py-24 bg-midnight text-white relative overflow-hidden">
      {/* Background Elements */}
      <div aria-hidden="true" className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold-dark/20 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div aria-hidden="true" className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.06] mix-blend-soft-light" />
      
      <div className="container relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12 reveal">
          <div className="inline-block px-3 py-1 bg-white/5 text-gold text-[11px] font-bold tracking-[0.2em] uppercase rounded-full mb-4 lg:mb-6 border border-white/10">Why Choose Us</div>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4 lg:mb-6">
            Your Trusted Insurance <span className="text-gold italic">Partner</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-300 font-light leading-relaxed">
            Two decades of LIC experience, claim-ready paperwork, and personal guidance for every milestone — protecting your future and securing your dreams.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 reveal">
          {/* Large tile: lead differentiator */}
          <div
            onMouseMove={onMove}
            className="spotlight-card spotlight-dark group lg:col-span-6 lg:row-span-2 bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-linear-to-br from-gold to-gold-dark rounded-2xl rotate-3 group-hover:rotate-6 flex items-center justify-center mb-5 shadow-lg shadow-gold/20 transition-transform duration-300">
                <ShieldCheck size={28} className="text-midnight -rotate-3 group-hover:-rotate-6 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-3 text-white group-hover:text-gold transition-colors">
                Hands-On Claim Assistance
              </h3>
              <p className="text-base text-gray-400 leading-relaxed font-light group-hover:text-gray-200 transition-colors max-w-md">
                1,000+ claims supported to settlement — intimation, documents and branch follow-up handled with your family. Settlement decisions rest with LIC.
              </p>
            </div>
          </div>

          {/* Three smaller supporting tiles */}
          {reasons.filter((r) => r.title !== 'Hands-On Claim Assistance').map((reason, index) => (
            <div
              key={index}
              onMouseMove={onMove}
              className="spotlight-card spotlight-dark group lg:col-span-6 bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-linear-to-br from-gold to-gold-dark rounded-xl rotate-3 group-hover:rotate-6 flex items-center justify-center shadow-lg shadow-gold/20 transition-transform duration-300">
                  <reason.icon size={20} className="text-midnight -rotate-3 group-hover:-rotate-6 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-display mb-1.5 text-white group-hover:text-gold transition-colors">{reason.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-light group-hover:text-gray-200 transition-colors">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16 reveal">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-white font-bold rounded-xl hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-base min-h-11"
          >
            Book Free Consultation
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
