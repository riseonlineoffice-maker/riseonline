import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/918188938018", "_blank");
  };

  return (
    <section className="py-24 md:py-32 bg-luxury-black relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] 
                        bg-cyan/5 rounded-full blur-3xl animate-pulse-cyan" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-6">
            <span className="text-foreground">Ready to </span>
            <span className="text-gradient-cyan">Elevate Your Brand?</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl text-muted-foreground mb-10 font-body">
            Let's create something powerful together.
          </p>

          {/* CTA Button */}
          <Button 
            variant="cyan" 
            size="xl" 
            onClick={openWhatsApp}
            className="animate-pulse-cyan group"
          >
            <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Message Us on WhatsApp
          </Button>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground font-body">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              Quick Response
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              Free Consultation
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              Premium Quality
            </span>
          </div>
        </div>
      </div>

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
    </section>
  );
};

export default CTASection;