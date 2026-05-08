import { Link } from 'react-router-dom';
import { Shield, CheckCircle2, Star, ArrowRight, Phone, ChevronRight, ChevronLeft, Building2, Hotel, Building, Activity, ShoppingCart, Warehouse, Factory, Layers } from 'lucide-react';
import { useState, useEffect } from 'react';

const heroSlides = [
  {
    bg: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80',
    tag: 'HUMANE. EFFECTIVE. AESTHETIC.',
    title: 'Eco-Friendly Bird Control Solutions for Premium Spaces',
    sub: 'Protecting luxury villas, commercial buildings, hotels, hospitals and industrial facilities with aesthetic and long-lasting bird proofing systems.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80',
    tag: '100% ECO FRIENDLY SOLUTIONS',
    title: 'Bird Proofing Solutions That Protect Without Harm',
    sub: 'Suppliers and service providers of various bird control products & specialists in industrial & commercial pigeon control.',
  },
];

const clients = ['HAL', 'Srishaila Constructions', 'Prestige', 'Phoenix MarketCity', 'Park & Garage', 'Mantri', 'Brigade', 'TAJ', 'Columbia Asia'];

const stats = [
  { num: '500+', label: 'Projects Completed' },
  { num: '8+', label: 'Years Experience' },
  { num: '100%', label: 'Eco-Friendly Solutions' },
  { num: '50+', label: 'Corporate Clients' },
];

