import { useState } from 'react'
import { Phone, MessageCircle, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Contact Form Inquiry:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/919824025435?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 98240 25435',
      link: 'tel:+919824025435',
      cta: 'Call Now'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+91 98240 25435',
      link: 'https://wa.me/919824025435',
      cta: 'Chat Now'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'jigisha.licadvisor@gmail.com',
      link: 'mailto:jigisha.licadvisor@gmail.com',
      cta: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Office',
      value:'Orchid Legacy, D3-1303, Applewoods Twp Main Rd, Shela, Ahmedabad, Gujarat 380058',
      link: 'https://maps.google.com/?q=Orchid+Legacy+D3-1303+Applewoods+Twp+Main+Rd+Shela+Ahmedabad',
      cta: 'Get Directions'
    }
  ]

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      {/* Decorative Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl mix-blend-multiply pointer-events-none" />

      <div className="container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="reveal-left">
            <div className="inline-block px-3 py-1 bg-white border border-gold/20 text-gold text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6">Get In Touch</div>
            <h2 className="text-4xl md:text-5xl font-playfair font-medium text-midnight mb-6">
              Let's Discuss Your <span className="text-gold italic">Legacy</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
              Have questions about insurance plans? Want to know which policy is right for you? 
              Reach out and I'll be happy to help you make an informed decision.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-5">
              {contactMethods.map((method, index) => (
                <a 
                    key={index} 
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    className="flex flex-col p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gold/5 hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                    <method.icon size={18} />
                  </div>
                  <h4 className="font-bold text-midnight mb-1 group-hover:text-gold transition-colors">{method.title}</h4>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2 h-10">{method.value}</p>
                  <span className="text-xs font-bold text-gold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                    {method.cta} <span className="text-lg leading-none">→</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="reveal-right">
            <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 lg:p-10 border border-white/50 relative overflow-hidden backdrop-blur-sm">
               <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
               
              <h3 className="text-2xl font-playfair font-bold text-midnight mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Your Name *</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-gray-50 hover:bg-white text-midnight font-medium"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-gray-50 hover:bg-white text-midnight font-medium"
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="contact-phone" className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Phone Number *</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-gray-50 hover:bg-white text-midnight font-medium"
                    required
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="contact-message" className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Your Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your insurance requirements..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-gray-50 hover:bg-white text-midnight font-medium resize-y"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 bg-midnight text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-midnight-light transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden relative"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Send Message
                         <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                   <div className="absolute inset-0 bg-gold/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact
