import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const industries = [
  {
    icon: '🏠',
    title: 'Luxury Villas',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=70',
    desc: 'Premium bird proofing solutions for luxury residential properties that protect the aesthetic appeal while ensuring complete bird exclusion. Our low-visibility systems blend seamlessly with high-end architecture.',
    challenges: ['Maintaining architectural aesthetics', 'Pigeon nesting on balconies', 'Bird droppings on facades', 'Roof garden protection'],
    solutions: ['Bird wire systems', 'Transparent netting', 'Balcony proofing', 'Custom installations'],
  },
  {
    icon: '🏢',
    title: 'Corporate Offices',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=70',
    desc: 'Maintain a professional image and hygienic environment for your corporate offices with our discrete bird control solutions that don\'t interfere with the building\'s visual identity.',
    challenges: ['Professional image maintenance', 'Health & hygiene compliance', 'AC unit contamination', 'Facade damage'],
    solutions: ['Bird netting systems', 'Wire deterrents', 'Spike systems', 'Acoustic deterrents'],
  },
  {
    icon: '🏨',
    title: 'Hotels & Resorts',
    img: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=70',
    desc: 'Protect your guests\' experience and your property\'s reputation with effective bird management that remains invisible. Perfect for poolside areas, outdoor dining, and hotel rooftops.',
    challenges: ['Guest experience protection', 'Restaurant & pool areas', 'Outdoor event spaces', 'Kitchen hygiene'],
    solutions: ['Invisible mesh systems', 'Wire deterrents', 'Sonic systems', 'Gel applications'],
  },
  {
    icon: '🏥',
    title: 'Hospitals',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=70',
    desc: 'Critical hygiene requirements in healthcare facilities demand zero-tolerance bird control. We provide medical-grade bird exclusion solutions that meet healthcare compliance standards.',
    challenges: ['Infection control requirements', 'HVAC system protection', 'Patient area hygiene', 'Medical waste contamination risk'],
    solutions: ['Complete exclusion netting', 'Roof protection systems', 'HVAC protection', 'Full perimeter control'],
  },
  {
    icon: '🏬',
    title: 'Shopping Malls',
    img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=70',
    desc: 'Ensure a pleasant shopping experience by keeping bird-free food courts, entrances, and open areas. Our solutions handle large commercial spaces with minimal disruption.',
    challenges: ['Food court contamination', 'Customer experience', 'Large open atria', 'Car park areas'],
    solutions: ['Large-area netting', 'Entry point protection', 'Atrium exclusion', 'Perimeter systems'],
  },
  {
    icon: '🏗️',
    title: 'Warehouses',
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=70',
    desc: 'Industrial warehouses require robust bird control solutions that withstand heavy-duty environments while protecting stored goods from contamination and damage.',
    challenges: ['Product contamination', 'Loading dock protection', 'High ceiling areas', 'Fire safety compliance'],
    solutions: ['Heavy-duty netting', 'Industrial spike systems', 'Shock track systems', 'Ultrasonic deterrents'],
  },
  {
    icon: '🏭',
    title: 'Factories',
    img: 'https://images.unsplash.com/photo-1581093458791-9e88c0647d87?w=600&q=70',
    desc: 'Manufacturing facilities need bird control that complies with food safety and quality standards. Our factory solutions are designed for challenging industrial environments.',
    challenges: ['Production line contamination', 'Regulatory compliance', 'Machinery protection', 'Worker safety'],
    solutions: ['Food-grade netting', 'Industrial exclusion systems', 'Machinery guards', 'Perimeter control'],
  },
  {
    icon: '🏙️',
    title: 'High-Rise Apartments',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=70',
    desc: 'Comprehensive bird proofing for multi-story residential complexes that addresses common area, individual balcony, and rooftop bird problems.',
    challenges: ['Multiple balcony access points', 'Common area management', 'Rooftop garden protection', 'Resident concerns'],
    solutions: ['Individual balcony nets', 'Common area protection', 'Rooftop exclusion', 'Wire systems'],
  },
];

export default function Industries() {
  return (
    <div>
      {/* Banner */}
      <section className="relative h-64 bg-gray-900 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=70" alt="Industries" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
          <p className="text-yellow-500 text-xs font-semibold tracking-[3px] uppercase mb-3">We Serve</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Industries We Serve</h1>
          <div className="flex items-center gap-2 mt-3 text-gray-400 text-sm">
            <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-yellow-500">Industries</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Bird Control Across All Property Types</h2>
          <div className="w-12 h-0.5 bg-yellow-600 mx-auto mb-6" />
          <p className="text-gray-600 leading-relaxed">
            Goldkraft Enterprises serves a wide range of industries across Karnataka and India. Our team of experts understands the unique challenges each property type faces and delivers custom bird control solutions that are effective, aesthetic, and compliant with relevant standards.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, i) => (
            <div key={i} className="border border-gray-100 hover:border-yellow-300 hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="h-52 overflow-hidden relative">
                <img src={ind.img} alt={ind.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-yellow-600 text-white text-2xl w-12 h-12 flex items-center justify-center rounded">{ind.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{ind.title}</h3>
                <div className="w-8 h-0.5 bg-yellow-600 mb-3" />
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{ind.desc}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider mb-2">Challenges</h4>
                    <ul className="space-y-1">
                      {ind.challenges.map((c, j) => (
                        <li key={j} className="text-xs text-gray-500 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-red-400 shrink-0" />{c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider mb-2">Our Solutions</h4>
                    <ul className="space-y-1">
                      {ind.solutions.map((s, j) => (
                        <li key={j} className="text-xs text-gray-500 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-yellow-500 shrink-0" />{s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-1.5 text-yellow-600 text-xs font-semibold uppercase tracking-wider hover:gap-3 transition-all">
                  Get Solution <ArrowRight size={13}/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Don't See Your Industry?</h2>
          <p className="text-gray-400 mb-8">We serve many more property types. Contact us for a customized bird control assessment.</p>
          <Link to="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-3.5 uppercase text-sm tracking-wider transition-all duration-300 inline-flex items-center gap-2">
            Contact Us <ArrowRight size={15}/>
          </Link>
        </div>
      </section>
    </div>
  );
}
