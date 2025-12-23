import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import bookTyranny from "@/assets/book-tyranny.jpg";
import dionneHero from "@/assets/dionne-hero.jpg";
import { Check } from "lucide-react";

const bookFeatures = [
  "Constantly overthinking and paralyzed by the opinions of others.",
  "Feeling unsettled, yet unaware of what's missing.",
  "Paralyzed by comparison to others' victories.",
  "Frustrated by the 'safe' life everyone expects from you.",
  "A little skeptical for everyone else but yourself.",
  "Feeling small while helping others grow.",
  "Carrying weight only you can see.",
  "At peace on the outside but exhausted on the inside.",
];

const retailers = [
  { name: "Apple Books", logo: "🍎" },
  { name: "Amazon", logo: "📦" },
  { name: "Amazon Kindle", logo: "📱" },
  { name: "Barnes & Noble", logo: "📚" },
];

const Books = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
                The Tyranny of<br />the Ordinary
              </h1>
              <p className="text-lg opacity-90">
                Break free from mediocrity. Find your purpose.
                Live courageously.
              </p>
              <Button variant="heroOutline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Get Your Copy
              </Button>
            </div>

            <div className="flex justify-center">
              <img
                src={bookTyranny}
                alt="The Tyranny of the Ordinary"
                className="w-64 md:w-80 rounded-lg shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Retailers */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {retailers.map((retailer) => (
              <div
                key={retailer.name}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <span className="text-2xl">{retailer.logo}</span>
                <span className="font-medium">{retailer.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <p className="text-primary font-medium uppercase tracking-wider mb-4">
              IT'S NOT TOO LATE.
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
              "A Message from Dionne Tweneboah..."
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Have you ever felt trapped, Restless and stuck, like the life you're living isn't the life you were meant to lead? I have. It's terrifying—and it's incredibly lonely.
              </p>
              <p>
                People look at me today—author, speaker, mentor—and see confidence. But that wasn't always the story. There was a time when I was paralyzed by fear, overrun by self-doubt, trapped in a life that looked fine on the outside but felt empty on the inside.
              </p>
              <p>
                I wrote this book because I believe every woman carries a flame— a purpose—and it's time to stop letting fear, expectations, and the ordinary dim that light.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Book Is For */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
              Who This Book Is For
            </h2>
            <p className="font-heading text-xl text-primary italic">
              It's meant for the purpose...
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl font-semibold mb-6 text-center">
              This book is for the one who:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {bookFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-background rounded-lg"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">{feature}</p>
                </div>
              ))}
            </div>

            <p className="text-center mt-8 text-primary font-heading text-lg font-semibold">
              If you see any of it in your eyes now, this book is written for you.
            </p>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                About the Author
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Dionne Tweneboah is a bestselling author, transformational speaker, and purpose mentor. Rooted in faith and fueled by a deep passion for women's empowerment, she helps women break free from mediocrity and step into their divine purpose.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through her work, she equips and inspires women all over the globe to conquer their inner chaos and build lives aligned with their calling.
              </p>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src={dionneHero}
                alt="Dionne Tweneboah"
                className="w-64 md:w-80 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Are You Ready to<br />Conquer the Ordinary?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            This book isn't just pages—it's a compass and a mirror, a challenge and a gift, a love letter to your highest self.
          </p>
          <Button variant="heroOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Get Your Copy Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Books;
