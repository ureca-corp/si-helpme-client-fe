import { Button } from "@/shadcn/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shadcn/components/ui/dialog";

export const ContactFinishDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent showCloseButton={false} className="flex flex-col gap-8">
        <DialogHeader>
          <DialogTitle>상담 신청이 완료되었습니다.</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col">
          <div className="text-2xl font-bold">
            빠른 시간 내에 연락드리겠습니다.
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
