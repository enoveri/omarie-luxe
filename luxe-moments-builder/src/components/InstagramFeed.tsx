import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const InstagramFeed = () => {
  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Follow Our Journey
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Latest from <span className="italic text-primary">Instagram</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            See our latest work, behind-the-scenes moments, and event
            inspiration on Instagram @omarie_luxe
          </p>
        </div>

        {/* Instagram Feed Widget */}
        <div className="max-w-6xl mx-auto">
          <div
            className="elfsight-app-72a5cecf-4fee-4194-a001-8008c8404622"
            data-elfsight-app-lazy
          ></div>
        </div>

        {/* Follow Button */}
        <div className="text-center mt-12">
          <Button variant="gold" size="lg" asChild>
            <a
              href="https://www.instagram.com/omarie_luxe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Instagram size={20} />
              Follow @omarie_luxe
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
