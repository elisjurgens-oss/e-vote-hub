import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 border border-primary-foreground/20 rounded-full" />
        <div className="absolute bottom-40 left-10 w-64 h-64 border border-primary-foreground/20 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 border border-primary-foreground/20" style={{ transform: 'rotate(45deg)' }} />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6 animate-fade-in">
            International Conference
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            E-Voting
            <span className="block text-accent">2026</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Advancing Democracy Through Secure Electronic Voting Systems
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="font-medium">October 15-17, 2026</span>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="font-medium">Vienna, Austria</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 accent-glow"
              asChild
            >
              <a href="#registration">Register Now</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8"
              asChild
            >
              <a href="#call-for-papers">Submit Paper</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
