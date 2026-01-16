import { ArrowRight, Star, Shield, Award, Users } from 'lucide-react';
import heroImage from '../assets/images/hero-image.jpeg';

const Hero = () => {
  return (
    <section className="hero relative overflow-hidden min-h-screen lg:min-h-[95vh] flex items-center bg-slate-50" id="home">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-blue-50/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-linear-to-tr from-amber-50/30 to-transparent" />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-gold-light/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="container relative z-10 w-full pt-28 lg:pt-20 pb-16 lg:pb-0">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 hero__content reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-2.5 rounded-full bg-white border border-gold/30 shadow-md mb-6 lg:mb-8 hover:shadow-lg transition-shadow duration-300">
              <Award className="w-4 h-4 lg:w-5 lg:h-5 text-gold fill-gold" />
              <span className="text-xs lg:text-sm font-bold text-midnight tracking-wide uppercase">Double MDRT (USA) Achiever</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-midnight leading-[1.1] mb-6 lg:mb-8 tracking-tight">
              Safeguarding Your <br />
              <span className="text-gradient-gold italic relative inline-block">
                Wealth & Legacy
                <svg className="absolute w-full h-2 lg:h-3 -bottom-1 lg:-bottom-2 left-0 text-gold/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-base lg:text-xl text-gray-600 mb-8 lg:mb-10 max-w-xl leading-relaxed font-light">
              Trusted by <strong className="text-midnight">2,700+ families</strong> for comprehensive retirement planning and life insurance strategies. Experience the peace of mind that comes with expert guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 mb-12 lg:mb-16">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-midnight text-white font-semibold rounded-xl hover:bg-midnight-light transition-all duration-300 gap-2 group btn-beam shadow-lg hover:shadow-xl hover:-translate-y-1">
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-200 text-midnight font-semibold rounded-xl hover:bg-gray-50 hover:border-gold/50 transition-all duration-300 shadow-sm hover:shadow-md">
                Explore Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 py-8 border-t border-gray-200/60 w-full">
              <div className="reveal-scale group cursor-default" style={{ transitionDelay: '0.2s' }}>
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-5 h-5 text-gold" />
                  <div className="text-2xl lg:text-3xl font-bold text-midnight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-midnight group-hover:to-blue-600 transition-all">22+</div>
                </div>
                <div className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-widest font-semibold">Years Exp.</div>
              </div>
              <div className="reveal-scale group cursor-default" style={{ transitionDelay: '0.4s' }}>
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-5 h-5 text-gold" />
                  <div className="text-2xl lg:text-3xl font-bold text-midnight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-midnight group-hover:to-blue-600 transition-all">2.7k+</div>
                </div>
                <div className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-widest font-semibold">Families</div>
              </div>
               <div className="reveal-scale group cursor-default" style={{ transitionDelay: '0.6s' }}>
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <div className="text-2xl lg:text-3xl font-bold text-midnight">5.0</div>
                </div>
                <div className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-widest font-semibold">Google Rate</div>
              </div>
              <div className="reveal-scale group cursor-default" style={{ transitionDelay: '0.8s' }}>
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-5 h-5 text-gold" />
                  <div className="text-2xl lg:text-3xl font-bold text-midnight">Double</div>
                </div>
                <div className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-widest font-semibold">MDRT USA</div>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 reveal-right block">
            <div className="relative w-full aspect-4/5 max-w-sm lg:max-w-md mx-auto">
              {/* Abstract decorative frame */}
              <div className="absolute inset-0 rounded-4xl border-2 border-gold/20 rotate-3 scale-105 z-0" />
              <div className="absolute inset-0 rounded-4xl border border-midnight/5 -rotate-2 scale-105 z-0" />
              
              <div className="relative h-full w-full rounded-4xl overflow-hidden shadow-2xl z-10 group">
                 <img 
                  src={heroImage} 
                  alt="Jigisha Kiran Shah - Senior Wealth Advisor" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-linear-to-t from-midnight/90 via-midnight/20 to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-gold/90 backdrop-blur-sm px-4 py-1 self-start inline-block rounded-md text-xs font-bold text-midnight uppercase tracking-wider mb-3">
                    Senior Advisor
                  </div>
                  <div className="font-playfair text-2xl lg:text-3xl font-bold mb-1">Jigisha Kiran Shah</div>
                  <p className="text-white/80 text-sm font-medium tracking-wide">Expert Financial guidance for 2 decades</p>
                </div>
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-xl border border-white/40 max-w-[200px] animate-float z-20 hidden md:block">
                <div className="flex gap-1 text-gold mb-2">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-xs text-gray-700 font-medium leading-relaxed italic">
                  "The best investment decision we ever made for our family."
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
