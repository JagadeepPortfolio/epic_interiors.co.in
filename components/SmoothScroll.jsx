'use client';
import { useEffect } from 'react';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    let lenis;
    const init = async () => {
      const Lenis = (await import('lenis')).default;
      lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    };
    init();
    return () => lenis?.destroy();
  }, []);

  return children;
}
