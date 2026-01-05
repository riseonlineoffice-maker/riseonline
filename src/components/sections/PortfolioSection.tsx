import { useState } from "react";
import { Play, X } from "lucide-react";

const portfolioItems = [
  { id: 1, title: "Faceless", category: "Motion graphics", videoUrl: "https://drive.google.com/file/d/1DkW-b8tU7FYJ8Qq4lAzPRq9SScpOQhol/preview" },
  { id: 2, title: "Talking head", category: "Reels", videoUrl: "https://drive.google.com/file/d/17-aJYSCub6EGb3tEHRU473mF5LxJD-04/preview" },
  { id: 3, title: "YouTube Documentary", category: "Long-form", videoUrl: "https://drive.google.com/file/d/1DmskCChms7f6HdSX8nSsyGzOCC5DoAxN/preview" },
  { id: 4, title: "Real Estate", category: "Shorts", videoUrl: "https://drive.google.com/file/d/1k596VCxPNscZOX_7j38FYH63qz51iK5-/preview" },
  { id: 5, title: "MINECRAFT", category: "Gaming", videoUrl: "https://drive.google.com/file/d/1Kbnz81XTr_Y7xAylKLzwk5sQ5d3tawQ8/preview" },
  { id: 6, title: "GAMEPLAY", category: "Gaming", videoUrl: "https://drive.google.com/file/d/1It4Aftr_slOCFAakT3HhvQb9KCTvwW_4/preview" },
  { id: 7, title: "Tech Review Montage", category: "Long-form", videoUrl: "" },
  { id: 8, title: "SPEED RAMP", category: "Reels", videoUrl: "https://drive.google.com/file/d/1X_Ti2h7FkRqEBskExY9pXCumX5Pbf4cQ/preview" },
  { id: 9, title: "SOUND DESIGN", category: "Cinematic", videoUrl: "https://drive.google.com/file/d/1n2MZE1ZXoNA0u-C4aa2WoAPq24hX_vPI/preview" },
];

const PortfolioSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-gradient-cinematic relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan text-sm tracking-[0.3em] uppercase font-medium mb-4 block font-body">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
            <span className="text-foreground">Our </span>
            <span className="text-gradient-cyan">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            A showcase of our cinematic edits and creative projects
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedVideo(item.id)}
              className="group relative aspect-video bg-card border border-cyan/20 rounded-lg overflow-hidden cursor-pointer
                         hover:border-cyan/50 hover:cyan-border-glow transition-all duration-500"
            >
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-soft to-luxury-black" />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full" style={{
                  backgroundImage: `radial-gradient(circle at 20% 30%, hsl(var(--cyan) / 0.3) 0%, transparent 50%),
                                    radial-gradient(circle at 80% 70%, hsl(var(--cyan) / 0.2) 0%, transparent 40%)`
                }} />
              </div>

              {/* Category Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-cyan/20 border border-cyan/40 text-cyan text-xs font-medium rounded-full uppercase tracking-wider font-body">
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-luxury-black via-luxury-black/80 to-transparent">
                <h3 className="text-foreground font-heading text-lg">{item.title}</h3>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan/20 border-2 border-cyan
                                group-hover:scale-110 group-hover:bg-cyan/30 transition-all duration-300">
                  <Play className="w-6 h-6 text-cyan fill-cyan" />
                </div>
              </div>

              {/* Hover zoom effect on container */}
              <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-muted-foreground text-sm mt-12 max-w-2xl mx-auto italic font-body">
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
            className="relative w-full max-w-4xl mx-4 aspect-video bg-card border border-cyan/30 rounded-lg overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full 
                         bg-luxury-black/80 border border-cyan/40 text-cyan hover:bg-cyan/20 transition-colors duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video embed or placeholder */}
            {portfolioItems.find(item => item.id === selectedVideo)?.videoUrl ? (
              <iframe
                src={portfolioItems.find(item => item.id === selectedVideo)?.videoUrl}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-luxury-soft to-luxury-black">
                <div className="text-center">
                  <Play className="w-16 h-16 text-cyan mx-auto mb-4" />
                  <p className="text-muted-foreground font-body">Video preview coming soon</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;