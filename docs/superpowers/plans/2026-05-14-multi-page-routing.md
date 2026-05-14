# Multi-Page Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert single-page LIC advisor site into 5-page multi-page website with react-router routing.

**Architecture:** react-router-dom v6 with BrowserRouter. Shared Layout wraps Header + page content + Footer + WhatsAppButton. Pages are standalone components that compose existing section components.

**Tech Stack:** React 18 + TypeScript + Vite + react-router-dom v6

---

### Task 1: Install react-router-dom and create shared hooks

**Files:**
- Create: `src/hooks/useScrollReveal.ts`
- Create: `src/hooks/useDocumentTitle.ts`
- Modify: `package.json` (add dep)

- [ ] **Step 1: Install react-router-dom**

Run: `npm install react-router-dom`

- [ ] **Step 2: Create useDocumentTitle hook**

Create `src/hooks/useDocumentTitle.ts`:
```ts
import { useEffect } from 'react'

export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | Jigisha Kiran Shah`
    window.scrollTo(0, 0)
  }, [title])
}
```

- [ ] **Step 3: Create useScrollReveal hook**

Create `src/hooks/useScrollReveal.ts`:
```ts
import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    
    const reveal = () => {
      revealElements.forEach(element => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const revealPoint = 150
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', reveal)
    reveal()
    
    return () => window.removeEventListener('scroll', reveal)
  }, [])
}
```

- [ ] **Step 4: Commit**

```
git add package.json src/hooks/
git commit -m "feat: add react-router-dom and shared hooks"
```

---

### Task 2: Create Layout component

**Files:**
- Create: `src/components/Layout.tsx`

- [ ] **Step 1: Create Layout.tsx**

Create `src/components/Layout.tsx`:
```tsx
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

export default function Layout() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```
git add src/components/Layout.tsx
git commit -m "feat: add Layout component with Outlet"
```

---

### Task 3: Wrap app with BrowserRouter and set up Routes

