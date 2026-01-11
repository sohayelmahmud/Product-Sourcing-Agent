import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="hero-gradient py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-2">
              Abdullah Al Rifat
            </h3>
            <p className="text-primary-foreground/70">
              Product Sourcing & Procurement Specialist
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-primary-foreground/90 text-lg font-medium mb-2">
              Trusted sourcing starts with transparent communication.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Abdullah Al Rifat. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <nav className="flex flex-wrap justify-center gap-6">
            {["About", "Services", "Experience", "Case Studies", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent text-sm transition-colors group"
          >
            Back to top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
