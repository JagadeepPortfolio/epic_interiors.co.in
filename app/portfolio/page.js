import Link from 'next/link';
import PortfolioGallery from '@/components/PortfolioGallery';

export const metadata = {
  title: 'Portfolio — Our Interior Design Projects',
  description:
    'Browse our portfolio of completed interior design projects in Hyderabad — kitchens, living rooms, bedrooms, wardrobes, and commercial spaces.',
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-ink relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(30,42,71,.3) 0%, #0b0b0b 65%)' }} />
        <div className="container-wide relative z-10">
          <div className="sec-label rv">Portfolio</div>
          <h1 className="sec-heading rv mt-2" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            Spaces That<br /><span className="gold-italic">Inspire</span>
          </h1>
          <p className="mt-6 max-w-lg rv">
            Every project tells a story. Browse our recent work and see
            how we bring visions to life.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="sec bg-ink-2">
        <div className="container-wide">
          <PortfolioGallery />
        </div>
      </section>

      {/* CTA */}
      <section className="sec-sm bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg,rgba(184,149,58,.1) 0%,transparent 55%)' }} />
        <div className="container-wide relative z-[1] text-center rv">
          <h2 className="sec-heading mb-6">
            Want Something <span className="gold-italic">Like This?</span>
          </h2>
          <p className="max-w-md mx-auto mb-10">
            Let&apos;s create a space that&apos;s uniquely yours. Book a free
            consultation and share your vision with us.
          </p>
          <Link href="/book-consultation" className="btn-gold">Book Free Consultation</Link>
        </div>
      </section>

      <div className="h-14 md:hidden" />
    </>
  );
}
