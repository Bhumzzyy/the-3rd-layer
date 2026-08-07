// // 'use client';
// // import { useEffect, useState } from 'react';

// // export default function Cursor() {
// //   const [position, setPosition] = useState({ x: -100, y: -100 });

// //   useEffect(() => {
// //     const updateCursor = (e: MouseEvent) => {
// //       setPosition({ x: e.clientX, y: e.clientY });
// //     };
// //     window.addEventListener('mousemove', updateCursor);
// //     return () => window.removeEventListener('mousemove', updateCursor);
// //   }, []);

// //   return (
// //     <div
// //       className="negative-cursor hidden md:block"
// //       style={{
// //         transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
// //       }}
// //     />
// //   );
// // }



// 'use client';
// import { useEffect, useState } from 'react';

// export default function Cursor() {
//   const [position, setPosition] = useState({ x: -100, y: -100 });

//   useEffect(() => {
//     const updateCursor = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', updateCursor);
//     return () => window.removeEventListener('mousemove', updateCursor);
//   }, []);

//   return (
//     <div
//       // Added Tailwind classes to guarantee it stays on top, fixed to the screen, and doesn't block clicks
//       className="negative-cursor hidden md:block pointer-events-none fixed top-0 left-0 z-[9999]"
//       style={{
//         transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
//       }}
//     />
//   );
// }




// 'use client';
// import { useEffect, useState } from 'react';

// export default function Cursor() {
//   const [position, setPosition] = useState({ x: -100, y: -100 });

//   useEffect(() => {
//     const updateCursor = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', updateCursor);
//     return () => window.removeEventListener('mousemove', updateCursor);
//   }, []);

//   return (
//     <div
//       // ADDED: pointer-events-none so it doesn't block clicks
//       // ADDED: z-[9999] so it always stays on top of everything
//       className="negative-cursor hidden md:block pointer-events-none z-[9999]"
//       style={{
//         transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
//         position: 'fixed', // Ensure it's fixed to the screen (if not already in your .negative-cursor class)
//         top: 0,
//         left: 0,
//       }}
//     />
//   );
// }



'use client';
import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if the mouse is hovering over a link, button, or an element with the class 'hover-grow'
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"], .hover-grow');
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', updateCursor);
    
    // Also handle edge cases where the mouse might enter/leave without moving
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"], .hover-grow');
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className="negative-cursor hidden md:block pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        // Dynamically change size based on hover state (overrides the CSS width/height)
        width: isHovering ? '72px' : '36px',
        height: isHovering ? '72px' : '36px',
      }}
    />
  );
}