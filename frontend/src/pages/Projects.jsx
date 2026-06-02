import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


import partner1 from '../assets/partner (1).png';
import partner2 from '../assets/partner (2).png';
import partner3 from '../assets/partner (3).png';
import partner4 from '../assets/partner (4).png';
import partner5 from '../assets/partner (5).png';
import partner6 from '../assets/partner (6).png';
import partner7 from '../assets/partner (7).png';
import partner8 from '../assets/partner (8).png';
import partner9 from '../assets/partner (9).png';

import img1 from '../assets/img1 (1).webp'
import img2 from '../assets/9.jpg'
import img3 from '../assets/img1 (3).webp'
import img4 from '../assets/img1 (4).webp'
import img5 from '../assets/img1 (5).webp'
import img6 from '../assets/img1 (6).webp'
import img7 from '../assets/img1 (7).webp'
import img8 from '../assets/img1 (8).webp'

import p5  from '../assets/5.jpeg'
import p9  from '../assets/9.jpg'
import p10 from '../assets/10.jpg'
import p11 from '../assets/11.jpeg'
import p16 from '../assets/16.jpeg'
import p17 from '../assets/17.jpeg'
import p18 from '../assets/18.jpeg'
import p20 from '../assets/20.jpeg'
import p22 from '../assets/22.jpeg'
import p25 from '../assets/25.jpg'
import p32 from '../assets/32.jpg'


const partnerLogos = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9];

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Hospitality'];

const projects = [
  { num:'01', cat:'Residential',  title:'Luxury Villa – Whitefield, Bengaluru',   type:'Bird Wire System',          img:img1,  desc:'Low-visibility bird wire solution preserving facade aesthetics while eliminating pigeon nesting on all balconies and rooftop edges.' },
  { num:'02', cat:'Commercial',   title:'Corporate Office – Hyderabad',             type:'Anti Bird Netting',          img:img2,  desc:'Custom bird proofing for high-rise facade protection with minimal visual impact. Full floor coverage netting installation.' },
  { num:'03', cat:'Industrial',   title:'Warehouse – Electronic City',              type:'Industrial Netting',         img:img3,  desc:'Industrial bird control system for hygiene compliance and operational safety across 50,000 sq.ft warehouse facility.' },
  { num:'04', cat:'Hospitality',  title:'TAJ Hotel – MG Road, Bengaluru',           type:'Bird Wire System',           img:img4,  desc:'Discrete bird wire installation to protect the iconic hotel facade while maintaining the heritage architectural aesthetics.' },
  { num:'05', cat:'Residential',  title:'Brigade Apartments – Sarjapur',            type:'Balcony Netting',            img:img5,  desc:'Complete balcony bird proofing for 250+ apartments in a luxury residential complex using UV-stabilised transparent nets.' },
  { num:'06', cat:'Commercial',   title:'HAL – Aerospace Plant, Bengaluru',         type:'Industrial Netting',         img:img6,  desc:'Large-scale bird exclusion for HAL aerospace manufacturing plant ensuring production hygiene and regulatory compliance.' },
  { num:'07', cat:'Industrial',   title:'Solar Farm – Tumkur',                      type:'Solar Panel Protection',     img:img7,  desc:'Specialised bird mesh installation protecting 2MW solar panel array from bird nesting, increasing panel efficiency.' },
  { num:'08', cat:'Hospitality',  title:'Columbia Asia Hospital – Bengaluru',       type:'Complete Bird Exclusion',    img:img8,  desc:'Medical-grade bird exclusion system across HVAC units, rooftop, and critical areas meeting hospital hygiene standards.' },
  { num:'09', cat:'Commercial',   title:'Prestige Exora – ITPL Tech Park',          type:'Bird Spike System',          img:p5,    desc:'Comprehensive anti-bird spike installation across parking areas, parapet walls and canopy edges of tech campus.' },
  { num:'10', cat:'Residential',  title:'Luxury Apartment Complex – Koramangala',  type:'Bird Net Installation',      img:p32,   desc:'Full-perimeter bird proofing for a premium high-rise residential tower covering 18 floors of balconies and common areas.' },
  { num:'11', cat:'Hospitality',  title:'Rooftop Swimming Pool – Indiranagar',      type:'Swimming Pool Bird Control', img:p18,   desc:'Aesthetic near-invisible wire systems installed around a luxury rooftop pool deck, maintaining the premium visual appeal.' },
  { num:'12', cat:'Industrial',   title:'Factory – Peenya Industrial Area',         type:'Industrial Bird Exclusion',  img:p10,   desc:'Heavy-duty netting system across 30,000 sq.ft factory floor ensuring food-grade hygiene compliance for manufacturing.' },
  { num:'13', cat:'Commercial',   title:'Glass Office Tower – Whitefield',          type:'Bird Wire System',           img:p25,   desc:'Precision wire deterrent system across glass facades and window ledges of a modern commercial office tower.' },
  { num:'14', cat:'Residential',  title:'Villa Community – JP Nagar',               type:'Bird Wire System',           img:p17,   desc:'Discreet bird wire installation across 32 independent villas preserving premium landscaping and facade aesthetics.' },
  { num:'15', cat:'Commercial',   title:'Multi-Storey Building – Marathahalli',     type:'Anti Bird Netting',          img:p22,   desc:'Complete facade netting across 12 floors of a commercial building with custom access panels for maintenance.' },
  { num:'16', cat:'Hospitality',  title:'Hotel Rooftop & Pool Deck – MG Road',      type:'Pool & Terrace Protection',  img:p9,    desc:'Combined rooftop terrace and swimming pool bird proofing for a premium city-centre hotel using invisible wire systems.' },
];

