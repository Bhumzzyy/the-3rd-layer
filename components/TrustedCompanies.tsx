// 'use client';

// const companies = [
//   "Nimbus Retail", "Coastal Health Group", "Vertex Realty", "Bloom & Co.", 
//   "Iron Gate Manufacturing", "Sunrise Hospitality", "Northfield Education", "Pixel & Pine"
// ];

// export default function TrustedCompanies() {
//   return (
//     <section className="py-16 border-b border-black overflow-hidden bg-white text-black bg-chex-light">
//       <div className="text-center text-xs uppercase tracking-widest font-bold mb-8">Trusted by businesses worldwide</div>
//       <div className="flex overflow-hidden whitespace-nowrap select-none">
//         <div className="animate-marquee flex space-x-16 items-center">
//           {companies.map((company, i) => (
//             <span key={`comp-1-${i}`} className="text-lg md:text-2xl font-black uppercase tracking-tighter">
//               {company}
//             </span>
//           ))}
//           {companies.map((company, i) => (
//             <span key={`comp-2-${i}`} className="text-lg md:text-2xl font-black uppercase tracking-tighter">
//               {company}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';

// const grayImages = [
//   "/image/company1.png",
//   "/image/company2.png",
//   "/image/company3.png",
//   "/image/company5.png",
//   "/image/company6.png",
//   "/image/company7.png",
//     "/image/company8.png",
// ];

// // Assuming your color versions are in the same folder with '-color' or separate filenames, 
// // adjust paths here if your file names differ (e.g., "/image/company1-color.png")
// const colorImages = [
//   "/image/company1-color.png",
//   "/image/company2-color.png",
//   "/image/company3-color.png",
//   "/image/company5-color.png",
//   "/image/company6-color.png",
//   "/image/company7-color.png",
//   "/image/company8-color.png",
// ];

// export default function TrustedCompanies() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setCursorPos({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//     setHoveredIndex(index);
//   };

//   return (
//     <section className="py-20 border-b border-black overflow-hidden bg-white text-black bg-chex-light">
//       <div className="text-center text-xs uppercase tracking-widest font-bold mb-12">Trusted by businesses worldwide</div>
//       <div className="flex overflow-hidden whitespace-nowrap select-none">
//         <div className="animate-marquee flex space-x-20 items-center">
//           {grayImages.map((src, i) => (
//             <div 
//               key={`comp-1-${i}`} 
//               onMouseMove={(e) => handleMouseMove(e, i)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               className="relative w-44 h-20 flex items-center justify-center cursor-pointer overflow-hidden"
//             >
//               {/* Default Grayscale Image */}
//               <Image 
//                 src={src} 
//                 alt={`Trusted Company ${i + 1}`} 
//                 fill 
//                 className="object-contain filter grayscale"
//               />

//               {/* Color Lens Reveal on Hover */}
//               {hoveredIndex === i && (
//                 <div 
//                   className="absolute inset-0 pointer-events-none"
//                   style={{
//                     clipPath: `circle(50px at ${cursorPos.x}px ${cursorPos.y}px)`,
//                   }}
//                 >
//                   <Image 
//                     src={colorImages[i]} 
//                     alt={`Trusted Company Color ${i + 1}`} 
//                     fill 
//                     className="object-contain"
//                   />
//                 </div>
//               )}
//             </div>
//           ))}

//           {/* Duplicate loop for seamless marquee continuity */}
//           {grayImages.map((src, i) => (
//             <div 
//               key={`comp-2-${i}`} 
//               onMouseMove={(e) => handleMouseMove(e, i + grayImages.length)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               className="relative w-44 h-20 flex items-center justify-center cursor-pointer overflow-hidden"
//             >
//               <Image 
//                 src={src} 
//                 alt={`Trusted Company Duplicate ${i + 1}`} 
//                 fill 
//                 className="object-contain filter grayscale"
//               />

//               {hoveredIndex === i + grayImages.length && (
//                 <div 
//                   className="absolute inset-0 pointer-events-none"
//                   style={{
//                     clipPath: `circle(50px at ${cursorPos.x}px ${cursorPos.y}px)`,
//                   }}
//                 >
//                   <Image 
//                     src={colorImages[i]} 
//                     alt={`Trusted Company Color Duplicate ${i + 1}`} 
//                     fill 
//                     className="object-contain"
//                   />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// By parth 




'use client';
import { useState } from 'react';
import Image from 'next/image';

// We continue using only the color images to ensure perfect alignment via CSS filters
const colorImages = [
  "/image/company1-color.png",
  "/image/company2-color.png",
  "/image/company3-color.png",
  "/image/company5-color.png",
  "/image/company6-color.png",
  "/image/company7-color.png",
  "/image/company8-color.png",
];

export default function TrustedCompanies() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredIndex(index);
  };

  return (
    // Reverted to py-20
    <section className="py-20 border-b border-black overflow-hidden bg-white text-black bg-chex-light">
      {/* Reverted to text-xs and mb-12 */}
      <div className="text-center text-xs uppercase tracking-widest font-bold mb-12">
        Trusted by businesses worldwide
      </div>
      
      <div className="flex overflow-hidden whitespace-nowrap select-none">
        {/* Reverted to space-x-20 */}
        <div className="animate-marquee flex space-x-20 items-center">
          
          {colorImages.map((src, i) => (
            <div 
              key={`comp-1-${i}`} 
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => setHoveredIndex(null)}
              // Reverted to w-44 h-20
              className="relative w-44 h-20 flex items-center justify-center cursor-pointer overflow-hidden"
            >
              {/* Base layer (Grayscale) */}
              <Image 
                src={src} 
                alt={`Trusted Company ${i + 1}`} 
                fill 
                className="object-contain filter grayscale opacity-60 transition-opacity duration-300"
              />

              {/* Hover layer (Color) */}
              {hoveredIndex === i && (
                <div 
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    // Reverted to 50px circle
                    clipPath: `circle(50px at ${cursorPos.x}px ${cursorPos.y}px)`,
                  }}
                >
                  <Image 
                    src={src} 
                    alt={`Trusted Company Color ${i + 1}`} 
                    fill 
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          ))}

          {/* Duplicate loop */}
          {colorImages.map((src, i) => (
            <div 
              key={`comp-2-${i}`} 
              onMouseMove={(e) => handleMouseMove(e, i + colorImages.length)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative w-44 h-20 flex items-center justify-center cursor-pointer overflow-hidden"
            >
              <Image 
                src={src} 
                alt={`Trusted Company Duplicate ${i + 1}`} 
                fill 
                className="object-contain filter grayscale opacity-60 transition-opacity duration-300"
              />

              {hoveredIndex === i + colorImages.length && (
                <div 
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    clipPath: `circle(50px at ${cursorPos.x}px ${cursorPos.y}px)`,
                  }}
                >
                  <Image 
                    src={src} 
                    alt={`Trusted Company Color Duplicate ${i + 1}`} 
                    fill 
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}