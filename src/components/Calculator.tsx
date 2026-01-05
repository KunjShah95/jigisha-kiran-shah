import { useState } from 'react'

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
    const message = `New Quote Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nAge: ${formData.age}\nAnnual Income: ${formData.income}\nPlan Type: ${formData.planType}\nMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const benefits = [
    'Free policy comparison and analysis',
    'No hidden charges or fees',
    'Expert guidance on claim process',
    'Doorstep document collection',
    'Lifetime support and assistance'
  ]

  return (
    <section className="calculator">
      <div className="section-number">06 — ESTIMATE</div>
      <div className="calculator__pattern"></div>
      <div className="container calculator__inner">
        <div 
          className="calculator__content reveal"
        >
          <div className="calculator__label">Get Started</div>
          <h2 className="calculator__title">Get Your Free Insurance Quote Today</h2>
          <p className="calculator__description">
            Fill out the form and I'll personally reach out to you with the best insurance options tailored to your needs. No obligations, just honest advice.
          </p>
          
          <div className="calculator__benefits">
            {benefits.map((benefit, index) => (
              <div key={index} className="calculator__benefit">
                <span className="calculator__benefit-icon">✓</span>
                {benefit}
              </div>
            ))}
          </div>
        </div>
        
        <div 
          className="calculator__form-wrapper reveal"
        >
          <h3 className="calculator__form-title">Request a Free Quote</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="age">Your Age *</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="e.g., 35"
                  min="18"
                  max="65"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="income">Annual Income</label>
                <select
                  id="income"
                  name="income"
                  value={formData.income}
                  onChange={handleChange}
                >
                  <option value="">Select income range</option>
                  <option value="below-5l">Below ₹5 Lakhs</option>
                  <option value="5l-10l">₹5 - 10 Lakhs</option>
                  <option value="10l-25l">₹10 - 25 Lakhs</option>
                  <option value="25l-50l">₹25 - 50 Lakhs</option>
                  <option value="above-50l">Above ₹50 Lakhs</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="planType">Interested In</label>
              <select
                id="planType"
                name="planType"
                value={formData.planType}
                onChange={handleChange}
              >
                <option value="">Select plan type</option>
                <option value="term">Term Insurance</option>
                <option value="endowment">Endowment Plan</option>
                <option value="ulip">ULIP</option>
                <option value="pension">Pension Plan</option>
                <option value="child">Child Plan</option>
                <option value="health">Health Insurance</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements..."
                rows={3}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn btn--primary btn--lg btn-beam" 
              style={{ width: '100%' }}
            >
              Get Free Quote via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Calculator
