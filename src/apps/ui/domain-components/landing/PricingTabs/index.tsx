import { PLAN_PRICE_INFO } from "@/apps/domain/plan/price";

/**
 * 납부 방식 탭
 * @param isLump 일시납 여부
 * @param setIsLump 일시납 여부 변경 함수
 */
export const PricingTabs = ({
  isLump,
  setIsLump,
}: {
  isLump: boolean;
  setIsLump: (isLump: boolean) => void;
}) => {
  return (
    <div className="flex w-full flex-col items-center gap-2 bg-white py-4">
      <span className="text-sm text-stone-500">
        {"납부 방식을 선택해주세요"}
      </span>
      <div className="inline-flex items-center justify-start gap-2 rounded-[100px] bg-zinc-200/60 p-1 shadow-xl">
        <button
          type="button"
          onClick={() => setIsLump(true)}
          className={`flex cursor-pointer items-center justify-center rounded-[100px] px-4 py-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${
            isLump
              ? "bg-white text-black shadow-sm"
              : "text-stone-700 hover:bg-white/70 hover:text-black"
          }`}
        >
          <div className="justify-center text-center font-['Pretendard'] font-medium">
            일시납
          </div>
        </button>
        <button
          type="button"
          onClick={() => setIsLump(false)}
          className={`flex cursor-pointer items-center justify-center gap-2 rounded-[100px] px-4 py-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${
            !isLump
              ? "bg-white text-black shadow-sm"
              : "text-stone-700 hover:bg-white/70 hover:text-black"
          }`}
        >
          <div className="flex items-center justify-center gap-1 text-center font-['Pretendard'] font-medium">
            분납
            <div className="items-center justify-center rounded-[100px] bg-zinc-100 px-1.5 py-0.5 font-light text-stone-500">
              최대 {PLAN_PRICE_INFO.installmentMonth}개월
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
