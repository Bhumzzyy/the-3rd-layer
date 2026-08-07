// 'use client';
// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white text-white px-6 md:px-16 py-4 flex items-center justify-between">
//       <Link href="/" className="text-lg font-black tracking-tighter uppercase">
//         3rd Layer
//       </Link>
      
//       <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-semibold">
//         <Link href="/#services" className="hover:opacity-60 transition-opacity">Services</Link>
//         <Link href="/#industries" className="hover:opacity-60 transition-opacity">Industries</Link>
//         <Link href="/work" className="hover:opacity-60 transition-opacity">Work</Link>
//         {/* <Link href="/#process" className="hover:opacity-60 transition-opacity">Process</Link> */}
//         {/* <Link href="/#about" className="hover:opacity-60 transition-opacity">About</Link> */}
//         <Link href="/contact" className="hover:opacity-60 transition-opacity">Contact</Link>
//       </nav>

//       <Link href="/contact" className="bg-white text-black px-5 py-2 text-xs uppercase font-bold tracking-widest">
//         Start a Project
//       </Link>
//     </header>
//   );
// }




'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white px-6 md:px-16 py-6 flex items-center justify-between border-b border-white/20 bg-chex-dark">
      <Link href="/" className="text-lg md:text-xl font-black tracking-tighter uppercase hover:opacity-80 transition-opacity">
        THE 3RD LAYER
      </Link>
      <nav className="flex items-center space-x-8 text-xs uppercase tracking-widest font-bold">
        <Link href="#services" className="hover:opacity-60 transition-opacity">Services</Link>
        <Link href="/work" className="hover:opacity-60 transition-opacity">Work</Link>
        <Link href="/contact" className="hover:opacity-60 transition-opacity">Contact</Link>
      </nav>
    </header>
  );
}