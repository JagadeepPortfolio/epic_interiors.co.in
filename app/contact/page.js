import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact — Get in Touch',
  description:
    'Contact Epic Interiors for interior design services in Hyderabad. Call, WhatsApp, or fill out our form for a free consultation.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-ink relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(30,42,71,.3) 0%, #0b0b0b 65%)' }} />
        <div className="container-wide relative z-10">
          <div className="sec-label rv">Get in Touch</div>
          <h1 className="sec-heading rv mt-2" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            Let&apos;s Build Something<br /><span className="gold-italic">Extraordinary</span>
          </h1>
        </div>
      </section>

      {/* Contact — navy section with glass form */}
      <section className="sec bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg,rgba(184,149,58,.12) 0%,transparent 55%)' }} />
        <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 font-display text-[clamp(120px,18vw,220px)] text-white/[.025] pointer-events-none whitespace-nowrap tracking-[.06em] max-md:hidden">
          CONTACT
        </div>

        <div className="container-wide relative z-[1]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-lg:gap-12 items-start">
            {/* Info */}
            <div className="rv-l pt-2">
              <div className="sec-label">Contact Information</div>
              <h2 className="sec-heading max-w-[420px] mt-2 mb-10">
                We&apos;d Love to <span className="gold-italic">Hear From You</span>
              </h2>
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] tracking-[.4em] uppercase text-gold/60">Phone / WhatsApp</span>
                  <span className="text-[17px] font-light"><a href="tel:+919032506322" className="hover:text-gold transition-colors">+91 90325 06322</a></span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] tracking-[.4em] uppercase text-gold/60">Studio Hours</span>
                  <span className="text-[17px] font-light">Mon – Fri &middot; 9:00 AM – 7:00 PM</span>
                  <span className="text-[15px] font-light text-mid">Saturday &middot; 9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] tracking-[.4em] uppercase text-gold/60">Location</span>
                  <span className="text-[17px] font-light">Kukatpally, Hyderabad, Telangana</span>
                </div>
              </div>
              <a
                href="https://wa.me/919032506322?text=Hi%20Epic%20Interiors%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20home%20interior."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa mt-9 w-fit"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Glass form */}
            <div className="rv-r">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <div className="h-14 md:hidden" />
    </>
  );
}
