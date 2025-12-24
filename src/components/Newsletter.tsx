import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import newsletterImage from "@/assets/newsletter-image.jpg";

const Newsletter = () => {
  return (
    <section className="bg-background">
      {/* Top - Image Section */}
      <div className="relative h-[400px] md:h-[500px]">
        <img
          src={newsletterImage}
          alt="Dionne Tweneboah"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Name overlay */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12">
          <p className="font-heading text-xl md:text-2xl text-white">
            Dionne Tweneboah
          </p>
        </div>
      </div>

      {/* Bottom - Form Section */}
      <div className="bg-white flex justify-center px-6 py-12 md:py-16">
        <div className="w-full max-w-xl space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
            Become Who You're Meant to Be.
          </h2>
          
          <p className="text-foreground/80 text-lg leading-relaxed">
            Get empowering stories, lessons, and tools on self-growth, 
            purpose, and leadership, straight from my heart to your 
            inbox.
          </p>
          
          <div className="space-y-6 pt-4">
            <Input
              type="email"
              placeholder="Your email"
              className="h-14 rounded-lg border-muted-foreground/30 px-6 text-base"
            />
            
            {/* Decorative divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-muted-foreground/30"></div>
              <div className="w-2 h-2 rounded-full bg-muted-foreground/40"></div>
              <div className="flex-1 h-px bg-muted-foreground/30"></div>
            </div>
            
            <Button variant="hero" className="w-full h-14 text-base">
              Sign me Up!
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            No spam, just real talk in your inbox.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;