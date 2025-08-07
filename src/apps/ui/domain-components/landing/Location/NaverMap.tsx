import { useEffect, useRef } from "react";

declare global {
  interface Window {
    naver: typeof naver;
    navermap_authFailure?: () => void;
  }
}

interface NaverMapProps {
  lat: number;
  lng: number;
  zoom?: number;
  className?: string;
}

export const NaverMap = ({ lat, lng, zoom = 17, ...props }: NaverMapProps) => {
  const mapElement = useRef<HTMLDivElement>(null);
  const mapRef = useRef<naver.maps.Map | null>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (!mapElement.current || !window.naver) return;

      const location = new window.naver.maps.LatLng(lat, lng);

      const mapOptions: naver.maps.MapOptions = {
        center: location,
        zoom: zoom,
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
  }, [lat, lng, zoom]);

  useEffect(() => {
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

  return <div ref={mapElement} {...props} />;
};
