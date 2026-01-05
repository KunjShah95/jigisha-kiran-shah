const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    initials: 'RK',
    text: 'Excellent service! The advisor helped me choose the perfect term insurance plan for my family. The claim process was smooth and hassle-free. Highly recommended!',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'IT Professional',
    initials: 'PS',
    text: 'Very knowledgeable and patient. Explained all the policy details clearly and helped me understand the benefits. Got my child education plan sorted within a week!',
    rating: 5
  },
  {
    name: 'Amit Patel',
    role: 'Doctor',
    initials: 'AP',
    text: 'I have been working with this advisor for over 8 years now. All my insurance needs are handled professionally. The personalized service is what sets them apart.',
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="section-number">05 — REVIEWS</div>
      <div className="container">
        <div 
          className="testimonials__header reveal"
        >
          <div className="testimonials__label">Testimonials</div>
          <h2 className="testimonials__title">What Our Clients Say</h2>
          <p className="testimonials__description">
            Trusted by thousands of families for their insurance needs. Here's what some of our clients have to say.
          </p>
        </div>
        
        <div 
          className="testimonials__grid reveal"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card"
            >
              <div className="testimonial-card__quote">"</div>
              <div className="testimonial-card__stars">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-card__text">{testimonial.text}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{testimonial.initials}</div>
                <div className="testimonial-card__info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
