import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, FileText, Video, BookOpen, Headphones } from "lucide-react";

const resources = [
  {
    title: "Purpose Discovery Workbook",
    description: "A step-by-step guide to uncovering your divine purpose and creating a roadmap for your calling.",
    icon: FileText,
    type: "PDF Download",
  },
  {
    title: "Mindset Reset Meditation",
    description: "A guided audio meditation to help you release limiting beliefs and embrace your power.",
    icon: Headphones,
    type: "Audio",
  },
  {
    title: "Conquer the Ordinary Masterclass",
    description: "A 3-part video series on breaking free from mediocrity and living boldly.",
    icon: Video,
    type: "Video Series",
  },
  {
    title: "Weekly Affirmations",
    description: "Powerful affirmations delivered to your inbox every Monday to start your week with intention.",
    icon: BookOpen,
    type: "Email Series",
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 section-padding bg-muted">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Resources
          </h1>
          <p className="text-lg text-muted-foreground">
            Free tools, guides, and content designed to help you rise with purpose,
            clarity, and confidence. Everything you need to start your transformation journey.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div
                  key={index}
                  className="p-8 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                          {resource.type}
                        </span>
                        <h3 className="font-heading text-xl font-bold mt-1">
                          {resource.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        {resource.description}
                      </p>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download size={16} />
                        Get Access
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Want More Exclusive Content?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join my newsletter for weekly insights, exclusive resources, and first access to new content.
          </p>
          <Button variant="heroOutline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Join the Community
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
