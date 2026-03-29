import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/find-us', label: 'Find Us' },
];

const socialLinks = [
  {
    href: 'https://www.instagram.com/epicinteriors_?igsh=MXd6cnMwbXM2d2J1Mg==',
    label: 'Instagram',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: 'https://www.facebook.com/share/18XqxUbmh8/',
    label: 'Facebook',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: 'mailto:Info@epicinteriors.co.in',
    label: 'Email',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4l-10 8L2 4" />
      </svg>
    ),
  },
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
      <div className="flex gap-7 max-md:flex-wrap max-md:justify-center">
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
      <div className="flex items-center gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            aria-label={social.label}
            className="text-cream/[.22] hover:text-gold transition-colors duration-[var(--t-fast)]"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <p className="text-[11px] text-cream/[.18] max-md:w-full">
        &copy; {new Date().getFullYear()} Epic Interiors. Designed by PageStitches.
      </p>
    </footer>
  );
}
