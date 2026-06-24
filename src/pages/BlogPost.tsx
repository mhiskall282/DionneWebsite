import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        if (res.status === 404) {
          setNotFound(true);
          return;
        }
        const data = await res.json();
        if (res.ok) {
          setBlog(data);
        } else {
          setNotFound(true);
        }
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchBlog();
  }, [slug]);

  const estimateReadTime = (content: string) => {
    const words = content?.replace(/<[^>]*>/g, "").split(/\s+/).length || 0;
    return Math.max(1, Math.ceil(words / 200));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
            <p className="text-muted-foreground">Loading article...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (notFound || !blog) {
    return (
      <div className="min-h-screen bg-background">
        <SEO title="Post Not Found | Dionne Tweneboah" />
        <Navbar />
        <div className="pt-32 pb-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-heading text-5xl font-bold text-primary mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">This blog post doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/blogs">
              <ArrowLeft size={16} className="mr-2" /> Back to Blogs
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${blog.title} | Dionne Tweneboah`}
        description={blog.content?.replace(/<[^>]*>/g, "").slice(0, 160)}
      />
      <Navbar />

      {/* Hero Banner */}
      {blog.imageUrl && (
        <div className="relative w-full h-[40vh] md:h-[55vh] overflow-hidden">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
      )}

      <article className="container mx-auto max-w-3xl px-4 sm:px-6 pb-20">
        {/* Back link */}
        <div className={`${blog.imageUrl ? "-mt-16 relative z-10" : "pt-32"} mb-8`}>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} /> Back to all posts
          </Link>
        </div>

        {/* Title & Meta */}
        <header className="mb-10">
          <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b border-border pb-6">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {estimateReadTime(blog.content)} min read
            </span>
          </div>
        </header>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:font-heading prose-headings:text-foreground
            prose-p:text-foreground/80 prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-bold
            prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:italic
            prose-img:rounded-xl prose-img:shadow-md prose-img:mx-auto
            prose-ul:text-foreground/80 prose-ol:text-foreground/80
            prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-pre:bg-muted prose-pre:border prose-pre:border-border"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Footer CTA */}
        <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
            <Link to="/blogs">
              <ArrowLeft size={16} className="mr-2" /> All Articles
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            Enjoyed this article? Share it with someone who needs it.
          </p>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
