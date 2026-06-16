import { motion } from 'motion/react';
import bathroomImage from '../assets/images/bathroom_gallery_1_1781582913056.jpg';
import toolsImage from '../assets/images/plumber_working_tools_1781582931395.jpg';

const images = [
  {
    src: bathroomImage,
    title: 'Modern Bathroom Refurbishment',
    category: 'Installation'
  },
  {
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    title: 'Luxury Shower Fitting',
    category: 'Renovation'
  },
  {
    src: 'https://images.pexels.com/photos/6447386/pexels-photo-6447386.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Kitchen Sink & Tap Install',
    category: 'Installation'
  },
  {
    src: 'https://images.pexels.com/photos/8142054/pexels-photo-8142054.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Modern Floating Toilet',
    category: 'Sanitaryware'
  },
  {
    src: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=800',
    title: 'Copper Pipework detail',
    category: 'Repair'
  },
  {
    src: toolsImage,
    title: 'Professional Service',
    category: 'General'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Gallery</h2>
            <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight font-display">Our Recent Work</p>
            <p className="text-lg text-slate-600">
              Take a look at some of our completed projects across Cardiff and South Wales.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative h-96 overflow-hidden rounded-3xl shadow-xl border border-slate-100 cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-blue-900 px-6 py-3 rounded-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                  View Work
                </button>
              </div>
            </motion.div>
          ))}
          <div className="bg-blue-900 rounded-3xl flex items-center justify-center text-white flex-col gap-2 p-8 shadow-xl">
             <span className="text-5xl font-black">50+</span>
             <span className="text-xs uppercase tracking-widest font-bold opacity-70">Bathrooms Installed</span>
             <div className="w-12 h-1 bg-blue-500 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
