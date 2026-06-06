import { Link } from 'react-router-dom';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, ChevronRight, ChevronLeft, Building2, Hotel, Building, Activity, ShoppingCart, Warehouse, Factory, Layers, FolderOpen, Clock3, Leaf, HardHat, Settings2, Eye, UserCheck, BarChart3, Grid3x3, Waves, Zap, GitMerge, ShieldCheck, Wrench, Link2, Users, FileSearch2, ClipboardList, Home as HomeIcon, GraduationCap, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
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
import img2 from '../assets/3.jpeg'
import img3 from '../assets/img1 (3).webp'
import img4 from '../assets/21.jpeg'
import img5 from '../assets/32.jpg'
import img6 from '../assets/img1 (6).webp'
import img7 from '../assets/img1 (7).webp'

import img40 from '../assets/25.jpg'

import img71 from '../assets/27.jpg'
import img8 from '../assets/img1 (8).webp'

import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner4.png';
import banner3 from '../assets/banner4.png';

const partnerLogos = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9];

const heroSlides = [
  {
    bg: banner1,
    tag: 'ECO-FRIENDLY',
    title: 'Bird Control Services & Solutions',
    sub: 'Professional pigeon control systems for apartments, commercial buildings, balconies, swimming pools & industrial spaces.',
  },
  {
    bg: banner3,
    tag: 'ECO-FRIENDLY',
    title: 'Bird Proofing Solutions That Protect Without Harm',
    sub: 'Suppliers and service providers of various bird control products & specialists in industrial & commercial pigeon control.',
  },
];

const clients = ['HAL', 'Srishaila Constructions', 'Prestige', 'Phoenix MarketCity', 'Park & Garage', 'Mantri', 'Brigade', 'TAJ', 'Columbia Asia'];

const stats = [
  { num: '500+', label: 'Projects Completed', Icon: FolderOpen },
  { num: '8+', label: 'Years Experience', Icon: Clock3 },
  { num: '100%', label: 'Eco-Friendly Solutions', Icon: Leaf },
  { num: '50+', label: 'Professional Teams', Icon: HardHat },
  { num: '∞', label: 'Customized Site Solutions', Icon: Settings2 },
];

const solutions = [
  { title: 'Bird Netting Systems', desc: 'Low-visibility UV stabilized nets to prevent birds from entering open spaces.', img: img2, icon: '🕸️' },
  { title: 'Bird Wire Systems', desc: 'Low visibility stainless steel wire systems for ledges, facades & beams.', img: img3, icon: '〰️' },
  { title: 'Bird Spikes', desc: 'Durable spike systems that prevent birds from landing on ledges & surfaces.', img: img4, icon: '⚡' },
  { title: 'Solar Panel Protection', desc: 'Protect solar panels from birds nesting & damaging netting.', img: img5, icon: '☀️' },
  { title: 'Balcony Bird Proofing', desc: 'Discreet solutions to keep balconies clean, safe & bird-free.', img: img6, icon: '🏠' },
  { title: 'Industrial Bird Control', desc: 'Effective bird control for industrial units, warehouses & factories.', img: img7, icon: '🏭' },
];

const industries = [
  { icon: Layers,         label: 'Apartments' },
  { icon: HomeIcon,       label: 'Villas' },
  { icon: Building2,      label: <>Commercial<br/>Buildings</> },
  { icon: Hotel,          label: 'Hotels' },
  { icon: Warehouse,      label: 'Warehouses' },
  { icon: Factory,        label: 'Factories' },
  { icon: Activity,       label: 'Hospitals' },
  { icon: Waves,          label: 'Swimming Pools' },
  { icon: GraduationCap,  label: <>Educational<br/>Institutions</> },
  { icon: ShoppingBag,    label: 'Retail Spaces' },
];

const features = [
  { icon: '👁️', title: 'Minimal Visual Impact', desc: 'Systems designed to blend with modern architecture.' },
  { icon: '🌿', title: 'Eco-Friendly Solutions', desc: 'Safe for birds, humans, and the environment.' },
  { icon: '🔩', title: 'Durable Materials', desc: 'Premium materials built for long-term performance.' },
  { icon: '📍', title: 'Site-Specific Installations', desc: 'Custom solutions for each unique property.' },
  { icon: '✅', title: 'Suitable for Premium Architecture', desc: 'Aesthetic-first approach for luxury spaces.' },
];

