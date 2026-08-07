// 'use client';
// import { Cpu } from 'lucide-react';

// const technologies = [
//   "Next.js", 
//   "React", 
//   "TypeScript", 
//   "Tailwind CSS", 
//   "Node.js", 
//   "Docker", 
//   "AWS", 
//   "Kubernetes", 
//   "GraphQL", 
//   "PostgreSQL"
// ];

// export default function TechTicker() {
//   return (
//     <section className="py-16 border-b border-neutral-900 overflow-hidden bg-black text-white">
//       <div className="flex overflow-hidden whitespace-nowrap select-none">
//         <div className="animate-marquee flex space-x-16 items-center">
//           {/* First set */}
//           {technologies.map((tech, i) => (
//             <span key={`tech-1-${i}`} className="flex items-center gap-3 text-neutral-400 text-sm md:text-base tracking-widest uppercase">
//               <Cpu size={18} className="text-white" /> {tech}
//             </span>
//           ))}
//           {/* Duplicate set for seamless infinite loop */}
//           {technologies.map((tech, i) => (
//             <span key={`tech-2-${i}`} className="flex items-center gap-3 text-neutral-400 text-sm md:text-base tracking-widest uppercase">
//               <Cpu size={18} className="text-white" /> {tech}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';
import { Cpu } from 'lucide-react';

const technologies = [
  "Next.js", 
  "React", 
  "TypeScript", 
  "Tailwind CSS", 
  "Node.js", 
  "Docker", 
  "AWS", 
  "Kubernetes", 
  "GraphQL", 
  "PostgreSQL"
];

export default function TechTicker() {
  return (
    <section className="py-16 border-b border-white overflow-hidden bg-black text-white bg-chex-dark">
      <div className="flex overflow-hidden whitespace-nowrap select-none">
        <div className="animate-marquee flex space-x-16 items-center">
          {technologies.map((tech, i) => (
            <span key={`tech-1-${i}`} className="flex items-center gap-3 text-white text-sm md:text-base tracking-widest uppercase font-semibold">
              <Cpu size={18} className="text-white" /> {tech}
            </span>
          ))}
          {technologies.map((tech, i) => (
            <span key={`tech-2-${i}`} className="flex items-center gap-3 text-white text-sm md:text-base tracking-widest uppercase font-semibold">
              <Cpu size={18} className="text-white" /> {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}