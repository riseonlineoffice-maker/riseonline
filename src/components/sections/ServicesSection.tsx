import { Video, Users, Smartphone, Image } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Video Editing",
    description: "Reels, Shorts, Long-form & Cinematic content that captivates audiences",
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Strategy, scheduling & growth tactics to build your online presence",
  },
  {
    icon: Smartphone,
    title: "Social Media Content",
    description: "Scroll-stopping edits optimized for every platform",
  },
  {
    icon: Image,
    title: "Thumbnails & Branding",
    description: "Visual identity that makes your brand instantly recognizable",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-luxury-black relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan text-sm tracking-[0.3em] uppercase font-medium mb-4 block font-body">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading">
            <span className="text-foreground">What We </span>
            <span className="text-gradient-cyan">Create</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card border border-cyan/20 rounded-lg 
                         hover:border-cyan/50 hover:cyan-border-glow
                         transition-all duration-500 cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-6 relative">
                <div className="w-14 h-14 flex items-center justify-center border border-cyan/30 rounded-lg 
                                group-hover:border-cyan/60 group-hover:bg-cyan/5 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-cyan" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading text-foreground mb-3 group-hover:text-cyan transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed font-body">
                {service.description}
              </p>

              {/* Hover line effect */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative cyan orb */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan/5 rounded-full blur-3xl transform translate-x-1/2" />
    </section>
  );
};

export default ServicesSection;