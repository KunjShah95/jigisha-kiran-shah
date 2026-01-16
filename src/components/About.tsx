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
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
                alt="Meeting with clients" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 z-20">
                 <div className="inline-block px-3 py-1 bg-gold text-midnight text-[10px] font-bold tracking-widest uppercase rounded-sm mb-4">Since 2004</div>
                 <h3 className="text-2xl lg:text-3xl font-playfair font-bold text-white mb-2">Jigisha Kiran Shah</h3>
                 <p className="text-white/80 uppercase tracking-widest text-xs font-medium">Senior Wealth Advisor • Double MDRT</p>
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
              Since 2004, I have dedicated my career to serving families across Gujarat from my office at Ganesh Glory 11, Sarkhej-Gandhinagar Highway, Ahmedabad. As a <strong className="text-midnight font-semibold">Double MDRT (USA)</strong> member, I specialize in retirement planning, LIC pension plans, salary insurance, and comprehensive life insurance with the highest ethical standards.
            </p>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed font-light">
              My approach goes beyond simple policy sales. I architect comprehensive wealth protection strategies that ensure your family's future remains secure, come what may.
            </p>
            
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
