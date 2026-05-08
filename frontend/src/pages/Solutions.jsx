import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const products = [
  {
    title: 'Anti Bird Spikes',
    img: 'https://images.unsplash.com/photo-1581093458791-9e88c0647d87?w=600&q=70',
    desc: 'Bird spikes are designed to deter birds from roosting in desirable areas. They have a narrow, flexible base with protruding SS / Polycarbonate spikes. Bird spikes aren\'t designed to hurt birds. In fact, the spikes are blunt, which prevents injury to birds and workers installing them.',
    features: ['Stainless Steel & Polycarbonate options', 'UV resistant material', 'Easy installation', 'Long lasting – 10+ years'],
    applications: ['Ledges & Parapets', 'Roof edges', 'Signage boards', 'AC units'],
  },
  {
    title: 'Bird Wire System',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=70',
    desc: 'A spring-tensioned post and wire system designed to create an unstable landing area that discourages pest birds from landing. Birdwire is a bird control solution that is widely used throughout because it is very low-profile and has minimal visual impact. The Birdwire system is one of the least visible of all ledge products.',
    features: ['Stainless steel wire', 'Spring-tensioned system', 'Low visual profile', 'Suitable for premium facades'],
    applications: ['Building facades', 'Ledges & beams', 'High-rise buildings', 'Heritage structures'],
  },
  {
    title: 'Bird Deterrent Gel',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=70',
    desc: 'Bird Deterrent Gel is a Bird Deterrent Gel made from all Non-Toxic natural ingredients and does not harm any kind of birds, human being or any animal. After application, it creates an unstable surface unacceptable to birds & thus deters their presence.',
    features: ['Non-toxic formula', 'Eco-friendly', 'Long lasting effect', 'Easy application'],
    applications: ['Narrow ledges', 'Window sills', 'AC units', 'Overhead beams'],
  },
  {
    title: 'Anti Bird Nets',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=70',
    desc: 'Anti Bird Nets are UV stabilized, knotted polyethylene nets that provide a physical barrier to prevent birds from accessing protected areas. Available in various mesh sizes to suit different bird species and area requirements.',
    features: ['UV stabilized material', 'Various mesh sizes', 'Lightweight & durable', 'Invisible from distance'],
    applications: ['Warehouses', 'Balconies', 'Open courtyards', 'Agricultural areas'],
  },
  {
    title: 'Bird Shock Tracks',
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=70',
    desc: 'Bird Shock Track system delivers a mild electric shock to birds that land on surfaces. The shock is a mild, harmless deterrent that conditions birds to avoid treated areas. Ideal for large flat surfaces and rooftops.',
    features: ['Mild, safe electric deterrent', 'Solar or AC powered', 'Weather resistant', 'Discreet design'],
    applications: ['Rooftops', 'Flat surfaces', 'HVAC units', 'Industrial plants'],
  },
  {
    title: 'Solar Panel Protection',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=70',
    desc: 'Specialized bird proofing for solar panel arrays. Prevents birds from nesting beneath solar panels, which can cause damage, reduce efficiency, and create hygiene hazards. Custom fitted mesh systems that don\'t affect panel performance.',
    features: ['Panel-specific design', 'No drilling into panels', 'Stainless steel clips', 'Long-lasting protection'],
    applications: ['Residential solar', 'Commercial solar farms', 'Industrial rooftops', 'Schools & hospitals'],
  },
];

export default function Solutions() {
  return (
    <div>
      {/* Banner */}
      <section className="relative h-64 bg-gray-900 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=70" alt="Solutions" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
          <p className="text-yellow-500 text-xs font-semibold tracking-[3px] uppercase mb-3">What We Offer</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Bird Control Solutions</h1>
          <div className="flex items-center gap-2 mt-3 text-gray-400 text-sm">
            <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-yellow-500">Solutions</span>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Our Products & Services</h2>
            <div className="w-12 h-0.5 bg-yellow-600 mx-auto mb-4" />
            <p className="text-gray-500 max-w-xl mx-auto">Comprehensive range of eco-friendly bird control solutions tailored for every property type and bird species.</p>
          </div>

          <div className="space-y-16">
            {products.map((p, i) => (
              <div key={i} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={i % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">{p.title}</h3>
                  <div className="w-10 h-0.5 bg-yellow-600 mb-4" />
                  <p className="text-gray-600 leading-relaxed mb-5 text-sm">{p.desc}</p>
                  <div className="grid grid-cols-2 gap-6 mb-5">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {p.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-2 text-gray-600 text-xs">
                            <CheckCircle2 size={13} className="text-yellow-600 shrink-0" />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-2">Applications</h4>
                      <ul className="space-y-1">
                        {p.applications.map((a, j) => (
                          <li key={j} className="flex items-center gap-2 text-gray-600 text-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0" />{a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-2.5 text-sm uppercase tracking-wider transition-all duration-300">
                    Get Free Quote <ArrowRight size={14}/>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Not Sure Which Solution Is Right For You?</h2>
          <p className="text-yellow-100 mb-8">Our experts will assess your property and recommend the most effective, aesthetically-pleasing solution.</p>
          <Link to="/contact" className="bg-white text-yellow-700 hover:bg-gray-900 hover:text-white font-semibold px-8 py-3.5 uppercase text-sm tracking-wider transition-all duration-300 inline-flex items-center gap-2">
            Schedule Free Inspection <ArrowRight size={15}/>
          </Link>
        </div>
      </section>
    </div>
  );
}
