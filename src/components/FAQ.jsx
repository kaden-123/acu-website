import { useEffect } from 'react';

function FAQ() {
    // This useEffect will make the toggleFAQ function available globally
    useEffect(() => {
        window.toggleFAQ = function(num) {
            const content = document.getElementById(`faqContent${num}`);
            const icon = document.getElementById(`faqIcon${num}`);
            
            if (content.classList.contains('max-h-0')) {
                content.classList.remove('max-h-0');
                content.classList.add('max-h-96', 'pb-4', 'fade-in');
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                content.classList.add('max-h-0');
                content.classList.remove('max-h-96', 'pb-4', 'fade-in');
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        };
    }, []);

    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                    <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="mb-4 border-b border-gray-200 pb-4">
                        <button className="flex justify-between items-center w-full focus:outline-none" onClick={() => toggleFAQ(1)}>
                            <h3 className="text-lg font-medium text-gray-800 text-left">Does acupuncture hurt?</h3>
                            <i className="fas fa-chevron-down text-emerald-600 transition-transform duration-300" id="faqIcon1"></i>
                        </button>
                        <div className="mt-2 text-gray-600 max-h-0 faq-content" id="faqContent1">
                            <p>Most patients report feeling minimal discomfort during acupuncture. The needles are extremely
                                thin (about the width of a human hair), and any sensation is typically brief. Many people find
                                the experience quite relaxing.</p>
                        </div>
                    </div>

                    <div className="mb-4 border-b border-gray-200 pb-4">
                        <button className="flex justify-between items-center w-full focus:outline-none" onClick={() => toggleFAQ(2)}>
                            <h3 className="text-lg font-medium text-gray-800 text-left">Is acupuncture safe?</h3>
                            <i className="fas fa-chevron-down text-emerald-600 transition-transform duration-300" id="faqIcon2"></i>
                        </button>
                        <div className="mt-2 text-gray-600 max-h-0 faq-content" id="faqContent2">
                            <p> Yes, it is very safe when performed by a licensed and trained acupuncturist, 
                                Clinics use sterile, single-use needles, and 
                                side effects are rare and usually mild (such as slight bruising or soreness).</p>
                        </div>
                    </div>

                    <div className="mb-4 border-b border-gray-200 pb-4">
                        <button className="flex justify-between items-center w-full focus:outline-none" onClick={() => toggleFAQ(3)}>
                            <h3 className="text-lg font-medium text-gray-800 text-left">Is acupuncture covered by insurance?</h3>
                            <i className="fas fa-chevron-down text-emerald-600 transition-transform duration-300" id="faqIcon3"></i>
                        </button>
                        <div className="mt-2 text-gray-600 max-h-0 faq-content" id="faqContent3">
                            <p> We accept all forms of medical insurance except for Medicare and Medicaid. 
                                Please check with your provider or ask us to help verify your benefits.</p>
                        </div>
                    </div>

                    <div className="mb-4 border-b border-gray-200 pb-4">
                        <button className="flex justify-between items-center w-full focus:outline-none" onClick={() => toggleFAQ(4)}>
                            <h3 className="text-lg font-medium text-gray-800 text-left">How many sessions will I need?</h3>
                            <i className="fas fa-chevron-down text-emerald-600 transition-transform duration-300" id="faqIcon4"></i>
                        </button>
                        <div className="mt-2 text-gray-600 max-h-0 faq-content" id="faqContent4">
                            <p> This varies depending on your condition, its severity, and how your body responds. 
                                Some people feel relief after just one session, while others may need several treatments 
                                for lasting results. Your acupuncturist will discuss a plan tailored to your needs. </p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <button className="flex justify-between items-center w-full focus:outline-none" onClick={() => toggleFAQ(5)}>
                            <h3 className="text-lg font-medium text-gray-800 text-left">Are there any side effects?</h3>
                            <i className="fas fa-chevron-down text-emerald-600 transition-transform duration-300" id="faqIcon5"></i>
                        </button>
                        <div className="mt-2 text-gray-600 max-h-0 faq-content" id="faqContent5">
                            <p>Acupuncture has very few side effects when performed by a licensed practitioner. The most common
                                are slight bruising at needle and cupping sites or temporary fatigue after treatment. Some patients
                                experience a pleasant sense of relaxation or increased energy following their session.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;