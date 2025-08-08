import NumberFlow from "@number-flow/react";

interface ReliabilityNumberItemProps {
  value: number;
  unit: string;
  description: string;
}

/**
 * 랜딩페이지 신뢰도 숫자 아이템
 * @param value 숫자
 * @param unit 단위
 * @param description 설명
 */
export const ReliabilityNumberItem = ({
  value,
  unit,
  description,
}: ReliabilityNumberItemProps) => {
  return (
    <div className="flex flex-col items-center gap-2 sm:w-[106px] md:w-[150px]">
      <div className="flex items-center gap-1">
        <NumberFlow
          value={value}
          className="text-2xl font-bold tracking-tighter whitespace-pre-wrap text-black md:text-4xl dark:text-white"
        />
        <span className="text-2xl font-bold tracking-tighter whitespace-pre-wrap text-black md:text-4xl">
          {unit}
        </span>
      </div>
      <div className="text-sm text-gray-500 md:text-base">{description}</div>
    </div>
  );
};
