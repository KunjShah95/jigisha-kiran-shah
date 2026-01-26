import { useEffect, useState } from 'react';
import { Star, ExternalLink, Play, Quote, MessageCircle, MapPin, ThumbsUp } from 'lucide-react';

const Reviews = () => {

  // Actual customer reviews from Google Business
  // structured to highlight real-world use cases
  const customerReviews = [
    {
      name: 'Bhavesh Patel',
      location: 'Ahmedabad, Gujarat',
      initials: 'BP',
      rating: 5,
      date: 'October 2024',
      useCase: 'Retirement Security',
      challenge: 'Unclear about post-retirement income',
      solution: 'Comprehensive pension planning',
      text: 'Jigisha ben provided perfect guidance and complete explanation of retirement planning. Her knowledge of LIC pension plans is exceptional. Highly recommended for anyone looking to secure their future.',
      source: 'Google',
      tag: 'Retirement Planning'
    },
    {
      name: 'Priya Sharma',
      location: 'Shela, Ahmedabad',
      initials: 'PS',
      rating: 5,
      date: 'September 2024',
      useCase: 'Family Protection',
      challenge: 'Choosing the right life cover',
      solution: 'Tailored insurance portfolio',
      text: 'Her professionalism and genuine advice regarding various LIC plans helped me choose the right insurance for my family. The documentation support was excellent and claims process was smooth.',
      source: 'Google',
      tag: 'Life Insurance'
    },
    {
      name: 'Dr. Amit Desai',
      location: 'Maninagar, Ahmedabad',
      initials: 'AD',
      rating: 5,
      date: 'August 2024',
      useCase: 'Financial Freedom',
      challenge: 'Need for structured wealth growth',
      solution: 'Salary insurance & pension mix',
      text: 'With 22+ years of experience, Jigisha ben truly understands the insurance industry. She helped me with salary insurance and pension planning. Now I feel secure about my retirement expenses.',
      source: 'Google',
      tag: 'Salary Insurance'
    },
    {
      name: 'Meera Joshi',
      location: 'Gujarat',
      initials: 'MJ',
      rating: 5,
      date: 'July 2024',
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
      date: 'June 2024',
      useCase: 'Risk Management',
      challenge: 'Seeking trustworthy advice',
      solution: '2 Times MDRT achiever (2023 & 2024)',
      text: 'Excellent service! The entire insurance process was handled professionally. Jigisha ben achieved MDRT status in 2023 and 2024, which demonstrates her expertise. Highly trustworthy advisor.',
      source: 'Google',
      tag: 'Term Insurance'
    },
    {
      name: 'Kavita Shah',
      location: 'S.G. Highway, Ahmedabad',
      initials: 'KS',
      rating: 5,
      date: 'January 2025',
      useCase: 'Holistic Planning',
      challenge: 'Complex family needs',
      solution: 'Customized policy combinations',
      text: 'Best LIC advisor in Ahmedabad! Her office at Orchid Legacy is convenient to visit. She took time to understand our family needs and suggested perfect policy combinations.',
      source: 'Google',
      tag: 'Family Insurance'
    },
    {
      name: 'Ankit Thakkar',
      location: 'Bopal, Ahmedabad',
      initials: 'AT',
      rating: 5,
      date: 'December 2024',
      useCase: 'Family Protection',
      challenge: 'Choosing the right life cover',
      solution: 'Tailored insurance portfolio',
      text: 'Her professionalism and genuine advice regarding various LIC plans helped me choose the right insurance for my family. The documentation support was excellent and claims process was smooth.',
      source: 'Google',
      tag: 'Life Insurance'
    },
    {
      name: 'Kunj Shah',
      location: 'Google Review',
      initials: 'KS',
      rating: 5,
      date: 'November 2024',
      useCase: 'Life Insurance',
      challenge: 'Selecting the right policy',
      solution: 'Tailored policy with clear guidance',
      text: 'Highly recommend Jigisha Kiran Shah for life insurance services. Professional, transparent, and exceptionally patient. She tailored solutions to my family goals, explained complex terms clearly, and stayed accessible even after the policy was finalized. Five stars without hesitation!',
      source: 'Google',
      tag: 'Life Insurance'
    },
    {
      name: 'Hardik Joshi',
      location: 'Satellite, Ahmedabad',
      initials: 'HJ',
      rating: 5,
      date: 'October 2024',
      useCase: 'Business Protection',
      challenge: 'Key man insurance for startup',
      solution: 'Corporate insurance structuring',
      text: 'As a startup founder, I needed insurance for key employees. Jigisha ben structured a comprehensive corporate insurance plan. Her Google reviews brought me here and I\'m not disappointed!',
      source: 'Google',
      tag: 'Business Insurance'
    }
  ];

  const stats = [
    { value: '5.0', label: 'Google Rating', icon: Star },
    { value: '100+', label: 'Google Reviews', icon: MessageCircle },
    { value: '100%', label: 'Positive Feedback', icon: ThumbsUp },
    { value: '2.7k+', label: 'Families Served', icon: MapPin }
  ];

  const googleSliderReviews = [
    {
      name: 'Hashmukh Mali',
      detail: '3 weeks ago · NEW',
      text: 'Very good, very nice insurance adviser and best future planning adviser. I referred my best friend and relatives — suggest insurance adviser, contact. Thank you.',
      rating: 5,
      time: '3 weeks ago'
    },
    {
      name: 'Bharat Gajjar',
      detail: '3 weeks ago · NEW',
      text: 'Best services, life insurance policy given as per our requirements.',
      rating: 5,
      time: '3 weeks ago'
    },
    {
      name: 'Hardik Togadiya',
      detail: '2 months ago',
      text: 'Best suggestion given for insurance. Good support 👍🏼',
      rating: 5,
      time: '2 months ago'
    },
    {
      name: 'Rajesh Ambalia',
      detail: '2 weeks ago · NEW',
      text: 'Best life insurance advisor, perfect advice given to me.',
      rating: 5,
      time: '2 weeks ago'
    },
    {
      name: 'Chintan Bhanushali',
      detail: '1 day ago · NEW',
      text: 'Thank you for your prompt and genuine service for my policy. Truly sharing the best required options as per age and maturity requirements.',
      rating: 5,
      time: '1 day ago'
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % googleSliderReviews.length);
    }, 5200);
    return () => clearInterval(interval);
  }, [googleSliderReviews.length]);

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-midnight to-midnight-light relative overflow-hidden" id="reviews">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-gold/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-soft-light" />
      
      <div className="container relative z-10 w-full">
        {/* Modern Hero Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold/20 via-amber-500/10 to-gold/20 text-gold text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6 border border-gold/30 shadow-lg shadow-gold/5 backdrop-blur-sm">
            <Star className="w-3 h-3 fill-gold" />
            <span>TRUSTED BY 2,700+ FAMILIES</span>
            <Star className="w-3 h-3 fill-gold" />
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            Real Stories, <span className="bg-gradient-to-r from-gold via-amber-400 to-gold bg-clip-text text-transparent italic">Real Results</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
            Discover how families across Gujarat transformed their financial future through personalized insurance solutions and expert guidance.
          </p>
        </div>

        {/* Redesigned Stats with Modern Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20 reveal">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-3xl p-6 md:p-8 text-center hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-gold via-amber-400 to-gold-dark rounded-2xl flex items-center justify-center mb-5 shadow-xl shadow-gold/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-midnight" />
                </div>
                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-gold font-semibold uppercase tracking-widest">{stat.label}</div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Modern Customer Reviews Section with Featured Layout */}
        <div className="mb-24">
          <div className="text-center mb-12 reveal">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
              Customer <span className="bg-gradient-to-r from-gold via-amber-400 to-gold bg-clip-text text-transparent">Experiences</span>
            </h3>
            <p className="text-gray-400 text-lg">Real stories from real people who trusted us with their future</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 reveal">
            {customerReviews.map((review, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 relative overflow-hidden flex flex-col hover:scale-[1.02] hover:-translate-y-1"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Decorative corner element */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <Quote className="absolute top-6 right-6 w-12 h-12 text-gold/10 group-hover:text-gold/20 transition-colors duration-500" />
                
                {/* Use Case Badge - Modern Style */}
                <div className="mb-6 relative z-10">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-gold/20 to-amber-500/20 rounded-xl text-xs text-gold font-bold uppercase tracking-widest border border-gold/30 shadow-lg shadow-gold/5">
                    {review.useCase}
                  </span>
                </div>
                
                {/* Rating with animation */}
                <div className="flex gap-1.5 mb-5 relative z-10">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-gold text-gold transition-transform duration-300 group-hover:scale-110" 
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-gray-200 leading-relaxed mb-8 relative z-10 text-base font-light grow">
                  "{review.text}"
                </p>
                
                {/* Mini Case Study - Enhanced Design */}
                <div className="space-y-3 mb-6 relative z-10 bg-gradient-to-br from-white/10 to-white/5 p-5 rounded-2xl border border-white/20 hover:border-gold/30 transition-colors duration-300 backdrop-blur-sm">
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0 border border-red-500/30">
                      <div className="w-2 h-2 bg-red-400 rounded-full" />
                    </div>
                    <div>
                      <span className="text-red-400/80 text-[10px] uppercase font-bold tracking-wider block mb-1">Challenge</span>
                      <p className="text-sm text-gray-300 font-light leading-snug">{review.challenge}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 border border-green-500/30">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                    </div>
                    <div>
                      <span className="text-green-400/80 text-[10px] uppercase font-bold tracking-wider block mb-1">Solution</span>
                      <p className="text-sm text-gray-300 font-light leading-snug">{review.solution}</p>
                    </div>
                  </div>
                </div>
                
                {/* Reviewer Info - Enhanced */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/20 relative z-10 mt-auto">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold/30 via-amber-500/20 to-gold/30 flex items-center justify-center text-gold font-bold text-base border border-gold/30 shadow-lg shadow-gold/10 group-hover:scale-110 transition-transform duration-300">
                    {review.initials}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white group-hover:text-gold transition-colors text-base">{review.name}</h4>
                    <p className="text-xs text-gray-400">{review.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-gray-500 mb-1">{review.date}</div>
                    <div className="text-[10px] text-gold font-bold uppercase tracking-wider inline-flex items-center gap-1.5 bg-gold/10 px-2 py-1 rounded-lg border border-gold/20">
                      {review.source}
                      <ExternalLink size={10} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern YouTube Video Testimonials Section */}
        <div className="mb-24 reveal">
          <div className="bg-gradient-to-br from-red-500/10 via-transparent to-pink-500/10 border border-red-500/20 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden backdrop-blur-xl">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6 border border-red-500/30 backdrop-blur-sm">
                  <Play className="w-3 h-3 fill-red-400" />
                  <span>VIDEO TESTIMONIALS</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
                  Watch <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Real Stories</span>
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed font-light">
                  Hear directly from clients about their journey to financial security. Real voice testimonials that showcase pension planning, family protection, and lasting legacy building.
                </p>
              </div>
              
              {/* Video Grid - Enhanced Design */}
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                {[
                  {
                    title: 'Customer Feedback: Retirement & Pension Planning',
                    videoId: 'j6BGV7fM_Ik'
                  },
                  {
                    title: 'Customer Feedback: LIC Advisor Experience',
                    videoId: 'rczBfhhEo4M'
                  }
                ].map((video) => (
                  <div
                    key={video.videoId}
                    className="group relative overflow-hidden rounded-3xl shadow-2xl border-2 border-white/20 hover:border-red-500/50 transition-all duration-500 bg-midnight/60 backdrop-blur-sm hover:scale-[1.02]"
                  >
                    <div className="relative w-full pt-[56.25%]">
                      <iframe
                        className="absolute inset-0 w-full h-full rounded-3xl"
                        src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1&showinfo=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight via-midnight/90 to-transparent p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0 border border-red-500/30">
                          <Play size={18} className="text-red-400 fill-red-400" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-base leading-snug mb-1">{video.title}</div>
                          <div className="text-xs text-gray-400 flex items-center gap-2">
                            <span>Click to play</span>
                            <ExternalLink size={12} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Channel CTA */}
              <div className="text-center">
                <a 
                  href="https://www.youtube.com/@jigishakiranshah4636" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-red-500/20 text-white font-bold rounded-2xl hover:from-red-500/30 hover:to-pink-500/30 transition-all duration-300 border border-red-500/30 hover:border-red-500/50 hover:scale-105"
                >
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 9.71a8.5 8.5 0 0 0-.91-4.13 2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3 2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48 9.55 9.55 0 0 0 .3 2 3.14 3.14 0 0 0 .71 1.36 2.86 2.86 0 0 0 1.49.78 45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78 2.49 2.49 0 0 0 .61-1 10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z"/>
                  </svg>
                  Visit Our YouTube Channel
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Business Reviews Slider */}
        <div className="mb-24 reveal">
          <div className="bg-gradient-to-br from-blue-500/10 via-white/5 to-indigo-500/10 border border-blue-500/20 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden backdrop-blur-xl">
            <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: '7s' }} />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gold/20 to-transparent rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: '9s' }} />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase rounded-full border border-blue-500/30 mb-4 backdrop-blur-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  LIVE REVIEWS
                </div>
                <h3 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-3">
                  Latest from <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">Google</span>
                </h3>
                <p className="text-gray-300 text-base md:text-lg max-w-2xl">Fresh feedback from real clients. Slide through to see why we maintain a perfect 5.0★ rating.</p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="px-6 py-3 bg-gradient-to-r from-gold/20 to-amber-500/20 rounded-2xl border border-gold/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold text-gold">5.0</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                    </div>
                  </div>
                </div>
                <a
                  href="https://share.google/VQAFgVhdk114U2ozd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-midnight font-bold rounded-2xl hover:bg-gold transition-all duration-300 shadow-lg hover:scale-105"
                >
                  View All
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/30 to-amber-500/20 flex items-center justify-center text-gold font-extrabold text-xl border-2 border-gold/30 shadow-lg shadow-gold/10 flex-shrink-0">
                  {googleSliderReviews[activeSlide].name.substring(0,2).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {Array.from({ length: googleSliderReviews[activeSlide].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                    <span className="text-gold font-bold text-sm ml-1">5.0</span>
                  </div>
                  <div className="text-white font-bold text-xl mb-1">{googleSliderReviews[activeSlide].name}</div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-400">{googleSliderReviews[activeSlide].detail}</span>
                  </div>
                </div>
              </div>
              <p className="text-white text-lg md:text-xl leading-relaxed font-light mb-8">
                "{googleSliderReviews[activeSlide].text}"
              </p>

              {/* Pagination Dots - Enhanced */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/20">
                {googleSliderReviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Go to review ${idx + 1}`}
                    className={`h-3 rounded-full transition-all duration-500 ${
                      activeSlide === idx 
                        ? 'w-10 bg-gradient-to-r from-gold via-amber-400 to-gold shadow-lg shadow-gold/30' 
                        : 'w-3 bg-white/30 hover:bg-white/50 hover:scale-110'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modern CTA Section - Share Your Experience */}
        <div className="mb-20 reveal">
          <div className="bg-gradient-to-r from-gold/20 via-amber-500/10 to-gold/20 border-2 border-gold/30 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden backdrop-blur-xl text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 text-gold text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6 border border-gold/30">
                <MessageCircle className="w-3 h-3" />
                YOUR FEEDBACK MATTERS
              </div>
              <h3 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-5">
                Have You Worked <span className="bg-gradient-to-r from-gold via-amber-400 to-gold bg-clip-text text-transparent">With Us?</span>
              </h3>
              <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Your experience helps others make informed decisions about their financial future. Share your story and be part of our growing community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://share.google/VQAFgVhdk114U2ozd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-gold via-amber-400 to-gold text-midnight font-extrabold rounded-2xl hover:shadow-2xl hover:shadow-gold/40 transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  <Star className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Write a Review
                </a>
                <a 
                  href="https://share.google/VQAFgVhdk114U2ozd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50 text-lg"
                >
                  <MapPin className="w-6 h-6" />
                  Find Us on Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Footer - Enhanced */}
        <div className="text-center reveal">
          <p className="text-gray-400 mb-8 font-light text-lg">Connect with us on these platforms</p>
          <div className="flex flex-wrap justify-center gap-5">
            <a 
              href="https://share.google/VQAFgVhdk114U2ozd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-2 border-blue-500/20 text-white rounded-2xl hover:from-blue-500/20 hover:to-indigo-500/20 hover:border-blue-500/40 transition-all duration-300 font-semibold hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Google Reviews (5.0 ★)</span>
              <ExternalLink className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
            <a 
              href="https://www.youtube.com/@jigishakiranshah4636" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500/10 to-pink-500/10 border-2 border-red-500/20 text-white rounded-2xl hover:from-red-500/20 hover:to-pink-500/20 hover:border-red-500/40 transition-all duration-300 font-semibold hover:scale-105"
            >
              <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 9.71a8.5 8.5 0 0 0-.91-4.13 2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3 2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48 9.55 9.55 0 0 0 .3 2 3.14 3.14 0 0 0 .71 1.36 2.86 2.86 0 0 0 1.49.78 45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78 2.49 2.49 0 0 0 .61-1 10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z"/>
              </svg>
              <span>YouTube Channel</span>
              <ExternalLink className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
            <a 
              href="https://wa.me/919824025435" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-500/20 text-white rounded-2xl hover:from-green-500/20 hover:to-emerald-500/20 hover:border-green-500/40 transition-all duration-300 font-semibold hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 text-green-400" />
              <span>WhatsApp Us</span>
              <ExternalLink className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
