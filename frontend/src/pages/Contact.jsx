import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';

import banner from '../assets/9.jpg'

/* ── Animate on scroll ── */
const Animate = ({ children, className = '', delay = 0, dir = 'up' }) => {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 80 && rect.bottom > 0) { setOn(true); return; }
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); obs.unobserve(el); } },
      { threshold: 0, rootMargin: '0px 0px 80px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const from = { up: 'translateY(48px)', left: 'translateX(-48px)', right: 'translateX(48px)', fade: 'scale(0.96)' };
  return (
    <div ref={ref} className={className} style={{
      opacity: on ? 1 : 0,
      transform: on ? 'none' : from[dir],
      transition: `opacity 0.75s cubic-bezier(.4,0,.2,1) ${delay}ms, transform 0.75s cubic-bezier(.4,0,.2,1) ${delay}ms`,
    }}>
      {children}
    </div>
  );
};

const contactInfo = [
  {
    Icon: Phone, label: 'Phone / WhatsApp',
    lines: [
      <a key="1" href="tel:9449065735"  className="hover:text-yellow-400 transition-colors">+91 94490 65735</a>,
      <a key="2" href="tel:08042126797" className="hover:text-yellow-400 transition-colors">080-4212 6797</a>,
    ],
  },
  {
    Icon: Mail, label: 'Email Address',
    lines: [
      <a key="1" href="mailto:sales@goldkraft.in" className="hover:text-yellow-400 transition-colors">sales@goldkraft.in</a>,
    ],
  },
  {
    Icon: MapPin, label: 'Our Office',
    lines: [
      <span key="1">No. 18, 6th Main, 4th Cross, Gandhi Nagar, Bangalore - 560 009</span>,
    ],
  },
  // {
  //   Icon: Clock, label: 'Business Hours',
  //   lines: [
  //     <span key="1">Mon – Sat: 9:00 AM – 7:00 PM<br/><span className="text-gray-500">Sunday: Closed</span></span>,
  //   ],
  // },
];

