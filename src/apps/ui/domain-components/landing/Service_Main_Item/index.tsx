import { CustomImage } from "@/apps/ui/common-components/CustomImage";

interface ServiceMainItemProps {
  title: string;
  description: string;
  image: string;
}

export const ServiceMainItem = ({
  title,
  description,
  image,
}: ServiceMainItemProps) => {
  return (
    <div className="flex flex-col gap-8 overflow-hidden rounded-2xl border-1 border-zinc-200 bg-white shadow-sm">
      <div className="aspect-[1] w-full overflow-hidden rounded-2xl">
        <CustomImage src={image} alt={"서비스 이미지"} />
      </div>
      <div className="flex flex-col gap-2 pr-6 pb-6 pl-6">
        <span className="text-2xl font-bold max-sm:text-xl">{title}</span>

        <div className="h-[1px] w-full bg-gray-200" />

        <span className="text-sm whitespace-pre-wrap text-gray-700 max-sm:text-[10px]">
          {description}
        </span>
      </div>
    </div>
  );
};
