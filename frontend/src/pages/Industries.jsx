import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Home as HomeIcon, Building2, Star, Warehouse, Factory, Activity, Waves, GraduationCap, Shield, Navigation, Plus } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import img1  from '../assets/img1 (1).webp'
import img7  from '../assets/img1 (7).webp'
import img8  from '../assets/img1 (8).webp'
import img6  from '../assets/img1 (6).webp'
import banner from '../assets/9.jpg'

import p2   from '../assets/2.jpeg'
import p10  from '../assets/10.jpg'
import p18  from '../assets/18.jpeg'
import p20  from '../assets/20.jpeg'
import p25  from '../assets/25.jpg'
import p28  from '../assets/28.jpg'
import p32  from '../assets/32.jpg'
import p33  from '../assets/33.jpg'
import p17  from '../assets/17.jpeg'
import p15  from '../assets/15.jpeg'
import p30  from '../assets/1.jpg'

const industries = [
  { num: '01', Icon: Layers,        title: 'Apartments',                  img: p32,
    desc: 'Comprehensive bird proofing for multi-storey residential complexes — balconies, common areas and rooftops across every floor level.',
    challenges: ['Multiple balcony access points', 'Common terrace pigeon activity', 'Rooftop nesting', 'Resident health & hygiene'],
    solutions:  ['Individual balcony netting', 'Common area exclusion', 'Wire deterrent systems', 'Per-floor custom solutions'] },

  { num: '02', Icon: HomeIcon,       title: 'Villas',                     img: p17,
    desc: 'Premium, near-invisible bird proofing for luxury villas that preserves architectural beauty while delivering complete bird exclusion.',
    challenges: ['Maintaining luxury aesthetics', 'Pigeon nesting on rooftops', 'Garden & lawn protection', 'Bird droppings on facades'],
    solutions:  ['Low-visibility wire systems', 'Transparent balcony netting', 'Porch & pergola proofing', 'Site-specific custom fit'] },

  { num: '03', Icon: Building2,      title: 'Commercial Buildings',        img: p25,
    desc: 'Discreet bird control for office towers, tech parks and business complexes that keeps facades clean without disrupting the professional image.',
    challenges: ['Professional image maintenance', 'Facade & ledge contamination', 'HVAC unit damage', 'Hygiene compliance'],
    solutions:  ['Bird wire systems', 'Spike installations', 'HVAC protection mesh', 'Perimeter deterrents'] },

  { num: '04', Icon: Star,           title: 'Hotels',                     img: p2,
    desc: 'Invisible bird management for hotels and resorts — protecting poolside dining, rooftop terraces, and facades without affecting guest experience.',
    challenges: ['Guest experience & comfort', 'Restaurant & pool hygiene', 'Outdoor event spaces', 'Kitchen compliance'],
    solutions:  ['Invisible wire systems', 'Pool deck protection', 'Terrace bird proofing', 'Gel & spike systems'] },

  { num: '05', Icon: Warehouse,      title: 'Warehouses',                 img: p10,
    desc: 'Heavy-duty bird exclusion for storage and logistics hubs that protects inventory from contamination while meeting hygiene and fire standards.',
    challenges: ['Product contamination risk', 'Loading dock ingress', 'High ceiling open areas', 'Fire safety compliance'],
    solutions:  ['Heavy-duty netting systems', 'Loading bay protection', 'Industrial spike arrays', 'Perimeter exclusion'] },

  { num: '06', Icon: Factory,        title: 'Factories',                  img: img7,
    desc: 'Industrial bird proofing that meets food safety, quality audits and regulatory standards across challenging manufacturing environments.',
    challenges: ['Production line contamination', 'Regulatory & audit compliance', 'Machinery damage', 'Worker safety hazards'],
    solutions:  ['Food-grade netting systems', 'Industrial exclusion mesh', 'Machinery area guards', 'Complete perimeter control'] },

  { num: '07', Icon: Activity,       title: 'Hospitals',                  img: img8,
    desc: 'Medical-grade bird exclusion across HVAC units, rooftops, critical care wings and patient areas — fully compliant with healthcare hygiene standards.',
    challenges: ['Infection control requirements', 'HVAC system protection', 'Patient area hygiene', 'Regulatory compliance'],
    solutions:  ['Complete exclusion netting', 'HVAC unit protection', 'Rooftop bird proofing', 'Full perimeter control'] },

  { num: '08', Icon: Waves,          title: 'Swimming Pools',             img: p18,
    desc: 'Aesthetic near-invisible systems that keep pool decks hygienic and bird-free without compromising the luxury feel of premium spaces.',
    challenges: ['Pool water contamination', 'Bird droppings on deck', 'Health concerns', 'Visual appeal'],
    solutions:  ['Near-invisible wire systems', 'Pool perimeter deterrents', 'Corrosion-resistant hardware', 'Custom pool geometry fit'] },

  { num: '09', Icon: GraduationCap,  title: 'Educational Institutions',   img: p20,
    desc: 'Safe, eco-friendly bird control for schools, colleges and universities — protecting students, canteens and campus infrastructure at scale.',
    challenges: ['Student health & safety', 'Open campus areas', 'Canteen hygiene', 'Heritage building protection'],
    solutions:  ['Campus-wide netting systems', 'Canteen area proofing', 'Corridor deterrents', 'Eco-friendly methods'] },

  { num: '10', Icon: Shield,         title: 'Public Sector Undertakings', img: p28,
    desc: 'Reliable bird control for government offices and PSU facilities — meeting public hygiene compliance and infrastructure protection standards.',
    challenges: ['Public hygiene compliance', 'Large infrastructure coverage', 'Heritage building care', 'Budget & audit requirements'],
    solutions:  ['Large-area netting systems', 'Wire deterrent installations', 'Spike systems for facades', 'Long-term maintenance plans'] },

  { num: '11', Icon: Navigation,     title: 'Airports',                   img: p30,
    desc: 'Specialized bird hazard management for terminals, hangars and airport infrastructure — ensuring aviation safety and operational compliance.',
    challenges: ['Aviation safety compliance', 'Terminal facade protection', 'Hangar & tarmac coverage', 'Large open span areas'],
    solutions:  ['Hangar exclusion netting', 'Terminal facade proofing', 'Shock track systems', 'Spike & wire deterrents'] },
];

