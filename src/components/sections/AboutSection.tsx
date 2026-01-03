const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-cinematic relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
            About Us
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-foreground">We Are </span>
            <span className="text-gradient-gold">Rise Online</span>
          </h2>

          {/* Description */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Rise Online is a premium creative agency specializing in{" "}
              <span className="text-foreground font-medium">cinematic video editing</span> and{" "}
              <span className="text-foreground font-medium">strategic social media management</span>. 
              We partner with ambitious creators, growing brands, innovative startups, and established businesses 
              to craft visual experiences that command attention.
            </p>
            <p>
              Our team combines technical excellence with creative vision, delivering work that not only 
              looks exceptional but drives real results. Every project receives our full commitment to quality, 
              from concept to final delivery.
            </p>
            <p className="text-foreground font-medium">
              When you work with Rise Online, you're choosing a partner dedicated to elevating your brand 
              above the noise.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24hr", label: "Response Time" },
              { number: "Premium", label: "Quality Standard" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 border border-gold/20 rounded-lg bg-card/50 hover:border-gold/40 transition-colors duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
};

export default AboutSection;
