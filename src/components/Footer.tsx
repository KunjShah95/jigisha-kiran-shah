const Footer = () => {
    const quickLinks = [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'About', href: '#about' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'Contact', href: '#contact' }
    ]
  
    const services = [
      { label: 'Term Life Assurance', href: '#services' },
      { label: 'Wealth Endowment', href: '#services' },
      { label: 'Investment Linked (ULIP)', href: '#services' },
      { label: 'Retirement Concierge', href: '#services' },
      { label: 'Child Education Legacy', href: '#services' }
    ]
  
    const resources = [
      { label: 'LIC Official Website', href: 'https://licindia.in' },
      { label: 'Premium Calculator', href: '#contact' },
      { label: 'Claim Status', href: 'https://licindia.in' },
      { label: 'Policy Status', href: 'https://licindia.in' }
    ]
  
    return (
      <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-blue-900 rounded-lg flex items-center justify-center font-bold font-playfair text-lg">JK</div>
                <div className="font-playfair font-bold text-xl">
                  Jigisha Kiran<span className="text-gold"> Shah</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Trusted LIC Advisor in Ahmedabad with 22+ years of legacy. 
                Located at Orchid Legacy, D3-1303, Applewoods Twp Main Rd, Shela, Gujarat 380058.
              </p>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-gold font-bold">★ 5.0</span>
                <span className="text-gray-400 text-sm">| 83+ Reviews on Justdial</span>
              </div>
              <p className="text-gray-500 text-sm mb-6">Double MDRT (USA) achiever dedicated to protecting your family's future.</p>
              <div className="flex gap-4">
                {/* Social Icons with working links */}
                <a href="https://www.justdial.com/Ahmedabad/Jigisha-Kiran-Shah-Near-Jayhind-High-School-Maninagar-Daxini-Society/079PXX79-XX79-130706134100-Z7T3_BZDET" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-gold transition-colors" title="Justdial Reviews">
                  <span className="sr-only">Justdial</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                </a>
                <a href="https://www.youtube.com/@jigishakiranshah4636" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-gold transition-colors" title="YouTube Channel">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 9.71a8.5 8.5 0 0 0-.91-4.13 2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3 2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48 9.55 9.55 0 0 0 .3 2 3.14 3.14 0 0 0 .71 1.36 2.86 2.86 0 0 0 1.49.78 45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78 2.49 2.49 0 0 0 .61-1 10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z"/></svg>
                </a>
                <a href="https://wa.me/919824025435" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-gold transition-colors" title="WhatsApp">
                  <span className="sr-only">WhatsApp</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
                <a href="tel:+919824025435" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-gold transition-colors" title="Call Now">
                  <span className="sr-only">Phone</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-playfair font-bold text-lg mb-6">Quick Links</h4>
              <nav className="flex flex-col gap-3">
                {quickLinks.map((link, index) => (
                  <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            
            <div>
              <h4 className="font-playfair font-bold text-lg mb-6">Our Services</h4>
              <nav className="flex flex-col gap-3">
                {services.map((link, index) => (
                  <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            
            <div>
              <h4 className="font-playfair font-bold text-lg mb-6">Resources</h4>
              <nav className="flex flex-col gap-3">
                {resources.map((link, index) => (
                  <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm" target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Jigisha Kiran Shah. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
