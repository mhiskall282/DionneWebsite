import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import bookTyranny from "@/assets/book-tyranny.png";
import dionneMessage from "@/assets/dionne-message.jpg";
import dionnePortrait from "@/assets/dionne-portrait.jpg";

/* ─────────────────────────────────────────────────────────────────────────── */

const testimonials = [
  {
    quote:
      "The book follows the narrative of an immigrant's plight and struggles, using universal human language that inspires not only people of immigrant heritage, but also those seeking to expose the lie of ordinary lives and offer a bold roadmap to exist against cultural conformity.",
    author: "Mikey B",
    img: dionnePortrait,
  },
  {
    quote:
      "This book hit me like a lightning bolt. Dionne's words cut through the noise and reminded me that I was made for so much more. I couldn't put it down.",
    author: "Amazon Reader",
    img: dionnePortrait,
  },
  {
    quote:
      "A powerful, faith-filled call to action. If you've ever felt stuck in a cycle of mediocrity, this book is your permission slip to break free.",
    author: "Barnes & Noble Review",
    img: dionnePortrait,
  },
];

const tyrannyForList = [
  "Constantly questioning their goals, despite being accomplished on paper.",
  "Has a value, message, or gift inside of you, but fear of visibility keeps you stuck.",
  "Feels like you're living on autopilot but doesn't know how to break free.",
  "Loves God and desires to honor Him, but doesn't know how purpose fits into your everyday life.",
  "Has dreams you've shelved because they feel \"too much\" or \"too little.\"",
  "Is tired of settling for survival when you were created for significance.",
  "Is the strong one for everyone else but privately struggling with burnout and self-doubt.",
];

const conqueringForList = [
  "You've overcome trauma and still feel like you're not \"enough\".",
  "You want to be known for who you are and who you're becoming.",
  "You constantly battle with comparison or imposter syndrome.",
  "You want to heal from the wounds of rejection, comparison, or betrayal.",
  "You're exhausted from performing for acceptance instead of living authentically.",
  "You want to step out of a life that feels safe and start playing bigger — with strategy.",
  "You know you're called to lead, but self-doubt keeps paralyzing your progress.",
  "You're ready to fight back — with strategy, not just strength.",
];

/* ─────────────────────────────────────────────────────────────────────────── */

