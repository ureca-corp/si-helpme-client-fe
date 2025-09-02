import { BrandLogoSvg } from "@/apps/ui/common-components/BrandLogoSvg";

export const Footer3Section = () => {
  const ceoName = "우성명";
  const businessNumber = "321-05-02929";
  // 번지수(서초동 1692-6) 삭제
  const address = "서울특별시 서초구 서초중앙로24길 16 KM빌딩 8층";
  const operatingHours = "평일 오전 9시 ~ 오후 6시 (토요일 및 공휴일 휴무)";
  const phoneNumber = "02-6677-8510";
  const faxNumber = "02-6677-8501";

  return (
    <div className="flex flex-col items-center justify-start self-stretch bg-gray-900 p-6">
      <div className="flex w-full max-w-[1200px] flex-col items-start justify-start gap-8">
        <div className="flex flex-col items-start justify-between gap-8 self-stretch md:flex-row">
          <div className="flex flex-col items-start justify-start gap-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              {/* <BrandLogoWithLabel color="white" /> */}

              <BrandLogoSvg color={"#ffffff"} />
            </div>
            <div className="justify-center font-['Pretendard'] text-sm leading-tight font-light text-white/60">
              대표변호사: {ceoName}
              <br />
              사업자등록번호: {businessNumber}
              <br />
              {address}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-3 md:items-end md:justify-end">
            <div className="justify-center text-left font-['Pretendard'] text-sm leading-tight font-light text-white/60 md:text-right">
              운영시간: {operatingHours}
              <br />
              <br />
              Tel. {phoneNumber}
              <br />
              Fax. {faxNumber}
            </div>
            {/* '홈페이지 바로가기' 영역 삭제 */}
          </div>
        </div>
        <div className="h-0 self-stretch outline-1 outline-offset-[-0.50px] outline-white/10"></div>
        <div className="flex flex-col items-center justify-center self-stretch">
          <div className="justify-center text-center font-['Pretendard'] text-sm leading-tight font-light text-white/60">
            © 2025 도약법률사무소. All rights reserved. 본 사이트의 모든
            콘텐츠는 저작권법의 보호를 받습니다.
          </div>
        </div>
      </div>
    </div>
  );
};
