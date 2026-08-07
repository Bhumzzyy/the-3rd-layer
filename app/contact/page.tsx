'use client';
import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-28 bg-chex-dark">
      <Cursor />
      <Navbar />

      <section className="py-24 px-6 md:px-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-bold block mb-2">Get in touch</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-4">Ready To Build Something Amazing?</h1>
            <p className="text-sm md:text-base text-white/80 font-light">
              "Let's bring your idea to life and create digital experiences that drive real growth."
            </p>
          </div>
          
          <form 
            onSubmit={(e) => e.preventDefault()} 
            className="space-y-6 p-8 md:p-12 bg-black border-2 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
          >
            <div>
              <label className="block text-xs uppercase tracking-widest text-white mb-2 font-bold">Your Name</label>
              <input type="text" className="w-full bg-black border border-white px-4 py-3 text-white outline-none" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-white mb-2 font-bold">Email Address</label>
              <input type="email" className="w-full bg-black border border-white px-4 py-3 text-white outline-none" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-white mb-2 font-bold">Project Message</label>
              <textarea rows={4} className="w-full bg-black border border-white px-4 py-3 text-white outline-none resize-none" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" className="w-full bg-white text-black py-4 uppercase text-xs tracking-widest font-bold hover:bg-black hover:text-white hover:border hover:border-white transition-all">
              Start Your Project
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}