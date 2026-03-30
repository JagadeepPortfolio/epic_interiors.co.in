'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const sectionRef = useRef(null);
  const imagesRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const images = imagesRef.current;
    const text = textRef.current;
    if (!section) return;

    let cleanup = () => {};

    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const SplitType = (await import('split-type')).default;
      gsap.registerPlugin(ScrollTrigger);

      // Hero text reveal — split "Elevate Your Space Timeless" into chars
      const heroWords = section.querySelectorAll('.hero-word');
      heroWords.forEach((word, i) => {
        const split = new SplitType(word, { types: 'chars' });
        gsap.fromTo(
          split.chars,
          { opacity: 0, y: 60, rotateX: -40 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.03,
            delay: 0.5 + i * 0.2,
            ease: 'power3.out',
          }
        );
      });

      // Parallax on scroll — images float up, text stays
      if (images && window.innerWidth >= 768) {
        gsap.to(images, {
          yPercent: -25,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          },
        });
      }

      if (text) {
        gsap.to(text, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.3,
          },
        });
      }

      // Diamond images scale-in on load
      if (images) {
        const diamonds = images.querySelectorAll('.diamond-img');
        gsap.fromTo(
          diamonds,
          { scale: 0.8, opacity: 0, rotate: 45 },
          {
            scale: 1,
            opacity: 1,
            rotate: 45,
            duration: 1.2,
            stagger: 0.15,
            delay: 0.6,
            ease: 'power3.out',
          }
        );
      }

      cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill());
    };

    init();
    return () => cleanup();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 80% at 70% 40%, #1a2848 0%, #0b0b0b 65%)' }} />
      <div
        className="absolute inset-0 animate-[gridDrift_24s_linear_infinite]"
        style={{
          backgroundImage: 'linear-gradient(rgba(184,149,58,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(184,149,58,.05) 1px,transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-[-120px] right-[8%] w-[560px] h-[560px] rounded-full pointer-events-none blur-[70px] animate-[float1_9s_ease-in-out_infinite]" style={{ background: 'radial-gradient(circle,rgba(184,149,58,.14) 0%,transparent 70%)' }} />
      <div className="absolute bottom-[5%] left-0 w-[320px] h-[320px] rounded-full pointer-events-none blur-[70px] animate-[float2_11s_ease-in-out_infinite]" style={{ background: 'radial-gradient(circle,rgba(30,42,71,.7) 0%,transparent 70%)' }} />

      {/* Diamond images — desktop only, with parallax */}
      <div ref={imagesRef} className="hidden lg:block absolute right-0 top-0 w-[52%] h-full pointer-events-none">
        <div className="diamond-img absolute top-[9%] right-[24%] w-[230px] h-[230px] rounded-[18px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,.6),0_0_0_1px_rgba(184,149,58,.12)] hover:shadow-[0_32px_80px_rgba(0,0,0,.7),0_0_0_1px_rgba(184,149,58,.35)] transition-shadow duration-500" style={{ opacity: 0 }}>
          <Image src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80" alt="Living room interior" fill sizes="230px" className="object-cover -rotate-45 scale-[1.55] hover:scale-[1.7] transition-transform duration-700" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
        </div>
        <div className="diamond-img absolute top-[38%] right-[7%] w-[195px] h-[195px] rounded-[18px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,.6),0_0_0_1px_rgba(184,149,58,.12)]" style={{ opacity: 0 }}>
          <Image src="/uploads/moduler-kitchen-1774802430130.jpg" alt="Modern kitchen" fill sizes="195px" className="object-cover -rotate-45 scale-[1.55]" />
        </div>
        <div className="diamond-img absolute top-[62%] right-[30%] w-[215px] h-[215px] rounded-[18px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,.6),0_0_0_1px_rgba(184,149,58,.12)]" style={{ opacity: 0 }}>
          <Image src="/uploads/bedroom1-1774802971070.jpg" alt="Elegant bedroom" fill sizes="215px" className="object-cover -rotate-45 scale-[1.55]" />
        </div>
      </div>

      {/* Hero text with parallax */}
      <div ref={textRef} className="relative z-[2] w-full px-[52px] max-md:px-6 pb-[88px] max-md:pb-16 pt-32">
        <div className="sec-label opacity-0 translate-y-4 animate-[fadeUp_.7s_ease_forwards_.3s]">
          Premier Interior Studio
        </div>
        <h1 className="mt-5" style={{ perspective: '600px' }}>
          <span className="hero-word block">Elevate</span>
          <span className="hero-word block text-gold italic">Your Space</span>
          <span className="hero-word block">Timeless</span>
        </h1>
        <p className="max-w-[360px] mt-7 text-[15px] leading-[1.85] text-mid opacity-0 translate-y-3.5 animate-[fadeUp_.7s_ease_forwards_.9s]">
          Sleek, stylish, and functional modern interiors — designed to transform the way you live, feel, and call home.
        </p>
        <div className="mt-11 flex gap-5 flex-wrap opacity-0 translate-y-3.5 animate-[fadeUp_.7s_ease_forwards_1.1s]">
          <Link href="/portfolio" className="btn-gold">Explore Our Work</Link>
          <Link href="/contact" className="btn-ghost">Start a Project &rarr;</Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute right-[52px] max-md:hidden bottom-[84px] z-[3] flex flex-col items-center gap-2.5 opacity-0 animate-[fadeUp_.7s_ease_forwards_1.4s]">
        <div className="w-px h-[52px] bg-cream/10 relative overflow-hidden">
          <div className="absolute top-[-100%] left-0 w-px h-full bg-gold animate-[scrlDrop_2s_ease-in-out_infinite_1.5s]" />
        </div>
        <p className="text-[9px] tracking-[.35em] uppercase text-mid" style={{ writingMode: 'vertical-rl' }}>Scroll</p>
      </div>
    </section>
  );
}
