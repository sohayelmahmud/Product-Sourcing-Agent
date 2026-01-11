import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Based in China with 3+ years of hands-on sourcing experience",
  "Direct relationships with verified factory partners",
  "Protect clients from scams, delays, and quality issues",
  "Support for Amazon sellers, Shopify brands, and wholesale buyers",
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner in China Sourcing
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              As a China-based sourcing specialist, I bridge the gap between international buyers and Chinese manufacturers. My on-the-ground presence allows me to conduct thorough supplier verification, negotiate better terms, and ensure quality control throughout the production process.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I understand the challenges of cross-border sourcing — language barriers, cultural differences, and the risk of unreliable suppliers. That's why I provide transparent, end-to-end support to help you source products safely and efficiently.
            </p>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.15),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.1),transparent_50%)]" />
              
              {/* Stats cards */}
              <div className="relative h-full flex flex-col justify-center gap-6">
                <div className="bg-card shadow-elevated rounded-xl p-6 animate-float">
                  <p className="text-4xl font-bold text-foreground mb-1">3+</p>
                  <p className="text-muted-foreground">Years in China Sourcing</p>
                </div>
                <div className="bg-card shadow-elevated rounded-xl p-6 ml-12 animate-float" style={{ animationDelay: "0.5s" }}>
                  <p className="text-4xl font-bold text-foreground mb-1">Direct</p>
                  <p className="text-muted-foreground">Factory Relationships</p>
                </div>
                <div className="bg-card shadow-elevated rounded-xl p-6 animate-float" style={{ animationDelay: "1s" }}>
                  <p className="text-4xl font-bold text-foreground mb-1">End-to-End</p>
                  <p className="text-muted-foreground">Sourcing Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
