import { useState, useEffect } from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
import Calculator from '../components/Calculator'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSEO } from '../hooks/useSEO'

export default function HomePage() {
  useSEO({
    title: 'LIC Advisor Near Me Ahmedabad | Life Insurance Agent Shela',
    description: 'Jigisha Kiran Shah - Top LIC advisor & life insurance agent near you in Ahmedabad, Shela. 22+ years experience, 2 Times MDRT Achiever. Expert retirement planning, term life, ULIP, pension plans & child education policies in all Ahmedabad areas.',
    ogTitle: 'Best LIC Agent Near Me in Ahmedabad | Jigisha Kiran Shah',
    ogDescription: 'Find trusted life insurance advisor in Ahmedabad. Jigisha Kiran Shah offers expert LIC policies, retirement planning & pension solutions. Serving all areas including Shela, Satellite, SG Highway.',
    path: '/'
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
