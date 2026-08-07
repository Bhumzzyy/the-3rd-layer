// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const fullText = "THE 3RD LAYER";

// export default function Hero() {
//   const [typingComplete, setTypingComplete] = useState(false);

//   return (
//     <section className="h-screen flex flex-col items-center justify-center text-center px-4 bg-black text-white border-b border-white overflow-hidden bg-chex-dark">
//       <div className="max-w-6xl mx-auto flex flex-col items-center">
//         <motion.h1 
//           className="text-6xl sm:text-7xl md:text-[162px] font-black tracking-tighter mb-6 uppercase flex flex-wrap justify-center text-white"
//         >
//           {fullText.split("").map((char, index) => (
//             <motion.span
//               key={index}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{
//                 delay: index * 0.08,
//                 duration: 0.1,
//               }}
//               onAnimationComplete={() => {
//                 if (index === fullText.length - 1) {
//                   setTypingComplete(true);
//                 }
//               }}
//             >
//               {char === " " ? "\u00A0" : char}
//             </motion.span>
//           ))}
//         </motion.h1>

//         {typingComplete && (
//           <motion.p
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-lg md:text-5xl text-white font-light tracking-widest uppercase"
//           >
//             Development to Deployment
//           </motion.p>
//         )}
//       </div>
//     </section>
//   );
// }





// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const fullText = "THE 3RD LAYER";

// export default function Hero() {
//   const [typingComplete, setTypingComplete] = useState(false);

//   const handleSubtextAnimationComplete = () => {
//     setTimeout(() => {
//       const aboutSection = document.getElementById('about');
//       if (!aboutSection) return;

//       // Scroll so the bottom of the About section aligns with the bottom of the viewport,
//       // displaying all three paragraphs together on screen.
//       const targetPosition = aboutSection.offsetTop + aboutSection.offsetHeight - window.innerHeight;
//       const startPosition = window.pageYOffset;
//       const distance = targetPosition - startPosition;
//       const duration = 2400; // Smooth slow glide duration
//       let startTime: number | null = null;

//       const animation = (currentTime: number) => {
//         if (startTime === null) startTime = currentTime;
//         const timeElapsed = currentTime - startTime;
//         const progress = Math.min(timeElapsed / duration, 1);

//         const ease = progress < 0.5 
//           ? 2 * progress * progress 
//           : -1 + (4 - 2 * progress) * progress;

//         window.scrollTo(0, startPosition + distance * ease);

//         if (timeElapsed < duration) {
//           requestAnimationFrame(animation);
//         }
//       };

//       requestAnimationFrame(animation);
//     }, 1000);
//   };

//   return (
//     <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-black text-white overflow-hidden bg-chex-dark relative">
//       <div className="max-w-5xl w-full mx-auto flex flex-col items-center justify-center min-h-[60vh]">

//         {/* Main Title */}
//         <motion.h1 
//           className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter uppercase flex flex-wrap justify-center text-white"
//         >
//           {fullText.split("").map((char, index) => (
//             <motion.span
//               key={index}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: index * 0.08, duration: 0.1 }}
//               onAnimationComplete={() => {
//                 if (index === fullText.length - 1) setTypingComplete(true);
//               }}
//             >
//               {char === " " ? "\u00A0" : char}
//             </motion.span>
//           ))}
//         </motion.h1>

//         {/* Subtext container */}
//         <div className="mt-8 min-h-[140px] flex flex-col items-center justify-center">
//           {typingComplete && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               onAnimationComplete={handleSubtextAnimationComplete}
//               className="space-y-4 flex flex-col items-center"
//             >
//               <h2 className="text-xl md:text-3xl font-bold tracking-tight max-w-3xl">
//                 Building Digital Systems That Help Businesses Grow
//               </h2>
//               <p className="text-sm md:text-base text-white/80 font-light max-w-2xl mx-auto">
//                 "We don't just build websites — we become your technology partner. Every product we ship connects to the next."
//               </p>
//             </motion.div>
//           )}
//         </div>

//       </div>
//     </section>
//   );
// }

// By parth 





'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fullText = "THE 3RD LAYER";

export default function Hero() {
  const [typingComplete, setTypingComplete] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(true);

  useEffect(() => {
    // 1. Check if the user is navigating to a specific section (e.g., /#about)
    const hasHash = window.location.hash.length > 0;

    // 2. Check if the user has already seen the intro in this browser tab session
    const hasSeenIntro = sessionStorage.getItem('heroIntroSeen') === 'true';

    // If either is true, we disable the auto-scroll
    if (hasHash || hasSeenIntro) {
      setShouldScroll(false);
    } else {
      // Otherwise, mark the intro as seen so it doesn't scroll again if they come back from /work
      sessionStorage.setItem('heroIntroSeen', 'true');
    }
  }, []);

  const handleSubtextAnimationComplete = () => {
    // Escape early! Do not auto-scroll if the user is returning or using a footer link.
    if (!shouldScroll) return;

    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (!aboutSection) return;

      // FIX: Scroll to the TOP of the section, minus an 80px offset for your fixed navbar
      const navbarOffset = 80;
      const targetPosition = aboutSection.offsetTop - navbarOffset;

      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 2400; // Smooth slow glide duration
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const ease = progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }, 1000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-black text-white overflow-hidden bg-chex-dark relative">
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center justify-center min-h-[60vh]">

        {/* Main Title */}
        <motion.h1
          className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter uppercase flex flex-wrap justify-center text-white"
        >
          {fullText.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.08, duration: 0.1 }}
              onAnimationComplete={() => {
                if (index === fullText.length - 1) setTypingComplete(true);
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtext container */}
        <div className="mt-8 min-h-[140px] flex flex-col items-center justify-center">
          {typingComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onAnimationComplete={handleSubtextAnimationComplete}
              className="space-y-4 flex flex-col items-center"
            >
              <h2 className="text-xl md:text-3xl font-bold tracking-tight max-w-3xl">
                Building Digital Systems That Help Businesses Grow
              </h2>
              <p className="text-sm md:text-base text-white/80 font-light max-w-2xl mx-auto">
                "We don't just build websites — we become your technology partner. Every product we ship connects to the next."
              </p>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}