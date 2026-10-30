import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Phone, MessageCircle, Mail, MapPin, Send, ChevronDown, Download } from 'lucide-react';
import { Field, SelectField, INCOME_OPTIONS, INTEREST_OPTIONS, inputClass, optionLabel, leadMessage, NextSteps } from './lead-fields';
import { whatsappUrl } from '../lib/contact';
import { submitLead, honeypotProps } from '../lib/leads';
import { trackEvent } from '../lib/analytics';
import { useSpotlight } from '../hooks/useSpotlight';

const SUBJECT_OPTIONS = [...INTEREST_OPTIONS, { value: 'other', label: 'Something else' }];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    email: '',
    phone: '',
    age: '',
    income: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [searchParams] = useSearchParams();
  const onMove = useSpotlight();

  // Objective picker links here as /contact?objective=review — preselect it.
  // Applied after hydration so the prerendered markup still matches.
  useEffect(() => {
    const objective = searchParams.get('objective');
    if (objective && SUBJECT_OPTIONS.some((o) => o.value === objective)) {
      setFormData((f) => ({ ...f, subject: objective }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return;
    setIsSubmitting(true);
    const message = leadMessage('New Inquiry (website contact form)', [
      ['Name', formData.name],
      ['Phone', formData.phone],
      ['Needs help with', optionLabel(SUBJECT_OPTIONS, formData.subject)],
      ['Email', formData.email],
      ['Age', formData.age],
      ['Income', optionLabel(INCOME_OPTIONS, formData.income)],
      ['Message', formData.message],
    ])
    trackEvent('consultation_form_submit', { form: 'contact', objective: formData.subject || 'none' })
    submitLead({
      kind: 'contact',
      name: formData.name,
      phone: formData.phone,
      objective: formData.subject,
      details: { Email: formData.email, Age: formData.age, Income: optionLabel(INCOME_OPTIONS, formData.income), Message: formData.message },
      website: formData.website,
    }).then((ok) => ok && trackEvent('lead_saved', { form: 'contact' }))
    window.open(whatsappUrl(message), '_blank')
    setSent(true);
    setTimeout(() => setIsSubmitting(false), 1500);
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
      link: whatsappUrl("Hi Jigisha ben, I found you on your website. I'd like to book a free consultation."),
      cta: 'Chat Now'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'jkshahlic@gmail.com',
      link: 'mailto:jkshahlic@gmail.com',
      cta: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Office',
      value:'Orchid Legacy, D3-1303, Applewoods Township, Shela, Ahmedabad, Gujarat 380058',
      link: 'https://share.google/VQAFgVhdk114U2ozd',
      cta: 'Get Directions'
    },
    {
      icon: Download,
      title: 'Save Contact',
      value: 'Add Jigisha to your phone contacts',
      link: '/jigisha-kiran-shah.vcf',
      cta: 'Download vCard'
    }
  ]

  return (
    <section className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-cream relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'url("/noise.svg")' }} />
      {/* Decorative Orbs */}
      <div aria-hidden="true" className="absolute top-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl mix-blend-multiply pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-20 right-10 w-96 h-96 bg-gold-light/60 rounded-full blur-3xl mix-blend-multiply pointer-events-none" />

      <div className="container relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          <div className="reveal-left">
            <div className="inline-block px-3 py-1 bg-white border border-gold/20 text-gold-dark text-[11px] font-bold tracking-[0.2em] uppercase rounded-full mb-4 lg:mb-6">Get In Touch</div>
            <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-4 lg:mb-6">
              Contact Your <span className="text-gold italic">LIC Advisor</span> in Ahmedabad
            </h1>
            <p className="text-base lg:text-lg text-gray-600 mb-8 lg:mb-10 leading-relaxed font-light">
              Have questions about insurance plans? Want to know which policy is right for you? 
              Reach out and I'll be happy to help you make an informed decision.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {contactMethods.map((method, index) => (
                <a
                    key={index}
                    href={method.link}
                    download={method.link.endsWith('.vcf') ? 'jigisha-kiran-shah.vcf' : undefined}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onMouseMove={onMove}
                    className="spotlight-card relative overflow-hidden flex flex-col p-6 bg-white rounded-2xl shadow-sm border border-border hover:shadow-xl hover:shadow-gold/5 hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="relative z-10 flex flex-col grow">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold-dark mb-4 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                      <method.icon size={18} aria-hidden="true" />
                    </div>
                    <h2 className="text-base font-bold text-midnight mb-1 group-hover:text-gold-dark transition-colors">{method.title}</h2>
                    <p className="text-sm text-gray-500 mb-4 leading-relaxed break-words">{method.value}</p>
                    <span className="text-[11px] font-bold text-gold-dark uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                      {method.cta} <span aria-hidden="true" className="text-lg leading-none">→</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="reveal-right">
            <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-6 lg:p-8 border border-white/50 relative overflow-hidden backdrop-blur-sm">
               <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
               
              <h2 className="text-2xl font-display font-bold text-midnight mb-2">Book a Free Consultation</h2>
              <p className="text-sm text-gray-500 mb-6">
                Three quick fields. Everything else is optional.{' '}
                <Link to="/book" data-cta="contact-book" className="font-semibold text-gold-dark underline underline-offset-2 hover:text-gold">
                  Prefer to pick a time? Book a call
                </Link>
              </p>
              <form onSubmit={handleSubmit} className="space-y-5 relative">
                <input {...honeypotProps} value={formData.website} onChange={handleChange} />
                <div className="grid md:grid-cols-2 gap-5">
                  <Field id="contact-name" label="Your Name" required>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      autoComplete="name"
                      className={inputClass}
                      required
                    />
                  </Field>
                  <Field id="contact-phone" label="Phone Number" required>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="[0-9+\(\)\- ]{10,18}"
                      title="Enter a valid phone number"
                      className={inputClass}
                      required
                    />
                  </Field>
                </div>

                <Field id="contact-subject" label="What do you need help with?" required>
                  <SelectField
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Choose your main goal"
                    options={SUBJECT_OPTIONS}
                    required
                  />
                </Field>

                <details className="group rounded-xl border border-border bg-gray-50/60 open:bg-white">
                  <summary className="flex items-center justify-between gap-2 cursor-pointer list-none px-4 py-3 text-sm font-semibold text-midnight min-h-11">
                    Add more details (optional)
                    <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" aria-hidden="true" />
                  </summary>
                  <div className="px-4 pb-4 space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <Field id="contact-email" label="Email Address">
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          autoComplete="email"
                          className={inputClass}
                        />
                      </Field>
                      <Field id="contact-age" label="Age">
                        <input
                          type="number"
                          inputMode="numeric"
                          id="contact-age"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          placeholder="e.g., 35"
                          className={inputClass}
                          min="18"
                          max="85"
                        />
                      </Field>
                    </div>
                    <Field id="contact-income" label="Annual Income">
                      <SelectField
                        id="contact-income"
                        name="income"
                        value={formData.income}
                        onChange={handleChange}
                        placeholder="Prefer not to say"
                        options={INCOME_OPTIONS}
                      />
                    </Field>
                    <Field id="contact-message" label="Anything else?">
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="e.g. I have 3 old LIC policies and want to know if my cover is enough"
                        rows={3}
                        className={`${inputClass} resize-y`}
                      ></textarea>
                    </Field>
                  </div>
                </details>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="w-full py-4 bg-midnight text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-gold hover:text-white active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden relative min-h-11"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        {sent ? 'Opening WhatsApp…' : 'Send via WhatsApp'}
                         <Send size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </span>
                   <div aria-hidden="true" className="absolute inset-0 bg-gold/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </button>
                {sent && (
                  <p role="status" className="text-sm text-gold-dark font-semibold">
                    Got it — your details are saved and Jigisha will call back. For a faster reply, press send in WhatsApp, or call +91 98240 25435.
                  </p>
                )}
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

export default Contact
