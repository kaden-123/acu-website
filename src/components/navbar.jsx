import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    setActiveSection(sectionId);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust based on your header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-teal shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 text-white hover:text-light-mint transition-colors"
          >
            <span className="text-xl font-bold">ACUHealth</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === 'about' 
                  ? 'text-light-mint font-semibold' 
                  : 'text-white hover:text-light-mint'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === 'contact' 
                  ? 'text-light-mint font-semibold' 
                  : 'text-white hover:text-light-mint'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-white hover:text-light-mint focus:outline-none"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-teal/95">
          <button
            onClick={() => scrollToSection('about')}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
              activeSection === 'about'
                ? 'bg-teal/20 text-light-mint'
                : 'text-white hover:bg-teal/80 hover:text-light-mint'
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
              activeSection === 'contact'
                ? 'bg-teal/20 text-light-mint'
                : 'text-white hover:bg-teal/80 hover:text-light-mint'
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}