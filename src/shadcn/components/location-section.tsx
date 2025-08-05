"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card"
import { MapPin, Car, Train, Bus, Clock } from "lucide-react"

export default function LocationSection() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">오시는 길</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">편리한 교통으로 언제든지 방문하실 수 있습니다</p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* 지도 */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-80 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p>지도 API 연동 영역</p>
                  <p className="text-sm mt-2">Google Maps 또는 Kakao Map</p>
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-red-600" />
                  주소 정보
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-800">법무법인 살려줘닷컴</p>
                  <p className="text-gray-600">서울특별시 강남구 테헤란로 123, 456빌딩 7층</p>
                  <p className="text-gray-600">우편번호: 06234</p>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    <Clock className="w-4 h-4 inline mr-1" />
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
                  <Train className="w-5 h-5 mr-2" />
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
                  <Bus className="w-5 h-5 mr-2" />
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
                <p className="text-sm text-gray-500">강남역.강남역사거리 정류장 하차</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <Car className="w-5 h-5 mr-2" />
                  자가용 이용시
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-800">주차 안내</p>
                  <p className="text-gray-600">건물 지하 1-3층 주차장 이용</p>
                  <p className="text-gray-600">방문 시 2시간 무료 주차</p>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-sm text-gray-500">네비게이션: "강남구 테헤란로 123" 또는 "456빌딩" 검색</p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-800 mb-3">방문 전 안내사항</h4>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• 방문 상담은 사전 예약제로 운영됩니다</li>
                <li>• 신분증을 반드시 지참해주세요</li>
                <li>• 관련 서류가 있으시면 함께 가져와주세요</li>
                <li>• 주차장 이용 시 방문 확인을 위해 안내데스크에 말씀해주세요</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
