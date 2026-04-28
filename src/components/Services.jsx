import React from 'react';
import Link from 'next/link';

const fallbackServicesData = [
  {
    title: 'Root Canal Treatment (RCT)',
    desc: 'Treat tooth infection and save your natural tooth with a comfortable procedure.',
    img: '/images/RCT.webp',
    link: '/service-root-canal-treatment'
  },
  {
    title: 'Braces & Aligners',
    desc: 'Align your teeth properly for a better smile and improved bite with our custom solutions.',
    img: '/images/orthodontic-treatments.jpg',
    link: '/service-braces-and-aligners'
  },
  {
    title: 'Dental Implants',
    desc: 'Replace missing teeth with a high-quality permanent solution that looks and feels natural.',
    img: '/images/invisalign-treatment.jpg',
    link: '/service-dental-implants'
  },
  {
    title: 'Crowns & Bridges',
    desc: 'Repair damaged teeth or fill gaps with natural-looking restorations that restore function.',
    img: '/images/crowns-and-bridge.jpg',
    link: '/service-crowns-and-bridges'
  }
];

const Services = ({ isPage = false, data }) => {
  const servicesList = data || fallbackServicesData;
  return (
    <section className={`${isPage ? 'pt-[42px] lg:pt-[56px] pb-16 lg:pb-20' : 'py-16 lg:py-20'} bg-gray-50`}>
      <div className="container mx-auto px-4">
        {!isPage && (
          <div className="flex flex-wrap justify-center mb-10 px-4">
            <div className="w-full lg:w-2/3 text-center">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wider mb-6">Our Services</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0c244c] mb-5">Comprehensive Dental Care for a Healthy Smile</h2>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-0">
          {servicesList.map((service, index) => (
            <Link href={service.link} key={index} className="group relative bg-white rounded-[32px] overflow-hidden shadow-2xl shadow-blue-900/5 ring-1 ring-black/5 hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.img} 
                  className="w-full h-full object-cover transform duration-700 group-hover:scale-110" 
                  alt={service.title} 
                />
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="text-xl font-bold text-[#0c244c] mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                  {service.desc}
                </p>
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all">
                  Read more <i className="fa fa-arrow-right text-sm"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
