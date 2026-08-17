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





// // By parth 

// 'use client';
// import { motion } from 'framer-motion';
// import { ArrowUpRight } from 'lucide-react';
// import Cursor from '@/components/Cursor';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// const projects = [
//   { 
//     name: "Jenil's Sabras Masala", 
//     type: "E-Commerce Store", 
//     metric: "Global Catalog", 
//     tech: ["Shopify", "React", "Tailwind CSS"], 
//     align: "self-start", 
//     initialX: -60,
//     link: "https://jenilsmasala.com/"
//   },
//   { 
//     name: "Al-Buraq Perfumes", 
//     type: "Mobile Application", 
//     metric: "Play Store", 
//     tech: ["Flutter", "Dart", "Cloud"], 
//     align: "self-end", 
//     initialX: 60,
//     link: "https://play.google.com/store/apps/details?id=io.alburaq.app&hl=en_IN"
//   },
//   { 
//     name: "Gurukrupa Enterprises", 
//     type: "Business Website", 
//     metric: "Corporate", 
//     tech: ["Next.js", "React", "Tailwind CSS"], 
//     align: "self-start", 
//     initialX: -60,
//     link: "https://gurukripaenterprise.com/"
//   },
//   { 
//     name: "Universe Classes", 
//     type: "Educational Platform", 
//     metric: "EdTech", 
//     tech: ["Next.js", "React", "Tailwind CSS"], 
//     align: "self-end", 
//     initialX: 60,
//     link: "#"
//   },
//   { 
//     name: "Uniserve Career Counseling", 
//     type: "Consulting Portal", 
//     metric: "Services", 
//     tech: ["Next.js", "React", "Tailwind CSS"], 
//     align: "self-start", 
//     initialX: -60,
//     link: "#"
//   },
//   { 
//     name: "HM Consultech", 
//     type: "Corporate Website", 
//     metric: "Consulting", 
//     tech: ["Next.js", "React", "Tailwind CSS"], 
//     align: "self-end", 
//     initialX: 60,
//     link: "https://www.hmconsultech.com/"
//   },
//   { 
//     name: "Beacon Academy", 
//     type: "Educational Website", 
//     metric: "Academy", 
//     tech: ["Next.js", "React", "Tailwind CSS"], 
//     align: "self-start", 
//     initialX: -60,
//     link: "#"
//   }
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
//                 {/* Replaced inner div with anchor tag to make the whole card clickable */}
//                 <a 
//                   href={work.link}
//                   target={work.link !== "#" ? "_blank" : "_self"}
//                   rel={work.link !== "#" ? "noopener noreferrer" : ""}
//                   className="block group border-2 border-black p-8 md:p-12 bg-white hover:bg-black hover:text-white transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
//                 >
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
//                 </a>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }



