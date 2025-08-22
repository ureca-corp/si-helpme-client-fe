import { ReactNode } from "react";

import { BorderBeam } from "@/components/magicui/border-beam";
import { cn } from "@/shadcn/lib/utils";

interface ServicceMain_ItemProps {
  title: string;
  icon: ReactNode;
  description: ReactNode;
  chipLabel: string;
  delay?: number;
}

/**
 * 랜딩페이지 서비스 메인 아이템
 * @param title 제목
 * @param icon 아이콘
 * @param description 설명
 */
export const ServiceMain_Item = ({
  title,
  description,
  icon,
  chipLabel,
  delay = 0,
}: ServicceMain_ItemProps) => {
  return (
    <div className="relative flex w-full flex-col items-start justify-between gap-8 self-stretch overflow-hidden rounded-2xl bg-white p-6 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.04)] outline-1 outline-offset-[-1px] outline-zinc-100">
      <div className="flex flex-col items-center justify-start gap-4 self-stretch">
        <div
          className={cn(
            "flex items-center justify-center px-4 py-2",
            "w-fit",
            "rounded-full bg-green-200/50",
            "text-sm font-semibold text-green-700",
          )}
        >
          {chipLabel}
        </div>

        <div className={cn("flex items-center", "min-h-[64px]")}>{icon}</div>

        <div className="flex-1 justify-center text-center font-['Pretendard'] text-2xl leading-9 font-bold text-neutral-700">
          {title}
        </div>
      </div>
      <div className="justify-center self-stretch text-center">
        {description}
      </div>
      <BorderBeam
        duration={8}
        size={100}
        borderWidth={3}
        delay={delay}
        colorFrom="#2B7FFF"
        colorTo="#00C950"
      />
    </div>
  );
};
