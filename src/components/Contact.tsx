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
      link: 'tel:+919824025435'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+91 98240 25435',
      link: 'https://wa.me/919824025435'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'jigisha.licadvisor@gmail.com',
      link: 'mailto:jigisha.licadvisor@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Office',
      value:' Orchid Legacy, D3-1303, Applewoods Twp Main Rd, Shela, Ahmedabad, Gujarat 380058',
      link: 'https://maps.google.com/?q=Orchid+Legacy+D3-1303+Applewoods+Twp+Main+Rd+Shela+Ahmedabad'
    }
  ]

  return (
    <section className="py-24 bg-gray-50 relative" id="contact">
      <div className="absolute inset-0 opacity-100" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      <div className="container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="reveal-left">
            <div className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Get In Touch</div>
            <h2 className="text-4xl md:text-5xl font-playfair font-medium text-midnight mb-6">
              Let's Discuss Your <span className="italic">Legacy</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Have questions about insurance plans? Want to know which policy is right for you? 
              Reach out and I'll be happy to help you make an informed decision.
            </p>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-midnight shrink-0">
                    <method.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-midnight mb-1">{method.title}</h4>
                    <a 
                      href={method.link} 
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      className="text-gray-600 hover:text-gold transition-colors"
                    >
                      {method.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal-right">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
              <h3 className="text-2xl font-playfair font-bold text-midnight mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-gray-50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-gray-50"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-gray-50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your insurance requirements..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-gray-50 resize-y"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 bg-midnight text-white font-bold rounded-xl shadow-lg hover:bg-gold transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
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
