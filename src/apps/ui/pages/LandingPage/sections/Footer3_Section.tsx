import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { BrandLogo } from "@/apps/ui/common-components/BrandLogo";

export const Footer3Section = () => {
  return (
    <footer className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 회사 정보 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BrandLogo />
              <span className="text-xl font-bold">살려줘닷컴</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              개인회생과 파산 전문 법무법인으로
              <br />
              15년간 1,000여 건의 성공 사례를
              <br />
              보유하고 있습니다.
            </p>
          </div>

          {/* 연락처 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">연락처</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <div>
                  <p className="font-semibold">02-1234-5678</p>
                  <p className="text-sm text-gray-400">대표전화</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-400" />
                <div>
                  <p className="font-semibold">info@salryeojwo.com</p>
                  <p className="text-sm text-gray-400">이메일 문의</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 h-4 w-4 text-red-400" />
                <div>
                  <p className="font-semibold">서울 강남구 테헤란로 123</p>
                  <p className="text-sm text-gray-400">456빌딩 7층</p>
                </div>
              </div>
            </div>
          </div>

          {/* 운영시간 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">운영시간</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-yellow-400" />
                <div>
                  <p className="font-semibold">평일</p>
                  <p className="text-sm text-gray-400">09:00 - 21:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-yellow-400" />
                <div>
                  <p className="font-semibold">토요일</p>
                  <p className="text-sm text-gray-400">09:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="font-semibold">일요일/공휴일</p>
                  <p className="text-sm text-gray-400">휴무</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-300">
                법무법인 살려줘닷컴
              </h4>
              <p className="text-sm text-gray-400">
                대표변호사: 김○○ | 사업자등록번호: 123-45-67890
                <br />
                통신판매업신고: 2024-서울강남-1234 | 개인정보보호책임자: 이○○
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <button className="transition-colors hover:text-white">
                  이용약관
                </button>
                <button className="font-semibold transition-colors hover:text-white">
                  개인정보처리방침
                </button>
                <button className="transition-colors hover:text-white">
                  사이트맵
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2024 살려줘닷컴. All rights reserved. |
              <span className="ml-2">
                본 사이트의 모든 콘텐츠는 저작권법의 보호를 받습니다.
              </span>
            </p>
            <p className="mt-2 text-xs text-gray-600">
              법률상담은 개별 사안에 따라 결과가 달라질 수 있으며, 상담 내용은
              법적 조언이 아닌 일반적인 정보 제공입니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
