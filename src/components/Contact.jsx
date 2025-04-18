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
          {/* Map (Left Column - Replacing Contact Form) */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg h-full">
              <Map />
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
                    6405 218th St SW<br />Room 304<br />Mountlake Terrace, WA 98043
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
                    Tuesday - Friday: 9 A.M. - 7 P.M.<br />
                    Saturday - Sunday: 10 A.M. - 5 P.M.<br />
                    Monday: Closed
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
                    Phone: (206) 316-5718<br />
                    Email: acupuncturelynnwood@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;