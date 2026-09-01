'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Scope & Audit',
    desc: 'Understanding your business goals, target audience, and digital bottleneck analysis.',
  },
  {
    step: '02',
    title: 'RESEARCH',
    subtitle: 'Strategy & Spec',
    desc: 'Competitive intelligence, technological roadmap, and database/system specification.',
  },
  {
    step: '03',
    title: 'DESIGN',
    subtitle: 'Editorial UI/UX',
    desc: 'Bespoke high-contrast design systems, typography hierarchies, and interactive wireframes.',
  },
  {
    step: '04',
    title: 'DEVELOP',
    subtitle: 'Full-Stack Code',
    desc: 'Clean, scalable Next.js and TypeScript engineering built for sub-second page performance.',
  },
  {
    step: '05',
    title: 'TEST',
    subtitle: 'QA & Security',
    desc: 'Cross-browser validation, mobile optimization, SEO audit, and security penetration testing.',
  },
  {
    step: '06',
    title: 'LAUNCH',
    subtitle: 'Cloud Deployment',
    desc: 'Seamless zero-downtime production deployment, DNS configuration, and live monitoring.',
  },
  {
    step: '07',
    title: 'SUPPORT',
    subtitle: 'SLA & Scale',
    desc: 'Ongoing maintenance, iterative performance optimizations, and technical partnership.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-12 bg-[#0A0A0A] text-[#F3F0E9] border-b border-[#0A0A0A] relative dark-grain">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-white/20 pb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold block mb-2">
              05 / EXECUTION FRAMEWORK
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-white">
              HOW WE WORK
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-[#F3F0E9]/70 font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            A linear, high-velocity engineering process engineered to take concepts to market-ready production without bloat.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Scrollable System */}
        <div className="hidden lg:block border border-white/20 bg-[#0A0A0A]">
          <div className="grid grid-cols-7 divide-x divide-white/20">
            {steps.map((s, idx) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-6 xl:p-8 flex flex-col justify-between min-h-[340px] hover:bg-[#F3F0E9] hover:text-[#0A0A0A] transition-all duration-300 group"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl font-display font-bold text-[#DE3D1C] group-hover:text-[#DE3D1C]">
                      {s.step}
                    </span>
                    {idx < steps.length - 1 && (
                      <span className="text-xs font-mono text-white/30 group-hover:text-[#0A0A0A]/40 font-bold">
                        →
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg xl:text-xl font-display uppercase tracking-tight text-white group-hover:text-[#0A0A0A] mb-1">
                    {s.title}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#DE3D1C] group-hover:text-[#DE3D1C] block mb-4 font-bold">
                    {s.subtitle}
                  </span>
                </div>

                <p className="text-xs text-[#F3F0E9]/70 group-hover:text-[#0A0A0A]/80 font-light leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="block lg:hidden border border-white/20 divide-y divide-white/20 bg-[#0A0A0A]">
          {steps.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:bg-[#F3F0E9] hover:text-[#0A0A0A] transition-colors group"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl font-display font-bold text-[#DE3D1C]">
                  {s.step}
                </span>
                <div>
                  <h3 className="text-xl font-display uppercase tracking-tight text-white group-hover:text-[#0A0A0A]">
                    {s.title}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#DE3D1C] block font-semibold">
                    {s.subtitle}
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#F3F0E9]/75 group-hover:text-[#0A0A0A]/80 font-light max-w-sm sm:text-right leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer line */}
        <div className="flex justify-between items-center pt-4 border-t border-white/15 text-xs font-mono text-[#F3F0E9]/50">
          <div>STANDARD TIMELINE: 2–6 WEEKS FROM DISCOVERY TO LAUNCH</div>
          <div className="text-[#DE3D1C] font-bold">100% TRANSPARENT SPRINTS</div>
        </div>
      </div>
    </section>
  );
}