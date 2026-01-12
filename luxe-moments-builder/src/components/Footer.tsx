import { Instagram, MessageCircle, Heart } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleHashClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (location.pathname !== "/") {
        // Navigate to home first, then scroll
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Already on home, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img
              src="/omarie-white.png"
              alt="Omarie Luxe"
              className="h-12 w-auto mb-4"
            />
            <p className="text-background/60 mb-4">
              Luxury for Every Celebration. Creating unforgettable moments with
              elegance and intentional design.
            </p>
            <p className="text-background/40 text-sm italic">
              "Luxury for Christ"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-medium text-background mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleHashClick(e, "#services")}
                  className="text-background/60 hover:text-primary transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-background/60 hover:text-primary transition-colors duration-300"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleHashClick(e, "#testimonials")}
                  className="text-background/60 hover:text-primary transition-colors duration-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleHashClick(e, "#contact")}
                  className="text-background/60 hover:text-primary transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading text-lg font-medium text-background mb-4">
              Connect With Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/omarie_luxe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
              >
                <Instagram
                  size={18}
                  className="text-background group-hover:text-primary-foreground"
                />
              </a>
              <a
                href="https://wa.me/256789951151?text=Hi%20Omarie%20Luxe,%20I'd%20like%20to%20book%20an%20event"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-[hsl(142,70%,45%)] transition-colors duration-300 group"
              >
                <MessageCircle
                  size={18}
                  className="text-background group-hover:text-[hsl(0,0%,100%)]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/40 text-sm">
              © {currentYear} Omarie Luxe. All rights reserved.
            </p>
            <p className="text-background/40 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-primary" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
