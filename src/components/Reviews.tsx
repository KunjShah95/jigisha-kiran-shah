import { Star, ExternalLink, Play, Quote, MessageCircle, MapPin, ThumbsUp } from 'lucide-react';

const Reviews = () => {

  // Actual customer reviews from Justdial and business pages
  // structured to highlight real-world use cases
  const customerReviews = [
    {
      name: 'Bhavesh Patel',
      location: 'Ahmedabad, Gujarat',
      initials: 'BP',
      rating: 5,
      date: 'October 2025',
      useCase: 'Retirement Security',
      challenge: 'Unclear about post-retirement income',
      solution: 'Comprehensive pension planning',
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
      useCase: 'Family Protection',
      challenge: 'Choosing the right life cover',
      solution: 'Tailored insurance portfolio',
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
      useCase: 'Financial Freedom',
      challenge: 'Need for structured wealth growth',
      solution: 'Salary insurance & pension mix',
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
      useCase: 'Child\'s Future',
      challenge: 'Securing education funds',
      solution: 'Dedicated education policy',
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
      useCase: 'Risk Management',
      challenge: 'Seeking trustworthy advice',
      solution: 'Double MDRT expertise',
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
      useCase: 'Holistic Planning',
      challenge: 'Complex family needs',
      solution: 'Customized policy combinations',
      text: 'Best LIC advisor in Ahmedabad! Her office at Orchid Legacy is convenient to visit. She took time to understand our family needs and suggested perfect policy combinations.',
      source: 'Google',
      tag: 'Family Insurance'
    }
  ];

  const stats = [
    { value: '5.0', label: 'Justdial Rating', icon: Star },
    { value: '83+', label: 'Customer Reviews', icon: MessageCircle },
    { value: '100%', label: 'Positive Feedback', icon: ThumbsUp },
    { value: '2.7k+', label: 'Families Served', icon: MapPin }
  ];

  return (
    <section className="py-20 lg:py-32 bg-midnight-light relative overflow-hidden" id="reviews">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-soft-light" />
      
      <div className="container relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 reveal">
          <div className="inline-block px-3 py-1 bg-white/5 text-gold text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-4 lg:mb-6 border border-white/10">Real World Impact</div>
          <h2 className="text-3xl md:text-5xl font-playfair font-medium text-white mb-4 lg:mb-6">
            Client <span className="text-gold italic">Success Stories</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed font-light">
            See how we've helped families across Gujarat achieve financial security through tailored insurance solutions.
            Real challenges, real solutions.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 reveal">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 mx-auto bg-linear-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mb-4 shadow-lg shadow-gold/10 group-hover:scale-110 transition-transform">
                <stat.icon className="w-5 h-5 text-midnight" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gold/80 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Rate Us CTA - New Section for 'Adding' Reviews */}
        <div className="mb-20 reveal">
            <div className="bg-linear-to-r from-gold/10 to-midnight border border-gold/20 rounded-3xl p-8 md:p-12 relative overflow-hidden text-center md:text-left">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-playfair text-white mb-3">
                            Have you worked with us?
                        </h3>
                        <p className="text-gray-300 font-light max-w-xl">
                            Your feedback helps us serve better. Share your experience and help others make informed decisions about their financial future.
                        </p>
                    </div>
                    <div className="flex gap-4 flex-wrap justify-center">
                        <a 
                            href="https://share.google/qxMfvT9Vz6vulyXIE" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-midnight font-bold rounded-xl hover:bg-white hover:text-midnight transition-all shadow-lg hover:shadow-gold/20 transform hover:-translate-y-1"
                        >
                            <Star className="w-5 h-5 fill-midnight" />
                            Rate Us on Google
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 reveal">
          {customerReviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500 relative group overflow-hidden flex flex-col"
            >
               {/* Hover Gradient */}
               <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-gold/10 transition-colors" />
              
              {/* Use Case Badge */}
              <div className="mb-6 relative z-10">
                <span className="inline-block px-3 py-1 bg-gold/10 rounded-lg text-xs text-gold font-bold uppercase tracking-wider border border-amber-500/10">
                    {review.useCase}
                </span>
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed mb-8 italic font-light relative z-10 text-sm grow">
                "{review.text}"
              </p>
              
              {/* Challenge & Solution (Mini Case Study) */}
              <div className="space-y-2 mb-6 relative z-10 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex gap-2 items-start">
                    <span className="text-gold/60 shrink-0 text-[10px] uppercase font-bold tracking-wider mt-0.5">Problem:</span>
                    <p className="text-xs text-gray-400 font-light leading-snug">{review.challenge}</p>
                </div>
                <div className="flex gap-2 items-start">
                    <span className="text-green-400/60 shrink-0 text-[10px] uppercase font-bold tracking-wider mt-0.5">Solution:</span>
                    <p className="text-xs text-gray-400 font-light leading-snug">{review.solution}</p>
                </div>
              </div>
              
              {/* Reviewer Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10 relative z-10 mt-auto">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-white/10 to-white/5 flex items-center justify-center text-gold font-bold text-sm border border-white/10">
                  {review.initials}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white group-hover:text-gold transition-colors">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-gray-500 mb-1">{review.date}</div>
                  <div className="text-[10px] text-gold font-bold uppercase tracking-wider inline-flex items-center gap-1">
                    via {review.source}
                    <ExternalLink size={10} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Video Testimonials Section */}
        <div className="bg-linear-to-br from-gold/5 to-transparent border border-white/5 rounded-3xl p-8 lg:p-12 reveal overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-block px-3 py-1 bg-red-500/10 text-red-400 text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6 border border-red-500/20">Video Testimonials</div>
              <h3 className="text-3xl md:text-4xl font-playfair font-medium text-white mb-6">
                Watch Customer Stories on <span className="text-red-500 italic">YouTube</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8 font-light">
                Hear directly from our satisfied clients about their experience with retirement planning, 
                pension solutions, and life insurance. Subscribe to our YouTube channel for more financial insights.
              </p>
              <a 
                href="https://www.youtube.com/@jigishakiranshah4636" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-900/40"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 9.71a8.5 8.5 0 0 0-.91-4.13 2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3 2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48 9.55 9.55 0 0 0 .3 2 3.14 3.14 0 0 0 .71 1.36 2.86 2.86 0 0 0 1.49.78 45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78 2.49 2.49 0 0 0 .61-1 10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z"/>
                </svg>
                Visit YouTube Channel
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            {/* Video Thumbnail */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80" 
                alt="Customer Testimonial Video" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
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
                <div className="font-semibold text-lg">Customer Reviews About Retirement Planning</div>
                <div className="text-sm text-white/80 flex items-center gap-1">
                   <Play size={12} /> Watch on YouTube
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Sources Links */}
        <div className="mt-16 text-center reveal">
          <p className="text-gray-500 mb-6 font-light">Read more reviews on these platforms:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.justdial.com/Ahmedabad/Jigisha-Kiran-Shah-Near-Jayhind-High-School-Maninagar-Daxini-Society/079PXX79-XX79-130706134100-Z7T3_BZDET" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-gray-300 rounded-full hover:bg-orange-500/10 hover:text-orange-400 hover:border-orange-500/30 transition-all font-medium group"
            >
              <Star className="w-4 h-4 text-orange-500 group-hover:fill-orange-500" />
              Justdial Reviews (5.0 ★)
              <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
            </a>
            <a 
              href="https://www.youtube.com/@jigishakiranshah4636" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-gray-300 rounded-full hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30 transition-all font-medium group"
            >
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 9.71a8.5 8.5 0 0 0-.91-4.13 2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3 2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48 9.55 9.55 0 0 0 .3 2 3.14 3.14 0 0 0 .71 1.36 2.86 2.86 0 0 0 1.49.78 45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78 2.49 2.49 0 0 0 .61-1 10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z"/>
              </svg>
              YouTube Channel
              <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
            </a>
            <a 
              href="https://wa.me/919824025435" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-gray-300 rounded-full hover:bg-green-500/10 hover:text-green-400 hover:border-green-500/30 transition-all font-medium group"
            >
              <MessageCircle className="w-4 h-4 text-green-500" />
              WhatsApp Us
              <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
