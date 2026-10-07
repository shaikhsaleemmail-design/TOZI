'use client';
import { useEffect, useRef } from 'react';

// Dot follows the mouse exactly; the ring trails behind and grows over clickable things.
// Only on devices with a real mouse. Touch screens never see it.
export default function CursorTracker() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0, shown = false;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!shown) {
        shown = true;
        rx = x; ry = y;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      const t = e.target as Element | null;
      const hot = !!t?.closest('a, button, [role="button"], input, textarea, select, label, [onclick], .mkt-card, .fit-card, .svc-card, .fitness-card, .ih-card, .path-btn');
      ring.classList.toggle('ct-hot', hot);
    };
    const onLeave = () => { dot.style.opacity = '0'; ring.style.opacity = '0'; shown = false; };
    const onDown = () => ring.classList.add('ct-down');
    const onUp = () => ring.classList.remove('ct-down');

    const tick = () => {
      rx += (x - rx) * (smooth ? 0.16 : 1);
      ry += (y - ry) * (smooth ? 0.16 : 1);
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      <style>{`
        .ct-dot, .ct-ring { position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9999; opacity: 0; border-radius: 50%; transition: opacity 0.25s ease; }
        .ct-dot { width: 8px; height: 8px; background: #111; }
        .ct-ring { width: 36px; height: 36px; border: 1.5px solid rgba(17,17,17,0.45); transition: opacity 0.25s ease, width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background 0.25s ease; }
        .ct-ring.ct-hot { width: 60px; height: 60px; border-color: #2DD4BF; background: rgba(45,212,191,0.12); }
        .ct-ring.ct-down { width: 26px; height: 26px; }
        @media (hover: none), (pointer: coarse) { .ct-dot, .ct-ring { display: none; } }
      `}</style>
      <div ref={ringRef} className="ct-ring" aria-hidden="true" />
      <div ref={dotRef} className="ct-dot" aria-hidden="true" />
    </>
  );
}
