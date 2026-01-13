import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a
      href="https://wa.me/919824025435"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:shadow-[0_8px_40px_rgb(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-500 group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <MessageCircle size={28} className="fill-current relative z-10" />
      <span className="font-bold max-w-0 overflow-hidden group-hover:max-w-xs transition-[max-width] duration-500 ease-in-out whitespace-nowrap relative z-10 text-lg">Chat With Us</span>
    </a>
  );
};

export default WhatsAppButton;
