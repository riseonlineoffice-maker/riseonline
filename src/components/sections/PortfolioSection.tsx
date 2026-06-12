import { useState, useEffect, useRef } from "react";
import { Play, X, Film, Clapperboard } from "lucide-react";
import shortFormThumb from "@/assets/short-form-thumbnail.jpeg";
import longFormThumb from "@/assets/long-form-thumbnail.jpeg";

const shortFormEdits = [
  { id: 1, title: "Client 4", videoUrl: "https://drive.google.com/file/d/1Deo5s7uDvxm2jTYWTTky5V1_flsM8DXc/preview" },
  { id: 4, title: "Client 1", videoUrl: "https://drive.google.com/file/d/1kqDr_xCtNNhft_qgNqyQvvdpnU7_-JbJ/preview" },
  { id: 5, title: "Client 2", videoUrl: "https://drive.google.com/file/d/1DgKmhcpG2wplf1psJCroOfvN5iWOFQnq/preview" },
  { id: 8, title: "Client 3", videoUrl: "https://drive.google.com/file/d/1xco646I_bdziWN0Rx8SvUCYTM8Q8aZF8/preview" },
  
  { id: 2, title: "Talking Head Reel", videoUrl: "https://drive.google.com/file/d/17-aJYSCub6EGb3tEHRU473mF5LxJD-04/preview", mp4Url: "https://res.cloudinary.com/dxtzazulx/video/upload/v1781283808/Client_Work_auehgy.mp4" },
];

const longFormEdits = [
  { id: 3, title: "YouTube Documentary", videoUrl: "https://drive.google.com/file/d/1DmskCChms7f6HdSX8nSsyGzOCC5DoAxN/preview" },
  { id: 7, title: "Faceless", videoUrl: "https://drive.google.com/file/d/1DkW-b8tU7FYJ8Qq4lAzPRq9SScpOQhol/preview" },
  { id: 9, title: "Sound Design", videoUrl: "https://drive.google.com/file/d/1n2MZE1ZXoNA0u-C4aa2WoAPq24hX_vPI/preview" },
];

type PortfolioItem = { id: number; title: string; videoUrl: string; mp4Url?: string };

const VideoCard = ({ item, onClick, index, aspectRatio = "9/16", thumbnail }: { item: PortfolioItem; onClick: () => void; index: number; aspectRatio?: string; thumbnail?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (!item.mp4Url || videoFailed) return;
    const el = containerRef.current;
    const vid = videoRef.current;
    if (!el || !vid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            vid.play().catch(() => {});
          } else {
            vid.pause();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [item.mp4Url, videoFailed]);

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className="group relative bg-card rounded-lg overflow-hidden cursor-pointer border border-neon/10 hover:border-neon/40 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--neon)/0.15)]"
      style={{ animationDelay: `${index * 80}ms`, aspectRatio }}
    >
      {thumbnail && (
        <img src={thumbnail} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
      )}

      {item.mp4Url && !videoFailed && (
        <video
          ref={videoRef}
          src={item.mp4Url}
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
        />
      )}

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-luxury-black via-luxury-black/90 to-transparent z-10">
        <h3 className="text-foreground font-heading text-lg tracking-wider">{item.title}</h3>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; aspect: "video" | "short" } | null>(null);
  const [activeTab, setActiveTab] = useState<"short" | "long">("short");

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-gradient-cinematic relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, hsl(var(--neon)) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-neon text-xs tracking-[0.4em] uppercase font-medium mb-5 block font-body">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-5 leading-tight">
            <span className="text-foreground">Our </span>
            <span className="text-gradient-accent">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body text-sm leading-relaxed">
            Scroll-stopping edits engineered for views, watch time, and conversions.
          </p>
        </div>

        <div className="flex justify-center mb-14">
          <div className="inline-flex bg-card/50 border border-neon/10 rounded-full p-1 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("short")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-body font-medium tracking-wide uppercase transition-all duration-300
                ${activeTab === "short"
                  ? "bg-neon/15 text-neon border border-neon/30 shadow-[0_0_15px_hsl(var(--neon)/0.1)]"
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
                  ? "bg-neon/15 text-neon border border-neon/30 shadow-[0_0_15px_hsl(var(--neon)/0.1)]"
                  : "text-muted-foreground hover:text-foreground border border-transparent"
                }`}
            >
              <Clapperboard className="w-4 h-4" />
              Long Form
            </button>
          </div>
        </div>

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
                  <VideoCard key={item.id} item={item} index={i} thumbnail={shortFormThumb} onClick={() => setSelectedVideo({ url: item.videoUrl, aspect: "short" })} />
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
                  <VideoCard key={item.id} item={item} index={i} aspectRatio="16/9" thumbnail={longFormThumb} onClick={() => setSelectedVideo({ url: item.videoUrl, aspect: "video" })} />
                ))}
              </div>
            </>
          )}
        </div>

        <p className="text-center text-muted-foreground/60 text-xs mt-16 max-w-xl mx-auto font-body tracking-wide">
          For confidentiality reasons, some client work is shown as samples. Full portfolio available on request.
        </p>
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-luxury-pure/95 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className={`relative mx-4 bg-card border border-neon/20 rounded-lg overflow-hidden animate-scale-in ${
              selectedVideo.aspect === "short"
                ? "h-[90vh] max-h-[90vh] aspect-[9/16]"
                : "w-full max-w-4xl aspect-video"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full
                         bg-luxury-black/90 border border-neon/30 text-neon hover:bg-neon/20 transition-colors duration-300"
            >
              <X className="w-4 h-4" />
            </button>
            <iframe
              src={selectedVideo.url}
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
