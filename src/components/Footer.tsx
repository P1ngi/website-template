import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
              </div>
              <span className="text-xl font-bold">Sunny's Page</span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Professional photography services capturing life's most precious moments with artistic vision and technical excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/p1ngi_/" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@lilahinamida" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-3">
              {[
                { name: "Home", href: "https://username-taken-site.vercel.app/home" },
                { name: "About", href: "/about" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Blog", href: "#blog" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-secondary-foreground/80 hover:text-primary transition-colors"
                  {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-secondary-foreground/80">sunnyhe848@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            © 2024 Sunny's Page Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;