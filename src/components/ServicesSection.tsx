import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Basic",
    subtitle: "Supplier Discovery",
    features: [
      "Product sourcing from 1688 / Alibaba",
      "2–3 supplier options",
      "Price, MOQ, and lead time comparison",
      "Basic supplier background check",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    subtitle: "Verified Sourcing & Sampling",
    features: [
      "Everything in Basic",
      "4–6 verified suppliers",
      "Detailed supplier verification",
      "Sample ordering and quality review",
      "Price and term negotiation support",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    subtitle: "End-to-End Sourcing & Production",
    features: [
      "Everything in Standard",
      "OEM / private label coordination",
      "Logo and packaging support",
      "Production follow-up",
      "Pre-shipment quality inspection",
      "Logistics and shipping assistance",
    ],
    highlighted: false,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
            Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sourcing Service Packages
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the level of support that fits your sourcing needs. Final scope depends on product type and order quantity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] ${
                pkg.highlighted
                  ? "bg-primary text-primary-foreground shadow-elevated"
                  : "bg-card shadow-card hover:shadow-elevated"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full accent-gradient text-accent-foreground text-xs font-semibold">
                    <Star size={12} fill="currentColor" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold mb-2">{pkg.name}</h3>
                <p
                  className={`text-sm ${
                    pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {pkg.subtitle}
                </p>
              </div>

              <ul className="space-y-4">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className={`flex-shrink-0 mt-0.5 ${
                        pkg.highlighted ? "text-accent" : "text-accent"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        pkg.highlighted ? "text-primary-foreground/90" : "text-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-10 text-sm">
          Final scope depends on product type and order quantity.
        </p>
      </div>
    </section>
  );
};
