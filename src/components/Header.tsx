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
    { href: '#reviews', label: 'Reviews' },
  ]

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container flex items-center justify-between w-full">
          <a 
            href="#home" 
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 bg-linear-to-br from-midnight to-blue-900 rounded-lg flex items-center justify-center text-white font-playfair font-bold text-xl shadow-lg group-hover:shadow-gold/20 transition-all duration-300 border border-white/10">
              JK
            </div>
            <div className={`font-playfair font-bold text-xl transition-colors ${isScrolled ? 'text-midnight' : 'text-midnight'}`}>
              Jigisha Kiran<span className="text-gold"> Shah</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-gold transition-colors relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a 
              href="tel:+919824025435" 
              className="hidden lg:flex flex-col items-end text-right"
            >
              <span className="text-xs uppercase tracking-widest text-gray-500">Advisory Support</span>
              <span className="font-semibold text-midnight hover:text-gold transition-colors">+91 98240 25435</span>
            </a>
            
            <a 
              href="#contact" 
              className="hidden sm:inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 bg-midnight text-white hover:bg-gold hover:shadow-lg"
            >
              Get Expert Advice
            </a>

            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-midnight transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-midnight transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-midnight transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col pt-32 px-8 transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-8 text-2xl font-playfair text-midnight">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gold"
          >
            Contact Advisor
          </a>
        </nav>
      </div>
    </>
  )
}

export default Header
