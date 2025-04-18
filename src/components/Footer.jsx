import { useState } from 'react';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

function Footer() {  
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
    const [showTermsOfService, setShowTermsOfService] = useState(false);

    return (
      <>
        <footer className="bg-emerald-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-8 md:mb-0">
                <div className="flex items-center mb-4">
                  <i className="fas fa-leaf text-amber-400 text-2xl mr-2"></i>
                  <span className="text-xl font-semibold">Acu Health Clinic</span>
                </div>
                <p className="max-w-xs opacity-80">
                  Restoring balance and promoting natural healing through traditional Chinese acupuncture.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><a href="#hero" className="opacity-80 hover:opacity-100 hover:text-amber-300 transition">Home</a></li>
                    <li><a href="#bio" className="opacity-80 hover:opacity-100 hover:text-amber-300 transition">About</a></li>
                    <li><a href="#services" className="opacity-80 hover:opacity-100 hover:text-amber-300 transition">Services</a></li>
                    <li><a href="#contact" className="opacity-80 hover:opacity-100 hover:text-amber-300 transition">Contact</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Services</h4>
                  <ul className="space-y-2">
                    <li><a href="#services" className="opacity-80 hover:opacity-100 hover:text-amber-300 transition">Pain Management</a></li>
                    <li><a href="#services" className="opacity-80 hover:opacity-100 hover:text-amber-300 transition">Stress Reduction</a></li>
                    <li><a href="#services" className="opacity-80 hover:opacity-100 hover:text-amber-300 transition">Fertility Support</a></li>
                    <li><a href="#services" className="opacity-80 hover:opacity-100 hover:text-amber-300 transition">Cosmetic Acupuncture</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Legal</h4>
                  <ul className="space-y-2">
                    <li>
                      <button 
                        onClick={() => setShowPrivacyPolicy(true)}
                        className="opacity-80 hover:opacity-100 hover:text-amber-300 transition text-left w-full"
                      >
                        Privacy Policy
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setShowTermsOfService(true)}
                        className="opacity-80 hover:opacity-100 hover:text-amber-300 transition text-left w-full"
                      >
                        Terms of Service
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-emerald-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="opacity-80 mb-4 md:mb-0">© 2025 Acu Health Clinic. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Privacy Policy Modal */}
        {showPrivacyPolicy && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white text-gray-800 p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Privacy Policy</h3>
                <button 
                  onClick={() => setShowPrivacyPolicy(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <PrivacyPolicy />
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setShowPrivacyPolicy(false)}
                  className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Terms of Service Modal */}
        {showTermsOfService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white text-gray-800 p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Terms of Service</h3>
                <button 
                  onClick={() => setShowTermsOfService(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <TermsOfService />
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setShowTermsOfService(false)}
                  className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default Footer;