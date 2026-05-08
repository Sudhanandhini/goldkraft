import { Link } from 'react-router-dom';
import { CheckCircle2, Shield, ArrowRight } from 'lucide-react';

const values = [
  { title: 'Quality', icon: '🎯', desc: 'Quality is achieved through carefully selected partners, consumables, well-maintained equipment, and engineering expertise, following international standards.' },
  { title: 'Customer Satisfaction', icon: '🤝', desc: 'Customer satisfaction is measured constantly and we encourage an open dialogue with all our customers. Feedback and proposals on the service and products are the best means for improvements.' },
  { title: 'Supply Security', icon: '🛡️', desc: 'Supply security is achieved by constant control of all partners in the supply and service chain. We are devoted to having our customers finish their projects on time or even ahead of schedule.' },
];

const team = [
  { name: 'Rajesh Kumar', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=70' },
  { name: 'Priya Sharma', role: 'Operations Head', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=70' },
  { name: 'Suresh M.', role: 'Technical Lead', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=70' },
  { name: 'Anitha K.', role: 'Client Relations', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=70' },
];

export default function About() {
  return (
    <div>
      {/* Page Banner */}
      <section className="relative h-64 bg-gray-900 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=70" alt="About" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
          <p className="text-yellow-500 text-xs font-semibold tracking-[3px] uppercase mb-3">Who We Are</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">About Us</h1>
          <div className="flex items-center gap-2 mt-3 text-gray-400 text-sm">
            <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-yellow-500">About Us</span>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-yellow-600 text-xs font-semibold tracking-[3px] uppercase mb-2">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-3">Who We Are</h2>
            <div className="w-12 h-0.5 bg-yellow-600 mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              We Goldkraft Enterprises are Environmental friendly Pigeon Control Services and Solutions providers. Suppliers and Service providers of various Bird Control Products & Specialists in Industrial & Commercial Pigeon Control.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Driven by the passion to provide pigeon control solutions that are safe for humans, birds, and the environment we Goldkraft Enterprises have been helping individual and corporate clients to end the hazards of birds and bird droppings. We are offering a broad spectrum of advanced bird control solutions in India.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are a leading bird management company providing products & services like Anti bird netting, bird deterrent gel, Anti bird spikes, Bird repellent wire system and many more. Our team is experienced in surveying and giving the right solutions with a proven track record. Our team follows all the safety protocols.
            </p>
            <div className="space-y-2">
              {['Eco-friendly & humane solutions', 'Experienced installation teams', 'Customized site-specific solutions', 'Pan India service coverage'].map(p => (
                <div key={p} className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle2 size={16} className="text-yellow-600 shrink-0" />
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80" alt="Who We Are" className="w-full h-[450px] object-cover shadow-lg" />
            <div className="absolute -bottom-6 -left-6 bg-yellow-600 text-white p-6 shadow-xl">
              <div className="font-serif text-4xl font-bold">8+</div>
              <div className="text-sm font-medium mt-1">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-14">
          <p className="text-yellow-600 text-xs font-semibold tracking-[3px] uppercase mb-2">Our Purpose</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <div className="w-12 h-0.5 bg-yellow-600 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            At Goldkraft, our passion is to save our customers' time at every step — procurement, production, Service and Delivery. That includes the highest quality at the fastest speed. For that, we are dedicated to high work quality, customer satisfaction, and supply security.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-8 border border-gray-100 hover:border-yellow-300 hover:shadow-lg transition-all duration-300 group">
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-700 transition-colors">{v.title}</h3>
              <div className="w-8 h-0.5 bg-yellow-600 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-yellow-600 text-xs font-semibold tracking-[3px] uppercase mb-2">Our Work In Action</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900">Installation Gallery</h2>
            <div className="w-12 h-0.5 bg-yellow-600 mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=70',
              'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=70',
              'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=70',
              'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&q=70',
              'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=70',
              'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=70',
              'https://images.unsplash.com/photo-1581093458791-9e88c0647d87?w=400&q=70',
              'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&q=70',
            ].map((img, i) => (
              <div key={i} className="overflow-hidden group">
                <img src={img} alt={`Gallery ${i+1}`} className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Ready to Protect Your Property?</h2>
          <p className="text-gray-400 mb-8">Get a free site inspection and customized solution proposal from our experts.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-3.5 uppercase text-sm tracking-wider transition-all duration-300 inline-flex items-center gap-2">
              Schedule Inspection <ArrowRight size={16}/>
            </Link>
            <Link to="/solutions" className="border border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-500 font-semibold px-8 py-3.5 uppercase text-sm tracking-wider transition-all duration-300">
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
