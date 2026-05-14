import { useState, useEffect } from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
import Calculator from '../components/Calculator'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSEO } from '../hooks/useSEO'

export default function HomePage() {
  useSEO({
    title: 'LIC Advisor Ahmedabad | Retirement & Life Insurance',
    description: 'Jigisha Kiran Shah, trusted LIC advisor in Ahmedabad with 22+ years of experience. 2 Times MDRT Achiever. Expert in retirement planning, pension plans, term insurance & ULIP at Orchid Legacy, Shela.',
    ogTitle: 'Jigisha Kiran Shah - LIC Advisor Ahmedabad | 2 Times MDRT',
    ogDescription: 'Expert LIC advisor in Shela, Ahmedabad. Specializing in retirement planning, pension plans & life insurance. 2 Times MDRT Achiever 2023 & 2024.'
  })
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

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-2xl px-4 py-3 flex gap-3">
        <a
          href="https://wa.me/919824025435"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 rounded-xl text-sm hover:bg-[#1da851] transition-colors"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          WhatsApp
        </a>
        <a
          href="tel:+919824025435"
          className="flex-1 flex items-center justify-center gap-2 bg-midnight text-white font-bold py-3 rounded-xl text-sm hover:bg-midnight-light transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
      </div>
    </>
  )
}