const whyUs = [
  { Icon: Leaf,        title: 'Eco-Friendly Solutions',          desc: 'Safe systems designed to deter birds without harm.' },
  { Icon: ShieldCheck, title: 'Premium & Discreet Installations', desc: 'Minimal visual impact with clean and aesthetic finishing.' },
  { Icon: Wrench,      title: 'High-Rise Installation Expertise', desc: 'Professional team trained for elevated access and safety.' },
  { Icon: Settings2,   title: 'Customized Site Solutions',       desc: 'Every project is planned based on site conditions.' },
  { Icon: Link2,       title: 'Durable Materials',               desc: 'Quality components designed for long-term performance.' },
  { Icon: Users,       title: 'Professional Service',            desc: 'Timely execution with attention to detail.' },
];

const testimonials = [
  { text: 'Goldkraft Enterprises provided a very neat and professional installation for our apartment. The bird wire system is discreet and works perfectly. Highly recommended!', role: 'Facility Manager', location: 'Premium Residential Apartment, Bangalore' },
  { text: 'Excellent bird proofing for our hotel. Very professional team, minimal disruption, and the results are outstanding. Birds are completely gone from the terrace area.', role: 'Hotel Manager', location: 'Luxury Hotel, MG Road, Bangalore' },
  { text: 'Very reliable and expert team. They surveyed our industrial plant thoroughly and implemented the perfect solution. Highly satisfied with the quality and finish.', role: 'Plant Manager', location: 'Industrial Facility, Electronic City, Bangalore' },
  { text: 'Our balconies are completely clean now. The netting is invisible from outside and the installation was done neatly without any damage to the walls.', role: 'Apartment Association', location: 'Residential Complex, Whitefield, Bangalore' },
];

const projects = [
  { cat: 'Residential', title: 'Luxury Villa – Whitefield, Bengaluru', type: 'Bird Wire System', img: img1, desc: 'Low-visibility bird wire solution preserving facade aesthetics while eliminating pigeon nesting on all balconies and rooftop edges.' },
  { cat: 'Commercial', title: 'Corporate Office – Hyderabad', type: 'Anti Bird Netting', img: img2, desc: 'Custom bird proofing for high-rise facade protection with minimal visual impact. Full floor coverage netting installation.' },
  { cat: 'Industrial', title: 'Warehouse – Electronic City', type: 'Industrial Netting', img: img3, desc: 'Industrial bird control system for hygiene compliance and operational safety across 50,000 sq.ft warehouse facility.' },
  { cat: 'Hospitality', title: 'TAJ Hotel – MG Road', type: 'Bird Wire System', img: img4, desc: 'Discrete bird wire installation to protect the iconic hotel facade while maintaining the heritage architectural aesthetics.' },
  { cat: 'Residential', title: 'Brigade Apartments – Sarjapur', type: 'Balcony Netting', img: img5, desc: 'Complete balcony bird proofing for 250+ apartments in a luxury residential complex using UV-stabilized transparent nets.' },
  { cat: 'Commercial', title: 'HAL – Aerospace Plant', type: 'Industrial Netting', img: img6, desc: 'Large-scale bird exclusion for HAL aerospace manufacturing plant ensuring production hygiene and regulatory compliance.' },
  { cat: 'Industrial', title: 'Solar Farm – Tumkur', type: 'Solar Panel Protection', img: img7, desc: 'Specialized bird mesh installation protecting 2MW solar panel array from bird nesting, increasing panel efficiency.' },
  { cat: 'Hospitality', title: 'Columbia Asia Hospital', type: 'Complete Bird Exclusion', img: img8, desc: 'Medical-grade bird exclusion system across HVAC units, rooftop, and critical areas meeting hospital hygiene standards.' },
  { cat: 'Commercial', title: 'Prestige Exora – ITPL', type: 'Bird Spike System', img: img1, desc: 'Comprehensive anti-bird spike installation across parking areas, parapet walls and canopy edges of tech campus.' },
];

const recentProjects = [
  { title: 'Bird Wire System',              sub: 'Premium Residential',    city: 'Bangalore', img: img2 },
  { title: 'Invisible Grid',                sub: 'Residential Apartment',  city: 'Bangalore', img: img5 },
  { title: 'High-Rise Installation',        sub: 'Commercial Building',    city: 'Bangalore', img: img3 },
  { title: <>Swimming Pool<br/>Bird Wire System</>, sub: 'Luxury Property, Bangalore', city: '', img: img7 },
  { title: 'Commercial Project',            sub: 'Office Building',        city: 'Bangalore', img: img71 },
  { title: 'Industrial Bird Proofing',      sub: 'Warehouse Facility',     city: 'Bangalore', img: img4 },
];

