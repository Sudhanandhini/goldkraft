import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Leaf, ShieldCheck, Wrench, Settings2, Link2, Users, FolderOpen, Clock3, HardHat, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Hero & story images
import img1 from '../assets/img1 (1).webp'
import img2 from '../assets/img1 (2).webp'
import img3 from '../assets/9.jpg'
import img4 from '../assets/img1 (4).webp'
import img5 from '../assets/img1 (5).webp'
import img6 from '../assets/img1 (6).webp'
import img7 from '../assets/img1 (7).webp'
import img8 from '../assets/img1 (8).webp'

// Gallery numbered assets
import g1  from '../assets/1.jpg'
import g2  from '../assets/2.jpeg'
import g3  from '../assets/3.jpeg'
import g4  from '../assets/4.jpeg'
import g5  from '../assets/5.jpeg'
import g6  from '../assets/6.jpeg'
import g7  from '../assets/7.jpeg'
import g8  from '../assets/8.jpeg'
import g9  from '../assets/9.jpg'
import g10 from '../assets/10.jpg'
import g11 from '../assets/11.jpeg'
import g12 from '../assets/12.jpeg'
import g14 from '../assets/14.jpeg'
import g15 from '../assets/15.jpeg'
import g16 from '../assets/16.jpeg'
import g17 from '../assets/17.jpeg'
import g18 from '../assets/18.jpeg'
import g19 from '../assets/19.jpeg'
import g20 from '../assets/20.jpeg'

const stats = [
  { num: '2000+', label: 'Projects Completed',    Icon: FolderOpen },
  { num: '10+',   label: 'Years of Excellence',   Icon: Clock3     },
  { num: '10+',  label: 'Professional Teams',    Icon: HardHat    },
  { num: '100%', label: 'Eco-Friendly Methods',  Icon: Leaf       },
];

const values = [
  { Icon: Leaf,        title: 'Eco-Friendly Solutions',          desc: 'All our bird deterrent systems are designed to be safe for birds, humans, and the environment — with zero harm to wildlife.' },
  { Icon: ShieldCheck, title: 'Premium & Discreet',              desc: 'We prioritise minimal visual impact. Our installations are engineered to blend seamlessly with modern and heritage architecture.' },
  { Icon: Wrench,      title: 'High-Rise Expertise',             desc: 'Our professionally trained teams are equipped to handle elevated and complex installation environments with full safety compliance.' },
  { Icon: Settings2,   title: 'Site-Specific Solutions',         desc: 'Every project begins with a detailed site survey. No two installations are the same — each is tailored to the specific property.' },
  { Icon: Link2,       title: 'Durable Materials',               desc: 'We use only premium-grade materials — UV-stabilized nets, Grade 316 stainless steel wire, and corrosion-resistant hardware.' },
  { Icon: Users,       title: 'Professional Service',            desc: 'Timely execution, clean finishing, and a dedicated support team ensure a smooth experience from inspection to post-install.' },
];

const gallery = [
  g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
  g11, g12, g14, g15, g16, g17, g18, g19, g20,
];

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
  const from = { up: 'translateY(50px)', left: 'translateX(-50px)', right: 'translateX(50px)', fade: 'scale(0.95)' };
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

