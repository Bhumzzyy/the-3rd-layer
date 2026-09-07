'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#F3F0E9] border-t border-white/20 pt-14 pb-0 relative overflow-hidden dark-grain select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pb-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-white/60 tracking-wider">
        <Link
          href="/"
          className="flex items-center gap-2 hover:text-[#DE3D1C] transition-colors group"
        >
          <span className="w-2 h-2 bg-[#DE3D1C]" />
          <span className="font-bold text-white group-hover:text-[#DE3D1C] tracking-widest">
            THE THREE LAYERS
          </span>
          <span className="text-white/30 hidden sm:inline">—</span>
          <span className="text-white/50">© 2026 ALL RIGHTS RESERVED.</span>
        </Link>

        <p className="mt-3 sm:mt-0 text-[#DE3D1C] uppercase font-bold tracking-widest text-[11px]">
          ENGINEERED FOR HIGH-CONTRAST PERFORMANCE.
        </p>
      </div>

      {/* Huge Background Typography Watermark Across Bottom */}
      <div className="w-full flex justify-center overflow-hidden pointer-events-none select-none -mb-3 sm:-mb-6">
        <h1 className="text-[13vw] whitespace-nowrap font-display font-black tracking-tighter uppercase leading-none text-white/[0.06] translate-y-[22%] scale-x-[0.95]">
          THE THREE LAYERS
        </h1>
      </div>
    </footer>
  );
}