import { ArrowRight, Phone, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import heroImage from '../assets/images/modern_plumbing_hero_1781583920428.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden scroll-mt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional Plumbing Service"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-block bg-blue-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-white">
              Est. 10+ Years
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight text-white font-display">
              Expert Plumbing Across South Wales
            </h1>
            <p className="text-slate-200 text-lg md:text-xl leading-relaxed">
              Expert bathroom installations, quick repairs & emergency plumbing. Reliable service with a personal touch. <span className="text-blue-400 font-bold underline italic tracking-tight">No Gas Work.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors">
                Get a Free Quote
              </button>
              <button className="bg-blue-700/50 backdrop-blur text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-blue-700/70 transition-colors">
                View Portfolio
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            <div className="flex items-center gap-4 text-white">
              <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold">Always Open</p>
                <p className="text-xs text-slate-400">Emergency Service</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold">All South Wales</p>
                <p className="text-xs text-slate-400">Cardiff & Surrounds</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold">10+ Years</p>
                <p className="text-xs text-slate-400">Expert Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
