'use client';

import { motion } from 'framer-motion';

const industries = [
  {
    code: 'IND.01',
    num: '01',
    name: 'E-COMMERCE & RETAIL BRANDS',
    subtitle: 'High-Converting Stores · Rapid Checkout',
    focus: 'Fast custom storefronts and Shopify architectures engineered to eliminate cart friction and maximize checkout conversions.',
    stack: ['Sub-1s Page Load', 'Shopify Plus / Headless', 'Cart Recovery', 'Secure Payments'],
  },
  {
    code: 'IND.02',
    num: '02',
    name: 'EDUCATION & EDTECH PLATFORMS',
    subtitle: 'Streamlined Admissions · Video Streaming',
    focus: 'Intuitive learning platforms and student admission portals built for seamless academic workflows and high engagement.',
    stack: ['LMS Architecture', 'Admissions CRM', 'Automated Assessments', 'Student Analytics'],
  },
  {
    code: 'IND.03',
    num: '03',
    name: 'HEALTHCARE & MEDICAL SYSTEMS',
    subtitle: 'Patient Privacy · Instant Scheduling',
    focus: 'Secure, trusted healthcare portals featuring automated appointment scheduling and strict data privacy compliance.',
    stack: ['Zero-Friction Booking', 'Patient Intake', 'Data Privacy', '99.99% Uptime'],
  },
  {
    code: 'IND.04',
    num: '04',
    name: 'MANUFACTURING & INDUSTRIAL B2B',
    subtitle: 'Global Catalogs · RFQ Lead Engines',
    focus: 'Robust B2B digital infrastructure with dynamic product catalogs and automated quote workflows for global buyers.',
    stack: ['Product Catalogs', 'RFQ Lead Engines', 'Distributor Portals', 'Global SEO'],
  },
  {
    code: 'IND.05',
    num: '05',
    name: 'HOSPITALITY & SERVICE BUSINESSES',
    subtitle: 'Direct Bookings · Zero Commission Loss',
    focus: 'Direct reservation systems and guest mobile experiences designed to drive bookings without third-party commission cuts.',
    stack: ['Direct Booking', 'Digital Menus', 'Local Discovery SEO', 'Retention Funnels'],
  },
  {
    code: 'IND.06',
    num: '06',
    name: 'DIGITAL MARKETING & REVENUE SYSTEMS',
    subtitle: 'Full-Funnel CRO · Server-Side Tracking',
    focus: 'High-converting acquisition landing pages, server-side tracking pipelines, and automated lead routing systems.',
    stack: ['Conversion Funnels', 'Server-Side CAPI', 'Lead Automation', 'A/B Growth Ops'],
  },
];

const getCardBorderClasses = (idx: number) => {
  let classes = 'border-[#0A0A0A] ';

  // Mobile (1 col): bottom border on items 0-4, none on item 5
  if (idx < 5) {
    classes += 'border-b-2 ';
  } else {
    classes += 'border-b-0 ';
  }

  // Tablet (md: 2 cols):
  // Bottom border on items 0-3, none on items 4-5
  if (idx < 4) {
    classes += 'md:border-b-2 ';
  } else {
    classes += 'md:border-b-0 ';
  }
  // Right border on col 0 (even idx: 0, 2, 4), none on col 1 (odd idx: 1, 3, 5)
  if (idx % 2 === 0) {
    classes += 'md:border-r-2 ';
  } else {
    classes += 'md:border-r-0 ';
  }

  // Desktop (lg: 3 cols):
  // Bottom border on top row (items 0, 1, 2), none on bottom row (items 3, 4, 5)
  if (idx < 3) {
    classes += 'lg:border-b-2 ';
  } else {
    classes += 'lg:border-b-0 ';
  }
  // Right border on col 0 & 1 (idx % 3 !== 2), none on col 2 (idx 2, 5)
  if (idx % 3 !== 2) {
    classes += 'lg:border-r-2 ';
  } else {
    classes += 'lg:border-r-0 ';
  }

  return classes;
};

export default function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28 px-6 md:px-12 bg-[#F3F0E9] text-[#0A0A0A] border-b border-[#0A0A0A] relative paper-grain">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="border-b border-[#0A0A0A]/20 pb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold block mb-2">
            04 / DOMAIN EXPERTISE
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-[#0A0A0A]">
            INDUSTRIES WE TRANSFORM
          </h2>
        </div>

        {/* Compact Editorial 6-Grid with Only Thick Inner Separator Lines, No Outer Box Border */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className={`${getCardBorderClasses(idx)} p-7 sm:p-8 flex flex-col justify-between bg-[#F3F0E9] hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 group`}
            >
              <div>
                <div className="flex justify-between items-center mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#DE3D1C]" />
                    <span className="text-xs font-mono font-bold text-[#DE3D1C]">
                      {ind.code}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#0A0A0A]/40 group-hover:text-white/40 uppercase tracking-wider">
                    SECTOR // {ind.num}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight mb-1 group-hover:text-white transition-colors leading-snug">
                  {ind.name}
                </h3>

                <span className="text-[11px] font-mono uppercase tracking-wider text-[#DE3D1C] block mb-3 font-semibold">
                  {ind.subtitle}
                </span>

                <p className="text-xs sm:text-sm text-[#0A0A0A]/80 group-hover:text-[#F3F0E9]/85 font-light leading-relaxed mb-6 transition-colors">
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