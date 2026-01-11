import { MessageSquare, Handshake, Package, ClipboardCheck, Truck } from "lucide-react";

const experienceAreas = [
  {
    icon: MessageSquare,
    title: "Supplier Communication",
    description: "Direct communication with Chinese manufacturers in their native language",
  },
  {
    icon: Handshake,
    title: "Negotiation",
    description: "Expert price and term negotiation to secure the best deals for clients",
  },
  {
    icon: Package,
    title: "Sampling",
    description: "Careful sample coordination and quality assessment before production",
  },
  {
    icon: ClipboardCheck,
    title: "Inspections",
    description: "Thorough pre-shipment quality inspections to ensure product standards",
  },
  {
    icon: Truck,
    title: "Production Follow-up",
    description: "Continuous monitoring of production timelines and milestones",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
            Experience
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Sourcing Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            With years of experience as a China-based sourcing agent, I handle every aspect of the procurement process for international clients — from initial supplier discovery to final delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {experienceAreas.map((area, index) => (
            <div
              key={area.title}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg accent-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <area.icon size={24} className="text-accent-foreground" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
