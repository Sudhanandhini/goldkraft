import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Hospitality'];

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

export default function Projects() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active);

  return (
    <div>
      {/* Banner */}
      <section className="relative h-64 bg-gray-900 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1400&q=70" alt="Projects" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
          <p className="text-yellow-500 text-xs font-semibold tracking-[3px] uppercase mb-3">Our Portfolio</p>
          <h1 className=" text-4xl md:text-5xl font-bold text-white">Featured Projects</h1>
          <div className="flex items-center gap-2 mt-3 text-gray-400 text-sm">
            <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-yellow-500">Projects</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-yellow-600 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[['500+','Projects Completed'],['8+','Years Experience'],['50+','Corporate Clients'],['100%','Client Satisfaction']].map(([n,l],i) => (
            <div key={i}>
              <div className=" text-4xl font-bold text-white">{n}</div>
              <div className="text-yellow-100 text-sm mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-6 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${active === c ? 'bg-yellow-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-yellow-50 hover:text-yellow-700'}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <div key={i} className="group overflow-hidden border border-gray-100 hover:border-yellow-300 hover:shadow-xl transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-yellow-600 text-white text-xs font-semibold px-3 py-1 uppercase">{p.cat}</div>
                </div>
                <div className="p-5">
                  <div className="text-yellow-600 text-xs font-semibold uppercase tracking-wider mb-1">{p.type}</div>
                  <h3 className=" text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <Link to="/contact" className="text-yellow-600 text-xs font-semibold uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all">
                    View Details <ArrowRight size={12}/>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className=" text-2xl font-bold text-gray-900 text-center mb-3">Partial Client List</h3>
          <div className="w-12 h-0.5 bg-yellow-600 mx-auto mb-10" />
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {['HAL','Srishaila Constructions','Prestige','Phoenix MarketCity','TAJ Hotels','Columbia Asia','Brigade','Mantri'].map(c => (
              <div key={c} className="bg-white border border-gray-200 px-8 py-5 text-gray-600 font-semibold hover:border-yellow-400 hover:text-yellow-700 transition-all duration-300 hover:shadow-md cursor-default">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className=" text-3xl font-bold text-white mb-4">Have a Bird Problem to Solve?</h2>
          <p className="text-gray-400 mb-8">Let's add your property to our success stories.</p>
          <Link to="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-3.5 uppercase text-sm tracking-wider transition-all duration-300 inline-flex items-center gap-2">
            Get Free Assessment <ArrowRight size={15}/>
          </Link>
        </div>
      </section>
    </div>
  );
}
