"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { WrenchIcon, ScaleIcon, Clock4Icon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-40">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* 메인 헤딩 */}
          <div className="mb-8">
            <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-6xl">
              빚에서 벗어나는
              <br />
              <AuroraText colors={["#6bff6b", "#19a219"]}>
                새로운 시작
              </AuroraText>
            </h1>
            <p className="mb-2 text-xl text-gray-600 md:text-2xl">
              개인회생 · 파산 전문 법무법인
            </p>
            <p className="text-lg text-gray-500">
              전문변호사와 함께하는 안전하고 확실한 채무해결
            </p>
          </div>

          <div className="mt-10 lg:mt-12">
            <ul className="text-muted-foreground flex flex-wrap justify-center gap-6 text-sm lg:text-base">
              <li className="flex items-center gap-2.5 whitespace-nowrap">
                <Clock4Icon className="size-5 text-blue-600" />
                24시간 온라인 상담
              </li>
              <li className="flex items-center gap-2.5 whitespace-nowrap">
                <ScaleIcon className="size-5 text-green-600" />
                변호사 직접 상담
              </li>
              <li className="flex items-center gap-2.5 whitespace-nowrap">
                <WrenchIcon className="size-5 text-purple-600" />
                신용회복까지 완벽지원
              </li>
            </ul>
          </div>

          {/* 신뢰도 지표 */}
          <div className="mt-16 grid grid-cols-2 gap-8 text-center md:grid-cols-3">
            <div>
              <NumberTicker
                value={1000}
                className="mb-2 text-4xl font-bold tracking-tighter whitespace-pre-wrap text-black dark:text-white"
              />
              <span className="text-md ml-2 text-black">건+</span>
              <div className="text-sm text-gray-500">성공 사례</div>
            </div>
            <div>
              <NumberTicker
                value={15}
                className="mb-2 text-4xl font-bold tracking-tighter whitespace-pre-wrap text-black dark:text-white"
              />
              <span className="text-md ml-2 text-black">년+</span>
              <div className="text-sm text-gray-500">전문 경력</div>
            </div>
            <div>
              <NumberTicker
                value={98}
                className="mb-2 text-4xl font-bold tracking-tighter whitespace-pre-wrap text-black dark:text-white"
              />
              <span className="text-md ml-2 text-black">%</span>
              <div className="text-sm text-gray-500">고객 만족도</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
