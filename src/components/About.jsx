import React from 'react';

const About = ({ data }) => {
  const fallbackAbout = {
    title: 'Simple, Honest Dental Care You Can Trust',
    description: 'At The Dental Edge, we focus on making dental care comfortable, clear, and stress-free. Led by Dr. Tulsi Bhutada Amesar, the clinic is built around one goal — giving every patient the right treatment with proper guidance, not confusion.',
    points: [
      'Treatment planned as per your actual need', 
      'Clean clinic with modern dental equipment', 
      'Calm and comfortable experience for all age groups', 
      'Easy appointment process with minimal waiting'
    ]
  };

  const aboutData = data || fallbackAbout;
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-[20px] overflow-hidden shadow-2xl shadow-blue-900/5 ring-1 ring-black/5">
                <img src={aboutData.image1 || "/images/misc/p1.webp"} className="w-full h-auto transform hover:scale-105 transition-transform duration-700" alt="About 1" />
              </div>
              <div className="rounded-[20px] overflow-hidden shadow-2xl shadow-blue-900/5 ring-1 ring-black/5">
                <img src={aboutData.image2 || "/images/misc/p2.webp"} className="w-full h-auto transform hover:scale-105 transition-transform duration-700" alt="About 2" />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="lg:pl-8">
              <div className="subtitle s2 mb-3 text-blue-600 font-semibold uppercase tracking-[1px] text-[14px]">About Us</div>
              <h2 className="text-[48px] font-bold text-[#0c244c] mb-[20px] leading-tight font-sans">{aboutData.title}</h2>
              <p className="text-[#666] text-[18px] mb-[30px] leading-relaxed">
                {aboutData.description}
              </p>
              
              <ul className="grid grid-cols-1 gap-4 mb-12">
                {aboutData.points.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <i className="fa fa-check text-[10px]"></i>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <a className="inline-flex items-center px-10 py-4 bg-[#0c244c] text-white rounded-xl font-bold hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/10" href="/contact">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
