import React from 'react';
import Hero from "../../../../../../components/Hero";
import About from "../../../../../../components/About";
import Services from "../../../../../../components/Services";
import DoctorProfile from "../../../../../../components/DoctorProfile";
import KidsSection from "../../../../../../components/KidsSection";
import Testimonials from "../../../../../../components/Testimonials";
import FAQ from "../../../../../../components/FAQ";
import PageHeader from "../../../../../../components/PageHeader";
import Header from "../../../../../../components/Header";
import Footer from "../../../../../../components/Footer";
import { clinicData as fallbackData } from "../../../../../../data/clinicData";
import { query } from "../../../../../../lib/db";

export default async function CatchAllTenantPage({ params }) {
  const resolvedParams = await params;
  const category = resolvedParams.category;
  const subCategory = resolvedParams['sub-category'];
  const site = resolvedParams.site;
  const slug = resolvedParams.slug || [];

  // Fetch data from the database using the 'site' slug
  let data = fallbackData;
  try {
    let querySite = site;
    if (site === 'hair-specialist' || site === 'hair-clinic') {
      querySite = 'mauli-skin-hair-laser-and-advance-dental-clinic';
    }

    const res = await query(`
      SELECT * 
      FROM clinics 
      WHERE LOWER(REGEXP_REPLACE(REGEXP_REPLACE(name, '[^a-zA-Z0-9\\s]', '', 'g'), '\\s+', '-', 'g')) = $1
    `, [querySite]);

    if (res.rows.length > 0) {
      const dbData = res.rows[0];
      
      // Filter out low-quality streetview images for main sections
      const validImages = (dbData.images || [])
        .filter(item => item && item.link && !item.link.includes('streetview') && !item.link.includes('panoid'))
        .map(item => item.link);

      // Map DB data to clinicData structure
      data = {
        ...fallbackData,
        validImages: validImages,
        name: dbData.name || fallbackData.name,
        tagline: dbData.description || dbData.sales_summary || fallbackData.tagline,
        contact: {
          ...fallbackData.contact,
          phone: dbData.phone || fallbackData.contact.phone,
          address: dbData.address || fallbackData.contact.address,
          hours: dbData.workday_timing || fallbackData.contact.hours,
        },
        about: {
          ...fallbackData.about,
          description: dbData.description || dbData.sales_summary || fallbackData.about.description,
          image1: validImages[1] || dbData.featured_image || fallbackData.about.image1,
          image2: validImages[2] || fallbackData.about.image2,
        },
        hero: {
          ...fallbackData.hero,
          bgImage: validImages[0] || dbData.featured_image || fallbackData.hero.bgImage,
        },
        doctor: {
          ...fallbackData.doctor,
          name: dbData.name, 
          image: dbData.featured_image || validImages[0] || fallbackData.doctor.image,
          bio: dbData.description || dbData.sales_summary || fallbackData.doctor.bio,
          title: dbData.main_category || fallbackData.doctor.title,
          specialty: dbData.main_category || 'SPECIALIST',
        }
      };

      // Map dynamic services based on clinic type
      const servicesData = {
        dental: [
          { title: 'Root Canal Treatment (RCT)', desc: 'Treat tooth infection and save your natural tooth with a comfortable procedure.', img: '/images/RCT.webp', link: '#' },
          { title: 'Braces & Aligners', desc: 'Align your teeth properly for a better smile and improved bite with our custom solutions.', img: '/images/orthodontic-treatments.jpg', link: '#' },
          { title: 'Dental Implants', desc: 'Replace missing teeth with a high-quality permanent solution that looks and feels natural.', img: '/images/invisalign-treatment.jpg', link: '#' }
        ],
        hair: [
          { title: 'Hair Transplant', desc: 'Restore your natural hairline with advanced FUE & DHT transplant techniques.', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop', link: '#' },
          { title: 'PRP Therapy', desc: 'Stimulate hair growth naturally using platelet-rich plasma from your own blood.', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop', link: '#' },
          { title: 'Hair Loss Treatment', desc: 'Comprehensive medical therapies to stop hair thinning and promote thickness.', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop', link: '#' }
        ],
        skin: [
          { title: 'Laser Hair Reduction', desc: 'Get rid of unwanted hair permanently with painless US-FDA approved laser technology.', img: 'https://images.unsplash.com/photo-1570172619996-23b2e7861166?q=80&w=600&auto=format&fit=crop', link: '#' },
          { title: 'Chemical Peels', desc: 'Rejuvenate your skin, remove pigmentation, and treat acne with specialized medical peels.', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop', link: '#' },
          { title: 'Pumpkin Medifacial', desc: 'Deep hydration and skin brightening treatment for an instant, healthy glow.', img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=600&auto=format&fit=crop', link: '#' }
        ]
      };

      let type = subCategory || '';
      if (!type && dbData) {
        const categoryLower = (dbData.main_category || '').toLowerCase();
        const nameLower = (dbData.name || '').toLowerCase();
        const descLower = (dbData.description || '').toLowerCase();
        
        if (categoryLower.includes('hair') || nameLower.includes('hair') || descLower.includes('hair')) {
          type = 'hair';
        } else if (categoryLower.includes('skin') || nameLower.includes('skin') || descLower.includes('skin') || categoryLower.includes('dermat')) {
          type = 'skin';
        } else {
          type = 'dental';
        }
      }

      if (type && servicesData[type]) {
        data.services = servicesData[type];
        data.type = type;
      }

      // Map reviews if available
      if (dbData.featured_reviews && Array.isArray(dbData.featured_reviews)) {
        const mappedReviews = dbData.featured_reviews.map(r => ({
          name: r.author_title || 'Patient',
          text: r.review_text || '',
          stars: r.review_rating || 5,
          image: r.author_image || '/images/testimonial/1.webp'
        }));
        
        if (mappedReviews.length > 0) {
          data.testimonials = {
            row1: mappedReviews.slice(0, Math.ceil(mappedReviews.length / 2)),
            row2: mappedReviews.slice(Math.ceil(mappedReviews.length / 2))
          };
        }
      }

      // Map gallery images if available
      if (dbData.images && Array.isArray(dbData.images)) {
        data.gallery = dbData.images.filter(item => item && item.link).map(item => item.link);
      }

      // Map FAQs and Doctor metadata based on specialization
      const faqsData = {
        dental: [
          { question: 'How often should I visit the dentist?', answer: 'It is recommended to visit for a checkup every 6 months.' },
          { question: 'Are dental x-rays safe?', answer: 'Yes, modern digital x-rays use extremely low radiation.' },
          { question: 'What is the best way to whiten my teeth?', answer: 'Professional in-office whitening provides the safest and most effective results.' }
        ],
        hair: [
          { question: 'How long does a hair transplant take?', answer: 'Depending on the number of grafts, it typically takes 4 to 8 hours.' },
          { question: 'When will I see results from PRP?', answer: 'Visible improvement usually starts after 3-4 sessions.' },
          { question: 'Is hair loss treatment permanent?', answer: 'Treatments help maintain and restore hair, but consistent care is required.' }
        ],
        skin: [
          { question: 'Is laser hair reduction permanent?', answer: 'It offers long-term hair reduction, drastically reducing growth by 80-90%.' },
          { question: 'How many sessions of chemical peel do I need?', answer: 'A series of 4-6 sessions spaced 2-3 weeks apart is usually recommended.' },
          { question: 'What is a Pumpkin Medifacial?', answer: 'It is an organic, enzyme-rich treatment that exfoliates and hydrates for a glowing complexion.' }
        ]
      };

      const doctorMetadata = {
        dental: {
          qualifications: 'BDS — Experienced Specialist',
          title: 'Dental Surgeon & Consultant',
          expertise: [
            { icon: 'icofont-tooth', label: 'Root Canal Treatment' },
            { icon: 'icofont-surgeon-alt', label: 'Dental Implants' },
            { icon: 'icofont-flash', label: 'Laser Dentistry' },
            { icon: 'icofont-shield', label: 'Cosmetic Dentistry' }
          ],
          stats: [
            { number: '1000+', label: 'Happy Patients' },
            { number: '300+', label: 'Successful Procedures' },
            { number: '10+', label: 'Years Experience' }
          ]
        },
        hair: {
          qualifications: 'Trichologist & Hair Expert',
          title: 'Hair Restoration Specialist',
          expertise: [
            { icon: 'icofont-cut', label: 'Hair Transplant' },
            { icon: 'icofont-injection', label: 'PRP Therapy' },
            { icon: 'icofont-medical-sign', label: 'Scalp Treatment' },
            { icon: 'icofont-shield', label: 'Hair Fall Control' }
          ],
          stats: [
            { number: '2000+', label: 'Consultations' },
            { number: '500+', label: 'Restorations' },
            { number: '8+', label: 'Years Experience' }
          ]
        },
        skin: {
          qualifications: 'M.D. Dermatologist',
          title: 'Cosmetic Dermatologist',
          expertise: [
            { icon: 'icofont-flash', label: 'Laser Treatments' },
            { icon: 'icofont-paint-brush', label: 'Chemical Peels' },
            { icon: 'icofont-sparkles', label: 'MediFacials' },
            { icon: 'icofont-shield', label: 'Anti-Aging' }
          ],
          stats: [
            { number: '1500+', label: 'Skin Rejuvenations' },
            { number: '800+', label: 'Laser Procedures' },
            { number: '12+', label: 'Years Experience' }
          ]
        }
      };

      if (type && doctorMetadata[type]) {
        data.doctor = {
          ...data.doctor,
          ...doctorMetadata[type]
        };
        // Restore dynamic properties from the database
        data.doctor.name = dbData.name;
        data.doctor.image = dbData.featured_image || dbData.images?.[0]?.link || fallbackData.doctor.image;
        data.doctor.bio = dbData.description || dbData.sales_summary || fallbackData.doctor.bio;
      }

      if (type && faqsData[type]) {
        data.faqs = faqsData[type];
      }

      // Hard override for strict Hair-Only Clinic
      if (site === 'hair-specialist' || site === 'hair-clinic') {
        data.name = 'Mauli Hair Clinic';
        data.type = 'hair';
        data.doctor.title = 'Hair Restoration Surgeon';
        data.tagline = 'Expert Hair Transplants, PRP Therapy, & Advanced Hair Fall Solutions.';
        data.about.description = 'At Mauli Hair Clinic, we focus solely on modern, painless hair restoration. Our clinic utilizes advanced FUE and DHT techniques to provide permanent solutions to hair thinning and loss.';
      }

      // Map gallery images if available
      if (dbData.images && Array.isArray(dbData.images)) {
        data.gallery = dbData.images.filter(item => item && item.link).map(item => item.link);
      }
    }
  } catch (error) {
    console.error("Database error:", error);
  }

  // Determine which page to render based on slug
  const pageType = slug[0] || 'home';

  return (
    <>
      <Header name={data.name} phone={data.contact.phone} phoneRaw={data.contact.phoneRaw} />
      <main className="flex-grow pt-16">
        {pageType === 'home' && (
          <div className="homepage-content">
            <Hero data={data} />
            <About data={data?.about} />
            <Services data={data?.services} />
            <DoctorProfile data={data?.doctor} clinicName={data?.name} />
            <KidsSection data={data} />
            <Testimonials data={data?.testimonials} />
            


            <FAQ data={data?.faqs} />
          </div>
        )}

        {pageType === 'about' && (
          <div className="about-page-content">
            <PageHeader 
              subtitle="About Us"
              title={`About ${data.name}`}
              description={data.tagline}
            />
            <About data={data?.about} />
            <DoctorProfile data={data?.doctor} clinicName={data?.name} />
          </div>
        )}

        {pageType === 'services' && (
          <div className="services-page-content">
            <PageHeader 
              subtitle="Our Services"
              title="Comprehensive Care"
              description="Explore the treatments we offer to keep you healthy."
            />
            <div className="bg-white">
              <Services isPage={true} data={data?.services} />
            </div>
          </div>
        )}

        {pageType === 'contact' && (
          <div className="contact-page-content">
            <PageHeader 
              subtitle="Contact"
              title="Get In Touch"
              description={`Reach out to ${data.name} for appointments and inquiries.`}
            />
            <section className="py-16 lg:py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full lg:w-5/12 px-4 mb-12">
                    <h2 className="text-4xl font-bold text-[#0c244c] mb-8">Contact Details</h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-900 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                          <i className="fa fa-phone text-xl"></i>
                        </div>
                        <div>
                          <h6 className="text-gray-400 font-bold uppercase text-xs mb-1">Phone</h6>
                          <p className="text-[#0c244c] font-bold text-lg">{data.contact.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-900 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                          <i className="fa fa-map-marker text-xl"></i>
                        </div>
                        <div>
                          <h6 className="text-gray-400 font-bold uppercase text-xs mb-1">Location</h6>
                          <p className="text-[#0c244c] font-bold text-lg">{data.contact.address}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-900 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                          <i className="fa fa-clock text-xl"></i>
                        </div>
                        <div>
                          <h6 className="text-gray-400 font-bold uppercase text-xs mb-1">Hours</h6>
                          <p className="text-[#0c244c] font-bold text-lg">{data.contact.hours}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {pageType === 'gallery' && (
          <div className="gallery-page-content">
            <PageHeader 
              subtitle="Portfolio"
              title="Clinical Excellence Gallery"
              description={`Explore the environment and results at ${data.name}.`}
            />
            <section id="section-gallery" className="py-12 lg:py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {(data.gallery || []).map((img, index) => (
                    <a 
                      key={index} 
                      href={img} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative block aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl shadow-blue-900/5 ring-1 ring-black/5 hover:-translate-y-2 transition-all duration-500"
                    >
                      <img 
                        src={img} 
                        alt={`Clinic Gallery ${index}`} 
                        className="w-full h-full object-cover transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0c244c] transform scale-50 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                          <i className="fa fa-search-plus text-xl"></i>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
      <Footer data={data} />
    </>
  );
}
