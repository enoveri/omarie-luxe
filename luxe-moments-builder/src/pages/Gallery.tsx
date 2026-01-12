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
          client: item.client || ""
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredItems.map((item, index) => (
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
                  {item.client && (
                    <p className="text-background/60 text-xs mt-1">Client: {item.client}</p>
                  )}
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
