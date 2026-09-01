'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const pillars = [
  {
    num: '01',
    title: 'ARCHITECTURE & DESIGN',
    desc: 'We craft high-contrast, ultra-minimal digital architectures tailored for pure visual impact, intuitive human interaction, and unforgettable brand memorability.',
    tags: ['UI/UX Systems', 'Brand Direction', 'Design Engineering', 'Editorial Layouts'],
  },
  {
    num: '02',
    title: 'ENGINEERING & SCALE',
    desc: 'Engineered using modern stacks like Next.js, TypeScript, Tailwind, and resilient cloud architectures — ensuring lightning-fast performance, rock-solid security, and robust code.',
    tags: ['Full-Stack Web', 'Mobile Apps', 'E-Commerce Engines', 'API Infrastructures'],
  },
  {
    num: '03',
    title: 'DEPLOYMENT & EVOLUTION',
    desc: 'Optimized continuous integration pipelines, automated cloud hardening, and 24/7 technical monitoring. Every product we ship connects seamlessly to your long-term business trajectory.',
    tags: ['Cloud Deployment', 'Performance SEO', 'Continuous Support', 'Analytics Pipelines'],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-[#F3F0E9] text-[#0A0A0A] border-b border-[#0A0A0A] relative paper-grain">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-[#0A0A0A]/20 pb-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold block mb-2">
              01 / STUDIO MANIFESTO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-[#0A0A0A]">
              THE 3RD LAYER <br />PHILOSOPHY
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-medium tracking-tight text-[#0A0A0A] leading-snug">
              "We don't just build websites — we become your technology partner. Every system we engineer is designed to connect to the next."
            </p>
            <p className="text-sm md:text-base text-[#0A0A0A]/70 font-normal leading-relaxed max-w-2xl">
              In an era of generic templates and bloated SaaS interfaces, THE 3RD LAYER stands for intentional brutalism, Swiss typographic precision, and uncompromising code execution. We help ambitious founders and businesses build digital assets that stand out and convert.
            </p>
          </div>
        </div>

        {/* 3 Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#0A0A0A]">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 md:p-10 flex flex-col justify-between bg-[#F3F0E9] hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 group ${
                idx !== 2 ? 'border-b md:border-b-0 md:border-r border-[#0A0A0A]' : ''
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xs font-mono font-bold text-[#DE3D1C] group-hover:text-[#DE3D1C] px-2 py-1 border border-current">
                    PILLAR {pillar.num}
                  </span>
                  <span className="text-xs font-mono text-[#0A0A0A]/40 group-hover:text-white/40">
                    [SYS.0{idx + 1}]
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-display uppercase tracking-tight mb-4 group-hover:text-white transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs md:text-sm text-[#0A0A0A]/75 group-hover:text-[#F3F0E9]/80 font-light leading-relaxed mb-8 transition-colors">
                  {pillar.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#0A0A0A]/10 group-hover:border-white/15">
                  {pillar.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-[#0A0A0A]/5 group-hover:bg-white/10 text-[#0A0A0A] group-hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom studio CTA bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-[#0A0A0A]/15 text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/60">
          <div>ENGINEERED FOR HIGH SPEED & CONVERSION</div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-[#0A0A0A] hover:text-[#DE3D1C] font-bold mt-4 sm:mt-0 transition-colors"
          >
            <span>INQUIRE ABOUT PARTNERSHIP</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}