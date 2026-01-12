import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight, Images } from "lucide-react";
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

const picnicSubcategories = ["All Picnics", "Décor", "Food", "Drinks", "Games"];

const fallbackGalleryItems = [
  {
    image: heroPicnic,
    images: [] as string[],
    category: "Picnics",
    subcategory: "Décor",
    title: "Golden Hour Picnic",
    location: "Entebbe Botanical Gardens",
    description:
      "An intimate sunset picnic featuring plush cushions, elegant table settings, and a gourmet spread.",
    clientName: "",
  },
  {
    image: serviceProposal,
    images: [] as string[],
    category: "Proposals",
    subcategory: "",
    title: "Romantic Garden Proposal",
    location: "Kampala Private Estate",
    description:
      "A dreamy proposal setup with rose petals, fairy lights, and a stunning floral arch.",
    clientName: "",
  },
  {
    image: serviceBabyshower,
    images: [] as string[],
    category: "Baby Showers",
    subcategory: "",
    title: "Pink & Gold Baby Shower",
    location: "Serena Hotel Gardens",
    description:
      "Sophisticated baby shower décor with custom balloon installations and luxury sweet table.",
    clientName: "",
  },
  {
    image: servicePaintsip,
    images: [] as string[],
    category: "Paint & Sip",
    subcategory: "",
    title: "Twilight Art Evening",
    location: "Lake Victoria Shores",
    description:
      "Bohemian-inspired paint and sip setup with wine bar and creative art stations.",
    clientName: "",
  },
  {
    image: servicePicnic,
    images: [] as string[],
    category: "Picnics",
    subcategory: "Food",
    title: "Sunset Romance",
    location: "Munyonyo Lakeside",
    description:
      "Luxurious lakeside picnic with champagne service and fresh florals.",
    clientName: "",
  },
  {
    image: serviceProposal,
    images: [] as string[],
    category: "Proposals",
    subcategory: "",
    title: "Candlelit Surprise",
    location: "Jinja Gardens",
    description:
      "Intimate proposal moment with hundreds of candles and romantic décor.",
    clientName: "",
  },
  {
    image: heroPicnic,
    images: [] as string[],
    category: "Picnics",
    subcategory: "Drinks",
    title: "Garden Party Elegance",
    location: "Kampala Botanical Gardens",
    description:
      "Elegant garden picnic with vintage-inspired décor and artisan treats.",
    clientName: "",
  },
  {
    image: serviceBabyshower,
    images: [] as string[],
    category: "Baby Showers",
    subcategory: "",
    title: "Blue Sky Baby Celebration",
    location: "Kololo Residence",
    description:
      "Modern baby shower with blue and white theme, balloon clouds, and custom signage.",
    clientName: "",
  },
  {
    image: servicePaintsip,
    images: [] as string[],
    category: "Paint & Sip",
    subcategory: "",
    title: "Creative Sunset Session",
    location: "Entebbe Shores",
    description:
      "Artistic evening with canvas stations, wine pairings, and ambient lighting.",
    clientName: "",
  },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSubFilter, setActiveSubFilter] = useState("All Picnics");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState("");

  const { data: sanityGalleryItems } = useQuery<SanityGalleryItem[]>({
    queryKey: ["galleryItems"],
    queryFn: () => sanityClient.fetch(queries.galleryItems),
  });

  // Use Sanity gallery items if available, otherwise use fallback
  const galleryItems =
    sanityGalleryItems && sanityGalleryItems.length > 0
      ? sanityGalleryItems.map((item) => ({
          image: urlFor(item.image).width(800).quality(85).url(),
          images: item.images
            ? item.images.map((img) =>
                urlFor(img).width(1200).quality(90).url()
              )
            : [],
          category: item.category,
          subcategory: item.subcategory || "",
          title: item.title,
          location: item.location || "",
          description: item.description || "",
          clientName: item.clientName || "",
        }))
      : fallbackGalleryItems;

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : activeFilter === "Picnics" && activeSubFilter !== "All Picnics"
      ? galleryItems.filter(
          (item) =>
            item.category === "Picnics" && item.subcategory === activeSubFilter
        )
      : galleryItems.filter((item) => item.category === activeFilter);

  // Reset subcategory filter when main category changes
  const handleCategoryChange = (category: string) => {
    setActiveFilter(category);
    if (category !== "Picnics") {
      setActiveSubFilter("All Picnics");
    }
  };

  // Open lightbox with all images for a gallery item
  const openLightbox = (item: (typeof galleryItems)[0], startIndex = 0) => {
    const allImages = [item.image, ...item.images];
    setLightboxImages(allImages);
    setLightboxIndex(startIndex);
    setLightboxTitle(item.title);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImages([]);
    setLightboxIndex(0);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setLightboxIndex(
      (prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length
    );
  };

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
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
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

          {/* Picnic Subcategory Tabs */}
          {activeFilter === "Picnics" && (
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {picnicSubcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubFilter(sub)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
                    activeSubFilter === sub
                      ? "bg-primary/20 text-primary border-primary"
                      : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredItems.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Image count badge */}
                {item.images.length > 0 && (
                  <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    <Images size={14} />
                    <span>{item.images.length + 1}</span>
                  </div>
                )}
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
                  {item.clientName && (
                    <p className="text-background/60 text-xs mt-1">
                      Client: {item.clientName}
                    </p>
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

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
          >
            <X size={32} />
          </button>

          {/* Title */}
          <div className="absolute top-4 left-4 text-white">
            <h3 className="font-heading text-xl font-medium">
              {lightboxTitle}
            </h3>
            <p className="text-white/60 text-sm">
              {lightboxIndex + 1} of {lightboxImages.length}
            </p>
          </div>

          {/* Previous button */}
          {lightboxImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors bg-black/30 hover:bg-black/50 p-2 rounded-full"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Image */}
          <img
            src={lightboxImages[lightboxIndex]}
            alt={`${lightboxTitle} - Image ${lightboxIndex + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next button */}
          {lightboxImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors bg-black/30 hover:bg-black/50 p-2 rounded-full"
            >
              <ChevronRight size={32} />
            </button>
          )}

          {/* Thumbnail strip */}
          {lightboxImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] p-2">
              {lightboxImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(idx);
                  }}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === lightboxIndex
                      ? "border-primary opacity-100"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default Gallery;
