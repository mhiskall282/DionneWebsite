import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import speakingHero from "@/assets/speaking-hero.jpg";
import dionneHero from "@/assets/dionne-hero.jpg";
import dionneAbout from "@/assets/dionne-about.jpg";
import { Check, Heart, Target, Lightbulb, Compass, Zap, Users } from "lucide-react";

const audienceOutcomes = [
  { icon: Target, text: "Renewed clarity on their identity and calling" },
  { icon: Zap, text: "Confidence to make bold moves and live with intention" },
  { icon: Compass, text: "Tools to overcome fear, self-count, and procrastination" },
  { icon: Heart, text: "A deeper connection to purpose, both personal and professional" },
];

const audienceTypes = [
  "People who feel called to more, but don't know where to start",
  "Burnt-out dreamers ready to reclaim their fire",
  "High-achieving women silently struggling with self-doubt",
  "Faith-driven women seeking alignment between calling and career",
  "Leaders craving deeper purpose beyond their success",
  "Creatives navigating fear of visibility",
  "Visionaries stuck in cycles of perfectionism or procrastination",
  "Professionals who 'have it all' but still feel unfulfilled",
];

const Speaking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 relative">
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={speakingHero}
            alt="Dionne Speaking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center text-primary-foreground">
            <div className="max-w-3xl px-4">
              <p className="text-sm uppercase tracking-widest mb-4 opacity-80">
                Book Dionne Tweneboah for Your Next Event
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Empowering Keynotes · Bold Mindset Shifts · Purpose-Fueled Transformation
              </h1>
              <Button variant="hero" size="xl">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center max-w-4xl">
          <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Dionne Tweneboah</strong> is a transformational speaker,
            bestselling author, and purpose mentor on a mission
            to help women break free from the ordinary and
            embrace the lives they were born to lead.
          </p>
        </div>
      </section>

      {/* About Speaker Section */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-gold/20 rounded-lg blur-2xl"></div>
              <img
                src={dionneAbout}
                alt="Dionne Speaking"
                className="relative w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                <strong>With a powerful mix of personal story, soul-shaking insight, and
                practical tools, Dionne challenges audiences to get unstuck, rise with
                purpose, and redefine success on</strong> <span className="text-primary font-semibold">their own terms.</span>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether she's standing before thousands or speaking to an intimate conference, Dionne leaves no heart untouched. <span className="text-primary">Her message?</span>
              </p>
              <p className="text-muted-foreground leading-relaxed italic">
                You don't have to be like. You don't have to shrink. You were born for more, and it's time to become her.
              </p>
              <Button variant="hero">Book Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
                What to Expect When<br />Booking Dionne
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                    1. Connect & Confirm
                  </h3>
                  <p className="text-muted-foreground">
                    We start by understanding your event's theme, audience, and goals.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                    2. Tailor the Message
                  </h3>
                  <p className="text-muted-foreground">
                    We'll craft the message to fit your audience's needs—whether it's a keynote, masterclass, or panel discussion.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                    3. Deliver Transformation
                  </h3>
                  <p className="text-muted-foreground">
                    We'll create an experience with your audience—one that stirs hearts, mobilizes, and leaves a lasting, inspiring outcome.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button variant="hero">Download Dionne's Media Kit</Button>
                <Button variant="outline">Inquire About Booking</Button>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <img
                src={dionneHero}
                alt="Dionne"
                className="w-64 md:w-80 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Audiences Love Dionne */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Why Audiences Love Dionne
          </h2>
          <blockquote className="max-w-3xl mx-auto mb-12">
            <p className="text-lg italic text-muted-foreground">
              "I've never given a talk and not gotten real feedback—not general 'that was nice' but transformative,
              tear-filled, "you've changed my life" moments. I live for that." - Dionne Tweneboah
            </p>
          </blockquote>

          <h3 className="font-heading text-xl font-semibold mb-8">
            Audiences walk away from Dionne's sessions with:
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {audienceOutcomes.map((outcome, index) => {
              const Icon = outcome.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-background rounded-lg shadow-sm hover-lift"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm">{outcome.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Is This for Your Audience */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Is This for Your Audience?
          </h2>
          <p className="text-muted-foreground mb-12">
            Dionne is the right voice for your stage if your audience is filled with:
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {audienceTypes.map((type, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-muted rounded-lg text-left"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Lives At Your Next Event?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Let's co-create a powerful moment of purpose and transformation for your audience.
          </p>
          <Button variant="heroOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Book Dionne to Speak
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Speaking;
