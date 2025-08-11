/**
 * 추천 배지
 * @returns 추천 배지 렌더링
 */
export const RecommendBadge = ({
  recommendedText,
  badgeColor,
}: {
  recommendedText: string;
  badgeColor: string;
}) => {
  return (
    <div className="badge-wave">
      <div
        className={`absolute left-[50%] z-10 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-start justify-start gap-2.5 rounded-[100px] bg-indigo-50 p-1.5 outline-[3px] outline-offset-[-3px] outline-blue-500`}
      >
        <div
          className={`px-3 py-2 ${badgeColor} inline-flex items-center justify-center gap-2.5 rounded-[100px]`}
        >
          <div className="justify-start font-['Pretendard'] text-sm font-bold text-indigo-50">
            {recommendedText}
          </div>
        </div>
      </div>
    </div>
  );
};

<style jsx>{`
  @keyframes badgeBounce {
    0%,
    20%,
    53%,
    80%,
    100% {
      transform: translateY(0);
    }
    40%,
    43% {
      transform: translateY(-8px);
    }
    70% {
      transform: translateY(-4px);
    }
    90% {
      transform: translateY(-2px);
    }
  }

  .badge-wave {
    animation: badgeBounce 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
    transform-origin: 50% 50%;
    will-change: transform;
  }

  @media (prefers-reduced-motion: reduce) {
    .badge-wave {
      animation: none;
    }
  }
`}</style>;
