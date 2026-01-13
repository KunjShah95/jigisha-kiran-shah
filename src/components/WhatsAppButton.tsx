import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919824025435"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl hover:bg-green-600 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
      <MessageCircle size={32} className="fill-current" />
    </a>
  );
};

export default WhatsAppButton;
