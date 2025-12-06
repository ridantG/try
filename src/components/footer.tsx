import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Blog", href: "#" },
    ],
    contests: [
      { name: "All Contests", href: "#" },
      { name: "Photography", href: "#" },
      { name: "Dance", href: "#" },
      { name: "Singing", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  };

  return (
    <footer id="contact" className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold text-background">Admere</span>
            </div>

            <p className="text-background/70 mb-6 max-w-sm leading-relaxed">
              India's #1 free online contest platform. Showcase your talent, compete with thousands, and win exciting prizes.
            </p>

            <div className="space-y-3 text-background/70">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>support@admere.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+91 1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contests */}
          <div>
            <h4 className="font-bold text-background mb-4">Contests</h4>
            <ul className="space-y-3">
              {footerLinks.contests.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-background mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Admere. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
