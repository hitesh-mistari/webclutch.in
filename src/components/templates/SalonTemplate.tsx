import React from 'react';

interface TemplateProps {
  siteData: {
    name: string;
    category: string;
    content: any;
  };
}

export const SalonTemplate: React.FC<TemplateProps> = ({ siteData }) => {
  const content = siteData.content || {};
  const heroTitle = content.heroTitle || `Unveil Your Beauty at ${siteData.name}`;
  const heroSubtitle = content.heroSubtitle || 'Luxury beauty experiences and professional styling.';
  const aboutText = content.aboutText || 'We bring out the best version of you in a serene, luxurious space. Experience the ultimate pampering.';
  const services = content.services || ['Hair Design & Color', 'Nail Artistry', 'Facial Treatments', 'Bridal & Occasion Makeup'];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      {/* Navigation */}
      <nav className="border-b border-neutral-900 bg-neutral-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-rose-400 flex items-center justify-center font-bold text-neutral-950">
              S
            </div>
            <span className="text-xl font-bold tracking-tight text-white">{siteData.name}</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-neutral-400">
            <a href="#about" className="hover:text-rose-400 transition-colors">About</a>
            <a href="#services" className="hover:text-rose-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-rose-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden flex flex-col items-center justify-center text-center bg-gradient-to-b from-rose-950/10 via-neutral-950 to-neutral-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)]" />
        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-6">
            ✨ Premium Salon & Spa
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-rose-100 to-rose-400 bg-clip-text text-transparent mb-6">
            {heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            {heroSubtitle}
          </p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="px-6 py-3 rounded-xl bg-rose-400 text-neutral-950 font-semibold hover:bg-rose-300 transition-all shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transform hover:-translate-y-0.5">
              Book Session
            </a>
            <a href="#services" className="px-6 py-3 rounded-xl bg-neutral-900 text-neutral-200 font-semibold hover:bg-neutral-800 transition-all border border-neutral-800 hover:border-neutral-700">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-5xl mx-auto text-center border-t border-neutral-900">
        <h2 className="text-3xl font-bold mb-6 text-white">Our Philosophy</h2>
        <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl mx-auto">
          {aboutText}
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Treatments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service: string, index: number) => (
              <div key={index} className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/50 hover:border-rose-500/30 hover:bg-neutral-900 transition-all group duration-300">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 mb-4 group-hover:scale-110 transition-transform">
                  ✨
                </div>
                <h3 className="text-xl font-semibold mb-2 text-neutral-200 group-hover:text-rose-400 transition-colors">
                  {service}
                </h3>
                <p className="text-sm text-neutral-400">
                  Tailored care routines using industry-leading organic beauty products.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-900 bg-neutral-950 text-center text-neutral-600 text-sm">
        <p>&copy; {new Date().getFullYear()} {siteData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};
