import { Loader2 } from "lucide-react";

import {
  Dialog,
  DialogOverlay,
} from "@/shadcn/components/ui/dialog";

/**
 * 로딩 상태 다이얼로그
 * @param open 다이얼로그 열기 여부
 * @param onClose 다이얼로그 닫기 함수
 * @returns 로딩 써클
 */
export const LoadingDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogOverlay className="z-[120]">
        <div className="flex h-full w-full items-center justify-center">
          <Loader2 className="h-10 w-10 animate-spin text-gray-300" />
        </div>
      </DialogOverlay>
    </Dialog>
  );
};
