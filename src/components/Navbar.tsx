import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const navLinks = [{
  name: "Home",
  path: "/"
}, {
  name: "About",
  path: "/about"
}, {
  name: "Books",
  path: "/books"
}, {
  name: "Speaking",
  path: "/speaking"
}, {
  name: "Blogs",
  path: "/blogs"
}, {
  name: "Resources",
  path: "/resources"
}];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-lg w-full overflow-x-hidden">
      <nav className="w-full px-4 sm:px-6 lg:px-8 max-w-full overflow-x-hidden">
        <div className="flex items-center justify-between h-16 md:h-20 w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img 
              src={logo} 
              alt="Dionne Tweneboah" 
              className="h-6 md:h-8 w-auto" 
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden xl:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-burgundy after:transition-transform after:duration-300 ${
                  location.pathname === link.path 
                    ? "text-burgundy after:scale-x-100 after:origin-left" 
                    : "text-foreground/70 hover:text-burgundy after:scale-x-0 hover:after:scale-x-100 after:origin-left"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden xl:block">
            <Button 
              asChild 
              className="bg-burgundy hover:bg-burgundy/90 text-white rounded-full px-6 py-2 text-sm font-medium"
            >
              <Link to="/speaking">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-3 flex-shrink-0 z-50 text-foreground hover:text-burgundy transition-all duration-200 rounded-lg hover:bg-muted active:bg-muted/80 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={28} strokeWidth={2.5} className="text-foreground" />
            ) : (
              <Menu size={28} strokeWidth={2.5} className="text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Dropdown */}
        <div 
          className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors py-1 ${
                    location.pathname === link.path 
                      ? "text-burgundy" 
                      : "text-foreground/70 hover:text-burgundy"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                asChild 
                className="mt-2 w-full bg-burgundy hover:bg-burgundy/90 text-white rounded-full"
                onClick={() => setIsOpen(false)}
              >
                <Link to="/speaking">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;