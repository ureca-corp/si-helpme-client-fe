import { PlanType } from "@/apps/domain/plan/type";
import { BrandLogo } from "@/apps/ui/common-components/BrandLogo";

import { PlanTypeBadge } from "./Plan_Type_Badge";

interface RenderPricingCard_TitleProps {
  plan: PlanType;
}

/**
 * 플랜 타입에 따라 타이틀 로고 색상 변경
 * @param plan 플랜 타입
 * @returns 타이틀 로고
 */
export const RenderPricingCard_Title = ({
  plan,
}: RenderPricingCard_TitleProps) => {
  const logoColor = (() => {
    switch (plan) {
      case PlanType.BASIC:
        return "#00c950";

      case PlanType.PRO:
        return "#000000";
    }
  })();

  return (
    <div className="flex items-center gap-2">
      <BrandLogo className="h-5 w-auto" color={logoColor} />
      <PlanTypeBadge plan={plan} />
    </div>
  );
};
