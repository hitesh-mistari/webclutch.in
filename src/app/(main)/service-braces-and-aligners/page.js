import React from 'react';
import PageHeader from "../../../components/PageHeader";
import Accordion from "../../../components/Accordion";

export const metadata = {
  title: "Braces & Aligners | The Dental Edge",
  description: "Achieve your dream smile with our advanced orthodontic treatments including traditional braces and clear aligners.",
};

export default function BracesAndAlignersPage() {
  const faqItems = [
    {
      title: "How long does braces treatment take?",
      content: "It usually takes several months to a couple of years, depending on the case."
    },
    {
      title: "Are braces painful?",
      content: "You may feel slight discomfort initially, but it adjusts within a few days."
    },
    {
      title: "Can adults get braces or aligners?",
      content: "Yes, both options are suitable for adults as well."
    },
    {
      title: "Which is better: braces or aligners?",
      content: "It depends on your condition and preference. We guide you on the best option."
    },
    {
      title: "Do I need to wear retainers after treatment?",
      content: "Yes, retainers help keep your teeth in their new position."
    }
  ];

  const treatments = [
    { title: "Metal Braces", desc: "Traditional and effective option for correcting alignment issues." },
    { title: "Ceramic Braces", desc: "Less visible braces that blend better with your teeth." },
    { title: "Clear Aligners", desc: "Removable and nearly invisible option for straightening teeth." },
    { title: "Alignment Correction", desc: "Treatment for crowded, spaced, or uneven teeth." },
    { title: "Bite Correction", desc: "Helps improve issues like overbite, underbite, and crossbite." },
    { title: "Retainers", desc: "Used after treatment to maintain your new alignment." },
    { title: "Space Closure", desc: "Closes gaps between teeth for a more even and aligned smile." },
    { title: "Minor Correction", desc: "Suitable for small corrections without full braces treatment." }
  ];

  const features = [
    'Proper evaluation first', 
    'Clear explanation of process', 
    'Step-by-step guidance', 
    'Focus on comfort', 
    'Regular progress tracking', 
    'Custom options', 
    'Clean clinic environment'
  ];

  return (
    <>
      <PageHeader 
        subtitle="Service Details"
        title="Braces & Aligners"
        description="Achieve your dream smile with our advanced orthodontic treatments including traditional braces and clear aligners."
      />

      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-6/12 px-4 mb-16 lg:mb-0">
              <div className="rounded-[20px] overflow-hidden shadow-2xl shadow-blue-900/10 ring-1 ring-black/5 relative">
                <img src="/images/orthodontic-treatments.jpg" className="w-full h-auto" alt="Braces & Aligners" />
              </div>
            </div>
            
            <div className="w-full lg:w-6/12 px-4 lg:pl-16">
              <div className="subtitle s2 mb-3 text-blue-600 font-semibold uppercase tracking-[1px] text-[14px]">Braces & Aligners</div>
              <h2 className="text-[48px] font-bold text-[#0c244c] mb-[20px] leading-tight font-sans">Straighten Your Teeth with the Right Guidance</h2>
              <p className="text-[#666] text-[18px] mb-[30px] leading-relaxed">
                Braces and aligners help correct misaligned teeth and improve your bite over time. 
                At The Dental Edge, we guide you through the process step by step, making it simple, comfortable, and easy to follow.
              </p>
            </div>
          </div>

          <div className="h-px bg-gray-100 my-6 lg:my-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((item, idx) => (
              <div key={idx} className="p-10 bg-white rounded-[20px] shadow-sm ring-1 ring-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                   <i className="icofont-tooth text-2xl"></i>
                </div>
                <h4 className="text-[18px] font-semibold text-[#0c244c] mb-2">{item.title}</h4>
                <p className="text-[#666] text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0c244c] py-16 lg:py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/images/gallery/l5.webp')] bg-cover bg-center hidden lg:block"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-[48px] font-bold text-white mb-[20px] leading-tight font-sans">Why Choose Us</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-[#4db6ac] group-hover:bg-[#4db6ac] group-hover:text-white transition-all">
                      <i className="fa fa-check text-[10px]"></i>
                    </div>
                    <span className="text-blue-50 font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 items-stretch">
            <div className="w-full lg:w-5/12 px-4 mb-16 lg:mb-0">
              <div className="rounded-[20px] overflow-hidden shadow-2xl shadow-blue-900/5 ring-1 ring-black/5 h-full">
                <img src="/images/faq-tooth.png" className="w-full h-full object-cover" alt="FAQ Illustration" />
              </div>
            </div>

            <div className="w-full lg:w-7/12 px-4 lg:pl-16">
              <div className="subtitle s2 mb-3 text-blue-600 font-semibold uppercase tracking-[1px] text-[14px]">Everything You Need to Know</div>
              <h2 className="text-[48px] font-semibold text-[#0c244c] mb-[20px] leading-tight font-sans" style={{ fontWeight: 600 }}>Frequently Asked Questions</h2>
              <Accordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
