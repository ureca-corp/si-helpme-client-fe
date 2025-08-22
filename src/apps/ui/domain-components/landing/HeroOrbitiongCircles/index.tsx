import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { useMediaQuery } from "@/shadcn/hooks/use-media-query";
import { cn } from "@/shadcn/lib/utils";

import { HeroOrbitiongCircles_CenterItem } from "./components";

/**
 * 히어로 섹션에 사용되는 원형 아이콘 컴포넌트
 */
export const HeroOrbitiongCircles = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const iconSize = isDesktop ? "text-6xl" : "text-4xl";
  const outerRadius = isDesktop ? 230 : 160;
  const innerRadius = isDesktop ? 130 : 100;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        "h-full min-h-[400px] w-full",
        "overflow-hidden",
      )}
    >
      <OrbitingCircles radius={outerRadius}>
        <span className={iconSize}>💸</span>
        <span className={iconSize}>🎓</span>
        <span className={iconSize}>💰</span>
        <span className={iconSize}>🪙</span>
      </OrbitingCircles>
      <HeroOrbitiongCircles_CenterItem />
      <OrbitingCircles radius={innerRadius} reverse speed={2}>
        <span className={iconSize}>💼</span>
        <span className={iconSize}>✨</span>
        <span className={iconSize}>📓</span>
        <span className={iconSize}>💡</span>
      </OrbitingCircles>
    </div>
  );
};
