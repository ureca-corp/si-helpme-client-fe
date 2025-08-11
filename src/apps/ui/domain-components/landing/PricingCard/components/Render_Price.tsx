import NumberFlow from "@number-flow/react";

interface RenderPriceProps {
  isLump: boolean;
  totalPrice: number;
}

/**
 * 가격 렌더링
 * @param isLump 일시불 결제 여부
 * @param totalPrice 총 가격
 * @returns 가격 렌더링
 */
export const RenderPrice = ({ isLump, totalPrice }: RenderPriceProps) => {
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
          <div className={`font-['Pretendard'] text-sm font-medium opacity-80`}>
            일시불 결제
          </div>
          <div
            className={`rounded-full bg-emerald-100 px-2 py-0.5 font-['Pretendard'] text-xs font-medium text-emerald-700`}
          >
            최종금액
          </div>
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
          <span className={`font-['Pretendard'] text-xs font-light`}>
            {" "}
            (부가세 별도)
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className={`font-['Pretendard'] text-sm font-medium opacity-80`}>
          분할 결제
        </div>
        <div
          className={`rounded-full bg-blue-100 px-2 py-0.5 font-['Pretendard'] text-xs font-medium text-blue-700`}
        >
          최종금액
        </div>
      </div>
      {/*분할 결제 금액 표기 */}
      {/* <div className="flex items-baseline gap-1">
        <span className={`font-['Pretendard'] text-xs font-normal opacity-70`}>
          월
        </span>
        <div className={`font-['Pretendard'] text-sm font-semibold opacity-80`}>
          {PlanPriceInfoHelper.getInstallmentPrice(totalPrice)}
        </div>
        <span className={`font-['Pretendard'] text-xs font-normal opacity-70`}>
          만원 × {PLAN_PRICE_INFO.installmentMonth}개월
        </span>
      </div> */}
    </div>
  );
};
