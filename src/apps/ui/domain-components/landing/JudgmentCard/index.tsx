import { CustomImage } from "@/apps/ui/common-components/CustomImage";

export type JudgmentCardModel = {
  title: string; // 제목
  reductionRate: number; // 탕감률
  court: string; // 법원
  totalDebt?: string; // 총 채무액
  monthlyPayment?: string; // 월 변제금
  repaymentPeriod?: string; // 변제 기간
  image: string; // 이미지
};

/**
 * 법원 판결 사례 카드
 */
export const JudgmentCard = ({
  title,
  reductionRate,
  court,
  totalDebt,
  monthlyPayment,
  repaymentPeriod,
  image,
}: JudgmentCardModel) => {
  return (
    <div className="min-w-62 rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="flex flex-col gap-6">
        {/* 제목 */}
        <span className="text-lg font-semibold text-gray-800">{title}</span>

        {/* 이미지 */}
        <div className="aspect-[0.8] w-full overflow-hidden rounded-2xl border border-gray-100">
          <CustomImage src={image} alt={"결정문서"} />
        </div>

        {/* 게이지 */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-[180px]">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm font-bold text-blue-500">
                {reductionRate}% 탕감
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
        </div>

        {/* 상세 정보 */}
        <div className="flex flex-col">
          {totalDebt && (
            <div className="text-sm">
              <span className="font-bold">총 채무액: </span>
              <span className="font-medium text-gray-700 opacity-70">
                {totalDebt}
              </span>
            </div>
          )}

          {monthlyPayment && (
            <div className="text-sm">
              <span className="font-bold">월 변제금: </span>
              <span className="font-medium text-gray-700 opacity-70">
                {monthlyPayment}
              </span>
            </div>
          )}

          {repaymentPeriod && (
            <div className="text-sm">
              <span className="font-bold">변제 기간: </span>
              <span className="font-medium text-gray-700 opacity-70">
                {repaymentPeriod}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
