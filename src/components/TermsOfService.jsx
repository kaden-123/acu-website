function TermsOfService() {
    return (
      <div className="prose max-w-none px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Terms of Service</h1>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use this website.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">2. Informational Purpose Only</h2>
          <p>
            This website is provided for informational purposes only. The content, including text, graphics, 
            images, and other material contained on this website, is for general information and is not 
            intended to be a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">3. No Medical Advice</h2>
          <p>
            The information provided on this website does not constitute medical advice and should not be 
            relied upon as such. Always seek the advice of a qualified healthcare provider with any questions 
            you may have regarding a medical condition or treatment.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">4. No Doctor-Patient Relationship</h2>
          <p>
            Use of this website does not establish a doctor-patient relationship. No information exchanged 
            through this website creates a professional relationship between you and Acu Health Clinic or any 
            of its practitioners.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">5. Limitation of Liability</h2>
          <p>
            Acu Health Clinic shall not be liable for any damages resulting from the use of, or the inability 
            to use, this website or its content. This includes but is not limited to damages caused by errors, 
            omissions, interruptions, defects, delays in operation, or any other failure of performance.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">6. External Links</h2>
          <p>
            This website may contain links to external websites that are not operated by us. We have no control 
            over the content and practices of these sites and cannot accept responsibility for their content or 
            privacy policies.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Your continued use of the website 
            following any changes constitutes your acceptance of the new terms.
          </p>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold mb-3">8. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us through the information 
            provided on our website.
          </p>
        </section>
  
        <p className="mt-8 text-sm text-gray-600">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    );
  }
  
  export default TermsOfService;