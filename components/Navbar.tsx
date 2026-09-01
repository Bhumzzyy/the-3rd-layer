'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '/work' },
    { name: 'ABOUT', href: '/#about' },
    { name: 'SERVICES', href: '/#services' },
    { name: 'PROCESS', href: '/#process' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b border-[#0A0A0A]/15 bg-[#F3F0E9]/90 backdrop-blur-md ${
          scrolled ? 'py-3' : 'py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
          {/* Logo / Studio Name */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-xl md:text-2xl font-display uppercase tracking-tight text-[#0A0A0A] hover:text-[#DE3D1C] transition-colors"
          >
            <span className="inline-block w-2.5 h-2.5 bg-[#DE3D1C] group-hover:scale-125 transition-transform" />
            <span>THE 3RD LAYER</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8 text-xs font-mono tracking-widest text-[#0A0A0A]/80 font-bold uppercase">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#DE3D1C] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#DE3D1C] hover:after:w-full after:transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              className="border border-[#0A0A0A] bg-[#0A0A0A] text-[#F3F0E9] hover:bg-[#DE3D1C] hover:border-[#DE3D1C] hover:text-white px-4 py-2 text-xs font-mono uppercase font-bold tracking-widest transition-all duration-200"
            >
              CONTACT
            </Link>

            {/* Menu Drawer Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 border border-[#0A0A0A]/20 hover:border-[#0A0A0A] flex flex-col justify-center items-center gap-1.5 transition-colors p-2 bg-[#F3F0E9]"
              aria-label="Toggle Menu"
            >
              <span className={`w-4 h-[1.5px] bg-[#0A0A0A] transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
              <span className={`w-4 h-[1.5px] bg-[#0A0A0A] transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-4 h-[1.5px] bg-[#0A0A0A] transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/contact"
              className="bg-[#0A0A0A] text-[#F3F0E9] text-[10px] font-mono font-bold tracking-widest px-3 py-1.5 uppercase"
            >
              START
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 border border-[#0A0A0A] flex flex-col justify-center items-center gap-1.5 p-2 bg-[#0A0A0A] text-white"
              aria-label="Toggle Mobile Menu"
            >
              <span className={`w-4 h-[1.5px] bg-[#F3F0E9] transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
              <span className={`w-4 h-[1.5px] bg-[#F3F0E9] transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-4 h-[1.5px] bg-[#F3F0E9] transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen / Side Editorial Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] text-[#F3F0E9] pt-24 pb-12 px-6 md:px-16 flex flex-col justify-between"
          >
            {/* Background watermark */}
            <div className="absolute right-0 bottom-0 text-[18vw] font-display text-white/[0.03] select-none pointer-events-none leading-none pr-4">
              STUDIO
            </div>

            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
              {/* Menu Meta */}
              <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-white/15 pb-6 md:pb-0 md:pr-8">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#DE3D1C] block mb-3 font-bold">
                  / DIRECTORY & NAVIGATION
                </span>
                <p className="text-sm text-[#F3F0E9]/70 font-light leading-relaxed mb-6">
                  THE 3RD LAYER is an independent digital studio designing and engineering high-impact web architectures, software, and brand systems.
                </p>
                <div className="text-xs font-mono text-[#F3F0E9]/50 space-y-1">
                  <div>LOC: SURAT / GUJARAT / IN</div>
                  <div>STATUS: OPEN FOR SELECT COMMISSIONS</div>
                </div>
              </div>

              {/* Main Menu Links */}
              <div className="md:col-span-8 flex flex-col justify-center space-y-4 md:pl-8">
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-baseline justify-between border-b border-white/10 pb-3 hover:border-[#DE3D1C] transition-colors"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs font-mono text-[#DE3D1C]">0{idx + 1}</span>
                      <span className="text-4xl sm:text-5xl md:text-6xl font-display tracking-tight text-white group-hover:text-[#DE3D1C] group-hover:translate-x-3 transition-all duration-200">
                        {link.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all">
                      {"→"}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="max-w-6xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-[#F3F0E9]/50">
              <div>© 2026 THE 3RD LAYER</div>
              <div className="flex gap-6 mt-4 sm:mt-0">
                <a href="mailto:hello@the3rdlayer.com" className="hover:text-[#DE3D1C] transition-colors">
                  HELLO@THE3RDLAYER.COM
                </a>
                <a href="https://wa.me/9313504709" target="_blank" rel="noreferrer" className="hover:text-[#DE3D1C] transition-colors">
                  WHATSAPP
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}