import Header from "@/apps/ui/pages/LandingPage/sections/header";
import HeroSection from "@/apps/ui/pages/LandingPage/sections/Hero_Section";
import PricingSection from "@/apps/ui/pages/LandingPage/sections/Pricing_Section";
import ServicesSection from "@/apps/ui/pages/LandingPage/sections/Services_Section";

import ContactForm from "./sections/contact-form";
import { Faq2Section } from "./sections/Faq2_Section";
import { Footer3Section } from "./sections/Footer3_Section";
import { Location2Section } from "./sections/Location2_Section";

/**
 * 랜딩 페이지
 */
export const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      {/* <FAQSection /> */}
      <ContactForm />
      <Faq2Section />
      {/* <LocationSection /> */}
      <Location2Section />
      {/* <Footer /> */}
      {/* <Footer2Section /> */}
      <Footer3Section />
    </div>
  );
};
