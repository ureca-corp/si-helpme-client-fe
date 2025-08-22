import {
  AuroraBackgroundContainer,
} from "@/apps/ui/domain-components/landing/AuroraBackgroundContainer";
import {
  ConsultationButton,
} from "@/apps/ui/domain-components/landing/ConsultationButton";
import {
  HeroOrbitiongCircles,
} from "@/apps/ui/domain-components/landing/HeroOrbitiongCircles";
import { sendNaverConversion } from "@/apps/ui/lib/naver-wcs";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { cn } from "@/shadcn/lib/utils";

export const Hero2_Section = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      sendNaverConversion("custom001");
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AuroraBackgroundContainer showRadialGradient>
      <div
        id="hero"
        className={cn(
          "flex h-full min-h-[100vh] w-full justify-center px-4 py-40",
        )}
      >
        <div
          className={cn(
            "relative flex w-full items-center gap-8",
            "w-full max-w-[1200px]",
            "max-lg:flex-col",
          )}
        >
          <div
            className={cn(
              "flex w-full flex-col items-start gap-2 text-center",
              "max-lg:items-center",
            )}
          >
            {/* 서비스 특징 */}
            {/* <ul className="text-muted-foreground flex flex-col flex-wrap gap-3 text-sm sm:flex-row lg:text-base">
              <li className="flex items-center justify-center gap-2.5 whitespace-nowrap">
                <BadgeDollarSign className="size-5" />
                비싼 수임료 out
              </li>
              <span className="hidden sm:inline">·</span>
              <li className="flex items-center justify-center gap-2.5 whitespace-nowrap">
                <ThumbsUp className="size-5" />
                우린 싸고, 잘해요~
              </li>
              <span className="hidden sm:inline">·</span>
              <li className="flex items-center justify-center gap-2.5 whitespace-nowrap">
                <FileText className="size-5" />
                서비스, 수임료 전격공개
              </li>
            </ul> */}

            <div
              className={cn(
                "flex items-center justify-start gap-2 py-2 pr-4 pl-2.5",
                "w-fit",
                "rounded-full",
                "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg",
              )}
            >
              <span>⚡ 혁신 기술 적용</span>
            </div>
            <h1
              className={cn(
                "mb-6 text-start text-6xl font-bold whitespace-pre-wrap",
                "drop-shadow-lg",
                "max-lg:text-center max-lg:text-5xl max-sm:text-4xl",
              )}
            >
              <TextAnimate
                className={cn(
                  "text-4xl text-gray-700",
                  "max-h-[60px]",
                  "bg-clip-text drop-shadow-lg",
                  "max-lg:text-3xl max-sm:text-2xl",
                )}
                animation="slideLeft"
              >
                {"똑똑한 기술, 따뜻한 마음\n"}
              </TextAnimate>

              <AuroraText speed={5}>{"AI 솔루션"}</AuroraText>
              {"으로 합리적 비용, 신속한 절차"}
            </h1>

            <p
              className={cn(
                "text-start break-keep text-gray-500",
                "max-lg:text-center",
              )}
            >
              축적된 노하우에 혁신 기술을 접목하여 경제적 부담을 줄이고 전문성은
              높인 차별화된 법무 서비스를 제공합니다
            </p>

            <div className="mt-4 flex items-center gap-2">
              <ConsultationButton onClick={() => scrollToSection("contact")} />

              <button
                className={cn(
                  "group flex h-12 w-40 items-center justify-center rounded-full py-2 font-bold whitespace-nowrap",
                  "transition-colors duration-500 ease-in-out",
                  "border border-gray-300 bg-white hover:bg-gray-100",
                  "cursor-pointer",
                )}
                onClick={() => scrollToSection("services")}
              >
                <span
                  className={cn(
                    "font-normal text-black transition-colors duration-100 ease-in-out",
                  )}
                >
                  서비스가 궁금해요
                </span>
              </button>
            </div>
          </div>

          <div className={cn("flex w-full")}>
            <div
              className={cn(
                "absolute top-0 right-0 -z-1",
                "flex h-full w-full max-w-[600px]",
                "max-lg:static max-lg:top-auto max-lg:right-auto max-lg:max-w-full",
              )}
            >
              <HeroOrbitiongCircles />
            </div>
          </div>
        </div>
      </div>
    </AuroraBackgroundContainer>
  );
};