// by parth new try 
// 'use client';
// import { motion } from 'framer-motion';
// import { ArrowUpRight } from 'lucide-react';
// import Cursor from '@/components/Cursor';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// const projects = [
//   {
//     name: "Jenil's Sabras Masala",
//     type: "E-Commerce Store",
//     metric: "Global Catalog",
//     tech: ["Shopify", "React", "Tailwind CSS"],
//     align: "self-start",
//     initialX: -60,
//     link: "https://jenilsmasala.com/",
//     image: "/image/Jenils_sabras_masala_website.png"
//   },
//   {
//     name: "Al-Buraq Perfumes",
//     type: "Mobile Application",
//     metric: "Play Store",
//     tech: ["Flutter", "Dart", "Cloud"],
//     align: "self-end",
//     initialX: 60,
//     link: "https://play.google.com/store/apps/details?id=io.alburaq.app&hl=en_IN",
//     image: "/image/Al-Buraq_Samples.jpg"
//   },
//   {
//     name: "Gurukrupa Enterprises",
//     type: "Business Website",
//     metric: "Corporate",
//     tech: ["Next.js", "React", "Tailwind CSS"],
//     align: "self-start",
//     initialX: -60,
//     link: "https://gurukripaenterprise.com/",
//     image: "/image/gurukripaenterprise.com_.png"
//   },
//   {
//     name: "Universe Classes",
//     type: "Educational Platform",
//     metric: "EdTech",
//     tech: ["Next.js", "React", "Tailwind CSS"],
//     align: "self-end",
//     initialX: 60,
//     link: "#",
//     image: "/images/universe-classes.jpg"
//   },
//   {
//     name: "Uniserve Career Counseling",
//     type: "Consulting Portal",
//     metric: "Services",
//     tech: ["Next.js", "React", "Tailwind CSS"],
//     align: "self-start",
//     initialX: -60,
//     link: "#",
//     image: "/images/uniserve.jpg"
//   },
//   {
//     name: "HM Consultech",
//     type: "Corporate Website",
//     metric: "Consulting",
//     tech: ["Next.js", "React", "Tailwind CSS"],
//     align: "self-end",
//     initialX: 60,
//     link: "https://www.hmconsultech.com/",
//     image: "/image/www.hmconsultech.com_.png"
//   },
//   {
//     name: "Altius Education INC.",
//     type: "Educational Website",
//     metric: "Academy",
//     tech: ["Next.js", "React", "Tailwind CSS"],
//     align: "self-start",
//     initialX: -60,
//     link: "#",
//     image: "/images/beacon-academy.jpg"
//   }
// ];

// export default function WorkPage() {
//   return (
//     <main className="bg-white text-black min-h-screen pt-28 bg-chex-light">
//       <Cursor />
//       <Navbar />

//       <section className="py-24 px-6 md:px-24">
//         <div className="max-w-6xl mx-auto">
//           <div className="mb-32">
//             <span className="text-xs uppercase tracking-widest font-bold block mb-2">Our Portfolio</span>
//             <h1 className="text-5xl md:text-8xl font-black tracking-tight">Real Projects. Real Impact.</h1>
//           </div>

//           {/* Increased space-y to accommodate the pop-up images */}
//           <div className="flex flex-col space-y-32 md:space-y-48 mt-12">
//             {projects.map((work, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, x: work.initialX, y: 30 }}
//                 whileInView={{ opacity: 1, x: 0, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.6 }}
//                 className={`w-full md:w-[55%] ${work.align}`}
//               >
//                 {/* 
//                   The anchor tag controls the hover state using Framer Motion's "whileHover".
//                   No standard CSS comments inside the tag to prevent compilation errors.
//                 */}
//                 <motion.a
//                   href={work.link}
//                   target={work.link !== "#" ? "_blank" : "_self"}
//                   rel={work.link !== "#" ? "noopener noreferrer" : ""}
//                   initial="rest"
//                   whileHover="hover"
//                   animate="rest"
//                   className="relative block group cursor-pointer outline-none"
//                   style={{ perspective: "1000px" }}
//                 >

//                   {/* --- TOP SLIDE REVEAL (WEBSITE PREVIEW) --- */}
//                   <motion.div
//                     variants={{
//                       rest: {
//                         opacity: 0,
//                         y: 40,
//                         scale: 0.96,
//                         rotateX: 2
//                       },
//                       hover: {
//                         opacity: 1,
//                         y: 0,
//                         scale: 1,
//                         rotateX: 0
//                       }
//                     }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 300,
//                       damping: 22,
//                       mass: 0.8
//                     }}
//                     className="absolute bottom-[99%] left-[8%] w-[84%] z-10 origin-bottom"
//                   >
//                     <div className="relative w-full h-[180px] md:h-[220px] bg-white border-2 border-black border-b-0 rounded-t-xl overflow-hidden shadow-[0px_-10px_30px_rgba(0,0,0,0.15)]">
//                       {/* Image cropped to top */}
//                       <div
//                         className="absolute inset-0 bg-cover bg-top"
//                         style={{ backgroundImage: `url(${work.image})` }}
//                       />

