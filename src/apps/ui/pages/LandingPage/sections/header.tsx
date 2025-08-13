import { Phone } from "lucide-react";

import { BrandLogoWithLabel } from "@/apps/ui/common-components/BrandLogoWithLabel";
import { ConsultationButton } from "@/apps/ui/domain-components/landing/ConsultationButton";
import { Button } from "@/shadcn/components/ui/button";
import { sendNaverConversion } from "@/apps/ui/lib/naver-wcs";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-120 flex items-center justify-center border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="flex w-full max-w-[1200px] p-6 max-md:p-2">
        <div className="flex w-full items-center justify-between">
          {/* 로고 */}
          <div
            className="h-5 cursor-pointer sm:h-6 md:h-8"
            onClick={() => scrollToSection("hero")}
          >
            <BrandLogoWithLabel />
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden items-center lg:flex">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection("services")}
              className="text-gray-507 font-light transition-colors hover:font-semibold hover:text-gray-900"
            >
              서비스
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection("pricing")}
              className="text-gray-507 font-light transition-colors hover:font-semibold hover:text-gray-900"
            >
              요금제
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection("faq")}
              className="font-light text-gray-700 transition-colors hover:font-semibold hover:text-gray-900"
            >
              FAQ
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-gray-507 font-light transition-colors hover:font-semibold hover:text-gray-900"
            >
              상담신청
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection("location")}
              className="font-light text-gray-700 transition-colors hover:font-semibold hover:text-gray-900"
            >
              오시는길
            </Button>
          </nav>

          {/* CTA 버튼들 */}
          <div className="flex items-center gap-3 max-md:gap-2">
            <div
              className="flex h-10 cursor-pointer items-center gap-1 rounded-lg border border-gray-200 p-4 max-md:h-10 max-md:w-30 max-md:text-sm"
              onMouseDown={() => sendNaverConversion("custom001")}
            >
              <Phone className="h-4" />
              <span className="">지금 상담</span>
            </div>

            <ConsultationButton
              onClick={() => scrollToSection("contact")}
              className="h-10 w-24 max-md:h-10 max-md:w-20 max-md:text-sm"
              textLabel="상담 신청"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
