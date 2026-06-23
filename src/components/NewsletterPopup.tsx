import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import newsImage from "@/assets/news-image.jpg";

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // Check if user has already closed it or subscribed
    const hasSeenPopup = localStorage.getItem("newsletter_popup_closed");
    
    if (!hasSeenPopup) {
      // Show popup after 6 seconds of browsing
      const timer = setTimeout(() => {
        setOpen(true);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      // Don't show again for this session/user once closed
      localStorage.setItem("newsletter_popup_closed", "true");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    if (!email) return;

    import("react").then((React) => {
      React.startTransition(() => {
        setStatus("loading");
        setErrorMsg("");
      });
    });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        if (emailRef.current) emailRef.current.value = "";
        // Automatically close after 3 seconds of success
        setTimeout(() => {
          handleClose(false);
        }, 3000);
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-4xl p-0 overflow-hidden border-none rounded-3xl bg-white shadow-2xl">
        {/* Hidden titles for screen readers to avoid radix ui warnings */}
        <DialogTitle className="sr-only">Subscribe to Newsletter</DialogTitle>
        <DialogDescription className="sr-only">Enter your email to subscribe to Dionne Tweneboah's newsletter.</DialogDescription>

        <div className="grid md:grid-cols-2">
          {/* Left Side: Image */}
          <div className="relative hidden md:block h-[400px] md:h-auto">
            <img 
              src={newsImage} 
              alt="Dionne Tweneboah" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-white text-3xl font-serif font-bold leading-tight drop-shadow-md">
                It's Your Time<br />to Shine
              </h3>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="flex flex-col justify-center p-8 md:p-12 space-y-6">
            <div className="space-y-2">
              <h2 className="text-[#992430] text-3xl font-serif font-bold leading-tight">
                Join the Community
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Sign up for my weekly newsletter for honest conversations on growth, purpose, and becoming your best self.
              </p>
            </div>

            {status === "success" ? (
              <div className="space-y-4 py-6">
                <div className="text-4xl text-center">🎉</div>
                <h3 className="text-[#992430] font-serif text-2xl font-bold text-center">
                  You're in!
                </h3>
                <p className="text-gray-500 text-center text-sm">
                  Welcome to the community! Check your inbox for a confirmation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  ref={emailRef}
                  required
                  disabled={status === "loading"}
                  className="h-12 rounded-xl border-gray-300 px-4 placeholder:text-gray-400 focus-visible:ring-[#992430]"
                />

                {status === "error" && (
                  <p className="text-red-500 text-sm">{errorMsg}</p>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-12 text-base font-bold bg-[#992430] hover:bg-[#7a1d26] text-white rounded-xl transition-all disabled:opacity-70"
                >
                  {status === "loading" ? "Signing you up..." : "Subscribe Now"}
                </Button>

                <p className="text-xs text-gray-400 text-center pt-2">
                  No spam. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
