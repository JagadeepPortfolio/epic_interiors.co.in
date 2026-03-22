import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/find-us', label: 'Find Us' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-9 px-[52px] max-md:px-6 flex items-center justify-between flex-wrap gap-5 max-md:flex-col max-md:text-center">
      <Link href="/">
        <Image
          src="/logo-light.png"
          alt="Epic Interiors"
          width={140}
          height={88}
          className="h-[36px] w-auto opacity-30 hover:opacity-60 transition-opacity duration-300"
        />
      </Link>
      <div className="flex gap-7">
        {footerLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[10px] tracking-[.22em] uppercase text-cream/[.22] hover:text-gold transition-colors duration-[var(--t-fast)]"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <p className="text-[11px] text-cream/[.18]">
        &copy; {new Date().getFullYear()} Epic Interiors. Designed by PageStitches.
      </p>
    </footer>
  );
}
