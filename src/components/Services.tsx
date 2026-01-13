import { Shield, Sparkles, TrendingUp, Umbrella, GraduationCap, Cross, Check } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Term Life Assurance',
    description: 'Pure protection for your legacy. High-value coverage designed to secure your family\'s standard of living.',
    features: ['High Sum Assured', 'Affordable Premiums', 'Tax Efficiency']
  },
  {
    icon: Sparkles,
    title: 'Wealth Endowment',
    description: 'A sophisticated blend of life protection and guaranteed savings for future milestones.',
    features: ['Guaranteed Returns', 'Bonuses', 'Liquidity Options']
  },
  {
    icon: TrendingUp,
    title: 'Investment Linked (ULIP)',
    description: 'Participate in market growth while maintaining robust life protection for your dependents.',
    features: ['Market Growth', 'Flexible Switching', 'Wealth Creation']
  },
  {
    icon: Umbrella,
    title: 'Retirement Concierge',
    description: 'Ensure a dignified lifestyle in your golden years with guaranteed lifetime pension streams.',
    features: ['Lifetime Income', 'Family Protection', 'Inflation Hedge']
  },
  {
    icon: GraduationCap,
    title: 'Child Education Legacy',
    description: 'Guarantee the funding for your children\'s global education and professional aspirations.',
    features: ['Milestone Funding', 'Premium Waiver', 'Target Savings']
  },
  {
    icon: Cross,
    title: 'Health & Wellness Cover',
    description: 'Comprehensive medical protection ensuring world-class healthcare without financial strain.',
    features: ['Cashless Network', 'Critical Illness', 'Family Coverage']
  }
]

const Services = () => {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden" id="services">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <div className="inline-block px-3 py-1 bg-gold/10 text-gold-dark text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6">Our Expertise</div>
          <h2 className="text-4xl md:text-5xl font-playfair font-medium text-midnight mb-6">
            Curated LIC <span className="text-gold italic">Portfolios</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            We curate comprehensive insurance portfolios tailored to protect your family's future and meet your specific financial goals with the trust of LIC.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 relative overflow-hidden flex flex-col h-full"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card gradient effect */}
              <div className="absolute inset-0 bg-linear-to-b from-white to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-midnight group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
                  <service.icon size={32} className="text-midnight group-hover:text-gold transition-colors duration-500" />
                </div>
                
                <h3 className="text-xl font-bold text-midnight mb-4 font-playfair group-hover:text-gold-dark transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-sm h-16">
                  {service.description}
                </p>
                
                <div className="space-y-3 pt-6 border-t border-gray-100 mt-auto">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                      <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-green-600" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Decorative circle */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/5 rounded-full blur-xl group-hover:bg-gold/10 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
