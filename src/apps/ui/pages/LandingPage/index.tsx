import { useState } from "react";

import Header from "@/apps/ui/pages/LandingPage/sections/header";
import { Input } from "@/shadcn/components/ui/input";

import ContactForm from "./sections/contact-form";
import { FaqSection } from "./sections/Faq_Section";
import { Footer3Section } from "./sections/Footer_Section";
import HeroSection from "./sections/Hero_Section";
import { Location2Section } from "./sections/Location_Section";
import PricingSection from "./sections/Pricing_Section";
import { ServicesSection } from "./sections/Services_Section";

/**
 * 랜딩 페이지
 */
export const LandingPage = () => {
  const [value, setValue] = useState("");

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <FaqSection />
      <ContactForm />
      <Location2Section />
      <Footer3Section />

      <div className="flex w-full items-center gap-2 p-32">
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </div>
  );
};
