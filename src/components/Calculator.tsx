import { useState } from 'react'
import { Check, ArrowRight } from 'lucide-react';

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
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const benefits = [
    'Bespoke Portfolio Analysis',
    'Zero-Fee Consultation',
    'Claim Settlement Concierge',
    'Doorstep Premium Service',
    'Lifetime Advisory Support'
  ]

  return (
    <section className="py-24 bg-midnight relative overflow-hidden" id="calculator">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      
      <div className="container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="reveal-left text-white">
            <div className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Legacy Estimator</div>
            <h2 className="text-4xl md:text-5xl font-playfair font-medium mb-6">
              Calculate Your Family's <span className="text-gold italic">Security Gap</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Understand the true coverage your family needs to maintain their lifestyle in your absence. Fill out the form for a personalized legacy assessment.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-gold" />
                  </div>
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal-right">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
              
              <h3 className="text-2xl font-playfair font-bold text-midnight mb-8">Request Assessment</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="calc-name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="calc-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-gray-50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="calc-phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="calc-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-gray-50"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="calc-age" className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                    <input
                      type="number"
                      id="calc-age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="e.g., 35"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-gray-50"
                      min="18"
                      max="75"
                    />
                  </div>
                  <div>
                    <label htmlFor="calc-income" className="block text-sm font-medium text-gray-700 mb-2">Annual Income</label>
                    <select
                      id="calc-income"
                      name="income"
                      value={formData.income}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-gray-50 appearance-none"
                    >
                      <option value="">Select Range</option>
                      <option value="below-10l">Below ₹10 Lakhs</option>
                      <option value="10l-25l">₹10 - 25 Lakhs</option>
                      <option value="25l-50l">₹25 - 50 Lakhs</option>
                      <option value="above-50l">Above ₹50 Lakhs</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="calc-plan" className="block text-sm font-medium text-gray-700 mb-2">Interested In</label>
                  <select
                    id="calc-plan"
                    name="planType"
                    value={formData.planType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-gray-50 appearance-none"
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
                  className="w-full py-4 bg-gold text-white font-bold rounded-xl shadow-lg hover:bg-yellow-600 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Request Analysis
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
