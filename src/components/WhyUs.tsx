const reasons = [
  {
    icon: '🏆',
    title: 'LIC Certified Agent',
    description: 'Authorized and certified by LIC of India with IRDA license'
  },
  {
    icon: '💯',
    title: '100% Claim Support',
    description: 'Complete assistance in documentation and claim settlement'
  },
  {
    icon: '🤝',
    title: 'Personalized Service',
    description: 'One-on-one consultation to understand your unique needs'
  },
  {
    icon: '📱',
    title: 'Always Accessible',
    description: 'Reach me anytime via call, WhatsApp, or email'
  }
]

const WhyUs = () => {
  return (
    <section className="why-us">
      <div className="section-number">04 — ADVANTAGE</div>
      <div className="container">
        <div 
          className="why-us__header reveal"
        >
          <div className="why-us__label">Why Choose Us</div>
          <h2 className="why-us__title">Your Trusted Insurance Partner</h2>
          <p className="why-us__description">
            Experience the difference of working with a dedicated and experienced LIC advisor who puts your family's security first.
          </p>
        </div>
        
        <div 
          className="why-us__grid reveal"
        >
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="why-us-card"
            >
              <div className="why-us-card__icon">{reason.icon}</div>
              <h3 className="why-us-card__title">{reason.title}</h3>
              <p className="why-us-card__description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
