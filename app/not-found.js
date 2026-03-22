import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-ink relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(30,42,71,.2) 0%, #0b0b0b 65%)' }} />
      <div className="container-wide relative z-10 text-center py-32">
        <div className="sec-label justify-center">Page Not Found</div>
        <div className="font-display text-[clamp(100px,20vw,200px)] leading-none tracking-[.02em] mt-4">
          4<span className="text-gold">0</span>4
        </div>
        <p className="text-mid text-lg mt-4 mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          <Link href="/" className="btn-gold">Back to Home</Link>
          <Link href="/contact" className="btn-ghost">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
