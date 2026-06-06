import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Grid3x3, GitMerge, Zap, Building2, Waves, Factory } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Primary images (numbered assets)
import n1 from '../assets/14.jpeg'    // Bird Net Installation
import n2 from '../assets/5.jpeg'   // Bird Wire Systems
import n3 from '../assets/23.jpg'    // Bird Spikes
import n4 from '../assets/33.jpg'    // Balcony Bird Protection
import n5 from '../assets/18.jpeg'   // Swimming Pool
import n6 from '../assets/1.jpg'    // Industrial

// Secondary overlay images (webp)
import s1 from '../assets/3.jpeg'
import s2 from '../assets/img1 (3).webp'
import s3 from '../assets/22.jpeg'
import s4 from '../assets/31.jpg'
import s5 from '../assets/16.jpeg'
import s6 from '../assets/img1 (7).webp'

// Banner
import banner from '../assets/9.jpg'

const products = [
  {
    num: '01',
    Icon: Grid3x3,
    title: 'Bird Net Installation',
    tag: 'Complete Area Coverage',
    img: n1,
    img2: s2,
    desc: 'UV-stabilized polyethylene bird nets provide a complete physical barrier preventing pigeons and other birds from accessing balconies, open courtyards, warehouses and building interiors. Custom-fitted for any architectural requirement with minimal visual impact.',
    features: ['UV stabilized knotted nets', 'Custom mesh sizes available', 'Lightweight & durable', 'Near-invisible from a distance', '5+ year performance lifespan'],
    applications: ['Balconies & terraces', 'Open courtyards', 'Warehouses & atriums', 'Swimming pool areas', 'Ducts & open shafts'],
  },
  {
    num: '02',
    Icon: GitMerge,
    title: 'Bird Wire Systems',
    tag: 'Low-Profile Deterrent',
    img: n2,
    img2: s1,
    desc: 'Spring-tensioned stainless steel post-and-wire systems create an unstable landing surface that discourages birds from perching on ledges, facades and beams. Among the least visible of all bird deterrent products — the preferred choice for premium and heritage properties.',
    features: ['Grade 316 stainless steel wire', 'Spring-tensioned for flexibility', 'Near-invisible low profile', 'Suitable for high-rise facades', 'Fully corrosion resistant'],
    applications: ['Building ledges & facades', 'Structural beams & edges', 'High-rise buildings', 'Heritage & premium structures', 'Commercial properties'],
  },
  {
    num: '03',
    Icon: Zap,
    title: 'Bird Spikes',
    tag: 'Surface Deterrent',
    img: n3,
    img2: s3,
    desc: 'Stainless steel and polycarbonate bird spikes effectively deter roosting on ledges, parapets and flat surfaces. The blunt tip design ensures no harm to birds while being highly effective against pigeons, mynas and larger bird species.',
    features: ['SS & Polycarbonate variants', 'UV resistant base material', 'Clip or adhesive installation', '10+ year lifespan', 'Blunt tips — completely bird safe'],
    applications: ['Ledges & parapet walls', 'Roof edges & cornices', 'Signage & hoarding boards', 'HVAC & AC units', 'Window sills & ledges'],
  },
  {
    num: '04',
    Icon: Building2,
    title: 'Balcony Bird Protection',
    tag: 'Residential Specialist',
    img: n4,
    img2: s4,
    desc: 'Customized bird proofing solutions designed specifically for residential balconies, windows and open areas. Discreet installations using fine nets or stainless steel wire systems that preserve the aesthetics of your property while ensuring it stays completely bird-free.',
    features: ['Invisible from the exterior', 'Custom fitted for any balcony', 'No permanent wall damage', 'Easy maintenance access door', 'Suitable for all floor heights'],
    applications: ['Residential apartments', 'Villa balconies & terraces', 'Window ledges & sills', 'Open terraces', 'Penthouse areas'],
  },
  {
    num: '05',
    Icon: Waves,
    title: 'Swimming Pool Bird Control',
    tag: 'Luxury Space Protection',
    img: n5,
    img2: s6,
    desc: 'Aesthetic bird proofing systems designed for swimming pools, pool decks and luxury outdoor spaces. Keeps pool areas hygienic and bird-free without compromising the visual appeal of your premium property — ideal for hotels, resorts and high-end residences.',
    features: ['Near-invisible wire systems', 'Aesthetic premium design', 'Pool-safe rust-free materials', 'Corrosion-resistant hardware', 'Custom-fit for pool geometry'],
    applications: ['Residential pool decks', 'Hotel & resort pools', 'Club house facilities', 'Rooftop pools', 'Outdoor water features'],
  },
  {
    num: '06',
    Icon: Factory,
    title: 'Industrial Bird Proofing',
    tag: 'Large-Scale Solutions',
    img: n6,
    img2: s5,
    desc: 'Heavy-duty bird exclusion systems engineered for factories, warehouses and commercial facilities. Ensures production hygiene, regulatory compliance and workplace safety across large open industrial spaces where bird activity poses health and operational risks.',
    features: ['Heavy-duty netting systems', 'Large-span area coverage', 'Food-safe & hygiene compliant', 'Minimal production disruption', 'Suitable for high bay structures'],
    applications: ['Factories & manufacturing plants', 'Warehouses & logistics hubs', 'Food processing units', 'Power plants & substations', 'Commercial facilities'],
  },
];

