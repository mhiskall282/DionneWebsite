import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit, Trash, UploadCloud } from "lucide-react";

export default function BlogsManager() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<any>({ title: '', slug: '', content: '', imageUrl: '', published: false });
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

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

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    toast({ title: "Uploading image..." });
    
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setCurrentBlog({ ...currentBlog, imageUrl: data.url });
        toast({ title: "Image uploaded successfully" });
      } else {
        toast({ variant: "destructive", title: "Upload failed" });
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Upload error" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = currentBlog.id ? "PUT" : "POST";
    const url = currentBlog.id ? `/api/blogs/${currentBlog.id}` : "/api/blogs";

    try {
      const res = await fetch(url, {
        method,
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(currentBlog),
      });

      if (res.ok) {
        toast({ title: "Blog saved successfully!" });
        setIsEditing(false);
        fetchBlogs();
      } else {
        toast({ variant: "destructive", title: "Error saving blog" });
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Error" });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        toast({ title: "Deleted successfully" });
        fetchBlogs();
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Error deleting" });
    }
  };

  if (loading) return <div className="p-8">Loading blogs...</div>;

  if (isEditing) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold font-heading">{currentBlog.id ? 'Edit Post' : 'New Post'}</h1>
          <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-xl border border-border">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input required type="text" className="w-full p-3 border rounded-lg" value={currentBlog.title} onChange={e => setCurrentBlog({...currentBlog, title: e.target.value})} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Slug</label>
            <input required type="text" className="w-full p-3 border rounded-lg" value={currentBlog.slug} onChange={e => setCurrentBlog({...currentBlog, slug: e.target.value})} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Featured Image</label>
            <div className="flex items-center gap-4">
              {currentBlog.imageUrl && <img src={currentBlog.imageUrl} alt="Preview" className="h-20 w-32 object-cover rounded" />}
              <label className="cursor-pointer border-2 border-dashed border-primary/50 text-primary px-6 py-4 rounded-lg hover:bg-primary/5 transition-colors flex items-center gap-2">
                <UploadCloud size={20} />
                <span>Upload Image to Vercel Blob</span>
                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Content (Markdown or Plain Text)</label>
            <textarea required rows={10} className="w-full p-3 border rounded-lg font-mono text-sm" value={currentBlog.content} onChange={e => setCurrentBlog({...currentBlog, content: e.target.value})} />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="published" checked={currentBlog.published} onChange={e => setCurrentBlog({...currentBlog, published: e.target.checked})} />
            <label htmlFor="published" className="text-sm font-medium">Publish this post</label>
          </div>

          <Button type="submit" className="w-full h-12 text-lg">Save Post</Button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold font-heading text-primary">Blog Manager</h1>
        <Button onClick={() => { setCurrentBlog({ title: '', slug: '', content: '', imageUrl: '', published: false }); setIsEditing(true); }}>
          <Plus size={18} className="mr-2" /> New Post
        </Button>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-muted">
            <tr>
              <th className="p-4 font-medium">Title</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.length === 0 ? (
              <tr><td colSpan={4} className="p-4 text-center text-muted-foreground">No posts found</td></tr>
            ) : blogs.map(blog => (
              <tr key={blog.id} className="border-t border-border">
                <td className="p-4 font-medium">{blog.title}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${blog.published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {blog.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="p-4 text-sm text-muted-foreground">{new Date(blog.createdAt).toLocaleDateString()}</td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => { setCurrentBlog(blog); setIsEditing(true); }}>
                      <Edit size={16} />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10" onClick={() => handleDelete(blog.id)}>
                      <Trash size={16} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
