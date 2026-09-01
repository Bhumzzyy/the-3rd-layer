'use client';

import { useState } from 'react';
import { MoveRight, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Development',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 bg-[#0A0A0A] text-[#F3F0E9] border-b border-[#0A0A0A] relative dark-grain overflow-hidden">
      {/* Background Graphic Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[22vw] font-display font-black text-white/[0.02] select-none pointer-events-none leading-none">
        CONNECT
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        {/* Left Column: Dramatic Manifesto & CTA */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#DE3D1C]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#DE3D1C] font-bold">
                06 / INITIATE CONTACT
              </span>
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-display uppercase tracking-tight text-white leading-[0.88]">
              HAVE A PROJECT<br />
              <span className="text-[#DE3D1C]">IN MIND?</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#F3F0E9]/80 font-light leading-relaxed max-w-md">
            Let's build something extraordinary together. Whether you are launching a new digital venture or scaling an existing architecture, we are ready to engineer your solution.
          </p>

          {/* Contact Metadata Box */}
          <div className="border border-white/15 p-6 space-y-4 bg-black/40">
            <div className="text-[11px] font-mono text-white/50 uppercase tracking-widest">
              DIRECT CHANNELS // FAST RESPONSE GUARANTEE
            </div>

            <div className="space-y-2 text-sm font-mono">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/60">EMAIL</span>
                <a href="mailto:hello@the3rdlayer.com" className="text-white hover:text-[#DE3D1C] font-bold">
                  hello@the3rdlayer.com
                </a>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/60">WHATSAPP</span>
                <a href="https://wa.me/9313504709" target="_blank" rel="noreferrer" className="text-white hover:text-[#DE3D1C] font-bold">
                  +91 93135 04709
                </a>
              </div>

              <div className="flex justify-between pt-1">
                <span className="text-white/60">LOCATION</span>
                <span className="text-white">SURAT, GUJARAT, IN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Rectangular Editorial Form */}
        <div className="lg:col-span-7 bg-[#F3F0E9] text-[#0A0A0A] p-8 sm:p-12 md:p-14 border-2 border-[#0A0A0A] shadow-[10px_10px_0px_0px_rgba(222,61,28,1)]">
          {submitted ? (
            <div className="py-12 text-center space-y-6">
              <CheckCircle2 className="w-16 h-16 text-[#DE3D1C] mx-auto animate-bounce" />
              <h3 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-[#0A0A0A]">
                COMMISSION RECEIVED
              </h3>
              <p className="text-sm md:text-base text-[#0A0A0A]/80 font-medium max-w-md mx-auto">
                Thank you for reaching out. A lead systems architect from THE 3RD LAYER will review your project requirements and reply within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 border border-[#0A0A0A] bg-[#0A0A0A] hover:bg-[#DE3D1C] hover:border-[#DE3D1C] text-white px-6 py-3 text-xs font-mono uppercase font-bold tracking-widest transition-colors"
              >
                SUBMIT ANOTHER INQUIRY
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-between items-center border-b border-[#0A0A0A]/20 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0A0A0A] font-bold">
                  PROJECT SPECIFICATION FORM
                </span>
                <span className="text-[10px] font-mono text-[#DE3D1C] font-bold">
                  STEP 01/01
                </span>
              </div>

              {/* YOUR NAME */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-widest text-[#0A0A0A] font-bold">
                  YOUR NAME <span className="text-[#DE3D1C]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alexander Vance"
                  className="w-full bg-white border-2 border-[#0A0A0A] px-4 py-3.5 text-[#0A0A0A] font-sans text-sm outline-none focus:border-[#DE3D1C] transition-colors rounded-none placeholder:text-[#0A0A0A]/30"
                />
              </div>

              {/* EMAIL ADDRESS */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-widest text-[#0A0A0A] font-bold">
                  EMAIL ADDRESS <span className="text-[#DE3D1C]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alexander@company.com"
                  className="w-full bg-white border-2 border-[#0A0A0A] px-4 py-3.5 text-[#0A0A0A] font-sans text-sm outline-none focus:border-[#DE3D1C] transition-colors rounded-none placeholder:text-[#0A0A0A]/30"
                />
              </div>

              {/* SERVICE SELECTION */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-widest text-[#0A0A0A] font-bold">
                  PRIMARY SERVICE REQUIRED
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-white border-2 border-[#0A0A0A] px-4 py-3.5 text-[#0A0A0A] font-sans text-sm outline-none focus:border-[#DE3D1C] transition-colors rounded-none"
                >
                  <option value="Website Development">Website Architecture & Next.js</option>
                  <option value="E-Commerce Solutions">Shopify Plus / E-Commerce Store</option>
                  <option value="Mobile App Development">Mobile Application (iOS / Android)</option>
                  <option value="Digital Marketing & SEO">SEO & Growth Marketing</option>
                  <option value="Full Retainer / Custom Project">Full Retainer / Custom Project</option>
                </select>
              </div>

              {/* PROJECT DETAILS */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-widest text-[#0A0A0A] font-bold">
                  PROJECT DETAILS & GOALS <span className="text-[#DE3D1C]">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Briefly describe your objectives, target timeline, and budget parameters..."
                  className="w-full bg-white border-2 border-[#0A0A0A] px-4 py-3.5 text-[#0A0A0A] font-sans text-sm outline-none focus:border-[#DE3D1C] transition-colors rounded-none resize-none placeholder:text-[#0A0A0A]/30"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group w-full bg-[#0A0A0A] hover:bg-[#DE3D1C] text-white py-4 px-6 text-xs font-mono font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-200"
              >
                <span>START YOUR PROJECT</span>
                <MoveRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}