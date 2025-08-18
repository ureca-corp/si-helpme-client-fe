import { Menu } from "lucide-react";

import { TitleLogo1 } from "@/apps/ui/common-components/TitleLogo1";
import { CallButton } from "@/apps/ui/domain-components/landing/CallButton";
import { ConsultationButton } from "@/apps/ui/domain-components/landing/ConsultationButton";
import { Button } from "@/shadcn/components/ui/button";
import { DialogTitle } from "@/shadcn/components/ui/dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/shadcn/components/ui/sheet";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-120 flex flex-col items-center justify-center gap-3 border-b border-gray-200 bg-white/95 p-6 backdrop-blur-sm max-lg:p-2">
      <div className="flex w-full max-w-[1200px]">
        <div className="flex w-full items-center justify-between">
          {/* 로고 */}
          <div
            className="cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <TitleLogo1 className="h-8 w-auto max-md:h-6" />
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
          <div className="flex items-center gap-3 max-lg:hidden max-md:gap-2">
            <CallButton className="h-10 w-28 max-md:h-10 max-md:w-24 max-md:text-sm" />

            <ConsultationButton
              onClick={() => scrollToSection("contact")}
              className="h-10 w-28 max-md:h-10 max-md:w-24 max-md:text-sm"
              textLabel="상담 신청"
            />
          </div>

          {/* 모바일 햄버거 메뉴 */}
          <div className="flex w-full justify-end gap-3 lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label="메뉴 열기"
                  className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="z-120 w-[280px] p-4">
                <DialogTitle className="hidden" />
                <div className="mt-10 flex flex-col gap-3">
                  <SheetClose asChild>
                    <button
                      className="py-2 text-left"
                      onClick={() => scrollToSection("services")}
                    >
                      서비스
                    </button>
                  </SheetClose>
                  <div className="h-px w-full bg-gray-200" />
                  <SheetClose asChild>
                    <button
                      className="py-2 text-left"
                      onClick={() => scrollToSection("pricing")}
                    >
                      요금제
                    </button>
                  </SheetClose>
                  <div className="h-px w-full bg-gray-200" />

                  <SheetClose asChild>
                    <button
                      className="py-2 text-left"
                      onClick={() => scrollToSection("faq")}
                    >
                      FAQ
                    </button>
                  </SheetClose>
                  <div className="h-px w-full bg-gray-200" />

                  <SheetClose asChild>
                    <button
                      className="py-2 text-left"
                      onClick={() => scrollToSection("contact")}
                    >
                      상담신청
                    </button>
                  </SheetClose>
                  <div className="h-px w-full bg-gray-200" />

                  <SheetClose asChild>
                    <button
                      className="py-2 text-left"
                      onClick={() => scrollToSection("location")}
                    >
                      오시는길
                    </button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <div className="hidden w-full gap-5 max-lg:flex">
        <CallButton className="w-full max-md:text-lg" />

        <ConsultationButton
          onClick={() => scrollToSection("contact")}
          className="w-full max-md:text-lg"
          textLabel="상담 신청"
        />
      </div>
    </header>
  );
}
