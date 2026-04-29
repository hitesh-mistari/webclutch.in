import React from 'react';
import PageHeader from "../../../components/PageHeader";
import AboutSection from "../../../components/About";
import DoctorProfile from "../../../components/DoctorProfile";
import { clinicData } from "../../../data/clinicData";

export const metadata = {
  title: "About Us | The Dental Edge",
  description: "Learn more about The Dental Edge clinic and our commitment to comfortable, clear, and stress-free dental care.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        subtitle="About Us"
        title="About Our Clinic"
        description="At The Dental Edge, we focus on making dental care simple, comfortable, and effective for every patient."
      />
      <AboutSection data={clinicData?.about} />
      <DoctorProfile data={clinicData?.doctor} clinicName={clinicData?.name} />
      
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-6/12 px-4 mb-16 lg:mb-0">
              <div className="subtitle s2 mb-3 text-blue-600 font-semibold uppercase tracking-[1px] text-[14px]">Why Choose The Dental Edge</div>
              <h2 className="text-[48px] font-bold text-[#0c244c] mb-[20px] leading-tight font-sans">Comfortable Care with <br />Clear Guidance</h2>
              <p className="text-[#666] text-[18px] mb-[30px] leading-relaxed">
                We focus on making your dental visits simple and stress-free. From explaining the problem clearly 
                to providing the right treatment, every step is handled with care and attention.
              </p>

              <div className="w-full h-px bg-gray-100 mb-10"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: 'Clear Explanation', desc: 'You\'ll understand your treatment before we begin — no confusion.' },
                  { title: 'Comfort-Focused Care', desc: 'Procedures are done gently to keep you relaxed throughout.' },
                  { title: 'Modern Setup', desc: 'Clean clinic with updated equipment for better treatment.' },
                  { title: 'Personal Attention', desc: 'Every patient is treated individually, not rushed.' }
                ].map((item, idx) => (
                  <div key={idx} className="relative group">
                    <h5 className="text-[18px] font-semibold text-[#0c244c] mb-2 uppercase tracking-tight">{item.title}</h5>
                    <p className="text-[#666] text-[14px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="flex items-center gap-6 justify-center">
                <div className="flex flex-col gap-6 w-1/2 text-right">
                  <div className="rounded-[20px] overflow-hidden shadow-xl shadow-blue-900/5 ring-1 ring-black/5 aspect-[4/5]">
                    <img src="/images/misc/s2.webp" className="w-full h-full object-cover" alt="Success 1" />
                  </div>
                  <div className="rounded-[20px] overflow-hidden shadow-xl shadow-blue-900/5 ring-1 ring-black/5 aspect-square">
                    <img src="/images/misc/s3.webp" className="w-full h-full object-cover" alt="Success 2" />
                  </div>
                </div>

                <div className="w-1/2">
                  <div className="rounded-[20px] overflow-hidden shadow-xl shadow-blue-900/5 ring-1 ring-black/5 aspect-[3/4]">
                    <img src="/images/misc/p3.webp" className="w-full h-full object-cover" alt="Success 3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
