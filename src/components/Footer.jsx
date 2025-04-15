function Footer() {  
    return (
      <footer className="bg-emerald-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <i className="fas fa-leaf text-amber-400 text-2xl mr-2"></i>
                <span className="text-xl font-semibold">Harmony Acupuncture</span>
              </div>
              <p className="max-w-xs opacity-80">Restoring balance and promoting natural healing through traditional Chinese
                acupuncture.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#hero" className="opacity-80 hover:opacity-100 hover:text-amber-300 transition">Home</a></li>
                  <li><a href="#bio" className="opacity-80 hover:opacity-100 hover:text-amber-300 transition">About</a>
                  </li>
                  <li><a href="#services"
                      className="opacity-80 hover:opacity-100 hover:text-amber-300 transition">Services</a></li>
                  <li><a href="#contact"
                      className="opacity-80 hover:opacity-100 hover:text-amber-300 transition">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><a href="#services" className="opacity-80 hover:opacity-100 hover:text-amber-300 transition">Pain
                      Management</a></li>
                  <li><a href="#services" className="opacity-80 hover:opacity-100 hover:text-amber-300 transition">Stress
                      Reduction</a></li>
                  <li><a href="#services" className="opacity-80 hover:opacity-100 hover:text-amber-300 transition">Fertility
                      Support</a></li>
                  <li><a href="#services" className="opacity-80 hover:opacity-100 hover:text-amber-300 transition">Cosmetic
                      Acupuncture</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-amber-300 transition">Privacy
                      Policy</a></li>
                  <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-amber-300 transition">Terms of
                      Service</a></li>
                  <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-amber-300 transition">HIPAA
                      Compliance</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-emerald-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="opacity-80 mb-4 md:mb-0">© 2023 Harmony Acupuncture Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;