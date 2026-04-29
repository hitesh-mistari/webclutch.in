import React from 'react';

const Hero = ({ data }) => {
  const heroData = data?.hero || {
    title: 'Healthy Smile \n Happy Life',
    subtitle: 'Experience world-class dental care equipped with advanced technology. We prioritize your comfort and deliver professional treatments tailored perfectly for a healthy smile.'
  };
  const phoneRaw = data?.contact?.phoneRaw || '+917709640743';

  return (
    <section id="section-intro" className="relative flex flex-col lg:min-h-screen lg:justify-center overflow-hidden bg-[#0c244c] pt-[100px] lg:pt-0 pb-16 lg:pb-0">
      {/* Background Image - Only visible on desktop */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <img 
          src={heroData.bgImage || "/images/misc/hero.png"} 
          className="w-full h-full object-cover object-center"
          alt="Clinic Background"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-7/12">
            <div className="max-w-xl">
              <h1 className="text-[40px] lg:text-[58px] font-bold text-white mb-6 leading-[1.1] animate-fade-in-up whitespace-pre-line">
                {heroData.title}
              </h1>
              
              <p className="text-base lg:text-xl text-white/90 leading-relaxed mb-10 animate-fade-in-up transition-delay-200 font-medium max-w-lg text-justify">
                {heroData.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up transition-delay-500 max-w-lg">
                <a 
                  href={`tel:${phoneRaw}`} 
                  className="flex bg-[#0fb17b] text-white px-6 py-[14px] rounded-xl font-bold text-lg hover:bg-[#0da06e] transition-all shadow-xl active:scale-95 items-center justify-between gap-3 w-full sm:w-1/2 whitespace-nowrap"
                >
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-phone"></i>
                    <span>Call Now</span>
                  </div>
                  <i className="fa-solid fa-chevron-right text-sm opacity-80"></i>
                </a>

                <a 
                  href="/contact" 
                  className="flex border-2 border-white/40 bg-white/5 text-white px-6 py-[12px] rounded-xl font-bold text-lg hover:bg-white/10 transition-all active:scale-95 items-center justify-between gap-3 w-full sm:w-1/2 whitespace-nowrap"
                >
                  <div className="flex items-center gap-3">
                    <i className="fa-regular fa-calendar-check"></i>
                    <span>Book Appointment</span>
                  </div>
                  <i className="fa-solid fa-chevron-right text-sm opacity-80"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
