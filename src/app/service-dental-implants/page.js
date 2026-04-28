import React from 'react';
import PageHeader from "../../components/PageHeader";
import Accordion from "../../components/Accordion";

export const metadata = {
  title: "Dental Implants | The Dental Edge",
  description: "Restore your smile's function and aesthetics with our permanent and natural-looking dental implant solutions.",
};

export default function DentalImplantsPage() {
  const faqItems = [
    {
      title: "Are dental implants safe?",
      content: "Yes, when done with proper planning, implants are a safe and long-lasting solution."
    },
    {
      title: "Is the implant procedure painful?",
      content: "The procedure is done with care to minimize discomfort."
    },
    {
      title: "How long do implants last?",
      content: "With proper care, implants can last for many years."
    },
    {
      title: "Can anyone get dental implants?",
      content: "It depends on your bone condition and overall oral health. A check-up is required."
    },
    {
      title: "How long does the treatment take?",
      content: "The process may take a few months, depending on healing time."
    }
  ];

  const services = [
    { title: "Single Tooth Implant", desc: "Replace one missing tooth with a natural-looking fixed solution." },
    { title: "Multiple Teeth", desc: "Ideal for replacing more than one missing tooth effectively." },
    { title: "Full Mouth Implants", desc: "Complete solution for patients with multiple missing teeth." },
    { title: "Supported Crowns", desc: "Strong and durable crowns placed over implants for natural function." },
    { title: "Detailed Planning", desc: "Detailed check-up and planning before starting treatment." },
    { title: "Post-Implant Care", desc: "Guidance for proper healing and long-term maintenance." }
  ];

  const features = [
    'Proper evaluation first', 
    'Clear recovery process', 
    'Safety at every step', 
    'Modern precision techniques', 
    'Personalized planning', 
    'Hygienic clinic environment'
  ];

  return (
    <>
      <PageHeader 
        subtitle="Service Details"
        title="Dental Implants"
        description="Restore your smile's function and aesthetics with our permanent and natural-looking dental implant solutions."
      />

      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-6/12 px-4 mb-16 lg:mb-0">
              <div className="rounded-[20px] overflow-hidden shadow-2xl shadow-blue-900/10 ring-1 ring-black/5 relative">
                <img src="/images/invisalign-treatment.jpg" className="w-full h-auto" alt="Dental Implants" />
              </div>
            </div>
            
            <div className="w-full lg:w-6/12 px-4 lg:pl-16">
              <div className="subtitle s2 mb-3 text-blue-600 font-semibold uppercase tracking-[1px] text-[14px]">Dental Implants</div>
              <h2 className="text-[48px] font-bold text-[#0c244c] mb-[20px] leading-tight font-sans">A Strong and Long-Lasting Solution for Missing Teeth</h2>
              <p className="text-[#666] text-[18px] mb-[30px] leading-relaxed">
                Dental implants are a reliable way to replace missing teeth and restore both function and appearance. 
                At The Dental Edge, we guide you through the process carefully to ensure a safe, comfortable, and well-planned treatment.
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
