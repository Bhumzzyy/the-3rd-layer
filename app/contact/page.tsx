'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <main className="bg-[#0A0A0A] text-[#F3F0E9] min-h-screen selection:bg-[#DE3D1C] selection:text-white pt-16">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}