// 'use client';
// import { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// export default function Services() {
//   const servicesRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress: servicesScroll } = useScroll({
//     target: servicesRef,
//     offset: ['start start', 'end end'],
//   });

//   const xTransform = useTransform(servicesScroll, [0, 1], ['0%', '-75%']);

//   return (
//     <div ref={servicesRef} className="h-[300vh] relative bg-white text-black border-b border-neutral-200">
//       <div className="sticky top-0 h-screen flex items-center overflow-hidden">
//         <motion.div style={{ x: xTransform }} className="flex gap-16 px-24">
//           {[
//             { num: "01", title: "Full-Stack Web Apps", desc: "Enterprise-grade web solutions built with modern architecture." },
//             { num: "02", title: "Mobile Application Dev", desc: "Cross-platform high-performance iOS and Android apps." },
//             { num: "03", title: "Cloud & DevOps", desc: "Automated CI/CD pipelines, scaling, and secure server deployments." },
//             { num: "04", title: "UI/UX & Branding", desc: "Minimalist design systems and conversion-focused digital experiences." }
//           ].map((service, idx) => (
//             <div key={idx} className="w-[85vw] md:w-[45vw] h-[60vh] border border-neutral-300 p-12 flex flex-col justify-between bg-neutral-50 shadow-sm">
//               <span className="text-neutral-400 font-mono text-xl">{service.num}</span>
//               <div>
//                 <h3 className="text-3xl md:text-5xl font-bold mb-4">{service.title}</h3>
//                 <p className="text-neutral-600 text-lg font-light">{service.desc}</p>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }



// 'use client';
// import { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// export default function Services() {
//   const servicesRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress: servicesScroll } = useScroll({
//     target: servicesRef,
//     offset: ['start start', 'end end'],
//   });

//   const xTransform = useTransform(servicesScroll, [0, 1], ['0%', '-75%']);

//   return (
//     <div ref={servicesRef} className="h-[300vh] relative bg-white text-black border-b border-black bg-chex-light">
//       <div className="sticky top-0 h-screen flex items-center overflow-hidden">
//         <motion.div style={{ x: xTransform }} className="flex gap-16 px-24">
//           {[
//             { num: "01", title: "Full-Stack Web Apps", desc: "Enterprise-grade web solutions built with modern architecture." },
//             { num: "02", title: "Mobile Application Dev", desc: "Cross-platform high-performance iOS and Android apps." },
//             { num: "03", title: "Cloud & DevOps", desc: "Automated CI/CD pipelines, scaling, and secure server deployments." },
//             { num: "04", title: "UI/UX & Branding", desc: "Minimalist design systems and conversion-focused digital experiences." }
//           ].map((service, idx) => (
//             <div key={idx} className="w-[85vw] md:w-[45vw] h-[60vh] border-2 border-black p-12 flex flex-col justify-between bg-white shadow-2xl">
//               <span className="text-black font-mono text-xl font-bold">{service.num}</span>
//               <div>
//                 <h3 className="text-3xl md:text-5xl font-bold mb-4 text-black">{service.title}</h3>
//                 <p className="text-black text-lg font-light">{service.desc}</p>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }




// 'use client';
// import { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// export default function Services() {
//   const servicesRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress: servicesScroll } = useScroll({
//     target: servicesRef,
//     offset: ['start start', 'end end'],
//   });

//   const xTransform = useTransform(servicesScroll, [0, 1], ['0%', '-75%']);

//   return (
//     <div ref={servicesRef} className="h-[300vh] relative bg-black text-white border-b border-white">
//        <div className="max-w-4xl mb-12">
//           <div className="text-sm tracking-widest text-white uppercase mb-4 font-bold">02 / Services</div>
//           <span className="text-xs uppercase tracking-widest text-white/60 font-bold block mb-2">What we do</span>
//           <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-3">Complete Digital Solutions Under One Roof</h2>
//           {/* Added relatable subtitle heading */}
//           <h3 className="text-lg md:text-xl font-semibold text-white/90 tracking-wide mb-4">
//             Everything your business needs to scale from zero to market leader.
//           </h3>
//           <p className="text-sm md:text-base text-white/80 font-light">
//             "Every service we offer is designed to connect with the next — a website that feeds your marketing, marketing that feeds your analytics."
//           </p>
//         </div>
//       <div className="sticky top-0 h-screen flex items-center overflow-hidden">
//          <motion.div style={{ x: xTransform }} className="flex gap-16 px-24">
//           {[
//             { num: "01", title: "Full-Stack Web Apps", desc: "Enterprise-grade web solutions built with modern architecture." },
//             { num: "02", title: "Mobile Application Dev", desc: "Cross-platform high-performance iOS and Android apps." },
//             { num: "03", title: "Cloud & DevOps", desc: "Automated CI/CD pipelines, scaling, and secure server deployments." },
//             { num: "04", title: "UI/UX & Branding", desc: "Minimalist design systems and conversion-focused digital experiences." }
//           ].map((service, idx) => (
//             <div key={idx} className="w-[85vw] md:w-[45vw] h-[60vh] border-2 border-white p-12 flex flex-col justify-between bg-black shadow-2xl">
//               <span className="text-white font-mono text-xl font-bold">{service.num}</span>
//               <div>
//                 <h3 className="text-3xl md:text-5xl font-bold mb-4 text-white">{service.title}</h3>
//                 <p className="text-white text-lg font-light">{service.desc}</p>
//               </div>
//             </div>
//           ))}
//         </motion.div> 
//       </div>
//     </div>
//   );
// }


'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
  { num: "01", title: "Website Development", desc: "Fast, responsive, SEO-friendly websites that convert visitors." },
  { num: "02", title: "Mobile App Development", desc: "Powerful mobile apps for Android and iOS platforms." },
  { num: "03", title: "E-Commerce Solutions", desc: "Online stores that sell more and scale seamlessly." },
  { num: "04", title: "Digital Marketing", desc: "Strategies that grow brand visibility and generate leads." },
  { num: "05", title: "Maintenance & Support", desc: "We keep your digital assets secure, updated, and running." }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], ['0%', '-92%']);

  return (
    <section
      id="services"
      ref={containerRef}
      className="h-[450vh] relative bg-black text-white border-b border-white bg-chex-dark"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden px-6 md:px-16">

        {/* Properly Spaced Section Header */}
        <div className="max-w-4xl mb-12 space-y-4">
          <div className="text-sm tracking-widest text-white uppercase font-bold">
            02 / Services
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-white/60 font-bold block">
              What we do
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
              Complete Digital Solutions Under One Roof
            </h2>
          </div>

          <h3 className="text-lg md:text-xl font-semibold text-white/90 tracking-wide pt-1">
            Everything your business needs to scale from zero to market leader.
          </h3>

          <p className="text-sm md:text-base text-white/80 font-light pt-1 max-w-3xl leading-relaxed">
            "Every service we offer is designed to connect with the next — a website that feeds your marketing, marketing that feeds your analytics."
          </p>
        </div>

        {/* Horizontal Scrolling Track */}
        <motion.div style={{ x: xTransform }} className="flex gap-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="w-[80vw] md:w-[35vw] h-[42vh] border-2 border-white p-8 md:p-10 flex flex-col justify-between bg-black shadow-2xl shrink-0"
            >
              <span className="text-white font-mono text-xl font-bold">{service.num}</span>
              <div>
                <h3 className="text-2xl md:text-4xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/80 text-sm md:text-base font-light mb-6">{service.desc}</p>
                <a href="/contact" className="text-xs uppercase tracking-widest font-bold underline hover:opacity-60">
                  Explore Service →
                </a>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}