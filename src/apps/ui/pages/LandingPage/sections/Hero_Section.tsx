"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Clock4Icon,
  ScaleIcon,
  WrenchIcon,
} from "lucide-react";

import {
  AuroraBackgroundContainer,
} from "@/apps/ui/domain-components/landing/AuroraBackgroundContainer";
import {
  ConsultationButton,
} from "@/apps/ui/domain-components/landing/ConsultationButton";
import {
  ReliabilityNumberItem,
} from "@/apps/ui/domain-components/landing/ReliabilityNumber_Item";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/shadcn/components/ui/button";

export default function HeroSection() {
  const [value1, setValue1] = useState(123);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setValue1(1000);
    setValue2(15);
    setValue3(98);
  }, []);

  /**
   * 신뢰도 지표 아이템 값
   */
  const reliabilityNumberItems = [
    {
      value: value1,
      unit: "건+",
      description: "성공 사례",
    },
    {
      value: value2,
      unit: "년+",
      description: "전문 경력",
    },
    {
      value: value3,
      unit: "%",
      description: "고객 만족도",
    },
  ];

  return (
    <AuroraBackgroundContainer showRadialGradient>
      <section
        id="hero"
        className="z-1 flex min-h-[100vh] flex-col items-center justify-center"
        //bg-gradient-to-br from-blue-50 via-white to-green-50 py-40
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-4xl flex-col gap-8 text-center">
            {/* 서비스 특징 */}
            <div className="mt-10 lg:mt-12">
              <ul className="text-muted-foreground flex flex-col flex-wrap justify-center gap-3 text-sm sm:flex-row lg:text-base">
                <li className="flex items-center justify-center gap-2.5 whitespace-nowrap">
                  <Clock4Icon className="size-5" />
                  24시간 온라인 상담
                </li>
                <span className="hidden sm:inline">·</span>
                <li className="flex items-center justify-center gap-2.5 whitespace-nowrap">
                  <ScaleIcon className="size-5" />
                  변호사 직접 상담
                </li>
                <span className="hidden sm:inline">·</span>

                <li className="flex items-center justify-center gap-2.5 whitespace-nowrap">
                  <WrenchIcon className="size-5" />
                  신용회복까지 완벽지원
                </li>
              </ul>
            </div>

            {/* 메인 헤딩 */}
            <div className="">
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                <div className="justify-center text-center font-['Pretendard'] text-5xl leading-[60px] font-bold text-black md:text-7xl">
                  빚에서 벗어나는
                </div>
                <AuroraText colors={["#6bff6b", "#137a13"]} speed={5}>
                  새로운 시작
                </AuroraText>
              </h1>
              <div className="flex flex-col">
                <TextAnimate
                  animation="slideLeft"
                  className="font-light text-gray-500"
                >
                  개인회생 · 파산 전문 법무법인 변호사와
                </TextAnimate>
                <TextAnimate
                  animation="slideLeft"
                  delay={0.5}
                  className="font-light text-gray-500"
                >
                  안전하고 확실한 채무 해결과 신용 회복을 함께해요
                </TextAnimate>
              </div>
            </div>

            {/*버튼 영역 */}
            <div className="flex justify-center gap-4">
              <Button
                variant={"outline"}
                className="rounded-full border px-5"
                onClick={() => scrollToSection("services")}
              >
                <span className="text-zinc-800">서비스가 궁금해요</span>
              </Button>
              <ConsultationButton onClick={() => scrollToSection("contact")} />
            </div>

            {/* 신뢰도 지표 */}
            <div className="mt-8 flex flex-col gap-8">
              <div
                className="h-px w-full rounded-full bg-gray-200 dark:bg-gray-700"
                role="separator"
                aria-orientation="horizontal"
              />

              <div className="flex flex-wrap items-center justify-center gap-8">
                {reliabilityNumberItems.map((item) => (
                  <ReliabilityNumberItem
                    key={item.description}
                    value={item.value}
                    unit={item.unit}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AuroraBackgroundContainer>
  );
}
