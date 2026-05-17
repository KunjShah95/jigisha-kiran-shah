import { Award, Star, Users, ArrowRight, CheckCircle, ChevronLeft, ChevronRight, ZoomIn, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import aboutImage from '../assets/images/about.jpeg';
import heroImage from '../assets/images/hero-image.jpeg';

// ─── Image Gallery Data ───────────────────────────────────────────────────────
const galleryImages = [
  {
    src: aboutImage,
    label: 'Our Services',
    caption: 'Comprehensive LIC advisory — life, health & wealth',
  },
  {
    src: heroImage,
    label: 'Jigisha Ben',
    caption: 'Senior Wealth Advisor & 2× MDRT Achiever',
  }
];


// ─── Highlights & Stats ───────────────────────────────────────────────────────
const highlights = [
  '2-Time MDRT Achiever (2023 & 2024)',
  '22+ Years in LIC Insurance Advisory',
  '100+ Five-Star Google Reviews',
  'Office at Orchid Legacy, Shela, Ahmedabad',
];

const stats = [
  { icon: Award, value: '2×', label: 'MDRT Achiever' },
  { icon: Star, value: '5.0★', label: 'Google Rating' },
  { icon: Users, value: '2,700+', label: 'Families Served' },
];

// ─────────────────────────────────────────────────────────────────────────────

const About = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = () => setActiveImg(i => (i - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setActiveImg(i => (i + 1) % galleryImages.length);

  return (
    <>
      {/* ── Lightbox ─────────────────────────────────────────────────────────── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[999] bg-midnight/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute top-5 right-6 text-white/60 hover:text-white text-3xl font-light"
            onClick={() => setLightbox(false)}
          >✕</button>
          <button
            className="absolute left-4 text-white/60 hover:text-white p-3 bg-white/10 rounded-full"
            onClick={e => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <img
            src={galleryImages[activeImg].src}
            alt={galleryImages[activeImg].caption}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl object-contain"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute right-4 text-white/60 hover:text-white p-3 bg-white/10 rounded-full"
            onClick={e => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <p className="absolute bottom-6 text-center text-white/60 text-sm">
            {galleryImages[activeImg].caption}
          </p>
        </div>
      )}

      {/* ── Main Section ──────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#faf6f0] relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#f0e8da] to-transparent pointer-events-none rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative z-10 w-full">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-12 lg:mb-16 reveal">
            <div className="h-px w-12 bg-gold" />
            <span className="text-xs font-bold text-gold uppercase tracking-[0.3em]">About Jigisha Ben</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* ── LEFT: Image switcher ─────────────────────────────────────────── */}
            <div className="reveal-left">

              {/* Main image card */}
              <div className="relative group cursor-pointer" onClick={() => setLightbox(true)}>
                {/* Tilt background */}
                <div className="absolute inset-2 bg-gradient-to-br from-midnight/10 to-gold/10 rounded-[2rem] rotate-2 scale-100 pointer-events-none" />

                {/* Image frame */}
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gold/20 aspect-[4/5] max-h-[480px]">
                  <img
                    key={activeImg}
                    src={galleryImages[activeImg].src}
                    alt={galleryImages[activeImg].caption}
                    className="w-full h-full object-cover object-top transition-all duration-500"
                    style={{ animation: 'fadeIn 0.4s ease' }}
                  />

                  {/* Gradient + caption overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-gold text-midnight text-[10px] font-bold tracking-widest uppercase rounded-sm mb-3">
                      {galleryImages[activeImg].label}
                    </span>
                    <p className="text-white text-sm font-medium">{galleryImages[activeImg].caption}</p>
                  </div>

                  {/* Zoom hint */}
                  <div className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>

                  {/* Prev / Next arrows */}
                  <button
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
                    onClick={e => { e.stopPropagation(); prev(); }}
                  >
                    <ChevronLeft className="w-4 h-4 text-white" />
                  </button>
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
                    onClick={e => { e.stopPropagation(); next(); }}
                  >
                    <ChevronRight className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -left-4 z-20 bg-midnight text-white rounded-2xl px-4 py-2.5 shadow-xl border border-white/10 flex items-center gap-2.5 pointer-events-none">
                  <div className="w-7 h-7 rounded-lg bg-gold flex items-center justify-center shrink-0">
                    <Award className="w-3.5 h-3.5 text-midnight" />
                  </div>
                  <div>
                    <div className="text-[9px] text-white/50 uppercase tracking-widest">Serving Since</div>
                    <div className="text-sm font-bold font-playfair leading-none">2004</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 z-20 bg-white rounded-2xl px-5 py-3.5 shadow-xl border border-gold/20 flex items-center gap-3 animate-float pointer-events-none hidden md:flex">
                  <div className="text-3xl font-extrabold font-playfair text-midnight leading-none">
                    22<span className="text-gold">+</span>
                  </div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-snug">
                    Years of<br />Excellence
                  </div>
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="flex gap-3 mt-8 justify-center">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-md hover:scale-105 focus:outline-none ${activeImg === i
                        ? 'border-gold ring-2 ring-gold/40 scale-105'
                        : 'border-white/50 opacity-60 hover:opacity-90'
                      }`}
                    aria-label={img.label}
                  >
                    <img src={img.src} alt={img.label} className="w-full h-full object-cover object-top" />
                    {activeImg === i && (
                      <div className="absolute bottom-0 inset-x-0 bg-gold/90 text-midnight text-[8px] font-bold text-center py-0.5 uppercase tracking-wide">
                        {img.label}
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <p className="text-center text-xs text-gray-400 mt-3">Click image to zoom · Use arrows to browse</p>
            </div>

            {/* ── RIGHT: Bio content ───────────────────────────────────────────── */}
            <div className="reveal-right">
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-playfair font-semibold text-midnight mb-4 leading-[1.1]">
                Dedicated to Your<br />
                Family's <span className="text-gold italic">Security</span>
              </h2>

              <div className="flex items-center gap-4 mb-8">
                <div className="h-0.5 w-16 bg-gold" />
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Jigisha Kiran Shah</span>
              </div>

              <p className="text-base lg:text-lg text-gray-600 mb-5 leading-relaxed font-light">
                For over two decades, I've been building futures — not just selling policies. Since 2004, I've served families across Gujarat from my office at <strong className="text-midnight font-medium">Orchid Legacy, D3-1303, Applewoods Township, Shela, Ahmedabad</strong> — helping them navigate life's biggest financial decisions with confidence.
              </p>

              <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed font-light">
                As a <strong className="text-midnight font-semibold">2-time MDRT achiever (2023 &amp; 2024)</strong>, I architect personalized wealth-protection strategies — from retirement planning and pension optimization to salary protection and comprehensive life insurance. Every recommendation is rooted in deep expertise and unwavering ethics.
              </p>

              {/* Highlights */}
              <ul className="space-y-3 mb-10">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-10 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center group">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-gold transition-all duration-300">
                      <stat.icon className="w-5 h-5 text-gold group-hover:text-midnight transition-colors" />
                    </div>
                    <div className="text-xl font-extrabold text-midnight font-playfair leading-none mb-1">{stat.value}</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Google trust badge */}
              <a
                href="https://share.google/VQAFgVhdk114U2ozd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 mb-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-gold/40 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <div className="text-left">
                  <div className="text-sm font-bold text-midnight flex items-center gap-1.5 group-hover:text-gold transition-colors">
                    View Google Business Reviews
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                    <span className="text-gold text-xs">★★★★★</span>
                    <span className="font-bold text-midnight">5.0</span>
                    <span>• 100+ reviews</span>
                  </div>
                </div>
              </a>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-midnight text-white font-semibold rounded-xl hover:bg-gold hover:text-midnight transition-all duration-300 shadow-lg hover:shadow-gold/30 hover:-translate-y-1 group"
                >
                  <span>Schedule a Meeting</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+919824025435"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-midnight/20 text-midnight font-semibold rounded-xl hover:border-gold hover:text-gold transition-all duration-300"
                >
                  +91 98240 25435
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Google Business Sample Photos Strip ──────────────────────────────── */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container w-full">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-playfair font-semibold text-midnight">
                From Our <span className="text-gold">Google Business</span> Page
              </h3>
              <p className="text-sm text-gray-400 mt-1">Real photos from our office and client sessions</p>
            </div>
            <a
              href="https://share.google/VQAFgVhdk114U2ozd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-midnight transition-colors group"
            >
              See all on Google
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
