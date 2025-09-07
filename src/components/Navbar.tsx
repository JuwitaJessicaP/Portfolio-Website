import { useCallback, useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const HEADER_OFFSET_PX = 72; // adjust if your header height changes

function smoothScrollToId(id: string, offset = 0, stripHash = true) {
  const el = document.getElementById(id);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const absoluteY = window.pageYOffset + rect.top - offset;
  window.scrollTo({ top: absoluteY, behavior: 'smooth' });

  if (stripHash) {
    // remove hash from URL so it stays clean
    const { pathname, search } = window.location;
    window.history.replaceState(null, '', pathname + search);
  }
}

const links = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const onNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      setOpen(false);
      smoothScrollToId(id, HEADER_OFFSET_PX, true);
    },
    []
  );

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Brand */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo/logo.png"
            alt="JJP logo"
            className="h-9 w-9 rounded-full ring-1 ring-border/60"
          />
          <span className="hidden sm:inline font-display text-lg font-semibold tracking-wide text-foreground">
            Juwita Jessica Pangestu
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 font-body text-[15px] text-foreground">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => onNavClick(e, l.id)}
                className="font-medium hover:text-lavender transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-border/60 text-foreground hover:bg-foreground/[0.04] transition-colors"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`md:hidden transition-[max-height] duration-300 overflow-hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="px-4 sm:px-6 pb-4 space-y-2 font-body text-foreground">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => onNavClick(e, l.id)}
                className="block w-full rounded-md px-3 py-2 font-medium hover:bg-foreground/[0.04] hover:text-lavender transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
