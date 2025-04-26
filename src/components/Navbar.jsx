import { useState } from 'react';
import { trackEvent } from '../analytics';

function NavBar({ activeSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      trackEvent('Navigation', 'Section Click', sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  const handlePhoneClick = (e) => {
    // Only scroll if not on a touch device (where tel: link would work naturally)
    if (!('ontouchstart' in window)) {
      e.preventDefault();
      scrollToSection('contact');
    }
  };

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'bio', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'FAQ', label: 'FAQ' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div 
            className="flex items-center cursor-pointer focus:outline-none" 
            onClick={() => scrollToSection('hero')}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => e.key === 'Enter' && scrollToSection('hero')}
            aria-label="Return to homepage"
          >
            <i className="fas fa-leaf text-emerald-600 text-2xl mr-2" aria-hidden="true"></i>
            <span className="text-xl font-semibold text-gray-800">Acu Health Clinic</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {sections.map(({ id, label }) => (
              <button 
                key={id}
                onClick={() => scrollToSection(id)}
                className={`${
                  activeSection === id 
                    ? 'text-emerald-600 font-medium' 
                    : 'text-gray-600'
                } hover:text-emerald-600 transition px-3 py-1 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded`}
                aria-current={activeSection === id ? 'page' : undefined}
                aria-label={`Navigate to ${label} section`}
              >
                {label}
              </button>
            ))}
            
            {/* Contact Information */}
            <div className="flex items-center space-x-4 ml-4">
              <a 
                href="tel:206-316-5718" 
                onClick={handlePhoneClick}
                className="flex items-center bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-100 hover:bg-emerald-100 transition focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label="Call our clinic or view contact section"
              >
                <i className="fas fa-phone text-emerald-600 mr-2" aria-hidden="true"></i>
                <span className="font-medium">(206) 316-5718</span>
              </a>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                aria-label="Contact us"
              >
                Contact Us
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <a 
              href="tel:206-316-5718" 
              className="flex items-center text-emerald-600 p-2 rounded-full hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-label="Call our clinic"
            >
              <i className="fas fa-phone text-xl" aria-hidden="true"></i>
            </a>
            
            <button 
              className="text-gray-600 focus:outline-none p-2 rounded-full hover:bg-gray-100 focus:ring-2 focus:ring-emerald-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <i 
                className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {sections.map(({ id, label }) => (
              <button 
                key={`mobile-${id}`}
                onClick={() => scrollToSection(id)}
                className={`block w-full text-left px-3 py-2 rounded-lg ${
                  activeSection === id 
                    ? 'bg-emerald-50 text-emerald-600' 
                    : 'hover:bg-gray-100'
                } focus:outline-none focus:ring-2 focus:ring-emerald-400`}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {label}
              </button>
            ))}
            
            {/* Mobile Contact Options */}
            <div className="pt-2 space-y-2">
              <a 
                href="tel:206-316-5718" 
                className="flex items-center w-full px-3 py-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label="Call our clinic"
              >
                <i className="fas fa-phone mr-2" aria-hidden="true"></i>
                <span>Call Now: (206) 316-5718</span>
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                aria-label="Navigate to contact section"
              >
                <i className="fas fa-envelope mr-2" aria-hidden="true"></i>
                Contact Form
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;