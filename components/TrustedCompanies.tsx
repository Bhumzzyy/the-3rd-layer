'use client';

import Image from 'next/image';

const clientLogos = [
  { name: 'Sabras Masala', src: '/image/company1-color.png' },
  { name: 'Al Buraq Group', src: '/image/company2-color.png' },
  { name: 'Gurukrupa Enterprise', src: '/image/company3-color.png' },
  { name: 'HM Consultech', src: '/image/company5-color.png' },
  { name: 'Universe EdTech', src: '/image/company6-color.png' },
  { name: 'Uniserve Platform', src: '/image/company7-color.png' },
  { name: 'Altius Group', src: '/image/company8-color.png' },
];

export default function TrustedCompanies() {
  return (
    <section className="py-14 bg-[#F3F0E9] text-[#0A0A0A] border-b border-[#0A0A0A] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#DE3D1C]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A] font-bold">
            TRUSTED BY INNOVATIVE BRANDS & FOUNDERS
          </span>
        </div>
        <div className="text-[10px] font-mono text-[#0A0A0A]/40 uppercase tracking-widest">
          PORTFOLIO IMPACT // 2024–2026
        </div>
      </div>

      {/* Clean Restrained Marquee Strip */}
      <div className="w-full border-t border-b border-[#0A0A0A]/15 py-6 bg-white/40">
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex items-center space-x-16 md:space-x-24">
            {clientLogos.map((client, i) => (
              <div
                key={`client-1-${i}`}
                className="relative h-12 w-36 md:h-14 md:w-44 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  sizes="176px"
                  className="object-contain"
                />
              </div>
            ))}

            {/* Duplicate for seamless infinite marquee loop */}
            {clientLogos.map((client, i) => (
              <div
                key={`client-2-${i}`}
                className="relative h-12 w-36 md:h-14 md:w-44 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  sizes="176px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}