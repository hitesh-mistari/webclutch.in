'use client';

import React, { useState } from 'react';

const fallbackFaqData = [
  { 
    q: 'How often should I visit the dentist?', 
    a: 'It’s generally recommended to visit every 6 months for a check-up and cleaning, unless advised otherwise.' 
  },
  { 
    q: 'What should I do in a dental emergency?', 
    a: 'Contact the clinic as soon as possible. Early treatment helps prevent the issue from getting worse.' 
  },
  { 
    q: 'Do you treat children as well?', 
    a: 'Yes, we provide gentle and comfortable dental care for children of all ages.' 
  },
  { 
    q: 'What are the options for missing teeth?', 
    a: 'Depending on your case, options include dental implants, bridges, or other suitable treatments.' 
  },
  { 
    q: 'Is teeth whitening safe?', 
    a: 'Yes, when done under professional guidance, it is safe and effective.' 
  }
];

const FAQ = ({ data }) => {
  const faqList = data || fallbackFaqData;
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <div className="w-full lg:w-5/12">
            <div className="rounded-[20px] overflow-hidden shadow-2xl shadow-blue-900/5 ring-1 ring-black/5 h-full">
              <img 
                src="/images/faq-tooth.png" 
                className="w-full h-full object-cover" 
                alt="Frequently Asked Questions" 
              />
            </div>
          </div>

          <div className="w-full lg:w-7/12 lg:pl-16">
            <div className="subtitle s2 mb-3 text-blue-600 font-semibold uppercase tracking-[1px] text-[14px]">Everything You Need to Know</div>
            <h2 className="text-[48px] text-[#0c244c] mb-[20px] leading-tight font-sans lg:whitespace-nowrap">Frequently Asked Questions</h2>
            
            <div className="divide-y divide-gray-200 mt-8">
              {faqList.map((item, idx) => (
                <div key={idx} className="group">
                  <button 
                    onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                    className="w-full flex items-center justify-between py-5 text-left transition-all"
                  >
                    <span className="text-[18px] font-semibold text-[#0c244c] group-hover:text-blue-600 transition-colors">
                      {item.q}
                    </span>
                    <div className={`text-[#0c244c] transition-transform duration-300 ${activeIndex === idx ? 'rotate-180' : ''}`}>
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === idx ? 'max-h-[500px] pb-5' : 'max-h-0'}`}>
                    <p className="text-[#666] text-[16px] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
