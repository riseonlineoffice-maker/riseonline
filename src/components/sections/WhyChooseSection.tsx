import { Check } from "lucide-react";

const reasons = [
  "Premium Quality Output",
  "Fast Turnaround Time",
  "Clear Communication",
  "Industry-Level Editing Standards",
  "Client Satisfaction First",
];

const WhyChooseSection = () => {
  return (
    <section id="why-choose" className="py-24 md:py-32 bg-luxury-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-foreground">Why Choose </span>
              <span className="text-gradient-gold">Rise Online</span>
            </h2>
          </div>

          {/* Reasons List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 border border-gold/20 rounded-lg bg-card/50
                           hover:border-gold/40 hover:bg-card transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full 
                                border border-gold/40 bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                  <Check className="w-5 h-5 text-gold" />
                </div>
                <span className="text-foreground font-medium text-lg">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
};

export default WhyChooseSection;
