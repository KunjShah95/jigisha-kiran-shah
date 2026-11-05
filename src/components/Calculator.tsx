import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react';
import { Field, SelectField, INCOME_OPTIONS, INTEREST_OPTIONS, inputClass, optionLabel, leadMessage, NextSteps } from './lead-fields';
import { whatsappUrl } from '../lib/contact';
import { trackEvent } from '../lib/analytics';

const Calculator = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    income: '',
    planType: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return;
    setIsSubmitting(true);
    // Short lead form — full message thread continues on WhatsApp
    const message = leadMessage('Free Consultation Request (website assessment form)', [
      ['Name', formData.name],
      ['Phone', formData.phone],
      ['Needs help with', optionLabel(INTEREST_OPTIONS, formData.planType)],
      ['Age', formData.age],
      ['Annual Income', optionLabel(INCOME_OPTIONS, formData.income)],
    ])
    trackEvent('consultation_form_submit', { form: 'assessment', objective: formData.planType || 'none' })
    window.open(whatsappUrl(message), '_blank')
    setTimeout(() => setIsSubmitting(false), 1500);
  }

  const benefits = [
    'Bespoke Portfolio Analysis',
    'Zero-Fee First Consultation',
    'Claim Settlement Concierge',
    'Doorstep Premium Service',
    'Lifetime Advisory Support'
  ]

  return (
    <section className="py-12 lg:py-20 bg-midnight-light relative overflow-hidden">
      {/* Background Pattern */}
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'url("/noise.svg")' }} />
      <div aria-hidden="true" className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl animate-pulse pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-dark/20 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4" />
      
      <div className="container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          
          <div className="reveal-left text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium mb-3 lg:mb-6">
              Calculate Your Family's <span className="text-gold italic">Security Gap</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-5 lg:mb-10 leading-relaxed font-light">
              A real cover number accounts for your dependants, loans, existing policies, and future goals like education or retirement — not just a multiple of income. Tell us your goal and we'll work it out with you.
            </p>
            
            <Link
              to="/protection-check"
              data-cta="assessment-protection-check"
              className="inline-flex items-center gap-2 mb-5 lg:mb-10 px-5 py-3 rounded-xl border border-gold/40 text-gold font-bold text-sm hover:bg-gold hover:text-midnight transition-colors min-h-11"
            >
              Want a number first? Run the free Protection Check
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <div className="grid grid-cols-2 gap-x-3 gap-y-2.5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2.5 group">
                  <div className="w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20 group-hover:bg-gold group-hover:text-midnight transition-all duration-300">
                    <Check size={13} className="text-gold group-hover:text-midnight" aria-hidden="true" />
                  </div>
                  <span className="text-gray-200 font-medium text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <Link
              to="/calculators"
              data-cta="assessment-calculators"
              className="mt-5 lg:mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-300 hover:text-gold transition-colors min-h-11"
            >
              Planning retirement or a child&rsquo;s education? Size the goal with the free calculators
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          
          <div className="reveal-right">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 lg:p-8 shadow-2xl relative overflow-hidden ring-1 ring-white/20">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold to-gold-light" />
              
              <h3 className="text-xl sm:text-2xl font-display font-bold text-midnight mb-1.5">Request Assessment</h3>
              <p className="text-gray-500 text-sm mb-5">Free, no obligation. Start with your goal — details can wait for the call.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4 relative">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
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
                      pattern="[0-9+\(\)\- ]{10,18}"
                      title="Enter a valid phone number"
                      className={inputClass}
                      required
                    />
                  </Field>
                </div>

                <Field id="calc-plan" label="What do you need help with?" required>
                  <SelectField
                    id="calc-plan"
                    name="planType"
                    value={formData.planType}
                    onChange={handleChange}
                    placeholder="Choose your main goal"
                    options={INTEREST_OPTIONS}
                    required
                  />
                </Field>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <Field id="calc-age" label="Age">
                    <input
                      type="number"
                      inputMode="numeric"
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
                      placeholder="Prefer not to say"
                      options={INCOME_OPTIONS}
                    />
                  </Field>
                </div>
                
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="w-full py-4 bg-midnight text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-gold hover:text-white active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden min-h-11"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? 'Opening WhatsApp…' : 'Book Free Consultation'}
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </span>
                    <div aria-hidden="true" className="absolute inset-0 bg-gold/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </button>
                <p aria-live="polite" className="text-xs text-gray-500 min-h-4">
                  {isSubmitting ? 'Opening WhatsApp — press send there to complete.' : 'Saved for a call back, then opens WhatsApp. No spam, no sharing.'}
                </p>
                <div className="pt-2 border-t border-border">
                  <NextSteps />
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Calculator
