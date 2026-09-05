import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Pages with a dark midnight background — nav text must be white when unscrolled
  const darkPages = ['/reviews']
  const isDarkPage = darkPages.includes(location.pathname)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll + close on Escape when mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/reviews', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
            : isDarkPage
              ? 'bg-midnight/70 backdrop-blur-md py-6 border-b border-white/10'
              : 'bg-cream/80 backdrop-blur-sm py-6'
        }`}
      >
        <div className="container flex items-center justify-between w-full">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 group z-50 relative min-w-0"
            aria-label="Jigisha Kiran Shah — home"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-midnight to-midnight-light rounded-xl flex items-center justify-center text-white font-display font-bold text-base sm:text-xl shadow-lg border border-white/10 group-hover:scale-105 transition-transform duration-300 shrink-0">
              JK
            </div>
            <div className="flex flex-col min-w-0">
              <span className={`font-display font-bold text-base sm:text-lg leading-none truncate transition-colors ${
                isScrolled ? 'text-midnight' : isDarkPage ? 'text-white' : 'text-midnight'
              }`}>
                Jigisha Kiran<span className="text-gold"> Shah</span>
              </span>
              <span className={`text-[11px] uppercase tracking-[0.2em] font-medium ${
                isScrolled ? 'text-gray-500' : isDarkPage ? 'text-white/60' : 'text-gray-500'
              }`}>LIC Advisor</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors relative group py-2 ${
                  isActive(link.to)
                    ? 'text-gold'
                    : isScrolled
                      ? 'text-gray-700 hover:text-gold'
                      : isDarkPage
                        ? 'text-white/80 hover:text-gold'
                        : 'text-gray-700 hover:text-gold'
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold" />
                )}
                {!isActive(link.to) && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <a
              href="tel:+919824025435"
              className="hidden lg:flex flex-col items-end text-right mr-2"
            >
              <span className={`text-[11px] uppercase tracking-widest font-bold ${
                isScrolled ? 'text-gray-500' : isDarkPage ? 'text-white/60' : 'text-gray-500'
              }`}>Advisory Support</span>
              <span className={`font-semibold hover:text-gold transition-colors font-sans text-sm ${
                isScrolled ? 'text-midnight' : isDarkPage ? 'text-white' : 'text-midnight'
              }`}>+91 98240 25435</span>
            </a>

            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 bg-midnight text-white hover:bg-gold hover:text-white hover:shadow-lg"
            >
              Book Free Consultation
            </Link>

            <button
              className="md:hidden flex flex-col gap-1.5 p-2.5 -m-1 rounded-lg hover:bg-gray-100 transition-colors min-w-11 min-h-11 items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span aria-hidden="true" className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''} ${isDarkPage && !isScrolled ? 'bg-white' : 'bg-midnight'}`} />
              <span aria-hidden="true" className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''} ${isDarkPage && !isScrolled ? 'bg-white' : 'bg-midnight'}`} />
              <span aria-hidden="true" className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''} ${isDarkPage && !isScrolled ? 'bg-white' : 'bg-midnight'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!isMobileMenuOpen}
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col px-8 pb-10 overflow-y-auto transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'
        }`}
        style={{ paddingTop: 'max(6rem, env(safe-area-inset-top))' }}
      >
        <div aria-hidden="true" className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <div className="w-64 h-64 bg-gold rounded-full blur-3xl" />
        </div>

        <nav className="flex flex-col gap-6 text-2xl font-display text-midnight relative z-10">
          {navLinks.map((link, idx) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              tabIndex={isMobileMenuOpen ? 0 : -1}
              className={`hover:text-gold transition-colors transform translate-x-0 hover:translate-x-2 duration-300 flex items-center gap-4 ${
                isActive(link.to) ? 'text-gold' : ''
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span aria-hidden="true" className="text-sm font-sans font-bold text-gold/50">0{idx + 1}</span>
              {link.label}
            </Link>
          ))}
          <div className="h-px bg-gray-100 my-4" />
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            tabIndex={isMobileMenuOpen ? 0 : -1}
            className="text-lg font-sans font-bold text-white bg-midnight py-4 px-6 rounded-xl text-center shadow-lg active:scale-95 transition-transform hover:bg-gold"
          >
            Book Free Consultation
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Header
