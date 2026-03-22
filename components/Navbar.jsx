'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[600] h-[72px] flex items-center transition-all duration-400 ${
        scrolled
          ? 'bg-ink backdrop-blur-[20px] shadow-[0_1px_0_rgba(244,239,230,.05)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-wide w-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="z-50 flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo-light.png"
            alt="Epic Interiors"
            width={140}
            height={88}
            className="h-[44px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-[.22em] uppercase text-mid hover:text-gold transition-colors duration-[var(--t-fast)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-consultation"
            className="px-[22px] py-[9px] border border-gold/50 text-gold text-[10px] tracking-[.22em] uppercase rounded-btn hover:bg-gold hover:text-ink hover:border-gold transition-all duration-[var(--t-fast)]"
          >
            Get a Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden z-50 flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-[22px] h-px bg-cream transition-all duration-300 ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
          <span className={`block w-[22px] h-px bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-px bg-cream transition-all duration-300 ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 top-[72px] bg-ink/[.97] backdrop-blur-[20px] z-[590] flex flex-col items-center justify-center gap-9 transition-opacity duration-350 md:hidden ${
            menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-[42px] font-light text-cream-dim hover:text-gold transition-colors duration-[var(--t-fast)]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-consultation"
            className="btn-wa mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Free Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}
