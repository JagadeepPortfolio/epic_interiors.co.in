import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About — Our Story & Design Philosophy',
  description:
    'Learn about Epic Interiors — a premium interior design studio in Hyderabad. Discover our story, design philosophy, and why homeowners trust us.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-ink relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(30,42,71,.3) 0%, #0b0b0b 65%)' }} />
        <div className="container-wide relative z-10">
          <div className="sec-label rv">About Us</div>
          <h1 className="sec-heading rv mt-2" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            Designing Spaces,<br /><span className="gold-italic">Building Dreams</span>
          </h1>
          <p className="mt-6 max-w-lg rv">
            We are a team of passionate designers who believe that great design
            transforms not just spaces, but lives.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="sec bg-ink-2">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rv-l aspect-[4/3] rounded-[18px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,.6)] relative">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                alt="Interior design studio workspace"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover brightness-[.85]"
              />
            </div>
            <div className="rv-r">
              <div className="sec-label">Our Story</div>
              <h2 className="sec-heading mt-2 mb-8">
                A Passion for <span className="gold-italic">Design Excellence</span>
              </h2>
              <div className="space-y-5 text-[14.5px] leading-[1.85] text-mid">
                <p>
                  Epic Interiors was born from a simple belief — that everyone
                  deserves a beautiful, functional living space. Founded in
                  Hyderabad, we set out to make premium interior design
                  accessible to homeowners and businesses alike.
                </p>
                <p>
                  Our approach blends contemporary design trends with timeless
                  elegance. We don&apos;t just decorate rooms — we understand how
                  you live, work, and relax, and we design spaces that elevate
                  every moment.
                </p>
                <p>
                  From modular kitchens to complete home interiors, every space
                  we touch reflects our commitment to quality materials, thoughtful
                  layouts, and designs that stand the test of time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="sec bg-ink">
        <div className="container-wide">
          <div className="sec-label rv">Our Philosophy</div>
          <h2 className="sec-heading rv mt-2 mb-16 max-w-[480px]">
            Why Homeowners <span className="gold-italic">Choose Us</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-border stg">
            {values.map((val, i) => (
              <div key={i} className="group relative p-12 bg-ink-2 overflow-hidden hover:bg-gold/5 transition-colors duration-350">
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold to-gold-light scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                <div className="font-display text-[44px] font-light text-gold/[.18] leading-none mb-5">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="font-display text-[22px] mb-3 group-hover:text-gold-light transition-colors duration-350">
                  {val.title}
                </div>
                <p className="text-[13px] leading-[1.85] text-mid">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec-sm bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg,rgba(184,149,58,.1) 0%,transparent 55%)' }} />
        <div className="container-wide relative z-[1] text-center rv">
          <h2 className="sec-heading mb-6">
            Ready to Start <span className="gold-italic">Your Project?</span>
          </h2>
          <p className="max-w-md mx-auto mb-10">
            Book a free consultation — no commitments, just great design ideas.
          </p>
          <Link href="/book-consultation" className="btn-gold">Book Free Consultation</Link>
        </div>
      </section>

      <div className="h-14 md:hidden" />
    </>
  );
}

const values = [
  { title: 'Design Excellence', desc: 'Every project receives our full creative attention. We craft spaces that are both beautiful and functional — no compromises.' },
  { title: 'Client-First Approach', desc: 'Your vision drives our design. We listen, collaborate, and deliver spaces that reflect your personality and lifestyle.' },
  { title: 'On-Time Delivery', desc: 'We respect your time and budget. Clear timelines, transparent pricing, rigorous quality checks — no surprises, ever.' },
];
