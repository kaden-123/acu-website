import Navbar from "../components/navbar";
import homeBanner from '../images/stockbanner.jpg';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

function HomePage() {
  return (
    <div className="bg-warm-gray min-h-screen">
      <section id="home">
        {/* Hero Banner */}
        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
          <img 
            src={homeBanner} 
            alt="ACU Website Banner" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-charcoal-gray/30 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Welcome to ACU</h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="bg-light-mint rounded-xl p-8 max-w-6xl mx-auto my-12 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Profile Image */}
            <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 relative">
              <div className="absolute -inset-2 rounded-full bg-teal opacity-20"></div>
              <img 
                src="/your-image.jpg" 
                alt="Profile"
                className="rounded-full w-full h-full object-cover border-4 border-teal relative z-10"
              />
            </div>

            {/* Bio Content */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-charcoal-gray mb-4">
                About <span className="text-teal">ACU</span>
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-inner border border-soft-peach">
                <p className="text-slate-blue-gray leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-slate-blue-gray leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['skill1', 'skill2', 'skill3'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-warm-gray text-teal rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-charcoal-gray text-center mb-12">Contact Us</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details - Left Side */}
            <div className="max-w-md mx-auto space-y-8 text-center">
              {/* Location */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-charcoal-gray">Our Location</h3>
                <div className="flex justify-center items-start gap-3">
                  <MapPinIcon className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" />
                  <p className="text-slate-blue-gray">
                    6405 218th St SW STE 304<br />
                    Mountlake Terrace, WA
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-charcoal-gray">Phone</h3>
                <div className="flex justify-center items-start gap-3">
                  <PhoneIcon className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" />
                  <p className="text-slate-blue-gray">+1 999 999 9999</p>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-charcoal-gray">Email</h3>
                <div className="flex justify-center items-start gap-3">
                  <EnvelopeIcon className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" />
                  <a 
                    href="mailto:contact@website.com" 
                    className="text-teal hover:underline hover:text-teal/80 transition-colors"
                  >
                    contact@website.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="bg-light-mint p-8 rounded-xl shadow-md">
              <form className="space-y-6">
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-blue-gray">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-blue-gray">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-blue-gray">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal text-white py-3 px-6 rounded-lg font-medium hover:bg-teal/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;