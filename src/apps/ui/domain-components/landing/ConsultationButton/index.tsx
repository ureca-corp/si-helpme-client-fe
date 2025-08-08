import { ArrowRight } from "lucide-react";

import { cn } from "@/shadcn/lib/utils";

/**
 * 랜딩페이지 상담 버튼
 */
export const ConsultationButton = ({
  fullWidth = false,
  onClick,
  disabled = false,
}: {
  fullWidth?: boolean;
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      className={cn(
        "group flex h-12 w-40 items-center justify-center rounded-lg py-2 font-bold whitespace-nowrap",
        "transition-colors duration-500 ease-in-out",
        "bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500",
        "cursor-pointer",
        fullWidth && "w-full",
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span
        className={cn("text-white transition-colors duration-100 ease-in-out")}
      >
        상담 신청하기
      </span>
      <div
        className={cn(
          "relative flex h-7 w-0 items-center justify-center transition-all duration-300 ease-in-out group-hover:w-7",
        )}
      >
        <ArrowRight size={16} className={"size-6 pl-1 text-white"} />
      </div>
    </button>
  );
};

{
  /* <div className="min-h-12">
<button
  className={cn(
    "group flex h-12 w-40 items-center justify-center rounded-lg py-2 font-bold whitespace-nowrap",
    "transition-colors duration-500 ease-in-out",
    "bg-gradient-to-r from-[#26d1fd] to-[#a843fe] hover:from-[#a843fe] hover:to-[#26d1fd]",
    "cursor-pointer",
    className
  )}
  onClick={handleClick}
>
  <span
    className={cn(
      "text-white transition-colors duration-100 ease-in-out group-hover:text-amber-100"
    )}
  >
    {text}
  </span>
  <div
    className={cn(
      "relative flex h-7 w-0 items-center justify-center transition-all duration-300 ease-in-out group-hover:w-7"
    )}
  >
    <ArrowRight size={16} className={"size-6 text-white pl-1"} />
  </div>
</button> */
}
