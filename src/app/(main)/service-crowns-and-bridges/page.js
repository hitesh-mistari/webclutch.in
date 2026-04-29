import React from 'react';
import PageHeader from "../../../components/PageHeader";
import Accordion from "../../../components/Accordion";

export const metadata = {
  title: "Crowns & Bridges | The Dental Edge",
  description: "Protect and restore your damaged teeth with our custom-crafted, durable crowns and bridges.",
};

export default function CrownsAndBridgesPage() {
  const faqItems = [
    {
      title: "When do I need a crown?",
      content: "When a tooth is damaged, weak, or after root canal treatment."
    },
    {
      title: "What is a dental bridge used for?",
      content: "It is used to replace one or more missing teeth."
    },
    {
      title: "Are crowns and bridges long-lasting?",
      content: "Yes, with proper care, they can last for many years."
    },
    {
      title: "Will it look natural?",
      content: "Yes, crowns and bridges are designed to match your natural teeth."
    },
    {
      title: "Is the procedure painful?",
      content: "The treatment is done with care to keep you comfortable."
    }
  ];

  const services = [
    { title: "Dental Crowns", desc: "Covers and protects a damaged tooth, restoring its strength and shape." },
    { title: "Dental Bridges", desc: "Fills the gap of missing teeth using support from nearby teeth." },
    { title: "Ceramic Crowns", desc: "Tooth-colored crowns designed to look natural and blend well." },
    { title: "Zirconia Crowns", desc: "Strong and durable crowns suitable for long-term use." },
    { title: "Bridge Repair", desc: "Repair or replace old or damaged dental bridges." },
    { title: "Restoration", desc: "Restore broken or worn-down teeth for better function." },
    { title: "Full Protection", desc: "Complete protection for weak or heavily damaged teeth." },
    { title: "Expert Evaluation", desc: "Proper evaluation to choose the right type of crown or bridge." },
    { title: "Quick Protection", desc: "Short-term protection for your tooth while final crown is ready." }
  ];

  const features = [
    'Clear Explanation',
    'Comfort-Focused',
    'Natural Results',
    'Modern Materials',
    'Proper Function',
    'Clean Clinic'
  ];

  return (
    <>
      <PageHeader 
        subtitle="Service Details"
        title="Crowns & Bridges"
        description="Protect and restore your damaged teeth with our custom-crafted, durable crowns and bridges."
      />

      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-6/12 px-4 mb-16 lg:mb-0">
              <div className="rounded-[20px] overflow-hidden shadow-2xl shadow-blue-900/10 ring-1 ring-black/5 relative">
                <img src="/images/crowns-and-bridge.jpg" className="w-full h-auto" alt="Crowns & Bridges" />
              </div>
            </div>
            
            <div className="w-full lg:w-6/12 px-4 lg:pl-16">
              <div className="subtitle s2 mb-3 text-blue-600 font-semibold uppercase tracking-[1px] text-[14px]">Crowns & Bridges</div>
              <h2 className="text-[48px] font-bold text-[#0c244c] mb-[20px] leading-tight font-sans">Restore Strength and Function to Your Teeth</h2>
              <p className="text-[#666] text-[18px] mb-[30px] leading-relaxed">
                Crowns and bridges are used to repair damaged teeth and replace missing ones. 
                At The Dental Edge, we provide well-fitted, natural-looking restorations that help you eat, speak, and smile comfortably.
              </p>
            </div>
          </div>

          <div className="h-px bg-gray-100 my-6 lg:my-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => (
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
