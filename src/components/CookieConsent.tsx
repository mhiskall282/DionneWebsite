import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted or declined cookies
    const consent = localStorage.getItem("dionne_cookie_consent");
    if (!consent) {
      // Delay showing the popup slightly for a better user experience
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("dionne_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("dionne_cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md transform transition-transform duration-500 animate-in slide-in-from-bottom-10">
      <div className="bg-card/95 backdrop-blur-md border border-border rounded-2xl shadow-2xl p-6 flex flex-col gap-4">
        <div>
          <h3 className="font-heading text-lg font-bold text-foreground mb-2">We value your privacy</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button 
            onClick={handleAccept} 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Accept All
          </Button>
          <Button 
            onClick={handleDecline} 
            variant="outline" 
            className="w-full font-semibold"
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
}
