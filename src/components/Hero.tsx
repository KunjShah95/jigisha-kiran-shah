const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="section-number">01 — HERO</div>
      <div className="hero__bg-pattern"></div>
      <div className="hero__grid"></div>
      
      <div className="container hero__inner reveal">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-icon"></span>
            Trusted LIC Agent Since 2010
          </div>
          
          <h1 className="hero__title">
            Secure Your Family's <span className="hero__title-accent">Future</span> with Expert Guidance
          </h1>
          
          <p className="hero__description">
            As your dedicated LIC insurance advisor, I help you choose the perfect life insurance plans that protect your loved ones and build wealth for generations.
          </p>
          
          <div className="hero__cta">
            <a 
              href="#contact" 
              className="btn btn--primary btn--lg btn-beam"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Get Free Consultation
            </a>
            <a 
              href="#services" 
              className="btn btn--secondary btn--lg"
            >
              Explore Plans
            </a>
          </div>
          
          <div className="hero__stats">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '5000+', label: 'Happy Clients' },
              { value: '₹50Cr+', label: 'Claims Settled' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="hero__stat"
              >
                <div className="hero__stat-value">{stat.value}</div>
                <div className="hero__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <div 
              className="hero__image" 
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 50%, #1e3a5f 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '120px'
              }}
            >
              🛡️
            </div>
            
            <div className="hero__floating-card hero__floating-card--trust">
              <div style={{ fontSize: '2rem' }}>✓</div>
              <div>
                <div style={{ fontWeight: 600, color: '#1e40af' }}>IRDA Certified</div>
                <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Licensed Agent</div>
              </div>
            </div>
            
            <div className="hero__floating-card hero__floating-card--rating">
              <div className="hero__rating-stars">★★★★★</div>
              <div className="hero__rating-text">4.9/5 Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