//                       {/* Dark gradient at the bottom of the image for depth against the card */}
//                       <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/40 to-transparent" />

//                       {/* Floating Label (Delayed Fade In) */}
//                       <motion.div
//                         variants={{
//                           rest: { opacity: 0, y: 10 },
//                           hover: { opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.3 } }
//                         }}
//                         className="absolute top-4 right-4 bg-white text-black border-2 border-black text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
//                       >
//                         VIEW PROJECT <ArrowUpRight className="w-3 h-3" />
//                       </motion.div>
//                     </div>
//                   </motion.div>

//                   {/* --- MAIN PROJECT CARD (IN FRONT) --- */}
//                   <motion.div
//                     variants={{
//                       rest: {
//                         y: 0,
//                         boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)"
//                       },
//                       hover: {
//                         y: -4,
//                         boxShadow: "12px 12px 0px 0px rgba(0,0,0,1), 0px 20px 30px rgba(0,0,0,0.12)"
//                       }
//                     }}
//                     transition={{ duration: 0.3, ease: "easeOut" }}
//                     className="relative z-20 block border-2 border-black p-8 md:p-12 bg-white"
//                   >
//                     <div className="flex justify-between items-center mb-6">
//                       <span className="text-xs uppercase tracking-widest font-bold">{work.type}</span>
//                       <span className="text-xs font-mono font-bold">{work.metric}</span>
//                     </div>

//                     <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-between">
//                       {work.name}
//                       <ArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
//                     </h3>

//                     <div className="flex flex-wrap gap-2 pt-2">
//                       {work.tech.map((t, i) => (
//                         <span key={i} className="text-[10px] uppercase tracking-widest border border-current px-2.5 py-1">
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                   </motion.div>

//                 </motion.a>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }

// new by parth 



'use client';
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
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
    link: "https://jenilsmasala.com/",
    image: "/image/Jenils_sabras_masala_website.png"
  },
  {
    name: "Al-Buraq Perfumes",
    type: "Mobile Application",
    metric: "Play Store",
    tech: ["Flutter", "Dart", "Cloud"],
    align: "self-end",
    initialX: 60,
    link: "https://play.google.com/store/apps/details?id=io.alburaq.app&hl=en_IN",
    image: "/image/Al-Buraq_Samples.jpg"
  },
  {
    name: "Gurukrupa Enterprises",
    type: "Business Website",
    metric: "Corporate",
    tech: ["Next.js", "React", "Tailwind CSS"],
    align: "self-start",
    initialX: -60,
    link: "https://gurukripaenterprise.com/",
    image: "/image/gurukripaenterprise.com_.png"
  },
  {
    name: "Universe Classes",
    type: "Educational Platform",
    metric: "EdTech",
    tech: ["Next.js", "React", "Tailwind CSS"],
    align: "self-end",
    initialX: 60,
    link: "#",
    image: "/images/universe-classes.jpg"
  },
  {
    name: "Uniserve Career Counseling",
    type: "Consulting Portal",
    metric: "Services",
    tech: ["Next.js", "React", "Tailwind CSS"],
    align: "self-start",
    initialX: -60,
    link: "#",
    image: "/images/uniserve.jpg"
  },
  {
    name: "HM Consultech",
    type: "Corporate Website",
    metric: "Consulting",
    tech: ["Next.js", "React", "Tailwind CSS"],
    align: "self-end",
    initialX: 60,
    link: "https://www.hmconsultech.com/",
    image: "/image/www.hmconsultech.com_.png"
  },
  {
    name: "Altius Education INC.",
    type: "Educational Website",
    metric: "Academy",
    tech: ["Next.js", "React", "Tailwind CSS"],
    align: "self-start",
    initialX: -60,
    link: "#",
    image: "/images/beacon-academy.jpg"
  }
];

