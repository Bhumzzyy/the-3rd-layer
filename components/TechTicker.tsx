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
    <section className="py-6 border-y-2 border-[#0A0A0A] overflow-hidden bg-[#DE3D1C] text-[#0A0A0A] select-none shadow-sm">
      <div className="flex overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex space-x-12 items-center">
          {technologies.map((tech, i) => (
            <span
              key={`tech-1-${i}`}
              className="group flex items-center gap-3 text-xs md:text-sm font-mono tracking-widest uppercase font-bold text-[#0A0A0A] hover:text-white transition-colors duration-200 cursor-default"
            >
              <Terminal className="w-3.5 h-3.5 text-[#0A0A0A] group-hover:text-white transition-colors duration-200" />
              <span>{tech}</span>
            </span>
          ))}

          {/* Duplicate set for seamless infinite loop */}
          {technologies.map((tech, i) => (
            <span
              key={`tech-2-${i}`}
              className="group flex items-center gap-3 text-xs md:text-sm font-mono tracking-widest uppercase font-bold text-[#0A0A0A] hover:text-white transition-colors duration-200 cursor-default"
            >
              <Terminal className="w-3.5 h-3.5 text-[#0A0A0A] group-hover:text-white transition-colors duration-200" />
              <span>{tech}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}