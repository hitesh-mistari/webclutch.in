import React from 'react';

const DoctorProfile = ({ data, clinicName = 'The Dental Edge' }) => {
  const fallbackData = {
    name: 'Dr. Tulsi Bhutada Amesar',
    qualifications: 'BDS — 9 Years Experience',
    title: 'Dentist, Dental Surgeon, Cosmetic/Aesthetic Dentist',
    image: '/images/team/1.webp',
    bio: 'Dr. Tulsi Bhutada Amesar is a dedicated Dental Surgeon and Cosmetic/Aesthetic Dentist with over 9 years of experience in delivering exceptional dental care. She completed her BDS from Maharashtra University of Health Sciences in 2017 and has been committed to creating healthy, beautiful smiles ever since.',
    expertise: [
      { icon: 'icofont-tooth', label: 'Root Canal Treatment' },
      { icon: 'icofont-surgeon-alt', label: 'Dental Implants' },
      { icon: 'icofont-flash', label: 'Laser Dentistry' },
      { icon: 'icofont-shield', label: 'Cosmetic Dentistry' }
    ],
    stats: [
      { number: '1000+', label: 'Happy Patients' },
      { number: '300+', label: 'Root Canal Treatments' },
      { number: '200+', label: 'Dental Implants' },
      { number: '9+', label: 'Years of Experience' }
    ]
  };

  const doctor = data || fallbackData;

  return (
    <section className="bg-blue-100 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-10 px-4">
          <div className="w-full lg:w-6/12 text-center">
            <div className="text-blue-600 font-semibold uppercase tracking-wider mb-3">Meet Your Dentist</div>
            <h2 className="text-[48px] font-bold text-[#0c244c] mb-[20px] leading-tight font-sans">Personal Care Focused</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At {clinicName}, every patient is treated with attention, clarity, and care. 
              {doctor.name} ensures every patient receives the best dental treatment.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="bg-white rounded-[20px] relative overflow-hidden shadow-2xl shadow-blue-900/5 ring-1 ring-black/5">
            <div className="flex flex-wrap items-stretch">
              {/* Doctor Image Column */}
              <div className="w-full lg:w-5/12">
                <div className="relative p-6 h-full min-h-[350px]">
                  <img src="/images/team/1.webp" className="w-full h-full object-cover rounded-[20px] shadow-lg relative z-10" alt="Dr. Tulsi Bhutada Amesar" />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 bg-blue-600 text-white p-4 pr-6 rounded-2xl flex items-center gap-4 z-20 shadow-xl shadow-blue-600/30 whitespace-nowrap">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <i className="icofont-tooth text-2xl"></i>
                    </div>
                    <div>
                      <div className="text-sm font-bold">Creating healthy smiles</div>
                      <div className="text-xs text-white/80">with care & compassion</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Doctor Details Column */}
              <div className="w-full lg:w-7/12 flex items-center">
                <div className="p-6 lg:p-10 xl:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                      <i className="icofont-doctor-alt text-2xl"></i>
                    </div>
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">DENTAL SPECIALIST</span>
                  </div>

                  <h2 className="text-[36px] font-bold text-[#0c244c] mb-0 me-2 leading-tight font-sans">{doctor.name}</h2>
                   <p className="text-[#1976d2] text-[17px] font-semibold mb-2">{doctor.qualifications}</p>
                   <p className="text-[#666] text-[15px] font-medium mb-4">{doctor.title}</p>
 
                   <p className="text-[#666] text-[15px] leading-[1.7] mb-6">
                     {doctor.bio}
                   </p>

                  <div className="mb-6">
                    <h6 className="text-[#0c244c] font-semibold text-[15px] mb-3 flex items-center gap-2">
                       Expertise In
                    </h6>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {doctor.expertise.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                            <i className={`${item.icon} text-lg`}></i>
                          </div>
                          <span className="text-[#666] text-[14px] font-medium">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 border-t border-gray-100 pt-8">
                    <a href="tel:+917709640743" className="bg-[#0c244c] text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/10 flex items-center gap-2">
                      <i className="icofont-calendar text-xl"></i> Book Appointment
                    </a>
                    <a href="tel:+917709640743" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center gap-2">
                      <i className="icofont-phone text-xl"></i> Call Now
                    </a>

                    <div className="flex items-center gap-2 lg:ml-auto">
                      {['instagram', 'youtube', 'whatsapp'].map((social) => (
                        <a 
                          key={social}
                          href={social === 'instagram' ? "https://www.instagram.com/the.dentaledge/" : social === 'youtube' ? "https://www.youtube.com/@thedentaledge" : "https://api.whatsapp.com/send?phone=917709640743"}
                          target="_blank" 
                          rel="noreferrer"
                          className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                        >
                          <i className={`fa-brands fa-${social} text-lg`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {doctor.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-[40px] font-bold text-[#0c244c] mb-2 font-sans">
                {stat.number}
              </div>
              <div className="text-[16px] font-semibold text-[#666]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
