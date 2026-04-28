import React from 'react';
import PageHeader from "../../components/PageHeader";
import ServicesList from "../../components/Services";
import { clinicData } from "../../data/clinicData";

export const metadata = {
  title: "Our Services | The Dental Edge",
  description: "Explore our comprehensive dental services including Root Canal Treatment, Braces, Implants, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        subtitle="Our Services"
        title="Comprehensive Dental Care"
        description="We offer a wide range of dental services to help you achieve and maintain a healthy, beautiful smile."
      />
      <div className="bg-white">
        <ServicesList isPage={true} data={clinicData?.services} />
      </div>
    </>
  );
}
