'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: '01',
    name: "JENIL'S SABRAS MASALA",
    category: 'E-COMMERCE · SHOPIFY · CUSTOM ARCHITECTURE',
    desc: 'Full-scale custom Shopify e-commerce flagship engineered with lightning-fast catalog search, high-converting product pages, and automated logistics integration.',
    metric: '+180% CONVERSION',
    year: '2025',
    image: '/image/Jenils_sabras_masala_website.png',
    link: 'https://jenilsmasala.com/',
    tags: ['Shopify Plus', 'React', 'Tailwind CSS', 'Klaviyo'],
  },
  {
    id: '02',
    name: 'AL-BURAQ PERFUMES & REALTY',
    category: 'MOBILE APPLICATION · FLUTTER · CLOUD',
    desc: 'High-performance mobile application featuring fluid gestural navigation, digital catalog indexing, and real-time synchronized cloud database.',
    metric: '50K+ DOWNLOADS',
    year: '2025',
    image: '/image/Al-Buraq_Samples.jpg',
    link: 'https://play.google.com/store/apps/details?id=io.alburaq.app&hl=en_IN',
    tags: ['Flutter', 'Dart', 'Cloud Firestore', 'REST API'],
  },
  {
    id: '03',
    name: 'GURUKRUPA ENTERPRISES',
    category: 'CORPORATE PLATFORM · NEXT.JS · ARCHITECTURE',
    desc: 'Industrial manufacturing digital infrastructure built for international buyers with interactive product catalogs, RFQ workflows, and responsive UI.',
    metric: '+240% INQUIRIES',
    year: '2025',
    image: '/image/gurukripaenterprise.com_.png',
    link: 'https://gurukripaenterprise.com/',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind', 'Vercel'],
  },
  {
    id: '04',
    name: 'HM CONSULTECH',
    category: 'CONSULTING PLATFORM · NEXT.JS · ARCHITECTURE',
    desc: 'Corporate consultation platform delivering interactive service advisories, automated appointment scheduling, and streamlined client intake workflows.',
    metric: 'TOP 3 SEARCH RANK',
    year: '2025',
    image: '/image/www.hmconsultech.com_.png',
    link: 'https://www.hmconsultech.com/',
    tags: ['Next.js', 'React', 'Framer Motion', 'SEO Ops'],
  },
];

