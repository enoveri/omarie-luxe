import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import servicePicnic from "@/assets/service-picnic.jpg";
import serviceProposal from "@/assets/service-proposal.jpg";
import serviceBabyshower from "@/assets/service-babyshower.jpg";
import servicePaintsip from "@/assets/service-paintsip.jpg";
import heroPicnic from "@/assets/hero-picnic.jpg";

const galleryItems = [
  {
    image: heroPicnic,
    category: "Picnics",
    title: "Golden Hour Picnic",
    location: "Entebbe Botanical Gardens",
  },
  {
    image: serviceProposal,
    category: "Proposals",
    title: "Romantic Garden Proposal",
    location: "Kampala Private Estate",
  },
  {
    image: serviceBabyshower,
    category: "Baby Showers",
    title: "Pink & Gold Baby Shower",
    location: "Serena Hotel Gardens",
  },
  {
    image: servicePaintsip,
    category: "Paint & Sip",
    title: "Twilight Art Evening",
    location: "Lake Victoria Shores",
  },
  {
    image: servicePicnic,
    category: "Picnics",
    title: "Sunset Romance",
    location: "Munyonyo Lakeside",
  },
  {
    image: serviceProposal,
    category: "Proposals",
    title: "Candlelit Surprise",
    location: "Jinja Gardens",
  },
];

const GallerySection = () => {
  // Show only first 4 items on home page
  const displayedItems = galleryItems.slice(0, 4);

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Our Portfolio
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Moments We've <span className="italic">Crafted</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every event tells a story. Here are some of the magical moments
            we've been honored to create.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-3">
                  {item.category}
                </span>
                <h3 className="font-heading text-xl text-background font-medium mb-1">
                  {item.title}
                </h3>
                <p className="text-background/80 text-sm">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button variant="gold-outline" size="lg" asChild>
            <Link to="/gallery" className="flex items-center gap-2">
              View Full Gallery
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
