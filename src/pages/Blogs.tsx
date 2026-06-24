import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// Fallback posts matching the database (shown if API is unreachable in local dev)
const FALLBACK_POSTS = [
  {
    id: "1",
    title: "Rise Up Youth",
    slug: "rise-up-youth",
    content: "Nzuri Uhai Foundation inaugurates Rise Up Youth Summit. Stay tuned for more details and photos from the event.",
    imageUrl: "/assets/blog-rise-up.jpg",
    published: true,
    createdAt: "2026-06-23T18:26:56.719Z",
  },
  {
    id: "2",
    title: "Project Report: RYSE Up Youth Empowerment Summit (Ashanti Region)",
    slug: "project-report-ryse-up",
    content:
      "At the Nzuri Uhai Foundation, we are pleased to present the overview and key achievements of our recent RYSE Up Summit, where we invested in the next generation of leaders in the Ashanti Region. I have learnt to face my fears.. it's part of the growth.",
    imageUrl: "/assets/blog-ryse.jpg",
    published: true,
    createdAt: "2026-06-23T18:26:58.116Z",
  },
  {
    id: "3",
    title: "World Mental Health Day 2025",
    slug: "world-mental-health-day-2025",
    content:
      "At Nzuri Uhai Foundation, we believe that mental health is not a side conversation. A healthy mind is just as important as a healthy body. This World Mental Health Day, let's break the silence, support one another, and choose self-care every day.",
    imageUrl: "/assets/blog-mental-health.jpg",
    published: true,
    createdAt: "2026-06-23T18:26:59.225Z",
  },
];

const Blogs = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          // API returned data — sort oldest first to match Figma order
          setBlogs([...data].reverse());
        } else {
          // Empty array from API — use fallback
          setBlogs(FALLBACK_POSTS);
        }
      } catch (err) {
        console.warn("Blog API unavailable, using fallback:", err);
        setBlogs(FALLBACK_POSTS);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Strip HTML tags for plain-text excerpt
  const stripHtml = (html: string) =>
    html ? html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim() : "";

  const visibleBlogs = blogs.slice(0, visibleCount);
  const hasMore = visibleCount < blogs.length;

  return (
    <div className="min-h-screen bg-white">
      <SEO title="Blogs & Articles | Dionne Tweneboah" />
      <Navbar />

      {/* Page Header — matches Figma: plain white bg, "Featured In" heading */}
      <section className="pt-28 md:pt-36 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Featured In
          </h1>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {loading && (
            <div className="flex flex-col items-center py-20 gap-4">
              <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin" />
              <p className="text-muted-foreground">Loading posts…</p>
            </div>
          )}

          {!loading && blogs.length === 0 && (
            <div className="py-20 text-center text-muted-foreground">
              <p className="text-lg">No posts yet. Check back soon!</p>
            </div>
          )}

          {!loading && blogs.length > 0 && (
            <div className="space-y-16">
              {visibleBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} stripHtml={stripHtml} />
              ))}
            </div>
          )}

          {/* "Check out More Blogs" — only shown when more posts exist to load */}
          {!loading && hasMore && (
            <div className="mt-16 flex justify-center">
              <button
                onClick={() => setVisibleCount((c) => c + 10)}
                className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
              >
                Check out More Blogs
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

/* ─── Individual Blog Card — pixel-perfect match to Figma ─── */
function BlogCard({ blog, stripHtml }: { blog: any; stripHtml: (s: string) => string }) {
  const isExternal = blog.slug?.startsWith("http");
  const href = isExternal ? blog.slug : `/blogs/${blog.slug}`;
  const excerpt = stripHtml(blog.content).slice(0, 200);

  return (
    <article>
      {/* Full-width image — no border-radius, matches Figma */}
      {blog.imageUrl && (
        <a
          href={href}
          target={isExternal ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="block w-full mb-4 overflow-hidden"
          style={{ maxHeight: "340px" }}
        >
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            style={{ maxHeight: "340px" }}
            onError={(e) => {
              const container = (e.target as HTMLImageElement).closest("a");
              if (container) container.style.display = "none";
            }}
          />
        </a>
      )}

      {/* Title — bold, Playfair Display, matching Figma */}
      <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2 leading-snug">
        {blog.title}
      </h2>

      {/* Excerpt */}
      {excerpt && (
        <p className="text-foreground/70 text-sm md:text-base leading-relaxed mb-4">
          {excerpt}
          {excerpt.length >= 200 ? "…" : ""}
        </p>
      )}

      {/* Read button — small pill outline, matches Figma exactly */}
      <a
        href={href}
        target={isExternal ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="inline-block px-5 py-1.5 rounded-full border border-foreground/80 text-foreground/80 text-sm font-medium hover:bg-primary hover:border-primary hover:text-white transition-all duration-200"
      >
        Read
      </a>
    </article>
  );
}

export default Blogs;