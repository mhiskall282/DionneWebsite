import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import social1 from "@/assets/social-1.jpg";
import social2 from "@/assets/social-2.jpg";
import social3 from "@/assets/social-3.jpg";
import social4 from "@/assets/social-4.jpg";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Books", path: "/books" },
  { name: "Speaking", path: "/speaking" },
  { name: "Blogs", path: "/blogs" },
  { name: "Resources", path: "/resources" },
];

const footerImages = [
  { img: social1, overlay: null },
  { img: social2, overlay: "linkedin" },
  { img: social3, overlay: "instagram" },
  { img: social4, overlay: null },
];

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Logo */}
          <div className="md:col-span-3">
            <Link to="/" className="flex items-center gap-1">
              <span className="font-heading text-xl font-bold tracking-widest">
                DIONNE
              </span>
              <span className="font-heading text-xl font-light opacity-60 tracking-widest">
                TWENEBOAH
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-base opacity-90 hover:opacity-100 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Images Gallery & Social */}
          <div className="md:col-span-7 space-y-6">
            <div className="grid grid-cols-4 gap-0">
              {footerImages.map((item, index) => (
                <div
                  key={index}
                  className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
                >
                  <img
                    src={item.img}
                    alt={`Social ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {item.overlay && (
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.overlay === "linkedin" && (
                        <>
                          <Linkedin size={24} className="text-white mb-2" />
                          <span className="text-white text-sm">LinkedIn</span>
                        </>
                      )}
                      {item.overlay === "instagram" && (
                        <>
                          <Instagram size={24} className="text-white mb-2" />
                          <span className="text-white text-sm">Instagram</span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-right">
              <p className="font-heading text-xl italic text-white/90">
                Connect with me on social
              </p>
              {/* Decorative underline */}
              <div className="flex justify-end mt-2">
                <svg 
                  viewBox="0 0 200 20" 
                  className="w-48 h-5"
                  fill="none"
                >
                  <path 
                    d="M5 15 Q50 5 100 10 Q150 15 195 5" 
                    stroke="white" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-white/70">
            ©2025 Dionne Akom Tweneboah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;