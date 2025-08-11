import Header from "@/apps/ui/pages/LandingPage/sections/header";
import HeroSection from "@/apps/ui/pages/LandingPage/sections/Hero_Section";
import ServicesSection from "@/apps/ui/pages/LandingPage/sections/Services_Section";

import ContactForm from "./sections/contact-form";
import { FaqSection } from "./sections/Faq_Section";
import { Footer3Section } from "./sections/Footer_Section";
import { Location2Section } from "./sections/Location_Section";
import PricingSection from "./sections/Pricing_Section";
import { Services2Section } from "./sections/Services2_Section";

/**
 * 랜딩 페이지
 */
export const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <Services2Section />
      <PricingSection />
      <FaqSection />
      <ContactForm />
      <Location2Section />
      <Footer3Section />
    </div>
  );
};
