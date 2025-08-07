import { NaverMap } from "@/apps/ui/domain-components/landing/Location";
import { MapPin, Train } from "lucide-react";

export const Location2Section = () => {
  const DESTINATION_LAT = 37.49464594474945;
  const DESTINATION_LNG = 127.0150907325072;

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            오시는 길
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            편리한 교통으로 쉽게 찾아오실 수 있습니다
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-4 md:flex-row">
            {/* 주소 */}
            <div className="flex min-w-0 flex-1 items-center justify-center gap-3">
              <MapPin className="h-5 w-5 flex-shrink-0 text-blue-600" />
              <p className="text-base font-medium text-gray-900">
                서울 서초구 서초중앙로24길 16 KM타워 8층
              </p>
            </div>

            {/* 지하철 */}
            <div className="flex min-w-0 flex-1 items-center justify-center gap-3">
              <Train className="h-5 w-5 flex-shrink-0 text-green-600" />
              <div className="text-base font-medium text-gray-900">
                2/3호선 교대역 4번 출구에서 32m 도보 2분
              </div>
            </div>
          </div>
        </div>

        {/* 지도 영역 */}
        <NaverMap
          lat={DESTINATION_LAT}
          lng={DESTINATION_LNG}
          zoom={17}
          className="mt-4 h-[450px] w-full rounded-lg border border-gray-200 shadow-sm"
        />
      </div>
    </section>
  );
};
