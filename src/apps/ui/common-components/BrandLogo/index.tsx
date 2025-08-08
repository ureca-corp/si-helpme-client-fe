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

// SVG를 React 컴포넌트로 변환한 로고
export const LogoSVG = ({
  className = "h-8 w-auto",
  color = "#2C81FE",
}: {
  className?: string;
  color?: string;
}) => {
  return (
    <svg
      width="88"
      height="32"
      viewBox="0 0 88 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M77.3095 31.136V26.88H83.2935V23.008H73.8855V31.136H68.9255V23.008H61.5975V18.752H83.2935V0.863998H87.9975V31.136H77.3095ZM63.0375 1.024H78.7815V5.44L74.4615 8.736L78.9415 11.584V17.248L70.6855 11.616L63.0375 17.408V11.744L71.4855 5.44H63.0375V1.024Z"
        fill={color}
      />
      <path
        d="M31.9988 0.863998H46.6868V18.304H36.6708V26.464H47.0388V30.816H31.9988V13.536H42.0148V5.376H31.9988V0.863998ZM48.6388 7.68H52.8628V0.863998H57.2788V31.136H52.8628V21.856H48.6388V17.504H52.8628V12.032H48.6388V7.68Z"
        fill={color}
      />
      <path
        d="M25.696 25.984H6.816V27.584H25.696V31.136H2.304V22.624H21.216V20.96H2.304V17.44H21.216V0.863998H25.696V4.96H28.96V9.28H25.696V25.984ZM6.4 1.024H11.68L18.08 15.52H12.864L9.024 6.72L5.216 15.52H0L6.4 1.024Z"
        fill={color}
      />
    </svg>
  );
};
