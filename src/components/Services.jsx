import { useState } from 'react';

function Services() {
  const [activeTab, setActiveTab] = useState('techniques');

  const servicesData = [
    {
      title: "Pain Management",
      icon: "fas fa-head-side-mask",
      bgColor: "bg-emerald-100",
      textColor: "text-emerald-600",
      description: "Effective relief for chronic pain, arthritis, migraines, and sports injuries."
    },
    {
      title: "Stress & Anxiety Reduction",
      icon: "fas fa-heartbeat",
      bgColor: "bg-amber-100",
      textColor: "text-amber-600",
      description: "Calm your nervous system and improve sleep quality with our relaxation-focused treatments."
    },
    {
      title: "Women's Health",
      icon: "fas fa-female",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      description: "Specialized care for fertility, pregnancy discomfort, and hormonal balance."
    },
    {
      title: "Musculoskeletal Conditions",
      icon: "fas fa-bone",
      bgColor: "bg-red-100",
      textColor: "text-red-600",
      description: "Treatment for back pain, sciatica, and joint disorders."
    },
    {
      title: "Digestive Health",
      icon: "fas fa-utensils",
      bgColor: "bg-teal-100",
      textColor: "text-teal-600",
      description: "Address IBS, bloating, and gut imbalances through holistic approaches."
    }
  ];

  const techniquesData = [
    {
      title: "Traditional Acupuncture",
      icon: "fas fa-leaf",
      bgColor: "bg-emerald-100",
      textColor: "text-emerald-600",
      description: "Fine, sterile needles placed at strategic points to regulate Qi flow and restore balance."
    },
    {
      title: "Electro-Acupuncture",
      icon: "fas fa-bolt",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      description: "Gentle electrical stimulation enhances pain relief and accelerates healing."
    },
    {
      title: "Tui Na Massage",
      icon: "fas fa-hands",
      bgColor: "bg-amber-100",
      textColor: "text-amber-600",
      description: "Chinese therapeutic massage to relieve tension and improve circulation."
    },
    {
      title: "Trigger Point Therapy",
      icon: "fas fa-bullseye",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      description: "Precise pressure on muscle knots to release tension and alleviate pain."
    },
    {
      title: "Cupping Therapy",
      icon: "fas fa-fire",
      bgColor: "bg-red-100",
      textColor: "text-red-600",
      description: "Suction technique to improve blood flow and release muscle adhesions."
    },
    {
      title: "Herbal Medicine",
      icon: "fas fa-mortar-pestle",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      description: "Custom herbal formulas tailored to support your specific condition."
    }
  ];

  return (
    <>
      <div className="container mx-auto px-6 pb-10 pt-10">
        {/* Main Services/Techniques Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {activeTab === 'services' ? 'Our Health Services' : 'Treatment Techniques'}
          </h1>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {activeTab === 'services' 
              ? "Evidence-based approaches to address your health concerns" 
              : "Ancient healing methods adapted for modern conditions"}
          </p>
          
          {/* Tab Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => setActiveTab('techniques')}
              className={`px-6 py-2 rounded-lg transition-colors text-lg ${
                activeTab === 'techniques' 
                  ? 'bg-emerald-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Techniques
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-2 rounded-lg transition-colors text-lg ${
                activeTab === 'services' 
                  ? 'bg-emerald-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Services
            </button>
          </div>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {(activeTab === 'services' ? servicesData : techniquesData).map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className={`${item.bgColor} w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <i className={`${item.icon} ${item.textColor} text-3xl`} aria-hidden="true"></i>
                </div>
                <h2 className="text-xl font-semibold text-center text-gray-800 mb-3">{item.title}</h2>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
              <div className="px-6 pb-6 text-center">
                <button className={`${item.textColor} hover:opacity-80 font-medium transition-opacity`}>
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Auto Accident Section - Moved Below */}
        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Auto Accident Injury Care</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-blue-700 max-w-3xl mx-auto text-lg">
            We specialize in treating whiplash, concussions, and musculoskeletal injuries from auto accidents.
          </p>
        </div>
      </div>
    </>
  );
}

export default Services;