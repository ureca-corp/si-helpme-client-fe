import { Building, MapPin, Navigation, Phone, Printer } from "lucide-react";

import { NaverMap } from "@/apps/ui/domain-components/landing/Location";
import {
  LocationInfoContainer,
  LocationInfoItem,
} from "@/apps/ui/domain-components/landing/Location_Info_Card";

export const Location2Section = () => {
  const DESTINATION_LAT = 37.49464594474945;
  const DESTINATION_LNG = 127.0150907325072;

  return (
    <section
      id="location"
      className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="flex w-full max-w-[1200px] flex-col gap-12 sm:gap-16">
        {/* 섹션 타이틀 */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative">
            <span className="text-3xl font-bold text-gray-800 md:text-4xl">
              오시는 길
            </span>
          </div>
          <span className="text-lg leading-relaxed text-gray-600 sm:text-xl">
            편리한 교통으로 쉽게 찾아오실 수 있습니다
          </span>
        </div>

        {/* 정보 카드들 */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
          {/* 연락처 정보 */}
          <LocationInfoContainer
            icon={<MapPin className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />}
            title="연락처 정보"
            className="h-full"
          >
            <LocationInfoItem
              icon={<MapPin />}
              label="주소"
              value="서울 서초구 서초중앙로24길 KM타워 8층"
            />
            <LocationInfoItem
              icon={<Phone />}
              label="전화"
              value="02-6677-8510"
            />
            <LocationInfoItem
              icon={<Printer />}
              label="팩스"
              value="02-6677-8501"
            />
          </LocationInfoContainer>

          {/* 교통 정보 */}
          <LocationInfoContainer
            icon={
              <Navigation className="h-5 w-5 text-emerald-600 sm:h-6 sm:w-6" />
            }
            title="주차 안내"
            className="h-full"
          >
            <LocationInfoItem
              icon={<Building />}
              label="주차장"
              value={`KM타워 내 기계주차장 이용 가능 (불가 시 발렛주차 이용 가능)`}
            />

            <LocationInfoItem
              icon={<MapPin />}
              label="발렛주차장 위치"
              value="서울시 서초구 서초중앙로 24길 20 (사보텐)"
            />
            <span className="pl-10 text-sm text-gray-500">{`"법률사무소 도약 방문" 말씀해주세요.`}</span>
          </LocationInfoContainer>
        </div>

        {/* 지도 영역 */}
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-2xl sm:rounded-3xl sm:blur-3xl"></div>
          <div className="relative">
            <NaverMap
              lat={DESTINATION_LAT}
              lng={DESTINATION_LNG}
              zoom={17}
              className="h-[300px] w-full rounded-2xl border border-gray-200 shadow-xl sm:h-[400px] sm:rounded-3xl md:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
