// import { useState, useEffect, useRef } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Newsletter from "@/components/Newsletter";
// import SEO from "@/components/SEO";
// import bookTyranny from "@/assets/book-tyranny.png";
// import dionneMessage from "@/assets/dionne-message.jpg";
// import dionnePortrait from "@/assets/dionne-portrait.jpg";

// /* ─── Testimonials ─── */
// const testimonials = [
//   {
//     quote:
//       "The book follows the narrative of an immigrant's plight and struggles, using universal human language that inspires not only people of immigrant heritage, but also those seeking to expose the lie of ordinary lives and offer a bold roadmap to exist against cultural conformity.",
//     author: "Mikey B",
//     img: dionnePortrait,
//   },
//   {
//     quote:
//       "This book hit me like a lightning bolt. Dionne's words cut through the noise and reminded me that I was made for so much more. I couldn't put it down.",
//     author: "Amazon Reader",
//     img: dionnePortrait,
//   },
//   {
//     quote:
//       "A powerful, faith-filled call to action. If you've ever felt stuck in a cycle of mediocrity, this book is your permission slip to break free.",
//     author: "Barnes & Noble Review",
//     img: dionnePortrait,
//   },
// ];

// const tyrannyForList = [
//   "Constantly questioning their goals, despite being accomplished on paper.",
//   "Has a value, message, or gift inside of you, but fear of visibility keeps you stuck.",
//   "Feels like you're living on autopilot but doesn't know how to break free.",
//   "Loves God and desires to honor Him, but doesn't know how purpose fits into your everyday life.",
//   'Has dreams you\'ve shelved because they feel "too much" or "too little."',
//   "Is tired of settling for survival when you were created for significance.",
//   "Is the strong one for everyone else but privately struggling with burnout and self-doubt.",
// ];

// const conqueringForList = [
//   'You\'ve overcome trauma and still feel like you\'re not "enough".',
//   "You want to be known for who you are and who you're becoming.",
//   "You constantly battle with comparison or imposter syndrome.",
//   "You want to heal from the wounds of rejection, comparison, or betrayal.",
//   "You're exhausted from performing for acceptance instead of living authentically.",
//   "You want to step out of a life that feels safe and start playing bigger — with strategy.",
//   "You know you're called to lead, but self-doubt keeps paralyzing your progress.",
//   "You're ready to fight back — with strategy, not just strength.",
// ];

// /* ─── Page ─── */
// const Books = () => {
//   const [activeIdx, setActiveIdx] = useState(0);
//   const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

//   const resetTimeout = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   };

//   useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () => setActiveIdx((p) => (p + 1) % testimonials.length),
//       5500
//     );
//     return resetTimeout;
//   }, [activeIdx]);

//   const prev = () => setActiveIdx((p) => (p === 0 ? testimonials.length - 1 : p - 1));
//   const next = () => setActiveIdx((p) => (p + 1) % testimonials.length);

//   return (
//     <div className="min-h-screen bg-background overflow-x-hidden">
//       <SEO
//         title="Books | Dionne Tweneboah"
//         description="Discover Dionne Tweneboah's books — The Tyranny of the Ordinary and Conquering. Bold, faith-driven reads that challenge you to break free from mediocrity."
//       />
//       <Navbar />

//       {/* ════════════════════════════════════════════════════════
//           1. HERO — The Tyranny of the Ordinary
//           Figma: dark burgundy-red bg | title + italic tagline + body copy LEFT
//                  book cover floating RIGHT | yellow "Buy The Book" CTA
//       ════════════════════════════════════════════════════════ */}
//       <section className="relative bg-[#992430] overflow-hidden">
//         {/* diagonal stripe texture */}
//         <div
//           className="absolute inset-0 pointer-events-none opacity-[0.07]"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(135deg,#fff 0,#fff 1px,transparent 0,transparent 8px)",
//           }}
//         />

//         <div className="container mx-auto px-6 lg:px-12 pt-32 pb-0">
//           <div className="grid lg:grid-cols-2 gap-8 items-end">

//             {/* LEFT — title + body + CTA */}
//             <div className="space-y-4 pb-12 lg:pb-16" data-aos="fade-right">
//               {/* Main title */}
//               <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.08]">
//                 The Tyranny of<br />the Ordinary
//               </h1>

