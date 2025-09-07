import { Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/juwitajessicaa/',
      icon: Instagram
    },
    {
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/juwita-jessica-pangestu/',
      icon: Linkedin
    },
    {
      name: 'GitHub',
      url: 'https://github.com/JuwitaJessicaP',
      icon: Github
    }
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Name and Tagline */}
          <h3 className="font-display text-2xl font-bold mb-2">
            Juwita Jessica Pangestu
          </h3>
          <p className="text-background/80 mb-8 max-w-2xl mx-auto">
            Incoming UW Foster Finance Major passionate about blending analytical excellence with creative innovation.
          </p>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-8 mb-8">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/80 hover:text-background transition-colors duration-300"
                >
                  <IconComponent size={20} />
                  <span className="text-sm font-medium hidden sm:inline">
                    {link.name}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-background/20">
            <p className="text-background/60 text-sm">
              © 2025 Juwita Jessica Pangestu.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;