/* ── Scroll animation ── */
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
  const from = { up:'translateY(50px)', left:'translateX(-50px)', right:'translateX(50px)', fade:'scale(0.95)' };
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

/* ── Project card with hover reveal ── */
const ProjectCard = ({ p, i }) => {
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

  return (
    <div
      ref={ref}
      style={{
        opacity: on ? 1 : 0,
        transform: on ? 'none' : 'translateY(50px)',
        transition: `opacity 0.7s cubic-bezier(.4,0,.2,1) ${(i % 3) * 80}ms, transform 0.7s cubic-bezier(.4,0,.2,1) ${(i % 3) * 80}ms`,
        height: '400px',
      }}
      className="relative overflow-hidden group cursor-default"
    >
      {/* Background image with filter */}
      <img src={p.img} alt={p.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        style={{ filter: 'brightness(0.78) contrast(1.08) saturate(0.9)' }}
      />

      {/* Navy colour tint overlay — gives brand consistency */}
      <div className="absolute inset-0 bg-[#0d1b2a]/30 mix-blend-multiply" />

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

      {/* Number badge */}
      <div className="absolute top-0 left-0 bg-yellow-600 w-11 h-11 flex items-center justify-center z-10">
        <span className="text-white font-bold text-sm">{p.num}</span>
      </div>

      {/* Category badge */}
      <div className="absolute top-0 right-0 bg-[#0d1b2a]/85 px-3 py-2 z-10">
        <span className="text-yellow-400 text-[10px] font-bold tracking-[2px] uppercase">{p.cat}</span>
      </div>

      {/* Default bottom content — fades out on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10 group-hover:opacity-0 group-hover:translate-y-3 transition-all duration-300">
        <div className="text-yellow-400 text-[10px] font-bold tracking-[2px] uppercase mb-1">{p.type}</div>
        <h3 className="text-white font-bold text-lg leading-snug">{p.title}</h3>
        <div className="flex gap-1 mt-2">
          <span className="w-6 h-0.5 bg-yellow-500" /><span className="w-2 h-0.5 bg-yellow-300" />
        </div>
      </div>

      {/* Hover reveal panel */}
      <div className="absolute inset-x-0 bottom-0 bg-[#0d1b2a]/97 p-5 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
        style={{ height: '68%' }}>
        <div className="text-yellow-400 text-[10px] font-bold tracking-[2px] uppercase mb-1">{p.type}</div>
        <h3 className="text-white font-bold text-base leading-snug mb-2">{p.title}</h3>
        <div className="flex gap-1 mb-3">
          <span className="w-6 h-0.5 bg-yellow-500" /><span className="w-2 h-0.5 bg-yellow-400" />
        </div>
        <p className="text-gray-300 text-xs leading-relaxed mb-4">{p.desc}</p>
        <Link to="/contact"
          className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 transition-all duration-200 group/btn">
          Get Similar Solution <ArrowRight size={11} className="group-hover/btn:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default function Projects() {
  const [active, setActive]     = useState('All');
  const [filterKey, setFilterKey] = useState(0);

  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active);

  const handleFilter = (cat) => { setActive(cat); setFilterKey(k => k + 1); };

  return (
    <div className="overflow-x-hidden">

      {/* ── BANNER ── */}
      <section className="relative h-[480px] bg-[#0d1b2a] overflow-hidden flex items-end">
        <img src={img2} alt="Projects" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0d1b2a 10%, rgba(13,27,42,0.5) 30%)' }} />
        <div className="absolute left-10 xl:left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-600/40 to-transparent" />
        <div className="relative w-full px-10 xl:px-20 pb-16">
          <Animate dir="left" delay={0}>
            <p className="text-yellow-500 text-xs font-semibold tracking-[5px] uppercase mb-4">Our Portfolio</p>
          </Animate>
          <Animate dir="up" delay={80}>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-5">
              Featured<br/><span className="text-yellow-500">Projects</span>
            </h1>
          </Animate>
          <Animate dir="up" delay={160}>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
              <span className="text-yellow-600">›</span>
              <span className="text-yellow-400">Projects</span>
            </div>
          </Animate>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
      </section>

      {/* ── STATS ── */}
      {/* <section className="bg-[#0d1b2a]">
        <div className="w-full px-10 xl:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[['500+','Projects Completed'],['8+','Years Experience'],['50+','Corporate Clients'],['100%','Client Satisfaction']].map(([n,l],i) => (
              <Animate key={i} dir="up" delay={i * 70} className="py-10 text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-1">{n}</div>
                <div className="text-gray-400 text-xs uppercase tracking-[2px] font-semibold">{l}</div>
              </Animate>
            ))}
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
      </section> */}

      {/* ── FILTER + GRID ── */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-10 xl:px-20">

          {/* Section heading */}
          <Animate dir="up" className="text-center mb-12">
            <p className="text-yellow-600 text-xs font-semibold tracking-[4px] uppercase mb-3">Case Studies</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Completed Projects</h2>
            <div className="flex justify-center gap-1 mb-2">
              <span className="w-8 h-0.5 bg-yellow-600" /><span className="w-2 h-0.5 bg-yellow-400" /><span className="w-2 h-0.5 bg-yellow-300" />
            </div>
          </Animate>

          {/* Filter tabs */}
          <Animate dir="up" delay={80} className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(c => (
              <button key={c} onClick={() => handleFilter(c)}
                className={`px-7 py-2.5 text-xs font-bold uppercase tracking-[2px] border transition-all duration-300 ${
                  active === c
                    ? 'bg-[#0d1b2a] border-[#0d1b2a] text-white'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-yellow-500 hover:text-yellow-600'
                }`}>
                {c}
              </button>
            ))}
          </Animate>

          {/* Project grid */}
          <div key={filterKey} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {filtered.map((p, i) => (
              <ProjectCard key={p.num} p={p} i={i} />
            ))}
          </div>

          <Animate dir="up" delay={100} className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              Showing <span className="text-yellow-600 font-semibold">{filtered.length}</span> of{' '}
              <span className="text-yellow-600 font-semibold">{projects.length}</span> projects
            </p>
          </Animate>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      {/* <section className="py-20 bg-white border-t border-gray-100">
        <div className="w-full px-10 xl:px-20">
          <Animate dir="up" className="text-center mb-12">
            <p className="text-yellow-600 text-xs font-semibold tracking-[4px] uppercase mb-3">Trusted By</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Valued Clients</h2>
            <div className="flex justify-center gap-1">
              <span className="w-8 h-0.5 bg-yellow-600" /><span className="w-2 h-0.5 bg-yellow-400" /><span className="w-2 h-0.5 bg-yellow-300" />
            </div>
          </Animate>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100">
            {['HAL','Srishaila Constructions','Prestige Group','Phoenix MarketCity','TAJ Hotels','Columbia Asia','Brigade Group','Mantri Developers'].map((c, i) => (
              <Animate key={i} dir="up" delay={i * 50}>
                <div className="bg-white py-8 px-6 text-center text-gray-600 font-semibold text-sm hover:bg-yellow-50 hover:text-yellow-700 transition-all duration-300 cursor-default">
                  {c}
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section> */}

        {/* ========= PARTNER LOGO SLIDER ========= */}
      <section className="bg-white py-10 border-b border-gray-200 overflow-hidden">
        <Animate dir="up" className="text-center mb-12">
            <p className="text-yellow-600 text-xs font-semibold tracking-[4px] uppercase mb-3">Trusted By</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Valued Clients</h2>
            <div className="flex justify-center gap-1">
              <span className="w-8 h-0.5 bg-yellow-600" /><span className="w-2 h-0.5 bg-yellow-400" /><span className="w-2 h-0.5 bg-yellow-300" />
            </div>
          </Animate>
        <div className="max-w-7xl mx-auto px-4 mb-7">
          <p className="text-center text-md font-semibold tracking-[3px] uppercase text-gray-500">Trusted By Commercial, Industrial & Residential Clients</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee" style={{ width: 'max-content' }}>
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div key={i} className="flex items-center justify-center shrink-0 px-10">
                <img src={logo} alt={`Partner ${(i % partnerLogos.length) + 1}`} className="h-14 w-auto object-contain client-logo" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 bg-[#0d1b2a] overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, #1a2f45 0%, #0d1b2a 70%)' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
        <Animate dir="up" className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-yellow-500 text-xs font-semibold tracking-[4px] uppercase mb-4">Start Your Project</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Have a Bird Problem</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-6">to Solve?</h2>
          <div className="flex justify-center gap-1 mb-8">
            <span className="w-8 h-0.5 bg-yellow-600" /><span className="w-2 h-0.5 bg-yellow-400" /><span className="w-2 h-0.5 bg-yellow-300" />
          </div>
          <p className="text-gray-400 mb-10 leading-relaxed text-[15px] max-w-xl mx-auto">
            Let us add your property to our growing list of success stories. Get a free site inspection and custom solution proposal.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact"
              className="inline-flex items-center gap-3 bg-yellow-600 hover:bg-white hover:text-gray-900 text-white font-semibold px-10 py-4 uppercase text-sm tracking-widest transition-all duration-300 group/cta">
              Get Free Assessment
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

    </div>
  );
}
