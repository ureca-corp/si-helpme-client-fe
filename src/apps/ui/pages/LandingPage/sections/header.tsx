import {
  BrandLogoWithLabel,
} from "@/apps/ui/common-components/BrandLogoWithLabel";
import {
  ConsultationButton,
} from "@/apps/ui/domain-components/landing/ConsultationButton";
import { Button } from "@/shadcn/components/ui/button";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="flex w-full max-w-[1200px] p-6">
        <div className="flex w-full items-center justify-between">
          {/* 로고 */}
          <div
            className="cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <BrandLogoWithLabel />
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden items-center space-x-2 md:flex">
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
