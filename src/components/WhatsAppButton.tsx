import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919824025435"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-4 md:right-8 z-40 hidden md:flex items-center gap-3 px-4 py-3 bg-whatsapp text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:shadow-[0_8px_40px_rgb(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300 group animate-fade-in-up"
      aria-label="Contact on WhatsApp"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-white/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <MessageCircle size={28} className="fill-current relative z-10" aria-hidden="true" />
      <span className="font-bold max-w-0 overflow-hidden group-hover:max-w-xs transition-[max-width] duration-500 ease-in-out whitespace-nowrap relative z-10 text-lg">Chat With Us</span>
    </a>
  );
};

export default WhatsAppButton;
