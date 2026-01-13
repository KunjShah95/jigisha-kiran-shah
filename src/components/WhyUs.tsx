import { Award, ShieldCheck, HeartPulse, Headphones } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Elite Certification',
    description: 'Double MDRT (USA) achiever and top-tier LIC certified advisor since 2004.'
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
    <section className="py-24 bg-midnight text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      
      <div className="container relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Why Choose Us</div>
          <h2 className="text-4xl md:text-5xl font-playfair font-medium text-white mb-6">
            Your Trusted Insurance Partner
          </h2>
          <p className="text-lg text-gray-300">
            Experience the difference of working with a dedicated and experienced LIC advisor who puts your family's security first.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-linear-to-br from-gold to-yellow-700 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <reason.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">{reason.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
