'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = ({ name = 'The Dental Edge', phone = '+91 77096 40743', phoneRaw = '+917709640743' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 lg:px-8 py-2">
        <div className="flex justify-between items-center h-14">
          {/* Logo Area */}
          <div className="flex-1">
            <Link href="/" className="inline-block shrink-0">
              <div className="font-bold leading-tight text-[#0c244c]">
                <div className="text-xl lg:text-2xl tracking-tighter uppercase">{name}</div>
                <div className="text-[8px] lg:text-[10px] uppercase tracking-[0.2em] opacity-80 font-medium">Dental care & implant center</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation (Centered) */}
          <div className="hidden lg:flex items-center flex-none gap-8">
            {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item) => (
              <div key={item} className="relative group">
                <Link
                  href={item === 'Home' ? '/' : item === 'About Us' ? '/about' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-[12px] font-bold uppercase tracking-wider text-[#0c244c] hover:text-[#0fb17b] transition-colors whitespace-nowrap flex items-center gap-1"
                >
                  {item}
                  {item === 'Services' && <i className="fa fa-chevron-down text-[10px] opacity-60 transition-transform duration-300 group-hover:rotate-180"></i>}
                </Link>

                {item === 'Services' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-3">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-t border-l border-gray-100/50"></div>
                    {[
                      { title: 'Root Canal Treatment', path: '/service-root-canal-treatment' },
                      { title: 'Braces and Aligners', path: '/service-braces-and-aligners' },
                      { title: 'Dental Implants', path: '/service-dental-implants' },
                      { title: 'Crowns and Bridges', path: '/service-crowns-and-bridges' }
                    ].map((subItem) => (
                      <Link
                        key={subItem.path}
                        href={subItem.path}
                        className="block px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[#0c244c] hover:text-[#0fb17b] hover:bg-gray-50/50 transition-colors"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA & Mobile Toggle Area */}
          <div className="flex-1 flex justify-end items-center gap-6">
            <a href={`tel:${phoneRaw}`} className="hidden sm:inline-flex bg-[#0c244c] text-white px-6 py-2 rounded-lg font-bold text-[11px] tracking-widest hover:opacity-90 transition-all shadow-md uppercase">
              Book Visit
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
            >
              <span className={`block w-6 h-0.5 bg-[#0c244c] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#0c244c] transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#0c244c] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden bg-white ${isMobileMenuOpen ? 'max-h-screen border-t border-gray-100 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-8 px-2">
            <nav className="flex flex-col gap-6">
              {['HOME', 'ABOUT US', 'SERVICES', 'GALLERY', 'CONTACT'].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <Link
                    href={item === 'HOME' ? '/' : item === 'ABOUT US' ? '/about' : `/${item.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-bold text-[#0c244c] hover:text-[#0fb17b] transition-colors flex items-center justify-between"
                  >
                    {item}
                  </Link>
                  {item === 'SERVICES' && (
                    <div className="flex flex-col pl-4 gap-3 border-l-2 border-gray-100 mt-1 mb-2">
                      {[
                        { title: 'Root Canal Treatment', path: '/service-root-canal-treatment' },
                        { title: 'Braces and Aligners', path: '/service-braces-and-aligners' },
                        { title: 'Dental Implants', path: '/service-dental-implants' },
                        { title: 'Crowns and Bridges', path: '/service-crowns-and-bridges' }
                      ].map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-[13px] font-bold uppercase tracking-wider text-gray-500 hover:text-[#0fb17b] transition-colors"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a 
                href={`tel:${phoneRaw}`} 
                className="bg-[#0c244c] text-white px-6 py-4 rounded-xl font-bold text-center mt-4 transition-all shadow-lg active:scale-95"
              >
                CALL: {phone}
              </a>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
