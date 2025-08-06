/**
 * 브랜드 로고 컴포넌트
 * @param textSize - 텍스트 크기
 * @returns 브랜드 로고 컴포넌트
 */
export const BrandLogo = ({ textSize = "text-sm" }: { textSize?: string }) => {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-green-500">
      <span className={`${textSize} font-bold text-white`}>살</span>
    </div>
  );
};
