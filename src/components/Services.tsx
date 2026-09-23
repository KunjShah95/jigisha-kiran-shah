import { Shield, Sparkles, Building2, Umbrella, GraduationCap, Cross, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSpotlight } from '../hooks/useSpotlight';

const services = [
  {
    icon: Shield,
    title: 'Term Life Assurance',
    href: '/services/term-insurance',
    description: 'Pure protection for your legacy. High-value coverage designed to secure your family\'s standard of living.',
    features: ['High Sum Assured', 'Affordable Premiums', 'Tax Efficiency']
  },
  {
    icon: Sparkles,
    title: 'Wealth Endowment',
    href: '/services/wealth-creation',
    description: 'A sophisticated blend of life protection and guaranteed savings for future milestones.',
    features: ['Guaranteed Returns', 'Bonuses', 'Liquidity Options']
  },
  {
    icon: Building2,
    title: 'Business Insurance',
    href: '/services/corporate-insurance',
    description: 'Comprehensive insurance solutions designed to protect your business, partnerships, and key relationships.',
    features: ['Employer Employee Insurance', 'Partnership Insurance', 'MWP Insurance', 'HUF Insurance']
  },
  {
    icon: Umbrella,
    title: 'Retirement Planning',
    href: '/services/retirement',
    description: 'Ensure a dignified lifestyle in your golden years with guaranteed lifetime pension streams.',
    features: ['Lifetime Income', 'Family Protection', 'Inflation Hedge']
  },
  {
    icon: GraduationCap,
    title: 'Child Education Legacy',
    href: '/services/child-education',
    description: 'Guarantee the funding for your children\'s global education and professional aspirations.',
    features: ['Milestone Funding', 'Premium Waiver', 'Target Savings']
  },
  {
    icon: Cross,
    title: 'Health & Wellness Cover',
    href: '/services/health-insurance',
    description: 'Comprehensive medical protection ensuring world-class healthcare without financial strain.',
    features: ['Cashless Network', 'Critical Illness', 'Family Coverage']
  }
]

const Services = () => {
  const onMove = useSpotlight()
  return (
    <section className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-[#f6efe6] relative overflow-hidden">
      {/* Background decoration */}
      <div aria-hidden="true" className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f1e4d5]/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12 reveal">
          <div className="inline-block px-3 py-1 bg-gold/10 text-gold-dark text-[11px] font-bold tracking-[0.2em] uppercase rounded-full mb-4 lg:mb-6">Our Expertise</div>
          <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-4 lg:mb-6">
            LIC Insurance <span className="text-gold italic">Plans in Ahmedabad</span>
          </h1>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed font-light">
            We curate comprehensive insurance portfolios tailored to protect your family's future and meet your specific financial goals with the trust of LIC.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 reveal">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseMove={onMove}
              tabIndex={0}
              aria-label={`${service.title} — ${service.description}`}
              className="spotlight-card group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gold/10 focus-visible:shadow-2xl focus-visible:border-gold/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-all duration-500 relative overflow-hidden flex flex-col h-full"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card gradient effect */}
              <div className="absolute inset-0 bg-linear-to-b from-white to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-midnight group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <service.icon size={28} className="text-gold-dark group-hover:text-gold transition-colors duration-500" aria-hidden="true" />
                </div>
                
                <h3 className="text-lg font-bold text-midnight mb-2 font-display group-hover:text-gold-dark transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-5 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="space-y-2 pt-4 border-t border-gray-100 mt-auto">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                      <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-green-600" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  to={service.href}
                  className="relative z-10 inline-flex items-center gap-2 mt-5 text-sm font-bold text-gold-dark hover:gap-3 transition-all"
                  aria-label={`Learn more about ${service.title} in Ahmedabad`}
                >
                  Learn more <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                
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
