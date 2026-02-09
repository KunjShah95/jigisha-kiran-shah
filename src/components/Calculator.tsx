import { useState } from 'react'
import { Check, ArrowRight, Calculator as CalcIcon } from 'lucide-react';

const Calculator = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    income: '',
    planType: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - integrate with WhatsApp or email
    const message = `High-End Consultancy Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nAge: ${formData.age}\nAnnual Income: ${formData.income}\nPlan Type: ${formData.planType}\nMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/919824025435?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const benefits = [
    'Bespoke Portfolio Analysis',
    'Zero-Fee First Consultation',
    'Claim Settlement Concierge',
    'Doorstep Premium Service',
    'Lifetime Advisory Support'
  ]

  return (
    <section className="py-16 lg:py-24 bg-midnight-light relative overflow-hidden" id="calculator">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl animate-pulse pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2a1f1a]/40 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4" />
      
      <div className="container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="reveal-left text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-gold/20 mb-4 lg:mb-6">
                <CalcIcon className="w-4 h-4 text-gold" />
                <span className="text-gold font-bold tracking-[0.2em] uppercase text-[10px]">Legacy Estimator</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-playfair font-medium mb-4 lg:mb-6">
              Calculate Your Family's <span className="text-gold italic">Security Gap</span>
            </h2>
            <p className="text-base lg:text-lg text-gray-300 mb-8 lg:mb-10 leading-relaxed font-light">
              Understand the true coverage your family needs to maintain their lifestyle in your absence. Fill out the form for a personalized legacy assessment.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20 group-hover:bg-gold group-hover:text-midnight transition-all duration-300">
                    <Check size={14} className="text-gold group-hover:text-midnight" />
                  </div>
                  <span className="text-gray-200 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal-right">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden ring-1 ring-white/20">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold to-gold-light" />
              
              <h3 className="text-2xl font-playfair font-bold text-midnight mb-2">Request Assessment</h3>
              <p className="text-gray-500 text-sm mb-8">Get a customized report within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label htmlFor="calc-name" className="text-xs font-bold text-gray-500 uppercase tracking-wider мл-1">Full Name</label>
                    <input
                      type="text"
                      id="calc-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-gray-50 hover:bg-white text-midnight font-medium"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="calc-phone" className="text-xs font-bold text-gray-500 uppercase tracking-wider мл-1">Phone Number</label>
                    <input
                      type="tel"
                      id="calc-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-gray-50 hover:bg-white text-midnight font-medium"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label htmlFor="calc-age" className="text-xs font-bold text-gray-500 uppercase tracking-wider мл-1">Age</label>
                    <input
                      type="number"
                      id="calc-age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="e.g., 35"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-gray-50 hover:bg-white text-midnight font-medium"
                      min="18"
                      max="75"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="calc-income" className="text-xs font-bold text-gray-500 uppercase tracking-wider мл-1">Annual Income</label>
                    <select
                      id="calc-income"
                      name="income"
                      value={formData.income}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-gray-50 hover:bg-white text-midnight font-medium appearance-none"
                    >
                      <option value="">Select Range</option>
                      <option value="below-10l">Below ₹10 Lakhs</option>
                      <option value="10l-25l">₹10 - 25 Lakhs</option>
                      <option value="25l-50l">₹25 - 50 Lakhs</option>
                      <option value="above-50l">Above ₹50 Lakhs</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="calc-plan" className="text-xs font-bold text-gray-500 uppercase tracking-wider мл-1">Interested In</label>
                  <select
                    id="calc-plan"
                    name="planType"
                    value={formData.planType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-gray-50 hover:bg-white text-midnight font-medium appearance-none"
                  >
                    <option value="">Select Interest</option>
                    <option value="term">Term Life Protection</option>
                    <option value="wealth">Wealth Creation</option>
                    <option value="child">Child Education</option>
                    <option value="retirement">Retirement Planning</option>
                    <option value="nri">NRI Services</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 bg-midnight text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-midnight-light transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Get Free Analysis
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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

export default Calculator
