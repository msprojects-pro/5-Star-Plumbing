import { Star } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white px-8 py-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] tracking-wide">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <span className="font-bold text-slate-300">© {currentYear} 5 ST★R PLUMBING & HEATING</span>
          <span className="flex items-center gap-2">
            <strong className="text-blue-400">Email:</strong> 
            <a href="mailto:info@5starplumbing.uk" className="hover:text-white transition-colors">info@5starplumbing.uk</a>
          </span>
          <span className="flex items-center gap-2 text-slate-400">
            <strong className="text-blue-400">Service Area:</strong> 
            South Wales (Cardiff & Surrounds)
          </span>
        </div>
        
        <div className="flex gap-6 uppercase font-black text-blue-500 tracking-widest">
           <a href="https://web.facebook.com/5StarPlumbing.co.uk/" target="_blank" rel="no-referrer" className="hover:text-white transition-colors">Facebook</a>
           <span className="opacity-20">|</span>
           <span className="text-slate-500 opacity-50">10+ Years Experience</span>
        </div>
      </div>
    </footer>
  );
}
