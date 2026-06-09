import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Calculator, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">GPC Bookkeeping</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Professional bookkeeping services helping Arizona businesses maintain accurate financial records and make informed decisions.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-700 p-2 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                <Mail className="h-4 w-4" />
              </div>
              <div className="bg-blue-700 p-2 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                <Phone className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Monthly Bookkeeping</li>
              <li className="hover:text-white transition-colors cursor-pointer">Financial Reporting</li>
              <li className="hover:text-white transition-colors cursor-pointer">Payroll Management</li>
              <li className="hover:text-white transition-colors cursor-pointer">QuickBooks Setup</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>(602) 888-2841</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>info@gpcbookkeeping.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>Serving All of Arizona</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold mb-2">Business Hours</h4>
              <div className="text-sm text-gray-400 space-y-1">
                <div>Monday - Friday: 9AM - 5PM MST</div>
                <div>Saturday: 10AM - 2PM MST</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} GPC Bookkeeping. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Professional bookkeeping services for Arizona businesses
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
