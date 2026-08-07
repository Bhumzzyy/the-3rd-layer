// 'use client';
// import { motion } from 'framer-motion';

// const steps = [
//   { step: "01", title: "Discover", desc: "Understanding your business goals and requirements." },
//   { step: "02", title: "Research", desc: "Strategy, roadmap, and competitive planning." },
//   { step: "03", title: "Design", desc: "UI/UX designs that create experience and value." },
//   { step: "04", title: "Develop", desc: "Clean, scalable code that performs and lasts." },
//   { step: "05", title: "Testing", desc: "Deployment, QA, and a smooth go-live." },
//   { step: "06", title: "Launch", desc: "Shipped, monitored, and ready for real traffic." },
//   { step: "07", title: "Support", desc: "Ongoing support, updates, and optimization." }
// ];

// export default function Process() {
//   return (
//     <section id="process" className="py-24 px-6 md:px-24 bg-black text-white border-b border-white bg-chex-dark">
//       <div className="max-w-6xl mx-auto">
//         <span className="text-xs uppercase tracking-widest font-bold block mb-2">Our process</span>
//         <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-16">A Simple & Effective Process That Works</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {steps.map((s, idx) => (
//             <motion.div 
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: idx * 0.08 }}
//               className="border border-white p-6 bg-black flex flex-col justify-between"
//             >
//               <span className="text-xs font-mono text-white/50 mb-8">{s.step}</span>
//               <div>
//                 <h3 className="text-xl font-bold mb-2">{s.title}</h3>
//                 <p className="text-xs text-white/80 font-light">{s.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';
import { motion } from 'framer-motion';

const steps = [
  { step: "01", title: "Discover", desc: "Understanding your business goals and requirements.", align: "md:flex-row" },
  { step: "02", title: "Research", desc: "Strategy, roadmap, and competitive planning.", align: "md:flex-row-reverse" },
  { step: "03", title: "Design", desc: "UI/UX designs that create experience and value.", align: "md:flex-row" },
  { step: "04", title: "Develop", desc: "Clean, scalable code that performs and lasts.", align: "md:flex-row-reverse" },
  { step: "05", title: "Testing", desc: "Deployment, QA, and a smooth go-live.", align: "md:flex-row" },
  { step: "06", title: "Launch", desc: "Shipped, monitored, and ready for real traffic.", align: "md:flex-row-reverse" },
  { step: "07", title: "Support", desc: "Ongoing support, updates, and optimization.", align: "md:flex-row" }
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 md:px-24 bg-white text-black border-b border-black bg-chex-light relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-sm tracking-widest text-black uppercase mb-4 font-bold">03 / Architecture & Workflow</div>
          <span className="text-xs uppercase tracking-widest text-black/60 font-bold block mb-2">Our process</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">A Simple & Effective Process That Works</h2>
        </div>

        {/* Zig-Zag Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-black -translate-x-1/2" />

          <div className="space-y-12 md:space-y-20 relative">
            {steps.map((s, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col md:${s.align} items-center justify-between w-full`}
              >
                {/* Content Box */}
                <div className="w-full md:w-[45%]">
                  <div className="group border-2 border-black p-8 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-all duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-mono font-bold px-2 py-1 border border-current">
                        STAGE {s.step}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-black group-hover:bg-white transition-colors animate-pulse" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 uppercase tracking-tight">{s.title}</h3>
                    <p className="text-xs md:text-sm text-black/80 group-hover:text-white/80 font-light leading-relaxed transition-colors">
                      {s.desc}
                    </p>
                  </div>
                </div>

                {/* Central Node Indicator */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-black items-center justify-center z-10">
                  <div className="w-2 h-2 bg-black rounded-full animate-ping" />
                </div>

                {/* Empty Spacer for alternating layout alignment */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}