import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Dr. Jayesh Gajjar',
    role: 'ENT Specialist, Ahmedabad',
    initials: 'JG',
    text: 'Jigisha Ben provided perfect guidance and complete explanation regarding my retirement planning. Her expertise in LIC pension plans and 22+ years of experience helped me secure a comfortable post-retirement life. Truly exceptional service!',
    rating: 5,
    tag: 'Endowment Plans'
  },
  {
    name: 'Umesh Panchal',
    role: 'Business Man, Ahmedabad',
    initials: 'UP',
    text: "Her professionalism and genuine advice set her apart from other advisors. She took time to understand my family's needs and suggested the perfect insurance policies. As a 2 Times MDRT achiever, her expertise is unmatched. Highly recommend her services!",
    rating: 5,
    tag: 'Life Insurance'
  },
  {
    name: 'Sapan Shah',
    role: 'Business Owner, Ahmedabad',
    initials: 'SS',
    text: 'I was looking for salary insurance and pension planning options. Jigisha Ben explained all LIC plans in detail and helped me choose the right combination. Her office at Orchid Legacy, D3-1303, Applewoods is convenient, and her 22+ years of experience really shows in her advice.',
    rating: 5,
    tag: 'Term Life Insurance and Income Protection'
  },
  {
    name: 'Darshan Patel',
    role: 'Business Owner, Ahmedabad',
    initials: 'DP',
    text: 'I was looking for securing my child education. Jigisha Ben explained all LIC plans in detail and helped me choose the right combination. Her office at Orchid Legacy, D3-1303, Applewoods is convenient, and her 22+ years of experience really shows in her advice.',
    rating: 5,
    tag: 'Education Plans'
  }
]

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonials.length;
  const visibleCount = 3;

  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % total);

  // Build the visible slice (wraps around)
  const visibleTestimonials = Array.from({ length: visibleCount }, (_, i) => testimonials[(activeIndex + i) % total]);

  return (
    <section className="pt-28 lg:pt-32 pb-12 lg:pb-20 bg-midnight text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2a1f1a]/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none translate-y-1/4 -translate-x-1/4" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 mix-blend-soft-light" />
      
      <div className="container relative z-10 w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 lg:mb-12 gap-8 reveal">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-4 lg:mb-6 max-w-fit">Client Stories</div>
            <h2 className="text-3xl md:text-5xl font-playfair font-medium text-white mb-4 lg:mb-6">
              Relationships Built on <span className="text-gold italic">Trust</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl font-light">
              For over two decades, we have been the silent guardians of thousands of families, ensuring their promises are kept.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'w-6 bg-gold'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handlePrev}
              aria-label="Previous testimonials"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-midnight hover:border-gold transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonials"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-midnight hover:border-gold transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 reveal">
          {visibleTestimonials.map((testimonial, index) => (
            <div 
              key={`${activeIndex}-${index}`}
              className="group bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl relative hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500 overflow-hidden animate-fade-in"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
               {/* Hover Gradient */}
               <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <Quote className="absolute top-8 right-8 text-gold/20 w-12 h-12 transform group-hover:scale-110 group-hover:text-gold/30 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                </div>
                
                <div className="inline-block px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-gold uppercase tracking-wider mb-6 border border-white/5">
                    {testimonial.tag}
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 italic font-light text-sm line-clamp-5">
                    "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-gold to-gold-dark flex items-center justify-center text-midnight font-bold text-lg shadow-lg">
                    {testimonial.initials}
                    </div>
                    <div>
                    <h4 className="font-playfair text-lg text-white group-hover:text-gold transition-colors">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{testimonial.role}</p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
