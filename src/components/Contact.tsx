import { useState } from 'react'

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
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const contactMethods = [
    {
      icon: '📞',
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      value: '+91 98765 43210',
      link: 'https://wa.me/919876543210'
    },
    {
      icon: '✉️',
      title: 'Email',
      value: 'advisor@licinsurance.com',
      link: 'mailto:advisor@licinsurance.com'
    },
    {
      icon: '📍',
      title: 'Office',
      value: 'LIC Building, Main Road, Mumbai',
      link: '#'
    }
  ]

  return (
    <section className="contact" id="contact">
      <div className="section-number">07 — CONNECT</div>
      <div className="container contact__inner">
        <div 
          className="contact__info reveal"
        >
          <div className="contact__label">Get In Touch</div>
          <h2 className="contact__title">Let's Discuss Your Insurance Needs</h2>
          <p className="contact__description">
            Have questions about insurance plans? Want to know which policy is right for you? 
            Reach out and I'll be happy to help you make an informed decision.
          </p>
          
          <div className="contact__methods">
            {contactMethods.map((method, index) => (
              <div key={index} className="contact__method">
                <div className="contact__method-icon">{method.icon}</div>
                <div className="contact__method-text">
                  <h4>{method.title}</h4>
                  <p>
                    <a href={method.link} target={method.link.startsWith('http') ? '_blank' : undefined}>
                      {method.value}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div 
          className="contact__form-wrapper reveal"
        >
          <h3 className="contact__form-title">Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Your Name *</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-phone">Phone Number *</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="contact-message">Your Message *</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your insurance requirements..."
                rows={4}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn btn--primary btn--lg btn-beam" 
              style={{ width: '100%' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
