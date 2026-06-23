import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit, Trash, UploadCloud } from "lucide-react";

export default function BooksManager() {
  const [books, setBooks] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBook, setCurrentBook] = useState<any>({ title: '', description: '', imageUrl: '', purchaseLink: '', published: false });
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const token = localStorage.getItem("admin_token");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await fetch("/api/books?all=true");
      const data = await res.json();
      if (res.ok) setBooks(data);
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
        setCurrentBook({ ...currentBook, imageUrl: data.url });
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
    const method = currentBook.id ? "PUT" : "POST";
    const url = currentBook.id ? `/api/books/${currentBook.id}` : "/api/books";

    try {
      const res = await fetch(url, {
        method,
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(currentBook),
      });

      if (res.ok) {
        toast({ title: "Book saved successfully!" });
        setIsEditing(false);
        fetchBooks();
      } else {
        toast({ variant: "destructive", title: "Error saving book" });
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Error" });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this book?")) return;
    try {
      const res = await fetch(`/api/books/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        toast({ title: "Deleted successfully" });
        fetchBooks();
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Error deleting" });
    }
  };

  if (loading) return <div className="p-8">Loading books...</div>;

  if (isEditing) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold font-heading">{currentBook.id ? 'Edit Book' : 'New Book'}</h1>
          <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-xl border border-border">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input required type="text" className="w-full p-3 border rounded-lg" value={currentBook.title} onChange={e => setCurrentBook({...currentBook, title: e.target.value})} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Cover Image</label>
            <div className="flex items-center gap-4">
              {currentBook.imageUrl && <img src={currentBook.imageUrl} alt="Preview" className="h-32 object-contain rounded border" />}
              <label className="cursor-pointer border-2 border-dashed border-primary/50 text-primary px-6 py-4 rounded-lg hover:bg-primary/5 transition-colors flex items-center gap-2">
                <UploadCloud size={20} />
                <span>Upload Cover to Vercel Blob</span>
                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
              </label>
            </div>
            {/* Fallback for local assets if any exist */}
            <div className="mt-2 text-xs text-muted-foreground">
              Or specify a local image path: 
              <input type="text" className="w-full p-2 border rounded mt-1" placeholder="/assets/book-cover.png" value={currentBook.imageUrl || ''} onChange={e => setCurrentBook({...currentBook, imageUrl: e.target.value})} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea required rows={5} className="w-full p-3 border rounded-lg text-sm" value={currentBook.description} onChange={e => setCurrentBook({...currentBook, description: e.target.value})} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Purchase Link URL</label>
            <input required type="url" className="w-full p-3 border rounded-lg" value={currentBook.purchaseLink} onChange={e => setCurrentBook({...currentBook, purchaseLink: e.target.value})} />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="published" checked={currentBook.published} onChange={e => setCurrentBook({...currentBook, published: e.target.checked})} />
            <label htmlFor="published" className="text-sm font-medium">Publish this book</label>
          </div>

          <Button type="submit" className="w-full h-12 text-lg">Save Book</Button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold font-heading text-primary">Books Manager</h1>
        <Button onClick={() => { setCurrentBook({ title: '', description: '', imageUrl: '', purchaseLink: '', published: true }); setIsEditing(true); }}>
          <Plus size={18} className="mr-2" /> New Book
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {books.map(book => (
          <div key={book.id} className="bg-card rounded-xl border border-border p-4 flex flex-col">
            {book.imageUrl && <img src={book.imageUrl} alt={book.title} className="w-full h-48 object-contain mb-4 rounded bg-muted" />}
            <h3 className="text-xl font-bold font-heading mb-2">{book.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">{book.description}</p>
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
              <span className={`px-2 py-1 rounded-full text-xs font-bold ${book.published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {book.published ? 'Published' : 'Draft'}
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => { setCurrentBook(book); setIsEditing(true); }}>
                  <Edit size={16} />
                </Button>
                <Button variant="outline" size="sm" className="text-destructive hover:bg-destructive/10" onClick={() => handleDelete(book.id)}>
                  <Trash size={16} />
                </Button>
              </div>
            </div>
          </div>
        ))}
        {books.length === 0 && <p className="text-muted-foreground col-span-3">No books found.</p>}
      </div>
    </div>
  );
}
