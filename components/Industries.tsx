'use client';
import { motion } from 'framer-motion';

const industries = [
  { name: "Real Estate", stack: ["Property Listings", "Virtual Tours", "CRM", "SEO"] },
  { name: "Healthcare", stack: ["Appointment Booking", "Patient Portal", "HIPAA-ready", "SEO"] },
  { name: "Education", stack: ["LMS", "Admissions Portal", "Content Hub", "Analytics"] },
  { name: "Restaurant", stack: ["Online Ordering", "Instagram", "Google Maps", "Reviews"] },
  { name: "E-Commerce", stack: ["Storefront", "Payments", "Inventory", "Marketing"] },
  { name: "Manufacturing", stack: ["Catalogs", "Lead Gen", "Dealer Portal", "Analytics"] }
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 px-6 md:px-24 bg-white text-black border-b border-black bg-chex-light">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs uppercase tracking-widest font-bold block mb-2">Industries we serve</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-16">Solutions Tailored for Every Industry</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-2 border-black p-8 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">{ind.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {ind.stack.map((item, i) => (
                  <span key={i} className="bg-black text-white text-[10px] uppercase tracking-widest px-2.5 py-1 font-bold">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}