/* ── Scroll-triggered animation component ── */
const Animate = ({ children, className = '', delay = 0, dir = 'up' }) => {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Fire immediately if already in viewport on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100 && rect.bottom > 0) {
      setOn(true);
      return;
    }
    // Otherwise observe with threshold:0 + generous rootMargin
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); obs.unobserve(el); } },
      { threshold: 0, rootMargin: '0px 0px 80px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const from = {
    up:    'translateY(50px)',
    left:  'translateX(-50px)',
    right: 'translateX(50px)',
    down:  'translateY(-40px)',
    fade:  'scale(0.94)',
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    on ? 1 : 0,
        transform:  on ? 'none' : from[dir],
        transition: `opacity 0.75s cubic-bezier(.4,0,.2,1) ${delay}ms, transform 0.75s cubic-bezier(.4,0,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/* ── Individual industry card with hover-reveal panel ── */
const IndustryCard = ({ ind, animDir, delay }) => (
  <Animate dir={animDir} delay={delay}>
    <div className="relative overflow-hidden group cursor-default" style={{ height: '420px' }}>

      {/* Background image */}
      <img
        src={ind.img}
        alt={ind.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />

      {/* Permanent dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* ── Badges ── */}
      <div className="absolute top-0 left-0 w-12 h-12 bg-yellow-600 flex items-center justify-center z-10">
        <span className="text-white font-bold text-sm tracking-wide">{ind.num}</span>
      </div>
      <div className="absolute top-0 right-0 bg-[#0d1b2a]/85 p-3 z-10">
        <ind.Icon size={20} className="text-yellow-400" strokeWidth={1.5} />
      </div>

      {/* ── Default bottom title (slides away on hover) ── */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-300 ease-in-out">
        <h3 className="text-2xl font-bold text-white mb-2">{ind.title}</h3>
        <div className="flex gap-1">
          <span className="w-8 h-0.5 bg-yellow-500" />
          <span className="w-2 h-0.5 bg-yellow-300" />
        </div>
      </div>

      {/* ── Hover reveal panel ── */}
      <div className="absolute inset-x-0 bottom-0 bg-[#0d1b2a]/97 p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
        style={{ height: '75%' }}>

        <h3 className="text-lg font-bold text-white mb-1">{ind.title}</h3>
        <div className="flex gap-1 mb-3">
          <span className="w-6 h-0.5 bg-yellow-500" />
          <span className="w-2 h-0.5 bg-yellow-400" />
        </div>
        <p className="text-gray-300 text-xs leading-relaxed mb-4">{ind.desc}</p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <h4 className="text-[9px] font-bold tracking-[2px] uppercase text-gray-400 mb-2 pb-1 border-b border-white/10">Challenges</h4>
            <ul className="space-y-1">
              {ind.challenges.map((c, j) => (
                <li key={j} className="flex items-start gap-1.5 text-gray-400 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-[3px]" />{c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[9px] font-bold tracking-[2px] uppercase text-gray-400 mb-2 pb-1 border-b border-white/10">Our Solutions</h4>
            <ul className="space-y-1">
              {ind.solutions.map((s, j) => (
                <li key={j} className="flex items-start gap-1.5 text-gray-400 text-[11px]">
                  <span className="w-1.5 h-1.5 bg-yellow-500 shrink-0 mt-[3px]" />{s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link to="/contact"
          className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-500 text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2 transition-all duration-200 group/btn">
          Get Solution <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  </Animate>
);

export default function Industries() {
  /* Stagger direction: col 0 → left, col 1 → up, col 2 → right */
  const dir = ['left', 'up', 'right'];

  return (
    <div className="overflow-x-hidden">

      {/* ── BANNER ── */}
      <section className="relative h-[480px] bg-[#0d1b2a] overflow-hidden flex items-end">
        <img src={banner} alt="Industries" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0d1b2a 10%, rgba(13,27,42,0.55) 30%)' }} />

        {/* Decorative vertical gold line */}
        <div className="absolute left-10 xl:left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-600/40 to-transparent" />

        <div className="relative w-full px-10 xl:px-20 pb-16">
          <Animate dir="left" delay={0}>
            <p className="text-yellow-500 text-xs font-semibold tracking-[5px] uppercase mb-4">We Serve</p>
          </Animate>
          <Animate dir="up" delay={80}>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-5">
              Industries<br/><span className="text-yellow-500">We Serve</span>
            </h1>
          </Animate>
          <Animate dir="up" delay={160}>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
              <span className="text-yellow-600">›</span>
              <span className="text-yellow-400">Industries</span>
            </div>
          </Animate>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
      </section>

      {/* ── INTRO ── */}
      <section className="py-20 bg-white">
        <div className="w-full px-10 xl:px-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Animate dir="left">
              <p className="text-yellow-600 text-xs font-semibold tracking-[4px] uppercase mb-3">Across Every Sector</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Bird Control for<br/>Every Property Type
              </h2>
              <div className="flex gap-1 mb-6">
                <span className="w-10 h-0.5 bg-yellow-600" />
                <span className="w-3 h-0.5 bg-yellow-400" />
                <span className="w-2 h-0.5 bg-yellow-300" />
              </div>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                Goldkraft Enterprises delivers custom bird control solutions across residential, commercial and industrial sectors — with eco-friendly systems tailored to the unique challenges of each property type across Bengaluru and beyond.
              </p>
            </Animate>

            {/* Stats strip */}
            <Animate dir="right" delay={100}>
              <div className="grid grid-cols-2 gap-px bg-gray-200">
                {[
                  { num: '11+', label: 'Industry Sectors' },
                  { num: '500+', label: 'Projects Completed' },
                  { num: '8+', label: 'Years Experience' },
                  { num: '100%', label: 'Eco-Friendly' },
                ].map((s, i) => (
                  <div key={i} className="bg-white p-8 flex flex-col justify-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-1">{s.num}</div>
                    <div className="text-xs uppercase tracking-[2px] text-gray-500 font-semibold">{s.label}</div>
                  </div>
                ))}
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES GRID ── */}
      <section className="py-4 bg-[#0d1b2a]">
        <div className="w-full px-10 xl:px-20">

          {/* Section label */}
          <Animate dir="up" className="py-10 text-center">
            <p className="text-yellow-500 text-xs font-semibold tracking-[5px] uppercase mb-2">Our Coverage</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Hover to Explore Each Industry</h2>
            <div className="flex justify-center gap-1 mt-4">
              <span className="w-8 h-0.5 bg-yellow-600" />
              <span className="w-2 h-0.5 bg-yellow-400" />
              <span className="w-2 h-0.5 bg-yellow-300" />
            </div>
          </Animate>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 pb-10">
            {industries.map((ind, i) => (
              <IndustryCard
                key={i}
                ind={ind}
                animDir={dir[i % 3]}
                delay={(Math.floor(i / 3)) * 60 + (i % 3) * 80}
              />
            ))}

            {/* "And More" card */}
            <Animate dir="right" delay={160}>
              <div
                className="relative overflow-hidden group flex flex-col items-center justify-center text-center p-10 border border-yellow-600/20 hover:border-yellow-500 transition-all duration-400"
                style={{ height: '420px', background: 'linear-gradient(135deg, #0d1b2a 0%, #142236 100%)' }}
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-600/50 group-hover:border-yellow-500 transition-colors" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-yellow-600/50 group-hover:border-yellow-500 transition-colors" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-yellow-600/50 group-hover:border-yellow-500 transition-colors" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-yellow-600/50 group-hover:border-yellow-500 transition-colors" />

                <div className="w-16 h-16 rounded-full border-2 border-yellow-600/50 flex items-center justify-center mb-6 group-hover:border-yellow-400 group-hover:bg-yellow-600/10 transition-all duration-400">
                  <Plus size={28} className="text-yellow-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">And Many More</h3>
                <div className="flex justify-center gap-1 mb-5">
                  <span className="w-6 h-0.5 bg-yellow-600" />
                  <span className="w-2 h-0.5 bg-yellow-400" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
                  Retail spaces, parking facilities, heritage buildings, IT parks, religious institutions — we bring expertise to every environment.
                </p>
                <Link to="/contact"
                  className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-white hover:text-gray-900 text-white font-semibold px-6 py-3 text-xs tracking-widest uppercase transition-all duration-300">
                  Enquire Now <ArrowRight size={13} />
                </Link>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Gold side accents */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-yellow-600 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-yellow-600 to-transparent" />

        <Animate dir="up" className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-yellow-600 text-xs font-semibold tracking-[5px] uppercase mb-4">Get Started Today</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Protect Your Property</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-6">With Expert Bird Control</h2>
          <div className="flex justify-center gap-1 mb-8">
            <span className="w-8 h-0.5 bg-yellow-600" />
            <span className="w-2 h-0.5 bg-yellow-400" />
            <span className="w-2 h-0.5 bg-yellow-300" />
          </div>
          <p className="text-gray-500 mb-10 leading-relaxed text-[15px] max-w-xl mx-auto">
            Our team will assess your property, understand your specific challenge and design a solution that is effective, aesthetic and long-lasting.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact"
              className="inline-flex items-center gap-3 bg-[#0d1b2a] hover:bg-yellow-600 text-white font-semibold px-10 py-4 uppercase text-sm tracking-widest transition-all duration-300 group/cta">
              Schedule Free Inspection
              <ArrowRight size={15} className="group-hover/cta:translate-x-1 transition-transform" />
            </Link>
            <Link to="/solutions"
              className="inline-flex items-center gap-3 border-2 border-gray-900 hover:border-yellow-600 text-gray-900 hover:text-yellow-600 font-semibold px-10 py-4 uppercase text-sm tracking-widest transition-all duration-300">
              View Solutions
            </Link>
          </div>
        </Animate>
      </section>

    </div>
  );
}
