import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6 bg-white p-2 rounded-lg inline-block">
              <img 
                src="https://media.licdn.com/dms/image/v2/C561BAQFQpdaW2o8C7g/company-background_10000/company-background_10000/0/1606950018234/grace_insurance_agency_inc_cover?e=1774353600&v=beta&t=QTTVccjv7INdAIl49tm1_SIJOg-3qw9Ofqj_Z0jakSc" 
                alt="Grace Insurance Logo" 
                referrerPolicy="no-referrer"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Serving Texas with integrity and excellence. We bridge the gap between you and top-rated carriers to secure your future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Jince Madamana</Link></li>
              <li><Link to="/services/personal" className="hover:text-secondary transition-colors">Personal Insurance</Link></li>
              <li><Link to="/services/commercial" className="hover:text-secondary transition-colors">Commercial Insurance</Link></li>
              <li><Link to="/services/wealth" className="hover:text-secondary transition-colors">Wealth & Retirement</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-secondary shrink-0" />
                <span>6246 Broadway Blvd, Suite 100,<br />Garland, TX 75043</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-secondary" />
                <a href="tel:9724604144" className="hover:text-secondary">(972) 460-4144</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-secondary" />
                <a href="mailto:info@graceinsuranceusa.com" className="hover:text-secondary">info@graceinsuranceusa.com</a>
              </li>
            </ul>
          </div>

          {/* Social & License */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.linkedin.com/company/grace-insurance-agency-inc/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="text-xs text-slate-400">
              Licensed in Texas<br />
              Grace Affordable Insurance Agency Inc.
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Grace Insurance USA. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
