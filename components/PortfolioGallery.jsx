'use client';

import { useState } from 'react';
import Image from 'next/image';

const categories = ['All', 'Kitchen', 'Living', 'Bedroom', 'Wardrobe'];

const projects = [
  { title: 'Contemporary Modular Kitchen', category: 'Kitchen', location: 'Jubilee Hills', img: '/uploads/moduler-kitchen-1774802430130.jpg' },
  { title: 'Luxury Living Space', category: 'Living', location: 'Banjara Hills', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80' },
  { title: 'Master Bedroom Suite', category: 'Bedroom', location: 'Gachibowli', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80' },
  { title: 'Walk-in Wardrobe Design', category: 'Wardrobe', location: 'Madhapur', img: '/uploads/wardrobe-1774802430130.jpg' },
  { title: 'Open-Plan Kitchen Makeover', category: 'Kitchen', location: 'Kondapur', img: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80' },
  { title: 'Minimalist Living Room', category: 'Living', location: 'HITEC City', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80' },
  { title: 'Cozy Bedroom Retreat', category: 'Bedroom', location: 'Kukatpally', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80' },
  { title: 'Premium Sliding Wardrobe', category: 'Wardrobe', location: 'Manikonda', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80' },
  { title: 'Island Kitchen Design', category: 'Kitchen', location: 'Begumpet', img: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80' },
];

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
            <Image
              src={project.img}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover brightness-[.8] group-hover:scale-[1.07] group-hover:brightness-100 transition-all duration-800"
              style={{ transitionTimingFunction: 'var(--ease-out)' }}
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
