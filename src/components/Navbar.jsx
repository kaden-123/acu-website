import { useState, useEffect } from 'react';

function NavBar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'bio', 'services', 'contact', 'FAQ'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => scrollToSection('hero')}
          >
            <i className="fas fa-leaf text-emerald-600 text-2xl mr-2"></i>
            <span className="text-xl font-semibold text-gray-800">Harmony Acupuncture</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('hero')} 
              className={`${activeSection === 'hero' ? 'text-emerald-600 font-medium' : 'text-gray-600'} hover:text-emerald-600 transition px-3 py-1`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('bio')} 
              className={`${activeSection === 'bio' ? 'text-emerald-600 font-medium' : 'text-gray-600'} hover:text-emerald-600 transition px-3 py-1`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className={`${activeSection === 'services' ? 'text-emerald-600 font-medium' : 'text-gray-600'} hover:text-emerald-600 transition px-3 py-1`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('FAQ')} 
              className={`${activeSection === 'FAQ' ? 'text-emerald-600 font-medium' : 'text-gray-600'} hover:text-emerald-600 transition px-3 py-1`}
            >
              FAQ
            </button>
            
            {/* Visible Phone Number + Contact Button */}
            <div className="flex items-center space-x-4 ml-4">
              <a 
                href="tel:503-555-1234" 
                className="flex items-center bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-100"
              >
                <i className="fas fa-phone text-emerald-600 mr-2"></i>
                <span className="font-medium">(206) 316-5718</span>
              </a>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-lg transition"
              >
                Contact Us
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            {/* Always-visible phone icon on mobile */}
            <a href="tel:503-555-1234" className="flex items-center text-emerald-600">
              <i className="fas fa-phone text-xl"></i>
            </a>
            
            <button 
              className="text-gray-600 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <button 
              onClick={() => scrollToSection('hero')}
              className={`block w-full text-left px-3 py-2 rounded-lg ${activeSection === 'hero' ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-gray-100'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('bio')}
              className={`block w-full text-left px-3 py-2 rounded-lg ${activeSection === 'bio' ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-gray-100'}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`block w-full text-left px-3 py-2 rounded-lg ${activeSection === 'services' ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-gray-100'}`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('FAQ')}
              className={`block w-full text-left px-3 py-2 rounded-lg ${activeSection === 'FAQ' ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-gray-100'}`}
            >
              FAQ
            </button>
            
            {/* Mobile Contact Options */}
            <div className="pt-2 space-y-2">
              <a 
                href="tel:503-555-1234" 
                className="flex items-center w-full px-3 py-2 rounded-lg bg-emerald-50 text-emerald-600"
              >
                <i className="fas fa-phone mr-2"></i>
                <span>Call Now: (206) 316-5718</span>
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-lg text-left"
              >
                <i className="fas fa-envelope mr-2"></i>
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