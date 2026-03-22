import Link from 'next/link';
import Image from 'next/image';
import StatsCounter from '@/components/StatsCounter';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
         ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 80% at 70% 40%, #1a2848 0%, #0b0b0b 65%)' }} />
        <div
          className="absolute inset-0 animate-[gridDrift_24s_linear_infinite]"
          style={{
            backgroundImage: 'linear-gradient(rgba(184,149,58,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(184,149,58,.05) 1px,transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)',
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-[-120px] right-[8%] w-[560px] h-[560px] rounded-full pointer-events-none blur-[70px] animate-[float1_9s_ease-in-out_infinite]" style={{ background: 'radial-gradient(circle,rgba(184,149,58,.14) 0%,transparent 70%)' }} />
        <div className="absolute bottom-[5%] left-0 w-[320px] h-[320px] rounded-full pointer-events-none blur-[70px] animate-[float2_11s_ease-in-out_infinite]" style={{ background: 'radial-gradient(circle,rgba(30,42,71,.7) 0%,transparent 70%)' }} />

        {/* Diamond images — desktop only */}
        <div className="hidden lg:block absolute right-0 top-0 w-[52%] h-full pointer-events-none opacity-0 animate-[fadeIn_1s_ease_forwards_0.5s]">
          <div className="absolute top-[9%] right-[24%] w-[230px] h-[230px] rounded-[18px] rotate-45 overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,.6),0_0_0_1px_rgba(184,149,58,.12)] hover:shadow-[0_32px_80px_rgba(0,0,0,.7),0_0_0_1px_rgba(184,149,58,.35)] transition-shadow duration-500">
            <Image src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80" alt="Living room interior" fill sizes="230px" className="object-cover -rotate-45 scale-[1.55] hover:scale-[1.7] transition-transform duration-700" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
          </div>
          <div className="absolute top-[38%] right-[7%] w-[195px] h-[195px] rounded-[18px] rotate-45 overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,.6),0_0_0_1px_rgba(184,149,58,.12)]">
            <Image src="https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=600&q=80" alt="Modern kitchen" fill sizes="195px" className="object-cover -rotate-45 scale-[1.55]" />
          </div>
          <div className="absolute top-[62%] right-[30%] w-[215px] h-[215px] rounded-[18px] rotate-45 overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,.6),0_0_0_1px_rgba(184,149,58,.12)]">
            <Image src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80" alt="Elegant bedroom" fill sizes="215px" className="object-cover -rotate-45 scale-[1.55]" />
          </div>
        </div>

        {/* Hero text */}
        <div className="relative z-[2] w-full px-[52px] max-md:px-6 pb-[88px] max-md:pb-16 pt-32">
          <div className="sec-label opacity-0 translate-y-4 animate-[fadeUp_.7s_ease_forwards_.3s]">
            Premier Interior Studio
          </div>
          <h1 className="mt-5">
            <span className="block overflow-hidden"><span className="block opacity-0 translate-y-full animate-[slideUp_.9s_var(--ease-out)_forwards_.4s]">Elevate</span></span>
            <span className="block overflow-hidden"><span className="block opacity-0 translate-y-full animate-[slideUp_.9s_var(--ease-out)_forwards_.53s] text-gold italic">Your Space</span></span>
            <span className="block overflow-hidden"><span className="block opacity-0 translate-y-full animate-[slideUp_.9s_var(--ease-out)_forwards_.66s]">Timeless</span></span>
          </h1>
          <p className="max-w-[360px] mt-7 text-[14.5px] leading-[1.85] text-mid opacity-0 translate-y-3.5 animate-[fadeUp_.7s_ease_forwards_.9s]">
            Sleek, stylish, and functional modern interiors — designed to transform the way you live, feel, and call home.
          </p>
          <div className="mt-11 flex gap-5 flex-wrap opacity-0 translate-y-3.5 animate-[fadeUp_.7s_ease_forwards_1.1s]">
            <Link href="/portfolio" className="btn-gold">Explore Our Work</Link>
            <Link href="/contact" className="btn-ghost">Start a Project &rarr;</Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute right-[52px] max-md:hidden bottom-[84px] z-[3] flex flex-col items-center gap-2.5 opacity-0 animate-[fadeUp_.7s_ease_forwards_1.4s]">
          <div className="w-px h-[52px] bg-cream/10 relative overflow-hidden">
            <div className="absolute top-[-100%] left-0 w-px h-full bg-gold animate-[scrlDrop_2s_ease-in-out_infinite_1.5s]" />
          </div>
          <p className="text-[9px] tracking-[.35em] uppercase text-mid" style={{ writingMode: 'vertical-rl' }}>Scroll</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE
         ═══════════════════════════════════════ */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[0, 1].map((i) => (
            <div key={i} className="m-item">
              Modular Kitchen<span className="m-dot">&#10022;</span>
              Pooja Unit<span className="m-dot">&#10022;</span>
              TV Units<span className="m-dot">&#10022;</span>
              Wardrobe<span className="m-dot">&#10022;</span>
              Crockery Unit<span className="m-dot">&#10022;</span>
              False Ceiling<span className="m-dot">&#10022;</span>
              Partition Works<span className="m-dot">&#10022;</span>
              All Wood Works<span className="m-dot">&#10022;</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          SERVICES — 8 numbered cards
         ═══════════════════════════════════════ */}
      <section className="sec bg-ink">
        <div className="container-wide">
          <div className="sec-label rv">What We Do</div>
          <h2 className="sec-heading rv max-w-[560px] mt-1">
            Crafted for <span className="gold-italic">Every</span><br />Corner of Your Home
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mt-[72px] border border-border stg">
            {services.map((svc, i) => (
              <div key={i} className="group relative p-[44px_30px_36px] bg-ink-2 overflow-hidden hover:bg-gold/5 transition-colors duration-350">
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold to-gold-light scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                <div className="font-display text-[44px] font-light leading-none text-gold/[.18] mb-5 group-hover:text-gold/[.45] transition-colors duration-350">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="font-display text-[21px] mb-3.5 group-hover:text-gold-light transition-colors duration-350">
                  {svc.title}
                </div>
                <p className="text-[13px] leading-[1.85] text-mid">{svc.desc}</p>
                <span className="absolute bottom-7 right-7 text-[18px] text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  &rarr;
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS
         ═══════════════════════════════════════ */}
      <div className="grid grid-cols-3 border-y border-border">
        {stats.map((stat, i) => (
          <div key={i} className="rv group relative p-[64px_48px] max-md:p-[36px_24px] border-r border-border last:border-r-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(184,149,58,.09)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <StatsCounter end={stat.value} suffix={stat.suffix} />
            <div className="mt-1.5 text-[11px] tracking-[.25em] uppercase text-mid">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* ═══════════════════════════════════════
          PORTFOLIO — asymmetric grid
         ═══════════════════════════════════════ */}
      <section className="sec bg-ink">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-[52px] flex-wrap gap-6">
            <div>
              <div className="sec-label rv">Portfolio</div>
              <h2 className="sec-heading rv">Spaces That<br /><span className="gold-italic">Inspire</span></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr_1fr] md:grid-rows-[400px_270px] gap-[10px] stg max-md:gap-4">
            {portfolioItems.map((item, i) => (
              <div key={i} className={`group relative overflow-hidden bg-[#1a1a1a] ${i === 0 ? 'md:row-span-2' : ''} max-md:h-[280px]`}>
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover brightness-[.8] group-hover:scale-[1.07] group-hover:brightness-100 transition-all duration-800"
                  style={{ transitionTimingFunction: 'var(--ease-out)' }}
                  priority={i < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/[.68] to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <span className="text-[10px] tracking-[.22em] uppercase text-gold border border-gold px-3 py-1.5">{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 rv">
            <Link href="/portfolio" className="btn-gold">View Full Portfolio</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS
         ═══════════════════════════════════════ */}
      <section className="sec bg-ink-2 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(30,42,71,.5) 0%, transparent 55%)' }} />
        <div className="container-wide relative z-[1]">
          <div className="sec-label rv">How We Work</div>
          <h2 className="sec-heading rv max-w-[520px] mt-1">
            A Process Built on <span className="gold-italic">Precision</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 max-md:gap-9 mt-[72px] relative stg">
            {/* Connecting line — desktop only */}
            <div className="hidden lg:block absolute top-[26px] left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            {processSteps.map((step, i) => (
              <div key={i} className="group px-7 max-md:px-0">
                <div className="w-[52px] h-[52px] rounded-full border border-gold/25 flex items-center justify-center mb-7 relative bg-ink-2 group-hover:border-gold transition-colors duration-400">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold scale-0 group-hover:scale-100 transition-transform duration-400" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                </div>
                <div className="font-display text-[38px] font-light text-gold/[.22] leading-none mb-3.5">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="font-display text-[22px] mb-2.5">{step.title}</div>
                <p className="text-[13px] text-mid leading-[1.85]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT — navy section with ghost text + glass form
         ═══════════════════════════════════════ */}
      <section className="sec bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg,rgba(184,149,58,.12) 0%,transparent 55%)' }} />

        {/* Ghost text */}
        <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 font-display text-[clamp(120px,18vw,220px)] text-white/[.025] pointer-events-none whitespace-nowrap tracking-[.06em] max-md:hidden">
          EPIC
        </div>

        <div className="container-wide relative z-[1]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-lg:gap-12 items-start">
            {/* Info */}
            <div className="rv-l pt-2">
              <div className="sec-label">Get in Touch</div>
              <h2 className="sec-heading max-w-[420px]">
                Let&apos;s Build Something <span className="gold-italic">Extraordinary</span>
              </h2>
              <div className="flex flex-col gap-7 mt-10">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] tracking-[.4em] uppercase text-gold/60">Phone / WhatsApp</span>
                  <span className="text-[17px] font-light"><a href="tel:+919032506322" className="hover:text-gold transition-colors duration-[var(--t-fast)]">+91 90325 06323</a></span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] tracking-[.4em] uppercase text-gold/60">Studio Hours</span>
                  <span className="text-[17px] font-light">Mon – Sat &middot; 10:00 AM – 7:00 PM</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] tracking-[.4em] uppercase text-gold/60">Location</span>
                  <span className="text-[17px] font-light">Hyderabad, Telangana</span>
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

      {/* ═══════════════════════════════════════
          MAP — dark-filtered
         ═══════════════════════════════════════ */}
      <section className="sec-sm bg-ink">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-0 border border-border overflow-hidden rv">
            <div className="p-[52px_44px] max-md:p-8 bg-ink-2 flex flex-col justify-center gap-7">
              <h3 className="font-display text-[32px] font-light">
                Visit Our <span className="gold-italic">Studio</span>
              </h3>
              <div className="flex flex-col gap-1.5">
                <strong className="text-[9px] tracking-[.35em] uppercase text-gold font-normal">Address</strong>
                <span className="text-sm text-cream-dim leading-relaxed">Hyderabad, Telangana, India</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <strong className="text-[9px] tracking-[.35em] uppercase text-gold font-normal">Hours</strong>
                <span className="text-sm text-cream-dim leading-relaxed">Mon – Fri: 10 AM – 7 PM<br />Saturday: 10 AM – 5 PM</span>
              </div>
              <Link href="/find-us" className="btn-ghost w-fit mt-2">Get Directions</Link>
            </div>
            <div className="h-[420px] max-md:h-[300px] relative">
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

      {/* Bottom padding for mobile WhatsApp bar */}
      <div className="h-14 md:hidden" />
    </>
  );
}

/* ═══════════════════════════════════════
   DATA
   ═══════════════════════════════════════ */

const services = [
  { title: 'Modular Kitchen', desc: 'Bespoke kitchen designs that blend ergonomics with elegance — maximising every inch of your culinary space.' },
  { title: 'Pooja Unit', desc: 'Sacred spaces crafted with reverence, warmth, and careful attention to spiritual aesthetics and tradition.' },
  { title: 'TV Units', desc: 'Statement media walls that anchor your living space — functional design meets visual drama.' },
  { title: 'Wardrobe', desc: 'Smart, spacious wardrobes tailored to your lifestyle — from walk-in suites to sleek sliding panels.' },
  { title: 'Crockery Unit', desc: 'Display your finest with pride — crafted showcase units that are both elegant storage and living art.' },
  { title: 'False Ceiling', desc: 'Architectural ceiling designs that add drama, depth, and a signature character to every room.' },
  { title: 'Partition Works', desc: 'Fluid spatial dividers that define zones while preserving the open, airy flow of modern living.' },
  { title: 'All Wood Works', desc: 'Master craftsmanship in wood — panelling, furniture, joinery. Every grain tells your story.' },
];

const stats = [
  { value: 100, suffix: '+', label: 'Projects Completed' },
  { value: 3, suffix: '+', label: 'Years of Excellence' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

const portfolioItems = [
  { img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80', label: 'Modular Kitchen' },
  { img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80', label: 'Living Room' },
  { img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=700&q=80', label: 'Bedroom' },
  { img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=80', label: 'Wardrobe' },
  { img: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=700&q=80', label: 'TV Unit' },
];

const processSteps = [
  { title: 'Discovery', desc: 'We start by understanding your lifestyle, vision, and spatial requirements through an in-depth consultation — no assumptions, just listening.' },
  { title: 'Design', desc: 'Detailed 3D renders and curated material boards bring your design to life on screen before a single panel is cut.' },
  { title: 'Crafting', desc: 'Expert artisans build using premium materials, with rigorous quality checks at every milestone — on time, every time.' },
  { title: 'Handover', desc: 'We deliver a fully snag-free, polished space — and stay available for aftercare because our relationship doesn\'t end at delivery.' },
];
