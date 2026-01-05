const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ]

  const services = [
    { label: 'Term Insurance', href: '#services' },
    { label: 'Endowment Plans', href: '#services' },
    { label: 'ULIP Plans', href: '#services' },
    { label: 'Pension Plans', href: '#services' },
    { label: 'Child Plans', href: '#services' }
  ]

  const resources = [
    { label: 'LIC Official Website', href: 'https://licindia.in' },
    { label: 'Premium Calculator', href: '#contact' },
    { label: 'Claim Status', href: 'https://licindia.in' },
    { label: 'Policy Status', href: 'https://licindia.in' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">LIC</div>
              <div className="footer__logo-text">
                Insurance<span>Pro</span>
              </div>
            </div>
            <p className="footer__brand-text">
              Your trusted LIC insurance advisor with over 15 years of experience. 
              Helping families secure their future with the right insurance solutions.
            </p>
            <div className="footer__social">
              <a href="https://facebook.com" className="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" className="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer__column">
            <h4 className="footer__column-title">Quick Links</h4>
            <nav className="footer__links">
              {quickLinks.map((link, index) => (
                <a key={index} href={link.href} className="footer__link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          
          <div className="footer__column">
            <h4 className="footer__column-title">Our Services</h4>
            <nav className="footer__links">
              {services.map((link, index) => (
                <a key={index} href={link.href} className="footer__link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          
          <div className="footer__column">
            <h4 className="footer__column-title">Resources</h4>
            <nav className="footer__links">
              {resources.map((link, index) => (
                <a key={index} href={link.href} className="footer__link" target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} LIC Insurance Advisor. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <a href="#" className="footer__legal-link">Terms of Service</a>
            <a href="#" className="footer__legal-link">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
