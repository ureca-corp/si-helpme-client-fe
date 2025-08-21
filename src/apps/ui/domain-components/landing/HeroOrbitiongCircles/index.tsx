import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { cn } from "@/shadcn/lib/utils";

/**
 * 히어로 섹션에 사용되는 원형 아이콘 컴포넌트
 */
export const HeroOrbitiongCircles = () => {
  return (
    <>
      {/* 데스크탑 버전 */}
      <div
        className={cn(
          "relative flex h-full w-full flex-col items-center justify-center",
          "max-lg:hidden",
        )}
      >
        <OrbitingCircles iconSize={80} radius={250}>
          <span className="text-6xl">🪙</span>
          <span className="text-6xl">💸</span>
          <span className="text-6xl">👨‍⚖️</span>
          <span className="text-6xl">💡</span>
        </OrbitingCircles>
        <div className="flex h-26 w-26 items-center justify-center rounded-full border border-gray-200 bg-blue-500 p-4 shadow-lg">
          <span className="text-6xl">🏦</span>
        </div>
        <OrbitingCircles iconSize={60} radius={150} reverse speed={2}>
          <span className="text-6xl">⚖️</span>
          <span className="text-6xl">💰</span>
          <span className="text-6xl">💼</span>
          <span className="text-6xl">💵</span>
        </OrbitingCircles>
      </div>

      {/* 모바일 버전 */}
      <div
        className={cn(
          "relative flex h-full min-h-[500px] w-full flex-col items-center justify-center",
          "hidden max-lg:flex",
        )}
      >
        <OrbitingCircles iconSize={40}>
          <span className="text-5xl">🪙</span>
          <span className="text-5xl">💸</span>
          <span className="text-5xl">👨‍⚖️</span>
          <span className="text-5xl">💡</span>
        </OrbitingCircles>
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-blue-500 p-4 shadow-lg">
          <span className="text-4xl">🏦</span>
        </div>
        <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
          <span className="text-5xl">⚖️</span>
          <span className="text-5xl">💰</span>
          <span className="text-5xl">💼</span>
          <span className="text-5xl">💵</span>
        </OrbitingCircles>
      </div>
    </>
  );
};
