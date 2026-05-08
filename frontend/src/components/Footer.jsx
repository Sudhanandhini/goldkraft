import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import bannerImage from '../assets/slider-1.webp';

const SocialIcon = ({ children, href }) => (
  <a href={href} className="w-8 h-8 bg-gray-700 hover:bg-yellow-600 flex items-center justify-center transition-colors rounded text-sm">
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* CTA Banner */}
      <div className="bg-yellow-600 py-10 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: `url(${bannerImage})`, backgroundSize: "cover", backgroundPosition: "center"}}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <p className="text-white text-sm font-medium italic mb-1">Have Any Question!</p>
            <h3 className="text-white text-2xl md:text-3xl  font-bold">DON'T HESITATE TO CONTACT US ANY TIME.</h3>
          </div>
          <div className="flex gap-3">
            <Link to="/contact" className="bg-white text-yellow-700 font-semibold px-8 py-3 hover:bg-gray-900 hover:text-white transition-all duration-300 uppercase tracking-wider text-sm">
              Contact Us
            </Link>
            {/* <a href="https://wa.me/919449065735" target="_blank" rel="noreferrer" className="bg-green-500 text-white font-semibold px-6 py-3 hover:bg-green-600 transition-all duration-300 uppercase tracking-wider text-sm">
              WhatsApp Us
            </a> */}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">G</div>
              <div>
                <div className=" font-bold text-base"><span className="text-yellow-500">GOLD</span><span className="text-white">KRAFT</span></div>
                <div className="text-xs text-gray-500 tracking-widest uppercase">Enterprises</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              We provide eco-friendly, effective and aesthetic bird control solutions for commercial, industrial and residential properties.
            </p>
            <div className="flex gap-3 mt-4">
              <SocialIcon href="#">in</SocialIcon>
              <SocialIcon href="#">ig</SocialIcon>
              <SocialIcon href="#">fb</SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-yellow-600 inline-block pr-8">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[['Home','/'],['About Us','/about'],['Solutions','/solutions'],['Industries','/industries'],['Projects','/projects'],['Contact','/contact']].map(([l,p]) => (
                <li key={l}><Link to={p} className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center gap-2 group"><span className="text-yellow-600 group-hover:translate-x-1 transition-transform">›</span>{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-yellow-600 inline-block pr-8">Solutions</h4>
            <ul className="space-y-2 text-sm">
              {['Bird Netting Systems','Bird Wire Systems','Bird Spikes','Solar Panel Protection','Balcony Bird Proofing','Industrial Bird Control'].map(s => (
                <li key={s}><Link to="/solutions" className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center gap-2 group"><span className="text-yellow-600 group-hover:translate-x-1 transition-transform">›</span>{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-yellow-600 inline-block pr-8">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-yellow-600 mt-0.5 shrink-0"/>
                <div>
                  <a href="tel:9449065735" className="text-gray-400 hover:text-yellow-500 transition-colors block">94490 65735</a>
                  <a href="tel:08042126797" className="text-gray-400 hover:text-yellow-500 transition-colors block">080-42126797</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-yellow-600 mt-0.5 shrink-0"/>
                <a href="mailto:sales@goldkraft.in" className="text-gray-400 hover:text-yellow-500 transition-colors">sales@goldkraft.in</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-yellow-600 mt-0.5 shrink-0"/>
                <span className="text-gray-400">No. 4, 1st Cross, 2nd Stage, Peenya Industrial Area, Bengaluru – 560058</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© 2024 Goldkraft Enterprises. All Rights Reserved. Crafted by Sunsys Technologies Pvt Ltd.</p>
          <div className="flex gap-4">
            <Link to="/contact" className="hover:text-yellow-500 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-yellow-500 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
