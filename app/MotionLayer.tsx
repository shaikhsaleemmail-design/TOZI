'use client';
import { useEffect } from 'react';

// Elements that fade/slide in when they scroll into view. Keep in sync with the list in globals.css.
const SELECTOR = [
  'h1', '.fitness-card', '.mkt-card', '.fit-card', '.svc-card', '.ih-card', '.social-link', '[data-reveal]',
].join(',');

export default function MotionLayer() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const seen = new WeakSet<Element>();
    document.documentElement.classList.add('mr'); // motion ready: turns off the 3s failsafe

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) =>
          a.target.compareDocumentPosition(b.target) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
        );
        visible.forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          el.style.setProperty('--rv-d', `${Math.min(i * 80, 400)}ms`);
          el.classList.add('rv-in');
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    const scan = () => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (seen.has(el) || el.closest('[class*="fade-up"]')) return; // home page has its own intro
        seen.add(el);
        io.observe(el);
      });
    };

    scan();
    let raf = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(scan);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      io.disconnect();
    };
  }, []);

  return null;
}
