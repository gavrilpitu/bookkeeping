import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Calculator } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const headerHeight = 64;
    const scrollTo = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollTo(sectionId), 150);
    } else {
      scrollTo(sectionId);
    }
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setIsMenuOpen(false);
  };

  const handlePricingClick = () => {
    if (location.pathname === '/pricing') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/pricing');
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Calculator className="h-8 w-8 text-blue-700" />
            <span className="text-xl font-bold text-gray-900">GPC Bookkeeping</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={handleHomeClick}
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={handlePricingClick}
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('service-areas')}
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              Service Areas
            </button>
            <a
              href="https://calendly.com/gavril-gpcbookkeeping/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium"
            >
              Get Started — 5 Spots Left
            </a>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={handleHomeClick}
                className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Services
              </button>
              <button
                onClick={handlePricingClick}
                className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('service-areas')}
                className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Service Areas
              </button>
              <a
                href="https://calendly.com/gavril-gpcbookkeeping/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white block px-3 py-2 text-base font-medium w-full text-left rounded-lg hover:bg-blue-800"
              >
                Get Started — 5 Spots Left
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
