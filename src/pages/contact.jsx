import React from "react";

function ContactPage() {

    const handleSubmit = (event) => {
        const honeypotField = event.target.querySelector('input[name="honeypot"]');
        if (honeypotField && honeypotField.value) {
          // honeypot for bot
          event.preventDefault();
          alert("Bot detected. Form submission blocked.");
        }
      };

  return (
    <div className="w-full">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        
        {/* left section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">How to Find Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions, just fill in the contact form, and we will answer you shortly.
            If you are nearby, feel free to visit us.
          </p>
          <p className="text-gray-700">6405 218th St SW STE 304, Mountlake Terrace, WA</p>
          <p className="text-gray-700">Phone: +1 999 999 9999</p>
          <p className="text-gray-700">
            Email: <a href="mailto:contact@website.com" className="text-blue-600 underline">contact@website.com</a>
          </p>
        </div>

        {/* right section (contact form) */}
        <div className="bg-gray-100 p-6 text-black">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          {/* remember to change email later */}
          <form action="https://formsubmit.co/kadenlinwu@gmail.com" method="POST" className="space-y-4">
            <div className="hidden">
              <input type="text" name="honeypot" placeholder="Leave this field empty" className="hidden" />
            </div>
            <div className="flex gap-4">
              <input type="text" name="name" placeholder="Name" required className="w-1/2 p-3 border border-gray-300 rounded" />
              <input type="email" name="email" placeholder="Email" required className="w-1/2 p-3 border border-gray-300 rounded" />
            </div>
            <textarea name="message" minlength="20" placeholder="Message" required className="w-full p-3 border border-gray-300 rounded h-32"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default ContactPage;
