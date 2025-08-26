import { CustomImage } from "@/apps/ui/common-components/CustomImage";

export type JudgmentCardModel = {
  title: string; // 제목
  reductionRate: number; // 탕감률
  court: string; // 법원
  totalDebt?: string; // 총 채무액
  reductionAmount?: string; // 감면 받은 금액
  loanPurpose?: string; // 대출금 사용처
  image: string; // 이미지
};

/**
 * 법원 판결 사례 카드
 */
export const JudgmentCard = ({
  reductionRate,
  court,
  totalDebt,
  reductionAmount,
  loanPurpose,
  image,
}: JudgmentCardModel) => {
  return (
    <div className="min-w-62 rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="flex flex-col gap-6">
        {/* 이미지 */}
        <div className="aspect-[2563/3192] w-[240px] overflow-hidden rounded-2xl border border-gray-100">
          <CustomImage src={image} alt={"결정문서"} />
        </div>

        {/* 게이지 */}
        <div className="flex w-full flex-col items-center justify-between gap-2">
          <div className="flex w-full items-center justify-between">
            <span className="text-sm font-bold text-blue-500">
              {reductionRate}% 감면
            </span>

            <span className="text-xs font-medium text-gray-500">{court}</span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-blue-500 transition-all duration-300"
              style={{ width: `${reductionRate}%` }}
            />
          </div>
        </div>

        {/* 상세 정보 */}
        <div className="flex flex-col">
          <div className="text-sm">
            <span className="font-bold">총 채무금액: </span>
            <span className="font-medium text-gray-700 opacity-70">
              {totalDebt}
            </span>
          </div>
          <div className="text-sm">
            <span className="font-bold">감면 받은 금액: </span>
            <span className="font-medium text-gray-700 opacity-70">
              {reductionAmount}
            </span>
          </div>
          <div className="text-sm">
            <span className="font-bold">대출금 사용처: </span>
            <span className="font-medium text-gray-700 opacity-70">
              {loanPurpose}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
