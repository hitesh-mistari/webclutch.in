import React from 'react';
import PageHeader from "../../../components/PageHeader";
import Accordion from "../../../components/Accordion";

export const metadata = {
  title: "Root Canal Treatment | The Dental Edge",
  description: "Save your natural tooth and eliminate pain with our precise and gentle root canal therapy.",
};

export default function RootCanalTreatmentPage() {
  const faqItems = [
    {
      title: "How do I know if I need a root canal?",
      content: "If you have continuous tooth pain, sensitivity, or swelling, it's best to get it checked."
    },
    {
      title: "Is root canal treatment painful?",
      content: "No, the procedure is done with care to minimize discomfort."
    },
    {
      title: "How long does the treatment take?",
      content: "It usually takes 1–2 visits depending on the condition of the tooth."
    },
    {
      title: "Can I eat after the procedure?",
      content: "Yes, but it's advised to avoid hard foods for some time."
    },
    {
      title: "Will the tooth function normally after treatment?",
      content: "Yes, with proper care, the treated tooth works like a normal tooth."
    }
  ];

  return (
    <>
      <PageHeader 
        subtitle="Service Details"
        title="Root Canal Treatment"
        description="Save your natural tooth and eliminate pain with our precise and gentle root canal therapy."
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-6/12 px-4 mb-16 lg:mb-0">
              <div className="rounded-[20px] overflow-hidden shadow-2xl shadow-blue-900/10 ring-1 ring-black/5 relative">
                <img src="/images/RCT.webp" className="w-full h-auto" alt="Root Canal Treatment" />
              </div>
            </div>
            
            <div className="w-full lg:w-6/12 px-4 lg:pl-16">
              <div className="subtitle s2 mb-3 text-blue-600 font-semibold uppercase tracking-[1px] text-[14px]">Root Canal Treatment</div>
              <h2 className="text-[48px] font-bold text-[#0c244c] mb-[20px] leading-tight font-sans">Relieve Pain and Save Your Natural Tooth</h2>
              <p className="text-[#666] text-[18px] mb-[30px] leading-relaxed">
                Root canal treatment is done to treat infection inside the tooth and prevent further damage. 
                At The Dental Edge, we focus on making the procedure comfortable and stress-free while helping you save your natural tooth.
              </p>
            </div>
          </div>

          <div className="h-px bg-gray-100 my-6 lg:my-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'icofont-doctor', title: "Pain Relief Treatment", desc: "Removes infection from inside the tooth to reduce pain and discomfort." },
              { icon: 'icofont-tooth', title: "Tooth Saving Procedure", desc: "Helps preserve your natural tooth instead of removing it." },
              { icon: 'icofont-flash', title: "Advanced Techniques", desc: "Modern methods used for precise and effective treatment." },
              { icon: 'icofont-heart-beat', title: "Minimal Discomfort", desc: "Procedure is done gently to keep you comfortable." },
              { icon: 'icofont-shield', title: "Long-Term Protection", desc: "Prevents further infection and maintains tooth function." },
              { icon: 'icofont-medical-sign', title: "Post-Treatment Care", desc: "Guidance provided to ensure proper healing and care." }
            ].map((item, idx) => (
              <div key={idx} className="p-10 bg-white rounded-[20px] shadow-sm ring-1 ring-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                   <i className={`${item.icon} text-2xl`}></i>
                </div>
                <h4 className="text-[18px] font-semibold text-[#0c244c] mb-2">{item.title}</h4>
                <p className="text-[#666] text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0c244c] py-16 lg:py-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/images/gallery/l5.webp')] bg-cover bg-center hidden lg:block"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-[48px] font-bold text-white mb-[20px] leading-tight font-sans">Why Choose Us</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                {[
                  'Comfort-Focused Treatment', 
                  'Clear Explanation', 
                  'Modern Equipment', 
                  'Flexible Appointments', 
                  'Personal Attention', 
                  'Clean & Safe Clinic'
                ].map((feature, idx) => (
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

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 items-stretch">
            <div className="w-full lg:w-5/12 px-4 mb-16 lg:mb-0">
              <div className="rounded-[20px] overflow-hidden shadow-2xl shadow-blue-900/5 ring-1 ring-black/5 h-full">
                <img src="/images/faq-tooth.png" className="w-full h-full object-cover" alt="FAQ Illustration" />
              </div>
            </div>

            <div className="w-full lg:w-7/12 px-4 lg:pl-16">
              <div className="subtitle s2 mb-3 text-blue-600 font-semibold uppercase tracking-[1px] text-[14px]">Everything You Need to Know</div>
              <h2 className="text-[48px] text-[#0c244c] mb-[20px] leading-tight font-sans lg:whitespace-nowrap">Frequently Asked Questions</h2>
              <Accordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
