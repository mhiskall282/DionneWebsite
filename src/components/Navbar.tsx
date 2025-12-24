import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/30">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1">
            <span className="font-heading text-lg md:text-xl font-semibold tracking-[0.15em] text-foreground">
              DIONNE
            </span>
            <span className="font-heading text-lg md:text-xl font-normal tracking-[0.15em] text-muted-foreground">
              TWENEBOAH
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-burgundy after:transition-transform after:duration-300 ${location.pathname === link.path ? "text-burgundy after:scale-x-100" : "text-foreground/70 hover:text-burgundy after:scale-x-0 hover:after:scale-x-100 after:origin-left"}`}>
                {link.name}
              </Link>)}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-burgundy hover:bg-burgundy/90 text-white rounded-full px-6 py-2 text-sm font-medium">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 border-t border-border animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`text-base font-medium transition-colors ${location.pathname === link.path ? "text-burgundy" : "text-foreground/70 hover:text-foreground"}`}>
                  {link.name}
                </Link>)}
              <Button className="mt-2 w-full bg-burgundy hover:bg-burgundy/90 text-white rounded-full">
                Book Consultation
              </Button>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Navbar;