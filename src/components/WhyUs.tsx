import { Award, ShieldCheck, HeartPulse, Headphones, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const reasons = [
  {
    icon: Award,
    title: 'Elite Certification',
    description: '2 Times MDRT achiever in 2023 & 2024 and top-tier LIC certified advisor since 2004.',
  },
  {
    icon: ShieldCheck,
    title: '100% Claims Settlement',
    description: 'A legacy of 1000+ settled claims with white-glove documentation support.'
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
            MDRT-grade expertise, proactive claim readiness, and concierge-level guidance for every milestone — protecting your future and securing your dreams.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 reveal">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all duration-300 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto bg-linear-to-br from-gold to-gold-dark rounded-2xl rotate-3 group-hover:rotate-6 flex items-center justify-center mb-4 shadow-lg shadow-gold/20 transition-transform duration-300">
                    <reason.icon size={24} className="text-midnight -rotate-3 group-hover:-rotate-6 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold font-display mb-2 text-white group-hover:text-gold transition-colors">{reason.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light group-hover:text-gray-200 transition-colors">{reason.description}</p>
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
