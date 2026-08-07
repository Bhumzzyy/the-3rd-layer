'use client';
import { motion } from 'framer-motion';

const quotes = [
  { text: "3rd Layer transformed our online presence and helped us increase leads by 300%.", author: "Rahul Mehta", role: "CEO, Buildify" },
  { text: "The app they built for us is fast, user friendly, and our customers love it.", author: "Priya Shah", role: "Founder, HealthPlus" },
  { text: "Professional, creative, and highly responsive team. Highly recommended.", author: "Arjun Patel", role: "Marketing Head, Shopora" }
];

export default function Testimonials() {
  return (
    <section id="about" className="py-24 px-6 md:px-24 bg-white text-black border-b border-black bg-chex-light">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs uppercase tracking-widest font-bold block mb-2">What clients say</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-16">Trusted by Businesses Worldwide</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((q, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-2 border-black p-8 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
            >
              <p className="text-sm md:text-base font-light italic mb-8">"{q.text}"</p>
              <div>
                <div className="font-bold">{q.author}</div>
                <div className="text-xs uppercase tracking-widest text-black/60">{q.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}