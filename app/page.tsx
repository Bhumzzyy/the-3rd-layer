// import Cursor from '../components/Cursor';
// import Hero from '../components/Hero';
// import About from '../components/About';
// import TechTicker from '../components/TechTicker';
// import Services from '../components/Services';
// import Work from '../components/Work';
// import Contact from '../components/Contact';
// import Footer from '../components/Footer';

// export default function Home() {
//   return (
//     <main className="bg-black text-white relative min-h-screen">
//       <Cursor />
//       <Hero />
//       <About />
//       <TechTicker />
//       <Services />
//       <Work />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }

import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedCompanies from '@/components/TrustedCompanies';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import TechTicker from '@/components/TechTicker';
import Process from '@/components/Process';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black text-white relative min-h-screen">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <TrustedCompanies />
      <Services />
      <Industries />
      <TechTicker />
      <Process />
      {/* <Stats /> */}
      {/* <Testimonials /> */}
      <Footer />
    </main>
  );
}