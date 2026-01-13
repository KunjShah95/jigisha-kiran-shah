import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Mehta',
    role: 'Retired Banker, Ahmedabad',
    initials: 'RM',
    text: 'Jigisha Ben provided perfect guidance and complete explanation regarding my retirement planning. Her expertise in LIC pension plans and 22+ years of experience helped me secure a comfortable post-retirement life. Truly exceptional service!',
    rating: 5,
    tag: 'Retirement Planning'
  },
  {
    name: 'Neha Desai',
    role: 'Business Professional, Shela',
    initials: 'ND',
    text: "Her professionalism and genuine advice set her apart from other advisors. She took time to understand my family's needs and suggested the perfect insurance policies. As a Double MDRT achiever, her expertise is unmatched. Highly recommend her services!",
    rating: 5,
    tag: 'Life Insurance'
  },
  {
    name: 'Dr. Vikram Shah',
    role: 'Medical Practitioner, Gujarat',
    initials: 'VS',
    text: 'I was looking for salary insurance and pension planning options. Jigisha Ben explained all LIC plans in detail and helped me choose the right combination. Her office at Orchid Legacy, Applewoods is convenient, and her 22+ years of experience really shows in her advice.',
    rating: 5,
    tag: 'Pension & Salary Insurance'
  }
]

const Testimonials = () => {
  return (
    <section className="py-32 bg-midnight text-white relative overflow-hidden" id="testimonials">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none translate-y-1/4 -translate-x-1/4" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-soft-light" />
      
      <div className="container relative z-10 w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6 max-w-fit">Client Stories</div>
            <h2 className="text-4xl md:text-5xl font-playfair font-medium text-white mb-6">
              Relationships Built on <span className="text-gold italic">Trust</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl font-light">
              For over two decades, we have been the silent guardians of thousands of families, ensuring their promises are kept.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-midnight hover:border-gold transition-all duration-300 group">
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-midnight hover:border-gold transition-all duration-300 group">
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 reveal">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl relative hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500 overflow-hidden"
              style={{ transitionDelay: `${index * 150}ms` }}
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
                
                <p className="text-gray-300 leading-relaxed mb-8 italic font-light h-32 overflow-hidden">
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
