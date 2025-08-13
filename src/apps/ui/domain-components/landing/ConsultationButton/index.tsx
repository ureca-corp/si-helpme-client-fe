import { ArrowRight } from "lucide-react";

import { sendNaverConversion } from "@/apps/ui/lib/naver-wcs";
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
  const handleClick = () => {
    sendNaverConversion("custom003");
    onClick();
  };

  return (
    <button
      className={cn(
        `group flex h-12 w-40 items-center justify-center rounded-full py-2 font-bold whitespace-nowrap`,
        "transition-colors duration-500 ease-in-out",
        "bg-gradient-to-r from-blue-500 to-green-600 hover:from-green-600 hover:to-blue-500",
        "cursor-pointer",
        disabled && "cursor-not-allowed opacity-50",
        fullWidth && "w-full",
        className,
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      <span
        className={cn("text-white transition-colors duration-100 ease-in-out")}
      >
        {textLabel}
      </span>
      {!disabled && (
        <div
          className={cn(
            "relative flex h-7 w-0 items-center justify-center transition-all duration-300 ease-in-out group-hover:w-7 max-md:hidden",
          )}
        >
          <ArrowRight size={16} className={"size-6 pl-1 text-white"} />
        </div>
      )}
    </button>
  );
};
