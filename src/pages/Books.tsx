import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";

const Books = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("/api/books");
        const data = await res.json();
        if (res.ok) {
          setBooks(data);
        }
      } catch (err) {
        console.error("Failed to fetch books:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {loading ? (
        <div className="pt-32 pb-16 text-center text-muted-foreground">Loading books...</div>
      ) : books.length === 0 ? (
        <div className="pt-32 pb-16 text-center text-muted-foreground">No books found. Check back later!</div>
      ) : (
        books.map((book, idx) => {
          // Alternate between Burgundy and Dark themes
          const isBurgundy = idx % 2 === 0;

          return (
            <section 
              key={book.id} 
              className={`py-16 md:py-24 ${isBurgundy ? "bg-primary pt-20 md:pt-24" : "bg-[hsl(0,0%,30%)]"}`}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${isBurgundy ? "" : "flex-row-reverse"}`}>
                  
                  {/* Text Content */}
                  <div className={`space-y-6 ${isBurgundy ? "order-1" : "order-1 lg:order-2"}`} data-aos="fade-right">
                    <h1 className={`font-heading text-4xl md:text-5xl lg:text-6xl ${isBurgundy ? "text-primary-foreground" : "text-white"}`}>
                      {book.title}
                    </h1>

                    <div className="space-y-1">
                      <p className={`text-lg md:text-xl font-medium ${isBurgundy ? "text-primary-foreground/90" : "text-white/90"}`}>
                        Order your copy today.
                      </p>
                      <svg className="w-48 h-4 mt-2" viewBox="0 0 200 10">
                        <path
                          d="M0,5 Q50,0 100,5 T200,5"
                          stroke="white"
                          strokeWidth="2"
                          fill="none"
                          opacity="0.6"
                        />
                      </svg>
                    </div>

                    <p className={`text-sm md:text-base leading-relaxed whitespace-pre-wrap ${isBurgundy ? "text-primary-foreground/80" : "text-white/80"}`}>
                      {book.description}
                    </p>

                    <Button
                      asChild
                      className={`${isBurgundy ? "bg-[hsl(45,100%,50%)] hover:bg-[hsl(45,100%,45%)] text-black" : "bg-primary hover:bg-primary/90 text-primary-foreground"} font-semibold px-8 py-3 rounded-full mt-4`}
                    >
                      <a
                        href={book.purchaseLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Buy The Book
                      </a>
                    </Button>
                  </div>

                  {/* Image */}
                  <div
                    className={`flex justify-center ${isBurgundy ? "lg:justify-end order-2" : "lg:justify-start order-2 lg:order-1"}`}
                    data-aos="fade-left"
                    data-aos-delay="200"
                  >
                    <div className={`${isBurgundy ? "bg-[hsl(0,0%,90%)]" : "bg-[hsl(0,0%,85%)]"} p-8 rounded-lg shadow-2xl`}>
                      <img
                        src={book.imageUrl || "/placeholder.svg"}
                        alt={book.title}
                        className="w-64 md:w-80 rounded shadow-xl object-contain bg-white"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })
      )}

      {/* Newsletter Section */}
      <Newsletter />

      <Footer />
    </div>
  );
};

export default Books;
