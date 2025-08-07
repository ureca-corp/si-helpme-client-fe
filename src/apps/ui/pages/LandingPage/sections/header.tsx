import { useState } from "react";

import { BrandLogoWithLabel } from "@/apps/ui/common-components/BrandLogoWithLabel";
import { ConsultationButton } from "@/apps/ui/domain-components/landing/ConsultationButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <BrandLogoWithLabel />

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden items-center space-x-8 md:flex">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-600 transition-colors hover:text-blue-600"
            >
              서비스
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-600 transition-colors hover:text-blue-600"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 transition-colors hover:text-blue-600"
            >
              상담신청
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-gray-600 transition-colors hover:text-blue-600"
            >
              오시는길
            </button>
          </nav>

          {/* CTA 버튼들 */}
          <div className="items-center space-x-3 md:flex">
            <ConsultationButton onClick={() => scrollToSection("contact")} />
          </div>

          {/* 모바일 메뉴 버튼 */}
          {/* <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button> */}
        </div>

        {/* 모바일 메뉴 */}
        {/* {isMenuOpen && (
          <div className="mt-4 border-t border-gray-200 pb-4 md:hidden">
            <div className="mt-4 flex w-full flex-col items-center space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-600 transition-colors hover:text-blue-600"
              >
                서비스
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left text-gray-600 transition-colors hover:text-blue-600"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-600 transition-colors hover:text-blue-600"
              >
                상담신청
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="text-left text-gray-600 transition-colors hover:text-blue-600"
              >
                오시는길
              </button>
              <ConsultationButton onClick={() => scrollToSection("contact")} />
            </div>
          </div>
        )} */}
      </div>
    </header>
  );
}
