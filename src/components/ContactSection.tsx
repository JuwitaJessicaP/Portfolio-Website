import { Mail, MapPin, Instagram, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/juwitajessicaa/',
      icon: Instagram,
      color: 'hover:text-pink-500'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/juwita-jessica-pangestu/',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/JuwitaJessicaP',
      icon: Github,
      color: 'hover:text-gray-800'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let&apos;s <span className="bg-gradient-accent bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate or have questions? I&apos;d love to hear from you.
          </p>
        </div>

        {/* Single info card (no form) */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-card p-8 rounded-2xl shadow-soft border border-border/50">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Get in Touch
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-lavender/10 rounded-lg">
                  <Mail className="text-lavender" size={24} />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href="mailto:jjp13@uw.edu"
                    className="text-muted-foreground hover:text-lavender transition-colors break-all"
                  >
                    jessica.fiona2004@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-rose/10 rounded-lg">
                  <MapPin className="text-rose" size={24} />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Seattle, Washington</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-medium text-foreground mb-4">Connect with me:</p>
              <div className="space-y-3">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <div key={link.name} className="flex items-center gap-3">
                      <IconComponent className={`${link.color} transition-colors`} size={20} />
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-lavender transition-colors text-sm break-all"
                        aria-label={link.name}
                      >
                        {link.url}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
