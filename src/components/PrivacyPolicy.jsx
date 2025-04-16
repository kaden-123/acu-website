
const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* SEO Meta Tags */}
        <title>Privacy Policy | Acu Health Clinic Acupuncture</title>
        <meta name="description" content="Learn how we handle your data with our privacy policy." />
      
      <div className="prose prose-emerald max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Information We Collect</h2>
        <p className="text-gray-600">
          Our website is designed to respect your privacy. We do not collect personal information through forms or user accounts.
        </p>
        
        <p className="text-gray-600 mt-4">
          We use these third-party services that may collect data:
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-1 mt-2">
          <li><strong>Google Analytics</strong>: Collects anonymous usage data (pages visited, duration, etc.) through cookies</li>
          <li><strong>Google Maps</strong>: May collect location data if you use the directions feature (optional)</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. How We Use Information</h2>
        <p className="text-gray-600">
          We only use collected data to:
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-1 mt-2">
          <li>Understand website traffic patterns (Google Analytics)</li>
          <li>Provide location directions when requested (Google Maps)</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. Cookies</h2>
        <p className="text-gray-600">Our site uses cookies only for:</p>
        <ul className="list-disc pl-5 text-gray-600 space-y-1 mt-2">
          <li>Google Analytics (anonymous tracking)</li>
          <li>Google Maps functionality</li>
        </ul>
        <p className="text-gray-600">You can disable cookies in your browser settings.</p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Your Rights</h2>
        <p className="text-gray-600">You may:</p>
        <ul className="list-disc pl-5 text-gray-600 space-y-1 mt-2">
          <li>Opt-out of Google Analytics using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank">Google Analytics Opt-out Browser Add-on</a></li>
          <li>Disable location services in your browser when using maps</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Changes to This Policy</h2>
        <p className="text-gray-600">We may update this policy. Changes will be posted on this page with a new "Last updated" date.</p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
        <address className="not-italic text-gray-600">
          Acu Health Clinic<br />
          6405 218th St SW, Room 304<br />
          Mountlake Terrace, WA 98043<br />
          Email: acupuncturelynnwood@gmail.com
        </address>
      </div>
    </div>
  );
};

export default PrivacyPolicy;