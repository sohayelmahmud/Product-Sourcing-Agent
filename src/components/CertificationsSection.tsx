import { Award, FileCheck, ExternalLink } from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "Procurement, Supply Chain, and Product Sourcing Training Program",
    description: "Completed training from Area71 Academy covering procurement, supply chain management, and product sourcing best practices.",
    issuer: "Area71 Academy",
    date: "May 2025",
    certificateUrl: "/certificates/procurement-certificate.pdf",
  },
  {
    icon: FileCheck,
    title: "Export Import Mastery Certification",
    description: "Comprehensive training in international trade regulations and export-import procedures",
    issuer: "Perpetual Academy",
    date: "January 2025",
    certificateUrl: "https://perpetualacademy.com/certificates/export-import-mastery",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accnent font-medium text-sm tracking-wider uppercase mb-4 block">
            Credentials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Certifications & Compliance
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional certifications that validate expertise in global sourcing and trade compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <cert.icon size={32} className="text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {cert.title}
              </h3>
              {cert.issuer && (
                <p className="text-accent text-sm font-medium mb-1">
                  {cert.issuer} • {cert.date}
                </p>
              )}
              <p className="text-muted-foreground leading-relaxed mb-4">
                {cert.description}
              </p>
              {cert.certificateUrl && (
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium text-sm transition-colors"
                >
                  View Certificate <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