//               {/* Italic tagline — matches Figma */}
//               <p className="text-white/85 text-base sm:text-lg italic leading-relaxed">
//                 Break free from average. Step into your extraordinary.
//               </p>

//               {/* Decorative swash line — matches Figma */}
//               <div className="pt-1">
//                 <svg width="120" height="24" viewBox="0 0 120 24" fill="none" className="opacity-60">
//                   <path d="M4 20 Q30 4 60 12 Q90 20 116 6" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
//                 </svg>
//               </div>

//               {/* Body copy — italic motivational paragraphs */}
//               <p className="text-white/75 text-sm sm:text-base italic leading-relaxed">
//                 You weren't born to blend in. You were born to shift
//                 atmospheres, rewrite generational stories, and live with
//                 intention, not inertia.
//               </p>

//               {/* Book description paragraphs */}
//               <p className="text-white/70 text-sm sm:text-base leading-relaxed">
//                 If you've ever felt the ache of living beneath your potential, The
//                 Tyranny of the Ordinary is your wake-up call. This empowering book is
//                 for every one who's tired of dimming her light to fit in. Through vivid
//                 storytelling, faith-fuelled wisdom, and powerful mindset shifts,
//                 bestselling author Dionne Tweneboah invites you to confront the
//                 comfort zones that are costing you your calling.
//               </p>

//               {/* Yellow CTA button — matches Figma "Buy The Book" */}
//               <div className="pt-2">
//                 <a
//                   id="hero-buy-btn"
//                   href="https://www.amazon.com/dp/B0CQPGY91P"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block bg-[#FFDC00] hover:bg-[#e5c700] text-black font-bold text-sm px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
//                 >
//                   Buy The Book
//                 </a>
//               </div>
//             </div>

//             {/* RIGHT — book cover flush at bottom */}
//             <div
//               className="flex justify-center lg:justify-end items-end"
//               data-aos="fade-left"
//               data-aos-delay="150"
//             >
//               <img
//                 src={bookTyranny}
//                 alt="The Tyranny of the Ordinary — book cover"
//                 className="w-52 sm:w-64 md:w-72 lg:w-80 xl:w-[22rem] drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)] animate-float"
//                 style={{ marginBottom: "-2px" }}
//               />
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════════════════════════════════
//           2. RETAILER BAR
//           Figma: white strip | Order Today pill | amazon | amazon kindle | BARNES&NOBLE
//       ════════════════════════════════════════════════════════ */}
//       <section className="bg-white border-b border-gray-200">
//         <div className="container mx-auto px-6 lg:px-12 py-5">
//           <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-10">

//             <a
//               id="retailer-order-btn"
//               href="https://www.amazon.com/dp/B0CQPGY91P"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-[#992430] hover:bg-[#7a1d26] text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors shadow-sm"
//             >
//               Order Today
//             </a>

//             <a
//               id="retailer-amazon-link"
//               href="https://www.amazon.com/dp/B0CQPGY91P"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:opacity-80 transition-opacity"
//               aria-label="Buy on Amazon"
//             >
//               <span className="text-[#FF9900] font-extrabold text-2xl tracking-tight" style={{ fontFamily: "Arial, sans-serif" }}>
//                 amazon
//               </span>
//             </a>

//             <a
//               id="retailer-kindle-link"
//               href="https://www.amazon.com/dp/B0CQPGY91P"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-1 hover:opacity-80 transition-opacity"
//               aria-label="Buy on Kindle"
//             >
//               <span className="text-[#FF9900] font-extrabold text-2xl tracking-tight" style={{ fontFamily: "Arial, sans-serif" }}>
//                 amazon
//               </span>
//               <span className="text-[#232F3E] font-semibold text-sm ml-0.5">kindle</span>
//             </a>

//             <a
//               id="retailer-bn-link"
//               href="https://www.barnesandnoble.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:opacity-80 transition-opacity"
//               aria-label="Buy on Barnes and Noble"
//             >
//               <span className="text-[#1A3A5C] font-bold text-lg tracking-wide" style={{ fontFamily: "Georgia, serif" }}>
//                 BARNES&amp;NOBLE
//               </span>
//             </a>