const Animate = ({ children, className = '', delay = 0, dir = 'up' }) => {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOn(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const from = { up: 'translateY(50px)', left: 'translateX(-50px)', right: 'translateX(50px)', fade: 'scale(0.95)' };
  return (
    <div ref={ref} className={className} style={{
      opacity: on ? 1 : 0,
      transform: on ? 'none' : from[dir],
      transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
};

export default function Solutions() {
  return (
    <div className="overflow-x-hidden">

      {/* ── BANNER ── */}
      <section className="relative h-[440px] bg-[#0d1b2a] overflow-hidden flex items-end">
        <img src={banner} alt="Solutions" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0" />
        <div className="relative w-full px-10 xl:px-20 pb-16">
          <Animate dir="up">
            <p className="text-yellow-500 text-xs font-semibold tracking-[4px] uppercase mb-3">What We Offer</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">Bird Control<br/>Solutions</h1>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
              <span className="text-yellow-600">›</span>
              <span className="text-yellow-500">Solutions</span>
            </div>
          </Animate>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <Animate dir="up" className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-yellow-600 text-xs font-semibold tracking-[4px] uppercase mb-3">Our Products & Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Bird Proofing Range</h2>
          <div className="flex justify-center gap-1 mb-5">
            <span className="w-8 h-0.5 bg-yellow-600" /><span className="w-2 h-0.5 bg-yellow-400" /><span className="w-2 h-0.5 bg-yellow-300" />
          </div>
          <p className="text-gray-500 leading-relaxed">Eco-friendly bird control solutions for every property type — from luxury residences to large industrial facilities across Bengaluru and beyond.</p>
        </Animate>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="bg-white">
        {products.map((p, i) => {
          const isEven = i % 2 === 1;
          return (
            <div key={i} className={`border-b border-gray-100 ${isEven ? 'bg-gray-50' : 'bg-white'}`}>
              <div className="w-full px-10 xl:px-20 py-20">
                <div className={`grid md:grid-cols-2 gap-16 items-center ${isEven ? 'md:[&>*:first-child]:order-2' : ''}`}>

                  {/* ── Image side ── */}
                  <Animate dir={isEven ? 'right' : 'left'}>
                    <div className="relative">
                      {/* Main image */}
                      <div className="overflow-hidden shadow-xl">
                        <img src={p.img} alt={p.title}
                          className="w-full h-[400px] object-cover hover:scale-[1.04] transition-transform duration-700" />
                      </div>
                      {/* Secondary overlay image */}
                      <div className={`absolute -bottom-8 ${isEven ? '-left-8' : '-right-8'} w-44 h-32 overflow-hidden shadow-2xl border-4 border-white hidden md:block`}>
                        <img src={p.img2} alt="" className="w-full h-full object-cover" />
                      </div>
                      {/* Number badge */}
                      <div className="absolute -top-5 -left-5 w-14 h-14 bg-yellow-600 flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-base">{p.num}</span>
                      </div>
                      {/* Tag ribbon */}
                      <div className="absolute top-4 right-0 bg-[#0d1b2a]/90 px-4 py-2">
                        <span className="text-yellow-400 text-xs font-semibold tracking-[2px] uppercase">{p.tag}</span>
                      </div>
                    </div>
                  </Animate>

                  {/* ── Content side ── */}
                  <Animate dir={isEven ? 'left' : 'right'} delay={120}>
                    <div className="text-[80px] font-bold text-gray-100 leading-none select-none -mb-4">{p.num}</div>
                    <div className="flex items-center gap-3 mb-3">
                      <p.Icon size={26} className="text-yellow-600" strokeWidth={1.5} />
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{p.title}</h3>
                    </div>
                    <div className="flex gap-1 mb-5">
                      <span className="w-10 h-0.5 bg-yellow-600" /><span className="w-3 h-0.5 bg-yellow-400" />
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">{p.desc}</p>

                    <div className="grid grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-gray-800 mb-3 pb-2 border-b border-gray-200">Key Features</h4>
                        <ul className="space-y-2">
                          {p.features.map((f, j) => (
                            <Animate key={j} dir="up" delay={j * 60}>
                              <li className="flex items-start gap-2 text-gray-600 text-sm">
                                <CheckCircle2 size={14} className="text-yellow-600 shrink-0 mt-0.5" />{f}
                              </li>
                            </Animate>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-gray-800 mb-3 pb-2 border-b border-gray-200">Applications</h4>
                        <ul className="space-y-2">
                          {p.applications.map((a, j) => (
                            <Animate key={j} dir="up" delay={j * 60 + 30}>
                              <li className="flex items-start gap-2 text-gray-600 text-sm">
                                <span className="w-2 h-2 bg-yellow-500 shrink-0 mt-1.5" />{a}
                              </li>
                            </Animate>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link to="/contact"
                      className="inline-flex items-center gap-3 bg-[#0d1b2a] hover:bg-yellow-600 text-white font-semibold px-7 py-3.5 text-sm tracking-widest uppercase transition-all duration-300 group/btn">
                      For More Solutions talk to our experts
                      <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Animate>

                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 bg-[#0d1b2a] overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, #1a2f45 0%, #0d1b2a 70%)' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
        <Animate dir="up" className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-yellow-500 text-xs font-semibold tracking-[4px] uppercase mb-4">Expert Consultation</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Not Sure Which Solution</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">Is Right For You?</h2>
          <div className="flex justify-center gap-1 mb-7">
            <span className="w-8 h-0.5 bg-yellow-600" /><span className="w-2 h-0.5 bg-yellow-400" /><span className="w-2 h-0.5 bg-yellow-300" />
          </div>
          <p className="text-gray-400 mb-10 leading-relaxed">Our experts will assess your property and recommend the most effective, aesthetically-pleasing solution for your specific needs.</p>
          <Link to="/contact"
            className="inline-flex items-center gap-3 bg-yellow-600 hover:bg-white hover:text-gray-900 text-white font-semibold px-10 py-4 uppercase text-sm tracking-widest transition-all duration-300 group/cta">
            Schedule Free Inspection
            <ArrowRight size={15} className="group-hover/cta:translate-x-1 transition-transform" />
          </Link>
        </Animate>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
      </section>

    </div>
  );
}
