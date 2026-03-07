import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import HiringSection from "@/components/sections/HiringSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-side-glow relative">
      {/* 3D Abstract purple sphere - top right */}
      <div className="fixed top-[-80px] right-[-80px] w-[280px] h-[280px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 40% 40%, hsl(263 80% 60% / 0.35), hsl(263 70% 40% / 0.1), transparent 70%)',
          boxShadow: '0 0 80px 30px hsl(263 70% 50% / 0.15)',
          filter: 'blur(2px)',
        }}
      />
      {/* 3D Abstract purple sphere - bottom left */}
      <div className="fixed bottom-[-80px] left-[-80px] w-[280px] h-[280px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 60% 60%, hsl(280 80% 55% / 0.3), hsl(263 70% 40% / 0.1), transparent 70%)',
          boxShadow: '0 0 80px 30px hsl(280 70% 50% / 0.12)',
          filter: 'blur(2px)',
        }}
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
