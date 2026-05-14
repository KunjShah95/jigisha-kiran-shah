import { ArrowRight, Star, Shield, Award, Users, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom'
import heroImage from '../assets/images/hero-image.jpeg';

const Hero = () => {
  return (
    <section className="hero relative overflow-hidden min-h-[auto] lg:min-h-[95vh] flex items-center bg-transparent py-8 lg:py-0">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-[#f2e6d8]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-linear-to-tr from-[#f7e9d7]/50 to-transparent" />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#ead6c1]/45 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-gold-light/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />
      </div>

      <div className="container relative z-10 w-full pt-20 lg:pt-24 pb-12 lg:pb-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 hero__content reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-5 lg:py-2 rounded-full bg-white border border-gold/30 shadow-md mb-4 lg:mb-6 hover:shadow-lg transition-shadow duration-300">
              <Award className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-gold fill-gold" />
              <span className="text-[10px] lg:text-sm font-bold text-midnight tracking-wide uppercase">2 Times MDRT Achiever 2023 & 2024</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-gold/10 border border-gold/30 mb-3 lg:mb-5">
              <span className="text-[10px] lg:text-sm font-bold text-gold tracking-wide uppercase">Your Wealth, Your Legacy, Our Expertise</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-playfair font-bold text-midnight leading-[1.15] mb-4 lg:mb-6 tracking-tight">
              Safeguarding Your <br />
              <span className="text-gradient-gold italic relative inline-block">
                Wealth & Legacy
                <svg className="absolute w-full h-2 lg:h-3 -bottom-1 lg:-bottom-2 left-0 text-gold/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-sm lg:text-xl text-gray-600 mb-6 lg:mb-8 max-w-xl leading-relaxed font-light">
              Trusted by <strong className="text-midnight">2,700+ families</strong> for comprehensive retirement planning and life insurance strategies. Rated <strong className="text-gold">5.0 ★ on Google</strong> — Get expert guidance for your family's future.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-8 lg:mb-12">
              <Link
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3.5 lg:px-8 lg:py-4 bg-midnight text-white font-bold rounded-xl hover:bg-midnight-light transition-all duration-300 gap-2 group btn-beam shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm lg:text-base"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/919824025435"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 lg:px-8 lg:py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1da851] transition-all duration-300 gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm lg:text-base"
              >
                <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                <span>WhatsApp Now</span>
              </a>
              <Link
                to="/services" 
                className="inline-flex items-center justify-center px-6 py-3.5 lg:px-8 lg:py-4 bg-white border border-gray-200 text-midnight font-semibold rounded-xl hover:bg-gray-50 hover:border-gold/50 transition-all duration-300 shadow-sm hover:shadow-md text-sm lg:text-base"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 py-6 border-t border-gray-200/60 w-full">
              <div className="reveal-scale group cursor-default" style={{ transitionDelay: '0.2s' }}>
                <div className="flex items-center gap-1.5 lg:gap-2 mb-0.5">
                  <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-gold" />
                  <div className="text-xl lg:text-3xl font-bold text-midnight">22+</div>
                </div>
                <div className="text-[9px] lg:text-xs text-gray-500 uppercase tracking-widest font-semibold">Years Exp.</div>
              </div>
              <div className="reveal-scale group cursor-default" style={{ transitionDelay: '0.4s' }}>
                <div className="flex items-center gap-1.5 lg:gap-2 mb-0.5">
                  <Users className="w-4 h-4 lg:w-5 lg:h-5 text-gold" />
                  <div className="text-xl lg:text-3xl font-bold text-midnight">2.7k+</div>
                </div>
                <div className="text-[9px] lg:text-xs text-gray-500 uppercase tracking-widest font-semibold">Families</div>
              </div>
               <div className="reveal-scale group cursor-default" style={{ transitionDelay: '0.6s' }}>
                <div className="flex items-center gap-1.5 lg:gap-2 mb-0.5">
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 text-gold fill-gold" />
                  <div className="text-xl lg:text-3xl font-bold text-midnight">5.0</div>
                </div>
                <div className="text-[9px] lg:text-xs text-gray-500 uppercase tracking-widest font-semibold">Google Rate</div>
              </div>
              <div className="reveal-scale group cursor-default" style={{ transitionDelay: '0.8s' }}>
                <div className="flex items-center gap-1.5 lg:gap-2 mb-0.5">
                  <Award className="w-4 h-4 lg:w-5 lg:h-5 text-gold" />
                  <div className="text-xl lg:text-3xl font-bold text-midnight">MDRT</div>
                </div>
                <div className="text-[9px] lg:text-xs text-gray-500 uppercase tracking-widest font-semibold">2023 & 2024</div>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-8 reveal-right block">
            <div className="relative w-full aspect-4/5 max-w-xs lg:max-w-md mx-auto">
              {/* Abstract decorative frame */}
              <div className="absolute inset-0 rounded-3xl lg:rounded-4xl border-2 border-gold/20 rotate-3 scale-105 z-0" />
              <div className="absolute inset-0 rounded-3xl lg:rounded-4xl border border-midnight/5 -rotate-2 scale-105 z-0" />
              
              <div className="relative h-full w-full rounded-3xl lg:rounded-4xl overflow-hidden shadow-2xl z-10 group">
                 <img 
                  src={heroImage} 
                  alt="Jigisha Kiran Shah - Senior LIC Wealth Advisor Ahmedabad" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  fetchPriority="high"
                />
                
                <div className="absolute inset-0 bg-linear-to-t from-midnight/90 via-midnight/20 to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-gold/90 backdrop-blur-sm px-3 py-0.5 lg:px-4 lg:py-1 self-start inline-block rounded-md text-[10px] lg:text-xs font-bold text-midnight uppercase tracking-wider mb-2 lg:mb-3">
                    Senior Advisor
                  </div>
                  <div className="font-playfair text-xl lg:text-3xl font-bold mb-0.5 lg:mb-1">Jigisha Kiran Shah</div>
                  <p className="text-white/80 text-xs lg:text-sm font-medium">Expert Financial guidance for 2 decades</p>
                </div>
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -top-4 lg:-top-6 -right-4 lg:-right-6 bg-white/95 backdrop-blur-md p-4 lg:p-5 rounded-xl shadow-xl border border-white/40 max-w-[180px] lg:max-w-[200px] animate-float z-20 hidden md:block">
                <div className="flex gap-1 text-gold mb-1 lg:mb-2">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-[10px] lg:text-xs text-gray-700 font-medium leading-relaxed italic">
                  "She transformed how we think about our family's financial future."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
