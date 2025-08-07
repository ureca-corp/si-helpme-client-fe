import { ArrowRight } from "lucide-react";

import { Button } from "@/shadcn/components/ui/button";
import { cn } from "@/shadcn/lib/utils";

/**
 * 랜딩페이지 상담 버튼
 */
export const ConsultationButton = ({
  fullWidth = false,
  onClick,
}: {
  fullWidth?: boolean;
  onClick: () => void;
}) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "rounded-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600",
        fullWidth && "w-full",
      )}
    >
      <div className="flex items-center gap-2 px-2">
        <span>상담 신청하기</span>
        <ArrowRight />
      </div>
    </Button>
  );
};
