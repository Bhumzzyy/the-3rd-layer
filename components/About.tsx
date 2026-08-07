// 'use client';
// import { motion } from 'framer-motion';

// export default function About() {
//   return (
//     <section className="py-32 px-6 md:px-24 bg-white text-black border-b border-neutral-200">
//       <div className="max-w-5xl mx-auto space-y-24">
//         <div className="text-sm tracking-widest text-neutral-500 uppercase">01 / About Our Process</div>
//         {[
//           { title: "Design", text: "We craft ultra-minimal, high-contrast digital architectures tailored for pure visual impact and seamless human interaction." },
//           { title: "Development", text: "Engineered using cutting-edge frameworks like Next.js and Tailwind, ensuring lightning-fast performance and clean, robust code." },
//           { title: "Deployment", text: "Optimized pipelines, cloud infrastructure hardening, and flawless execution to launch your platform seamlessly into production." }
//         ].map((item, index) => (
//           <motion.div 
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-neutral-200 pb-16"
//           >
//             <h2 className="text-4xl md:text-6xl font-bold tracking-tight">{item.title}</h2>
//             <p className="text-neutral-600 text-lg md:text-xl font-light leading-relaxed">{item.text}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }





'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-24 bg-black text-white border-b border-white bg-chex-dark">
      <div className="max-w-5xl mx-auto space-y-24">
        <div className="text-sm tracking-widest text-white uppercase font-bold">01 / About Our Process</div>
        {[
          { title: "Design", text: "We craft ultra-minimal, high-contrast digital architectures tailored for pure visual impact and seamless human interaction." },
          { title: "Development", text: "Engineered using cutting-edge frameworks like Next.js and Tailwind, ensuring lightning-fast performance and clean, robust code." },
          { title: "Deployment", text: "Optimized pipelines, cloud infrastructure hardening, and flawless execution to launch your platform seamlessly into production." }
        ].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index !== 2 ? 'border-b border-white pb-16' : 'pb-0'}`}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">{item.title}</h2>
            <p className="text-white text-lg md:text-xl font-light leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}