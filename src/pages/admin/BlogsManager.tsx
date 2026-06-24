import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit, Trash, UploadCloud, Eye, ExternalLink } from "lucide-react";
import RichTextEditor from "@/components/RichTextEditor";

export default function BlogsManager() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<any>({
    title: "",
    slug: "",
    content: "",
    imageUrl: "",
    published: false,
  });
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(false);
  const { toast } = useToast();
  const contentImageInputRef = useRef<HTMLInputElement>(null);

  const token = localStorage.getItem("admin_token");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs?all=true");
      const data = await res.json();
      if (res.ok) setBlogs(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Auto-generate slug from title
  const handleTitleChange = (title: string) => {
    const slug = currentBlog.id
      ? currentBlog.slug
      : title
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
          .slice(0, 80);
    setCurrentBlog({ ...currentBlog, title, slug });
  };

  const handleFeaturedImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    setUploading(true);
    toast({ title: "Uploading featured image..." });
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setCurrentBlog((prev: any) => ({ ...prev, imageUrl: data.url }));
        toast({ title: "✅ Featured image uploaded!" });
      } else {
        toast({ variant: "destructive", title: "Upload failed", description: data.error });
      }
    } catch {
      toast({ variant: "destructive", title: "Upload error" });
    } finally {
      setUploading(false);
    }
  };

  // Insert image into content body
  const handleContentImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    setUploading(true);
    toast({ title: "Uploading image for content..." });
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        // Insert img tag into content HTML
        const imgTag = `<img src="${data.url}" alt="Inserted image" style="max-width:100%;border-radius:8px;margin:16px auto;display:block;" />`;
        setCurrentBlog((prev: any) => ({ ...prev, content: prev.content + imgTag }));
        toast({ title: "✅ Image inserted into content!" });
      } else {
        toast({ variant: "destructive", title: "Upload failed" });
      }
    } catch {
      toast({ variant: "destructive", title: "Upload error" });
    } finally {
      setUploading(false);
      if (contentImageInputRef.current) contentImageInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentBlog.title.trim()) {
      toast({ variant: "destructive", title: "Title is required" });
      return;
    }
    if (!currentBlog.slug.trim()) {
      toast({ variant: "destructive", title: "Slug is required" });
      return;
    }

    const method = currentBlog.id ? "PUT" : "POST";
    const url = currentBlog.id ? `/api/blogs/${currentBlog.id}` : "/api/blogs";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(currentBlog),
      });

      if (res.ok) {
        toast({ title: "✅ Blog post saved successfully!" });
        setIsEditing(false);
        setPreview(false);
        fetchBlogs();
      } else {
        const err = await res.json();
        toast({ variant: "destructive", title: "Error saving blog", description: err?.error || "Unknown error" });
      }
    } catch {
      toast({ variant: "destructive", title: "Network error" });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        toast({ title: "Deleted successfully" });
        fetchBlogs();
      }
    } catch {
      toast({ variant: "destructive", title: "Error deleting" });
    }
  };

  if (loading) return <div className="p-8 text-center text-muted-foreground">Loading blogs...</div>;

  /* ── EDITOR VIEW ── */
  if (isEditing) {
    return (
      <div className="p-4 md:p-8 max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
          <h1 className="text-2xl font-bold font-heading">
            {currentBlog.id ? "Edit Post" : "New Post"}
          </h1>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPreview((p) => !p)}
              className="gap-2"
            >
              <Eye size={15} /> {preview ? "Edit" : "Preview"}
            </Button>
            <Button variant="outline" size="sm" onClick={() => { setIsEditing(false); setPreview(false); }}>
              Cancel
            </Button>
          </div>
        </div>

        {/* PREVIEW PANE */}
        {preview && (
          <div className="mb-6 bg-card border border-border rounded-xl p-6">
            <h2 className="font-heading text-3xl font-bold mb-2">{currentBlog.title || "Untitled"}</h2>
            {currentBlog.imageUrl && (
              <img src={currentBlog.imageUrl} alt="Featured" className="w-full max-h-64 object-cover rounded-lg mb-4" />
            )}
            <div
              className="prose max-w-none text-foreground/80
                [&_h1]:text-3xl [&_h1]:font-bold [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:text-xl [&_h3]:font-semibold
                [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6
                [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground
                [&_img]:rounded-lg [&_img]:max-w-full [&_img]:my-4 [&_a]:text-primary [&_a]:underline"
              dangerouslySetInnerHTML={{ __html: currentBlog.content || "<p><em>Nothing written yet...</em></p>" }}
            />
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1.5">
                Post Title <span className="text-destructive">*</span>
              </label>
              <input
                required
                type="text"
                placeholder="Enter a compelling title..."
                className="w-full p-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-lg font-heading"
                value={currentBlog.title}
                onChange={(e) => handleTitleChange(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5">
                URL Slug <span className="text-destructive">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm whitespace-nowrap">/blogs/</span>
                <input
                  required
                  type="text"
                  placeholder="url-slug"
                  className="flex-1 p-2.5 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm font-mono"
                  value={currentBlog.slug}
                  onChange={(e) =>
                    setCurrentBlog({ ...currentBlog, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-") })
                  }
                />
                {currentBlog.slug && (
                  <a
                    href={`/blogs/${currentBlog.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/70 transition-colors"
                    title="Preview URL"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-card border border-border rounded-xl p-5">
            <label className="block text-sm font-semibold mb-3">Featured Image</label>
            <div className="flex flex-wrap items-start gap-4">
              {currentBlog.imageUrl ? (
                <div className="relative group">
                  <img
                    src={currentBlog.imageUrl}
                    alt="Featured preview"
                    className="h-28 w-44 object-cover rounded-lg border border-border"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <button
                    type="button"
                    onClick={() => setCurrentBlog({ ...currentBlog, imageUrl: "" })}
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-destructive text-white flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    ×
                  </button>
                </div>
              ) : (
                <div className="h-28 w-44 rounded-lg border-2 border-dashed border-border flex items-center justify-center text-muted-foreground/50 text-xs text-center">
                  No image
                </div>
              )}
              <label className={`cursor-pointer border-2 border-dashed border-primary/40 text-primary px-5 py-4 rounded-lg hover:bg-primary/5 transition-colors flex items-center gap-2 text-sm ${uploading ? "opacity-50 pointer-events-none" : ""}`}>
                <UploadCloud size={18} />
                <span>{uploading ? "Uploading..." : "Upload Featured Image"}</span>
                <input type="file" className="hidden" accept="image/*" onChange={handleFeaturedImageUpload} disabled={uploading} />
              </label>
              {currentBlog.imageUrl && (
                <div className="flex-1 min-w-0">
                  <label className="block text-xs text-muted-foreground mb-1">Or paste URL</label>
                  <input
                    type="url"
                    placeholder="https://..."
                    className="w-full p-2 border border-border rounded-lg bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    value={currentBlog.imageUrl}
                    onChange={(e) => setCurrentBlog({ ...currentBlog, imageUrl: e.target.value })}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Rich Text Content */}
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-semibold">
                Article Content <span className="text-destructive">*</span>
              </label>
              <label className={`cursor-pointer flex items-center gap-1.5 text-xs text-primary border border-primary/30 px-3 py-1.5 rounded-lg hover:bg-primary/5 transition-colors ${uploading ? "opacity-50 pointer-events-none" : ""}`}>
                <UploadCloud size={13} />
                {uploading ? "Uploading..." : "Upload Image to Content"}
                <input
                  ref={contentImageInputRef}
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleContentImageUpload}
                  disabled={uploading}
                />
              </label>
            </div>
            <RichTextEditor
              value={currentBlog.content}
              onChange={(html) => setCurrentBlog((prev: any) => ({ ...prev, content: html }))}
              placeholder="Start writing your article... Use the toolbar above to format text, add headings, lists, images, and more."
            />
            <p className="text-xs text-muted-foreground mt-2">
              Use the toolbar to format content. Click "Upload Image to Content" to embed images directly in your article.
            </p>
          </div>

          {/* Publish toggle + Submit */}
          <div className="bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                onClick={() => setCurrentBlog({ ...currentBlog, published: !currentBlog.published })}
                className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors ${currentBlog.published ? "bg-green-500" : "bg-border"}`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${currentBlog.published ? "translate-x-7" : "translate-x-1"}`} />
              </div>
              <div>
                <p className="text-sm font-medium">{currentBlog.published ? "Published" : "Draft"}</p>
                <p className="text-xs text-muted-foreground">
                  {currentBlog.published ? "Visible on the website" : "Hidden from public"}
                </p>
              </div>
            </div>

            <div className="flex gap-3 w-full sm:w-auto">
              {!currentBlog.published && (
                <Button
                  type="submit"
                  variant="outline"
                  className="flex-1 sm:flex-none border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => setCurrentBlog((p: any) => ({ ...p, published: false }))}
                >
                  Save as Draft
                </Button>
              )}
              <Button
                type="submit"
                className="flex-1 sm:flex-none bg-primary hover:bg-primary/90"
                onClick={() => {
                  if (!currentBlog.published) setCurrentBlog((p: any) => ({ ...p, published: true }));
                }}
              >
                {currentBlog.published ? "Save Changes" : "Publish Post"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  /* ── LIST VIEW ── */
  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-heading text-primary">Blog Manager</h1>
          <p className="text-muted-foreground text-sm mt-1">{blogs.length} post{blogs.length !== 1 ? "s" : ""} total</p>
        </div>
        <Button
          onClick={() => {
            setCurrentBlog({ title: "", slug: "", content: "", imageUrl: "", published: false });
            setIsEditing(true);
          }}
          className="gap-2"
        >
          <Plus size={18} /> New Post
        </Button>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        {blogs.length === 0 ? (
          <div className="p-12 text-center text-muted-foreground">
            <p className="mb-4">No posts yet.</p>
            <Button
              onClick={() => {
                setCurrentBlog({ title: "", slug: "", content: "", imageUrl: "", published: false });
                setIsEditing(true);
              }}
              variant="outline"
            >
              <Plus size={16} className="mr-2" /> Create your first post
            </Button>
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-muted border-b border-border">
              <tr>
                <th className="p-4 font-semibold text-sm">Post</th>
                <th className="p-4 font-semibold text-sm">Status</th>
                <th className="p-4 font-semibold text-sm hidden md:table-cell">Date</th>
                <th className="p-4 font-semibold text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id} className="border-t border-border hover:bg-muted/40 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      {blog.imageUrl && (
                        <img
                          src={blog.imageUrl}
                          alt={blog.title}
                          className="w-12 h-9 object-cover rounded-md border border-border flex-shrink-0"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                      )}
                      <div>
                        <p className="font-medium text-sm line-clamp-1">{blog.title}</p>
                        <p className="text-xs text-muted-foreground font-mono">/blogs/{blog.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        blog.published ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {blog.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground hidden md:table-cell">
                    {new Date(blog.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        title="View post"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => window.open(`/blogs/${blog.slug}`, "_blank")}
                      >
                        <Eye size={15} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        title="Edit post"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => { setCurrentBlog(blog); setIsEditing(true); }}
                      >
                        <Edit size={15} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        title="Delete post"
                        className="text-destructive hover:bg-destructive/10"
                        onClick={() => handleDelete(blog.id)}
                      >
                        <Trash size={15} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
