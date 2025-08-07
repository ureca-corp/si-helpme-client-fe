import { ReactNode } from "react";

import { BorderBeam } from "@/components/magicui/border-beam";

interface ServicceMain_ItemProps {
  title: string;
  icon: ReactNode;
  description: ReactNode;
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
}: ServicceMain_ItemProps) => {
  return (
    <div className="relative flex h-full flex-col items-start justify-start gap-8 self-stretch overflow-hidden rounded-2xl bg-white p-6 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.04)] outline-1 outline-offset-[-1px] outline-zinc-100">
      <div className="flex items-center justify-start gap-4 self-stretch">
        <div className="flex items-center justify-start gap-2.5 rounded-[100px] bg-green-500/10 p-3">
          <div className="h-6 w-6 overflow-hidden text-green-600">{icon}</div>
        </div>

        <div className="flex-1 justify-center font-['Pretendard'] text-2xl leading-9 font-bold text-neutral-700">
          {title}
        </div>
      </div>
      <div className="justify-center self-stretch">{description}</div>
      <BorderBeam
        duration={8}
        size={100}
        borderWidth={3}
        colorFrom="#2B7FFF"
        colorTo="#00C950"
      />
    </div>
  );
};