//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════════════════════════════════
//           3. AUTHOR MESSAGE — dark charcoal panel
//           Figma: #2a2a2a bg | Dionne colorful jacket photo LEFT |
//                  yellow "IT'S NOT TOO LATE" label + quote heading + body + CTA RIGHT
//       ════════════════════════════════════════════════════════ */}
//       <section className="bg-[#2a2a2a] py-14 md:py-20">
//         <div className="container mx-auto px-6 lg:px-12">
//           <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

//             {/* LEFT — Dionne in colorful outfit */}
//             <div
//               className="flex justify-center lg:justify-start order-2 lg:order-1"
//               data-aos="fade-right"
//             >
//               <img
//                 src={dionneMessage}
//                 alt="Dionne Tweneboah"
//                 className="w-64 sm:w-80 lg:w-full max-w-xs lg:max-w-sm object-cover rounded-lg shadow-2xl"
//               />
//             </div>

//             {/* RIGHT — message text */}
//             <div className="space-y-5 order-1 lg:order-2" data-aos="fade-left" data-aos-delay="100">
//               <p className="text-[#FFDC00] text-xs font-bold uppercase tracking-[0.2em]">
//                 IT'S NOT TOO LATE
//               </p>
//               <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-snug">
//                 "A Message from Dionne<br className="hidden md:block" />
//                 Tweneboah…"
//               </h2>

//               <p className="text-white/70 text-sm md:text-base leading-relaxed">
//                 There was a moment when I looked at my life and the most powerful
//                 question hit me: Is this all there is?
//               </p>
//               <p className="text-white/70 text-sm md:text-base leading-relaxed">
//                 From the outside, things looked fine. But on the inside, I was
//                 shrinking. I was striving, settling, surviving — not thriving.
//               </p>
//               <p className="text-white/70 text-sm md:text-base leading-relaxed">
//                 This book is the answer to that question. It's my love letter to
//                 the person who knows they're called to more. It's for the ones who
//                 secretly wonder if it's too late, in cycles of fear, perfectionism,
//                 or playing small.
//               </p>
//               <p className="text-white/70 text-sm md:text-base leading-relaxed">
//                 It's not too late. That extraordinary life you crave is still available, and
//                 I wrote this book to show you how.
//               </p>

//               <div className="pt-2">
//                 <a
//                   id="message-buy-btn"
//                   href="https://www.amazon.com/dp/B0CQPGY91P"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block bg-[#992430] hover:bg-[#7a1d26] text-white font-bold text-sm px-7 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg uppercase tracking-wide"
//                 >
//                   BUY THE TYRANNY OF THE ORDINARY
//                 </a>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════════════════════════════════
//           4. WHO THIS BOOK IS FOR — Tyranny
//           Figma: white bg | "Who This Book Is For" | script italic "If You're Wondering…"
//                  "This book is for the one who:" | 2-col numbered list | closing italic
//       ════════════════════════════════════════════════════════ */}
//       <section className="bg-white py-16 md:py-24">
//         <div className="container mx-auto px-6 lg:px-12 max-w-5xl">

//           <div className="text-center mb-10" data-aos="fade-up">
//             <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
//               Who This Book Is For
//             </h2>
//             <p className="font-heading text-2xl md:text-3xl italic text-foreground/75 mt-2">
//               If You're Wondering…
//             </p>
//             <p className="text-muted-foreground mt-3 text-sm md:text-base">
//               This book is for the one who:
//             </p>
//           </div>

//           <div
//             className="grid sm:grid-cols-2 gap-x-16 gap-y-4"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             {tyrannyForList.map((item, i) => (
//               <div key={i} className="flex items-start gap-3">
//                 <span className="flex-shrink-0 text-foreground/40 font-semibold text-sm mt-0.5 w-5">
//                   {i + 1}.
//                 </span>
//                 <p className="text-foreground/80 text-sm md:text-base leading-relaxed">{item}</p>
//               </div>
//             ))}
//           </div>

//           <p
//             className="text-center mt-12 font-heading italic text-foreground/70 text-base md:text-lg"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             If you saw yourself in even one of these —{" "}
//             <em className="not-italic font-semibold text-foreground">this book was written for you.</em>
//           </p>

//         </div>
//       </section>

