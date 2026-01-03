import { Mail, Phone, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-luxury-pure border-t border-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient-gold mb-4">Rise Online</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium video editing and website development agency helping brands create 
              impactful visual experiences.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-2">
              {["Video Editing", "Website Development", "Social Media Content", "Thumbnails & Branding"].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 uppercase text-sm tracking-wider">Contact</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/918188938018" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors duration-300 text-sm"
              >
                <Phone className="w-4 h-4 text-gold" />
                +91 8188938018
              </a>
              <a 
                href="mailto:riseonlineediting@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors duration-300 text-sm"
              >
                <Mail className="w-4 h-4 text-gold" />
                riseonlineediting@gmail.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {[Instagram, Youtube, Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center border border-gold/30 rounded-lg
                             text-gold hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Rise Online. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with <span className="text-gold">♦</span> for excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