export default function Work() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const active = projects[activeProjectIdx];

  return (
    <section id="work" className="pt-6 md:pt-8 pb-16 md:pb-24 px-6 md:px-12 bg-[#F3F0E9] text-[#0A0A0A] border-b border-[#0A0A0A] relative paper-grain">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-[#0A0A0A] pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold block mb-2">
              03 / SELECTED WORKS
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-[#0A0A0A]">
              REAL PROJECTS.<br />REAL IMPACT.
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-xs font-mono text-[#0A0A0A]/60 uppercase">
              TOP RECENT PRODUCTION DEPLOYMENTS
            </span>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 border border-[#0A0A0A] bg-[#0A0A0A] hover:bg-[#DE3D1C] hover:border-[#DE3D1C] text-white px-5 py-2.5 text-xs font-mono uppercase font-bold tracking-widest transition-colors"
            >
              <span>VIEW FULL ARCHIVE</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Compact Side-by-Side Showcase: Top 3 Clients on Left, Clean Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-2 border-[#0A0A0A] bg-[#F3F0E9] shadow-[6px_6px_0px_0px_rgba(10,10,10,1)]">
          {/* LEFT SIDE: Top 3 Clients Directory (Span 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r-2 border-[#0A0A0A] bg-[#F3F0E9]">
            {/* Top Directory Bar */}
            <div className="p-4 bg-[#0A0A0A] text-white flex justify-between items-center text-xs font-mono uppercase tracking-wider border-b border-[#0A0A0A]">
              <span className="font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-[#DE3D1C]" />
                CLIENT DIRECTORY
              </span>
              <span className="text-white/60 text-[10px]">HOVER / CLICK TO PREVIEW</span>
            </div>

            {/* Top 4 Companies List */}
            <div className="divide-y divide-[#0A0A0A]/15 flex-1">
              {projects.map((proj, idx) => {
                const isSelected = activeProjectIdx === idx;

                return (
                  <button
                    key={proj.id}
                    onClick={() => setActiveProjectIdx(idx)}
                    onMouseEnter={() => setActiveProjectIdx(idx)}
                    className={`w-full text-left p-4 sm:p-4.5 transition-all duration-200 flex flex-col justify-between relative group cursor-pointer ${
                      isSelected
                        ? 'bg-[#0A0A0A] text-[#F3F0E9]'
                        : 'hover:bg-white/70 text-[#0A0A0A]'
                    }`}
                  >
                    {/* Active Left Indicator Bar */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1.5 bg-[#DE3D1C] transition-opacity ${
                        isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                      }`}
                    />

                    <div className="flex justify-between items-start w-full mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-[#DE3D1C]">
                          [{proj.id}]
                        </span>
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wider ${
                            isSelected ? 'text-white/50' : 'text-[#0A0A0A]/50'
                          }`}
                        >
                          {proj.year}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[11px] font-mono font-bold px-2 py-0.5 border ${
                            isSelected
                              ? 'border-[#DE3D1C] text-[#DE3D1C] bg-[#DE3D1C]/10'
                              : 'border-[#0A0A0A]/20 text-[#0A0A0A] bg-white/50'
                          }`}
                        >
                          {proj.metric}
                        </span>
                        <ArrowUpRight
                          className={`w-4 h-4 transition-transform ${
                            isSelected
                              ? 'rotate-45 text-[#DE3D1C]'
                              : 'text-[#0A0A0A]/40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0A0A0A]'
                          }`}
                        />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight leading-snug">
                      {proj.name}
                    </h3>

                    <p
                      className={`text-xs font-mono tracking-wider uppercase mt-1 ${
                        isSelected ? 'text-white/60' : 'text-[#0A0A0A]/60'
                      }`}
                    >
                      {proj.category.split('·')[0].trim()}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Clean Website-Font Link for More Works */}
            <div className="p-4 sm:p-5 bg-white/70 border-t border-[#0A0A0A]/15">
              <Link
                href="/work"
                className="group flex items-center justify-between text-xs font-mono font-bold uppercase tracking-widest text-[#0A0A0A] hover:text-[#DE3D1C] transition-colors"
              >
                <span>EXPLORE COMPLETE ARCHIVE</span>
                <span className="flex items-center gap-1.5 text-[#DE3D1C]">
                  <span>[+MORE WORKS]</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Clean Preview Fitted Without Dark Letterboxing (Span 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#0A0A0A] text-white">
            {/* Top Preview Status Bar */}
            <div className="px-5 py-3.5 bg-[#141414] border-b border-white/15 flex justify-between items-center text-xs font-mono">
              <div className="flex items-center gap-2 text-white/90">
                <span className="w-2 h-2 rounded-full bg-[#DE3D1C] animate-pulse" />
                <span className="uppercase font-bold tracking-wider">PREVIEW // [{active.id}] {active.name}</span>
              </div>
              <div className="text-[10px] uppercase text-white/50 tracking-widest hidden sm:block">
                LIVE PRODUCTION
              </div>
            </div>

            {/* Seamless Image Container: Clean background matching the preview, zero awkward black letterbox borders */}
            <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[350px] bg-white border-b border-white/15 overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover object-top transition-transform duration-500 hover:scale-102"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Project Details & Primary Action Bar */}
            <div className="p-5 sm:p-7 bg-[#0A0A0A] space-y-4">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-[#DE3D1C] font-bold mb-1">
                  <span>{active.category}</span>
                </div>
                <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                  {active.desc}
                </p>
              </div>

              {/* Tech Tags & Live Link */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {active.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-white/10 text-white/90 border border-white/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={active.link}
                  target={active.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-[#DE3D1C] hover:bg-white hover:text-[#0A0A0A] text-white px-5 py-2.5 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200 shadow-md shrink-0"
                >
                  <span>VIEW PROJECT</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
