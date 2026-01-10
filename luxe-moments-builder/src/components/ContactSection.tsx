import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Let's Create Magic
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Ready to Plan Your <span className="italic">Perfect</span> Event?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            We'd love to hear about your vision. Reach out via WhatsApp for the
            fastest response, or give us a call.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* WhatsApp */}
            <a
              href="https://wa.me/256789951151?text=Hi%20Omarie%20Luxe,%20I'd%20like%20to%20book%20an%20event"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card p-6 rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-[hsl(142,70%,45%)]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[hsl(142,70%,45%)] transition-colors duration-300">
                <MessageCircle
                  size={24}
                  className="text-[hsl(142,70%,45%)] group-hover:text-[hsl(0,0%,100%)] transition-colors duration-300"
                />
              </div>
              <h3 className="font-heading text-lg font-medium text-foreground mb-2">
                WhatsApp
              </h3>
              <p className="text-muted-foreground text-sm">
                +256 789 951 151
              </p>
            </a>

            {/* Phone */}
            <a
              href="tel:+256789951151"
              className="group bg-card p-6 rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <Phone
                  size={24}
                  className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                />
              </div>
              <h3 className="font-heading text-lg font-medium text-foreground mb-2">
                Call Us
              </h3>
              <p className="text-muted-foreground text-sm">
                +256 789 951 151
              </p>
            </a>

            {/* Location */}
            <div className="bg-card p-6 rounded-2xl shadow-soft">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-accent" />
              </div>
              <h3 className="font-heading text-lg font-medium text-foreground mb-2">
                Location
              </h3>
              <p className="text-muted-foreground text-sm">
                Kampala, Uganda
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href="https://wa.me/256789951151?text=Hi%20Omarie%20Luxe,%20I'd%20like%20to%20book%20an%20event"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Message on WhatsApp
              </a>
            </Button>
            <Button variant="gold-outline" size="xl" asChild>
              <a
                href="https://www.instagram.com/omarie_luxe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram size={20} />
                Follow on Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
