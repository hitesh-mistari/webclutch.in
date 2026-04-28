'use client';

import React from 'react';


const fallbackTestimonials = {
  row1: [
    { name: 'Vineet Joshi', text: 'Dr. Tulsi provided clear communication about the cavities, explaining which fillings required urgent attention and which could be deferred. The teeth cleaning was completed first and was done thoroughly.', stars: 5, image: '/images/testimonial/1.webp' },
    { name: 'tejas bhojwani', text: 'One of the best dental clinics I’ve visited. Modern equipment, clean environment, and very professional approach. The doctor took time to understand my problem.', stars: 5, image: '/images/testimonial/2.webp' },
    { name: 'Anu Kadam', text: 'I had my aligner treatment done at this dental clinic. The doctor was very professional and supportive, and the treatment experience was smooth. I’m satisfied with the results. Highly recommended.', stars: 5, image: '/images/testimonial/anu.png' },
    { name: 'khushboo chhajed', text: 'Great experience! The dentist was very gentle and explained everything clearly. Highly recommended!', stars: 5, image: '/images/testimonial/khushboo.png' },
    { name: 'Urvashi Varma', text: 'Honestly, i was worrried as i was taking my 17 month old daughter for her first dental checkup. But Tulsi, with her handson experience and patience, managed to check her so easily.', stars: 5, image: '/images/testimonial/urvashi.png' },
  ],
  row2: [
    { name: 'Priya Parshurame', text: 'Excellent diagnosis and treatment. Proficient and super skilled. Thank you very much', stars: 5, image: '/images/testimonial/priya.png' },
    { name: 'Raj Chopda', text: 'Best doctor , understands the root problem, is patient listener and then treats really nice .', stars: 5, image: '/images/testimonial/3.webp' },
    { name: 'Achyut Bhutada', text: 'Thank you to The Dental Edge for the wonderful dental experience! Dr. Tulsi and the team made me feel comfortable.', stars: 5, image: '/images/testimonial/4.webp' },
    { name: 'Sayyam', text: 'I was a good experience where I got my cavities removed and and got filling done.', stars: 5, image: '/images/testimonial/5.webp' },
    { name: 'Vishal Amesar', text: 'Had an excellent experience with my dental treatment. Very professional and caring. Highly satisfied with the results', stars: 5, image: '/images/testimonial/6.webp' },
  ]
};

const Testimonials = ({ data }) => {
  const testimonialsData = data || fallbackTestimonials;
  return (
    <section className="py-16 lg:py-20 bg-[#f8fafc] overflow-hidden">
      <div className="container mx-auto px-4 mb-16 text-center">
        <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Real Patient Feedback</div>
        <h2 className="text-4xl lg:text-5xl font-bold text-[#0c244c] mb-4">Patient Experiences</h2>
      </div>

      <div className="space-y-10">
        {/* Row 1 - Marquee Left */}
        <div className="flex gap-8 animate-marquee-left whitespace-nowrap hover:[animation-play-state:paused]">
          {[...testimonialsData.row1, ...testimonialsData.row1].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[24px] shadow-sm border border-gray-100 w-[300px] md:w-[420px] shrink-0 flex flex-col h-[320px] md:h-[300px]">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      className="w-12 h-12 rounded-xl object-cover shadow-sm" 
                      alt={item.name} 
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold uppercase shadow-sm ${
                    idx % 3 === 0 ? 'bg-green-600' : idx % 3 === 1 ? 'bg-blue-600' : 'bg-purple-600'
                  } ${item.image ? 'hidden' : 'flex'}`}>
                    {item.name[0]}
                  </div>
                  <div className="font-bold text-gray-900 text-lg tracking-tight">{item.name}</div>
                </div>
                <div className="w-8 h-8">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" 
                    alt="Google" 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
              
              <div className="flex-grow">
                <p className="text-gray-600 text-base leading-relaxed break-words whitespace-normal line-clamp-4">
                  "{item.text}"
                </p>
              </div>

              <div className="flex justify-between items-end mt-6 pt-4 border-t border-gray-50">
                <div className="flex gap-0.5 text-[#f4b400]">
                  {[...Array(item.stars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Google review</div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Marquee Right */}
        <div className="flex gap-8 animate-marquee-right whitespace-nowrap hover:[animation-play-state:paused]">
          {[...testimonialsData.row2, ...testimonialsData.row2].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[24px] shadow-sm border border-gray-100 w-[300px] md:w-[420px] shrink-0 flex flex-col h-[320px] md:h-[300px]">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      className="w-12 h-12 rounded-xl object-cover shadow-sm" 
                      alt={item.name} 
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold uppercase shadow-sm ${
                    idx % 3 === 0 ? 'bg-orange-600' : idx % 3 === 1 ? 'bg-indigo-600' : 'bg-rose-600'
                  } ${item.image ? 'hidden' : 'flex'}`}>
                    {item.name[0]}
                  </div>
                  <div className="font-bold text-gray-900 text-lg tracking-tight">{item.name}</div>
                </div>
                <div className="w-8 h-8">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" 
                    alt="Google" 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
              
              <div className="flex-grow">
                <p className="text-gray-600 text-base leading-relaxed break-words whitespace-normal line-clamp-4">
                  "{item.text}"
                </p>
              </div>

              <div className="flex justify-between items-end mt-6 pt-4 border-t border-gray-50">
                <div className="flex gap-0.5 text-[#f4b400]">
                  {[...Array(item.stars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Google review</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
