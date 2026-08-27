'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const services = [
  { num: "01", title: "Website Development", desc: "Fast, responsive, SEO-friendly websites that convert visitors." },
  { num: "02", title: "Mobile App Development", desc: "Powerful mobile apps for Android and iOS platforms." },
  { num: "03", title: "E-Commerce Solutions", desc: "Online stores that sell more and scale seamlessly." },
  { num: "04", title: "Digital Marketing", desc: "Strategies that grow brand visibility and generate leads." },
  { num: "05", title: "Maintenance & Support", desc: "We keep your digital assets secure, updated, and running." }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateScrollRange = () => {
      if (trackRef.current) {
        const totalTrackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const endPadding = window.innerWidth >= 768 ? 64 : 24;
        // Total horizontal distance to bring Card 05 fully into view with matching right padding
        const distance = Math.max(0, totalTrackWidth - viewportWidth + endPadding);
        setScrollRange(distance);
      }
    };

    updateScrollRange();

    const resizeObserver = new ResizeObserver(() => {
      updateScrollRange();
    });

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }
    window.addEventListener('resize', updateScrollRange);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateScrollRange);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth scroll mapping:
  // 0% -> 4%: slight hold at beginning (lets user see heading & Card 01)
  // 4% -> 84%: smooth horizontal scroll through all 5 cards
  // 84% -> 100%: holds Card 05 completely in view so user can view/read it fully before scrolling down to next section
  const xTransform = useTransform(scrollYProgress, (progress) => {
    if (scrollRange <= 0) return 0;
    if (progress <= 0.04) return 0;
    if (progress >= 0.84) return -scrollRange;
    const t = (progress - 0.04) / (0.84 - 0.04);
    return -t * scrollRange;
  });

  return (
    <section
      id="services"
      ref={containerRef}
      className="h-[380vh] relative bg-black text-white border-b border-white bg-chex-dark"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

        {/* Section Header */}
        <div className="max-w-4xl mb-8 md:mb-10 space-y-3 px-6 md:px-16">
          <div className="text-xs md:text-sm tracking-widest text-white uppercase font-bold">
            02 / Services
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-white/60 font-bold block">
              What we do
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Complete Digital Solutions Under One Roof
            </h2>
          </div>

          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-white/90 tracking-wide pt-1">
            Everything your business needs to scale from zero to market leader.
          </h3>

          <p className="text-xs md:text-sm lg:text-base text-white/80 font-light pt-1 max-w-3xl leading-relaxed">
            "Every service we offer is designed to connect with the next — a website that feeds your marketing, marketing that feeds your analytics."
          </p>
        </div>

        {/* Horizontal Scrolling Track */}
        <div className="w-full overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x: xTransform }}
            className="flex gap-8 md:gap-12 pl-6 md:pl-16 w-max"
          >
            {services.map((service, idx) => (
              <div
                key={idx}
                className="w-[82vw] sm:w-[50vw] md:w-[36vw] lg:w-[30vw] h-[38vh] min-h-[260px] max-h-[360px] border-2 border-white p-6 md:p-8 flex flex-col justify-between bg-black shadow-2xl shrink-0 hover:border-white/80 transition-all duration-300 group"
              >
                <span className="text-white font-mono text-lg md:text-xl font-bold group-hover:translate-x-1 transition-transform inline-block">
                  {service.num}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm md:text-base font-light mb-5 leading-relaxed">
                    {service.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="text-xs uppercase tracking-widest font-bold underline hover:opacity-60 transition-opacity inline-flex items-center gap-1"
                  >
                    Explore Service →
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}