const solutions = [
  { title: 'Bird Netting Systems', desc: 'Low-visibility UV stabilized nets to prevent birds from entering open spaces.', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=70', icon: '🕸️' },
  { title: 'Bird Wire Systems', desc: 'Low visibility stainless steel wire systems for ledges, facades & beams.', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=70', icon: '〰️' },
  { title: 'Bird Spikes', desc: 'Durable spike systems that prevent birds from landing on ledges & surfaces.', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=70', icon: '⚡' },
  { title: 'Solar Panel Protection', desc: 'Protect solar panels from birds nesting & damaging netting.', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=70', icon: '☀️' },
  { title: 'Balcony Bird Proofing', desc: 'Discreet solutions to keep balconies clean, safe & bird-free.', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=70', icon: '🏠' },
  { title: 'Industrial Bird Control', desc: 'Effective bird control for industrial units, warehouses & factories.', img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&q=70', icon: '🏭' },
];

const industries = [
  { icon: Building2, label: 'Luxury Villas' },
  { icon: Building, label: 'Corporate Offices' },
  { icon: Hotel, label: 'Hotels & Resorts' },
  { icon: Activity, label: 'Hospitals' },
  { icon: ShoppingCart, label: 'Shopping Malls' },
  { icon: Warehouse, label: 'Warehouses' },
  { icon: Factory, label: 'Factories' },
  { icon: Layers, label: 'High-Rise Apartments' },
];

const features = [
  { icon: '👁️', title: 'Minimal Visual Impact', desc: 'Systems designed to blend with modern architecture.' },
  { icon: '🌿', title: 'Eco-Friendly Solutions', desc: 'Safe for birds, humans, and the environment.' },
  { icon: '🔩', title: 'Durable Materials', desc: 'Premium materials built for long-term performance.' },
  { icon: '📍', title: 'Site-Specific Installations', desc: 'Custom solutions for each unique property.' },
  { icon: '✅', title: 'Suitable for Premium Architecture', desc: 'Aesthetic-first approach for luxury spaces.' },
];

const whyUs = [
  { icon: '🌿', title: 'Eco-Friendly Systems' },
  { icon: '👷', title: 'Professional Installation Teams' },
  { icon: '🗺️', title: 'Customized Site Surveys' },
  { icon: '⏳', title: 'Long-Term Durability' },
  { icon: '👁️', title: 'Minimal Architectural Impact' },
  { icon: '🏢', title: 'Reliable Commercial Solutions' },
];

const testimonials = [
  { name: 'Ramesh N.', role: 'Villa Owner, Bengaluru', text: 'Excellent service and very professional team. Our villa looks clean and beautiful now.', rating: 5 },
  { name: 'Anita Sharma', role: 'Hotel Manager', text: 'Goldkraft provided the best solution for our hotel. No more birds and no mess!', rating: 5 },
  { name: 'Suresh B.', role: 'Facility Manager', text: 'Very reliable team. They understood commercial requirements well and delivered on time.', rating: 5 },
  { name: 'Arvind Kumar', role: 'Apartment Association', text: 'Quality materials and neat installation. Highly recommended for residential complexes.', rating: 5 },
];

const projects = [
  { cat: 'Residential', title: 'Luxury Villa – Whitefield, Bengaluru', type: 'Bird Wire System', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=70', desc: 'Low-visibility bird wire solution preserving facade aesthetics while eliminating pigeon nesting on all balconies and rooftop edges.' },
  { cat: 'Commercial', title: 'Corporate Office – Hyderabad', type: 'Anti Bird Netting', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=70', desc: 'Custom bird proofing for high-rise facade protection with minimal visual impact. Full floor coverage netting installation.' },
  { cat: 'Industrial', title: 'Warehouse – Electronic City', type: 'Industrial Netting', img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=70', desc: 'Industrial bird control system for hygiene compliance and operational safety across 50,000 sq.ft warehouse facility.' },
  { cat: 'Hospitality', title: 'TAJ Hotel – MG Road', type: 'Bird Wire System', img: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=70', desc: 'Discrete bird wire installation to protect the iconic hotel facade while maintaining the heritage architectural aesthetics.' },
  { cat: 'Residential', title: 'Brigade Apartments – Sarjapur', type: 'Balcony Netting', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=70', desc: 'Complete balcony bird proofing for 250+ apartments in a luxury residential complex using UV-stabilized transparent nets.' },
  { cat: 'Commercial', title: 'HAL – Aerospace Plant', type: 'Industrial Netting', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=70', desc: 'Large-scale bird exclusion for HAL aerospace manufacturing plant ensuring production hygiene and regulatory compliance.' },
  { cat: 'Industrial', title: 'Solar Farm – Tumkur', type: 'Solar Panel Protection', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=70', desc: 'Specialized bird mesh installation protecting 2MW solar panel array from bird nesting, increasing panel efficiency.' },
  { cat: 'Hospitality', title: 'Columbia Asia Hospital', type: 'Complete Bird Exclusion', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=70', desc: 'Medical-grade bird exclusion system across HVAC units, rooftop, and critical areas meeting hospital hygiene standards.' },
  { cat: 'Commercial', title: 'Prestige Exora – ITPL', type: 'Bird Spike System', img: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=70', desc: 'Comprehensive anti-bird spike installation across parking areas, parapet walls and canopy edges of tech campus.' },
];

const cities = ['Hyderabad', 'Chennai', 'Mysuru', 'Coimbatore', 'Mangalore', 'And Many More'];

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
      <section className="relative h-[85vh] min-h-[560px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${h.bg})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full grid md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div className="text-white">
              <span className="text-yellow-500 text-xs font-semibold tracking-[3px] uppercase mb-4 block animate-fadeInUp">{h.tag}</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 animate-fadeInUp delay-100">{h.title}</h1>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 max-w-lg animate-fadeInUp delay-200">{h.sub}</p>
              <div className="flex flex-wrap gap-4 animate-fadeInUp delay-300">
                <Link to="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-7 py-3.5 uppercase text-sm tracking-wider transition-all duration-300 flex items-center gap-2">
                  Schedule Site Inspection <ArrowRight size={16}/>
                </Link>
                <Link to="/projects" className="border border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-7 py-3.5 uppercase text-sm tracking-wider transition-all duration-300 flex items-center gap-2">
                  View Our Projects <ArrowRight size={16}/>
                </Link>
              </div>
            </div>

            {/* Quick Enquiry Form */}
            <div className="hidden md:block">
              <div className="bg-white rounded-sm shadow-2xl p-7 max-w-sm ml-auto">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Quick Enquiry</h3>
                <div className="w-8 h-0.5 bg-yellow-600 mb-5"></div>
                <div className="space-y-3">
                  <input type="text" placeholder="Your Name" className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-500 transition-colors" />
                  <input type="tel" placeholder="Mobile Number" className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-500 transition-colors" />
                  <select className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-500 focus:outline-none focus:border-yellow-500 transition-colors">
                    <option value="">Property Type</option>
                    <option>Luxury Villa</option>
                    <option>Corporate Office</option>
                    <option>Hotel/Resort</option>
                    <option>Hospital</option>
                    <option>Warehouse/Factory</option>
                    <option>Residential Apartment</option>
                    <option>Other</option>
                  </select>
                  <textarea placeholder="Your Message" rows={3} className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-500 transition-colors resize-none" />
                  <button className="w-full bg-gray-900 hover:bg-yellow-600 text-white font-semibold py-3 uppercase text-sm tracking-wider transition-all duration-300">
                    Submit Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} className={`w-8 h-1 transition-all duration-300 ${slide === i ? 'bg-yellow-500' : 'bg-white/40'}`} />
          ))}
        </div>
      </section>

      {/* ========= CLIENTS STRIP ========= */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-xs font-semibold tracking-[3px] uppercase text-gray-500 mb-6">Trusted By Commercial, Industrial & Residential Clients</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {clients.map(c => (
              <div key={c} className="text-gray-400 font-semibold text-sm hover:text-yellow-600 transition-colors cursor-default tracking-wider">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= STATS ========= */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center py-6 border-r last:border-r-0 border-gray-100">
              <div className="text-4xl font-bold text-yellow-600 mb-1"><Counter target={s.num} /></div>
              <div className="text-gray-500 text-sm tracking-wider uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========= PROPERTY TYPES ========= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[3px] uppercase text-yellow-600 mb-2">Solutions Designed For</p>
            <h2 className="text-3xl font-bold text-gray-900">Every Property Type</h2>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {industries.map((ind, i) => (
              <Link key={i} to="/industries" className="flex flex-col items-center gap-2 p-4 bg-white hover:bg-yellow-50 border border-gray-100 hover:border-yellow-300 transition-all duration-300 rounded group">
                <ind.icon size={32} className="text-gray-600 group-hover:text-yellow-600 transition-colors" />
                <span className="text-xs text-center text-gray-600 font-medium group-hover:text-yellow-700 leading-tight">{ind.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========= SOLUTIONS ========= */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-yellow-500 text-xs font-semibold tracking-[3px] uppercase mb-2">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Specialized Bird Control Solutions</h2>
            <div className="w-12 h-0.5 bg-yellow-600 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <div key={i} className="group relative overflow-hidden card-hover bg-gray-800 rounded-sm">
                <div className="h-48 overflow-hidden">
                  <img src={sol.img} alt={sol.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 border-b-2 border-transparent group-hover:border-yellow-500 transition-all duration-300">
                  <h3 className="text-white font-semibold text-base mb-2">{sol.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{sol.desc}</p>
                  <Link to="/solutions" className="text-yellow-500 text-xs font-semibold uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight size={13}/>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= ARCHITECTURE SECTION ========= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80" alt="Modern Building" className="w-full h-[420px] object-cover shadow-lg" />
          </div>
          <div>
            <p className="text-yellow-600 text-xs font-semibold tracking-[3px] uppercase mb-2">Designed To Protect</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Without Compromising Architecture</h2>
            <div className="w-12 h-0.5 bg-yellow-600 mb-6" />
            <p className="text-gray-600 leading-relaxed mb-8">
              Our low-visibility bird control systems are carefully designed for modern commercial buildings and luxury residences where aesthetics, safety, and long-term performance matter.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-yellow-50 rounded flex items-center justify-center text-base shrink-0">{f.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{f.title}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 bg-gray-900 hover:bg-yellow-600 text-white font-semibold px-7 py-3 uppercase text-sm tracking-wider transition-all duration-300">
              Learn More <ArrowRight size={15}/>
            </Link>
          </div>
        </div>
      </section>

      {/* ========= FEATURED PROJECTS ========= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-yellow-600 text-xs font-semibold tracking-[3px] uppercase mb-2">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Installations</h2>
            <div className="w-12 h-0.5 bg-yellow-600 mx-auto mt-3" />
          </div>
          <div className="relative">
            <div className="flex items-center justify-center gap-4">
              <button onClick={() => setPIdx((pIdx - 1 + projects.length) % projects.length)} className="absolute left-0 z-10 p-2 bg-white hover:bg-gray-100 rounded-full shadow-lg transition-all">
                <ChevronLeft size={32} className="text-gray-700" />
              </button>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-16">
                {[0, 1, 2].map(offset => {
                  const idx = (pIdx + offset) % projects.length;
                  const p = projects[idx];
                  return (
                    <div key={idx} className="group relative overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 h-80">
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-5">
                        <h3 className="font-semibold text-white text-base mb-2">{p.title}</h3>
                        <p className="text-gray-200 text-xs leading-relaxed mb-3">{p.desc}</p>
                        <Link to="/projects" className="text-yellow-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all w-fit">
                          View Project <ArrowRight size={12}/>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button onClick={() => setPIdx((pIdx + 1) % projects.length)} className="absolute right-0 z-10 p-2 bg-white hover:bg-gray-100 rounded-full shadow-lg transition-all">
                <ChevronRight size={32} className="text-gray-700" />
              </button>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-outline-gold inline-flex items-center gap-2">
              View All Projects <ArrowRight size={15}/>
            </Link>
          </div>
        </div>
      </section>

      {/* ========= WHY GOLDKRAFT ========= */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">Why Leading Properties Choose Goldkraft</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {whyUs.map((w, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-3">{w.icon}</div>
                <div className="text-white font-semibold text-sm">{w.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= TESTIMONIALS ========= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-yellow-600 text-xs font-semibold tracking-[3px] uppercase mb-2">What Clients Say</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Client Feedback</h2>
            <div className="w-12 h-0.5 bg-yellow-600 mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className={`p-6 border transition-all duration-300 ${tIdx === i ? 'border-yellow-400 shadow-lg' : 'border-gray-100 hover:border-yellow-200 hover:shadow-md'}`}>
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={13} className="fill-yellow-500 text-yellow-500"/>)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 font-bold text-sm">{t.name[0]}</div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
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
    </div>
  );
}
