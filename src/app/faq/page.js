import React from 'react';
import PageHeader from "../../components/PageHeader";
import FAQComponent from "../../components/FAQ";
import { clinicData } from "../../data/clinicData";

export const metadata = {
  title: "FAQs | The Dental Edge",
  description: "Find answers to common questions about our dental treatments and services.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader 
        subtitle="FAQs"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our dental treatments and services."
      />
      <FAQComponent data={clinicData?.faqs} />
    </>
  );
}
