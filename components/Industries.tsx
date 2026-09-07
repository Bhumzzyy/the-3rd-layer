'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const industries = [
  {
    code: 'IND.01',
    num: '01',
    name: 'E-COMMERCE & RETAIL BRANDS',
    subtitle: 'High-Converting Stores · Rapid Checkout',
    focus: 'Fast-loading custom storefronts and Shopify architectures engineered for one primary goal: converting store visitors into repeat buyers. We eliminate cart friction, optimize checkout speed under 1 second, and automate inventory syncing so your business handles surge volume smoothly without server crashes.',
    stack: ['Sub-1s Page Load', 'Shopify Plus / Headless', 'Cart Abandonment Recovery', 'Secure Payment Gateways'],
  },
  {
    code: 'IND.02',
    num: '02',
    name: 'EDUCATION & EDTECH PLATFORMS',
    subtitle: 'Streamlined Admissions · Video Streaming',
    focus: 'Intuitive digital learning platforms and student admission portals built to simplify complex academic workflows. We deliver high-reliability video streaming, real-time student performance tracking, and automated enrollment pipelines that parents, students, and counselors can navigate effortlessly.',
    stack: ['LMS Architecture', 'Admissions CRM Pipelines', 'Automated Assessments', 'Student Analytics Vault'],
  },
  {
    code: 'IND.03',
    num: '03',
    name: 'HEALTHCARE & MEDICAL SYSTEMS',
    subtitle: 'Patient Privacy · Instant Scheduling',
    focus: 'Secure, patient-friendly digital portals designed for absolute privacy, trust, and instant accessibility. Features clear appointment booking calendars, automated SMS/WhatsApp reminders that cut no-shows, and resilient cloud directories that comply with strict data protection standards.',
    stack: ['Zero-Friction Scheduling', 'Patient Intake Portals', 'Data Privacy Compliance', '99.99% Uptime SLA'],
  },
  {
    code: 'IND.04',
    num: '04',
    name: 'MANUFACTURING & INDUSTRIAL B2B',
    subtitle: 'Global Catalogs · RFQ Lead Engines',
    focus: 'Robust B2B digital infrastructure built for manufacturers and exporters targeting domestic and international buyers. We replace outdated PDFs with dynamic, search-indexed digital product catalogs and instant Request-For-Quote (RFQ) workflows that turn global inquiries into qualified contracts.',
    stack: ['Dynamic Product Catalogs', 'Automated RFQ Engines', 'Distributor & Dealer Portals', 'Global SEO Localization'],
  },
  {
    code: 'IND.05',
    num: '05',
    name: 'HOSPITALITY & SERVICE BUSINESSES',
    subtitle: 'Direct Bookings · Zero Commission Loss',
    focus: 'High-converting digital guest experiences that drive direct reservations, table bookings, and food orders without paying high third-party aggregator commissions. Designed with lightning-fast mobile interfaces, Google Maps local discovery optimization, and repeat customer rewards.',
    stack: ['Direct Booking Engines', 'Interactive Digital Menus', 'Google Business SEO', 'Customer Retention Funnels'],
  },
  {
    code: 'IND.06',
    num: '06',
    name: 'DIGITAL MARKETING & REVENUE SYSTEMS',
    subtitle: 'Full-Funnel CRO · Server-Side Tracking',
    focus: 'Technical growth engineering that turns advertising spend into predictable customer revenue. We build custom high-converting landing pages, server-side tracking pipelines that bypass ad-blockers, deep analytics dashboards, and automated lead follow-up systems that maximize customer lifetime value.',
    stack: ['Conversion Landing Pages', 'Server-Side Tracking (CAPI)', 'Lead Routing Automation', 'A/B Growth Sprints'],
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28 px-6 md:px-12 bg-[#F3F0E9] text-[#0A0A0A] border-b border-[#0A0A0A] relative paper-grain">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-[#0A0A0A]/20 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold block mb-2">
              04 / DOMAIN EXPERTISE
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-[#0A0A0A]">
              INDUSTRIES WE TRANSFORM
            </h2>
          </div>
          <div className="max-w-md mt-4 md:mt-0 space-y-2">
            <p className="text-xs sm:text-sm text-[#0A0A0A]/80 font-normal leading-relaxed">
              Every sector has unique operational bottlenecks and customer expectations. We engineer custom digital blueprints that build trust, eliminate friction, and produce measurable commercial returns.
            </p>
            <div className="text-[10px] font-mono text-[#0A0A0A]/50 uppercase tracking-widest">
              DEPLOYED ACROSS 6 SPECIALIZED VERTICALS
            </div>
          </div>
        </div>

        {/* Compact Editorial 6-Grid with 1px Hairline Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#0A0A0A]">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="border-r border-b border-[#0A0A0A] p-7 sm:p-8 flex flex-col justify-between bg-[#F3F0E9] hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 group"
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

        {/* Bottom Consultation Strip */}
        <div className="border border-[#0A0A0A] p-6 bg-white/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#DE3D1C] animate-pulse" />
            <span className="text-[#0A0A0A] font-semibold uppercase tracking-wider">
              OPERATING IN A SPECIALIZED OR REGULATED INDUSTRY?
            </span>
          </div>
          <Link
            href="/contact"
            className="text-[#DE3D1C] hover:text-[#0A0A0A] font-bold uppercase tracking-widest inline-flex items-center gap-2 transition-colors"
          >
            <span>SCHEDULE AN ARCHITECTURE CONSULTATION</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}