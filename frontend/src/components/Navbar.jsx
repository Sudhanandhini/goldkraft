import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, Clock, Menu, X, ChevronDown } from "lucide-react";

const solutions = [
  'Bird Netting Systems', 'Bird Wire Systems', 'Bird Spikes',
  'Solar Panel Protection', 'Balcony Bird Proofing', 'Industrial Bird Control',
];

const industries = [
  'Luxury Villas', 'Corporate Offices', 'Hotels & Resorts', 'Hospitals',
  'Shopping Malls', 'Warehouses', 'Factories', 'High-Rise Apartments',
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setMobileSub(''); }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-gray-900 text-gray-300 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <a href="tel:9449065735" className="flex items-center gap-1.5 hover:text-yellow-500 transition-colors">
              <Phone size={12} className="text-yellow-600" />
              <span>94490 65735</span>
            </a>
            <a href="mailto:sales@goldkraft.in" className="flex items-center gap-1.5 hover:text-yellow-500 transition-colors">
              <Mail size={12} className="text-yellow-600" />
              <span>sales@goldkraft.in</span>
            </a>
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-yellow-600" />
              <span>Mon–Sat: 9:00–19:00</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-xs">Bengaluru | Commercial & Residential Bird Control</span>

          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-lg">G</div>
              <div>
                <div className="font-serif font-bold text-lg md:text-xl leading-tight">
                  <span className="text-yellow-600">GOLD</span><span className="text-gray-900">KRAFT</span>
                </div>
                <div className="text-xs text-gray-500 tracking-widest uppercase">Enterprises</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
              <NavLink to="/" className={({isActive}) => `nav-link text-gray-700 hover:text-yellow-600 transition-colors pb-1 ${isActive ? 'text-yellow-600' : ''}`}>Home</NavLink>
              <NavLink to="/about" className={({isActive}) => `nav-link text-gray-700 hover:text-yellow-600 transition-colors pb-1 ${isActive ? 'text-yellow-600' : ''}`}>About Us</NavLink>

              <NavLink to="/solutions" className={({isActive}) => `nav-link text-gray-700 hover:text-yellow-600 transition-colors pb-1 ${isActive ? 'text-yellow-600' : ''}`}>Solutions</NavLink>
              <NavLink to="/industries" className={({isActive}) => `nav-link text-gray-700 hover:text-yellow-600 transition-colors pb-1 ${isActive ? 'text-yellow-600' : ''}`}>Industries</NavLink>

              <NavLink to="/projects" className={({isActive}) => `nav-link text-gray-700 hover:text-yellow-600 transition-colors pb-1 ${isActive ? 'text-yellow-600' : ''}`}>Projects</NavLink>
              <NavLink to="/contact" className={({isActive}) => `nav-link text-gray-700 hover:text-yellow-600 transition-colors pb-1 ${isActive ? 'text-yellow-600' : ''}`}>Contact</NavLink>
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/contact" className="btn-dark text-xs px-5 py-2.5">Schedule Inspection</Link>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2 text-gray-700" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-4">
            <div className="flex flex-col gap-1">
              <NavLink to="/" className="py-2.5 px-3 text-gray-700 hover:text-yellow-600 font-medium border-b border-gray-50">Home</NavLink>
              <NavLink to="/about" className="py-2.5 px-3 text-gray-700 hover:text-yellow-600 font-medium border-b border-gray-50">About Us</NavLink>
              <NavLink to="/solutions" className="py-2.5 px-3 text-gray-700 hover:text-yellow-600 font-medium border-b border-gray-50">Solutions</NavLink>
              <NavLink to="/industries" className="py-2.5 px-3 text-gray-700 hover:text-yellow-600 font-medium border-b border-gray-50">Industries</NavLink>
              <NavLink to="/projects" className="py-2.5 px-3 text-gray-700 hover:text-yellow-600 font-medium border-b border-gray-50">Projects</NavLink>
              <NavLink to="/contact" className="py-2.5 px-3 text-gray-700 hover:text-yellow-600 font-medium border-b border-gray-50">Contact</NavLink>
              <Link to="/contact" className="mt-3 btn-dark text-center text-sm py-3">Schedule Inspection</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
