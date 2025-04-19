import tieyanImage from '../images/tieyan_shang.jpg';

function Bio() {  
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ancient Healing, Modern Approach</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">At Acu Health Clinic, we blend centuries-old techniques with contemporary understanding to provide personalized care for your health and wellness.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="relative">
              <img src={tieyanImage} alt="Acupuncture treatment" className="rounded-lg shadow-xl w-full" />
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">About Our Practitioner</h3>
            <p className="text-gray-600 mb-4">Tieyan Shang is a board certified and licensed acupuncturist in WA. 
              She got her medical and acupuncture degree from Beijing 
              Medical University. As an experienced acupuncturist, she 
              treated more than different 2000 patient over  19+ years. She specializes in a variety of conditions like
              pain, sport injury and spine condition, depression, 
              and anxiety. Through careful assessment, she has helped many patients improve their
              quality of life and achieve their health goals.</p>
            <div className="flex items-center mb-4">
              <div className="bg-emerald-100 p-2 rounded-full mr-4">
                <i className="fas fa-check-circle text-emerald-600"></i>
              </div>
              <p className="text-gray-700">Over 19 years of clinical experience</p>
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

export default Bio;