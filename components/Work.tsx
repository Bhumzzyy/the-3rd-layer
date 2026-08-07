// 'use client';
// import { motion } from 'framer-motion';
// import { ArrowUpRight, Globe, Smartphone, Layers, Code } from 'lucide-react';

// const projects = [
//   { 
//     name: "Apex Financial Web", 
//     type: "Website Platform", 
//     desc: "A high-performance trading platform built with real-time data streaming.",
//     icon: <Globe size={20} />,
//     align: "self-start",
//     initialX: -80 // Slide in from the left
//   },
//   { 
//     name: "Pulse Mobile App", 
//     type: "iOS & Android", 
//     desc: "Cross-platform mobile application featuring fluid gestural navigation.",
//     icon: <Smartphone size={20} />,
//     align: "self-end",
//     initialX: 80 // Slide in from the right
//   },
//   { 
//     name: "Vortex Analytics", 
//     type: "Enterprise SaaS", 
//     desc: "Deep data visualization dashboard engineered for massive scale.",
//     icon: <Layers size={20} />,
//     align: "self-start",
//     initialX: -80 // Slide in from the left
//   },
//   { 
//     name: "Nox Studio", 
//     type: "Brand Experience", 
//     desc: "Immersive digital portfolio showcasing avant-garde motion design.",
//     icon: <Code size={20} />,
//     align: "self-end",
//     initialX: 80 // Slide in from the right
//   },
// ];

// export default function Work() {
//   return (
//     <section className="py-24 px-6 md:px-24 bg-black text-white border-b border-neutral-900 overflow-hidden">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-sm tracking-widest text-neutral-500 uppercase mb-12">02 / Featured Work</div>

//         {/* Reduced spacing between cards */}
//         <div className="flex flex-col space-y-8 md:space-y-12">
//           {projects.map((work, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, x: work.initialX, y: 30 }}
//               whileInView={{ opacity: 1, x: 0, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.7, ease: "easeOut" }}
//               className={`w-full md:w-[52%] ${work.align}`}
//             >
//               <div className="group border border-neutral-800 p-8 md:p-10 h-[340px] md:h-[380px] flex flex-col justify-between bg-neutral-950 hover:border-white transition-all duration-500 cursor-pointer rounded-xl">
//                 <div className="flex justify-between items-center text-neutral-500 group-hover:text-white transition-colors">
//                   <span className="text-xs md:text-sm uppercase tracking-widest">{work.type}</span>
//                   <div className="p-3 rounded-full border border-neutral-800 group-hover:border-white transition-colors">
//                     {work.icon}
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-neutral-400 text-sm md:text-base font-light mb-3">{work.desc}</p>
//                   <h3 className="text-2xl md:text-4xl font-bold flex items-center justify-between">
//                     {work.name}
//                     <ArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                   </h3>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// 'use client';
// import { motion } from 'framer-motion';
// import { ArrowUpRight, Globe, Smartphone, Layers, Code } from 'lucide-react';

// const projects = [
//   { 
//     name: "Apex Financial Web", 
//     type: "Website Platform", 
//     desc: "A high-performance trading platform built with real-time data streaming.",
//     icon: <Globe size={20} />,
//     align: "self-start",
//     initialX: -80 
//   },
//   { 
//     name: "Pulse Mobile App", 
//     type: "iOS & Android", 
//     desc: "Cross-platform mobile application featuring fluid gestural navigation.",
//     icon: <Smartphone size={20} />,
//     align: "self-end",
//     initialX: 80 
//   },
//   { 
//     name: "Vortex Analytics", 
//     type: "Enterprise SaaS", 
//     desc: "Deep data visualization dashboard engineered for massive scale.",
//     icon: <Layers size={20} />,
//     align: "self-start",
//     initialX: -80 
//   },
//   { 
//     name: "Nox Studio", 
//     type: "Brand Experience", 
//     desc: "Immersive digital portfolio showcasing avant-garde motion design.",
//     icon: <Code size={20} />,
//     align: "self-end",
//     initialX: 80 
//   },
// ];

