import { Button } from "@/components/ui/button";
import { Users, Sparkles, TrendingUp } from "lucide-react";

const perks = [
  { icon: TrendingUp, title: "Grow With Us", desc: "Level up your skills working on diverse, high-quality projects" },
  { icon: Sparkles, title: "Creative Freedom", desc: "Bring your unique style and vision to every project" },
  { icon: Users, title: "Collaborative Team", desc: "Work alongside passionate creators and storytellers" },
];

const HiringSection = () => {
  return (
    <section id="hiring" className="py-24 md:py-32 bg-gradient-cinematic relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-neon text-sm tracking-[0.3em] uppercase font-medium mb-4 block font-body">
            Join Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-6">
            <span className="text-foreground">We're Hiring </span>
            <span className="text-gradient-accent">Video Editors</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Are you a talented editor with a passion for storytelling? Join Rise Online and work on exciting projects with top creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {perks.map((perk, i) => (
            <div
              key={i}
              className="p-6 bg-card border border-neon/20 rounded-lg text-center hover:border-neon/40 hover:neon-border-glow transition-all duration-500"
            >
              <perk.icon className="w-10 h-10 text-neon mx-auto mb-4" />
              <h3 className="text-lg font-heading text-foreground mb-2">{perk.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{perk.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="cyan"
            size="xl"
            onClick={() => window.open("https://forms.gle/5uJmS2oPujzpHx3G8", "_blank")}
            className="group"
          >
            <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
