import React from 'react';

const PageHeader = ({ title, subtitle, description }) => {
  return (
    <section id="subheader" className="bg-[#0c244c] pt-[104px] pb-[42px] lg:pt-[140px] lg:pb-[56px] overflow-hidden relative">

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-10/12">
            <span className="text-[#4db6ac] font-medium uppercase tracking-[1px] text-[14px] mb-[15px] block">
              {subtitle}
            </span>
            <h1 className="text-[48px] font-bold text-white mb-[10px] leading-tight font-sans">
              {title}
            </h1>
            {description && (
              <p className="text-white/80 text-[18px] max-w-[600px] leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
