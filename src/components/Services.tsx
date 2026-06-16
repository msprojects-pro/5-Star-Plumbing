import { Droplets, Bath, Hammer, AlertTriangle, Waves, Search } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'General Plumbing',
    description: 'Expert leaking pipe repairs, valve replacements, and full system health checks.',
    icon: Droplets,
  },
  {
    title: 'Bathroom Installation',
    description: 'Complete bathroom refurbishments from design to final tiling and fit-out.',
    icon: Bath,
  },
  {
    title: 'Taps, Sinks & Toilets',
    description: 'Quick replacement or repair of all kitchen and bathroom sanitaryware.',
    icon: Hammer,
  },
  {
    title: 'Leaks & Repairs',
    description: 'Trace and access specialists for hidden leaks and burst pipe emergencies.',
    icon: AlertTriangle,
  },
  {
    title: 'Emergency Plumbing',
    description: 'Available 24/7 for urgent plumbing issues across South Wales.',
    icon: Waves,
  },
  {
    title: 'Drainage',
    description: 'Clearing blocked sinks, baths, and toilets efficiently with professional tools.',
    icon: Search,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
            <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight font-display">
              Professional Solutions for Every Plumbing Need
            </p>
            <p className="text-lg text-slate-600">
              We cover all aspects of domestic plumbing with a focus on quality and reliability. 
              <span className="font-semibold text-slate-900"> Please note: we do not handle gas or boiler work.</span>
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-blue-900 mb-4 font-display leading-tight">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