export default function About() {
  const [lbIdx, setLbIdx] = useState(null);
  const total = gallery.length;

  useEffect(() => {
    if (lbIdx === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape')      setLbIdx(null);
      if (e.key === 'ArrowRight')  setLbIdx(i => (i + 1) % total);
      if (e.key === 'ArrowLeft')   setLbIdx(i => (i - 1 + total) % total);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lbIdx, total]);

  return (
    <div className="overflow-x-hidden">

      {/* ── BANNER ── */}
      <section className="relative h-[480px] bg-[#0d1b2a] overflow-hidden flex items-end">
        <img src={img3} alt="About" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0"  />
        <div className="absolute left-10 xl:left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-600/40 to-transparent" />
        <div className="relative w-full px-10 xl:px-20 pb-16">
          <Animate dir="left" delay={0}>
            <p className="text-yellow-500 text-xs font-semibold tracking-[5px] uppercase mb-4">Who We Are</p>
          </Animate>
          <Animate dir="up" delay={80}>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-5">
              About<br/><span className="text-yellow-500">Goldkraft</span>
            </h1>
          </Animate>
          <Animate dir="up" delay={160}>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
              <span className="text-yellow-600">›</span>
              <span className="text-yellow-400">About Us</span>
            </div>
          </Animate>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-24 bg-white">
        <div className="w-full px-10 xl:px-20">
          <div className="grid md:grid-cols-2 gap-20 items-center">

            {/* Image side */}
            <Animate dir="left">
              <div className="relative">
                <div className="overflow-hidden shadow-2xl">
                  <img src={img4} alt="About Goldkraft" className="w-full h-[520px] object-cover hover:scale-[1.03] transition-transform duration-700" />
                </div>
                {/* Small overlay image */}
                <div className="absolute -bottom-8 -right-8 w-48 h-36 overflow-hidden shadow-2xl border-4 border-white hidden md:block">
                  <img src={img6} alt="" className="w-full h-full object-cover" />
                </div>
                {/* Years badge */}
                <div className="absolute -top-5 -left-5 bg-yellow-600 text-white p-6 shadow-xl">
                  <div className="text-4xl font-bold leading-none">8+</div>
                  <div className="text-xs font-semibold mt-1 tracking-widest uppercase">Years</div>
                </div>
              </div>
            </Animate>

            {/* Text side */}
            <Animate dir="right" delay={100}>
              <p className="text-yellow-600 text-xs font-semibold tracking-[4px] uppercase mb-3">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Professional Eco-Friendly Bird Proofing Solutions
              </h2>
              <div className="flex gap-1 mb-6">
                <span className="w-10 h-0.5 bg-yellow-600" /><span className="w-3 h-0.5 bg-yellow-400" /><span className="w-2 h-0.5 bg-yellow-300" />
              </div>
              <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
                We, Goldkraft Enterprises, are eco-friendly Pigeon Control Services and Solutions providers — suppliers and service providers of various Bird Control Products and specialists in Industrial & Commercial Pigeon Control.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
                Driven by the passion to provide pigeon control solutions that are safe for humans, birds and the environment, we have been helping individual and corporate clients end the hazards of birds and bird droppings across India.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                Our team is experienced in surveying properties and delivering the right solutions with a proven track record — from luxury residences to large industrial facilities — while following all safety protocols.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Eco-friendly & humane solutions', 'Experienced installation teams', 'Customized site-specific solutions', 'Pan India service coverage', 'Premium discreet installations', 'High-rise access expertise'].map((p, i) => (
                  <Animate key={i} dir="up" delay={i * 50}>
                    <div className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle2 size={15} className="text-yellow-600 shrink-0" />{p}
                    </div>
                  </Animate>
                ))}
              </div>
              <Link to="/contact"
                className="inline-flex items-center gap-3 bg-[#0d1b2a] hover:bg-yellow-600 text-white font-semibold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 group/btn">
                Get Free Inspection
                <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Animate>

          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#0d1b2a] py-0">
        <div className="w-full px-10 xl:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s, i) => (
              <Animate key={i} dir="up" delay={i * 80} className="py-12 px-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full border border-yellow-600/40 flex items-center justify-center">
                    <s.Icon size={24} className="text-yellow-500" strokeWidth={1.4} />
                  </div>
                </div>
                <div className="text-4xl font-bold text-yellow-500 mb-1">{s.num}</div>
                <div className="text-gray-400 text-xs uppercase tracking-[2px] font-semibold">{s.label}</div>
              </Animate>
            ))}
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
      </section>

      {/* ── MISSION ── */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-10 xl:px-20">
          <Animate dir="up" className="text-center mb-16">
            <p className="text-yellow-600 text-xs font-semibold tracking-[4px] uppercase mb-3">Our Purpose</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <div className="flex justify-center gap-1 mb-5">
              <span className="w-8 h-0.5 bg-yellow-600" /><span className="w-2 h-0.5 bg-yellow-400" /><span className="w-2 h-0.5 bg-yellow-300" />
            </div>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-[15px]">
              At Goldkraft, our passion is to save our customers' time and deliver the highest quality at the fastest speed — with dedication to quality, customer satisfaction and supply security.
            </p>
          </Animate>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Animate key={i} dir="up" delay={i * 70}>
                <div className="bg-white border border-gray-100 hover:border-yellow-300 hover:shadow-xl transition-all duration-400 p-8 group h-full">
                  <div className="w-14 h-14 border border-yellow-200 group-hover:border-yellow-500 group-hover:bg-yellow-50 flex items-center justify-center mb-6 transition-all duration-300">
                    <v.Icon size={26} className="text-yellow-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-yellow-700 transition-colors">{v.title}</h3>
                  <div className="flex gap-1 mb-4">
                    <span className="w-6 h-0.5 bg-yellow-600" /><span className="w-2 h-0.5 bg-yellow-400" />
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-24 bg-white">
        <div className="w-full px-10 xl:px-20">
          <Animate dir="up" className="text-center mb-14">
            <p className="text-yellow-600 text-xs font-semibold tracking-[4px] uppercase mb-3">Our Work in Action</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Installation Gallery</h2>
            <div className="flex justify-center gap-1">
              <span className="w-8 h-0.5 bg-yellow-600" /><span className="w-2 h-0.5 bg-yellow-400" /><span className="w-2 h-0.5 bg-yellow-300" />
            </div>
          </Animate>

          {/* Uniform 4-col grid — zero gap */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            {gallery.map((img, i) => (
              <Animate key={i} dir="fade" delay={i * 40}>
                <div
                  className="overflow-hidden group relative cursor-pointer"
                  style={{ height: '220px' }}
                  onClick={() => setLbIdx(i)}
                >
                  <img src={img} alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0d1b2a]/0 group-hover:bg-[#0d1b2a]/55 transition-all duration-400 flex items-center justify-center">
                    <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-400">
                      <span className="text-white text-2xl leading-none">+</span>
                    </div>
                  </div>
                  {/* Gold corner accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 bg-[#0d1b2a] overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, #1a2f45 0%, #0d1b2a 70%)' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
        <Animate dir="up" className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-yellow-500 text-xs font-semibold tracking-[4px] uppercase mb-4">Get Started</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Ready to Protect</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-6">Your Property?</h2>
          <div className="flex justify-center gap-1 mb-8">
            <span className="w-8 h-0.5 bg-yellow-600" /><span className="w-2 h-0.5 bg-yellow-400" /><span className="w-2 h-0.5 bg-yellow-300" />
          </div>
          <p className="text-gray-400 mb-10 leading-relaxed text-[15px] max-w-xl mx-auto">
            Get a free site inspection and a customized bird control solution proposal from our team of experts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact"
              className="inline-flex items-center gap-3 bg-yellow-600 hover:bg-white hover:text-gray-900 text-white font-semibold px-10 py-4 uppercase text-sm tracking-widest transition-all duration-300 group/cta">
              Schedule Inspection
              <ArrowRight size={15} className="group-hover/cta:translate-x-1 transition-transform" />
            </Link>
            <Link to="/solutions"
              className="inline-flex items-center gap-3 border-2 border-white/30 hover:border-yellow-500 text-white hover:text-yellow-400 font-semibold px-10 py-4 uppercase text-sm tracking-widest transition-all duration-300">
              View Solutions
            </Link>
          </div>
        </Animate>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
      </section>

      {/* ── LIGHTBOX ── */}
      {lbIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.93)' }}
          onClick={() => setLbIdx(null)}
        >
          <div
            className="relative flex items-center justify-center w-full h-full px-16"
            onClick={e => e.stopPropagation()}
          >
            {/* Main image */}
            <img
              src={gallery[lbIdx]}
              alt={`Gallery ${lbIdx + 1}`}
              className="max-h-[85vh] max-w-[80vw] object-contain shadow-2xl"
              style={{ border: '1px solid rgba(202,138,4,0.35)' }}
            />

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm font-semibold tracking-[3px] uppercase select-none">
              <span className="text-yellow-400">{lbIdx + 1}</span>
              <span className="text-white/40 mx-2">/</span>
              <span className="text-white/60">{total}</span>
            </div>

            {/* Close */}
            <button
              onClick={() => setLbIdx(null)}
              className="absolute top-4 right-4 w-11 h-11 bg-[#0d1b2a] border border-yellow-600/40 hover:bg-yellow-600 hover:border-yellow-500 flex items-center justify-center transition-all duration-200"
            >
              <X size={18} className="text-white" />
            </button>

            {/* Prev */}
            <button
              onClick={() => setLbIdx(i => (i - 1 + total) % total)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-14 bg-[#0d1b2a]/80 border border-yellow-600/40 hover:bg-yellow-600 hover:border-yellow-500 flex items-center justify-center transition-all duration-200"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>

            {/* Next */}
            <button
              onClick={() => setLbIdx(i => (i + 1) % total)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-14 bg-[#0d1b2a]/80 border border-yellow-600/40 hover:bg-yellow-600 hover:border-yellow-500 flex items-center justify-center transition-all duration-200"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Gold corner decorations */}
            <div className="absolute top-6 left-20 w-8 h-8 border-t-2 border-l-2 border-yellow-600/50 pointer-events-none" />
            <div className="absolute bottom-12 right-20 w-8 h-8 border-b-2 border-r-2 border-yellow-600/50 pointer-events-none" />
          </div>
        </div>
      )}

    </div>
  );
}
