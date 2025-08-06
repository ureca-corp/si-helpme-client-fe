import { useState } from "react";

import { Menu, Phone, X } from "lucide-react";

import { BrandLogo } from "@/apps/ui/common-components/BrandLogo";
import { Button } from "@/shadcn/components/ui/button";

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
          <div className="flex items-center space-x-2">
            <BrandLogo />
            <span className="text-xl font-bold text-gray-800">살려줘닷컴</span>
          </div>

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
          <div className="hidden items-center space-x-3 md:flex">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("tel:02-1234-5678")}
              className="hover:bg-blue-50"
            >
              <Phone className="mr-2 h-4 w-4" />
              바로전화
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
            >
              상담예약
            </Button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="mt-4 border-t border-gray-200 pb-4 md:hidden">
            <nav className="mt-4 flex flex-col space-y-4">
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
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("tel:02-1234-5678")}
                  className="justify-start"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  바로전화
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-blue-500 to-green-500"
                >
                  상담예약
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
