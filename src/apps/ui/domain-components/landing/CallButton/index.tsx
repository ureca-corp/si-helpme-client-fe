import { Phone } from "lucide-react";

import { cn } from "@/shadcn/lib/utils";

interface CallButtonProps {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  textLabel?: string;
}

/**
 * 랜딩페이지 전화 버튼
 */
export const CallButton = ({
  className,
  textLabel = "전화 상담",
}: CallButtonProps) => {
  const handleClick = () => {
    window.open("tel:02-6677-8510", "_blank");
  };

  return (
    <div
      className={cn(
        "flex h-10 cursor-pointer items-center gap-1 rounded-full border border-gray-200 p-4 hover:bg-gray-100 max-md:h-10 max-md:w-30 max-md:text-sm",
        className,
      )}
      onClick={handleClick}
    >
      <Phone className="h-4" />
      <span className="">{textLabel}</span>
    </div>
  );
};