const inputCls = 'w-full bg-white border border-gray-200 px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 transition-all duration-200 placeholder:text-gray-400';
const labelCls = 'block text-[10px] font-bold tracking-[2px] uppercase text-gray-500 mb-2';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', property: '', message: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="overflow-x-hidden">

      {/* ── BANNER ── */}
      <section className="relative h-[480px] bg-[#0d1b2a] overflow-hidden flex items-end">
        <img src={banner} alt="Contact" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0"  />
        <div className="absolute left-10 xl:left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-600/40 to-transparent" />
        <div className="relative w-full px-10 xl:px-20 pb-16">
          <Animate dir="left" delay={0}>
            <p className="text-yellow-500 text-xs font-semibold tracking-[5px] uppercase mb-4">Get In Touch</p>
          </Animate>
          <Animate dir="up" delay={80}>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-5">
              Contact<br/><span className="text-yellow-500">Us</span>
            </h1>
          </Animate>
          <Animate dir="up" delay={160}>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
              <span className="text-yellow-600">›</span>
              <span className="text-yellow-400">Contact</span>
            </div>
          </Animate>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
      </section>

      {/* ── MAIN CONTACT SECTION ── */}
      <section className="bg-gray-50">
        <div className="w-full grid lg:grid-cols-[420px_1fr] xl:grid-cols-[480px_1fr] min-h-[700px]">

          {/* ── LEFT: dark info panel ── */}
          <Animate dir="left" className="bg-[#0d1b2a] flex flex-col">
            <div className="p-10 xl:p-14 flex flex-col flex-1">

              {/* Heading */}
              <div className="mb-10">
                <p className="text-yellow-500 text-[10px] font-bold tracking-[4px] uppercase mb-3">Reach Us</p>
                <h2 className="text-3xl font-bold text-white leading-tight mb-4">
                  We'd Love to<br/>Hear From You
                </h2>
                <div className="flex gap-1">
                  <span className="w-8 h-0.5 bg-yellow-600" />
                  <span className="w-2 h-0.5 bg-yellow-400" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mt-4">
                  Get in touch for a free site inspection and quotation. We serve Bengaluru and surrounding areas with pan-India coverage for large projects.
                </p>
              </div>

              {/* Contact items */}
              <div className="space-y-6 mb-10">
                {contactInfo.map(({ Icon, label, lines }, i) => (
                  <Animate key={i} dir="left" delay={i * 70 + 100}>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-yellow-600/10 border border-yellow-600/30 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-yellow-500" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold tracking-[2px] uppercase text-gray-500 mb-1">{label}</div>
                        <div className="text-gray-200 text-sm leading-relaxed space-y-0.5">
                          {lines.map((l, j) => <div key={j}>{l}</div>)}
                        </div>
                      </div>
                    </div>
                  </Animate>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <Animate dir="up" delay={400}>
                <a
                  href="https://wa.me/919449065735"
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-4 text-sm tracking-widest uppercase transition-all duration-300 group/wa mb-6"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487"/>
                  </svg>
                  Chat on WhatsApp
                  <ArrowRight size={14} className="ml-auto group-hover/wa:translate-x-1 transition-transform" />
                </a>
              </Animate>

              {/* Map */}
              <Animate dir="up" delay={460} className="flex-1 min-h-[200px] overflow-hidden border border-white/10">
                <iframe
                  title="Goldkraft Location"
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4627.010656057966!2d77.57405497578961!3d12.977996687337939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1731fcb95f11%3A0x8c7d01fe829b05dd!2sGoldkraft%20Enterprises!5e1!3m2!1sen!2sus!4v1786440244410!5m2!1sen!2sus"
                  className="w-full h-full min-h-[200px] border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  loading="lazy"
                />


                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4627.010656057966!2d77.57405497578961!3d12.977996687337939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1731fcb95f11%3A0x8c7d01fe829b05dd!2sGoldkraft%20Enterprises!5e1!3m2!1sen!2sus!4v1786440244410!5m2!1sen!2sus"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" 
                referrerpolicy="strict-origin-when-cross-origin"></iframe> */}
              </Animate>
            </div>
          </Animate>

          {/* ── RIGHT: form panel ── */}
          <Animate dir="right" className="bg-white flex flex-col">
            <div className="p-10 xl:p-14 flex flex-col flex-1">
              <div className="mb-8">
                <p className="text-yellow-600 text-[10px] font-bold tracking-[4px] uppercase mb-3">Free Consultation</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Schedule a Free<br/>Site Inspection</h2>
                <div className="flex gap-1 mb-4">
                  <span className="w-8 h-0.5 bg-yellow-600" />
                  <span className="w-2 h-0.5 bg-yellow-400" />
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Fill in the form and our team will call you back within 24 hours to schedule a free on-site assessment and provide a no-obligation quote.
                </p>
              </div>

              {submitted ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
                  <div className="w-20 h-20 bg-green-50 border-2 border-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={36} className="text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h4>
                  <div className="flex justify-center gap-1 mb-4">
                    <span className="w-6 h-0.5 bg-yellow-600" /><span className="w-2 h-0.5 bg-yellow-400" />
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                    Your enquiry has been received. Our team will contact you within 24 hours to schedule your free site inspection.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', property:'', message:'' }); }}
                    className="mt-8 text-yellow-600 text-xs font-bold uppercase tracking-widest hover:text-yellow-700 transition-colors"
                  >
                    Submit Another Enquiry →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Full Name <span className="text-yellow-600">*</span></label>
                      <input name="name" value={form.name} onChange={handleChange} required type="text" placeholder="Your full name" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Phone <span className="text-yellow-600">*</span></label>
                      <input name="phone" value={form.phone} onChange={handleChange} required type="tel" placeholder="Mobile number" className={inputCls} />
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>Email Address</label>
                    <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="your@email.com" className={inputCls} />
                  </div>

                  <div>
                    <label className={labelCls}>Property Type</label>
                    <select name="property" value={form.property} onChange={handleChange} className={inputCls + ' cursor-pointer'}>
                      <option value="">Select property type</option>
                      <option>Residential Apartment</option>
                      <option>Luxury Villa</option>
                      <option>Commercial Office</option>
                      <option>Hotel / Resort</option>
                      <option>Hospital</option>
                      <option>Warehouse</option>
                      <option>Factory</option>
                      <option>Swimming Pool</option>
                      <option>Educational Institution</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="flex-1">
                    <label className={labelCls}>Message / Bird Problem Description</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="Describe your bird problem, property location, approximate area size..."
                      className={inputCls + ' resize-none h-full min-h-[120px]'}
                    />
                  </div>

                  <div>
                    <button type="submit"
                      className="w-full bg-[#0d1b2a] hover:bg-yellow-600 text-white font-bold py-4 uppercase text-sm tracking-[3px] transition-all duration-300 flex items-center justify-center gap-3 group/sub">
                      Submit Enquiry
                      <ArrowRight size={16} className="group-hover/sub:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-[11px] text-gray-400 text-center mt-3 tracking-wide">
                      We respond within <span className="text-yellow-600 font-semibold">24 hours</span> with a free quote
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Animate>
        </div>
      </section>

      {/* ── QUICK INFO STRIP ── */}
      <section className="bg-[#0d1b2a]">
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
        <div className="w-full px-10 xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { icon: '📞', title: 'Call Us Now',         val: '+91 94490 65735',         sub: 'Mon–Sat, 9AM–7PM' },
              { icon: '✉️', title: 'Email Us',            val: 'sales@goldkraft.in',      sub: 'Reply within 24 hours' },
              { icon: '📍', title: 'Visit Our Office',    val: 'Bengaluru',       sub: 'No. 18, 6th Main, 4th Cross, Gandhi Nagar, Bangalore - 560 009' },
            ].map((item, i) => (
              <Animate key={i} dir="up" delay={i * 80} className="py-8 px-8 flex items-center gap-4">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <div className="text-[10px] font-bold tracking-[2px] uppercase text-gray-500 mb-0.5">{item.title}</div>
                  <div className="text-white font-semibold text-sm">{item.val}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{item.sub}</div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
      </section>

    </div>
  );
}
