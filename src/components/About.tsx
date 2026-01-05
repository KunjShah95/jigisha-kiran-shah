const About = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Personalized Advice',
      description: 'Tailored recommendations based on your needs'
    },
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'Always available for your queries'
    },
    {
      icon: '⚡',
      title: 'Quick Claims',
      description: 'Hassle-free claim settlement assistance'
    },
    {
      icon: '🔒',
      title: 'Trusted Partner',
      description: 'IRDA certified LIC agent'
    }
  ]

  return (
    <section className="about" id="about">
      <div className="about__pattern"></div>
      <div className="container about__inner">
        <div className="about__image-wrapper reveal">
          <div className="about__image" style={{
            background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '100px'
          }}>
            👨‍💼
          </div>
          <div className="about__experience-badge">
            <div className="about__experience-value">15+</div>
            <div className="about__experience-label">Years of Trust</div>
          </div>
        </div>
        
        <div className="about__content reveal">
          <div className="about__label">About Your Advisor</div>
          <h2 className="about__title">Your Trusted LIC Insurance Partner</h2>
          <p className="about__description">
            With over 15 years of experience as a dedicated LIC agent, I have helped thousands of families secure their future through the right insurance solutions. My mission is to make insurance simple, accessible, and beneficial for everyone.
          </p>
          <p className="about__description">
            I believe in building long-term relationships with my clients, understanding their unique needs, and guiding them through every step of their insurance journey – from policy selection to claim settlement.
          </p>
          
          <div className="about__features">
            {features.map((feature, index) => (
              <div key={index} className="about__feature">
                <div className="about__feature-icon">{feature.icon}</div>
                <div className="about__feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <a href="#contact" className="btn btn--gold btn--lg">
            Schedule a Meeting
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
