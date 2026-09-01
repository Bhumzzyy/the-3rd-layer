import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import TrustedCompanies from '@/components/TrustedCompanies';
import Work from '@/components/Work';
import Industries from '@/components/Industries';
import TechTicker from '@/components/TechTicker';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#F3F0E9] text-[#0A0A0A] relative min-h-screen selection:bg-[#DE3D1C] selection:text-white">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TrustedCompanies />
      <Work />
      <Industries />
      <TechTicker />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}