import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="bg-dark text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              It's Your Time to Shine
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              Join my newsletter for honest conversations on growth, purpose, and becoming your best
              self. Every message is crafted to inspire you to rise above ordinary and step boldly
              into your calling.
            </p>
          </div>

          {/* Right - Form */}
          <div className="bg-background text-foreground p-8 rounded-lg shadow-xl">
            <div className="space-y-4">
              <div>
                <p className="font-heading text-xl font-semibold text-primary">
                  Dionne Tweneboah
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-heading text-2xl font-bold">
                  Sign up to my weekly newsletter
                </h3>
                <p className="text-muted-foreground">
                  Don't miss your chance. Sign Up today!
                </p>
              </div>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="h-12"
                />
                <Button variant="hero" className="w-full h-12">
                  Sign me Up!
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                No spam. Subscribe for future emails.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
