import React from 'react';

interface TemplateProps {
  siteData: {
    name: string;
    category: string;
    content: any;
  };
}

export const DentistTemplate: React.FC<TemplateProps> = ({ siteData }) => {
  const content = siteData.content || {};
  const heroTitle = content.heroTitle || `Welcome to ${siteData.name}`;
  const heroSubtitle = content.heroSubtitle || 'Professional dental care you can trust.';
  const aboutText = content.aboutText || 'We offer state-of-the-art dental services with a gentle touch. Your smile is our priority.';
  const services = content.services || ['Teeth Whitening', 'Dental Implants', 'Root Canal', 'Routine Checkups'];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center font-bold text-slate-950">
              D
            </div>
            <span className="text-xl font-bold tracking-tight text-white">{siteData.name}</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#services" className="hover:text-teal-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden flex flex-col items-center justify-center text-center bg-gradient-to-b from-teal-950/20 via-slate-900 to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)]" />
        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-6">
            ✨ Premium Dental Care
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-teal-100 to-teal-400 bg-clip-text text-transparent mb-6">
            {heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            {heroSubtitle}
          </p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="px-6 py-3 rounded-xl bg-teal-500 text-slate-950 font-semibold hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transform hover:-translate-y-0.5">
              Book Appointment
            </a>
            <a href="#about" className="px-6 py-3 rounded-xl bg-slate-800 text-slate-200 font-semibold hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-600">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-5xl mx-auto text-center border-t border-slate-800">
        <h2 className="text-3xl font-bold mb-6 text-white">About Our Practice</h2>
        <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
          {aboutText}
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-950 border-t border-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service: string, index: number) => (
              <div key={index} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-teal-500/30 hover:bg-slate-900 transition-all group duration-300">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                  🦷
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-200 group-hover:text-teal-400 transition-colors">
                  {service}
                </h3>
                <p className="text-sm text-slate-400">
                  Comprehensive treatment using advanced digital diagnostics.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {siteData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};
