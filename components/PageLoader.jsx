'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PageLoader() {
  const [phase, setPhase] = useState('loading'); // loading → reveal → done

  useEffect(() => {
    // Gold bar fills over 1.6s, then reveal starts
    const revealTimer = setTimeout(() => setPhase('reveal'), 1800);
    // Remove loader from DOM after exit animation completes
    const doneTimer = setTimeout(() => setPhase('done'), 2600);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-ink flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(.23,1,.32,1)] ${
        phase === 'reveal' ? 'opacity-0 scale-[1.02]' : 'opacity-100 scale-100'
      }`}
    >
      {/* Logo */}
      <div className="overflow-hidden">
        <Image
          src="/logo-light.png"
          alt="Epic Interiors"
          width={280}
          height={176}
          className="h-[80px] max-md:h-[60px] w-auto animate-[loaderSlideUp_0.8s_cubic-bezier(.23,1,.32,1)_0.2s_both]"
          priority
        />
      </div>

      {/* Gold progress bar */}
      <div className="w-[180px] max-md:w-[140px] h-[1.5px] bg-white/[0.06] mt-7 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full animate-[loaderBar_1.5s_cubic-bezier(.4,0,.2,1)_0.4s_both]" />
      </div>

      {/* Tagline */}
      <p className="text-[10px] tracking-[.4em] uppercase text-mid mt-5 animate-[loaderFade_0.6s_ease_0.6s_both]">
        Timeless Elegance
      </p>
    </div>
  );
}
