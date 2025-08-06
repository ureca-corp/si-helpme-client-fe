"use client";

import {
  Bus,
  Car,
  Clock,
  MapPin,
  Train,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";

export default function LocationSection() {
  return (
    <section id="location" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            오시는 길
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            편리한 교통으로 언제든지 방문하실 수 있습니다
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* 지도 */}
          <div className="space-y-6">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="flex h-80 items-center justify-center bg-gray-200">
                <div className="text-center text-gray-500">
                  <MapPin className="mx-auto mb-4 h-12 w-12" />
                  <p>지도 API 연동 영역</p>
                  <p className="mt-2 text-sm">Google Maps 또는 Kakao Map</p>
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-red-600" />
                  주소 정보
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-800">
                    법무법인 살려줘닷컴
                  </p>
                  <p className="text-gray-600">
                    서울특별시 강남구 테헤란로 123, 456빌딩 7층
                  </p>
                  <p className="text-gray-600">우편번호: 06234</p>
                </div>
                <div className="border-t border-gray-100 pt-2">
                  <p className="text-sm text-gray-500">
                    <Clock className="mr-1 inline h-4 w-4" />
                    평일 09:00 - 21:00 | 토요일 09:00 - 18:00
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 교통 정보 */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Train className="mr-2 h-5 w-5" />
                  지하철 이용시
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">2호선 강남역</p>
                  <p className="text-gray-600">12번 출구에서 도보 5분</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">분당선 선릉역</p>
                  <p className="text-gray-600">1번 출구에서 도보 7분</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">9호선 선정릉역</p>
                  <p className="text-gray-600">2번 출구에서 도보 10분</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Bus className="mr-2 h-5 w-5" />
                  버스 이용시
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-800">간선버스</p>
                  <p className="text-gray-600">146, 360, 740, N13, N16</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">지선버스</p>
                  <p className="text-gray-600">3412, 4319, 6411</p>
                </div>
                <p className="text-sm text-gray-500">
                  강남역.강남역사거리 정류장 하차
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <Car className="mr-2 h-5 w-5" />
                  자가용 이용시
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-800">주차 안내</p>
                  <p className="text-gray-600">건물 지하 1-3층 주차장 이용</p>
                  <p className="text-gray-600">방문 시 2시간 무료 주차</p>
                </div>
                <div className="border-t border-gray-100 pt-2">
                  <p className="text-sm text-gray-500">
                    네비게이션: "강남구 테헤란로 123" 또는 "456빌딩" 검색
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-lg bg-blue-50 p-6">
              <h4 className="mb-3 font-semibold text-blue-800">
                방문 전 안내사항
              </h4>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• 방문 상담은 사전 예약제로 운영됩니다</li>
                <li>• 신분증을 반드시 지참해주세요</li>
                <li>• 관련 서류가 있으시면 함께 가져와주세요</li>
                <li>
                  • 주차장 이용 시 방문 확인을 위해 안내데스크에 말씀해주세요
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
