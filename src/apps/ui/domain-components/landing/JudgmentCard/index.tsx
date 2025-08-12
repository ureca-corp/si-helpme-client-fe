import { Plus } from "lucide-react";

export type JudgmentCardModel = {
  title: string; // 제목
  reductionRate: number; // 탕감률
  court: string; // 법원
  totalDebt: string; // 총 채무액
  monthlyPayment: string; // 월 변제금
  repaymentPeriod: string; // 변제 기간
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
    <div className="relative min-w-60 rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
      {/* <CustomImage src={image} alt={"결정문서"} /> */}

      {/* 우상단 플러스 아이콘 */}
      <div className="absolute top-4 right-4">
        <Plus className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-gray-600" />
      </div>

      {/* 제목 */}
      <h3 className="mb-4 pr-8 text-lg font-semibold text-gray-800">{title}</h3>

      {/* 원형 게이지 */}
      <div className="mb-6 flex justify-center">
        <div className="relative h-20 w-20">
          <svg className="h-20 w-20 -rotate-90 transform" viewBox="0 0 36 36">
            {/* 배경 원 */}
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="2"
            />
            {/* 진행률 원 */}
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeDasharray={`${reductionRate}, 100`}
              strokeLinecap="round"
            />
          </svg>
          {/* 중앙 텍스트 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold text-gray-800">
              {reductionRate}%
            </span>
          </div>
        </div>
      </div>

      {/* 탕감률 라벨 */}
      <div className="mb-4 text-center">
        <span className="text-xs font-medium text-gray-500">탕감률</span>
      </div>

      {/* 상세 정보 */}
      <div className="space-y-2">
        <div className="text-sm">
          <span className="text-gray-600">{court}</span>
        </div>
        <div className="text-sm">
          <span className="text-gray-500">총 채무액: </span>
          <span className="font-medium text-gray-800">{totalDebt}</span>
        </div>
        <div className="text-sm">
          <span className="text-gray-500">월 변제금: </span>
          <span className="font-medium text-gray-800">{monthlyPayment}</span>
        </div>
        <div className="text-sm">
          <span className="text-gray-500">변제 기간: </span>
          <span className="font-medium text-gray-800">{repaymentPeriod}</span>
        </div>
      </div>
    </div>
  );
};
