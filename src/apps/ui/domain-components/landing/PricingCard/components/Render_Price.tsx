import { PLAN_PRICE_INFO } from "@/apps/domain/plan/price";
import NumberFlow from "@number-flow/react";

interface RenderPriceProps {
  isLump: boolean;
  totalPrice: number;
  installmentPrice?: number;
}

/**
 * 가격 렌더링
 * @param isLump 일시불 결제 여부
 * @param totalPrice 총 가격
 * @param installmentPrice 분할 결제 가격
 * @returns 가격 렌더링
 */
export const RenderPrice = ({
  isLump,
  totalPrice,
  installmentPrice,
}: RenderPriceProps) => {
  // 일시불 결제 표기
  if (isLump) {
    return (
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-baseline gap-2">
          <div
            className={`justify-center text-center font-['Pretendard'] text-3xl font-bold md:text-4xl lg:text-5xl`}
          >
            <NumberFlow value={totalPrice} />
          </div>
          <div className="justify-center text-center">
            <span
              className={`font-['Pretendard'] text-lg font-light md:text-xl lg:text-2xl`}
            >
              만원
            </span>
            <span className={`font-['Pretendard'] text-xs font-light`}>
              {" "}
              (부가세 별도)
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* <div className={`font-['Pretendard'] text-sm font-medium opacity-80`}>
            일시불 결제
          </div>
          <div
            className={`rounded-full bg-emerald-100 px-2 py-0.5 font-['Pretendard'] text-xs font-medium text-emerald-700`}
          >
            최종금액
          </div> */}
        </div>
      </div>
    );
  }

  return (
    // 분할 결제 표기
    <div className="flex flex-col items-start gap-1">
      <div className="flex items-baseline gap-2">
        <div
          className={`justify-center text-center font-['Pretendard'] text-3xl font-bold md:text-4xl lg:text-5xl`}
        >
          <NumberFlow value={totalPrice} />
        </div>
        <div className="justify-center text-center">
          <span
            className={`font-['Pretendard'] text-lg font-light md:text-xl lg:text-2xl`}
          >
            만원
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2"></div>
      {/*분할 결제 금액 표기 */}
      <div className="flex items-baseline gap-1 text-[16px]">
        <div className={`font-['Pretendard'] text-2xl font-bold`}>
          {installmentPrice}
        </div>
        <span className={`font-['Pretendard'] text-lg opacity-80`}>
          만원/월 ({PLAN_PRICE_INFO.installmentMonth}개월 분납)
        </span>
      </div>
    </div>
  );
};
