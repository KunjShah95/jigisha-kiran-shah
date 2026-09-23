import { Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const quickLinks = [
      { label: 'Home', to: '/' },
      { label: 'Services', to: '/services' },
      { label: 'About', to: '/about' },
      { label: 'Testimonials', to: '/reviews' },
      { label: 'Stories & Guides', to: '/blog' },
      { label: 'Contact', to: '/contact' }
    ]

    const services = [
      { label: 'Term Life Assurance', to: '/services' },
      { label: 'Wealth Endowment', to: '/services' },
      { label: 'Investment Linked (ULIP)', to: '/services' },
      { label: 'Retirement Concierge', to: '/services' },
      { label: 'Child Education Legacy', to: '/services' }
    ]

    const resources: Array<{ label: string; to?: string; href?: string }> = [
      { label: 'LIC Official Website', href: 'https://licindia.in' },
      { label: 'Claim Assistance', href: 'https://licindia.in' },
      { label: 'Policy Status', href: 'https://licindia.in' }
    ]

    return (
      <footer className="bg-midnight text-white pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
        {/* Background effects */}
        <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />
        <div aria-hidden="true" className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-dark/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <Link to="/" className="flex items-center gap-3 min-w-0" aria-label="Jigisha Kiran Shah — home">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center font-bold font-display text-base sm:text-xl text-midnight shadow-lg shrink-0">JK</div>
                  <div className="font-display font-bold text-xl sm:text-2xl leading-tight">
                    Jigisha Kiran<span className="text-gold"> Shah</span>
                  </div>
                </Link>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 font-light">
                Trusted LIC Advisor in Ahmedabad with 22+ years of legacy. 
                Safeguarding your future and securing your dreams with personalized insurance solutions.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-sm text-gray-300 group">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                    <span className="group-hover:text-white transition-colors">Orchid Legacy, D3-1303, Applewoods Township, Shela, Ahmedabad, Gujarat 380058</span>
                </div>
                <a href="tel:+919824025435" className="flex items-center gap-3 text-sm text-gray-300 group hover:text-gold transition-colors">
                    <Phone className="w-5 h-5 text-gold shrink-0 group-hover:text-white transition-colors" />
                    <span>+91 98240 25435</span>
                </a>
              </div>

              <div className="flex gap-3">
                <a href="https://share.google/VQAFgVhdk114U2ozd" target="_blank" rel="noopener noreferrer" aria-label="Google Business Reviews" className="w-11 h-11 bg-white/5 rounded-lg flex items-center justify-center hover:bg-gold hover:text-midnight transition-all duration-300" title="Google Business Reviews">
                  <span className="sr-only">Google Business</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@jigishakiranshah4636" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel" className="w-11 h-11 bg-white/5 rounded-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300" title="YouTube Channel">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 9.71a8.5 8.5 0 0 0-.91-4.13 2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3 2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48 9.55 9.55 0 0 0 .3 2 3.14 3.14 0 0 0 .71 1.36 2.86 2.86 0 0 0 1.49.78 45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78 2.49 2.49 0 0 0 .61-1 10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/jigisha-kiran-shah-4b48851b2" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="w-11 h-11 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all duration-300" title="LinkedIn Profile">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z"/></svg>
                </a>
                <a href="https://wa.me/919824025435" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="w-11 h-11 bg-white/5 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300" title="WhatsApp">
                  <span className="sr-only">WhatsApp</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-gold">Quick Links</h4>
              <nav aria-label="Quick links" className="flex flex-col gap-3">
                {quickLinks.map((link, index) => (
                  <Link key={index} to={link.to} className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm flex items-center gap-2">
                    <span aria-hidden="true" className="w-1 h-1 rounded-full bg-gold" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-gold">Our Expertise</h4>
              <nav aria-label="Services" className="flex flex-col gap-3">
                {services.map((link, index) => (
                  <Link key={index} to={link.to} className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-gold">Resources</h4>
              <nav aria-label="Resources" className="flex flex-col gap-3">
                {resources.map((link, index) => (
                  link.to ? (
                    <Link key={index} to={link.to} className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm">
                      {link.label}
                    </Link>
                  ) : (
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm">
                      {link.label}
                    </a>
                  )
                ))}
              </nav>

              <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/5">
                <p className="text-xs text-gray-300 mb-2 font-bold uppercase tracking-wider">Certifications</p>
                <div className="flex flex-wrap gap-2">
                    <div className="px-2 py-1 bg-gold/10 text-gold text-[11px] font-bold rounded border border-gold/20">2 Times MDRT</div>
                    <div className="px-2 py-1 bg-gold/10 text-gold text-[11px] font-bold rounded border border-gold/20">LIC Club</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col gap-4">
            <nav aria-label="Areas served" className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="text-gray-400">Areas served:</span>
              <Link to="/areas/shela" className="text-gray-300 hover:text-white transition-colors">Shela</Link>
              <Link to="/areas/south-bopal" className="text-gray-300 hover:text-white transition-colors">South Bopal</Link>
              <Link to="/areas/bopal" className="text-gray-300 hover:text-white transition-colors">Bopal</Link>
              <Link to="/areas/satellite" className="text-gray-300 hover:text-white transition-colors">Satellite</Link>
              <Link to="/areas/sg-highway" className="text-gray-300 hover:text-white transition-colors">SG Highway</Link>
              <Link to="/areas/science-city" className="text-gray-300 hover:text-white transition-colors">Science City</Link>
              <Link to="/areas" className="text-gold hover:text-white transition-colors">All areas →</Link>
            </nav>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Jigisha Kiran Shah. All rights reserved.
            </p>
          </div>
          </div>
        </div>
      </footer>
    )
  }

  export default Footer
