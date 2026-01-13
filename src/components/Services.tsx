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
    <section className="py-32 bg-gray-50 relative" id="services">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <div className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-4">Our Expertise</div>
          <h2 className="text-4xl md:text-5xl font-playfair font-medium text-midnight mb-6">
            LIC Insurance Portfolios
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We curate comprehensive insurance portfolios tailored to protect your family's future and meet your specific financial goals with the trust of LIC.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-midnight transition-colors duration-500">
                <service.icon size={32} className="text-blue-900 group-hover:text-gold transition-colors duration-500" />
              </div>
              
              <h3 className="text-xl font-bold text-midnight mb-4 font-playfair">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm h-20">
                {service.description}
              </p>
              
              <div className="space-y-3 pt-6 border-t border-gray-100">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-green-600" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
