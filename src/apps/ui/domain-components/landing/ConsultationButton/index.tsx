import { ArrowRight } from "lucide-react";

import { cn } from "@/shadcn/lib/utils";

/**
 * 랜딩페이지 상담 버튼
 */
export const ConsultationButton = ({
  fullWidth = false,
  onClick,
  disabled = false,
  textLabel = "상담 신청하기",
  className,
}: {
  fullWidth?: boolean;
  onClick: () => void;
  textLabel?: string;
  disabled?: boolean;
  className?: React.HTMLAttributes<HTMLButtonElement>["className"];
}) => {
  return (
    <button
      className={cn(
        `group flex h-12 w-40 items-center justify-center rounded-lg py-2 font-bold whitespace-nowrap`,
        "transition-colors duration-500 ease-in-out",
        "bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500",
        "cursor-pointer",
        fullWidth && "w-full",
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span
        className={cn("text-white transition-colors duration-100 ease-in-out")}
      >
        {textLabel}
      </span>
      <div
        className={cn(
          "relative flex h-7 w-0 items-center justify-center transition-all duration-300 ease-in-out group-hover:w-7 max-md:hidden",
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
