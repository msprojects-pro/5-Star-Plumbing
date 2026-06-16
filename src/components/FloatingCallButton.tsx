import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href="tel:+447821851361"
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 animate-bounce active:scale-95 transition-transform"
      >
        <Phone className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}
