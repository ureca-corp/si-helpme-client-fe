import { Phone } from "lucide-react";

import { sendNaverConversion } from "@/apps/ui/lib/naver-wcs";
import { cn } from "@/shadcn/lib/utils";
import { sendContact } from "@/apps/ui/lib/gtm";

interface CallButtonProps {
  className?: React.HTMLAttributes<HTMLButtonElement>["className"];
  textLabel?: string;
  iconVisible?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

/**
 * 랜딩페이지 전화 버튼
 */
export const CallButton = ({
  className,
  textLabel = "전화 상담",
  disabled = false,
  fullWidth = false,
}: CallButtonProps) => {
  const handleClick = () => {
    sendNaverConversion("custom001");
    sendContact();
    window.location.href = "tel:02-6677-8510";
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
          <Phone className={"size-5 pl-1 text-white"} />
        </div>
      )}
    </button>
  );
};
