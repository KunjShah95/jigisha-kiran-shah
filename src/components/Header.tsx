import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { pageWhatsAppText, whatsappUrl } from '../lib/contact'

/**
 * Primary navigation — five links plus the WhatsApp CTA, single line at lg.
 * Secondary destinations live in the drawer and footer.
 */
const navLinks = [
  { to: '/services', label: 'Services' },
  { to: '/guides', label: 'Guides' },
  { to: '/about', label: 'About' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
]

/** Secondary destinations — drawer only. `cta` keeps the analytics values. */
const moreLinks = [
  { to: '/', label: 'Home', cta: 'nav-home' },
  { to: '/blog', label: 'Stories', cta: 'nav-stories' },
  { to: '/calculators', label: 'Calculators', cta: 'nav-calculators' },
  { to: '/protection-check', label: 'Protection check', cta: 'nav-protection-check' },
  { to: '/policy-card', label: 'Family policy card', cta: 'nav-policy-card' },
  { to: '/areas', label: 'Areas served', cta: 'nav-areas' },
  { to: '/gu', label: 'ગુજરાતી', cta: 'nav-gujarati' },
  { to: '/hi', label: 'हिंदी', cta: 'nav-hindi' },
]

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const waHref = whatsappUrl(pageWhatsAppText(location.pathname))

  // Pages with a dark ink background — nav text must be white when unscrolled
  const darkPages = ['/reviews']
  const isDarkPage = darkPages.includes(location.pathname)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
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

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const isActive = (path: string) => location.pathname === path

  const isLightHeader = isMobileMenuOpen || isScrolled || !isDarkPage
  const barColor = isLightHeader ? 'bg-ink' : 'bg-white'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isMobileMenuOpen
            ? 'bg-paper border-b border-border py-3'
            : isScrolled
              ? 'bg-paper/90 backdrop-blur-md border-b border-border py-2'
              : isDarkPage
                ? 'bg-ink/80 backdrop-blur-md py-3 border-b border-white/10'
                : 'bg-paper/80 backdrop-blur-md py-3 border-b border-transparent'
        }`}
      >
        <div className="container flex items-center justify-between gap-4 w-full">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 group z-50 relative shrink-0"
            aria-label="Jigisha Kiran Shah — home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-emerald rounded-xl flex items-center justify-center text-white font-display font-extrabold text-base sm:text-lg group-hover:bg-emerald-deep transition-colors duration-300 shrink-0">
              J
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-[15px] sm:text-base leading-none tracking-tight whitespace-nowrap transition-colors ${
                isLightHeader ? 'text-ink' : 'text-white'
              }`}>
                Jigisha Kiran Shah
              </span>
              <span className={`mt-1 text-[10px] uppercase tracking-[0.16em] font-medium whitespace-nowrap ${
                isLightHeader ? 'text-muted-foreground' : 'text-white/60'
              }`}>LIC Advisor · Ahmedabad</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-6 xl:gap-7 shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-cta={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                aria-current={isActive(link.to) ? 'page' : undefined}
                className={`text-sm font-medium whitespace-nowrap transition-colors relative py-2 ${
                  isActive(link.to)
                    ? 'text-emerald-deep'
                    : isLightHeader
                      ? 'text-ink/70 hover:text-emerald-deep'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-emerald transition-all duration-300 ${
                    isActive(link.to) ? 'w-full' : 'w-0 opacity-0'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3 z-50 shrink-0">
            <a
              href="tel:+919824025435"
              className={`hidden xl:inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors mr-1 ${
                isLightHeader ? 'text-ink hover:text-emerald-deep' : 'text-white hover:text-sage'
              }`}
            >
              +91 98240 25435
            </a>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="header-whatsapp"
              className="hidden lg:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 bg-whatsapp text-white hover:bg-whatsapp-dark active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
              Chat on WhatsApp
            </a>

            {/* Mobile: visible without opening the menu */}
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="header-mobile-book"
              aria-label="Book a call on WhatsApp"
              className="lg:hidden inline-flex items-center justify-center gap-1.5 min-h-11 min-w-11 px-3.5 rounded-full text-xs font-bold whitespace-nowrap bg-whatsapp text-white active:scale-95 transition-transform"
            >
              <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
              <span className="hidden min-[400px]:inline">Book a call</span>
            </a>

            <button
              className={`lg:hidden flex flex-col gap-1.5 p-2.5 -m-1 rounded-lg transition-colors min-w-11 min-h-11 items-center justify-center ${
                isMobileMenuOpen ? 'bg-transparent' : isLightHeader ? 'hover:bg-ink/5' : 'hover:bg-white/10'
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
        className={`fixed inset-0 bg-paper z-[45] flex flex-col px-6 pb-8 overflow-y-auto transition-all duration-300 lg:hidden ${
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
              className={`flex items-center justify-between border-b border-border py-3.5 text-2xl font-display font-bold tracking-tight transition-colors ${
                isActive(link.to) ? 'text-emerald-deep' : 'text-ink hover:text-emerald-deep'
              }`}
            >
              {link.label}
              <span aria-hidden="true" className="text-emerald/40 text-base font-sans">→</span>
            </Link>
          ))}

          <div className="mt-6">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
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
                    isActive(link.to) ? 'text-emerald-deep' : 'text-ink/60 hover:text-emerald-deep'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="menu-whatsapp"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              className="flex items-center justify-center gap-2 text-base font-sans font-bold text-white bg-whatsapp py-3.5 px-6 rounded-full text-center active:scale-95 transition-transform hover:bg-whatsapp-dark"
            >
              <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919824025435"
              data-cta="menu-call"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              className="text-base font-sans font-bold text-ink border border-ink/15 bg-white py-3.5 px-6 rounded-full text-center"
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