'use client';

import { MoveRight } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 bg-[#0A0A0A] text-[#F3F0E9] border-b border-[#0A0A0A] relative dark-grain overflow-hidden">
      {/* Background Graphic Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[22vw] font-display font-black text-white/[0.02] select-none pointer-events-none leading-none">
        CONNECT
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column: Dramatic Manifesto */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#DE3D1C]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold">
                06 / INITIATE CONTACT
              </span>
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-display uppercase tracking-tight text-white leading-[0.88]">
              HAVE A PROJECT<br />
              <span className="text-[#DE3D1C]">IN MIND?</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#F3F0E9]/80 font-light leading-relaxed max-w-lg">
            Let's build something extraordinary together. Whether you are launching a new digital venture or scaling an existing architecture, we are ready to engineer your solution.
          </p>
        </div>

        {/* Right Column: Clean Redirect Box */}
        <div className="lg:col-span-6">
          <Link
            href="/contact"
            className="group block bg-[#F3F0E9] text-[#0A0A0A] p-10 sm:p-14 md:p-16 border-2 border-[#0A0A0A] shadow-[12px_12px_0px_0px_rgba(222,61,28,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(222,61,28,1)] transition-all duration-200"
          >
            <div className="space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold block">
                [ COMMISSION A SYSTEM ]
              </span>

              <h3 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase tracking-tight text-[#0A0A0A] leading-none">
                START YOUR <br />
                <span className="text-[#DE3D1C]">PROJECT BRIEF</span>
              </h3>

              <p className="text-sm md:text-base text-[#0A0A0A]/80 font-light leading-relaxed max-w-md">
                Step into our dedicated consultation portal to outline your specifications, select scope parameters, and lock in your project schedule.
              </p>

              <div className="pt-4 flex items-center gap-3 text-xs font-mono uppercase tracking-widest font-bold text-[#0A0A0A] group-hover:text-[#DE3D1C] transition-colors">
                <span>OPEN CONSULTATION PAGE</span>
                <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}