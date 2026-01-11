import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="hero-gradient py-16">
      <div className="container-custom px-4 sm:px-6">
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Column 1: Identity + (Old Last Column Text) */}
          <div className="flex flex-col">
            <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-4">
              Abdullah Al Rifat
            </h3>

            {/* ৩য় কলামের লেখাটি এখানে নিয়ে আসা হয়েছে */}
            <p className="text-accent text-lg font-medium mb-4 leading-snug">
              "Trusted sourcing starts with transparent communication."
            </p>

            <p className="text-primary-foreground/70 text-sm">
              Product Sourcing & Procurement Specialist. From Chinese factories to your warehouse.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col md:items-center">
            <div>
              <h4 className="text-primary-foreground font-semibold mb-6">Explore</h4>
              <nav className="flex flex-col gap-4">
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
            </div>
          </div>

          {/* Column 3: Contact/Location Info */}
          <div className="flex flex-col md:items-end">
            <div className="md:text-right">
              <h4 className="text-primary-foreground font-semibold mb-6">Location</h4>
              <p className="text-primary-foreground/70 text-sm mb-2">Based in China</p>
              <p className="text-primary-foreground/70 text-sm">Serving Global Clients</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar for Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Abdullah Al Rifat. All rights reserved.
          </p>

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