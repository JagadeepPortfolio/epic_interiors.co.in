'use client';
import { useRef, useEffect } from 'react';

export default function ScrollZoomCTA({ src, children }) {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;
    if (!section || !img) return;

    let cleanup = () => {};

    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        img,
        { scale: 1 },
        {
          scale: 1.3,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        }
      );

      cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill());
    };

    init();
    return () => cleanup();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imgRef}
          src={src}
          alt=""
          className="w-full h-full object-cover will-change-transform"
          style={{ transformOrigin: 'center center' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(11,11,11,0.7) 0%, rgba(11,11,11,0.5) 50%, rgba(11,11,11,0.8) 100%)' }} />
      </div>
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}
