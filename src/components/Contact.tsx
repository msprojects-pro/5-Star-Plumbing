import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight font-display">
              Ready to fix your <span className="text-blue-500">plumbing issues?</span>
            </h3>
            <p className="text-lg text-slate-400 mb-12 max-w-lg">
              Get in touch today for a free, no-obligation quote. We're always open for emergency services across South Wales.
            </p>

            <div className="space-y-8">
              <a href="tel:+447821851361" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Call Us Anytime</p>
                  <p className="text-xl font-bold">+44 7821 851361</p>
                </div>
              </a>
              <a href="mailto:info@5starplumbing.uk" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email Us</p>
                  <p className="text-xl font-bold">info@5starplumbing.uk</p>
                </div>
              </a>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Service Area</p>
                  <p className="text-xl font-bold">All South Wales</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <a 
                href="https://web.facebook.com/5StarPlumbing.co.uk/" 
                target="_blank" 
                rel="no-referrer"
                className="flex items-center gap-3 text-slate-400 hover:text-blue-500 transition-colors"
              >
                <Facebook className="w-6 h-6" />
                <span>Follow us on Facebook</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 flex flex-col justify-between"
          >
            <h2 className="text-blue-900 font-black text-2xl mb-8 border-b border-slate-100 pb-4">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 font-display">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium"
                    placeholder="e.g. Gareth Jones"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 font-display">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium"
                    placeholder="e.g. 07821 851361"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 font-display">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium"
                  placeholder="name@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 font-display">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium resize-none"
                  placeholder="Tell us about your plumbing needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white py-5 rounded-xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-900/20 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