const Books = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setActiveIdx((p) => (p + 1) % testimonials.length),
      5500
    );
    return () => resetTimeout();
  }, [activeIdx]);

  const prev = () =>
    setActiveIdx((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () =>
    setActiveIdx((p) => (p + 1) % testimonials.length);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title="Books | Dionne Tweneboah"
        description="Discover Dionne Tweneboah's books — The Tyranny of the Ordinary and Conquering. Bold, faith-driven reads that challenge you to break free from mediocrity."
      />
      <Navbar />

      {/* ══════════════════════════════════════════════════════
          1. HERO — The Tyranny of the Ordinary
      ══════════════════════════════════════════════════════ */}
      <section className="relative bg-[#992430] overflow-hidden">
        {/* diagonal stripe texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg,#fff 0,#fff 1px,transparent 0,transparent 8px)",
          }}
        />

        <div className="container mx-auto px-6 lg:px-10 pt-32 pb-0">
          <div className="grid lg:grid-cols-2 gap-8 items-end">

            {/* LEFT — text */}
            <div className="space-y-5 pb-10 lg:pb-16" data-aos="fade-right">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                The Tyranny of<br />the Ordinary
              </h1>

              <p className="text-white/80 text-base sm:text-lg italic leading-relaxed">
                Break free from average. Step into your extraordinary.
              </p>

              <p className="text-white/65 text-sm sm:text-base leading-relaxed max-w-md">
                A bold, faith-driven guide to dismantling the mediocre life you've
                been conditioned to accept — and stepping courageously into the
                extraordinary life God designed for you.
              </p>

              <div className="pt-2">
                <a
                  id="hero-order-today-btn"
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FFDC00] hover:bg-[#e5c700] text-black font-bold text-sm px-7 py-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Order Today
                </a>
              </div>
            </div>

            {/* RIGHT — book cover */}
            <div
              className="flex justify-center lg:justify-end items-end"
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <img
                src={bookTyranny}
                alt="The Tyranny of the Ordinary — book cover"
                className="w-52 sm:w-64 md:w-72 lg:w-80 xl:w-[22rem] drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)] animate-float"
                style={{ marginBottom: "-2px" }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. RETAILER BAR
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-10 py-5">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-10">

            {/* Order Today pill */}
            <a
              id="retailer-order-btn"
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#992430] hover:bg-[#7a1d26] text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors shadow-sm"
            >
              Order Today
            </a>

            {/* Amazon */}
            <a
              id="retailer-amazon-link"
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:opacity-80 transition-opacity"
              aria-label="Buy on Amazon"
            >
              <span className="text-[#FF9900] font-extrabold text-2xl tracking-tight" style={{ fontFamily: "Arial, sans-serif" }}>
                amazon
              </span>
            </a>

            {/* Amazon Kindle */}
            <a
              id="retailer-kindle-link"
              href="https://www.amazon.com/kindle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:opacity-80 transition-opacity"
              aria-label="Buy on Kindle"
            >
              <span className="text-[#FF9900] font-extrabold text-2xl tracking-tight" style={{ fontFamily: "Arial, sans-serif" }}>
                amazon
              </span>
              <span className="text-[#232F3E] font-semibold text-sm ml-0.5">kindle</span>
            </a>

            {/* Barnes & Noble */}
            <a
              id="retailer-bn-link"
              href="https://www.barnesandnoble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Buy on Barnes and Noble"
            >
              <span className="text-[#1A3A5C] font-bold text-lg tracking-wide" style={{ fontFamily: "Georgia, serif" }}>
                BARNES&amp;NOBLE
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. AUTHOR MESSAGE — dark panel
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#2a2a2a] py-14 md:py-20">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* LEFT — Dionne photo (colorful outfit) */}
            <div
              className="flex justify-center lg:justify-start order-2 lg:order-1"
              data-aos="fade-right"
            >
              <img
                src={dionneMessage}
                alt="Dionne Tweneboah"
                className="w-64 sm:w-80 lg:w-full max-w-xs lg:max-w-sm object-cover rounded-lg shadow-2xl"
              />
            </div>

            {/* RIGHT — message */}
            <div className="space-y-5 order-1 lg:order-2" data-aos="fade-left" data-aos-delay="100">
              <p className="text-[#FFDC00] text-xs font-bold uppercase tracking-[0.2em]">
                IT'S NOT TOO LATE
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-snug">
                "A Message from Dionne<br className="hidden md:block" />
                Tweneboah…"
              </h2>

              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                There was a moment when I looked at my life and the most powerful
                question hit me: Is this all there is?
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                From the outside, things looked fine. But on the inside, I was
                shrinking. I was striving, settling, surviving — not thriving.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                This book is the answer to that question. It's my love letter to
                the person who knows they're called to more. It's for the ones who
                secretly wonder if it's too late.
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                It's for the ones who secretly wonder if it's too late. It's not
                too late. That extraordinary life you crave is still available, and
                I wrote this book to show you how.
              </p>

              <div className="pt-2">
                <a
                  id="message-buy-btn"
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#992430] hover:bg-[#7a1d26] text-white font-bold text-sm px-7 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg uppercase tracking-wide"
                >
                  BUY THE TYRANNY OF THE ORDINARY
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. WHO THIS BOOK IS FOR — Tyranny
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-10 max-w-5xl">

          {/* Heading block */}
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Who This Book Is For
            </h2>
            <p className="font-heading text-2xl md:text-3xl italic text-foreground/80 mt-2">
              If You're Wondering…
            </p>
            <p className="text-muted-foreground mt-3 text-sm md:text-base">
              This book is for the one who:
            </p>
          </div>

          {/* 2-column numbered list */}
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-4" data-aos="fade-up" data-aos-delay="100">
            {tyrannyForList.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 text-foreground/40 font-semibold text-sm mt-0.5 w-5">
                  {i + 1}.
                </span>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Closing italic */}
          <p
            className="text-center mt-12 font-heading italic text-foreground/70 text-base md:text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            If you saw yourself in even one of these —{" "}
            <em className="not-italic font-semibold text-foreground">this book was written for you.</em>
          </p>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. TESTIMONIALS CAROUSEL
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white border-t border-gray-100 py-14 md:py-20">
        <div className="container mx-auto px-6 lg:px-10 max-w-3xl">
          <div className="flex items-center gap-4" data-aos="fade-up">

            {/* Prev arrow */}
            <button
              id="testimonial-prev-btn"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-foreground hover:border-[#992430] hover:text-[#992430] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Quote area */}
            <div className="flex-1 text-center px-2">
              <div key={activeIdx} className="animate-fade-in" style={{ animationDuration: "0.5s" }}>
                {/* Circular reviewer photo */}
                <div className="flex justify-center mb-5">
                  <img
                    src={testimonials[activeIdx].img}
                    alt={testimonials[activeIdx].author}
                    className="w-14 h-14 rounded-full object-cover object-top border-2 border-[#992430]/30 shadow-md"
                  />
                </div>

                <p className="font-heading text-sm md:text-base italic text-foreground/75 leading-relaxed mb-5">
                  "{testimonials[activeIdx].quote}"
                </p>

                <p className="text-foreground/50 text-sm tracking-widest">
                  — {testimonials[activeIdx].author} —
                </p>
              </div>
            </div>

            {/* Next arrow */}
            <button
              id="testimonial-next-btn"
              onClick={next}
              aria-label="Next testimonial"
              className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-foreground hover:border-[#992430] hover:text-[#992430] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                id={`testimonial-dot-${i}`}
                onClick={() => setActiveIdx(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIdx
                    ? "w-6 h-2 bg-[#992430]"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. ABOUT THE AUTHOR
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white border-t border-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-10 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* LEFT — bio + Are You Ready CTA */}
            <div className="space-y-5" data-aos="fade-right">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                About the Author
              </h2>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Dionne Tweneboah is a bestselling author, fashion and lifestyle
                content creator, and purpose-alignment mentor. Known for her
                empowering voice and effortless elegance, Dionne helps women bridge
                the gap between their God-given calling and daily circumstances.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Through her books, online presence, and brand collaborations, she
                has built a global community of ambitious, faith-driven women who
                refuse to accept anything less than the life they were created for.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                She's not your typical self-help guru. She's a woman in devotion to
                becoming — and inspiring women to live life on their own terms and
                shed their doubts.
              </p>

              {/* Are You Ready to Conquer — inline under bio */}
              <div className="pt-4 space-y-3" data-aos="fade-up" data-aos-delay="150">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Are You Ready to<br />
                  Conquer the Ordinary?
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  This book isn't just something to read — it's a catalyst. Let this
                  be the year you stop playing small and start rising with power.
                </p>
                <a
                  id="author-order-copy-btn"
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#992430] hover:bg-[#7a1d26] text-white font-semibold text-sm px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Order Your Copy Now
                </a>
              </div>
            </div>

            {/* RIGHT — Dionne formal/white blazer photo */}
            <div
              className="flex justify-center lg:justify-end"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <img
                src={dionnePortrait}
                alt="Dionne Tweneboah — Author"
                className="w-64 sm:w-72 lg:w-full max-w-sm object-cover rounded-lg shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          7. CONQUERING HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative bg-[#2d3b2e] overflow-hidden py-16 md:py-24">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg,#fff 0,#fff 1px,transparent 0,transparent 8px)",
          }}
        />

        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* LEFT — text */}
            <div className="space-y-5" data-aos="fade-right">
              <div>
                <h2 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-none tracking-tight">
                  CONQUERING
                </h2>
                <p className="text-white/60 text-sm italic leading-relaxed mt-3 max-w-sm">
                  Overcome what's holding you back.<br />
                  Become who you were born to be.
                </p>
              </div>

              <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-md">
                This is your next level. Conquering is for the woman who has started
                her journey but is ready to go deeper — into the healing, the strategy,
                and the faith-fuelled dominion that comes from truly knowing who you are.
              </p>

              <a
                id="conquering-buy-btn"
                href="https://www.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white hover:bg-white/90 text-[#2d3b2e] font-bold text-sm px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Buy The Book
              </a>
            </div>

            {/* RIGHT — book cover */}
            <div
              className="flex justify-center lg:justify-end"
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <img
                src={bookTyranny}
                alt="Conquering — book cover"
                className="w-48 sm:w-60 lg:w-72 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-float"
                style={{ animationDelay: "0.8s" }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          8. WHO THIS BOOK IS FOR — Conquering
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#f5f5f0] py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-10 max-w-5xl">

          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Who This Book Is For
            </h2>
            <p className="text-muted-foreground mt-3 text-sm md:text-base">
              You'll feel seen in this book if:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-4" data-aos="fade-up" data-aos-delay="100">
            {conqueringForList.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 text-foreground/40 font-semibold text-sm mt-0.5 w-5">
                  {i + 1}.
                </span>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Closing CTA card */}
          <div
            className="mt-14 bg-[#2d3b2e] rounded-2xl p-8 md:p-12 text-center space-y-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="font-heading italic text-white text-lg md:text-xl leading-relaxed">
              If even one of these resonates — this book is for you.
            </p>
            <p className="text-white/65 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              You don't have to fight another battle alone — or unequipped. Conquering is
              your guide back to yourself: the boldest, most free, and most faith-filled self.
            </p>
            <a
              id="conquering-order-btn"
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#992430] hover:bg-[#7a1d26] text-white font-bold text-sm px-10 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Order Your Copy Now
            </a>
          </div>

        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      <Footer />
    </div>
  );
};

export default Books;
