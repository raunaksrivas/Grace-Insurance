import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Personal', path: '/services/personal' },
    { name: 'Commercial', path: '/services/commercial' },
    { name: 'Wealth', path: '/services/wealth' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-sm ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://media.licdn.com/dms/image/v2/C561BAQFQpdaW2o8C7g/company-background_10000/company-background_10000/0/1606950018234/grace_insurance_agency_inc_cover?e=1774353600&v=beta&t=QTTVccjv7INdAIl49tm1_SIJOg-3qw9Ofqj_Z0jakSc" 
              alt="Grace Insurance Logo" 
              referrerPolicy="no-referrer"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-secondary ${
                  location.pathname === link.path 
                    ? 'text-secondary border-b-2 border-secondary' 
                    : 'text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:9724604144" className="flex items-center text-secondary font-black bg-primary/10 px-4 py-2 rounded-full">
              <Phone className="w-4 h-4 mr-2" />
              (972) 460-4144
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-primary hover:text-secondary"
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:9724604144" className="block px-3 py-2 text-base font-bold text-secondary">
                Call: (972) 460-4144
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
