'use client';

import React, { useState, useEffect } from 'react';
import PageHeader from "../../../components/PageHeader";
import { clinicData } from "../../../data/clinicData";

export default function ContactPage() {
  const contactData = clinicData || {
    name: 'The Dental Edge',
    contact: {
      phone: '+91 77096 40743',
      address: 'F-01, Anand Bhutada Sankul, Bytco Point, Nashik',
      hours: 'Mon - Sat: 10:30 AM - 1:30 PM, 05:30 PM - 8:30 PM',
      sundayHours: 'Sunday: Closed',
      mapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.622543324683!2d73.83573767510793!3d19.95306248135832!2m3!1f0!2f0!3f0!3m2!i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd95c3f0beb365%3A0xd0585399ea97656e!2sThe%20Dental%20Edge!5e0!3m2!1sen!2sin!4v1713342500000!5m2!1sen!2sin'
    }
  };

  const [clinicStatus, setClinicStatus] = useState({ text: 'Checking...', color: 'bg-gray-100 text-gray-500' });

  useEffect(() => {
    const updateClinicStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const time = hour + minute / 60;

      if (day === 0) {
        setClinicStatus({ text: 'Closed', color: 'bg-red-100 text-red-600' });
        return;
      }

      const isOpen = (time >= 10.5 && time <= 13.5) || (time >= 17.5 && time <= 20.5);

      if (isOpen) {
        setClinicStatus({ text: 'Open Now', color: 'bg-green-100 text-green-600' });
      } else {
        setClinicStatus({ text: 'Closed', color: 'bg-red-100 text-red-600' });
      }
    };

    updateClinicStatus();
    const interval = setInterval(updateClinicStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <PageHeader 
        subtitle="Contact"
        title="Let's start a conversation"
        description="Whether you're looking for expert dental care, have a question about our services, or want to schedule a visit — we'd love to hear from you."
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 lg:items-stretch">
            <div className="w-full lg:w-5/12 px-4 mb-12 lg:mb-0">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wider mb-6">Get in touch</div>
              <h2 className="text-4xl font-bold text-[#0c244c] mb-8">How can we help?</h2>

              <div className="space-y-4">
                {/* Contact Card: Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[rgb(12,36,76)] shadow-lg shadow-blue-900/5 rounded-2xl flex items-center justify-center text-white transition-all duration-300 ring-1 ring-black/5 flex-shrink-0">
                    <i className="fa fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h6 className="text-gray-400 font-bold uppercase tracking-tight text-xs mb-1">Phone</h6>
                    <p className="text-[#0c244c] font-bold text-lg">{contactData.contact.phone}</p>
                  </div>
                </div>

                {/* Contact Card: Location */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[rgb(12,36,76)] shadow-lg shadow-blue-900/5 rounded-2xl flex items-center justify-center text-white transition-all duration-300 ring-1 ring-black/5 flex-shrink-0">
                    <i className="fa fa-map-marker text-xl"></i>
                  </div>
                  <div>
                    <h6 className="text-gray-400 font-bold uppercase tracking-tight text-xs mb-1">Location</h6>
                    <p className="text-[#0c244c] font-bold text-lg">{contactData.contact.address}</p>
                  </div>
                </div>

                {/* Contact Card: Clock */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[rgb(12,36,76)] shadow-lg shadow-blue-900/5 rounded-2xl flex items-center justify-center text-white transition-all duration-300 ring-1 ring-black/5 flex-shrink-0">
                    <i className="fa fa-clock text-xl"></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h6 className="text-gray-400 font-bold uppercase tracking-tight text-xs">Opening Hours</h6>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${clinicStatus.color}`}>
                        {clinicStatus.text}
                      </span>
                    </div>
                    <p className="text-[#0c244c] font-bold text-base lg:text-lg whitespace-nowrap">{contactData.contact.hours}</p>
                    <p className="text-gray-400 text-sm mt-1">{contactData.contact.sundayHours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-blue-50/50 rounded-[32px] border border-blue-100/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <h5 className="text-[#0c244c] font-bold text-xl mb-4 relative z-10 font-serif">Patient Guidance</h5>
                <p className="text-gray-600 leading-relaxed mb-0 relative z-10">
                  For specialized treatment inquiries, proper guidance, or second opinions, please call us directly or visit our clinic. 
                  We aim to provide the best clinical guidance for your dental health.
                </p>
              </div>

              <div className="mt-6 pl-6 border-l-4 border-[rgb(12,36,76)] italic text-[#0c244c] font-medium text-lg">
                "Every patient deserves a healthy smile through honest, simple, and comfortable dental care."
                <div className="mt-2 text-sm not-italic font-bold text-gray-400 uppercase tracking-widest">— {contactData.name}</div>
              </div>
            </div>

            <div className="w-full lg:w-7/12 px-4 flex">
              <div className="w-full h-full min-h-[400px] lg:min-h-0 rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
                <iframe 
                  src={contactData.contact.mapsLink} 
                  width="100%" height="100%" style={{ border: 0 }} 
                  allowFullScreen="" loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
