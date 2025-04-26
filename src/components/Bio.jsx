import tieyanImage from '../images/tieyan_shang.webp';

function Bio() {  
  return (
    <>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Ancient Healing, Modern Approach</h1>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">At Acu Health Clinic, we blend centuries-old techniques with contemporary understanding to provide personalized care for your health and wellness.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <div className="relative">
                <picture>
                  {/* AVIF (25% smaller than WebP) */}
                  <source 
                    srcSet="/src/images/tieyan_shang.avif" 
                    type="image/avif" 
                  />
                  {/* WebP fallback */}
                  <source 
                    srcSet="/src/images/tieyan_shang.webp" 
                    type="image/webp" 
                  />
                  {/* JPEG fallback */}
                  <img
                    src="/src/images/tieyan_shang.jpg"
                    alt="Dr. Tieyan Shang"
                    width={800}  
                    height={800}
                    className="rounded-lg shadow-xl w-full"
                    loading="eager"
                    decoding="sync"
                    style={{
                      contentVisibility: 'auto',
                      containIntrinsicSize: '800px 800px'
                    }}
                  />
                </picture>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Our Practitioner</h2>
              <p className="text-gray-600 mb-4">
                <strong>Dr. Tieyan Shang</strong> is a board certified and licensed acupuncturist in Washington State. 
                She received her medical and acupuncture degree from Beijing Medical University. With over 19 years of clinical experience, 
                she has successfully treated more than 2,000 patients annually.
              </p>
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <i className="fas fa-check-circle text-emerald-600" aria-hidden="true"></i>
                </div>
                <p className="text-gray-700">19+ years of clinical experience</p>
              </div>
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <i className="fas fa-check-circle text-emerald-600" aria-hidden="true"></i>
                </div>
                <p className="text-gray-700">Individualized treatment plans</p>
              </div>
              <div className="flex items-center">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <i className="fas fa-check-circle text-emerald-600" aria-hidden="true"></i>
                </div>
                <p className="text-gray-700">FDA-approved sterile, single-use needles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bio;