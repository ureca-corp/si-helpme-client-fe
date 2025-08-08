import { CheckIcon } from "lucide-react";

import { Button } from "@/shadcn/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
} from "@/shadcn/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

export const ContactFinishDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        showCloseButton={false}
        className="flex w-fit flex-col gap-8"
      >
        <DialogTitle className="hidden" />

        <div className="flex flex-col items-center gap-4">
          <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckIcon className="h-10 w-10 text-green-500" />
          </div>
          <div className="text-center text-xl font-semibold text-gray-800">
            상담 신청이 정상적으로 접수되었습니다.
          </div>
          <div className="text-center text-base text-gray-600">
            담당자가 빠른 시일 내에 연락드리겠습니다.
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="w-full">
            확인
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
