function Services() {  
    return (
        <div className="container mx-auto px-6 pb-10 pt-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Healing Services</h2>
                <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-3xl mx-auto">We offer a range of treatments to address various health concerns and promote overall wellness.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Pain Management */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden treatment-card transition duration-300 hover:shadow-xl">
                    <div className="p-6">
                        <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto treatment-icon transition duration-300">
                            <i className="fas fa-head-side-mask text-emerald-600 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">Pain Management</h3>
                        <p className="text-gray-600 text-center">Effective relief for chronic pain, arthritis, migraines, and sports injuries through targeted acupuncture techniques.</p>
                    </div>
                </div>
                
                {/* Stress, Anxiety, Depression Reduction */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden treatment-card transition duration-300 hover:shadow-xl">
                    <div className="p-6">
                        <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto treatment-icon transition duration-300">
                            <i className="fas fa-heartbeat text-amber-600 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">Stress, Anxiety, Depression Reduction</h3>
                        <p className="text-gray-600 text-center">Calm your nervous system, reduce anxiety, and improve sleep quality with our relaxation-focused treatments.</p>
                    </div>
                </div>
                
                {/* Nutrition */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden treatment-card transition duration-300 hover:shadow-xl">
                    <div className="p-6">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto treatment-icon transition duration-300">
                            <i className="fas fa-utensils text-blue-600 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">Nutrition</h3>
                        <p className="text-gray-600 text-center">Personalized dietary guidance and nutritional therapy to complement your acupuncture treatment.</p>
                    </div>
                </div>
                
                {/* Pregnancy and Gynecological Disorders */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden treatment-card transition duration-300 hover:shadow-xl">
                    <div className="p-6">
                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto treatment-icon transition duration-300">
                            <i className="fas fa-baby text-purple-600 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">Pregnancy and Gynecological Disorders</h3>
                        <p className="text-gray-600 text-center">Specialized care for fertility, pregnancy discomfort, and women's health issues.</p>
                    </div>
                </div>
                
                {/* Musculoskeletal and Spine conditions */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden treatment-card transition duration-300 hover:shadow-xl">
                    <div className="p-6">
                        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto treatment-icon transition duration-300">
                            <i className="fas fa-bone text-red-600 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">Musculoskeletal and Spine conditions</h3>
                        <p className="text-gray-600 text-center">Treatment for back pain, neck pain, sciatica, and joint disorders.</p>
                    </div>
                </div>
                
                {/* Cosmetic Acupuncture */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden treatment-card transition duration-300 hover:shadow-xl">
                    <div className="p-6">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto treatment-icon transition duration-300">
                            <i className="fas fa-spa text-green-600 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">Cosmetic Acupuncture</h3>
                        <p className="text-gray-600 text-center">Natural facial rejuvenation that improves skin tone and reduces signs of aging.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;