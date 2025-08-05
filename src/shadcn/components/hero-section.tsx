"use client";

import { Button } from "@/shadcn/components/ui/button";
import {
  Phone,
  MessageCircle,
  FileText,
  WrenchIcon,
  BlocksIcon,
} from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* 메인 헤딩 */}
          <div className="mb-8">
            <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-6xl">
              <span className="text-blue-600">빚</span>에서 벗어나는
              <br />
              <span className="text-green-600">새로운 시작</span>
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
                <MessageCircle className="size-5 text-blue-600" />
                24시간 온라인 상담
              </li>
              <li className="flex items-center gap-2.5 whitespace-nowrap">
                <BlocksIcon className="size-5 text-green-600" />
                변호사 직접 상담
              </li>
              <li className="flex items-center gap-2.5 whitespace-nowrap">
                <WrenchIcon className="size-5 text-purple-600" />
                신용회복까지 완벽지원
              </li>
            </ul>
          </div>

          {/* 핵심 메시지 */}
          <div className="mb-12 rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
            <div className="grid gap-6 text-center md:grid-cols-3">
              <div className="space-y-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800">빠른 접수</h3>
                <p className="text-sm text-gray-600">24시간 온라인 상담</p>
              </div>
              <div className="space-y-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800">전문 상담</h3>
                <p className="text-sm text-gray-600">변호사 직접 상담</p>
              </div>
              <div className="space-y-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <MessageCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800">사후 관리</h3>
                <p className="text-sm text-gray-600">신용회복까지 완벽지원</p>
              </div>
            </div>
          </div>

          {/* CTA 버튼들 */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => window.open("tel:02-1234-5678")}
              className="transform rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
            >
              <Phone className="mr-2 h-5 w-5" />
              지금 바로 전화상담
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://pf.kakao.com/_example")}
              className="transform rounded-xl border-green-500 px-8 py-4 text-lg font-semibold text-green-600 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-50 hover:shadow-xl"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              카카오톡 상담
            </Button>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="transform rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-pink-600 hover:shadow-xl"
            >
              <FileText className="mr-2 h-5 w-5" />
              온라인 상담신청
            </Button>
          </div>

          {/* 신뢰도 지표 */}
          <div className="mt-16 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-2 text-3xl font-bold text-blue-600">
                1,000+
              </div>
              <div className="text-sm text-gray-600">성공 사례</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-green-600">15년</div>
              <div className="text-sm text-gray-600">전문 경력</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-purple-600">98%</div>
              <div className="text-sm text-gray-600">고객 만족도</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-orange-600">
                24시간
              </div>
              <div className="text-sm text-gray-600">상담 가능</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
