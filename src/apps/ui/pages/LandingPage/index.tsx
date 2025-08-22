import Header from "@/apps/ui/pages/LandingPage/sections/header";

import { Hero2_Section } from "./sections/1.Hero2_Section";
import { MainServiceSection } from "./sections/2_MainService_Section";
import ContactForm from "./sections/contact-form";
import { FaqSection } from "./sections/Faq_Section";
import { Footer3Section } from "./sections/Footer_Section";
import { Location2Section } from "./sections/Location_Section";
import PricingSection from "./sections/Pricing_Section";
import { ServicesSection } from "./sections/Services_Section";

/**
 * 랜딩 페이지
 */
export const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* <HeroSection /> */}
      <Hero2_Section />
      <MainServiceSection />
      <ServicesSection />
      <PricingSection />
      <FaqSection />
      <ContactForm />
      <Location2Section />
      <Footer3Section />
    </div>
  );
};