//       {/* ════════════════════════════════════════════════════════
//           5. TESTIMONIALS CAROUSEL
//           Figma: white bg | prev arrow | circular photo + quote + author name | next arrow | dots
//       ════════════════════════════════════════════════════════ */}
//       <section className="bg-white border-t border-gray-100 py-14 md:py-20">
//         <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
//           <div className="flex items-center gap-4" data-aos="fade-up">

//             <button
//               id="testimonial-prev-btn"
//               onClick={prev}
//               aria-label="Previous testimonial"
//               className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-foreground hover:border-[#992430] hover:text-[#992430] transition-colors"
//             >
//               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>

//             <div className="flex-1 text-center px-2">
//               <div key={activeIdx} className="animate-fade-in" style={{ animationDuration: "0.5s" }}>
//                 <div className="flex justify-center mb-5">
//                   <img
//                     src={testimonials[activeIdx].img}
//                     alt={testimonials[activeIdx].author}
//                     className="w-14 h-14 rounded-full object-cover object-top border-2 border-[#992430]/30 shadow-md"
//                   />
//                 </div>
//                 <p className="font-heading text-sm md:text-base italic text-foreground/75 leading-relaxed mb-5">
//                   "{testimonials[activeIdx].quote}"
//                 </p>
//                 <p className="text-foreground/50 text-sm tracking-widest">
//                   — {testimonials[activeIdx].author} —
//                 </p>
//               </div>
//             </div>

//             <button
//               id="testimonial-next-btn"
//               onClick={next}
//               aria-label="Next testimonial"
//               className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-foreground hover:border-[#992430] hover:text-[#992430] transition-colors"
//             >
//               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//               </svg>
//             </button>

//           </div>

//           <div className="flex justify-center gap-2 mt-6">
//             {testimonials.map((_, i) => (
//               <button
//                 key={i}
//                 id={`testimonial-dot-${i}`}
//                 onClick={() => setActiveIdx(i)}
//                 aria-label={`Testimonial ${i + 1}`}
//                 className={`rounded-full transition-all duration-300 ${
//                   i === activeIdx
//                     ? "w-6 h-2 bg-[#992430]"
//                     : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════════════════════════════════
//           6. ABOUT THE AUTHOR
//           Figma: white bg | "About the Author" heading | bio paragraphs LEFT
//                  | "Are You Ready to Conquer the Ordinary?" sub-section + CTA
//                  | Dionne portrait (white blazer) RIGHT
//       ════════════════════════════════════════════════════════ */}
//       <section className="bg-white border-t border-gray-100 py-16 md:py-24">
//         <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

//             <div className="space-y-5" data-aos="fade-right">
//               <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
//                 About the Author
//               </h2>

//               <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
//                 Dionne Tweneboah is a bestselling author, fashion and lifestyle
//                 content creator, and purpose-alignment mentor. Known for her
//                 empowering voice and effortless elegance, Dionne helps women bridge
//                 the gap between their God-given calling and daily circumstances.
//               </p>
//               <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
//                 Through her books, online presence, and brand collaborations, she
//                 has built a global community of ambitious, faith-driven women who
//                 refuse to accept anything less than the life they were created for.
//               </p>
//               <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
//                 She's not a typical self-help guru. She's a woman in devotion to
//                 becoming — and inspiring women to live life on their own terms and
//                 shed their doubts.
//               </p>

//               <div className="pt-4 space-y-3" data-aos="fade-up" data-aos-delay="150">
//                 <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
//                   Are You Ready to<br />
//                   Conquer the Ordinary?
//                 </h3>
//                 <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
//                   This book isn't just something to read — it's a catalyst. Let this
//                   be the year you stop playing small and start rising with power.
//                 </p>
//                 <a
//                   id="author-order-copy-btn"
//                   href="https://www.amazon.com/dp/B0CQPGY91P"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block bg-[#992430] hover:bg-[#7a1d26] text-white font-semibold text-sm px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
//                 >
//                   Order Your Copy Now
//                 </a>
//               </div>
//             </div>