const ProjectCard = ({ work, idx }: { work: any; idx: number }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

  // Raw cursor position relative to the card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Target radius of the liquid mask
  const radius = useMotionValue(0);

  // Spring physics for smooth lerping (the "water" delay effect)
  const springConfig = { stiffness: 60, damping: 15, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  
  // slightly tighter spring for the radius expansion/shrinking
  const smoothRadius = useSpring(radius, { stiffness: 80, damping: 20 }); 

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    // Reveal a 160px radius circle of the image
    radius.set(160);
  };

  const handleMouseLeave = () => {
    // Smoothly shrink the mask away when mouse leaves
    radius.set(0);
  };

  // Generate a unique ID for SVG masks/filters to prevent collisions across multiple cards
  const filterId = `liquid-filter-${idx}`;
  const maskId = `liquid-mask-${idx}`;

  return (
    <motion.a
      href={work.link}
      target={work.link !== "#" ? "_blank" : "_self"}
      rel={work.link !== "#" ? "noopener noreferrer" : ""}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: work.initialX, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      whileHover="hover"
      className={`relative block group cursor-pointer outline-none border-2 border-black bg-white overflow-hidden w-full md:w-[60%] ${work.align}`}
      style={{
        boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
      }}
      variants={{
        hover: {
          y: -4,
          boxShadow: "12px 12px 0px 0px rgba(0,0,0,1), 0px 20px 30px rgba(0,0,0,0.12)"
        }
      }}
    >
      {/* LAYER 1: BASE TEXT CONTENT (z-10) */}
      <div className="relative z-10 flex flex-col justify-between p-8 md:p-12 min-h-[300px] md:min-h-[360px] pointer-events-none">
        <div className="flex justify-between items-start mb-12 pr-16 md:pr-20">
          <span className="text-xs uppercase tracking-widest font-bold pt-1">{work.type}</span>
          <span className="text-xs font-mono font-bold pt-1">{work.metric}</span>
        </div>

        <div className="mt-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 max-w-[85%]">
            {work.name}
          </h3>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {work.tech.map((t: string, i: number) => (
              <span key={i} className="text-[10px] uppercase tracking-widest border border-black px-2.5 py-1 bg-white">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* LAYER 2: INTERACTIVE IMAGE REVEAL (z-20) */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden md:block">
        <svg className="w-full h-full block">
          <defs>
            {/* Creates the organic/blobby distortion */}
            <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="40" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            
            {/* The mask layer using the distorted circle */}
            <mask id={maskId}>
              <rect width="100%" height="100%" fill="black" />
              <motion.circle 
                cx={smoothX} 
                cy={smoothY} 
                r={smoothRadius} 
                fill="white" 
                filter={`url(#${filterId})`} 
              />
            </mask>
          </defs>
          
          {/* The background image rendered through the local organic mask */}
          <image 
            href={work.image} 
            width="100%" 
            height="100%" 
            preserveAspectRatio="xMidYMid slice" 
            mask={`url(#${maskId})`} 
          />
        </svg>
      </div>

      {/* LAYER 3: PERSISTENT ARROW BUTTON (z-30) */}
      <motion.div
        className="absolute top-6 right-6 md:top-8 md:right-8 z-30 w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        variants={{
          rest: { 
            x: 0, 
            y: 0, 
            backgroundColor: "#ffffff", 
            color: "#000000" 
          },
          hover: { 
            x: 2, 
            y: -2, 
            backgroundColor: "#000000", 
            color: "#ffffff" 
          }
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <ArrowUpRight className="w-5 h-5 transition-transform" />
      </motion.div>
    </motion.a>
  );
};

export default function WorkPage() {
  return (
    <main className="bg-white text-black min-h-screen pt-28 bg-chex-light">
      <Cursor />
      <Navbar />

      <section className="py-24 px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-32">
            <span className="text-xs uppercase tracking-widest font-bold block mb-2">Our Portfolio</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tight">Real Projects. Real Impact.</h1>
          </div>

          <div className="flex flex-col space-y-16 md:space-y-32 mt-12">
            {projects.map((work, idx) => (
              <ProjectCard key={idx} work={work} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}