import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import servicePicnic from "@/assets/service-picnic.jpg";
import serviceProposal from "@/assets/service-proposal.jpg";
import serviceBabyshower from "@/assets/service-babyshower.jpg";
import servicePaintsip from "@/assets/service-paintsip.jpg";

const services = [
  {
    title: "Luxury Picnic Setups",
    description:
      "Intimate outdoor experiences with plush seating, gourmet displays, and elegant styling",
    image: servicePicnic,
  },
  {
    title: "Proposal Decorations",
    description:
      "Create the perfect moment with romantic arches, rose petals, and fairy lights",
    image: serviceProposal,
  },
  {
    title: "Baby Showers",
    description:
      "Celebrate new beginnings with beautifully themed décor and sweet table displays",
    image: serviceBabyshower,
  },
  {
    title: "Paint & Sip Experiences",
    description:
      "Artistic gatherings with bohemian flair, wine, and creative vibes",
    image: servicePaintsip,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            What We Create
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Experiences, Not Just <span className="italic">Decorations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each setup is thoughtfully designed to reflect your vision and
            create memories that last a lifetime.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <Button
                  variant="gold-outline"
                  size="sm"
                  className="group/btn"
                  asChild
                >
                  <a
                    href={`https://wa.me/256700000000?text=Hi%20Omarie%20Luxe,%20I'm%20interested%20in%20${encodeURIComponent(
                      service.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book This Setup
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
