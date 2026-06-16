import { motion } from 'motion/react';
import { Award, ThumbsUp, Map, Briefcase } from 'lucide-react';
import aboutImage from '../assets/images/plumber_working_tools_1781582931395.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={aboutImage}
              alt="Plumber at work"
              referrerPolicy="no-referrer"
              className="rounded-3xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-800 rounded-3xl -z-0 opacity-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-blue-600 font-extrabold uppercase tracking-widest text-[10px] mb-2 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-blue-600"></span>
              About Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight font-display">
              Over 10 Years of Excellence in South Wales
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-blue-600 pl-6 bg-slate-50 py-4 rounded-r-2xl">
              "We pride ourselves on transparent pricing, meticulous craftsmanship, and a 100% customer recommendation rate across Cardiff and surrounding areas."
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you need a full bathroom refurbishment or simply have a dripping tap, we treat every job with the same level of professional care and attention. We are fully insured and dedicated to high-standard plumbing work.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">10+ Years</p>
                  <p className="text-xs text-slate-500">Industry Experience</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <ThumbsUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">100% Rec.</p>
                  <p className="text-xs text-slate-500">Customer Satisfaction</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <Map className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">South Wales</p>
                  <p className="text-xs text-slate-500">Service Coverage</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Expert</p>
                  <p className="text-xs text-slate-500">Craftsmanship</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
