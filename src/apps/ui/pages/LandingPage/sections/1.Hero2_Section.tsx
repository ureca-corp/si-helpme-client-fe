import { BadgeDollarSign, FileText, ThumbsUp } from "lucide-react";

import { AuroraBackgroundContainer } from "@/apps/ui/domain-components/landing/AuroraBackgroundContainer";
import { HeroOrbitiongCircles } from "@/apps/ui/domain-components/landing/HeroOrbitiongCircles";
import { cn } from "@/shadcn/lib/utils";

export const Hero2_Section = () => {
  return (
    <AuroraBackgroundContainer showRadialGradient>
      <div
        className={cn(
          "flex h-full min-h-[100vh] w-full justify-center px-4 py-40",
        )}
      >
        <div
          className={cn(
            "relative flex w-full flex-col gap-8 md:flex-row",
            "w-full max-w-[1200px]",
          )}
        >
          <div className="flex w-full flex-col items-center gap-2 text-center md:items-start">
            <div
              className={cn(
                "flex items-center gap-2 px-4 py-2",
                "w-fit",
                "rounded-full",
                "bg-green-500 text-white shadow-lg",
              )}
            >
              ⚡ 혁신 기술 적용
            </div>
            {/* 서비스 특징 */}
            <ul className="text-muted-foreground mt-5 flex flex-col flex-wrap items-center justify-center gap-3 text-base md:items-start">
              <li className="flex items-center justify-center gap-2.5 whitespace-nowrap">
                <BadgeDollarSign className="size-5" />
                비싼 수임료 out
              </li>
              <li className="flex items-center justify-center gap-2.5 whitespace-nowrap">
                <ThumbsUp className="size-5" />
                우린 싸고, 잘해요~
              </li>
              <li className="flex items-center justify-center gap-2.5 whitespace-nowrap">
                <FileText className="size-5" />
                서비스, 수임료 전격공개
              </li>
            </ul>
          </div>

          <div
            className={cn(
              "absolute top-0 right-0 -z-1",
              "flex h-full w-full max-w-[600px]",
              "max-lg:static max-lg:top-auto max-lg:right-auto",
            )}
          >
            <HeroOrbitiongCircles />
          </div>
        </div>
      </div>
    </AuroraBackgroundContainer>
  );
};
