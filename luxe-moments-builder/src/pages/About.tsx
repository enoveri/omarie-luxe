import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Sparkles, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
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
              Our Story
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6">
              About <span className="italic text-primary">Omarie Luxe</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We believe every celebration deserves to be extraordinary. From
              intimate picnics to grand events, we craft experiences that touch
              hearts and create lasting memories.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Our Mission
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-6">
                Creating <span className="italic">Unforgettable</span> Moments
              </h2>
              <p className="text-muted-foreground mb-6">
                At Omarie Luxe, we don't just plan events — we design
                experiences. Every detail is thoughtfully curated to reflect
                your unique story and vision. Our passion lies in transforming
                ordinary moments into extraordinary memories.
              </p>
              <p className="text-muted-foreground mb-6">
                Based in Kampala, Uganda, we bring luxury and elegance to every
                celebration, whether it's an intimate proposal, a joyful baby
                shower, or a vibrant paint & sip party.
              </p>
              <p className="text-foreground/80 italic font-heading text-lg">
                "Luxury for Christ" — our guiding principle in everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-2xl shadow-soft">
                <Heart className="text-primary mb-4" size={32} />
                <h3 className="font-heading text-lg font-medium text-foreground mb-2">
                  Passion
                </h3>
                <p className="text-muted-foreground text-sm">
                  Every event is crafted with love and dedication to perfection.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-soft">
                <Sparkles className="text-primary mb-4" size={32} />
                <h3 className="font-heading text-lg font-medium text-foreground mb-2">
                  Creativity
                </h3>
                <p className="text-muted-foreground text-sm">
                  Unique designs that bring your vision to life beautifully.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-soft">
                <Users className="text-primary mb-4" size={32} />
                <h3 className="font-heading text-lg font-medium text-foreground mb-2">
                  Personal Touch
                </h3>
                <p className="text-muted-foreground text-sm">
                  We treat every client like family, understanding your needs.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-soft">
                <Award className="text-primary mb-4" size={32} />
                <h3 className="font-heading text-lg font-medium text-foreground mb-2">
                  Excellence
                </h3>
                <p className="text-muted-foreground text-sm">
                  Committed to delivering nothing less than the best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-6">
            Ready to Create Your{" "}
            <span className="italic text-primary">Perfect</span> Moment?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's work together to bring your vision to life. Contact us today
            to start planning your unforgettable celebration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="xl" asChild>
              <a
                href="https://wa.me/256789951151?text=Hi%20Omarie%20Luxe,%20I'd%20like%20to%20book%20an%20event"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in Touch
              </a>
            </Button>
            <Button variant="gold-outline" size="xl" asChild>
              <Link to="/#services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default About;
