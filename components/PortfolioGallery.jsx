'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const categories = ['All', 'Kitchen', 'Living', 'Bedroom', 'Wardrobe'];

const projects = [
  { title: 'Contemporary Modular Kitchen', category: 'Kitchen', location: 'Jubilee Hills', img: '/uploads/moduler-kitchen-1774802430130.jpg' },
  { title: 'Luxury Living Space', category: 'Living', location: 'Banjara Hills', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80' },
  { title: 'Master Bedroom Suite', category: 'Bedroom', location: 'Gachibowli', img: '/uploads/bedroom1-1774802971070.jpg' },
  { title: 'Walk-in Wardrobe Design', category: 'Wardrobe', location: 'Madhapur', img: '/uploads/wardrobe-1774802430130.jpg' },
  { title: 'Open-Plan Kitchen Makeover', category: 'Kitchen', location: 'Kondapur', img: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80' },
  { title: 'Minimalist Living Room', category: 'Living', location: 'HITEC City', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80' },
  { title: 'Cozy Bedroom Retreat', category: 'Bedroom', location: 'Kukatpally', img: '/uploads/bedroom2-1774802971070.jpg' },
  { title: 'Premium Sliding Wardrobe', category: 'Wardrobe', location: 'Manikonda', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80' },
  { title: 'Island Kitchen Design', category: 'Kitchen', location: 'Begumpet', img: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80' },
];

function GrayscaleImage({ src, alt, priority = false }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.filter = 'grayscale(0%)';
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      className="object-cover group-hover:scale-[1.05] transition-all duration-[1.2s]"
      style={{
        filter: 'grayscale(100%)',
        transitionTimingFunction: 'var(--ease-out)',
        transitionProperty: 'filter, transform',
      }}
      priority={priority}
    />
  );
}

export default function PortfolioGallery() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Tabs */}
      <div className="flex flex-wrap gap-0 border border-border mb-12 w-fit rv">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-[22px] py-[9px] text-[10px] tracking-[.22em] uppercase transition-all duration-[var(--t-fast)] ${
              active === cat
                ? 'bg-gold text-ink'
                : 'text-mid hover:bg-gold hover:text-ink'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Asymmetric grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr_1fr] md:grid-rows-[400px_270px] gap-[10px] max-md:gap-4">
        {filtered.map((project, i) => (
          <div
            key={`${project.title}-${active}`}
            className={`group relative overflow-hidden bg-[#1a1a1a] ${i === 0 ? 'md:row-span-2' : ''} max-md:h-[280px]`}
          >
            <GrayscaleImage
              src={project.img}
              alt={project.title}
              priority={i < 3}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/[.68] to-transparent flex flex-col items-start justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
              <span className="text-[10px] tracking-[.22em] uppercase text-gold border border-gold px-3 py-1.5 mb-2">{project.category}</span>
              <span className="font-display text-lg">{project.title}</span>
              <span className="text-[11px] text-mid mt-0.5">{project.location}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
