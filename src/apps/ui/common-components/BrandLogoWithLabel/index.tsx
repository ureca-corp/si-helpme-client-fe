import clsx from "clsx";

import { BrandIcon } from "../BrandIcon";
import { BrandLogo2 } from "../BrandLogo2";

/**
 * 브랜드 로고와 라벨을 함께 표시하는 컴포넌트
 */
export const BrandLogoWithLabel = ({
  color = "blue",
}: {
  color?: "blue" | "white";
}) => {
  return (
    <div className="flex h-full w-full items-center gap-2">
      <div
        className={clsx(
          "flex aspect-square h-auto w-8 items-center justify-center max-md:w-4",
          color === "blue"
            ? "bg-blue-500 text-white"
            : "bg-white text-gray-900",
        )}
      >
        <BrandIcon />
      </div>

      <BrandLogo2
        className="h-full w-auto max-md:w-20"
        color={color === "blue" ? "#2C81FE" : "#fff"}
      />
    </div>
  );
};
