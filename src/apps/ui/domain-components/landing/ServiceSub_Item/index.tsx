import { ReactNode } from "react";

interface ServiceSub_ItemProps {
  title: string;
  icon: ReactNode;
}

/**
 * 랜딩페이지 서비스 서브 아이템
 * @param title 제목
 * @param icon 아이콘
 */
export const ServiceSub_Item = ({ title, icon }: ServiceSub_ItemProps) => {
  return (
    <div className="inline-flex items-center justify-start gap-4 self-stretch rounded-2xl bg-white p-6">
      <div className="flex items-center justify-start gap-2.5 rounded-[100px] bg-indigo-50 p-3">
        <div className="relative h-6 w-6 overflow-hidden text-blue-500">
          {icon}
        </div>
      </div>
      <div className="flex-1 justify-center font-['Pretendard'] text-lg leading-loose font-medium text-stone-500">
        {title}
      </div>
    </div>
  );
};
