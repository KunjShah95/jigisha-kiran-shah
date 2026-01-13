import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero relative overflow-hidden min-h-screen flex items-center bg-gray-50" id="home">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-white z-0" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      </div>

      <div className="container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 hero__content reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-sm font-semibold text-gray-800 tracking-wide uppercase">Double MDRT (USA) Achiever</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-playfair font-medium text-midnight leading-[1.1] mb-8">
              Protecting Wealth. <br />
              <span className="text-gold italic relative">
                Securing Legacies.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-gold/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              With over <strong>22 years</strong> of dedicated experience in Ahmedabad, I specialize in <strong>retirement planning, pension solutions,</strong> and comprehensive life insurance strategies for families and business owners seeking financial security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-midnight text-white font-semibold rounded-lg hover:bg-gold transition-colors duration-300 gap-2 group btn-beam"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-200 text-midnight font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                Explore Services
              </a>
            </div>

            <div className="grid grid-cols-4 gap-6 py-8 border-t border-gray-200 w-full">
              <div className="reveal-scale" style={{ transitionDelay: '0.2s' }}>
                <div className="text-3xl lg:text-4xl font-bold text-midnight mb-1">22+</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Years Experience</div>
              </div>
              <div className="reveal-scale" style={{ transitionDelay: '0.4s' }}>
                <div className="text-3xl lg:text-4xl font-bold text-midnight mb-1">2.7k+</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Families Secured</div>
              </div>
              <div className="reveal-scale" style={{ transitionDelay: '0.6s' }}>
                <div className="text-3xl lg:text-4xl font-bold text-gold mb-1 flex items-center gap-1">5.0 <Star className="w-5 h-5 fill-gold" /></div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Google Rating</div>
              </div>
              <div className="reveal-scale" style={{ transitionDelay: '0.8s' }}>
                <div className="text-3xl lg:text-4xl font-bold text-midnight mb-1">83+</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Client Reviews</div>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 reveal-right">
            <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
                alt="Jigisha Kiran Shah - Senior Wealth Advisor" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-midnight/80 to-transparent opacity-60" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="font-playfair text-2xl mb-2">Jigisha Kiran Shah</div>
                <p className="text-white/80 text-sm uppercase tracking-widest">Senior LIC Advisor</p>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-gold max-w-[240px] animate-float hidden md:block">
              <div className="flex gap-1 text-gold mb-2">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                "Jigisha ben's expert guidance on pension planning has secured our retirement beautifully."
              </p>
              <div className="mt-3 text-xs font-bold text-midnight uppercase tracking-wide">
                — Rajesh Patel, Ahmedabad
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
