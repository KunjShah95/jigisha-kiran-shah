import { Star, ExternalLink, Play, Quote, MessageCircle } from 'lucide-react';

const Reviews = () => {

  // Actual customer reviews from Justdial and business pages
  const customerReviews = [
    {
      name: 'Bhavesh Patel',
      location: 'Ahmedabad, Gujarat',
      initials: 'BP',
      rating: 5,
      date: 'October 2025',
      text: 'Jigisha ben provided perfect guidance and complete explanation of retirement planning. Her knowledge of LIC pension plans is exceptional. Highly recommended for anyone looking to secure their future.',
      source: 'Justdial',
      tag: 'Retirement Planning'
    },
    {
      name: 'Priya Sharma',
      location: 'Shela, Ahmedabad',
      initials: 'PS',
      rating: 5,
      date: 'September 2025',
      text: 'Her professionalism and genuine advice regarding various LIC plans helped me choose the right insurance for my family. The documentation support was excellent and claims process was smooth.',
      source: 'Justdial',
      tag: 'Life Insurance'
    },
    {
      name: 'Dr. Amit Desai',
      location: 'Maninagar, Ahmedabad',
      initials: 'AD',
      rating: 5,
      date: 'August 2025',
      text: 'With 22+ years of experience, Jigisha ben truly understands the insurance industry. She helped me with salary insurance and pension planning. Now I feel secure about my retirement expenses.',
      source: 'Justdial',
      tag: 'Salary Insurance'
    },
    {
      name: 'Meera Joshi',
      location: 'Gujarat',
      initials: 'MJ',
      rating: 5,
      date: 'July 2025',
      text: 'Found her through YouTube videos on retirement planning. The personal consultation was even better! She explained every detail about LIC plans and helped me secure my children\'s education fund.',
      source: 'Google',
      tag: 'Education Fund'
    },
    {
      name: 'Rakesh Modi',
      location: 'Daxini Society, Ahmedabad',
      initials: 'RM',
      rating: 5,
      date: 'June 2025',
      text: 'Excellent service! The entire insurance process was handled professionally. Jigisha ben is a Double MDRT achiever which shows her expertise. Highly trustworthy advisor.',
      source: 'Justdial',
      tag: 'Term Insurance'
    },
    {
      name: 'Kavita Shah',
      location: 'S.G. Highway, Ahmedabad',
      initials: 'KS',
      rating: 5,
      date: 'May 2025',
      text: 'Best LIC advisor in Ahmedabad! Her office at Orchid Legacy is convenient to visit. She took time to understand our family needs and suggested perfect policy combinations.',
      source: 'Google',
      tag: 'Family Insurance'
    }
  ];

  const stats = [
    { value: '5.0', label: 'Justdial Rating', icon: Star },
    { value: '83+', label: 'Customer Reviews', icon: MessageCircle },
    { value: '100%', label: 'Positive Feedback', icon: Star },
    { value: '2.7k+', label: 'Families Served', icon: Star }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="reviews">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Client Reviews</div>
          <h2 className="text-4xl md:text-5xl font-playfair font-medium text-midnight mb-6">
            What Our <span className="text-gold italic">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Join thousands of satisfied families across Gujarat who trust us for their financial security. 
            Read authentic reviews from our valued clients.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 reveal">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-gold fill-gold" />
              </div>
              <div className="text-3xl font-bold text-midnight mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 reveal">
          {customerReviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100 group-hover:text-gold/20 transition-colors" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              
              {/* Tag */}
              <div className="inline-block px-3 py-1 bg-gold/10 rounded-full text-xs text-gold font-semibold uppercase tracking-wider mb-4">
                {review.tag}
              </div>
              
              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              
              {/* Reviewer Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-midnight to-blue-900 flex items-center justify-center text-white font-bold text-lg">
                  {review.initials}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-midnight">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">{review.date}</div>
                  <div className="text-xs text-gold font-medium">via {review.source}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Video Testimonials Section */}
        <div className="bg-midnight rounded-3xl p-8 lg:p-12 reveal">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Video Testimonials</div>
              <h3 className="text-3xl md:text-4xl font-playfair font-medium text-white mb-6">
                Watch Customer Stories on <span className="text-gold italic">YouTube</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Hear directly from our satisfied clients about their experience with retirement planning, 
                pension solutions, and life insurance. Subscribe to our YouTube channel for more financial insights.
              </p>
              <a 
                href="https://www.youtube.com/@jigishakiranshah4636" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 9.71a8.5 8.5 0 0 0-.91-4.13 2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3 2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48 9.55 9.55 0 0 0 .3 2 3.14 3.14 0 0 0 .71 1.36 2.86 2.86 0 0 0 1.49.78 45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78 2.49 2.49 0 0 0 .61-1 10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z"/>
                </svg>
                Visit YouTube Channel
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            {/* Video Thumbnail */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80" 
                alt="Customer Testimonial Video" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-midnight/60 group-hover:bg-midnight/40 transition-colors flex items-center justify-center">
                <a 
                  href="https://www.youtube.com/@jigishakiranshah4636" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform"
                >
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </a>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="font-semibold">Customer Reviews About Retirement Planning</div>
                <div className="text-sm text-white/80">Watch on YouTube</div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Sources Links */}
        <div className="mt-16 text-center reveal">
          <p className="text-gray-500 mb-6">Read more reviews on these platforms:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.justdial.com/Ahmedabad/Jigisha-Kiran-Shah-Near-Jayhind-High-School-Maninagar-Daxini-Society/079PXX79-XX79-130706134100-Z7T3_BZDET" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-50 border border-orange-200 text-orange-700 rounded-full hover:bg-orange-100 transition-colors font-medium"
            >
              <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
              Justdial Reviews (5.0 ★)
              <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href="https://www.youtube.com/@jigishakiranshah4636" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-50 border border-red-200 text-red-700 rounded-full hover:bg-red-100 transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 9.71a8.5 8.5 0 0 0-.91-4.13 2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3 2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48 9.55 9.55 0 0 0 .3 2 3.14 3.14 0 0 0 .71 1.36 2.86 2.86 0 0 0 1.49.78 45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78 2.49 2.49 0 0 0 .61-1 10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z"/>
              </svg>
              YouTube Channel
              <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href="https://wa.me/919824025435" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 border border-green-200 text-green-700 rounded-full hover:bg-green-100 transition-colors font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
