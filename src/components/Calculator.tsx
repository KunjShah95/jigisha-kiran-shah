import { useState } from 'react'
import { Check, ArrowRight, Calculator as CalcIcon } from 'lucide-react';
import { Field, SelectField, INCOME_OPTIONS, INTEREST_OPTIONS, inputClass } from './lead-fields';

const Calculator = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    income: '',
    planType: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Short lead form — full message thread continues on WhatsApp
    const message = `Free Consultation Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nAge: ${formData.age}\nAnnual Income: ${formData.income}\nPlan Type: ${formData.planType}`
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
    <section className="py-16 lg:py-24 bg-midnight-light relative overflow-hidden">
      {/* Background Pattern */}
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'url("/noise.svg")' }} />
      <div aria-hidden="true" className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl animate-pulse pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-dark/20 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4" />
      
      <div className="container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <div className="reveal-left text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-gold/20 mb-4 lg:mb-6">
                <CalcIcon className="w-4 h-4 text-gold" aria-hidden="true" />
                <span className="text-gold font-bold tracking-[0.2em] uppercase text-[11px]">Free Consultation</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4 lg:mb-6">
              Calculate Your Family's <span className="text-gold italic">Security Gap</span>
            </h2>
            <p className="text-base lg:text-lg text-gray-300 mb-8 lg:mb-10 leading-relaxed font-light">
              Understand the true coverage your family needs to maintain their lifestyle in your absence. Fill out the form for a personalized legacy assessment.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20 group-hover:bg-gold group-hover:text-midnight transition-all duration-300">
                    <Check size={14} className="text-gold group-hover:text-midnight" aria-hidden="true" />
                  </div>
                  <span className="text-gray-200 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal-right">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-2xl relative overflow-hidden ring-1 ring-white/20">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold to-gold-light" />
              
              <h3 className="text-2xl font-display font-bold text-midnight mb-2">Request Assessment</h3>
              <p className="text-gray-500 text-sm mb-8">Get a customized report within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Field id="calc-name" label="Full Name" required>
                    <input
                      type="text"
                      id="calc-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      autoComplete="name"
                      className={inputClass}
                      required
                    />
                  </Field>
                  <Field id="calc-phone" label="Phone Number" required>
                    <input
                      type="tel"
                      id="calc-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                      className={inputClass}
                      required
                    />
                  </Field>
                </div>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <Field id="calc-age" label="Age">
                    <input
                      type="number"
                      id="calc-age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="e.g., 35"
                      className={inputClass}
                      min="18"
                      max="75"
                    />
                  </Field>
                  <Field id="calc-income" label="Annual Income">
                    <SelectField
                      id="calc-income"
                      name="income"
                      value={formData.income}
                      onChange={handleChange}
                      placeholder="Select Range"
                      options={INCOME_OPTIONS}
                    />
                  </Field>
                </div>
                
                <Field id="calc-plan" label="Interested In">
                  <SelectField
                    id="calc-plan"
                    name="planType"
                    value={formData.planType}
                    onChange={handleChange}
                    placeholder="Select Interest"
                    options={INTEREST_OPTIONS}
                  />
                </Field>
                
                <button 
                  type="submit" 
                  className="w-full py-4 bg-midnight text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-gold hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden min-h-11"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Book Free Consultation
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </span>
                    <div aria-hidden="true" className="absolute inset-0 bg-gold/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
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
