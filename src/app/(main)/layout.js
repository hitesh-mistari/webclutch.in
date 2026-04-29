import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { clinicData } from "../../data/clinicData";

export default function MainLayout({ children }) {
  return (
    <>
      <Header name={clinicData.name} phone={clinicData.contact.phone} phoneRaw={clinicData.contact.phoneRaw} />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer data={clinicData} />
    </>
  );
}