// export default function Work() {
//   return (
//     <section className="py-24 px-6 md:px-24 bg-black text-white border-b border-white overflow-hidden bg-chex-dark">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-sm tracking-widest text-white uppercase mb-12 font-bold">02 / Featured Work</div>

//         <div className="flex flex-col space-y-8 md:space-y-12">
//           {projects.map((work, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, x: work.initialX, y: 30 }}
//               whileInView={{ opacity: 1, x: 0, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.7, ease: "easeOut" }}
//               className={`w-full md:w-[52%] ${work.align}`}
//             >
//               <div className="group border border-white p-8 md:p-10 h-[340px] md:h-[380px] flex flex-col justify-between bg-black hover:bg-white hover:text-black transition-all duration-500 cursor-pointer rounded-none">
//                 <div className="flex justify-between items-center text-white group-hover:text-black transition-colors">
//                   <span className="text-xs md:text-sm uppercase tracking-widest font-semibold">{work.type}</span>
//                   <div className="p-3 rounded-none border border-white group-hover:border-black transition-colors">
//                     {work.icon}
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-white group-hover:text-black text-sm md:text-base font-light mb-3 transition-colors">{work.desc}</p>
//                   <h3 className="text-2xl md:text-4xl font-bold flex items-center justify-between text-white group-hover:text-black transition-colors">
//                     {work.name}
//                     <ArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                   </h3>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// 'use client';
// import { motion } from 'framer-motion';
// import { ArrowUpRight } from 'lucide-react';

// const projects = [
//   { name: "Cafelura", type: "Restaurant Website", metric: "+180% Online Orders", tech: ["Next.js", "Stripe", "Sanity"], align: "self-start", initialX: -60 },
//   { name: "HealthPlus", type: "Healthcare App", metric: "50K+ Downloads", tech: ["React Native", "Node.js", "MongoDB"], align: "self-end", initialX: 60 },
//   { name: "Buildify", type: "Real Estate Platform", metric: "4.8★ User Rating", tech: ["Next.js", "Prisma", "PostgreSQL"], align: "self-start", initialX: -60 },
//   { name: "Shopora", type: "E-Commerce Store", metric: "+300% Leads", tech: ["Shopify", "React", "Klaviyo"], align: "self-end", initialX: 60 }
// ];

// export default function Work() {
//   return (
//     <section id="work" className="py-24 px-6 md:px-24 bg-white text-black border-b border-black bg-chex-light">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex justify-between items-end mb-16">
//           <div>
//             <span className="text-xs uppercase tracking-widest font-bold block mb-2">Featured projects</span>
//             <h2 className="text-4xl md:text-6xl font-black tracking-tight">Real Projects. Real Impact.</h2>
//           </div>
//           <a href="#contact" className="hidden md:inline-block text-xs uppercase tracking-widest font-bold underline">View All Projects →</a>
//         </div>

//         <div className="flex flex-col space-y-8 md:space-y-12">
//           {projects.map((work, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, x: work.initialX, y: 30 }}
//               whileInView={{ opacity: 1, x: 0, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className={`w-full md:w-[55%] ${work.align}`}
//             >
//               <div className="group border-2 border-black p-8 md:p-10 bg-white hover:bg-black hover:text-white transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
//                 <div className="flex justify-between items-center mb-6">
//                   <span className="text-xs uppercase tracking-widest font-bold">{work.type}</span>
//                   <span className="text-xs font-mono font-bold">{work.metric}</span>
//                 </div>
//                 <h3 className="text-3xl font-bold mb-4 flex items-center justify-between">
//                   {work.name}
//                   <ArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                 </h3>
//                 <div className="flex flex-wrap gap-2 pt-2">
//                   {work.tech.map((t, i) => (
//                     <span key={i} className="text-[10px] uppercase tracking-widest border border-current px-2 py-0.5">
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
