function Bio() {  
    return (
    <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Ancient Healing, Modern Approach</h2>
                <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-3xl mx-auto">At Harmony Acupuncture, we blend centuries-old techniques with contemporary understanding to provide personalized care for your health and wellness.</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                    <div className="relative">
                        <img src="" alt="Acupuncture treatment" class="rounded-lg shadow-xl w-full"></img>
                        <div className="absolute -bottom-5 -right-5 bg-amber-500 p-4 rounded-full shadow-lg">
                            <i className="fas fa-acupuncture text-white text-3xl needle-pulse"></i>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Philosophy</h3>
                    <p className="text-gray-600 mb-4">Traditional Chinese Medicine views health as a state of balance between complementary energies. When these energies fall out of balance, illness and discomfort can occur.</p>
                    <p className="text-gray-600 mb-6">Acupuncture works by stimulating specific points along the body's meridians to restore this natural equilibrium, promoting the body's innate healing abilities.</p>
                    
                    <div className="flex items-center mb-4">
                        <div className="bg-emerald-100 p-2 rounded-full mr-4">
                            <i className="fas fa-check-circle text-emerald-600"></i>
                        </div>
                        <p className="text-gray-700">Over 15 years of clinical experience</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <div className="bg-emerald-100 p-2 rounded-full mr-4">
                            <i className="fas fa-check-circle text-emerald-600"></i>
                        </div>
                        <p className="text-gray-700">Individualized treatment plans</p>
                    </div>
                    <div className="flex items-center">
                        <div className="bg-emerald-100 p-2 rounded-full mr-4">
                            <i className="fas fa-check-circle text-emerald-600"></i>
                        </div>
                        <p className="text-gray-700">Sterile, single-use needles only</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default  Bio;