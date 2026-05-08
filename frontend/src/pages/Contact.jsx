import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', property: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Banner */}
      <section className="relative h-64 bg-gray-900 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=70" alt="Contact" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
          <p className="text-yellow-500 text-xs font-semibold tracking-[3px] uppercase mb-3">Get In Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
          <div className="flex items-center gap-2 mt-3 text-gray-400 text-sm">
            <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-yellow-500">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14">
          {/* Left: Info */}
          <div>
            <p className="text-yellow-600 text-xs font-semibold tracking-[3px] uppercase mb-2">Reach Us</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">We'd Love to Hear From You</h2>
            <div className="w-12 h-0.5 bg-yellow-600 mb-6" />
            <p className="text-gray-600 leading-relaxed mb-8">
              Get in touch with our team for a free site inspection and quotation. We serve Bengaluru and surrounding areas, with pan-India coverage for large projects.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-yellow-50 border border-yellow-200 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-yellow-600"/>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-0.5">Phone / WhatsApp</div>
                  <a href="tel:9449065735" className="text-gray-600 hover:text-yellow-600 transition-colors">94490 65735</a><br/>
                  <a href="tel:08042126797" className="text-gray-600 hover:text-yellow-600 transition-colors">080-42126797</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-yellow-50 border border-yellow-200 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-yellow-600"/>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-0.5">Email</div>
                  <a href="mailto:sales@goldkraft.in" className="text-gray-600 hover:text-yellow-600 transition-colors">sales@goldkraft.in</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-yellow-50 border border-yellow-200 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-yellow-600"/>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-0.5">Address</div>
                  <p className="text-gray-600">No. 4, 1st Cross, 2nd Stage,<br/>Peenya Industrial Area,<br/>Bengaluru – 560058</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-yellow-50 border border-yellow-200 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-yellow-600"/>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-0.5">Business Hours</div>
                  <p className="text-gray-600">Mon – Fri: 9:00 AM – 7:00 PM<br/>Saturday: 9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-100 h-60 flex items-center justify-center border border-gray-200 overflow-hidden">
              <iframe
                title="Goldkraft Location"
                src="https://maps.google.com/maps?q=Peenya+Industrial+Area+Bengaluru&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="bg-gray-50 border border-gray-100 p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Schedule a Free Inspection</h3>
              <div className="w-10 h-0.5 bg-yellow-600 mb-6" />

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 size={56} className="text-green-500 mx-auto mb-4"/>
                  <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600">Your enquiry has been received. Our team will contact you within 24 hours to schedule your free site inspection.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5 block">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required type="text" placeholder="Your Name" className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5 block">Phone *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required type="tel" placeholder="Mobile Number" className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5 block">Email</label>
                    <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email Address" className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5 block">Property Type</label>
                    <select name="property" value={form.property} onChange={handleChange} className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 focus:outline-none focus:border-yellow-500 transition-colors">
                      <option value="">Select Property Type</option>
                      <option>Luxury Villa</option>
                      <option>Corporate Office</option>
                      <option>Hotel / Resort</option>
                      <option>Hospital</option>
                      <option>Shopping Mall</option>
                      <option>Warehouse</option>
                      <option>Factory</option>
                      <option>Residential Apartment</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5 block">Your Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Describe your bird problem, location, area size..." className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-gray-900 hover:bg-yellow-600 text-white font-semibold py-4 uppercase text-sm tracking-wider transition-all duration-300">
                    Submit Enquiry →
                  </button>
                  <p className="text-xs text-gray-400 text-center">We'll respond within 24 hours with a free quote</p>
                </form>
              )}
            </div>

            {/* WhatsApp shortcut */}
            <a href="https://wa.me/919449065735" target="_blank" rel="noreferrer" className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 uppercase text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-3">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
