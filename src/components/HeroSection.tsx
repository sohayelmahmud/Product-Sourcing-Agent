import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Globe, Shield } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary-foreground/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-foreground/5 rounded-full" />
      </div>

      <div className="container-custom px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-up">
            <MapPin size={16} className="text-accent" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Based in China • Serving Global Clients
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Abdullah Al Rifat
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium mb-1 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Product Sourcing & Procurement Specialist
          </p>

          <p className="text-lg md:text-xl text-accent font-medium mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            From Chinese factories to your warehouse — safely and transparently.
          </p>

          {/* Expertise tags */}
          <div className="flex flex-wrap gap-3 mb-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {["Product Sourcing", "Supplier Verification", "OEM/ODM", "Quality Control", "Logistics Support"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/70 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Discuss Your Sourcing Needs
                <ArrowRight size={20} />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#services">View Services</a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-primary-foreground/10 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Globe className="text-accent" size={24} />
              </div>
              <p className="text-2xl font-bold text-primary-foreground">3+</p>
              <p className="text-primary-foreground/60 text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="text-accent" size={24} />
              </div>
              <p className="text-2xl font-bold text-primary-foreground">100%</p>
              <p className="text-primary-foreground/60 text-sm">Verified Suppliers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="text-accent" size={24} />
              </div>
              <p className="text-2xl font-bold text-primary-foreground">Global</p>
              <p className="text-primary-foreground/60 text-sm">Client Base</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
