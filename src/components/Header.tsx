import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

/**
 * Primary navigation only — four links plus the booking CTA.
 * Everything else (Guides, Stories, Reviews, Gujarati, Calculators) lives in the
 * footer and the homepage discovery band, so the bar still fits at 1024px.
 */
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

/** Secondary destinations — drawer only, small print, never in the top bar.
    `cta` keeps the analytics values the old top-bar links used. */
const moreLinks = [
  { to: '/guides', label: 'Guides', cta: 'nav-guides' },
  { to: '/reviews', label: 'Reviews', cta: 'nav-testimonials' },
  { to: '/blog', label: 'Stories', cta: 'nav-stories' },
  { to: '/calculators', label: 'Calculators', cta: 'nav-calculators' },
  { to: '/protection-check', label: 'Protection check', cta: 'nav-protection-check' },
  { to: '/gu', label: 'ગુજરાતી', cta: 'nav-gujarati' },
]

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Pages with a dark midnight background — nav text must be white when unscrolled
  const darkPages = ['/reviews']
  const isDarkPage = darkPages.includes(location.pathname)

  // The desktop bar starts at lg (1024px). Close the drawer as soon as it appears.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
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
    handleScroll()
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

  // Close the drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const isActive = (path: string) => location.pathname === path

  // True whenever the header sits on a light surface (cream page, scrolled, or open drawer)
  const isLightHeader = isMobileMenuOpen || isScrolled || !isDarkPage

  // White bars on a dark header; midnight whenever the header sits on a light surface
  const barColor = isLightHeader ? 'bg-midnight' : 'bg-white'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isMobileMenuOpen
            ? 'bg-cream border-b border-black/[0.06] py-3'
            : isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
              : isDarkPage
                ? 'bg-midnight/80 backdrop-blur-md py-3 border-b border-white/10'
                : 'bg-cream/85 backdrop-blur-md py-3 border-b border-black/[0.06]'
        }`}
      >
        <div className="container flex items-center justify-between gap-4 w-full">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 group z-50 relative shrink-0"
            aria-label="Jigisha Kiran Shah — home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-linear-to-br from-midnight to-midnight-light rounded-xl flex items-center justify-center text-white font-display font-bold text-sm sm:text-base shadow-sm border border-white/10 group-hover:scale-105 transition-transform duration-300 shrink-0">
              JK
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-[15px] sm:text-base leading-none whitespace-nowrap transition-colors ${
                isLightHeader ? 'text-midnight' : 'text-white'
              }`}>
                Jigisha Kiran<span className="text-gold"> Shah</span>
              </span>
              <span className={`mt-1 text-[10px] uppercase tracking-[0.18em] font-medium whitespace-nowrap ${
                isLightHeader ? 'text-gray-500' : 'text-white/60'
              }`}>LIC Advisor</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-7 xl:gap-8 shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-cta={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                aria-current={isActive(link.to) ? 'page' : undefined}
                className={`text-sm font-medium whitespace-nowrap transition-colors relative group py-2 ${
                  isActive(link.to)
                    ? 'text-gold'
                    : isLightHeader
                      ? 'text-gray-700 hover:text-gold'
                      : 'text-white/80 hover:text-gold'
                }`}
              >
                {link.label}
                {isActive(link.to) ? (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold" />
                ) : (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-4 z-50 shrink-0">
            <a
              href="tel:+919824025435"
              className="hidden xl:flex flex-col items-end text-right mr-1 whitespace-nowrap"
            >
              <span className={`text-[10px] uppercase tracking-widest font-bold ${
                isLightHeader ? 'text-gray-500' : 'text-white/60'
              }`}>Advisory Support</span>
              <span className={`font-semibold hover:text-gold transition-colors font-sans text-sm whitespace-nowrap ${
                isLightHeader ? 'text-midnight' : 'text-white'
              }`}>+91 98240 25435</span>
            </a>

            <Link
              to="/book"
              data-cta="header-book"
              className="hidden lg:inline-flex items-center justify-center px-4 xl:px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 bg-midnight text-white hover:bg-gold hover:text-white hover:shadow-lg"
            >
              Book Free Consultation
            </Link>

            <button
              className={`lg:hidden flex flex-col gap-1.5 p-2.5 -m-1 rounded-lg transition-colors min-w-11 min-h-11 items-center justify-center ${
                isMobileMenuOpen ? 'bg-transparent' : isLightHeader ? 'hover:bg-black/5' : 'hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span aria-hidden="true" className={`w-6 h-0.5 rounded-full transition-all duration-300 ${barColor} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span aria-hidden="true" className={`w-6 h-0.5 rounded-full transition-all duration-300 ${barColor} ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span aria-hidden="true" className={`w-6 h-0.5 rounded-full transition-all duration-300 ${barColor} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
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
        className={`fixed inset-0 bg-cream z-[45] flex flex-col px-6 pb-8 overflow-y-auto transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'
        }`}
        style={{ paddingTop: 'max(5.5rem, env(safe-area-inset-top))' }}
      >
        <nav aria-label="Primary" className="flex flex-col gap-1 relative z-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-cta={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setIsMobileMenuOpen(false)}
              tabIndex={isMobileMenuOpen ? 0 : -1}
              aria-current={isActive(link.to) ? 'page' : undefined}
              className={`flex items-center justify-between border-b border-black/[0.06] py-3.5 text-xl font-display font-medium transition-colors ${
                isActive(link.to) ? 'text-gold' : 'text-midnight hover:text-gold'
              }`}
            >
              {link.label}
              <span aria-hidden="true" className="text-gold/30 text-sm font-sans">→</span>
            </Link>
          ))}

          <div className="mt-6">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
              More from the site
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {moreLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-cta={link.cta}
                  onClick={() => setIsMobileMenuOpen(false)}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  className={`py-2 text-sm font-medium transition-colors ${
                    isActive(link.to) ? 'text-gold' : 'text-gray-600 hover:text-gold-dark'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <Link
              to="/book"
              data-cta="menu-book"
              onClick={() => setIsMobileMenuOpen(false)}
              tabIndex={isMobileMenuOpen ? 0 : -1}
              className="text-base font-sans font-bold text-white bg-midnight py-3.5 px-6 rounded-xl text-center shadow-lg active:scale-95 transition-transform hover:bg-gold"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:+919824025435"
              data-cta="menu-call"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              className="text-base font-sans font-bold text-midnight border border-midnight/15 py-3.5 px-6 rounded-xl text-center"
            >
              Call +91 98240 25435
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
