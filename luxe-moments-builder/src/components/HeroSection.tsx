import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import heroPicnic from "@/assets/hero-picnic.jpg";
import servicePicnic from "@/assets/service-picnic.jpg";
import serviceProposal from "@/assets/service-proposal.jpg";
import serviceBabyshower from "@/assets/service-babyshower.jpg";
import servicePaintsip from "@/assets/service-paintsip.jpg";

const backgroundImages = [
  {
    src: heroPicnic,
    alt: "Luxury outdoor picnic setup with elegant decorations",
  },
  {
    src: serviceProposal,
    alt: "Romantic proposal decoration with roses and lights",
  },
  {
    src: serviceBabyshower,
    alt: "Beautiful baby shower setup with pink balloons",
  },
  { src: servicePicnic, alt: "Elegant picnic arrangement by the lake" },
  { src: servicePaintsip, alt: "Creative paint and sip event setup" },
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/50 to-foreground/40" />
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p
            className="text-primary font-semibold tracking-[0.2em] uppercase text-sm md:text-base mb-6 opacity-0 animate-fade-in drop-shadow-lg"
            style={{ animationDelay: "0.2s" }}
          >
            Luxury for Every Celebration
          </p>

          {/* Main Headline */}
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight mb-6 opacity-0 animate-fade-in drop-shadow-2xl"
            style={{ animationDelay: "0.4s" }}
          >
            Luxury Picnic & Event Styling for{" "}
            <span className="italic text-primary drop-shadow-lg">
              Unforgettable
            </span>{" "}
            Moments
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in drop-shadow-lg font-medium"
            style={{ animationDelay: "0.6s" }}
          >
            From proposals to baby showers — we design experiences, not
            decorations. Creating magical moments in Uganda & beyond.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button variant="hero" asChild>
              <a
                href="https://wa.me/256789951151?text=Hi%20Omarie%20Luxe,%20I'd%20like%20to%20book%20an%20event"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Book on WhatsApp
              </a>
            </Button>
            <Button variant="hero-outline" asChild>
              <a href="/gallery">View Our Setups</a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <a
            href="#services"
            className="flex flex-col items-center text-white/80 hover:text-primary transition-colors drop-shadow-lg"
            aria-label="Scroll to services"
          >
            <ArrowDown size={24} className="animate-float" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