**Files:**
- Modify: `src/main.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Update main.tsx**

Replace `src/main.tsx`:
```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { Analytics } from '@vercel/analytics/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>,
)
```

- [ ] **Step 2: Replace App.tsx with Routes**

Replace `src/App.tsx`:
```tsx
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ReviewsPage from './pages/ReviewsPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
```

- [ ] **Step 3: Create pages directory and page components**

Run: `mkdir -p src/pages`

Create `src/pages/HomePage.tsx`:
```tsx
import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
import Calculator from '../components/Calculator'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function HomePage() {
  useDocumentTitle('LIC Advisor Ahmedabad | Jigisha Kiran Shah')
  useScrollReveal()

  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalScroll) * 100
      setScrollProgress(currentProgress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div
        className="scroll-progress"
        style={{
          width: `${scrollProgress}%`,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          backgroundColor: '#c4772a',
          zIndex: 2000,
          transition: 'width 0.1s ease-out'
        }}
      />
      <Hero />
      <WhyUs />
      <Calculator />
    </>
  )
}
```

Create `src/pages/ServicesPage.tsx`:
```tsx
import Services from '../components/Services'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function ServicesPage() {
  useDocumentTitle('Insurance Services | LIC Plans Ahmedabad')
  useScrollReveal()

  return <Services />
}
```

Create `src/pages/AboutPage.tsx`:
```tsx
import About from '../components/About'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function AboutPage() {
  useDocumentTitle('About | 2 Times MDRT Advisor Ahmedabad')
  useScrollReveal()

  return <About />
}
```

Create `src/pages/ReviewsPage.tsx`:
```tsx
import Testimonials from '../components/Testimonials'
import Reviews from '../components/Reviews'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function ReviewsPage() {
  useDocumentTitle('Client Reviews & Testimonials | LIC Advisor')
  useScrollReveal()

  return (
    <>
      <Testimonials />
      <Reviews />
    </>
  )
}
```

Create `src/pages/ContactPage.tsx`:
```tsx
import Contact from '../components/Contact'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function ContactPage() {
  useDocumentTitle('Contact | LIC Advisor Ahmedabad | Free Consultation')
  useScrollReveal()

  return <Contact />
}
```

- [ ] **Step 4: Commit**

```
git add src/main.tsx src/App.tsx src/pages/
git commit -m "feat: add routing with 5 pages"
```

---

### Task 4: Update Header with react-router Links

**Files:**
- Modify: `src/components/Header.tsx`

- [ ] **Step 1: Replace Header nav links**

Replace `src/components/Header.tsx`:
```tsx
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  
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
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            ? 'bg-white/80 backdrop-blur-md shadow-md py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container flex items-center justify-between w-full">
          <Link 
            to="/" 
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
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors relative group py-2 ${
                  isActive(link.to) ? 'text-gold' : 'text-gray-700 hover:text-gold'
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

          <div className="flex items-center gap-4 z-50">
            <a 
              href="tel:+919824025435" 
              className="hidden lg:flex flex-col items-end text-right mr-2"
            >
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Advisory Support</span>
              <span className="font-semibold text-midnight hover:text-gold transition-colors font-inter text-sm">+91 98240 25435</span>
            </a>
            
            <Link 
              to="/contact" 
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 bg-midnight text-white hover:bg-gold hover:text-midnight hover:shadow-lg border border-transparent hover:border-gold/20"
            >
              Get Quote
            </Link>

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
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`hover:text-gold transition-colors transform translate-x-0 hover:translate-x-2 duration-300 flex items-center gap-4 ${
                isActive(link.to) ? 'text-gold' : ''
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span className="text-sm font-sans font-bold text-gold/50">0{idx + 1}</span>
              {link.label}
            </Link>
          ))}
          <div className="h-px bg-gray-100 my-4" />
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-sans font-bold text-white bg-midnight py-4 px-6 rounded-xl text-center shadow-lg active:scale-95 transition-transform"
          >
            Contact Advisor
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Header
```

- [ ] **Step 2: Commit**

```
git add src/components/Header.tsx
git commit -m "feat: update Header with react-router Links"
```

---

### Task 5: Update Footer with react-router Links

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Replace Footer hash links with Link components**

Edit `src/components/Footer.tsx`:
- Replace `import { Phone, MapPin } from 'lucide-react'` with `import { Phone, MapPin } from 'lucide-react'` + `import { Link } from 'react-router-dom'`
- Replace all `<a href="#home">`, `<a href="#services">`, `<a href="#about">`, `<a href="#testimonials">`, `<a href="#reviews">`, `<a href="#contact">` with `<Link to="/">`, `<Link to="/services">`, `<Link to="/about">`, `<Link to="/reviews">`, `<Link to="/contact">`

Full file `src/components/Footer.tsx`:
```tsx
import { Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const quickLinks = [
      { label: 'Home', to: '/' },
      { label: 'Services', to: '/services' },
      { label: 'About', to: '/about' },
      { label: 'Testimonials', to: '/reviews' },
      { label: 'Reviews', to: '/reviews' },
      { label: 'Contact', to: '/contact' }
    ]
  
    const services = [
      { label: 'Term Life Assurance', to: '/services' },
      { label: 'Wealth Endowment', to: '/services' },
      { label: 'Investment Linked (ULIP)', to: '/services' },
      { label: 'Retirement Concierge', to: '/services' },
      { label: 'Child Education Legacy', to: '/services' }
    ]
  
    const resources = [
      { label: 'LIC Official Website', href: 'https://licindia.in' },
      { label: 'Premium Calculator', to: '/contact' },
      { label: 'Claim Status', href: 'https://licindia.in' },
      { label: 'Policy Status', href: 'https://licindia.in' }
    ]
  
    return (
      <footer className="bg-midnight text-white pt-24 pb-10 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#3a2a20]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative z-10 top-0">
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-linear-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center font-bold font-playfair text-xl text-midnight shadow-lg">JK</div>
                <div className="font-playfair font-bold text-2xl">
                  Jigisha Kiran<span className="text-gold"> Shah</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                Trusted LIC Advisor in Ahmedabad with 22+ years of legacy. 
                Safeguarding your future and securing your dreams with personalized insurance solutions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-sm text-gray-300 group">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                    <span className="group-hover:text-white transition-colors">Orchid Legacy, D3-1303, Applewoods Township, Shela, Ahmedabad, Gujarat 380058</span>
                </div>
                <a href="tel:+919824025435" className="flex items-center gap-3 text-sm text-gray-300 group hover:text-gold transition-colors">
                    <Phone className="w-5 h-5 text-gold shrink-0 group-hover:text-white transition-colors" />
                    <span>+91 98240 25435</span>
                </a>
              </div>

              <div className="flex gap-4">
                <a href="https://share.google/VQAFgVhdk114U2ozd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-gold hover:text-midnight transition-all duration-300" title="Google Business Reviews">
                  <span className="sr-only">Google Business</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@jigishakiranshah4636" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300" title="YouTube Channel">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 9.71a8.5 8.5 0 0 0-.91-4.13 2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3 2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48 9.55 9.55 0 0 0 .3 2 3.14 3.14 0 0 0 .71 1.36 2.86 2.86 0 0 0 1.49.78 45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78 2.49 2.49 0 0 0 .61-1 10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z"/></svg>
                </a>
                <a href="https://wa.me/919824025435" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300" title="WhatsApp">
                  <span className="sr-only">WhatsApp</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-playfair font-bold text-lg mb-6 text-gold">Quick Links</h4>
              <nav className="flex flex-col gap-3">
                {quickLinks.map((link, index) => (
                  <Link key={index} to={link.to} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold opacity-0 hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div>
              <h4 className="font-playfair font-bold text-lg mb-6 text-gold">Our Expertise</h4>
              <nav className="flex flex-col gap-3">
                {services.map((link, index) => (
                  <Link key={index} to={link.to} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div>
              <h4 className="font-playfair font-bold text-lg mb-6 text-gold">Resources</h4>
              <nav className="flex flex-col gap-3">
                {resources.map((link, index) => (
                  link.to ? (
                    <Link key={index} to={link.to} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm">
                      {link.label}
                    </Link>
                  ) : (
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm">
                      {link.label}
                    </a>
                  )
                ))}
              </nav>
              
              <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/5">
                <p className="text-xs text-gray-400 mb-2 font-bold uppercase tracking-wider">Certifications</p>
                <div className="flex gap-2">
                    <div className="px-2 py-1 bg-gold/10 text-gold text-[10px] font-bold rounded-sm border border-gold/20">2 Times MDRT</div>
                    <div className="px-2 py-1 bg-gold/10 text-gold text-[10px] font-bold rounded-sm border border-gold/20">LIC Club</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Jigisha Kiran Shah. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
```

- [ ] **Step 2: Commit**

```
git add src/components/Footer.tsx
git commit -m "feat: update Footer with react-router Links"
```

---

### Task 6: Remove hash IDs from section components and clean up

**Files:**
- Modify: `src/components/Hero.tsx` — remove `id="home"`
- Modify: `src/components/Services.tsx` — remove `id="services"`
- Modify: `src/components/About.tsx` — remove `id="about"`
- Modify: `src/components/WhyUs.tsx` — remove `id="about"`
- Modify: `src/components/Testimonials.tsx` — remove `id="testimonials"`
- Modify: `src/components/Reviews.tsx` — remove `id="reviews"`
- Modify: `src/components/Contact.tsx` — remove `id="contact"`
- Modify: `src/components/Calculator.tsx` — remove `id="calculator"`

- [ ] **Step 1: Remove id="home" from Hero.tsx**

In `src/components/Hero.tsx`, change:
```tsx
<section className="hero relative overflow-hidden min-h-screen lg:min-h-[95vh] flex items-center bg-transparent" id="home">
```
to:
```tsx
<section className="hero relative overflow-hidden min-h-screen lg:min-h-[95vh] flex items-center bg-transparent">
```

- [ ] **Step 2: Remove id="services" from Services.tsx**

In `src/components/Services.tsx`, remove `id="services"` from the section tag:
```tsx
<section className="py-20 lg:py-32 bg-[#f6efe6] relative overflow-hidden">
```

- [ ] **Step 3: Remove id="about" from About.tsx**

In `src/components/About.tsx`, remove `id="about"` from the section tag:
```tsx
<section className="py-16 lg:py-32 bg-[#fbf6ef] relative overflow-hidden">
```

- [ ] **Step 4: Remove id="about" from WhyUs.tsx**

In `src/components/WhyUs.tsx`, remove `id="about"` from the section tag:
```tsx
<section className="py-16 lg:py-24 bg-midnight text-white relative overflow-hidden">
```

- [ ] **Step 5: Remove id="testimonials" from Testimonials.tsx**

In `src/components/Testimonials.tsx`, remove `id="testimonials"` from the section tag:
```tsx
<section className="py-16 lg:py-32 bg-midnight text-white relative overflow-hidden">
```

- [ ] **Step 6: Remove id="reviews" from Reviews.tsx**

In `src/components/Reviews.tsx`, remove `id="reviews"` from the section tag:
```tsx
<section className="py-24 lg:py-32 bg-gradient-to-b from-midnight to-midnight-light relative overflow-hidden">
```

- [ ] **Step 7: Remove id="contact" from Contact.tsx**

In `src/components/Contact.tsx`, remove `id="contact"` from the section tag:
```tsx
<section className="py-16 lg:py-24 bg-[#f7f1ea] relative overflow-hidden">
```

- [ ] **Step 8: Remove id="calculator" from Calculator.tsx**

In `src/components/Calculator.tsx`, remove `id="calculator"` from the section tag:
```tsx
<section className="py-16 lg:py-24 bg-midnight-light relative overflow-hidden">
```

- [ ] **Step 9: Remove smooth scroll from index.css**

In `src/index.css`, remove `scroll-behavior: smooth;` from the html rule:
```css
html {
    font-size: 16px;
}
```

- [ ] **Step 10: Commit**

```
git add src/components/Hero.tsx src/components/Services.tsx src/components/About.tsx src/components/WhyUs.tsx src/components/Testimonials.tsx src/components/Reviews.tsx src/components/Contact.tsx src/components/Calculator.tsx src/index.css
git commit -m "cleanup: remove hash anchors and smooth scroll"
```

---

### Task 7: Verify build

**Files:** None

- [ ] **Step 1: Run TypeScript check**

Run: `npx tsc --noEmit`
Expected: No type errors

- [ ] **Step 2: Run build**

Run: `npm run build`
Expected: Build succeeds, output in `dist/`

- [ ] **Step 3: Run dev server and verify navigation**

Run: `npm run dev`
Expected: Server starts, navigate to each page and verify content renders correctly

- [ ] **Step 4: Commit any fixes**

```
git add -A
git commit -m "fix: resolve build issues"
```
