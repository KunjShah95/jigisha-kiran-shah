import { Award, ShieldCheck, HeartPulse, Headphones } from 'lucide-react';

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
    <section className="py-16 lg:py-24 bg-midnight text-white relative overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#2a1f1a]/40 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-soft-light" />
      
      <div className="container relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 reveal">
          <div className="inline-block px-3 py-1 bg-white/5 text-gold text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-4 lg:mb-6 border border-white/10">Why Choose Us</div>
          <h2 className="text-3xl md:text-5xl font-playfair font-medium text-white mb-4 lg:mb-6">
            Your Trusted Insurance <span className="text-gold italic">Partner</span>
          </h2>
          <p className="text-lg text-gray-300 font-light leading-relaxed">
            Experience the difference of working with a dedicated and experienced LIC advisor who puts your family's security first.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 reveal">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-lg shadow-black/10">
            <p className="text-sm text-gray-200 leading-relaxed mb-4 font-light">
              Protecting your future and securing your dreams with MDRT-grade expertise, proactive claim readiness, and concierge-level guidance for every milestone.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-300 font-light">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">Transparent advice with zero compromise on documentation and claims.</div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">Tailored plans for families, salaried professionals, business owners, and NRIs.</div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">Responsive, single-point support—from policy curation to settlements.</div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto bg-linear-to-br from-gold to-gold-dark rounded-2xl rotate-3 group-hover:rotate-6 flex items-center justify-center mb-6 shadow-lg shadow-gold/20 transition-transform duration-300">
                    <reason.icon size={32} className="text-midnight -rotate-3 group-hover:-rotate-6 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold font-playfair mb-3 text-white group-hover:text-gold transition-colors">{reason.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light group-hover:text-gray-200 transition-colors">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
