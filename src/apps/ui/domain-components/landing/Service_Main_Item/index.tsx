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
    <div className="flex flex-col gap-6 overflow-hidden rounded-2xl border-2 border-zinc-200 shadow-sm">
      <div className="h-72 w-full">
        <CustomImage src={image} alt={"서비스 이미지"} />
      </div>
      <div className="flex flex-col gap-2 pr-6 pb-6 pl-6">
        <span className="text-2xl font-bold">{title}</span>
        <span className="text-sm whitespace-pre-wrap text-gray-700">
          {description}
        </span>
      </div>
    </div>
  );
};
