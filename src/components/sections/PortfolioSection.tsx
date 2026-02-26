import { useState } from "react";
import { Play, X, Film, Clapperboard } from "lucide-react";

const shortFormEdits = [
  { id: 1, title: "Faceless", videoUrl: "https://drive.google.com/file/d/1DkW-b8tU7FYJ8Qq4lAzPRq9SScpOQhol/preview" },
  { id: 4, title: "Client 1", videoUrl: "https://drive.google.com/file/d/1u-5LJDB-hZ2Ke-fXUFK7kiyUz--1dYCD/preview" },
  { id: 5, title: "Client 2", videoUrl: "https://drive.google.com/file/d/1DgKmhcpG2wplf1psJCroOfvN5iWOFQnq/preview" },
  { id: 8, title: "Client 3", videoUrl: "https://drive.google.com/file/d/1DgKmhcpG2wplf1psJCroOfvN5iWOFQnq/preview" },
  { id: 6, title: "Gameplay", videoUrl: "https://drive.google.com/file/d/1It4Aftr_slOCFAakT3HhvQb9KCTvwW_4/preview" },
  { id: 2, title: "Talking Head Reel", videoUrl: "https://drive.google.com/file/d/17-aJYSCub6EGb3tEHRU473mF5LxJD-04/preview" },
];

const longFormEdits = [
  { id: 3, title: "YouTube Documentary", videoUrl: "https://drive.google.com/file/d/1DmskCChms7f6HdSX8nSsyGzOCC5DoAxN/preview" },
  { id: 7, title: "Vlog", videoUrl: "https://drive.google.com/file/d/1Dum-Nba9xg4gSLB0IOyEq-rGlRQbEo9f/preview" },
  { id: 9, title: "Sound Design", videoUrl: "https://drive.google.com/file/d/1n2MZE1ZXoNA0u-C4aa2WoAPq24hX_vPI/preview" },
];

type PortfolioItem = { id: number; title: string; videoUrl: string };

const VideoCard = ({ item, onClick, index }: { item: PortfolioItem; onClick: () => void; index: number }) => (
  <div
    onClick={onClick}
    className="group relative aspect-[9/16] bg-card rounded-lg overflow-hidden cursor-pointer
               border border-cyan/10 hover:border-cyan/40 transition-all duration-500
               hover:shadow-[0_0_30px_hsl(var(--cyan)/0.15)]"
    style={{ animationDelay: `${index * 80}ms` }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-luxury-soft/80 to-luxury-black" />
    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
      <div className="w-full h-full" style={{
        backgroundImage: `radial-gradient(circle at 30% 40%, hsl(var(--cyan) / 0.25) 0%, transparent 50%)`
      }} />
    </div>

    {/* Title bar */}
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-luxury-black via-luxury-black/90 to-transparent">
      <h3 className="text-foreground font-heading text-lg tracking-wider">{item.title}</h3>
    </div>

    {/* Play overlay */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-cyan/15 border border-cyan/60
                      group-hover:scale-110 group-hover:bg-cyan/25 transition-all duration-400 backdrop-blur-sm">
        <Play className="w-5 h-5 text-cyan fill-cyan ml-0.5" />
      </div>
    </div>
  </div>
);

const PortfolioSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"short" | "long">("short");

  const allItems = [...shortFormEdits, ...longFormEdits];

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-gradient-cinematic relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, hsl(var(--cyan)) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan text-xs tracking-[0.4em] uppercase font-medium mb-5 block font-body">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-5 leading-tight">
            <span className="text-foreground">Our </span>
            <span className="text-gradient-cyan">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body text-sm leading-relaxed">
            Scroll-stopping edits engineered for views, watch time, and conversions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex bg-card/50 border border-cyan/10 rounded-full p-1 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("short")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-body font-medium tracking-wide uppercase transition-all duration-300
                ${activeTab === "short"
                  ? "bg-cyan/15 text-cyan border border-cyan/30 shadow-[0_0_15px_hsl(var(--cyan)/0.1)]"
                  : "text-muted-foreground hover:text-foreground border border-transparent"
                }`}
            >
              <Film className="w-4 h-4" />
              Short Form
            </button>
            <button
              onClick={() => setActiveTab("long")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-body font-medium tracking-wide uppercase transition-all duration-300
                ${activeTab === "long"
                  ? "bg-cyan/15 text-cyan border border-cyan/30 shadow-[0_0_15px_hsl(var(--cyan)/0.1)]"
                  : "text-muted-foreground hover:text-foreground border border-transparent"
                }`}
            >
              <Clapperboard className="w-4 h-4" />
              Long Form
            </button>
          </div>
        </div>

        {/* Active Category */}
        <div className="mb-10">
          {activeTab === "short" ? (
            <>
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-heading text-foreground tracking-wider mb-3">
                  Short Form Edits
                </h3>
                <p className="text-muted-foreground font-body text-sm max-w-lg mx-auto leading-relaxed">
                  For creators, brands & businesses who need viral reels, YouTube shorts, gaming highlights, and scroll-stopping content that drives engagement.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {shortFormEdits.map((item, i) => (
                  <VideoCard key={item.id} item={item} index={i} onClick={() => setSelectedVideo(item.videoUrl)} />
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-heading text-foreground tracking-wider mb-3">
                  Long Form Edits
                </h3>
                <p className="text-muted-foreground font-body text-sm max-w-lg mx-auto leading-relaxed">
                  For YouTubers, podcasters & filmmakers who need cinematic documentaries, polished vlogs, and premium long-form content that retains viewers.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {longFormEdits.map((item, i) => (
                  <VideoCard key={item.id} item={item} index={i} onClick={() => setSelectedVideo(item.videoUrl)} />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-muted-foreground/60 text-xs mt-16 max-w-xl mx-auto font-body tracking-wide">
          For confidentiality reasons, some client work is shown as samples. Full portfolio available on request.
        </p>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-luxury-pure/95 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl mx-4 aspect-video bg-card border border-cyan/20 rounded-lg overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full
                         bg-luxury-black/90 border border-cyan/30 text-cyan hover:bg-cyan/20 transition-colors duration-300"
            >
              <X className="w-4 h-4" />
            </button>
            <iframe
              src={selectedVideo}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
