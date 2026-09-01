'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#F3F0E9] border-t border-white/20 pt-20 pb-0 relative overflow-hidden dark-grain select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pb-16">
        {/* Main 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/15">
          {/* LEFT: Studio Identity (Span 5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl md:text-3xl font-display uppercase tracking-tight text-white hover:text-[#DE3D1C] transition-colors"
            >
              <span className="w-3 h-3 bg-[#DE3D1C]" />
              <span>THE 3RD LAYER</span>
            </Link>

            <p className="text-sm text-[#F3F0E9]/70 font-light leading-relaxed max-w-sm">
              An independent digital studio crafting high-contrast web architectures, scalable e-commerce systems, and bespoke digital products for forward-thinking brands.
            </p>

            <div className="text-xs font-mono text-[#F3F0E9]/50 space-y-1 pt-2">
              <div>STUDIO: SURAT, GUJARAT, INDIA</div>
              <div>COORDINATES: 21.1702° N, 72.8311° E</div>
              <div className="text-[#DE3D1C] font-bold">READY FOR WORLDWIDE COMMISSIONS</div>
            </div>
          </div>

          {/* CENTER: Navigation Sitemap (Span 3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold block">
              / DIRECTORY
            </span>
            <ul className="space-y-3 text-xs font-mono uppercase tracking-wider font-semibold">
              <li>
                <Link href="/#services" className="text-white/80 hover:text-[#DE3D1C] transition-colors inline-flex items-center gap-1.5">
                  <span>01</span> <span>SERVICES</span>
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-white/80 hover:text-[#DE3D1C] transition-colors inline-flex items-center gap-1.5">
                  <span>02</span> <span>ABOUT</span>
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-white/80 hover:text-[#DE3D1C] transition-colors inline-flex items-center gap-1.5">
                  <span>03</span> <span>PROCESS</span>
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-white/80 hover:text-[#DE3D1C] transition-colors inline-flex items-center gap-1.5">
                  <span>04</span> <span>WORK</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-[#DE3D1C] transition-colors inline-flex items-center gap-1.5">
                  <span>05</span> <span>CONTACT</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT: Channels & Socials (Span 4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold block">
              / CONNECT
            </span>
            <ul className="space-y-3 text-xs font-mono uppercase tracking-wider font-semibold">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex justify-between items-center text-white/80 hover:text-white border-b border-white/10 pb-1.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform">LINKEDIN</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#DE3D1C] transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex justify-between items-center text-white/80 hover:text-white border-b border-white/10 pb-1.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform">X / TWITTER</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#DE3D1C] transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex justify-between items-center text-white/80 hover:text-white border-b border-white/10 pb-1.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform">GITHUB</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#DE3D1C] transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@the3rdlayer.com"
                  className="group flex justify-between items-center text-white/80 hover:text-white border-b border-white/10 pb-1.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform">EMAIL US</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#DE3D1C] transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/9313504709"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex justify-between items-center text-white/80 hover:text-white border-b border-white/10 pb-1.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform">WHATSAPP</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#DE3D1C] transition-colors" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Performance Row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-white/50 tracking-wider">
          <p>© 2026 THE 3RD LAYER. ALL RIGHTS RESERVED.</p>
          <p className="mt-4 sm:mt-0 text-[#DE3D1C] uppercase font-bold tracking-widest">
            ENGINEERED FOR HIGH-CONTRAST PERFORMANCE.
          </p>
        </div>
      </div>

      {/* Huge Cropped Background Typography Watermark */}
      <div className="w-full flex justify-center overflow-hidden pointer-events-none select-none -mb-3 sm:-mb-6">
        <h1 className="text-[14vw] whitespace-nowrap font-display font-black tracking-tighter uppercase leading-none text-white/[0.04] translate-y-[22%] scale-x-[0.92]">
          THE 3RD LAYER
        </h1>
      </div>
    </footer>
  );
}