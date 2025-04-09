function Footer() {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <footer className="bg-charcoal-gray text-soft-peach py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-teal">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-left hover:text-light-mint transition-colors w-fit"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left hover:text-light-mint transition-colors w-fit"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-left hover:text-light-mint transition-colors w-fit"
                >
                  Contact
                </button>
              </nav>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-teal">Contact Us</h3>
              <address className="not-italic space-y-2">
                <p>6405 218th St SW STE 304</p>
                <p>Mountlake Terrace, WA</p>
                <p>Phone: +1 999 999 9999</p>
                <a 
                  href="mailto:contact@website.com" 
                  className="hover:text-light-mint transition-colors"
                >
                  contact@website.com
                </a>
              </address>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-teal/20 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} ACUHealth. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;