import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import bookTyranny from "@/assets/book-tyranny.jpg";
import dionneMessage from "@/assets/dionne-portrait.jpg";
import dionneAbout from "@/assets/dionne-portrait.jpg";

const tyrannyFeatures = [
  "Constantly questions your worth, despite being accomplished on paper.",
  "Feels like you are living on autopilot but doesn't know how to break free.",
  "Has dreams your buried because they felt \"too much\" or \"too late.\"",
  "Is the strong one for everyone else- but silently struggling with burnout and self-doubt.",
  "Is multi-passionate but overwhelmed by the pressure to \"choose one thing.\"",
  "Has a voice, message, or gift inside of her, but fear of visibility keeps you hidden.",
  "Loves God and desires to honor Him, but doesn't know how purpose fits into your everyday life.",
  "Is tired of settling for survival when you were created for significance.",
];

const conqueringFeatures = [
  "You've overcome a lot, but still feel like you're not \"enough.\"",
  "You constantly battle with imposter syndrome or fear of failure.",
  "You're exhausted from performing for acceptance instead of living authentically.",
  "You know you're called to lead, but self-doubt keeps paralyzing your progress.",
  "You feel stuck between who you've been and who you're becoming.",
  "You want to heal from the wounds of rejection, comparison, or betrayal.",
  "You're tired of playing it safe and are ready to play by Heaven's rules.",
  "You're ready to fight back - with strategy, not just strength.",
];

const testimonials = [
  {
    image: "/placeholder.svg",
    quote: "The book follows the narrative of an immigrant's plight and struggles, using universal human language that anyone can benefit from. Tweneboah's piercing clarity and poetic insight expose the lie of ordinary lives and offer a bold roadmap to rebel against cultural conformity.",
    name: "Mikey B"
  },
  {
    image: "/placeholder.svg",
    quote: "This book changed my perspective on what it means to live with purpose. Every chapter felt like a personal conversation with someone who truly understands the struggle of wanting more.",
    name: "Sarah M"
  },
  {
    image: "/placeholder.svg",
    quote: "Dionne's words are both a mirror and a map. She shows you where you've been hiding and guides you toward where you're meant to be.",
    name: "Jennifer K"
  }
];

const Books = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Burgundy */}
      <section className="pt-20 md:pt-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
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
                  <path d="M0,5 Q50,0 100,5 T200,5" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
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

            <div className="flex justify-center lg:justify-end">
              <div className="bg-[hsl(0,0%,90%)] p-8 rounded-lg shadow-2xl">
                <img
                  src={bookTyranny}
                  alt="The Tyranny of the Ordinary"
                  className="w-64 md:w-80 rounded shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
                />
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
            <span className="text-2xl md:text-3xl font-bold text-[hsl(30,100%,25%)]" style={{ fontFamily: 'Arial, sans-serif' }}>
              amazon
            </span>
            <div className="flex flex-col items-center">
              <span className="text-lg md:text-xl font-bold text-[hsl(30,100%,25%)]" style={{ fontFamily: 'Arial, sans-serif' }}>amazon</span>
              <span className="text-[hsl(45,100%,40%)] font-medium text-sm">kindle</span>
            </div>
            <span className="text-lg md:text-xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
              <span className="text-[hsl(180,100%,20%)]">BARNES</span>
              <span className="text-[hsl(30,80%,45%)]">&</span>
              <span className="text-[hsl(180,100%,20%)]">NOBLE</span>
            </span>
          </div>
        </div>
      </section>

      {/* Message Section - Dark Gray */}
      <section className="bg-[hsl(0,0%,30%)] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
            <div className="flex justify-center lg:justify-start">
              <img
                src={dionneMessage}
                alt="Dionne Tweneboah"
                className="w-72 md:w-96 object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-[hsl(45,100%,50%)] font-bold uppercase tracking-wider">
                IT'S NOT TOO LATE.
              </p>
              
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
                <span className="text-4xl md:text-5xl">"</span>A Message from Dionne Tweneboah...
              </h2>
              
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  There was a moment when I looked at my life and asked myself a painful question: Is this all there is?
                </p>
                <p>
                  From the outside, things looked fine. But on the inside, I knew I was hiding. I was shrinking, settling, surviving - not thriving.
                </p>
                <p>
                  This book is the answer to that question. It's my love letter to the person who knows they're called to more but feel stuck in cycles of fear, perfectionism, or playing small.
                </p>
                <p>
                  It's for the ones who secretly wonder if it's too late or if they've missed their moment.
                </p>
                <p>
                  <strong className="text-white">It's not too late.</strong> Your purpose didn't expire. The <strong className="text-white">extraordinary</strong> life you crave is still available, and <strong className="text-white">I wrote this to help you reclaim it.</strong>
                </p>
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground border border-primary-foreground/20 px-8 py-3 uppercase tracking-wide rounded-full">
                Buy The Tyranny of The Ordinary
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Book Is For - Tyranny */}
      <section className="py-16 md:py-24 bg-[hsl(0,0%,95%)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
              Who This Book Is For
            </h2>
            <p className="font-heading text-2xl md:text-3xl italic text-muted-foreground" style={{ fontFamily: 'cursive' }}>
              (If You're Wondering...)
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <h3 className="font-heading text-xl md:text-2xl font-semibold mb-8 text-center text-primary">
              This book is for the one who:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {tyrannyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="font-bold text-foreground">{index + 1}.</span>
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>

            <p className="text-center mt-12 text-primary font-semibold text-lg">
              If you saw yourself in even one of these... this book was written for you.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-8 mb-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-muted-foreground" />
              </button>
              
              <div className="w-32 h-32 rounded-full overflow-hidden bg-muted">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-muted-foreground" />
              </button>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto">
              {testimonials[currentTestimonial].quote}
            </p>
            
            <p className="font-heading text-lg italic text-foreground">
              ~ {testimonials[currentTestimonial].name} ~
            </p>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
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

            <div className="flex justify-center lg:justify-end">
              <img
                src={dionneAbout}
                alt="Dionne Tweneboah"
                className="w-full max-w-md object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conquering Section - Dark Gray */}
      <section className="bg-[hsl(0,0%,30%)] py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
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
                  <path d="M0,5 Q50,0 100,5 T200,5" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
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

            <div className="flex justify-center lg:justify-end">
              <div className="bg-[hsl(0,0%,85%)] p-8 rounded-lg shadow-2xl">
                <img
                  src={bookTyranny}
                  alt="The Tyranny of the Ordinary"
                  className="w-64 md:w-80 rounded shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Book Is For - Conquering */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Who This Book Is For
            </h2>
          </div>

          <div className="max-w-5xl mx-auto bg-[hsl(0,0%,95%)] rounded-lg p-8 md:p-12">
            <h3 className="font-heading text-xl md:text-2xl font-semibold mb-8 text-center text-primary">
              You'll feel seen in this book if:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {conqueringFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="font-bold text-foreground">{index + 1}.</span>
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>

            <p className="text-center mt-12 text-primary font-semibold text-lg">
              If even one of these resonates - this book is for you.
            </p>
          </div>
          
          <div className="text-center mt-12 space-y-6">
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
    </div>
  );
};

export default Books;
