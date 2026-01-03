import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "YouTube Creator",
    content: "Rise Online transformed my channel with their cinematic editing style. The quality speaks for itself – my engagement has doubled since working with them.",
  },
  {
    name: "Priya Kapoor",
    role: "Startup Founder",
    content: "Their social media management transformed our online presence completely. Our engagement tripled and we gained thousands of quality followers in just months.",
  },
  {
    name: "Arjun Mehta",
    role: "Brand Manager",
    content: "The attention to detail in every edit is remarkable. Rise Online delivers consistently excellent work that exceeds expectations every time.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-cinematic relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">What Clients </span>
            <span className="text-gradient-gold">Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-gold/20 rounded-lg 
                         hover:border-gold/40 hover:gold-border-glow transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-gold">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
