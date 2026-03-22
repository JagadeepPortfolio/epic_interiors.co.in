import Link from 'next/link';

export const metadata = {
  title: 'Find Us — Visit Our Studio in Hyderabad',
  description:
    'Visit Epic Interiors studio in Hyderabad. Get directions, business hours, and contact details.',
};

export default function FindUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-ink relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(30,42,71,.3) 0%, #0b0b0b 65%)' }} />
        <div className="container-wide relative z-10">
          <div className="sec-label rv">Visit Our Studio</div>
          <h1 className="sec-heading rv mt-2" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            Find <span className="gold-italic">Us</span>
          </h1>
          <p className="mt-6 max-w-lg rv">
            Walk in to experience our design studio and discuss your project in person.
          </p>
        </div>
      </section>

      {/* Map + Info */}
      <section className="sec bg-ink-2">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-0 border border-border overflow-hidden rv">
            {/* Info panel */}
            <div className="p-[52px_44px] max-md:p-8 bg-ink flex flex-col justify-center gap-7">
              <h3 className="font-display text-[32px] font-light">
                Studio <span className="gold-italic">Details</span>
              </h3>
              <div className="flex flex-col gap-1.5">
                <strong className="text-[9px] tracking-[.35em] uppercase text-gold font-normal">Address</strong>
                <span className="text-sm text-cream-dim leading-relaxed">Hyderabad, Telangana, India</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <strong className="text-[9px] tracking-[.35em] uppercase text-gold font-normal">Hours</strong>
                <span className="text-sm text-cream-dim leading-relaxed">
                  Mon – Fri: 10:00 AM – 7:00 PM<br />
                  Saturday: 10:00 AM – 5:00 PM<br />
                  Sunday: By appointment
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <strong className="text-[9px] tracking-[.35em] uppercase text-gold font-normal">Phone</strong>
                <a href="tel:+919032506322" className="text-sm text-cream-dim hover:text-gold transition-colors">+91 90325 06323</a>
              </div>
              <div className="flex flex-wrap gap-4 mt-2">
                <a
                  href="https://wa.me/919032506322?text=Hi%20Epic%20Interiors%2C%20I%27d%20like%20to%20visit%20your%20studio.%20What%20are%20the%20timings%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-[10px]"
                >
                  WhatsApp for Directions
                </a>
                <Link href="/book-consultation" className="btn-ghost text-[10px]">Book Consultation</Link>
              </div>
            </div>

            {/* Dark-filtered map */}
            <div className="h-[420px] max-md:h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31687767!2d78.2674!3d17.4065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(30%) invert(90%) hue-rotate(180deg) brightness(.85)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Epic Interiors Studio — Hyderabad"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="h-14 md:hidden" />
    </>
  );
}
