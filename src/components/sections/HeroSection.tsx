import { Button } from "@/components/ui/button";
import { Play, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToWork = () => {
    const element = document.getElementById("portfolio");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/918188938018", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/60 to-luxury-black" />
      </div>

      {/* Floating cyan particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        {/* Logo/Brand */}
        <div className="mb-8 animate-fade-up">
          <span className="text-cyan text-sm tracking-[0.3em] uppercase font-medium">
            Rise Online
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading leading-tight mb-6 animate-fade-up delay-100">
          <span className="text-foreground">Premium Video Editing & </span>
          <span className="text-gradient-cyan">Social Media Management</span>
          <span className="text-foreground"> for Brands That Want to </span>
          <span className="text-gradient-cyan">Stand Out</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-up delay-200 font-body">
          We help creators and businesses grow with cinematic edits and strategic social media management.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up delay-300">
          <Button 
            variant="cyan" 
            size="xl" 
            onClick={scrollToWork}
            className="group"
          >
            <Play className="w-5 h-5 mr-1 group-hover:scale-110 transition-transform" />
            Our Work
          </Button>
          <Button 
            variant="cyanOutline" 
            size="xl"
            onClick={openWhatsApp}
          >
            Contact on WhatsApp
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-cyan/60" />
        </div>
      </div>

      {/* Cyan accent lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
    </section>
  );
};

export default HeroSection;