'use client';
import { useRef, useEffect } from 'react';

export default function TextSplit({ children, className = '', tag = 'h2' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let cleanup = () => {};

    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const SplitType = (await import('split-type')).default;
      gsap.registerPlugin(ScrollTrigger);

      const split = new SplitType(el, { types: 'chars,words' });

      gsap.fromTo(
        split.chars,
        { opacity: 0, y: 30, filter: 'blur(3px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.6,
          stagger: 0.025,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        }
      );

      cleanup = () => {
        split.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    };

    init();
    return () => cleanup();
  }, []);

  const Tag = tag;
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