//             <div
//               className="flex justify-center lg:justify-end"
//               data-aos="fade-left"
//               data-aos-delay="100"
//             >
//               <img
//                 src={dionnePortrait}
//                 alt="Dionne Tweneboah — Author"
//                 className="w-64 sm:w-72 lg:w-full max-w-sm object-cover rounded-lg shadow-xl"
//               />
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════════════════════════════════
//           7. CONQUERING HERO
//           Figma: dark forest green #2d3b2e | diagonal texture | "CONQUERING" massive type
//                  | italic subtitle | body copy | "Buy The Book" white pill | book cover RIGHT
//       ════════════════════════════════════════════════════════ */}
//       <section className="relative bg-[#2d3b2e] overflow-hidden py-16 md:py-24">
//         <div
//           className="absolute inset-0 pointer-events-none opacity-[0.07]"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(135deg,#fff 0,#fff 1px,transparent 0,transparent 8px)",
//           }}
//         />

//         <div className="container mx-auto px-6 lg:px-12">
//           <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

//             <div className="space-y-5" data-aos="fade-right">
//               <div>
//                 <h2 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-none tracking-tight">
//                   CONQUERING
//                 </h2>
//                 <p className="text-white/60 text-sm italic leading-relaxed mt-3 max-w-sm">
//                   Overcome what's holding you back.<br />
//                   Become who you were born to be.
//                 </p>
//               </div>

//               <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-md">
//                 This is your next level. Conquering is for the woman who has started
//                 her journey but is ready to go deeper — into the healing, the strategy,
//                 and the faith-fuelled dominion that comes from truly knowing who you are.
//               </p>

//               <a
//                 id="conquering-buy-btn"
//                 href="https://www.amazon.com/dp/B0CQPGY91P"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block bg-white hover:bg-white/90 text-[#2d3b2e] font-bold text-sm px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5"
//               >
//                 Buy The Book
//               </a>
//             </div>

//             <div
//               className="flex justify-center lg:justify-end"
//               data-aos="fade-left"
//               data-aos-delay="150"
//             >
//               <img
//                 src={bookTyranny}
//                 alt="Conquering — book cover"
//                 className="w-48 sm:w-60 lg:w-72 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-float"
//                 style={{ animationDelay: "0.8s" }}
//               />
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════════════════════════════════
//           8. WHO THIS BOOK IS FOR — Conquering
//           Figma: off-white cream #f5f5f0 | "Who This Book Is For"
//                  "You'll feel seen in this book if:" | 2-col numbered list
//                  | dark green card at bottom with "Order Your Copy Now" CTA
//       ════════════════════════════════════════════════════════ */}
//       <section className="bg-[#f5f5f0] py-16 md:py-24">
//         <div className="container mx-auto px-6 lg:px-12 max-w-5xl">

//           <div className="text-center mb-10" data-aos="fade-up">
//             <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
//               Who This Book Is For
//             </h2>
//             <p className="text-muted-foreground mt-3 text-sm md:text-base">
//               You'll feel seen in this book if:
//             </p>
//           </div>

//           <div
//             className="grid sm:grid-cols-2 gap-x-16 gap-y-4"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             {conqueringForList.map((item, i) => (
//               <div key={i} className="flex items-start gap-3">
//                 <span className="flex-shrink-0 text-foreground/40 font-semibold text-sm mt-0.5 w-5">
//                   {i + 1}.
//                 </span>
//                 <p className="text-foreground/80 text-sm md:text-base leading-relaxed">{item}</p>
//               </div>
//             ))}
//           </div>

//           <div
//             className="mt-14 bg-[#2d3b2e] rounded-2xl p-8 md:p-12 text-center space-y-5"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <p className="font-heading italic text-white text-lg md:text-xl leading-relaxed">
//               If even one of these resonates — this book is for you.
//             </p>
//             <p className="text-white/65 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
//               You don't have to fight another battle alone — or unequipped. Conquering is
//               your guide back to yourself: the boldest, most free, and most faith-filled self.
//             </p>
//             <a
//               id="conquering-order-btn"
//               href="https://www.amazon.com/dp/B0CQPGY91P"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-[#992430] hover:bg-[#7a1d26] text-white font-bold text-sm px-10 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
//             >
//               Order Your Copy Now
//             </a>
//           </div>

//         </div>
//       </section>

//       {/* Newsletter — "Become Who You're Meant to Be" */}
//       <Newsletter />

//       <Footer />
//     </div>
//   );
// };

// export default Books;



