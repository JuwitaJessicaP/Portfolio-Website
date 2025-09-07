import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // optional: clean up hash from URL
    const { pathname, search } = window.location;
    window.history.replaceState(null, '', pathname + search);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-lavender/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      {/* Content container */}
      <div className="relative max-w-4xl mx-auto text-center px-6">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
          JUWITA JESSICA
          <br />
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            PANGESTU
          </span>
        </h1>

        <h2 className="font-body text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium mb-6">
          Finance Major @ UW Foster
        </h2>

        <p className="font-body text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-12">
          Blending analytical excellence with creative vision to drive financial
          innovation and meaningful impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, 'about')}
            className="inline-flex items-center px-8 py-4 bg-gradient-accent text-white font-medium rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            Learn More About Me
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="inline-flex items-center px-8 py-4 border-2 border-lavender text-lavender font-medium rounded-full hover:bg-lavender hover:text-white transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
