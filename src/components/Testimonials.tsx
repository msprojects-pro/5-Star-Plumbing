import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'James Roberts',
    location: 'Cardiff',
    text: 'Fantastic service from 5 Star Plumbing. They installed our new bathroom and the finish was incredible. Extremely professional and clean throughout the whole process.',
  },
  {
    name: 'Sarah Evans',
    location: 'Newport',
    text: 'Found a leak on a Sunday morning and they were here within the hour. Fixed the issue quickly and for a very reasonable price. Highly recommend!',
  },
  {
    name: 'David Morgan',
    location: 'Bridgend',
    text: 'Had all the taps and toilets replaced in our new house. The attention to detail was great and they even gave us some good advice on maintenance.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
            <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight font-display">What Our Customers Say</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <div className="mb-6 relative">
                <Quote className="w-8 h-8 text-blue-100 absolute -top-4 -left-4" />
                <p className="text-slate-700 italic relative z-10 leading-relaxed">
                  "{t.text}"
                </p>
              </div>
              <div className="mt-auto">
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
