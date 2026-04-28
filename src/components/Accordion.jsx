'use client';

import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="divide-y divide-gray-200 mt-4">
      {items.map((item, idx) => (
        <div key={idx} className="group">
          <button 
            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            className="w-full flex items-center justify-between py-5 text-left transition-all"
          >
            <span className="text-[18px] font-semibold text-[#0c244c] group-hover:text-blue-600 transition-colors">
              {item.title}
            </span>
            <div className={`text-[#0c244c] transition-transform duration-300 ${activeIndex === idx ? 'rotate-180' : ''}`}>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === idx ? 'max-h-[500px] pb-5' : 'max-h-0'}`}>
            <p className="text-[#666] text-[16px] leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
