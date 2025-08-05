import Header from "@/shadcn/components/header";
import HeroSection from "@/shadcn/components/hero-section";
import ServicesSection from "@/shadcn/components/services-section";
import FAQSection from "@/shadcn/components/faq-section";
import ContactForm from "@/shadcn/components/contact-form";
import LocationSection from "@/shadcn/components/location-section";
import Footer from "@/shadcn/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <FAQSection />
      <ContactForm />
      <LocationSection />
      <Footer />
    </main>
  );
}
