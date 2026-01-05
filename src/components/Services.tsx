const services = [
  {
    icon: '🛡️',
    title: 'Term Insurance',
    description: 'Pure life cover at affordable premiums. Protect your family with high sum assured at low cost.',
    features: ['High Coverage', 'Low Premium', 'Tax Benefits u/s 80C']
  },
  {
    icon: '💰',
    title: 'Endowment Plans',
    description: 'Combine insurance with savings. Get maturity benefits along with life cover.',
    features: ['Guaranteed Returns', 'Bonus Benefits', 'Loan Facility']
  },
  {
    icon: '📈',
    title: 'ULIP Plans',
    description: 'Market-linked returns with insurance cover. Grow your wealth while staying protected.',
    features: ['Market Returns', 'Fund Switching', 'Partial Withdrawal']
  },
  {
    icon: '🏦',
    title: 'Pension Plans',
    description: 'Secure your retirement with guaranteed pension. Enjoy financial freedom in your golden years.',
    features: ['Lifetime Pension', 'Annuity Options', 'Family Security']
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Child Plans',
    description: "Secure your child's education and future milestones with dedicated child insurance plans.",
    features: ['Education Fund', 'Premium Waiver', 'Milestone Benefits']
  },
  {
    icon: '🏥',
    title: 'Health Insurance',
    description: 'Comprehensive health coverage for you and your family. Stay protected from medical emergencies.',
    features: ['Cashless Treatment', 'No Claim Bonus', 'Family Floater']
  }
]

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="section-number">02 — SERVICES</div>
      <div className="container">
        <div 
          className="services__header reveal"
        >
          <div className="services__label">Our Services</div>
          <h2 className="services__title">LIC Insurance Plans for Every Need</h2>
          <p className="services__description">
            Choose from a wide range of LIC insurance products tailored to protect your family's future and meet your financial goals.
          </p>
        </div>
        
        <div 
          className="services__grid reveal"
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
            >
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <div className="service-card__features">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="service-card__feature">
                    <span className="service-card__feature-icon">✓</span>
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
