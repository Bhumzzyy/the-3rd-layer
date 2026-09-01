'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, MoveRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#F3F0E9] text-[#0A0A0A] pt-20 md:pt-24 border-b border-[#0A0A0A] overflow-hidden flex flex-col justify-between">
      {/* Top Main Grid (Asymmetric Split Layout) */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-180px)] border-b border-[#0A0A0A]">
        {/* LEFT COLUMN: Typography & Editorial Manifesto (Span 7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-[#0A0A0A] bg-[#F3F0E9] paper-grain">
          {/* Top Metadata row */}
          <div className="flex justify-between items-start pt-2">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#0A0A0A]/70 leading-tight">
              <span className="block text-[#DE3D1C] font-bold">DIGITAL PARTNERS</span>
              <span className="block font-semibold">FOR GROWTH</span>
            </div>

            <div className="hidden sm:block text-[10px] font-mono text-[#0A0A0A]/40 uppercase tracking-widest text-right">
              VOL. 26 / ISSUE 03<br />
              SYS.DEPLOY // ARCH.V4
            </div>
          </div>

          {/* Center Giant Headline */}
          <div className="my-8 md:my-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-0"
            >
              <div className="flex items-start">
                <h1 className="text-[18vw] sm:text-[14vw] lg:text-[11.5vw] font-display font-black leading-[0.82] tracking-tighter uppercase text-[#0A0A0A]">
                  IDEAS
                </h1>
                {/* Burnt Orange Asterisk Graphic */}
                <span className="text-[#DE3D1C] text-[8vw] sm:text-[6vw] lg:text-[4.5vw] font-sans ml-2 md:ml-4 -mt-2 animate-spin-slow inline-block select-none">
                  ✱
                </span>
              </div>

              <h1 className="text-[18vw] sm:text-[14vw] lg:text-[11.5vw] font-display font-black leading-[0.82] tracking-tighter uppercase text-[#0A0A0A]">
                CODE
              </h1>

              <h1 className="text-[18vw] sm:text-[14vw] lg:text-[11.5vw] font-display font-black leading-[0.82] tracking-tighter uppercase text-[#0A0A0A]">
                IMPACT
              </h1>
            </motion.div>

            {/* Editorial Paragraph with underline styling */}
            <div className="mt-8 pt-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="relative pl-4 border-l-2 border-[#DE3D1C] max-w-md">
                <p className="text-sm sm:text-base md:text-lg text-[#0A0A0A]/90 font-medium leading-snug">
                  We design, develop and deploy digital systems that help businesses grow faster and smarter.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#DE3D1C] text-[#F3F0E9] px-6 py-3.5 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200"
                >
                  <span>VIEW OUR WORK</span>
                  <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 border border-[#0A0A0A] hover:border-[#DE3D1C] hover:text-[#DE3D1C] bg-transparent text-[#0A0A0A] px-5 py-3.5 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200"
                >
                  <span>LET'S TALK</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Left Scroll Indicator & Coordinates */}
          <div className="flex justify-between items-end pt-4 border-t border-[#0A0A0A]/10 text-[11px] font-mono text-[#0A0A0A]/60">
            <div className="flex items-center gap-2 uppercase tracking-widest">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#DE3D1C]" />
              <span>SCROLL TO EXPLORE</span>
            </div>
            <div className="hidden sm:block uppercase tracking-widest font-mono text-[10px]">
              21.1702° N, 72.8311° E
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Architectural Brutalist Visual & Orange Field (Span 5 cols) */}
        <div className="lg:col-span-5 flex flex-col bg-[#0A0A0A] relative overflow-hidden min-h-[420px] lg:min-h-full">
          {/* Top Orange Header Banner */}
          <div className="bg-[#DE3D1C] p-4 sm:p-6 text-white flex justify-between items-center border-b border-[#0A0A0A] relative z-10">
            <div className="text-xs font-mono font-bold uppercase tracking-widest">
              00 / STUDIO ARCHITECTURE
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest bg-[#0A0A0A] text-white px-2.5 py-1">
              EST. 2024
            </div>
          </div>

          {/* Main Visual Frame with Architectural Monolith & Stamp */}
          <div className="relative flex-1 bg-[#0A0A0A] overflow-hidden flex items-center justify-center p-6 lg:p-10">
            {/* Background High-Contrast Architectural Composition */}
            <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
              {/* CSS/SVG Brutalist Architectural Facade with sharp angles and perspective */}
              <svg className="w-full h-full object-cover opacity-90" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="skyGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#DE3D1C" stopOpacity="0.85" />
                    <stop offset="60%" stopColor="#1A1A1A" stopOpacity="1" />
                    <stop offset="100%" stopColor="#0A0A0A" stopOpacity="1" />
                  </linearGradient>

                  <linearGradient id="concreteLight" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#D8D4CC" />
                    <stop offset="50%" stopColor="#A8A49C" />
                    <stop offset="100%" stopColor="#6C6A64" />
                  </linearGradient>

                  <linearGradient id="concreteDark" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3A3A3A" />
                    <stop offset="50%" stopColor="#1E1E1E" />
                    <stop offset="100%" stopColor="#0F0F0F" />
                  </linearGradient>

                  <pattern id="facadeGrid" width="40" height="30" patternUnits="userSpaceOnUse">
                    <rect width="36" height="24" fill="#0A0A0A" />
                    <rect x="2" y="2" width="32" height="20" fill="#1C1C1C" />
                    <line x1="18" y1="2" x2="18" y2="22" stroke="#2E2E2E" strokeWidth="1" />
                  </pattern>
                </defs>

                {/* Sky / Atmospheric Background */}
                <rect width="600" height="800" fill="url(#skyGrad)" />

                {/* Perspective Brutalist Concrete Monolith (Left Lit Facet) */}
                <polygon points="300,120 50,800 300,800" fill="url(#concreteLight)" />

                {/* Perspective Brutalist Concrete Monolith (Right Shadow Facet) */}
                <polygon points="300,120 300,800 580,720" fill="url(#concreteDark)" />

                {/* Angular Structural Fins & Grid Lines */}
                <line x1="300" y1="120" x2="300" y2="800" stroke="#0A0A0A" strokeWidth="3" />
                <line x1="300" y1="120" x2="50" y2="800" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
                <line x1="300" y1="120" x2="580" y2="720" stroke="#DE3D1C" strokeWidth="2" opacity="0.8" />

                {/* Horizontal cantilevered slabs (Left face) */}
                {[200, 280, 360, 440, 520, 600, 680, 760].map((y, i) => (
                  <g key={`slab-left-${i}`}>
                    <line
                      x1={300 - ((y - 120) * 250) / 680}
                      y1={y}
                      x2="300"
                      y2={y}
                      stroke="#1A1A1A"
                      strokeWidth="4"
                    />
                    <polygon
                      points={`${300 - ((y - 120) * 250) / 680},${y} 300,${y} 300,${y + 15} ${300 - ((y + 15 - 120) * 250) / 680},${y + 15}`}
                      fill="#141414"
                      opacity="0.75"
                    />
                  </g>
                ))}

                {/* Horizontal cantilevered slabs (Right shadow face) */}
                {[200, 280, 360, 440, 520, 600, 680, 760].map((y, i) => (
                  <g key={`slab-right-${i}`}>
                    <line
                      x1="300"
                      y1={y}
                      x2={300 + ((y - 120) * 280) / 680}
                      y2={y - ((y - 120) * 80) / 680}
                      stroke="#050505"
                      strokeWidth="4"
                    />
                  </g>
                ))}

                {/* Stark Crosshairs and Architectural Coordinates */}
                <line x1="40" y1="80" x2="80" y2="80" stroke="#DE3D1C" strokeWidth="1" />
                <line x1="60" y1="60" x2="60" y2="100" stroke="#DE3D1C" strokeWidth="1" />
                <circle cx="60" cy="80" r="12" fill="none" stroke="#DE3D1C" strokeWidth="0.75" strokeDasharray="3 3" />
              </svg>

              {/* Film Grain & Vignette Texture Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
            </div>

            {/* Circular Studio Seal / Technical Monogram Stamp */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
                {/* Outer Dashed Rotating Ring */}
                <div className="absolute inset-0 rounded-full border border-white/30 border-dashed animate-spin-slow" />
                <div className="absolute inset-2 rounded-full border border-[#DE3D1C]/50" />

                {/* Circular Text Stamp */}
                <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 200 200">
                  <path
                    id="circlePath"
                    d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                    fill="none"
                  />
                  <text className="text-[10.5px] font-mono uppercase tracking-[0.25em] fill-white/80 font-bold">
                    <textPath href="#circlePath" startOffset="0%">
                      • DIGITAL STUDIO • ARCHITECTURE • 3RD LAYER
                    </textPath>
                  </text>
                </svg>

                {/* Inner Monogram */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#DE3D1C] flex flex-col items-center justify-center text-white border border-white/20 shadow-2xl">
                  <span className="text-xl sm:text-2xl font-display font-black leading-none">3RD</span>
                  <span className="text-[8px] font-mono tracking-widest">LAYER</span>
                </div>
              </div>

              {/* Bottom Technical Spec Box */}
              <div className="mt-6 bg-[#0A0A0A]/90 border border-white/20 backdrop-blur-md px-4 py-2 text-[10px] font-mono text-white/80 flex items-center gap-4">
                <span className="inline-block w-2 h-2 rounded-full bg-[#DE3D1C] animate-ping" />
                <span>BUILDING SYSTEMS FOR SCALE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom WHAT WE DO Quick Bar (Integrated 4-Column Strip) */}
      <div className="w-full bg-[#0A0A0A] text-[#F3F0E9] px-6 md:px-10 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-center">
        {/* Label column */}
        <div className="lg:col-span-1 border-b sm:border-b-0 sm:border-r border-white/15 pb-3 sm:pb-0 sm:pr-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold block">
            / WHAT WE DO
          </span>
          <span className="text-[11px] text-[#F3F0E9]/60 font-mono">
            CORE CAPABILITIES
          </span>
        </div>

        {/* 01 Strategy */}
        <div className="group flex flex-col justify-between sm:border-r border-white/10 sm:pr-4">
          <div className="flex justify-between items-center text-xs font-mono text-[#DE3D1C] font-bold">
            <span>01</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </div>
          <h4 className="text-sm font-bold text-white uppercase tracking-tight mt-1">Strategy</h4>
          <p className="text-[11px] text-[#F3F0E9]/70 font-light mt-0.5 leading-snug">
            We find the right path for your business.
          </p>
        </div>

        {/* 02 Design */}
        <div className="group flex flex-col justify-between sm:border-r border-white/10 sm:pr-4">
          <div className="flex justify-between items-center text-xs font-mono text-[#DE3D1C] font-bold">
            <span>02</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </div>
          <h4 className="text-sm font-bold text-white uppercase tracking-tight mt-1">Design</h4>
          <p className="text-[11px] text-[#F3F0E9]/70 font-light mt-0.5 leading-snug">
            Bold, functional and user-focused.
          </p>
        </div>

        {/* 03 Development */}
        <div className="group flex flex-col justify-between sm:border-r border-white/10 sm:pr-4">
          <div className="flex justify-between items-center text-xs font-mono text-[#DE3D1C] font-bold">
            <span>03</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </div>
          <h4 className="text-sm font-bold text-white uppercase tracking-tight mt-1">Development</h4>
          <p className="text-[11px] text-[#F3F0E9]/70 font-light mt-0.5 leading-snug">
            Powerful solutions built for scale.
          </p>
        </div>

        {/* 04 Deployment / Launch */}
        <div className="group flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs font-mono text-[#DE3D1C] font-bold">
            <span>04</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </div>
          <h4 className="text-sm font-bold text-white uppercase tracking-tight mt-1">Launch</h4>
          <p className="text-[11px] text-[#F3F0E9]/70 font-light mt-0.5 leading-snug">
            We ship and support your growth.
          </p>
        </div>
      </div>
    </section>
  );
}