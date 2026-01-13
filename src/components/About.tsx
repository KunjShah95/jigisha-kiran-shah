import { Target, Phone, Zap, Lock } from 'lucide-react';

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
    <section className="py-32 bg-white relative overflow-hidden" id="about">
      <div className="container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative reveal-left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/5 bg-midnight">
              <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 to-midnight/90 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
                alt="Meeting with clients" 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col items-center text-center">
                 <div className="text-6xl mb-4">🏛️</div>
                 <h3 className="text-2xl font-playfair font-bold text-gold mb-1">Jigisha Kiran Shah</h3>
                 <p className="text-white/80 uppercase tracking-widest text-sm">Senior Wealth Advisor</p>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 bg-gold text-white p-8 rounded-2xl shadow-xl z-30 hidden lg:block">
              <div className="text-5xl font-bold font-playfair mb-1">22</div>
              <div className="text-sm font-medium uppercase tracking-wider">Years of<br/>Legacy</div>
            </div>
          </div>

          <div className="reveal-right">
            <div className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">The Legacy of Trust</div>
            <h2 className="text-4xl md:text-5xl font-playfair font-medium text-midnight mb-8 leading-tight">
              Dedicated to Your Family's <span className="italic text-gold">Financial Security</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Since 2004, I have dedicated my career to serving families across Gujarat from my office at Ganesh Glory 11, Sarkhej-Gandhinagar Highway, Ahmedabad. As a <strong className="text-midnight">Double MDRT (USA)</strong> member, I specialize in retirement planning, LIC pension plans, salary insurance, and comprehensive life insurance with the highest ethical standards.
            </p>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              My approach goes beyond simple policy sales. I architect comprehensive wealth protection strategies that ensure your family's future remains secure, come what may.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-midnight">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-midnight mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-midnight text-white font-semibold rounded-lg hover:bg-gold transition-colors duration-300 btn-beam">
              Schedule a Meeting
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
