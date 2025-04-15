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
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className={`${activeSection === 'hero' ? 'text-emerald-600 font-medium' : 'text-gray-600'} hover:text-emerald-600 transition`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('bio')} 
              className={`${activeSection === 'bio' ? 'text-emerald-600 font-medium' : 'text-gray-600'} hover:text-emerald-600 transition`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className={`${activeSection === 'services' ? 'text-emerald-600 font-medium' : 'text-gray-600'} hover:text-emerald-600 transition`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`${activeSection === 'contact' ? 'text-emerald-600 font-medium' : 'text-gray-600'} hover:text-emerald-600 transition`}
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('FAQ')} 
              className={`${activeSection === 'FAQ' ? 'text-emerald-600 font-medium' : 'text-gray-600'} hover:text-emerald-600 transition`}
            >
              FAQ
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button 
              onClick={() => scrollToSection('hero')}
              className={`block w-full text-left px-3 py-2 rounded ${activeSection === 'hero' ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-gray-100'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('bio')}
              className={`block w-full text-left px-3 py-2 rounded ${activeSection === 'bio' ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-gray-100'}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`block w-full text-left px-3 py-2 rounded ${activeSection === 'services' ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-gray-100'}`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`block w-full text-left px-3 py-2 rounded ${activeSection === 'contact' ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-gray-100'}`}
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('FAQ')}
              className={`block w-full text-left px-3 py-2 rounded ${activeSection === 'FAQ' ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-gray-100'}`}
            >
              FAQ
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;