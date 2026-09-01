'use client';

import { Terminal } from 'lucide-react';

const technologies = [
  'NEXT.JS 15',
  'REACT 19',
  'TYPESCRIPT',
  'TAILWIND CSS',
  'NODE.JS',
  'SHOPIFY PLUS',
  'FLUTTER',
  'POSTGRESQL',
  'DOCKER',
  'VERCEL / AWS',
  'FRAMER MOTION',
];

export default function TechTicker() {
  return (
    <section className="py-8 border-b border-[#0A0A0A] overflow-hidden bg-[#0A0A0A] text-[#F3F0E9] select-none">
      <div className="flex overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex space-x-12 items-center">
          {technologies.map((tech, i) => (
            <span
              key={`tech-1-${i}`}
              className="flex items-center gap-3 text-xs md:text-sm font-mono tracking-widest uppercase font-bold text-white/80 hover:text-[#DE3D1C] transition-colors"
            >
              <Terminal className="w-3.5 h-3.5 text-[#DE3D1C]" />
              <span>{tech}</span>
            </span>
          ))}

          {/* Duplicate set for seamless infinite loop */}
          {technologies.map((tech, i) => (
            <span
              key={`tech-2-${i}`}
              className="flex items-center gap-3 text-xs md:text-sm font-mono tracking-widest uppercase font-bold text-white/80 hover:text-[#DE3D1C] transition-colors"
            >
              <Terminal className="w-3.5 h-3.5 text-[#DE3D1C]" />
              <span>{tech}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}