import { Landmark } from "lucide-react";

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
    <div className="flex items-center">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-lg p-1 ${
          color === "blue" ? "bg-blue-500 text-white" : "bg-white text-black"
        }`}
      >
        <Landmark />
      </div>

      <BrandLogo2
        className="scale-85"
        color={color === "blue" ? "#2C81FE" : "#fff"}
      />
    </div>
  );
};
