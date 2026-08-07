// 'use client';

// export default function Contact() {
//   return (
//     <section className="py-32 px-6 md:px-24 bg-white text-black border-b border-neutral-200 relative overflow-hidden">
//       <div className="max-w-3xl mx-auto relative z-10">
//         <div className="text-sm tracking-widest text-neutral-500 uppercase mb-8">03 / Get in Touch</div>
        
//         {/* Glassmorphism Form Container */}
//         <form 
//           onSubmit={(e) => e.preventDefault()} 
//           className="space-y-8 p-8 md:p-12 rounded-2xl bg-neutral-100/60 backdrop-blur-xl border border-neutral-200/80 shadow-2xl shadow-neutral-200/50"
//         >
//           <div>
//             <label className="block text-xs uppercase tracking-widest text-neutral-600 mb-2 font-medium">Your Name</label>
//             <input 
//               type="text" 
//               className="w-full bg-white/50 border border-neutral-200 rounded-lg px-4 py-4 text-black placeholder:text-neutral-400 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all duration-300" 
//               placeholder="John Doe" 
//             />
//           </div>
//           <div>
//             <label className="block text-xs uppercase tracking-widest text-neutral-600 mb-2 font-medium">Email Address</label>
//             <input 
//               type="email" 
//               className="w-full bg-white/50 border border-neutral-200 rounded-lg px-4 py-4 text-black placeholder:text-neutral-400 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all duration-300" 
//               placeholder="john@example.com" 
//             />
//           </div>
//           <div>
//             <label className="block text-xs uppercase tracking-widest text-neutral-600 mb-2 font-medium">Project Message</label>
//             <textarea 
//               rows={4} 
//               className="w-full bg-white/50 border border-neutral-200 rounded-lg px-4 py-4 text-black placeholder:text-neutral-400 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all duration-300 resize-none" 
//               placeholder="Tell us about your project..."
//             ></textarea>
//           </div>
//           <button 
//             type="submit" 
//             className="w-full bg-black text-white rounded-lg px-8 py-4 uppercase text-xs tracking-widest font-semibold hover:bg-neutral-800 transition-all duration-300 shadow-md"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// 'use client';

// export default function Contact() {
//   return (
//     <section className="py-32 px-6 md:px-24 bg-white text-black border-b border-black relative overflow-hidden bg-chex-light">
//       <div className="max-w-3xl mx-auto relative z-10">
//         <div className="text-sm tracking-widest text-black uppercase mb-8 font-bold">03 / Get in Touch</div>
        
//         <form 
//           onSubmit={(e) => e.preventDefault()} 
//           className="space-y-8 p-8 md:p-12 rounded-none bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
//         >
//           <div>
//             <label className="block text-xs uppercase tracking-widest text-black mb-2 font-bold">Your Name</label>
//             <input 
//               type="text" 
//               className="w-full bg-white border border-black rounded-none px-4 py-4 text-black placeholder:text-black/40 focus:bg-black focus:text-white focus:border-black outline-none transition-all duration-300" 
//               placeholder="John Doe" 
//             />
//           </div>
//           <div>
//             <label className="block text-xs uppercase tracking-widest text-black mb-2 font-bold">Email Address</label>
//             <input 
//               type="email" 
//               className="w-full bg-white border border-black rounded-none px-4 py-4 text-black placeholder:text-black/40 focus:bg-black focus:text-white focus:border-black outline-none transition-all duration-300" 
//               placeholder="john@example.com" 
//             />
//           </div>
//           <div>
//             <label className="block text-xs uppercase tracking-widest text-black mb-2 font-bold">Project Message</label>
//             <textarea 
//               rows={4} 
//               className="w-full bg-white border border-black rounded-none px-4 py-4 text-black placeholder:text-black/40 focus:bg-black focus:text-white focus:border-black outline-none transition-all duration-300 resize-none" 
//               placeholder="Tell us about your project..."
//             ></textarea>
//           </div>
//           <button 
//             type="submit" 
//             className="w-full bg-black text-white rounded-none px-8 py-4 uppercase text-xs tracking-widest font-bold hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-300"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }



'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-24 bg-black text-white border-b border-white relative overflow-hidden bg-chex-dark">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Ready To Build Something Amazing?</h2>
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
  );
}