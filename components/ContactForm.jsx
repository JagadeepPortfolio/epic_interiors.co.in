'use client';

import { useState } from 'react';

const WA_NUMBER = '919032506322';

const serviceOptions = [
  'Modular Kitchen', 'Pooja Unit', 'TV Unit', 'Wardrobe',
  'Crockery Unit', 'False Ceiling', 'Partition Works', 'All Wood Works',
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      'Hi Epic Interiors! I\'d like a free consultation.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : '',
      form.service ? `Service: ${form.service}` : '',
      form.message ? `\nMessage: ${form.message}` : '',
    ].filter(Boolean).join('\n');

    // Show toast
    const toast = document.getElementById('toast');
    if (toast) { toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3000); }

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`, '_blank', 'noopener,noreferrer');
  };

  const inputCls = 'w-full bg-white/5 border border-border rounded-btn px-4 py-3 text-cream text-sm placeholder:text-cream/20 focus:outline-none focus:border-gold/50 focus:bg-gold/5 transition-all duration-[var(--t-fast)]';

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/[.04] border border-border p-11 max-md:p-8 backdrop-blur-[8px]"
    >
      <h3 className="font-display text-[28px] font-light mb-8">
        Book a Free <span className="gold-italic">Consultation</span>
      </h3>

      {/* Name + Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <div>
          <label className="block text-[10px] tracking-[.3em] uppercase text-mid mb-2">Your Name</label>
          <input type="text" name="name" required placeholder="Rahul Sharma" value={form.name} onChange={handleChange} className={inputCls} />
        </div>
        <div>
          <label className="block text-[10px] tracking-[.3em] uppercase text-mid mb-2">Phone Number</label>
          <input type="tel" name="phone" required pattern="[+]?[0-9\s\-]{10,15}" title="Enter a valid phone number" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} className={inputCls} />
        </div>
      </div>

      {/* Email */}
      <div className="mb-5">
        <label className="block text-[10px] tracking-[.3em] uppercase text-mid mb-2">Email Address</label>
        <input type="email" name="email" placeholder="rahul@email.com" value={form.email} onChange={handleChange} className={inputCls} />
      </div>

      {/* Service */}
      <div className="mb-5">
        <label className="block text-[10px] tracking-[.3em] uppercase text-mid mb-2">Service You Need</label>
        <select name="service" value={form.service} onChange={handleChange} className={`${inputCls} appearance-none`}>
          <option value="">Select a service...</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-navy">{opt}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="mb-5">
        <label className="block text-[10px] tracking-[.3em] uppercase text-mid mb-2">Tell Us About Your Space</label>
        <textarea name="message" rows={4} required placeholder="Describe your project..." value={form.message} onChange={handleChange} className={`${inputCls} resize-y min-h-[100px]`} />
      </div>

      <button type="submit" className="btn-wa w-full justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="black">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Chat on WhatsApp
      </button>

      <p className="text-[11px] text-mid mt-4 flex items-center gap-2">
        <span className="text-gold">&#10003;</span> Opens WhatsApp with your message pre-filled
      </p>
    </form>
  );
}
