import Link from 'next/link';

export const metadata = {
  title: 'Book Free Consultation',
  description:
    'Book a free interior design consultation with Epic Interiors in Hyderabad. No commitments — just great design ideas for your space.',
};

const WA_URL = 'https://wa.me/919032506322?text=Hi%20Epic%20Interiors!%20I%27d%20like%20to%20book%20a%20free%20consultation%20for%20my%20space.%20Could%20you%20help%20me%20get%20started%3F';

export default function BookConsultationPage() {
  return (
    <>
      <section className="min-h-screen flex items-center relative bg-ink overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 40%, #1a2848 0%, #0b0b0b 65%)' }} />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none blur-[100px]" style={{ background: 'radial-gradient(circle,rgba(184,149,58,.12) 0%,transparent 70%)' }} />

        <div className="container-wide relative z-10 py-32 md:py-40">
          <div className="max-w-2xl mx-auto text-center">
            <div className="sec-label rv justify-center">Free Consultation</div>
            <h1 className="sec-heading rv mt-4 mb-6" style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}>
              Book Your Free<br /><span className="gold-italic">Consultation</span>
            </h1>
            <p className="text-[14.5px] leading-[1.85] text-mid mb-10 rv">
              Take the first step towards your dream space. Our design experts
              will visit your location, understand your vision, and share ideas —
              completely free, no commitments.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px border border-border mb-12 stg">
              {benefits.map((b, i) => (
                <div key={i} className="p-8 bg-ink-2">
                  <div className="font-display text-[38px] font-light text-gold/[.22] leading-none mb-3">{String(i + 1).padStart(2, '0')}</div>
                  <div className="font-display text-lg mb-1">{b.title}</div>
                  <p className="text-[12px] text-mid">{b.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rv space-y-4">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa inline-flex text-base px-10 py-4"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book on WhatsApp
              </a>
              <p className="text-[13px] text-mid">
                Or call us directly:{' '}
                <a href="tel:+919032506322" className="text-gold hover:underline">+91 90325 06323</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-14 md:hidden" />
    </>
  );
}

const benefits = [
  { title: 'Free Site Visit', desc: 'We come to your location to understand the space.' },
  { title: 'Design Ideas', desc: 'Get initial concepts, layouts, and material suggestions.' },
  { title: 'Cost Estimate', desc: 'Transparent pricing with no hidden charges.' },
];
