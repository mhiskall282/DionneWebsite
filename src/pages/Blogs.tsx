import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import blogRiseUp from "@/assets/blog-rise-up.jpg";
import blogRyse from "@/assets/blog-ryse.jpg";
import blogMentalHealth from "@/assets/blog-mental-health.jpg";

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
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {/* Blog Post 1 - Rise Up Youth */}
            <article className="group">
              <div className="relative aspect-[21/9] rounded-lg overflow-hidden mb-4">
                <img
                  src={blogRiseUp}
                  alt="Rise Up Youth Summit"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-2">
                Rise Up Youth
              </h2>
              <p className="text-muted-foreground mb-4">
                Nzuri Uhai Foundation inaugurates Rise Up Youth Summit
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Read
              </Button>
            </article>

            {/* Blog Post 2 - RYSE Up Youth Empowerment */}
            <article className="group">
              <div className="relative aspect-[21/9] rounded-lg overflow-hidden mb-4">
                <img
                  src={blogRyse}
                  alt="RYSE Up Youth Empowerment Summit"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-2">
                Project Report: RYSE Up Youth Empowerment Summit (Ashanti R...
              </h2>
              <p className="text-muted-foreground mb-4">
                At the Nzuri Uhai Foundation, we are pleased to present the overview and key achievements of our recent RYSE Up Summit, where we invested in the next generation of leaders in the Ashanti Region.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Read
              </Button>
            </article>

            {/* Blog Post 3 - World Mental Health Day */}
            <article className="group">
              <div className="relative aspect-[21/9] rounded-lg overflow-hidden mb-4">
                <img
                  src={blogMentalHealth}
                  alt="World Mental Health Day 2025"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-2">
                World Mental Health Day 2025
              </h2>
              <p className="text-muted-foreground mb-4">
                At Nzuri Uhai Foundation, we believe that mental health is not a side conversation .
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Read
              </Button>
            </article>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
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
