import React from 'react';

const KidsSection = ({ data }) => {
  const phoneRaw = data?.contact?.phoneRaw || '+917709640743';

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-[#f8faff] to-white flex justify-center items-center">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      
      {/* Decorative Dots Left */}
      <div className="absolute top-1/4 left-10 hidden lg:grid grid-cols-4 gap-2 opacity-20 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div key={`dot-l-${i}`} className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
        ))}
      </div>

      {/* Decorative Dots Right */}
      <div className="absolute bottom-1/4 right-10 hidden lg:grid grid-cols-4 gap-2 opacity-20 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div key={`dot-r-${i}`} className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100 shadow-sm">
            <i className="fa-solid fa-tooth text-sm"></i>
            <span>Your Smile, Our Priority</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#081839] mb-4 leading-tight tracking-tight">
            Ready to Improve Your Smile?
          </h2>

          {/* Decorative Underline Element */}
          <div className="flex justify-center items-center gap-1 mb-8">
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
            <div className="w-2 h-1 bg-blue-400 rounded-full"></div>
            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Book your appointment today with our expert dental team and experience world-class care.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto mb-12">
            
            {/* Card 1 */}
            <a href="/services" className="flex items-center justify-between p-4 lg:p-5 bg-white border border-blue-50/80 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(12,36,76,0.1)] hover:-translate-y-1 hover:border-blue-100 transition-all group text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <i className="fa-solid fa-grip text-lg"></i>
                </div>
                <div>
                  <h4 className="text-[#081839] font-bold text-[15px] mb-0.5">Explore Services</h4>
                  <p className="text-gray-500 text-[13px] leading-tight mb-0">See all treatments we offer</p>
                </div>
              </div>
              <i className="fa-solid fa-arrow-right text-gray-400 group-hover:text-blue-600 transition-colors ml-2"></i>
            </a>

            {/* Card 2 */}
            <a href="/about" className="flex items-center justify-between p-4 lg:p-5 bg-white border border-blue-50/80 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(12,36,76,0.1)] hover:-translate-y-1 hover:border-blue-100 transition-all group text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <i className="fa-regular fa-user text-lg"></i>
                </div>
                <div>
                  <h4 className="text-[#081839] font-bold text-[15px] mb-0.5">Meet Our Dentist</h4>
                  <p className="text-gray-500 text-[13px] leading-tight mb-0">Learn about our expert team</p>
                </div>
              </div>
              <i className="fa-solid fa-arrow-right text-gray-400 group-hover:text-blue-600 transition-colors ml-2"></i>
            </a>

            {/* Card 3 */}
            <a href="/services" className="flex items-center justify-between p-4 lg:p-5 bg-white border border-blue-50/80 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(12,36,76,0.1)] hover:-translate-y-1 hover:border-blue-100 transition-all group text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <i className="fa-solid fa-tooth text-lg"></i>
                </div>
                <div>
                  <h4 className="text-[#081839] font-bold text-[15px] mb-0.5">Explore Treatments</h4>
                  <p className="text-gray-500 text-[13px] leading-tight mb-0">Find the right care for you</p>
                </div>
              </div>
              <i className="fa-solid fa-arrow-right text-gray-400 group-hover:text-blue-600 transition-colors ml-2"></i>
            </a>

          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-3 text-gray-600 font-medium text-sm md:text-base">
            <div className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-star text-blue-600"></i>
            </div>
            <span>
              Rated <strong className="text-blue-600 font-bold">4.9</strong> by <strong className="text-blue-600 font-bold">1000+</strong> patients
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KidsSection;
