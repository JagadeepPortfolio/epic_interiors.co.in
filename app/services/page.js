import Link from 'next/link';

export const metadata = {
  title: 'Services — Interior Design Services in Hyderabad',
  description:
    'Explore our interior design services — modular kitchens, wardrobes, TV units, false ceilings, pooja units, and complete home interiors in Hyderabad.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-ink relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 40% 40%, rgba(30,42,71,.3) 0%, #0b0b0b 65%)' }} />
        <div className="container-wide relative z-10">
          <div className="sec-label rv">Our Services</div>
          <h1 className="sec-heading rv mt-2" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            Crafted for <span className="gold-italic">Every</span><br />Corner of Your Home
          </h1>
          <p className="mt-6 max-w-lg rv">
            From modular kitchens to complete home interiors — end-to-end design
            and execution, tailored to your space and lifestyle.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="sec bg-ink-2">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border border-border stg">
            {allServices.map((svc, i) => (
              <div key={i} className="group relative p-[44px_30px_36px] bg-ink overflow-hidden hover:bg-gold/5 transition-colors duration-350">
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold to-gold-light scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                <div className="font-display text-[44px] font-light leading-none text-gold/[.18] mb-5 group-hover:text-gold/[.45] transition-colors duration-350">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="font-display text-[21px] mb-3.5 group-hover:text-gold-light transition-colors duration-350">
                  {svc.title}
                </div>
                <p className="text-[13px] leading-[1.85] text-mid mb-5">{svc.desc}</p>
                <ul className="space-y-2">
                  {svc.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-[12px] text-cream/40">
                      <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="absolute bottom-7 right-7 text-[18px] text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  &rarr;
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="sec bg-ink relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(30,42,71,.5) 0%, transparent 55%)' }} />
        <div className="container-wide relative z-[1]">
          <div className="sec-label rv">How We Work</div>
          <h2 className="sec-heading rv max-w-[520px] mt-1 mb-[72px]">
            Simple, Transparent <span className="gold-italic">Process</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 max-md:gap-9 relative stg">
            <div className="hidden lg:block absolute top-[26px] left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            {processSteps.map((step, i) => (
              <div key={i} className="group px-7 max-md:px-0">
                <div className="w-[52px] h-[52px] rounded-full border border-gold/25 flex items-center justify-center mb-7 relative bg-ink group-hover:border-gold transition-colors duration-400">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold scale-0 group-hover:scale-100 transition-transform duration-400" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                </div>
                <div className="font-display text-[38px] font-light text-gold/[.22] leading-none mb-3.5">{String(i + 1).padStart(2, '0')}</div>
                <div className="font-display text-[22px] mb-2.5">{step.title}</div>
                <p className="text-[13px] text-mid leading-[1.85]">{step.desc}</p>
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
            Let&apos;s Discuss <span className="gold-italic">Your Project</span>
          </h2>
          <p className="max-w-md mx-auto mb-10">
            Every space is unique. Tell us about yours and we&apos;ll craft a
            design plan that fits your vision and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/book-consultation" className="btn-gold">Book Free Consultation</Link>
            <Link href="/contact" className="btn-ghost">Contact Us</Link>
          </div>
        </div>
      </section>

      <div className="h-14 md:hidden" />
    </>
  );
}

const allServices = [
  { title: 'Modular Kitchen', desc: 'Bespoke kitchen designs that blend ergonomics with elegance.', features: ['L, U & island layouts', 'Premium hardware', 'Chimney integration', 'Waterproof materials'] },
  { title: 'Pooja Unit', desc: 'Sacred spaces crafted with reverence and spiritual aesthetics.', features: ['Traditional & modern styles', 'Backlit designs', 'Marble & wood options', 'Custom carvings'] },
  { title: 'TV Units', desc: 'Statement media walls that anchor your living space.', features: ['Floating & floor-mounted', 'LED backlighting', 'Cable management', 'Storage integration'] },
  { title: 'Wardrobe', desc: 'Smart wardrobes tailored to your lifestyle and storage needs.', features: ['Walk-in & sliding panels', 'Soft-close hardware', 'Mirror integration', 'Accessory organizers'] },
  { title: 'Crockery Unit', desc: 'Elegant showcase units for your finest collection.', features: ['Glass & wood combos', 'Interior lighting', 'Display shelving', 'Bar unit options'] },
  { title: 'False Ceiling', desc: 'Architectural designs that add drama and character.', features: ['POP & gypsum options', 'Cove lighting', 'Multi-level designs', 'Sound insulation'] },
  { title: 'Partition Works', desc: 'Fluid dividers that define zones while preserving openness.', features: ['Glass partitions', 'Wooden jali work', 'Bookshelf dividers', 'Sliding panels'] },
  { title: 'All Wood Works', desc: 'Master craftsmanship — panelling, furniture, joinery.', features: ['Wall panelling', 'Custom furniture', 'Shoe racks & consoles', 'Bed & side tables'] },
];

const processSteps = [
  { title: 'Discovery', desc: 'Free site visit and in-depth consultation' },
  { title: 'Design', desc: '3D renders and material boards' },
  { title: 'Crafting', desc: 'Expert artisans, premium materials' },
  { title: 'Handover', desc: 'Snag-free, polished delivery' },
];
