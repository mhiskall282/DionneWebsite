import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import dionneHero from "@/assets/dionne-hero.jpg";
import dionneAbout from "@/assets/dionne-about.jpg";
import speakingHero from "@/assets/speaking-hero.jpg";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Books", path: "/books" },
  { name: "Speaking", path: "/speaking" },
  { name: "Blogs", path: "/blogs" },
  { name: "Resources", path: "/resources" },
];

const footerImages = [dionneHero, dionneAbout, speakingHero, dionneHero];

const Footer = () => {
  return (
    <footer className="bg-dark text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo & Links */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-1">
              <span className="font-heading text-xl font-bold tracking-tight">
                DIONNE
              </span>
              <span className="font-heading text-xl font-light opacity-70 tracking-tight">
                TWENEBOAH
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Images Gallery & Social */}
          <div className="space-y-6">
            <div className="grid grid-cols-4 gap-2">
              {footerImages.map((img, index) => (
                <div
                  key={index}
                  className="aspect-square rounded overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-right">
              <p className="font-heading text-lg italic opacity-90">
                Connect with me on social
              </p>
              <div className="flex justify-end gap-4 mt-3">
                <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                  <Instagram size={20} />
                </a>
                <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                  <Twitter size={20} />
                </a>
                <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-muted/20 text-center">
          <p className="text-sm opacity-60">
            ©2025 Dionne Akom Tweneboah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
