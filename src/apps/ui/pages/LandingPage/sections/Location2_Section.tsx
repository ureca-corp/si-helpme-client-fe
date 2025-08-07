import { useEffect, useRef } from "react";

declare global {
  interface Window {
    naver: typeof naver;
    navermap_authFailure?: () => void;
  }
}

export const Location2Section = () => {
  const mapElement = useRef<HTMLDivElement>(null);
  const mapRef = useRef<naver.maps.Map | null>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (!mapElement.current || !window.naver) return;

      const location = new window.naver.maps.LatLng(
        37.49464594474945,
        127.0150907325072,
      );

      const mapOptions: naver.maps.MapOptions = {
        center: location,
        zoom: 17,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.TOP_RIGHT,
        },
      };

      const map = new window.naver.maps.Map(mapElement.current, mapOptions);
      mapRef.current = map;

      new window.naver.maps.Marker({
        position: location,
        map: map,
      });
    };

    if (window.naver && window.naver.maps) {
      initializeMap();
    } else {
      const checkNaverMapsLoaded = () => {
        if (window.naver && window.naver.maps) {
          initializeMap();
        } else {
          setTimeout(checkNaverMapsLoaded, 100);
        }
      };
      checkNaverMapsLoaded();
    }
  }, []);

  useEffect(() => {
    // 인증 실패 핸들러 등록
    window.navermap_authFailure = () => {
      console.error(
        "네이버 지도 API 인증 실패. 네이버 클라우드 플랫폼에서 다음을 확인하세요:\n" +
          "1. Application > AI NAVER API > Maps에서 Web Service URL에 http://localhost:3000 등록\n" +
          "2. 프로덕션 배포 시 실제 도메인도 추가 등록 필요",
      );
    };

    const script = document.createElement("script");
    const clientId = process.env.NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID;

    if (!clientId) {
      console.warn(
        "NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID 환경변수가 설정되지 않았습니다.",
      );
      return;
    }

    // 신규 Maps API 형식으로 변경 (ncpKeyId 사용)
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}&submodules=geocoder`;
    script.async = true;

    const existingScript = document.querySelector(
      `script[src*="oapi.map.naver.com"]`,
    );
    if (!existingScript) {
      document.head.appendChild(script);
    }

    return () => {
      if (!existingScript && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center px-6 pb-20">
      <div
        ref={mapElement}
        className="h-80 w-full max-w-[800px] rounded-lg border border-gray-200 shadow-sm md:h-96 lg:h-[500px]"
      />
    </div>
  );
};
