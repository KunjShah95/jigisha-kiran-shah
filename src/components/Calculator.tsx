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
    'Free first consultation',
    'Plain-English plan comparisons',
    'Help with claim paperwork',
    'Policy servicing after you buy',
    'One advisor, direct on WhatsApp',
  ]

  return (
    <section className="py-14 lg:py-24 bg-white border-t border-border">
      <div className="container w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          <div className="reveal-left">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] leading-[1.05] mb-4">
              Find your family&rsquo;s <span className="text-emerald">security gap.</span>
            </h2>
            <p className="text-sm sm:text-base text-ink/60 mb-6 leading-relaxed max-w-lg">
              A real cover number accounts for your dependants, loans, existing policies and future goals — not just a multiple of income. Tell us your goal and we'll work it out with you.
            </p>

            <Link
              to="/protection-check"
              data-cta="assessment-protection-check"
              className="inline-flex items-center gap-2 mb-7 px-5 py-3 rounded-full border border-emerald/40 text-emerald-deep font-bold text-sm hover:bg-emerald hover:text-white transition-colors min-h-11"
            >
              Want a number first? Run the free Protection Check
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-sage flex items-center justify-center shrink-0">
                    <Check size={12} className="text-emerald-deep" aria-hidden="true" />
                  </span>
                  <span className="text-ink/75 font-medium text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <Link
              to="/calculators"
              data-cta="assessment-calculators"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-deep hover:text-emerald transition-colors min-h-11"
            >
              Planning retirement or a child&rsquo;s education? Size the goal with the free calculators
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="reveal-right">
            <div className="bg-paper rounded-2xl p-5 sm:p-6 lg:p-8 border border-border">
              <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-ink mb-1.5">Request a free assessment</h3>
              <p className="text-ink/55 text-sm mb-5">No obligation. Start with your goal — details can wait for the call.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full py-4 bg-ink text-white font-bold rounded-full hover:bg-emerald-deep active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none transition-all duration-300 flex items-center justify-center gap-2 group min-h-11"
                >
                  {isSubmitting ? 'Opening WhatsApp…' : 'Book Free Consultation'}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
                <p aria-live="polite" className="text-xs text-ink/55 min-h-4">
                  {isSubmitting ? 'Opening WhatsApp — press send there to complete.' : 'Opens WhatsApp with your details prefilled. No spam, no sharing.'}
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