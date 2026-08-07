// 'use client';
// import { motion } from 'framer-motion';
// import { ArrowUpRight } from 'lucide-react';
// import Cursor from '@/components/Cursor';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// const projects = [
//   { name: "Cafelura", type: "Restaurant Website", metric: "+180% Online Orders", tech: ["Next.js", "Stripe", "Sanity"], align: "self-start", initialX: -60 },
//   { name: "HealthPlus", type: "Healthcare App", metric: "50K+ Downloads", tech: ["React Native", "Node.js", "MongoDB"], align: "self-end", initialX: 60 },
//   { name: "Buildify", type: "Real Estate Platform", metric: "4.8★ User Rating", tech: ["Next.js", "Prisma", "PostgreSQL"], align: "self-start", initialX: -60 },
//   { name: "Shopora", type: "E-Commerce Store", metric: "+300% Leads", tech: ["Shopify", "React", "Klaviyo"], align: "self-end", initialX: 60 }
// ];

// export default function WorkPage() {
//   return (
//     <main className="bg-white text-black min-h-screen pt-28 bg-chex-light">
//       <Cursor />
//       <Navbar />
      
//       <section className="py-24 px-6 md:px-24">
//         <div className="max-w-6xl mx-auto">
//           <div className="mb-20">
//             <span className="text-xs uppercase tracking-widest font-bold block mb-2">Our Portfolio</span>
//             <h1 className="text-5xl md:text-8xl font-black tracking-tight">Real Projects. Real Impact.</h1>
//           </div>

//           <div className="flex flex-col space-y-12 md:space-y-16">
//             {projects.map((work, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, x: work.initialX, y: 30 }}
//                 whileInView={{ opacity: 1, x: 0, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className={`w-full md:w-[55%] ${work.align}`}
//               >
//                 <div className="group border-2 border-black p-8 md:p-12 bg-white hover:bg-black hover:text-white transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
//                   <div className="flex justify-between items-center mb-6">
//                     <span className="text-xs uppercase tracking-widest font-bold">{work.type}</span>
//                     <span className="text-xs font-mono font-bold">{work.metric}</span>
//                   </div>
//                   <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-between">
//                     {work.name}
//                     <ArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                   </h3>
//                   <div className="flex flex-wrap gap-2 pt-2">
//                     {work.tech.map((t, i) => (
//                       <span key={i} className="text-[10px] uppercase tracking-widest border border-current px-2.5 py-1">
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }





// By parth 

'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const projects = [
  { 
    name: "Jenil's Sabras Masala", 
    type: "E-Commerce Store", 
    metric: "Global Catalog", 
    tech: ["Shopify", "React", "Tailwind CSS"], 
    align: "self-start", 
    initialX: -60,
    link: "https://jenilsmasala.com/"
  },
  { 
    name: "Al-Buraq Perfumes", 
    type: "Mobile Application", 
    metric: "Play Store", 
    tech: ["Flutter", "Dart", "Cloud"], 
    align: "self-end", 
    initialX: 60,
    link: "https://play.google.com/store/apps/details?id=io.alburaq.app&hl=en_IN"
  },
  { 
    name: "Gurukrupa Enterprises", 
    type: "Business Website", 
    metric: "Corporate", 
    tech: ["Next.js", "React", "Tailwind CSS"], 
    align: "self-start", 
    initialX: -60,
    link: "https://gurukripaenterprise.com/"
  },
  { 
    name: "Universe Classes", 
    type: "Educational Platform", 
    metric: "EdTech", 
    tech: ["Next.js", "React", "Tailwind CSS"], 
    align: "self-end", 
    initialX: 60,
    link: "#"
  },
  { 
    name: "Uniserve Career Counseling", 
    type: "Consulting Portal", 
    metric: "Services", 
    tech: ["Next.js", "React", "Tailwind CSS"], 
    align: "self-start", 
    initialX: -60,
    link: "#"
  },
  { 
    name: "HM Consultech", 
    type: "Corporate Website", 
    metric: "Consulting", 
    tech: ["Next.js", "React", "Tailwind CSS"], 
    align: "self-end", 
    initialX: 60,
    link: "https://www.hmconsultech.com/"
  },
  { 
    name: "Beacon Academy", 
    type: "Educational Website", 
    metric: "Academy", 
    tech: ["Next.js", "React", "Tailwind CSS"], 
    align: "self-start", 
    initialX: -60,
    link: "#"
  }
];

export default function WorkPage() {
  return (
    <main className="bg-white text-black min-h-screen pt-28 bg-chex-light">
      <Cursor />
      <Navbar />
      
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <span className="text-xs uppercase tracking-widest font-bold block mb-2">Our Portfolio</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tight">Real Projects. Real Impact.</h1>
          </div>

          <div className="flex flex-col space-y-12 md:space-y-16">
            {projects.map((work, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: work.initialX, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`w-full md:w-[55%] ${work.align}`}
              >
                {/* Replaced inner div with anchor tag to make the whole card clickable */}
                <a 
                  href={work.link}
                  target={work.link !== "#" ? "_blank" : "_self"}
                  rel={work.link !== "#" ? "noopener noreferrer" : ""}
                  className="block group border-2 border-black p-8 md:p-12 bg-white hover:bg-black hover:text-white transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs uppercase tracking-widest font-bold">{work.type}</span>
                    <span className="text-xs font-mono font-bold">{work.metric}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-between">
                    {work.name}
                    <ArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {work.tech.map((t, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-widest border border-current px-2.5 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}