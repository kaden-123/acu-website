function Services() {  
    return (
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Our Healing Services</h2>
                <div class="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
                <p class="text-gray-600 max-w-3xl mx-auto">We offer a range of treatments to address various health concerns and promote overall wellness.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/*treatment 1*/}
                <div class="bg-white rounded-lg shadow-md overflow-hidden treatment-card transition duration-300 hover:shadow-xl">
                    <div class="p-6">
                        <div class="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto treatment-icon transition duration-300">
                            <i class="fas fa-head-side-mask text-emerald-600 text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-center text-gray-800 mb-3">Pain Management</h3>
                        <p class="text-gray-600 text-center">Effective relief for chronic pain, arthritis, migraines, and sports injuries through targeted acupuncture techniques.</p>
                    </div>
                    <div class="bg-gray-50 px-6 py-4">
                        <p class="text-emerald-600 font-medium text-center">60-90 min session</p>
                    </div>
                </div>
                
                {/*treatment 2*/}
                <div class="bg-white rounded-lg shadow-md overflow-hidden treatment-card transition duration-300 hover:shadow-xl">
                    <div class="p-6">
                        <div class="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto treatment-icon transition duration-300">
                            <i class="fas fa-heartbeat text-amber-600 text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-center text-gray-800 mb-3">Stress Reduction</h3>
                        <p class="text-gray-600 text-center">Calm your nervous system, reduce anxiety, and improve sleep quality with our relaxation-focused treatments.</p>
                    </div>
                    <div class="bg-gray-50 px-6 py-4">
                        <p class="text-amber-600 font-medium text-center">60 min session</p>
                    </div>
                </div>
                
                {/*treatment 3*/}
                <div class="bg-white rounded-lg shadow-md overflow-hidden treatment-card transition duration-300 hover:shadow-xl">
                    <div class="p-6">
                        <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto treatment-icon transition duration-300">
                            <i class="fas fa-lungs text-blue-600 text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-center text-gray-800 mb-3">Respiratory Health</h3>
                        <p class="text-gray-600 text-center">Support for asthma, allergies, sinusitis, and immune system enhancement through meridian therapy.</p>
                    </div>
                    <div class="bg-gray-50 px-6 py-4">
                        <p class="text-blue-600 font-medium text-center">60-75 min session</p>
                    </div>
                </div>
                
                {/*treatment 4*/}
                <div class="bg-white rounded-lg shadow-md overflow-hidden treatment-card transition duration-300 hover:shadow-xl">
                    <div class="p-6">
                        <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto treatment-icon transition duration-300">
                            <i class="fas fa-baby text-purple-600 text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-center text-gray-800 mb-3">Fertility Support</h3>
                        <p class="text-gray-600 text-center">Enhance reproductive health and support fertility journeys with our specialized acupuncture protocols.</p>
                    </div>
                    <div class="bg-gray-50 px-6 py-4">
                        <p class="text-purple-600 font-medium text-center">90 min session</p>
                    </div>
                </div>
                
                {/*treatment 5*/}
                <div class="bg-white rounded-lg shadow-md overflow-hidden treatment-card transition duration-300 hover:shadow-xl">
                    <div class="p-6">
                        <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto treatment-icon transition duration-300">
                            <i class="fas fa-smoking-ban text-red-600 text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-center text-gray-800 mb-3">Addiction Recovery</h3>
                        <p class="text-gray-600 text-center">Auricular acupuncture to support smoking cessation and substance abuse recovery programs.</p>
                    </div>
                    <div class="bg-gray-50 px-6 py-4">
                        <p class="text-red-600 font-medium text-center">45 min session</p>
                    </div>
                </div>
                
                {/*treatment 6*/}
                <div class="bg-white rounded-lg shadow-md overflow-hidden treatment-card transition duration-300 hover:shadow-xl">
                    <div class="p-6">
                        <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto treatment-icon transition duration-300">
                            <i class="fas fa-spa text-green-600 text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-center text-gray-800 mb-3">Cosmetic Acupuncture</h3>
                        <p class="text-gray-600 text-center">Natural facial rejuvenation that improves skin tone, reduces wrinkles, and promotes collagen production.</p>
                    </div>
                    <div class="bg-gray-50 px-6 py-4">
                        <p class="text-green-600 font-medium text-center">75 min session</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Services;