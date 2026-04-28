'use client';

import React from 'react';
import Link from 'next/link';

const Footer = ({ data }) => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const fallbackData = {
    name: 'The Dental Edge',
    contact: {
      address: 'F-01, Anand Bhutada Sankul, Bytco Point, Nashik',
      phone: '+91 77096 40743',
      phoneRaw: '+917709640743',
      mapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.319323145239!2d73.8357375752227!3d19.95306752382433!2m3!1f0!2f0!3f0!3m2!i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd95c3f0beb365%3A0xd0585399ea97656e!2sThe%20Dental%20Edge!5e0!3m2!1sen!2sin!4v1713342500000!5m2!1sen!2sin'
    },
    socials: {
      whatsapp: 'https://api.whatsapp.com/send?phone=917709640743',
      instagram: 'https://www.instagram.com/the.dentaledge/',
      youtube: 'https://www.youtube.com/@thedentaledge'
    }
  };

  const footerData = data || fallbackData;

  return (
    <footer className="bg-[rgb(12,36,76)] text-white pt-16 pb-6 font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-wrap -mx-4 gap-y-12 mb-12">
          {/* Column 1: Logo & Info */}
          <div className="w-full md:w-1/2 lg:w-4/12 px-4 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-wider uppercase">
              {footerData.name}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              At {footerData.name}, we provide simple, honest, and comfortable dental care for every patient. We help you maintain a healthy smile with confidence.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot text-blue-400 text-lg mt-1"></i>
                <div>
                  <div className="text-white font-semibold text-base mb-1">Clinic Location</div>
                  <div className="text-white/60 text-sm">{footerData.contact.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-phone text-blue-400 text-lg mt-1"></i>
                <div>
                  <div className="text-white font-semibold text-base mb-1">Call Us</div>
                  <a href={`tel:${footerData.contact.phoneRaw}`} className="text-white/60 text-sm hover:text-blue-400 transition-colors">{footerData.contact.phone}</a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              {[
                { icon: 'whatsapp', link: footerData.socials.whatsapp },
                { icon: 'instagram', link: footerData.socials.instagram },
                { icon: 'youtube', link: footerData.socials.youtube }
              ].map((item, i) => (
                <a 
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-blue-400 transition-colors text-xl"
                >
                  <i className={`fa-brands fa-${item.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Company */}
          <div className="w-full md:w-1/2 lg:w-2/12 px-4">
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/60 hover:text-blue-400 transition-colors text-sm">Home</Link></li>
              <li><Link href="/services" className="text-white/60 hover:text-blue-400 transition-colors text-sm">Our Services</Link></li>
              <li><Link href="/gallery" className="text-white/60 hover:text-blue-400 transition-colors text-sm">Gallery</Link></li>
              <li><Link href="/about" className="text-white/60 hover:text-blue-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-blue-400 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="w-full md:w-1/2 lg:w-2/12 px-4">
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/service-root-canal-treatment" className="text-white/60 hover:text-blue-400 transition-colors text-sm">Root Canal Treatment</Link></li>
              <li><Link href="/service-braces-and-aligners" className="text-white/60 hover:text-blue-400 transition-colors text-sm">Braces & Aligners</Link></li>
              <li><Link href="/service-dental-implants" className="text-white/60 hover:text-blue-400 transition-colors text-sm">Dental Implants</Link></li>
              <li><Link href="/service-crowns-and-bridges" className="text-white/60 hover:text-blue-400 transition-colors text-sm">Crowns & Bridges</Link></li>
            </ul>
          </div>

          {/* Column 4: Find Us */}
          <div className="w-full lg:w-4/12 px-4">
            <h4 className="text-white font-bold text-lg mb-6">Find Us</h4>
            <div className="rounded-2xl overflow-hidden h-[250px] shadow-lg border border-white/10">
              <iframe 
                src={footerData.contact.mapsLink} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          <p className="text-white/50 text-sm">
            Copyright {new Date().getFullYear()} - Designed by Hitesbuildss
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors shadow-lg cursor-pointer"
            aria-label="Scroll to top"
          >
            <i className="fa-solid fa-chevron-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
