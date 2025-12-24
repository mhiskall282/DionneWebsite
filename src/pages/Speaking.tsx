import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import speakerHero from "@/assets/speaker-hero.jpg";
import dionneAbout from "@/assets/dionne-portrait.jpg";
import { CheckCircle, Asterisk } from "lucide-react";

const audienceOutcomes = [
  "Renewed clarity on their identity and calling",
  "Confidence to make bold moves and live with intention",
  "Tools to overcome fear, self-doubt, and procrastination",
  "A deeper connection to purpose, both personal and professional",
];

const audienceTypes = [
  "People who feel called to more, but don't know where to start",
  "Burnt-out dreamers ready to reclaim their fire.",
  "High-achieving women silently struggling with self-doubt.",
  "Faith-driven women seeking alignment between calling and career.",
  "Leaders craving deeper purpose behind their success.",
  "Creatives navigating fear of visibility.",
  "Visionaries stuck in cycles of perfectionism or procrastination.",
  "Professionals who \"have it all\" but still feel unfulfilled.",
];

const bookingSteps = [
  {
    title: "Connect & Confirm",
    description: "We start by syncing schedules and learning about your event's heartbeat and goals."
  },
  {
    title: "Tailor the Message",
    description: "We'll align the message with your audience's needs, whether it's growth, resilience, leadership, or unlocking purpose."
  },
  {
    title: "Deliver Transformation",
    description: "We'll align the message with your audience's needs, whether it's growth, resilience, leadership, or unlocking purpose."
  }
];

const Speaking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 relative">
        <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
          <img
            src={speakerHero}
            alt="Dionne Speaking"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-primary/30"></div>
          <div className="absolute inset-0 flex items-end justify-center text-center text-primary-foreground pb-16 md:pb-24">
            <div className="max-w-4xl px-4">
              <p className="text-base md:text-lg mb-4 opacity-90">
                Book Dionne Tweneboah for Your Next Event
              </p>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Empowering Keynotes · Bold Mindset Shifts · Purpose-Fueled Transformation
              </h1>
              <Button size="lg" className="rounded-full px-8 bg-[#F3BA00] hover:bg-[#F3BA00]/90 text-black">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto text-center max-w-4xl px-4">
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-foreground">
            <span className="font-semibold">Dionne Tweneboah</span> is a transformational speaker,
            bestselling author, and purpose mentor on a mission
            to help women break free from the ordinary and
            embrace the lives they were born to lead.
          </p>
        </div>
      </section>

      {/* About Speaker Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <div className="relative">
              <img
                src={dionneAbout}
                alt="Dionne"
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed italic text-foreground">
                With a powerful mix of personal story, soul-shaking insight, and
                practical tools, Dionne challenges audiences to get unstuck, rise with
                purpose, and redefine success on{" "}
                <span className="bg-gold/40 px-1 not-italic font-medium">their own terms.</span>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether she's standing before thousands or
                pouring into an intimate room, Dionne leaves no
                heart untouched. <span className="font-semibold text-foreground">Her message?</span>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You don't have to settle. You don't have to
                shrink. You were born for more, and it's time to
                become her.
              </p>
              <Button variant="hero" className="rounded-full px-8">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10">
                What to Expect When<br />Booking Dionne
              </h2>
              
              <div className="space-y-8">
                {bookingSteps.map((step, index) => (
                  <div key={index}>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <Button 
                  variant="outline" 
                  className="rounded-full px-6 border-gold text-gold hover:bg-gold hover:text-foreground"
                >
                  Download Dionne's Media Kit
                </Button>
                <Button variant="hero" className="rounded-full px-6">
                  Inquire About Booking
                </Button>
              </div>
            </div>

            <div className="flex justify-center items-start">
              <img
                src={dionneAbout}
                alt="Dionne"
                className="w-full max-w-sm rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Audiences Love Dionne */}
      <section className="py-16 md:py-24 bg-dark text-primary-foreground">
        <div className="container mx-auto text-center px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Why Audiences <span className="underline decoration-2 underline-offset-4">Love</span> Dionne
          </h2>
          
          <blockquote className="max-w-4xl mx-auto my-8 md:my-12">
            <p className="text-base md:text-lg italic opacity-90">
              "I'm not here to give a feel-good talk—I'm here to help your people shift. To go from stuck to unstoppable.
              From burnout to boldness. From surviving to showing up fully."
            </p>
            <footer className="mt-4 text-sm opacity-80">
              — Dionne Tweneboah
            </footer>
          </blockquote>

          <h3 className="font-heading text-lg md:text-xl font-semibold mb-10">
            Audiences walk away from Dionne's sessions with:
          </h3>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {audienceOutcomes.map((outcome, index) => (
              <div
                key={index}
                className="flex items-start gap-4 text-left"
              >
                <div className="w-10 h-10 border-2 border-primary-foreground/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 opacity-80" />
                </div>
                <p className="text-base md:text-lg pt-1.5">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is This for Your Audience */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto text-center px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Is This for Your Audience?
          </h2>
          <p className="text-muted-foreground mb-12">
            Dionne is the right voice for your stage if your audience is filled with:
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {audienceTypes.map((type, index) => (
              <div
                key={index}
                className="flex items-start gap-4 text-left"
              >
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  <Asterisk className="w-5 h-5 text-foreground" />
                </div>
                <p className="text-foreground font-medium pt-2">{type}</p>
              </div>
            ))}
          </div>

          <Button variant="hero" size="lg" className="rounded-full px-10 mt-16">
            Book Dionne to Speak
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background text-center">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Transform Lives At Your Next{" "}
            <span className="relative inline-block">
              Event?
              <svg 
                className="absolute -bottom-2 left-0 w-full" 
                viewBox="0 0 200 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M5 15 Q100 -5, 195 15" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mt-6">
            Let's co-create a powerful moment of purpose and transformation for your audience.
          </p>
          <Button variant="hero" size="lg" className="rounded-full px-10 mt-8">
            Book Dionne to Speak
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Speaking;
