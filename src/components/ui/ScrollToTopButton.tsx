import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll(); // initial
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Clean any lingering hash (rare, but why not)
    const { pathname, search } = window.location;
    window.history.replaceState(null, '', pathname + search);
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={handleClick}
      className={[
        'fixed z-50 right-4 bottom-6 sm:right-6 sm:bottom-8',
        'h-12 w-12 rounded-full',
        'bg-background/80 ring-1 ring-border/60 shadow-soft',
        'backdrop-blur supports-[backdrop-filter]:bg-background/60',
        'text-muted-foreground hover:text-foreground hover:ring-foreground/30',
        'transition-all',
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      ].join(' ')}
    >
      <ArrowUp className="mx-auto" size={20} />
    </button>
  );
}
