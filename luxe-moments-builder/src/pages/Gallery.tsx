import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import {
  sanityClient,
  queries,
  urlFor,
  type SanityGalleryItem,
} from "@/lib/sanity";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InstagramFeed from "@/components/InstagramFeed";
import { Button } from "@/components/ui/button";
import servicePicnic from "@/assets/service-picnic.jpg";
import serviceProposal from "@/assets/service-proposal.jpg";
import serviceBabyshower from "@/assets/service-babyshower.jpg";
import servicePaintsip from "@/assets/service-paintsip.jpg";
import heroPicnic from "@/assets/hero-picnic.jpg";

const categories = [
  "All",
  "Picnics",
  "Proposals",
  "Baby Showers",
  "Paint & Sip",
];

const fallbackGalleryItems = [
  {
    image: heroPicnic,
    category: "Picnics",
    title: "Golden Hour Picnic",
    location: "Entebbe Botanical Gardens",
    description:
      "An intimate sunset picnic featuring plush cushions, elegant table settings, and a gourmet spread.",
  },
  {
    image: serviceProposal,
    category: "Proposals",
    title: "Romantic Garden Proposal",
    location: "Kampala Private Estate",
    description:
      "A dreamy proposal setup with rose petals, fairy lights, and a stunning floral arch.",
  },
  {
    image: serviceBabyshower,
    category: "Baby Showers",
    title: "Pink & Gold Baby Shower",
    location: "Serena Hotel Gardens",
    description:
      "Sophisticated baby shower décor with custom balloon installations and luxury sweet table.",
  },
  {
    image: servicePaintsip,
    category: "Paint & Sip",
    title: "Twilight Art Evening",
    location: "Lake Victoria Shores",
    description:
      "Bohemian-inspired paint and sip setup with wine bar and creative art stations.",
  },
  {
    image: servicePicnic,
    category: "Picnics",
    title: "Sunset Romance",
    location: "Munyonyo Lakeside",
    description:
      "Luxurious lakeside picnic with champagne service and fresh florals.",
  },
  {
    image: serviceProposal,
    category: "Proposals",
    title: "Candlelit Surprise",
    location: "Jinja Gardens",
    description:
      "Intimate proposal moment with hundreds of candles and romantic décor.",
  },
  {
    image: heroPicnic,
    category: "Picnics",
    title: "Garden Party Elegance",
    location: "Kampala Botanical Gardens",
    description:
      "Elegant garden picnic with vintage-inspired décor and artisan treats.",
  },
  {
    image: serviceBabyshower,
    category: "Baby Showers",
    title: "Blue Sky Baby Celebration",
    location: "Kololo Residence",
    description:
      "Modern baby shower with blue and white theme, balloon clouds, and custom signage.",
  },
  {
    image: servicePaintsip,
    category: "Paint & Sip",
    title: "Creative Sunset Session",
    location: "Entebbe Shores",
    description:
      "Artistic evening with canvas stations, wine pairings, and ambient lighting.",
  },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const { data: sanityGalleryItems } = useQuery<SanityGalleryItem[]>({
    queryKey: ["galleryItems"],
    queryFn: () => sanityClient.fetch(queries.galleryItems),
  });

  // Use Sanity gallery items if available, otherwise use fallback
  const galleryItems =
    sanityGalleryItems && sanityGalleryItems.length > 0
      ? sanityGalleryItems.map((item) => ({
          image: urlFor(item.image).width(800).quality(85).url(),
          category: item.category,
          title: item.title,
          location: item.location || "",
          description: item.description || "",
        }))
      : fallbackGalleryItems;

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Our Portfolio
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6">
              Moments We've <span className="italic text-primary">Crafted</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Every event tells a story. Browse through our portfolio of magical
              moments we've been honored to create for our clients across
              Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-500"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-background transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-primary-foreground/80 text-xs font-medium tracking-wider uppercase mb-2">
                      {item.category}
                    </p>
                    <h3 className="font-heading text-xl font-medium mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-background/80 mb-3">
                      {item.description}
                    </p>
                    <p className="text-xs text-background/70 flex items-center gap-1">
                      <span>📍</span> {item.location}
                    </p>
                  </div>
                </div>

                {/* Card Content (visible by default) */}
                <div className="p-6 group-hover:opacity-0 transition-opacity duration-500">
                  <p className="text-primary text-xs font-medium tracking-wider uppercase mb-2">
                    {item.category}
                  </p>
                  <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Ready to create your own unforgettable moment?
            </p>
            <Button variant="gold" size="lg" asChild>
              <a
                href="https://wa.me/256789951151?text=Hi%20Omarie%20Luxe,%20I'd%20like%20to%20book%20an%20event"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Event
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <InstagramFeed />

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Gallery;
