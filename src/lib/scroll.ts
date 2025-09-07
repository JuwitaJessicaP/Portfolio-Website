export function smoothScrollToId(id: string, offset = 0, stripHash = true) {
    const el = document.getElementById(id);
    if (!el) return;
  
    // Compute target position with offset
    const rect = el.getBoundingClientRect();
    const absoluteY = window.pageYOffset + rect.top - offset;
  
    window.scrollTo({ top: absoluteY, behavior: 'smooth' });
  
    if (stripHash) {
      // Wait a tick so back/forward navigation stays sensible
      window.setTimeout(() => {
        const { pathname, search } = window.location;
        window.history.replaceState(null, '', pathname + search);
      }, 0);
    }
  }
  