const cities = ['Hyderabad', 'Chennai', 'Mysuru', 'Coimbatore', 'Mangalore', 'And Many More'];

const ourServices = [
  { Icon: Grid3x3,  title: <>Bird<br/>Net Installation</>,     img: img3, desc: 'Protection for balconies, windows, ducts and open areas.' },
  { Icon: GitMerge, title: <>Bird<br/>Wire Systems</>,         img: img2, desc: 'Discreet stainless steel bird deterrent systems for premium properties and ledges.' },
  { Icon: Zap,      title: <>Bird<br/>Spikes</>,               img: img6, desc: 'Effective anti-roosting solutions for ledges, beams and utility areas.' },
  { Icon: Building2,title: <>Invisible<br/>Grid</>,   img: img5, desc: 'Customized solutions for residential apartments and villas.' },
  { Icon: Waves,    title: <>Swimming Pool<br/>Bird Control</>, img: img7, desc: 'Aesthetic bird proofing systems for pool ledges and luxury spaces.' },
  { Icon: Factory,  title: <>Commercial Bird<br/>Proofing</>,  img: img4, desc: 'Solutions for factories, warehouses and commercial facilities.' },
];

const heroFeatures = [
  { Icon: HardHat, title: 'Professional Installation' },
  { Icon: Eye, title: 'Discreet Solutions' },
  { Icon: BarChart3, title: 'High-Rise Expertise' },
  { Icon: Shield, title: 'Durable Systems' },
];

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const num = parseInt(target.replace(/\D/g, ''));
    if (count < num) {
      const inc = Math.ceil(num / 50);
      const timer = setTimeout(() => setCount(Math.min(count + inc, num)), 30);
      return () => clearTimeout(timer);
    }
  }, [count, target]);
  const suffix = target.match(/[^0-9]/g)?.join('') || '';
  return <>{count}{suffix}</>;
};

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [tIdx, setTIdx] = useState(0);
  const [pIdx, setPIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTIdx(i => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setPIdx(i => (i + 1) % projects.length), 5000);
    return () => clearInterval(t);
  }, []);

  const h = heroSlides[slide];

  return (
    <div>
      {/* ========= HERO ========= */}
      <section className="relative h-[90vh] min-h-[620px] overflow-hidden w-full">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${h.bg})` }}
        />
        <div className="absolute inset-0" 
        style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.08) 100%)' }}
         />

        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-10 xl:px-20 grid md:grid-cols-2 gap-10 items-center">
            {/* Left — takes full left half */}
            <div className="text-white">
              <span className="text-yellow-400 text-xs font-semibold tracking-[4px] uppercase mb-4 block animate-fadeInUp">{h.tag}</span>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-5 animate-fadeInUp delay-100">{h.title}</h1>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 animate-fadeInUp delay-200">{h.sub}</p>
              <div className="flex flex-wrap gap-4 animate-fadeInUp delay-300 mb-10">
                <Link to="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-7 py-3.5 rounded text-sm tracking-wide transition-all duration-300 flex items-center gap-2">
                  Get Free Site Assessment <ArrowRight size={16}/>
                </Link>
                <Link to="/projects" className="border border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-7 py-3.5 rounded text-sm tracking-wide transition-all duration-300 flex items-center gap-2">
                  View Projects <ArrowRight size={16}/>
                </Link>
              </div>

              {/* 4 feature boxes — single row, full left-half width */}
              <div className="grid grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden animate-fadeInUp delay-400 w-full">
                {heroFeatures.map(({ Icon, title }, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 bg-black/55 backdrop-blur-sm px-4 py-4 text-center">
                    <div className="w-10 h-10 rounded-full border border-yellow-500/70 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-yellow-400" />
                    </div>
                    <span className="text-white text-xs font-semibold leading-tight">{title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — photo shows through */}
            <div />
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} className={`w-8 h-1 transition-all duration-300 ${slide === i ? 'bg-yellow-500' : 'bg-white/40'}`} />
          ))}
        </div>
      </section>

        {/* ========= ARCHITECTURE SECTION ========= */}
      <section className=" bg-white">
        <div className="max-w-full mx-auto  grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img src={img40} alt="Modern Building" className="w-full h-[500px] object-cover shadow-lg" />
          </div>
          <div className=" px-10">
            <div className="">
            <p className="text-yellow-600 text-md font-semibold tracking-[3px] uppercase mb-2">About us</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Professional Eco-Friendly Bird Proofing Solutions</h2>
            <div className="w-12 h-0.5 bg-yellow-600 mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              We Goldkraft Enterprises provide professional bird control services designed to protect residential, commercial and industrial properties from pigeon-related issues.
</p><p className="text-gray-600 leading-relaxed mb-4">
We specialize in discreet, durable and eco-friendly bird proofing systems including bird nets, bird wire systems, spikes and customized protection solutions for balconies, ledges, swimming pools and high-rise structures.
</p><p className="text-gray-600 leading-relaxed mb-4">
Our focus is on delivering clean installations, long-lasting protection and aesthetically maintained spaces without harming birds.
            </p>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-yellow-50 rounded flex items-center justify-center text-base shrink-0">{f.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{f.title}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div> */}
            <Link to="/about" className="mt-4 inline-flex items-center gap-2 bg-gray-900 hover:bg-yellow-600 text-white font-semibold px-7 py-3 uppercase text-sm tracking-wider transition-all duration-300">
              Learn More <ArrowRight size={15}/>
            </Link>
          </div></div>
        </div>
      </section>

      {/* ========= PARTNER LOGO SLIDER ========= */}
      <section className="bg-gray-50 py-10 border-b border-gray-200 overflow-hidden">
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

      {/* ========= OUR SERVICES ========= */}
      <section className="py-16 bg-white">
        <div className="w-full px-10 xl:px-20">
          <div className="text-center mb-12">
            <p className="text-yellow-600 text-md font-semibold tracking-[3px] uppercase mb-2">Our Services</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Effective Solutions for Every Space</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ourServices.map((svc, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden flex flex-col hover:shadow-lg hover:border-yellow-300 transition-all duration-300 group">
                {/* Card header */}
                <div className="flex items-start gap-3 p-4 pb-3">
                  <div className="shrink-0 mt-0.5">
                    <svc.Icon size={28} className="text-gray-700 group-hover:text-yellow-600 transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-yellow-700 transition-colors">{svc.title}</h3>
                </div>
                {/* Image */}
                <div className="h-40 overflow-hidden mx-3 rounded-lg">
                  <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                {/* Description + link */}
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <Link to="/solutions" className="text-yellow-600 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
   {/* ========= WHY GOLDKRAFT ========= */}
      <section className="py-16 bg-[#0d1b2a]">
        <div className="w-full px-10 xl:px-20">
          <div className="text-center mb-12">
            <p className="text-yellow-500 text-md font-semibold tracking-[3px] uppercase mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Why Goldkraft Enterprises?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {whyUs.map((w, i) => (
              <div key={i} className={`flex flex-col items-center text-center px-6 py-6 ${i < whyUs.length - 1 ? 'border-r border-dashed border-white/15' : ''}`}>
                <div className="mb-5">
                  <w.Icon size={48} className="text-yellow-500" strokeWidth={1.2} />
                </div>
                <h3 className="text-white font-bold text-xl leading-snug mb-3">{w.title}</h3>
                <p className="text-gray-400 text-md leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      
      {/* ========= RECENT PROJECTS ========= */}
      <section className="py-16 bg-white">
        <div className="w-full px-10 xl:px-20">
          <div className="text-center mb-12">
            <p className="text-yellow-600 text-md font-semibold tracking-[3px] uppercase mb-2">Recent Installations</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Recent Projects</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {recentProjects.map((p, i) => (
              <div key={i} className="group flex flex-col">
                <div className="rounded-xl overflow-hidden h-52 mb-4">
                  <img src={p.img} alt={typeof p.title === 'string' ? p.title : ''} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg leading-snug mb-2">{p.title}</h3>
                <p className="text-gray-400 text-md">{p.sub}</p>
                {p.city && <p className="text-gray-400 text-md">{p.city}</p>}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/projects" className="inline-flex items-center gap-2 border border-yellow-600 text-yellow-700 hover:bg-yellow-600 hover:text-white font-semibold px-8 py-3 rounded text-sm tracking-wide transition-all duration-300">
              View All Projects <ArrowRight size={15}/>
            </Link>
          </div>
        </div>
      </section>



      
      {/* ========= 4 STEP PROCESS ========= */}
      <section className="py-16 bg-[#0d1b2a]">
        <div className="w-full px-10 xl:px-20">
          <div className="text-center mb-14">
            <p className="text-yellow-500 text-md font-semibold tracking-[3px] uppercase mb-3">Our Process</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Our 4 Step Process</h2>
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Dashed connecting line */}
            <div className="hidden md:block absolute top-[52px] left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-px border-t-2 border-dashed border-white/20 z-0" />

            {[
              { step: 1, Icon: FileSearch2,  title: 'Site Inspection',           desc: 'Assessment of bird activity and affected areas.' },
              { step: 2, Icon: ClipboardList, title: 'Solution Recommendation',  desc: 'Customized bird proofing system planning based on your requirements.' },
              { step: 3, Icon: Wrench,        title: 'Professional Installation', desc: 'Safe and efficient execution by trained and experienced technicians.' },
              { step: 4, Icon: ShieldCheck,   title: 'Post-Installation Support', desc: 'Ensuring effective and long-lasting protection with support.' },
            ].map(({ step, Icon, title, desc }) => (
              <div key={step} className="relative flex flex-col items-center text-center z-10">
                {/* Step number badge */}
                <div className="relative mb-5">
                  <div className="w-24 h-24 rounded-full border-2 border-white/20 bg-[#0d1b2a] flex items-center justify-center">
                    <Icon size={38} className="text-white" strokeWidth={1.3} />
                  </div>
                  <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{step}</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-base mb-3 text-lg">{title}</h3>
                <p className="text-gray-400 text-md leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========= INDUSTRIES + TESTIMONIALS ========= */}
      <section className="py-16 bg-white">
        <div className="w-full px-10 xl:px-20">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* LEFT — Industries We Serve */}
            <div>
              <p className="text-yellow-600 text-xs font-semibold tracking-[3px] uppercase mb-2">Industries We Serve</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Protecting Every Environment</h2>
              <div className="grid grid-cols-5 gap-6">
                {industries.map((ind, i) => (
                  <Link key={i} to="/industries" className="flex flex-col items-center gap-2 group">
                    <ind.icon size={36} className="text-yellow-600 group-hover:text-yellow-700 transition-colors" strokeWidth={1.4} />
                    <span className="text-xs text-center text-gray-600 font-medium leading-tight group-hover:text-yellow-700 transition-colors">{ind.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* RIGHT — Testimonial Slider */}
            <div>
              <p className="text-yellow-600 text-xs font-semibold tracking-[3px] uppercase mb-2">What Our Clients Say</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Trusted by Hundreds of Clients</h2>
              <div className="border border-gray-200 rounded-2xl p-8 relative min-h-[220px]">
                <div className="text-yellow-500 text-6xl font-serif leading-none mb-4" style={{fontFamily:'Georgia,serif'}}>"</div>
                <p className="text-gray-700 text-base leading-relaxed mb-6">{testimonials[tIdx].text}</p>
                <p className="text-gray-800 font-semibold text-sm">– {testimonials[tIdx].role}</p>
                <p className="text-gray-400 text-sm mt-0.5">{testimonials[tIdx].location}</p>
                <div className="flex gap-2 mt-6">
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => setTIdx(i)} className={`w-3 h-3 rounded-full transition-all duration-300 ${tIdx === i ? 'bg-yellow-500 w-6' : 'bg-gray-300'}`} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

 {/* ========= SERVICE CITIES ========= */}
      <section className="py-14 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Serving Clients Across India</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {cities.map((c, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 rounded-full bg-yellow-500 shrink-0" />
                <span className="text-sm">{c}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 text-yellow-400">
              <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
              <span className="text-sm font-semibold">Expanding Internationally 🌏</span>
            </div>
          </div>
        </div>
      </section>

      
      
      {/* ========= STATS ========= */}
      {/* <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-4 py-6 px-4 border-r last:border-r-0 border-gray-100">
              <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center shrink-0">
                <s.Icon size={22} className="text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600 leading-tight">
                  {s.num === '∞' ? '∞' : <Counter target={s.num} />}
                </div>
                <div className="text-gray-500 text-xs mt-0.5 leading-snug">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

     
   


   



     
    </div>
  );
}
