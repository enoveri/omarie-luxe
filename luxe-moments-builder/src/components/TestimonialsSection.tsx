import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "She transformed a simple idea into something magical. My fiancé cried. The proposal setup was beyond anything I imagined.",
    name: "David M.",
    event: "Proposal Setup",
  },
  {
    quote:
      "Omarie Luxe made our baby shower the talk of the family. The attention to detail was incredible. Every photo looked like a magazine spread.",
    name: "Grace A.",
    event: "Baby Shower",
  },
  {
    quote:
      "The picnic setup for our anniversary was pure perfection. From the cushions to the champagne display — everything was thoughtfully curated.",
    name: "Sarah & James",
    event: "Anniversary Picnic",
  },
  {
    quote:
      "I've worked with many event stylists, but Omarie Luxe understands luxury at a different level. Professional, creative, and always on time.",
    name: "Christine K.",
    event: "Corporate Event",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Client Stories
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            What Our Clients <span className="italic">Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 relative"
            >
              {/* Quote Icon */}
              <Quote
                size={40}
                className="text-primary/20 absolute top-6 right-6"
              />

              {/* Quote Text */}
              <p className="text-foreground/90 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-heading font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
