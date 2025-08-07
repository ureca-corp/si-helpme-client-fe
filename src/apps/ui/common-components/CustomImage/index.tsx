import Image from "next/image";

export type CustomImageProps = {
  src: string;
  alt: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
};

/**
 * 이미지 컴포넌트
 */
export const CustomImage = ({
  src,
  alt,
  objectFit = "cover",
}: CustomImageProps) => {
  return (
    <div className="relative h-full w-full">
      <Image fill src={src} alt={alt} style={{ objectFit }} />
    </div>
  );
};
