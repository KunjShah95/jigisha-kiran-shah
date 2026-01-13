import { useState, useEffect } from 'react'

interface HeaderProps {
  isScrolled: boolean
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-md py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container flex items-center justify-between w-full">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group z-50 relative"
          >
            <div className="w-12 h-12 bg-linear-to-br from-midnight to-midnight-light rounded-xl flex items-center justify-center text-white font-playfair font-bold text-xl shadow-lg border border-white/10 group-hover:scale-105 transition-transform duration-300">
              JK
            </div>
            <div className="flex flex-col">
              <span className={`font-playfair font-bold text-lg leading-none transition-colors ${isScrolled ? 'text-midnight' : 'text-midnight'}`}>
                Jigisha Kiran<span className="text-gold"> Shah</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">LIC Advisor</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-gold transition-colors relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <a 
              href="tel:+919824025435" 
              className="hidden lg:flex flex-col items-end text-right mr-2"
            >
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Advisory Support</span>
              <span className="font-semibold text-midnight hover:text-gold transition-colors font-inter text-sm">+91 98240 25435</span>
            </a>
            
            <a 
              href="#contact" 
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 bg-midnight text-white hover:bg-gold hover:text-midnight hover:shadow-lg border border-transparent hover:border-gold/20"
            >
              Get Quote
            </a>

            <button
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-midnight rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-midnight rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-midnight rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col pt-32 px-8 transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <div className="w-64 h-64 bg-gold rounded-full blur-3xl" />
        </div>
        
        <nav className="flex flex-col gap-6 text-2xl font-playfair text-midnight relative z-10">
          {navLinks.map((link, idx) => (
             <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-gold transition-colors transform translate-x-0 hover:translate-x-2 duration-300 flex items-center gap-4"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span className="text-sm font-sans font-bold text-gold/50">0{idx + 1}</span>
              {link.label}
            </a>
          ))}
          <div className="h-px bg-gray-100 my-4" />
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-sans font-bold text-white bg-midnight py-4 px-6 rounded-xl text-center shadow-lg active:scale-95 transition-transform"
          >
            Contact Advisor
          </a>
        </nav>
      </div>
    </>
  )
}

export default Header
