import { Target, Phone, Zap, Lock, ArrowRight } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Precision Planning',
      description: 'Wealth strategies tailored to your life stage.'
    },
    {
      icon: Phone,
      title: 'Elite Accessibility',
      description: 'Prioritized support for high-value clients.'
    },
    {
      icon: Zap,
      title: 'Rapid Settlement',
      description: 'Expertise in navigating claim complexities.'
    },
    {
      icon: Lock,
      title: 'Certified Legacy',
      description: 'MDRT recognized standards of excellence.'
    }
  ]

  return (
    <section className="py-16 lg:py-32 bg-white relative overflow-hidden" id="about">
       {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-linear-to-bl from-gray-50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative reveal-left text-white">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/5 border border-gray-100 group">
              <div className="absolute inset-0 bg-linear-to-t from-midnight/90 via-transparent to-transparent z-10" />
              <img 
                src="src/assets/images/about.jpeg" 
                alt="Meeting with clients" 
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 z-20">
                 <div className="inline-block px-3 py-1 bg-gold text-midnight text-[10px] font-bold tracking-widest uppercase rounded-sm mb-4">Since 2004</div>
                 <h3 className="text-2xl lg:text-3xl font-playfair font-bold text-white mb-2">Jigisha Kiran Shah</h3>
                 <p className="text-white/80 uppercase tracking-widest text-xs font-medium">Senior Wealth Advisor • 2 Times MDRT</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 bg-white p-6 lg:p-8 rounded-3xl shadow-xl border border-gray-100 z-30 hidden md:block animate-float">
              <div className="flex items-start gap-4">
                 <div className="text-4xl lg:text-5xl font-bold font-playfair text-midnight">22<span className="text-gold">+</span></div>
                 <div className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-wider leading-relaxed mt-2">Years of<br/>Excellence</div>
              </div>
            </div>
          </div>

          <div className="reveal-right">
            <div className="inline-block px-3 py-1 bg-midnight/5 text-midnight text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-4 lg:mb-6 border border-midnight/10">The Legacy of Trust</div>
            <h2 className="text-3xl md:text-5xl font-playfair font-medium text-midnight mb-6 lg:mb-8 leading-tight">
              Dedicated to Your Family's <span className="text-gold italic relative inline-block">
                Financial Security
                <svg className="absolute w-full h-2 bottom-1 left-0 text-gold/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" /></svg>
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
              For over two decades, I've been building futures, not just selling policies. Since 2004, I've dedicated myself to serving families across Gujarat from my office at Orchid Legacy, D3-1303, Applewoods Township, Shela, Ahmedabad—helping them navigate life's biggest financial decisions with confidence and clarity.
            </p>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
              As a <strong className="text-midnight font-semibold">2-time MDRT achiever (2023 & 2024)</strong>, I don't believe in one-size-fits-all solutions. Instead, I architect personalized wealth protection strategies that evolve with your life—from retirement planning and pension optimization to salary protection and comprehensive life insurance. Every recommendation I make is rooted in deep expertise and unwavering ethical standards.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
              My clients have rewarded this approach with over <strong className="text-gold font-semibold">100 five-star Google reviews</strong> and a perfect <strong className="text-gold font-semibold">5.0★ rating</strong>. But those numbers represent something deeper: families who sleep better at night knowing their future is protected, and their legacy is secure.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-10">
              <div className="p-4 md:p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2">What we do</p>
                <p className="text-sm text-gray-600 leading-relaxed font-light">Protecting your future and securing your dreams through retirement planning, pension solutions, salary protection, and comprehensive life cover.</p>
              </div>
              <div className="p-4 md:p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2">Who we serve</p>
                <p className="text-sm text-gray-600 leading-relaxed font-light">Families, salaried professionals, business owners, and NRI investors who value trustworthy, proactive guidance.</p>
              </div>
              <div className="p-4 md:p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2">Mission</p>
                <p className="text-sm text-gray-600 leading-relaxed font-light">To deliver honest, transparent advice with zero compromise on claim readiness, so your family is protected when it matters most.</p>
              </div>
              <div className="p-4 md:p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2">Values</p>
                <p className="text-sm text-gray-600 leading-relaxed font-light">Integrity, empathy, and responsiveness—every policy curated around your goals with concierge-level support.</p>
              </div>
            </div>

            {/* Google Business Trust Badge */}
            <a 
              href="https://share.google/VQAFgVhdk114U2ozd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 mb-12 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-500/30 transition-all duration-300 group"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="text-left">
                <div className="text-sm font-bold text-midnight flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                  See Google Business Reviews
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <span className="text-gold">★★★★★</span>
                  <span className="font-semibold text-midnight">5.0</span> • 100+ reviews
                </div>
              </div>
            </a>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0 text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300 shadow-sm">
                    <feature.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-midnight mb-1 group-hover:text-gold transition-colors">{feature.title}</h4>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-midnight text-white font-semibold rounded-xl hover:bg-midnight-light transition-all duration-300 btn-beam gap-2 group shadow-lg hover:shadow-xl hover:-translate-y-1">
              <span>Schedule a Meeting</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
