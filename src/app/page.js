import React from 'react';
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import DoctorProfile from "../components/DoctorProfile";
import KidsSection from "../components/KidsSection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import { clinicData } from "../data/clinicData";

export default function Home() {
  return (
    <div className="homepage-content">
      <Hero data={clinicData} />
      <About data={clinicData?.about} />
      <Services data={clinicData?.services} />
      <DoctorProfile data={clinicData?.doctor} clinicName={clinicData?.name} />
      <KidsSection data={clinicData} />
      <Testimonials data={clinicData?.testimonials} />
      <FAQ data={clinicData?.faqs} />
    </div>
  );
}
