import Map from "./Map";

function Contact() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Begin Your Healing Journey</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Contact us to schedule an appointment or ask questions about how acupuncture can help you.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Contact Form (Left Column) */}
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
              <form id="contactForm">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Clinic Information (Right Column) */}
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Clinic Information</h3>

              <div className="flex items-start mb-6">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <i className="fas fa-map-marker-alt text-emerald-600"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Location</h4>
                  <p className="text-gray-600">
                    123 Wellness Way<br />Suite 200<br />Portland, OR 97201
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <i className="fas fa-clock text-amber-600"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9am - 6pm<br />
                    Saturday: 10am - 3pm<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-phone-alt text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Contact</h4>
                  <p className="text-gray-600">
                    Phone: (503) 555-1234<br />
                    Email: info@harmonyacupuncture.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section - Added below the form and clinic info */}
        <div className="mt-8 rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Contact;