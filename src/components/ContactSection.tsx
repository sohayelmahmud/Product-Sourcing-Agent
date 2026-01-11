import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "alrifat.business@gmail.com",
    href: "mailto:alrifat.business@gmail.com",
    description: "Send me an email anytime",
    color: "bg-red-500/10",
    iconColor: "text-red-500",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+86 177 0850 9012",
    href: "https://wa.me/+8617708509012",
    description: "Quick response on WhatsApp",
    color: "bg-green-500/10",
    iconColor: "text-green-500",
  },
  {
    icon: MessageCircle,
    label: "WeChat",
    value: "+86 177 0850 9012",
    href: "#",
    description: "Add me on WeChat",
    color: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Discuss Your Sourcing Needs
          </h2>
          <p className="text-muted-foreground text-lg">
            Share your product idea and I'll guide you with honest sourcing advice. Whether you're just exploring options or ready to start sourcing, I'm here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${method.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <method.icon size={28} className={method.iconColor} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {method.label}
              </h3>
              <p className="text-accent font-medium mb-2 break-all">
                {method.value}
              </p>
              <p className="text-muted-foreground text-sm">
                {method.description}
              </p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="accent" size="lg" asChild>
            <a href="https://wa.me/+8617708509012" target="_blank" rel="noopener noreferrer">
              <Phone size={18} />
              Message on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
