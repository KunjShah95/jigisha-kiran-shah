import { useState } from 'react'

interface HeaderProps {
  isScrolled: boolean
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header__inner">
        <a 
          href="#home" 
          className="header__logo"
        >
          <div className="header__logo-icon">LIC</div>
          <div className="header__logo-text">
            Insurance<span>Pro</span>
          </div>
        </a>

        <nav className={`header__nav ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header__nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__cta">
          <a href="tel:+919876543210" className="header__phone">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            +91 98765 43210
          </a>
          <a href="#contact" className="btn btn--primary">
            Get Free Quote
          </a>
          <button
            className="header__mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
