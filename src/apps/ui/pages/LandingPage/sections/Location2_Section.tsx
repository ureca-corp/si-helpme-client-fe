import { MapPin } from "lucide-react";

export const Location2Section = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center px-6 pb-20">
      <div className="flex h-120 w-full max-w-[800px] items-center justify-center bg-gray-200 md:h-120">
        <div className="text-center text-gray-500">
          <MapPin className="mx-auto mb-4 h-12 w-12" />
          <p>지도 API 연동 영역</p>
          <p className="mt-2 text-sm">Google Maps 또는 Kakao Map</p>
        </div>
      </div>
    </div>
  );
};