import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import bookTyranny from "@/assets/book-tyranny.jpg";
import dionneMessage from "@/assets/dionne-message.jpg";
import dionneAbout from "@/assets/dionne-portrait.jpg";
const tyrannyFeatures = ["Constantly questions your worth, despite being accomplished on paper.", "Feels like you are living on autopilot but doesn't know how to break free.", "Has dreams your buried because they felt \"too much\" or \"too late.\"", "Is the strong one for everyone else- but silently struggling with burnout and self-doubt.", "Is multi-passionate but overwhelmed by the pressure to \"choose one thing.\"", "Has a voice, message, or gift inside of her, but fear of visibility keeps you hidden.", "Loves God and desires to honor Him, but doesn't know how purpose fits into your everyday life.", "Is tired of settling for survival when you were created for significance."];
const conqueringFeatures = ["You've overcome a lot, but still feel like you're not \"enough.\"", "You constantly battle with imposter syndrome or fear of failure.", "You're exhausted from performing for acceptance instead of living authentically.", "You know you're called to lead, but self-doubt keeps paralyzing your progress.", "You feel stuck between who you've been and who you're becoming.", "You want to heal from the wounds of rejection, comparison, or betrayal.", "You're tired of playing it safe and are ready to play by Heaven's rules.", "You're ready to fight back - with strategy, not just strength."];
const testimonials = [{
  image: "/placeholder.svg",
  quote: "The book follows the narrative of an immigrant's plight and struggles, using universal human language that anyone can benefit from. Tweneboah's piercing clarity and poetic insight expose the lie of ordinary lives and offer a bold roadmap to rebel against cultural conformity.",
  name: "Mikey B"
}, {
  image: "/placeholder.svg",
  quote: "This book changed my perspective on what it means to live with purpose. Every chapter felt like a personal conversation with someone who truly understands the struggle of wanting more.",
  name: "Sarah M"
}, {
  image: "/placeholder.svg",
  quote: "Dionne's words are both a mirror and a map. She shows you where you've been hiding and guides you toward where you're meant to be.",
  name: "Jennifer K"
}];
const Books = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero Section - Burgundy */}
    <section className="pt-20 md:pt-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-aos="fade-right">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground">
              <span className="italic font-normal">The Tyranny of</span>
              <br />
              <span className="italic font-normal">the </span>
              <span className="font-bold not-italic">Ordinary</span>
            </h1>

            <div className="space-y-1">
              <p className="text-primary-foreground/90 text-lg md:text-xl font-medium">
                Break free from average. Step into your extraordinary.
              </p>
              <svg className="w-48 h-4 mt-2" viewBox="0 0 200 10">
                <path d="M0,5 Q50,0 100,5 T200,5" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
              </svg>
            </div>

            <p className="text-primary-foreground/80 italic text-sm md:text-base leading-relaxed">
              You weren't born to blend in. You were born to shift atmospheres, rewrite generational stories, and live with intention, not inertia.
            </p>

            <p className="text-primary-foreground/70 text-sm md:text-base leading-relaxed">
              If you've ever felt the ache of living beneath your potential, The Tyranny of the Ordinary is your wake-up call. This empowering book is for every one who's tired of dimming her light to fit in. Through vivid storytelling, faith-fueled wisdom, and powerful mindset shifts, bestselling author Dionne Tweneboah invites you to confront the comfort zones that are costing you your calling.
            </p>

            <Button className="bg-[hsl(45,100%,50%)] hover:bg-[hsl(45,100%,45%)] text-black font-semibold px-8 py-3 rounded-full">
              Buy The Book
            </Button>
          </div>

          <div className="flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
            <div className="bg-[hsl(0,0%,90%)] p-8 rounded-lg shadow-2xl">
              <img src={bookTyranny} alt="The Tyranny of the Ordinary" className="w-64 md:w-80 rounded shadow-xl " />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Retailers Section */}
    <section className="py-6 bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <Button className="bg-[hsl(45,100%,50%)] hover:bg-[hsl(45,100%,45%)] text-black font-medium px-6 py-2 rounded-full">
            Order Today
          </Button>
          <span className="text-2xl md:text-3xl font-bold text-[hsl(30,100%,25%)]" style={{
            fontFamily: 'Arial, sans-serif'
          }}>
            amazon
          </span>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-xl font-bold text-[hsl(30,100%,25%)]" style={{
              fontFamily: 'Arial, sans-serif'
            }}>amazon</span>
            <span className="text-[hsl(45,100%,40%)] font-medium text-sm">kindle</span>
          </div>
          <span className="text-lg md:text-xl font-bold" style={{
            fontFamily: 'Georgia, serif'
          }}>
            <span className="text-[hsl(180,100%,20%)]">BARNES</span>
            <span className="text-[hsl(30,80%,45%)]">&</span>
            <span className="text-[hsl(180,100%,20%)]">NOBLE</span>
          </span>
        </div>
      </div>
    </section>

    {/* Message Section - Dark Gray */}
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* The dark background box that the image overlaps */}
        <div className="bg-[#333333] grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto p-8 md:p-16 relative">

          {/* Image Container with Negative Margin to overlap left and bottom */}
          <div className="relative lg:-ml-28 lg:-mb-28 flex justify-center lg:block" data-aos="fade-right">
            <img
              alt="Dionne Tweneboah"
              className="w-full max-w-md shadow-2xl"
              src={dionneMessage}
            />
          </div>

          {/* Content Area */}
          <div className="space-y-6" data-aos="fade-left">
            <p className="text-[#FFD700] font-bold uppercase tracking-wider">
              IT'S NOT TOO LATE.
            </p>

            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight">
              <span className="text-6xl absolute -ml-8 -mt-2 opacity-80">"</span>
              A Message from Dionne Tweneboah...
            </h2>

            <div className="space-y-6 text-white/90 text-lg leading-relaxed font-light">
              <p data-aos="fade-up" data-aos-delay="100">
                There was a moment when I looked at my life and asked myself a painful question: Is this all there is?
              </p>
              <p data-aos="fade-up" data-aos-delay="200">
                From the outside, things looked fine. But on the inside, I knew I was hiding. I was shrinking, settling, surviving - not thriving.
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                This book is the answer to that question. It's my love letter to the person who knows they're called to more but feel stuck in cycles of fear, perfectionism, or playing small.
              </p>
              <p data-aos="fade-up" data-aos-delay="400">
                It's for the ones who secretly wonder if it's too late or if they've missed their moment.
              </p>
              <p data-aos="fade-up" data-aos-delay="500">
                <strong>It's not too late.</strong> Your purpose didn't expire. The <strong>extraordinary</strong> life you crave is still available, and <strong>I wrote this to help you reclaim it.</strong>
              </p>
            </div>

            <div className="pt-4" data-aos="zoom-in" data-aos-delay="600">
              <button className="bg-[#992430] hover:bg-[#7a1d26] text-white px-8 py-4 uppercase tracking-widest font-bold rounded-full border border-[#FFD700]/30 transition-colors">
                BUY THE TYRANNY OF THE ORDINARY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Who This Book Is For - Tyranny */}
    <section className="py-16 md:py-24 bg-[hsl(0,0%,95%)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Who This Book Is For
          </h2>
          <p className="font-signature text-2xl md:text-3xl italic text-muted-foreground" style={{
            fontFamily: 'Brittany Signature'
          }}>
            If You're Wondering...
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="font-heading text-xl md:text-2xl font-semibold mb-8 text-center text-primary" data-aos="fade-up" data-aos-delay="100">
            This book is for the one who:
          </h3>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {tyrannyFeatures.map((feature, index) => <div key={index} className="flex items-start gap-3" data-aos="fade-up" data-aos-delay={200 + index * 50}>
              <span className="font-bold text-foreground">{index + 1}.</span>
              <p className="text-muted-foreground">{feature}</p>
            </div>)}
          </div>

          <p className="text-center mt-12 text-primary font-semibold text-lg" data-aos="fade-up" data-aos-delay="600">
            If you saw yourself in even one of these... this book was written for you.
          </p>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-8 mb-8" data-aos="zoom-in">
            <button onClick={prevTestimonial} className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="Previous testimonial">
              <ChevronLeft className="w-6 h-6 text-muted-foreground" />
            </button>

            <div className="w-32 h-32 rounded-full overflow-hidden bg-muted">
              <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} className="w-full h-full object-cover" />
            </div>

            <button onClick={nextTestimonial} className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="Next testimonial">
              <ChevronRight className="w-6 h-6 text-muted-foreground" />
            </button>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            {testimonials[currentTestimonial].quote}
          </p>

          <p className="font-heading text-lg italic text-foreground" data-aos="fade-up" data-aos-delay="200">
            ~ {testimonials[currentTestimonial].name} ~
          </p>
        </div>
      </div>
    </section>

    {/* About the Author */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="space-y-6" data-aos="fade-right">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              About the Author
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Dionne Tweneboah is a bestselling author, fashion and lifestyle content creator, and purpose-alignment mentor. Known for her empowering voice and effortless elegance, Dionne helps women bridge the gap between their God-given calling and daily confidence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through her books, online presence, and brand collaborations, she has built a global community of ambitious, faith-driven people who are reclaiming their identity, purpose, and power.
            </p>
            <p className="italic text-muted-foreground leading-relaxed font-heading">
              When she's not writing or curating intentional style content, Dionne is speaking life into people across platforms, reminding them that ordinary was never their destiny.
            </p>

            <h3 className="font-heading text-2xl md:text-3xl font-bold pt-4">
              Are You Ready to<br />Conquer the Ordinary?
            </h3>
            <p className="italic text-muted-foreground">
              This book isn't just something to read—it's something to live.<br />
              Let this be the year you stop playing small and start rising with power.
            </p>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
              Order Your Copy Now
            </Button>
          </div>

          <div className="flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
            <img src={dionneAbout} alt="Dionne Tweneboah" className="w-full max-w-md object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>

    {/* Conquering Section - Dark Gray */}
    <section className="bg-[hsl(0,0%,30%)] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6" data-aos="fade-right">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide">
              CONQUERING
            </h2>
            <div className="space-y-1">
              <p className="text-white/90 text-lg md:text-xl italic">
                Overcome what's holding you back.
              </p>
              <p className="text-white/90 text-lg md:text-xl italic">
                Become who you were born to be.
              </p>
              <svg className="w-48 h-4 mt-2" viewBox="0 0 200 10">
                <path d="M0,5 Q50,0 100,5 T200,5" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
              </svg>
            </div>

            <p className="text-white/80 italic text-sm md:text-base leading-relaxed">
              "This is not just about winning battles—it's about becoming the kind of person who never bows to fear again."
            </p>

            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Conquering is for the one who's tired of shrinking under pressure, apologizing for her strength, or second-guessing the fire in her soul. This is your permission slip to rise. Whether you're battling fear, doubt, people-pleasing, or perfectionism, this book gives you the tools to break chains and walk boldly into the life that's been calling you.
            </p>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
              Buy The Book
            </Button>
          </div>

          <div className="flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
            <div className="bg-[hsl(0,0%,85%)] p-8 rounded-lg shadow-2xl">
              <img src={bookTyranny} alt="The Tyranny of the Ordinary" className="w-64 md:w-80 rounded shadow-xlotate-0 " />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Who This Book Is For - Conquering */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Who This Book Is For
          </h2>
        </div>

        <div className="max-w-5xl mx-auto bg-[hsl(0,0%,95%)] rounded-lg p-8 md:p-12" data-aos="zoom-in">
          <h3 className="font-heading text-xl md:text-2xl font-semibold mb-8 text-center text-primary">
            You'll feel seen in this book if:
          </h3>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {conqueringFeatures.map((feature, index) => <div key={index} className="flex items-start gap-3" data-aos="fade-up" data-aos-delay={index * 50}>
              <span className="font-bold text-foreground">{index + 1}.</span>
              <p className="text-muted-foreground">{feature}</p>
            </div>)}
          </div>

          <p className="text-center mt-12 text-primary font-semibold text-lg" data-aos="fade-up" data-aos-delay="400">
            If even one of these resonates - this book is for you.
          </p>
        </div>

        <div className="text-center mt-12 space-y-6" data-aos="fade-up" data-aos-delay="500">
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
            You don't have to fight another battle alone - or unequipped.<br />
            Conquering is your guide back to your boldest, most free, and most faith-filled self.
          </p>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
            Order Your Copy Now
          </Button>
        </div>
      </div>
    </section>

    {/* Newsletter Section */}
    <Newsletter />

    <Footer />
  </div>;
};
export default Books;
