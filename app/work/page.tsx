'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MoveRight, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';

const archiveProjects = [
  {
    id: '01',
    name: "Jenil's Sabras Masala",
    category: 'E-Commerce',
    tech: ['Shopify Plus', 'React', 'Tailwind CSS', 'Klaviyo'],
    metric: '+180% Online Orders',
    desc: 'Flagship e-commerce platform designed for global spice distribution, customized product bundle builder, and blazing fast multi-currency checkout.',
    image: '/image/Jenils_sabras_masala_website.png',
    link: 'https://jenilsmasala.com/',
  },
  {
    id: '02',
    name: 'Al-Buraq Perfumes & Realty',
    category: 'Mobile App',
    tech: ['Flutter', 'Dart', 'Cloud Firestore', 'Rest API'],
    metric: '50K+ Play Store Installs',
    desc: 'Cross-platform luxury fragrance discovery and boutique real estate portfolio application with offline catalog syncing and push notification campaigns.',
    image: '/image/Al-Buraq_Samples.jpg',
    link: 'https://play.google.com/store/apps/details?id=io.alburaq.app&hl=en_IN',
  },
  {
    id: '03',
    name: 'Gurukrupa Enterprises',
    category: 'Corporate Platform',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind', 'Vercel'],
    metric: '+240% Inquiries',
    desc: 'Heavy machinery and precision components manufacturing portal built for B2B export clients, dynamic RFQ generator, and technical documentation library.',
    image: '/image/gurukripaenterprise.com_.png',
    link: 'https://gurukripaenterprise.com/',
  },
  {
    id: '04',
    name: 'HM Consultech',
    category: 'Consulting Portal',
    tech: ['Next.js', 'React', 'Framer Motion', 'SEO Ops'],
    metric: 'Top 3 Search Rank',
    desc: 'Corporate consultation platform delivering interactive service advisories, automated appointment scheduling, and client intake workflows.',
    image: '/image/www.hmconsultech.com_.png',
    link: 'https://www.hmconsultech.com/',
  },
  {
    id: '05',
    name: 'Uniserve Career Counseling',
    category: 'EdTech Platform',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind'],
    metric: '4.9★ User Rating',
    desc: 'Comprehensive educational advisory platform connecting students with global university pathways, admissions trackers, and document vaults.',
    image: '/image/company7-color.png',
    link: '/contact',
  },
  {
    id: '06',
    name: 'Altius Education Inc.',
    category: 'Educational Website',
    tech: ['React', 'Next.js', 'Tailwind', 'Cloudflare'],
    metric: '10K+ Active Learners',
    desc: 'Modern digital learning portal engineered with video course streaming, automated assessments, and intuitive student progress analytics.',
    image: '/image/company8-color.png',
    link: 'https://www.altiuseducation.ca/',
  },
];

const categories = ['ALL', 'E-Commerce', 'Mobile App', 'Corporate Platform', 'Consulting Portal', 'EdTech Platform'];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filteredProjects =
    selectedCategory === 'ALL'
      ? archiveProjects
      : archiveProjects.filter((p) => p.category === selectedCategory);

  return (
    <main className="bg-[#F3F0E9] text-[#0A0A0A] min-h-screen selection:bg-[#DE3D1C] selection:text-white paper-grain">
      <Cursor />
      <Navbar />

      {/* Top Hero Banner */}
      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12 border-b border-[#0A0A0A]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#0A0A0A]/60 hover:text-[#DE3D1C] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RETURN HOME</span>
            </Link>
            <span className="text-[#0A0A0A]/30">/</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold">
              PORTFOLIO ARCHIVE
            </span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 border-b border-[#0A0A0A]/20 pb-10">
            <div>
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-display uppercase tracking-tight text-[#0A0A0A] leading-none">
                SELECTED WORKS
              </h1>
              <p className="text-sm md:text-base text-[#0A0A0A]/70 font-normal max-w-xl mt-4">
                A curated index of production digital systems, custom e-commerce engines, and high-performance applications deployed by THE 3RD LAYER.
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-mono uppercase tracking-wider px-3.5 py-1.5 border transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                      : 'bg-transparent text-[#0A0A0A]/70 border-[#0A0A0A]/30 hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group border-2 border-[#0A0A0A] bg-white flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(10,10,10,1)] hover:shadow-[10px_10px_0px_0px_rgba(222,61,28,1)] transition-all duration-300"
              >
                {/* Project Image Frame */}
                <div className="relative h-64 sm:h-80 bg-[#0A0A0A] overflow-hidden border-b-2 border-[#0A0A0A]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white px-2.5 py-1 uppercase">
                    [{project.id}] // {project.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#DE3D1C] text-white text-[10px] font-mono font-bold px-2.5 py-1 uppercase">
                    {project.metric}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-[#0A0A0A] mb-3">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0A0A0A]/75 font-light leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-[#0A0A0A]/10">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border border-[#0A0A0A]/20 bg-[#F3F0E9] text-[#0A0A0A]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target={project.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      className="group/btn inline-flex items-center justify-between w-full bg-[#0A0A0A] hover:bg-[#DE3D1C] text-white px-5 py-3 text-xs font-mono font-bold tracking-widest uppercase transition-colors"
                    >
                      <span>VISIT LIVE SYSTEM</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="py-20 px-6 md:px-12 bg-[#0A0A0A] text-[#F3F0E9] border-t border-[#0A0A0A] dark-grain">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold">
            INITIATE A NEW COMMISSION
          </span>
          <h2 className="text-4xl sm:text-6xl font-display uppercase tracking-tight text-white">
            READY TO JOIN OUR PORTFOLIO?
          </h2>
          <p className="text-sm md:text-base text-[#F3F0E9]/70 font-light max-w-xl mx-auto">
            We partner with a limited number of clients each quarter to guarantee uncompromising attention to detail and engineering rigor.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#DE3D1C] hover:bg-[#C53213] text-white px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase transition-colors shadow-2xl"
            >
              <span>START YOUR PROJECT</span>
              <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}