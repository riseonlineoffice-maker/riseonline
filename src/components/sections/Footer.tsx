import { Mail, Phone, Instagram, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-16 bg-luxury-pure border-t border-cyan/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading text-gradient-cyan mb-4">Rise Online</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              Premium video editing and social media management agency helping brands create 
              impactful visual experiences.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 uppercase text-sm tracking-wider font-body">Services</h4>
            <ul className="space-y-2">
              {["Video Editing", "Social Media Management", "Social Media Content", "Thumbnails & Branding"].map(service => <li key={service}>
                  <a href="#services" className="text-muted-foreground hover:text-cyan transition-colors duration-300 text-sm font-body">
                    {service}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 uppercase text-sm tracking-wider font-body">Contact</h4>
            <div className="space-y-3">
              <a href="https://wa.me/918188938018" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-cyan transition-colors duration-300 text-sm font-body">
                <Phone className="w-4 h-4 text-cyan" />
                +91 8188938018
              </a>
              <a href="mailto:riseonlineediting@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-cyan transition-colors duration-300 text-sm font-body">
                <Mail className="w-4 h-4 text-cyan" />
                riseonlineediting@gmail.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Twitter, href: "https://x.com/_RiseOnline_" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" }
              ].map(({ Icon, href }, index) => (
                <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-cyan/30 rounded-lg
                             text-cyan hover:bg-cyan/10 hover:border-cyan/60 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cyan/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-body">
            © {currentYear} Rise Online. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm font-body">
            Crafted with <span className="text-cyan">♦</span> for excellence
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;