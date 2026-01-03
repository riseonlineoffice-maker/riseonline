import { useState } from "react";
import { Play, X } from "lucide-react";

const portfolioItems = [
  { id: 1, title: "Brand Story Film", category: "Cinematic", videoUrl: "" },
  { id: 2, title: "Product Launch Reel", category: "Reels", videoUrl: "" },
  { id: 3, title: "YouTube Documentary", category: "Long-form", videoUrl: "" },
  { id: 4, title: "Instagram Campaign", category: "Shorts", videoUrl: "" },
  { id: 5, title: "Startup Website Promo", category: "Website Promo", videoUrl: "" },
  { id: 6, title: "Fashion Brand Edit", category: "Cinematic", videoUrl: "" },
  { id: 7, title: "Tech Review Montage", category: "Long-form", videoUrl: "" },
  { id: 8, title: "Event Highlights", category: "Reels", videoUrl: "" },
  { id: 9, title: "Music Video Edit", category: "Cinematic", videoUrl: "" },
];

const PortfolioSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-gradient-cinematic relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Our </span>
            <span className="text-gradient-gold">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of our cinematic edits and creative projects
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedVideo(item.id)}
              className="group relative aspect-video bg-card border border-gold/20 rounded-lg overflow-hidden cursor-pointer
                         hover:border-gold/50 hover:gold-border-glow transition-all duration-500"
            >
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-soft to-luxury-black" />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full" style={{
                  backgroundImage: `radial-gradient(circle at 20% 30%, hsl(var(--gold) / 0.3) 0%, transparent 50%),
                                    radial-gradient(circle at 80% 70%, hsl(var(--gold) / 0.2) 0%, transparent 40%)`
                }} />
              </div>

              {/* Category Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-gold/20 border border-gold/40 text-gold text-xs font-medium rounded-full uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-luxury-black via-luxury-black/80 to-transparent">
                <h3 className="text-foreground font-semibold">{item.title}</h3>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gold/20 border-2 border-gold
                                group-hover:scale-110 group-hover:bg-gold/30 transition-all duration-300">
                  <Play className="w-6 h-6 text-gold fill-gold" />
                </div>
              </div>

              {/* Hover zoom effect on container */}
              <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-muted-foreground text-sm mt-12 max-w-2xl mx-auto italic">
          For confidentiality reasons, some client work is shown as samples. Full portfolio available on request.
        </p>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-luxury-black/95 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl mx-4 aspect-video bg-card border border-gold/30 rounded-lg overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full 
                         bg-luxury-black/80 border border-gold/40 text-gold hover:bg-gold/20 transition-colors duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-luxury-soft to-luxury-black">
              <div className="text-center">
                <Play className="w-16 h-16 text-gold mx-auto mb-4" />
                <p className="text-muted-foreground">Video preview coming soon</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
