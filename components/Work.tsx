'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MoveRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    name: "JENIL'S SABRAS MASALA",
    category: 'E-COMMERCE · SHOPIFY · DEVELOPMENT',
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
    category: 'CONSULTING PORTAL · FULL-STACK WEB',
    desc: 'Corporate consultation platform delivering interactive service advisories, appointment scheduling, client intake portal, and SEO leadership.',
    metric: 'TOP 3 SEARCH RANK',
    year: '2024',
    image: '/image/www.hmconsultech.com_.png',
    link: 'https://www.hmconsultech.com/',
    tags: ['Next.js', 'React', 'Framer Motion', 'SEO Ops'],
  },
  {
    id: '05',
    name: 'UNISERVE PLATFORM',
    category: 'EDTECH & COUNSELING PORTAL',
    desc: 'Comprehensive educational advisory platform connecting students with global university pathways, admissions trackers, and document vaults.',
    metric: '4.9★ RATING',
    year: '2024',
    image: '/image/company7-color.png',
    link: '/work',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Auth0'],
  },
  {
    id: '06',
    name: 'ALTIUS EDUCATION INC.',
    category: 'ACADEMY LMS & WEB SYSTEM',
    desc: 'Modern digital learning portal engineered with video course streaming, automated assessments, and intuitive student progress analytics.',
    metric: '10K+ ACTIVE USERS',
    year: '2024',
    image: '/image/company8-color.png',
    link: 'https://www.altiuseducation.ca/',
    tags: ['React', 'Next.js', 'Tailwind', 'Cloudflare'],
  },
];

export default function Work() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const featured = projects[activeProjectIdx];

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 bg-[#F3F0E9] text-[#0A0A0A] border-b border-[#0A0A0A] relative paper-grain">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-[#0A0A0A] pb-10">
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
              SHOWCASING {projects.length} PRODUCTION DEPLOYMENTS
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

        {/* Featured Project Showcase (Asymmetric Editorial Frame) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-[#0A0A0A] bg-white shadow-[8px_8px_0px_0px_rgba(10,10,10,1)]">
          {/* Left Project Info & Specs (Span 5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r-2 border-[#0A0A0A] bg-[#F3F0E9]">
            <div className="space-y-6">
              <div className="flex justify-between items-center text-xs font-mono text-[#DE3D1C] font-bold">
                <span>FEATURED RELEASE // [{featured.id}]</span>
                <span className="text-[#0A0A0A]/60">{featured.year}</span>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/60 block mb-2 font-semibold">
                  {featured.category}
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-[#0A0A0A] leading-tight">
                  {featured.name}
                </h3>
              </div>

              <p className="text-sm md:text-base text-[#0A0A0A]/80 font-normal leading-relaxed">
                {featured.desc}
              </p>

              {/* Impact Metric & Tech Tags */}
              <div className="pt-4 border-t border-[#0A0A0A]/15 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#0A0A0A]/60">KEY OUTCOME:</span>
                  <span className="font-bold text-[#DE3D1C] px-2 py-0.5 border border-[#DE3D1C]/40 bg-[#DE3D1C]/5">
                    {featured.metric}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {featured.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 bg-[#0A0A0A] text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Launch CTA */}
            <div className="pt-8 mt-6 border-t border-[#0A0A0A]/15">
              <a
                href={featured.link}
                target={featured.link.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className="group inline-flex items-center justify-between w-full bg-[#0A0A0A] hover:bg-[#DE3D1C] text-white px-6 py-4 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200"
              >
                <span>VIEW PROJECT</span>
                <MoveRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Showcase Image (Span 7 cols) */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] bg-[#0A0A0A] p-6 sm:p-10 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full min-h-[340px] sm:min-h-[400px] border border-white/20 overflow-hidden group"
              >
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />

                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white px-3 py-1.5 uppercase">
                  LIVE DEPLOYMENT PREVIEW
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Minimal Numbered Project Index (Interactive List) */}
        <div className="space-y-4 pt-8">
          <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/60 pb-2 border-b border-[#0A0A0A]/20">
            <span>INDEX / ARCHIVE</span>
            <span className="hidden sm:inline">CLICK TO PREVIEW</span>
          </div>

          <div className="divide-y divide-[#0A0A0A]/20 border-t border-b border-[#0A0A0A]">
            {projects.map((proj, idx) => {
              const isSelected = activeProjectIdx === idx;

              return (
                <div
                  key={proj.id}
                  onClick={() => setActiveProjectIdx(idx)}
                  className={`group flex flex-col sm:flex-row sm:items-center justify-between py-5 px-4 transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0A0A0A] text-white'
                      : 'hover:bg-[#0A0A0A]/5 text-[#0A0A0A]'
                  }`}
                >
                  <div className="flex items-center gap-4 sm:gap-8">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#DE3D1C]' : 'text-[#DE3D1C]'}`}>
                      {proj.id}
                    </span>
                    <span className="text-xl sm:text-2xl md:text-3xl font-display uppercase tracking-tight">
                      {proj.name}
                    </span>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 mt-2 sm:mt-0 text-xs font-mono">
                    <span className={`hidden md:inline ${isSelected ? 'text-white/70' : 'text-[#0A0A0A]/60'}`}>
                      {proj.category.split('·')[0]}
                    </span>
                    <span className={`font-bold ${isSelected ? 'text-[#DE3D1C]' : 'text-[#DE3D1C]'}`}>
                      {proj.metric}
                    </span>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'rotate-45 text-[#DE3D1C]' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
