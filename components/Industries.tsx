'use client';

import { motion } from 'framer-motion';

const industries = [
  {
    code: 'IND.01',
    name: 'REAL ESTATE & ARCHITECTURE',
    focus: 'High-converting luxury property portals, dynamic MLS/CRM sync, virtual tour architecture, and lead capture systems.',
    stack: ['Property Portals', 'Virtual Tours', 'CRM Sync', 'Local SEO'],
  },
  {
    code: 'IND.02',
    name: 'HEALTHCARE & LIFE SCIENCES',
    focus: 'Patient appointment scheduling engines, tele-consultation portals, HIPAA-ready security, and responsive clinical directories.',
    stack: ['Booking Systems', 'Patient Portals', 'Data Compliance', 'Fast Load Speed'],
  },
  {
    code: 'IND.03',
    name: 'EDUCATION & EDTECH',
    focus: 'Course management platforms, automated admissions trackers, student dashboards, and real-time learning analytics.',
    stack: ['LMS Portals', 'Admissions CRM', 'Video Streaming', 'Student Analytics'],
  },
  {
    code: 'IND.04',
    name: 'HOSPITALITY & RESTAURANT',
    focus: 'Direct online ordering systems, interactive digital menus, multi-location discovery, and customer loyalty workflows.',
    stack: ['Direct Ordering', 'Menu Engines', 'Google Maps SEO', 'Loyalty Integration'],
  },
  {
    code: 'IND.05',
    name: 'E-COMMERCE & DIRECT-TO-CONSUMER',
    focus: 'Custom Shopify Plus storefronts, headless commerce architectures, automated inventory, and high-converting checkouts.',
    stack: ['Custom Shopify', 'Payment Gateways', 'Inventory Sync', 'Retention Funnels'],
  },
  {
    code: 'IND.06',
    name: 'MANUFACTURING & INDUSTRIAL',
    focus: 'B2B export catalogs, digital RFQ engines, dealer distribution portals, and global supply chain presentation.',
    stack: ['B2B Catalogs', 'RFQ Systems', 'Dealer Portals', 'Multi-Language'],
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 md:py-32 px-6 md:px-12 bg-[#F3F0E9] text-[#0A0A0A] border-b border-[#0A0A0A] relative paper-grain">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-[#0A0A0A]/20 pb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold block mb-2">
              04 / DOMAIN EXPERTISE
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-[#0A0A0A]">
              INDUSTRIES WE TRANSFORM
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-[#0A0A0A]/70 font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            Tailored digital blueprints engineered specifically for each industry's operational model and customer acquisition funnel.
          </p>
        </div>

        {/* Compact Editorial 6-Grid with 1px Hairline Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#0A0A0A]">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="border-r border-b border-[#0A0A0A] p-8 sm:p-10 flex flex-col justify-between bg-[#F3F0E9] hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-mono font-bold text-[#DE3D1C]">
                    {ind.code}
                  </span>
                  <span className="text-[10px] font-mono text-[#0A0A0A]/40 group-hover:text-white/40 uppercase">
                    SECTOR // 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight mb-4 group-hover:text-white transition-colors">
                  {ind.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#0A0A0A]/75 group-hover:text-[#F3F0E9]/80 font-light leading-relaxed mb-8 transition-colors">
                  {ind.focus}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#0A0A0A]/10 group-hover:border-white/15">
                  {ind.stack.map((item, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border border-[#0A0A0A]/20 group-hover:border-white/20 bg-white/40 group-hover:bg-white/10 text-[#0A0A0A] group-hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}