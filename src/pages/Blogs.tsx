import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const Blogs = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        if (res.ok) {
          setBlogs(data);
        }
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Blogs & Articles | Dionne Tweneboah" />
      <Navbar />

      {/* Header */}
      <section className="pt-28 md:pt-36 pb-8 section-padding bg-muted">
        <div className="container mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold" data-aos="fade-down">
            Featured In
          </h1>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {loading ? (
              <div className="text-center py-12 text-muted-foreground">Loading posts...</div>
            ) : blogs.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">No posts found. Check back later!</div>
            ) : (
              blogs.map((blog, idx) => (
                <article key={blog.id} className="group" data-aos="fade-up" data-aos-delay={`${(idx % 3) * 100 + 100}`}>
                  <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden mb-4 bg-muted">
                    {blog.imageUrl ? (
                      <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">No Image</div>
                    )}
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl font-bold mb-2">
                    {blog.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {blog.content}
                  </p>
                  <Button asChild variant="outline" size="sm" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a
                      href={blog.slug.startsWith('http') ? blog.slug : `/blogs/${blog.slug}`}
                      target={blog.slug.startsWith('http') ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                    >
                      Read
                    </a>
                  </Button>
                </article>
              ))
            )}
          </div>

          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
            <Button variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
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