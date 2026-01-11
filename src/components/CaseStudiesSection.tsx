import { TrendingDown, CheckCircle, Truck, ShoppingCart } from "lucide-react";
import caseStudySmartwatch from "@/assets/case-study-smartwatch.png";
import caseStudyIphone from "@/assets/case-study-iphone.png";

const caseStudies = [
  {
    product: "iPhone 17 Case Sourcing",
    market: "Amazon, USA",
    icon: ShoppingCart,
    results: [
      { icon: TrendingDown, text: "25% cost reduction from initial quotes" },
      { icon: CheckCircle, text: "Verified manufacturer with proper licensing" },
      { icon: Truck, text: "Smooth delivery within timeline" },
    ],
    description: "Sourced high-quality protective cases with custom branding for an Amazon seller targeting the US market.",
  },
  {
    product: "Smart Watch Sourcing",
    market: "Amazon, Japan",
    icon: ShoppingCart,
    results: [
      { icon: TrendingDown, text: "Competitive pricing secured" },
      { icon: CheckCircle, text: "Full compliance with Japan regulations" },
      { icon: Truck, text: "Reliable supplier partnership established" },
    ],
    description: "Identified and verified a smart watch manufacturer meeting Japanese quality standards and certification requirements.",
  },
];

export const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
            Success Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Case Studies
          </h2>
          <p className="text-muted-foreground text-lg">
            Real examples of successful sourcing projects delivered for international clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={study.product}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Header */}
              <div className="hero-gradient p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                    <study.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-primary-foreground">
                      {study.product}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm">{study.market}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6">{study.description}</p>
                
                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground mb-3">Results:</p>
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <result.icon size={18} className="text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground">{result.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Images */}
        <div className="mt-16 space-y-8 max-w-6xl mx-auto">
          <h3 className="text-center font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
            Project Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300">
              <img 
                src={caseStudyIphone} 
                alt="iPhone 17 Phone Case Sourcing - OEM/ODM project for USA client with 100+ designs" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300">
              <img 
                src={caseStudySmartwatch} 
                alt="Smart Watch Sourcing from Guangzhou, China for Japan client" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
