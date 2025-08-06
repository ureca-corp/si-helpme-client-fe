import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function Footer2Section() {
  return (
    <footer className="relative bg-gray-50 py-16 text-gray-800 shadow-lg">
      {/* 상단 구분선 */}
      <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-blue-600"></div>

      {/* 배경 패턴 효과 */}
      <div className="absolute inset-0 bg-gray-50 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* 상단 섹션 - 4개 컬럼 */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 첫 번째 컬럼 - 브랜드 정보 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-green-500">
                <span className="text-sm font-bold text-white">살</span>
              </div>
              <span className="text-xl font-bold">살려줘닷컴</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              개인회생과 파산 전문 법무법인으로
              <br />
              15년간 1,000여 건의 성공 사례를
              <br />
              보유하고 있습니다.
            </p>
            <div className="flex space-x-3">
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200">
                <Instagram className="h-4 w-4 text-gray-600" />
              </div>
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200">
                <Facebook className="h-4 w-4 text-gray-600" />
              </div>
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200">
                <Twitter className="h-4 w-4 text-gray-600" />
              </div>
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200">
                <Linkedin className="h-4 w-4 text-gray-600" />
              </div>
            </div>
          </div>

          {/* 두 번째 컬럼 - 연락처 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">연락처</h3>
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
                  {/* <p className="text-sm text-gray-400">456빌딩 7층</p> */}
                </div>
              </div>
            </div>
          </div>

          {/* 세 번째 컬럼 - 운영시간 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">운영시간</h3>
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

          {/* 네 번째 컬럼 - 회사 정보 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">회사 정보</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">법무법인 살려줘닷컴</span>
              </p>
              <p className="text-xs text-gray-500">
                대표변호사: 김○○
                <br />
                사업자등록번호: 123-45-67890
                <br />
                통신판매업신고: 2024-서울강남-1234
                <br />
                개인정보보호책임자: 이○○
              </p>
            </div>
          </div>
        </div>

        {/* 하단 섹션 - 구분선과 저작권 정보 */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-gray-500">
              © 2024 살려줘닷컴. All rights reserved. |
              <span className="ml-2">
                본 사이트의 모든 콘텐츠는 저작권법의 보호를 받습니다.
              </span>
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-500 transition-colors hover:text-gray-700 hover:underline">
                이용약관
              </button>
              <button className="font-semibold text-gray-500 transition-colors hover:text-gray-700 hover:underline">
                개인정보처리방침
              </button>
              <button className="text-gray-500 transition-colors hover:text-gray-700 hover:underline">
                사이트맵
              </button>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-600">
              법률상담은 개별 사안에 따라 결과가 달라질 수 있으며, 상담 내용은
              법적 조언이 아닌 일반적인 정보 제공입니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
