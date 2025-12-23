import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import speakingHero from "@/assets/speaking-hero.jpg";
import dionneAbout from "@/assets/dionne-about.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Rise Up Youth",
    excerpt: "Nzuri Uhai Foundation inaugurates Rise Up Youth Summit",
    image: speakingHero,
    category: "Featured",
  },
  {
    id: 2,
    title: "Project Report: RYSE Up Youth Empowerment Summit (Ashanti R...",
    excerpt:
      "At the Nzuri Uhai Foundation, we are pleased to present the overview and key achievements of our recent RYSE Up Summit, where we invested in the next generation of leaders in the Ashanti Region.",
    image: dionneAbout,
    category: "Report",
    quote: "I have learnt to face my fears.. it's part of the growth.",
  },
  {
    id: 3,
    title: "World Mental Health Day 2025",
    excerpt:
      "At Nzuri Uhai Foundation, we believe that mental health is not a side conversation.",
    image: speakingHero,
    category: "Awareness",
    highlight:
      "A healthy mind is just as important as a healthy body.",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-28 md:pt-36 pb-8 section-padding">
        <div className="container mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            Featured In
          </h1>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="group">
                <div className="relative aspect-video md:aspect-[21/9] rounded-lg overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {post.quote && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 flex items-center justify-center p-8">
                      <div className="text-primary-foreground text-center">
                        <span className="text-6xl font-heading">"</span>
                        <p className="font-heading text-2xl md:text-4xl font-bold max-w-2xl">
                          {post.quote}
                        </p>
                      </div>
                    </div>
                  )}
                  {post.highlight && (
                    <div className="absolute inset-0 bg-muted/95 flex items-center justify-center p-8">
                      <div className="text-center">
                        <p className="font-heading text-2xl md:text-3xl font-bold mb-4">
                          {post.highlight}
                        </p>
                        <p className="text-sm text-muted-foreground bg-dark text-primary-foreground inline-block px-4 py-2">
                          This World Mental Health Day, let's break the silence,
                          support one another, and choose self-care every day.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <h2 className="font-heading text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Button variant="outline" size="sm">
                  Read
                </Button>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Check out More Blogs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
