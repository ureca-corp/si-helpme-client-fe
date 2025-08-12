import React from "react";

import { Check } from "lucide-react";

import { PlanType } from "@/apps/domain/plan/type";
import { Button } from "@/shadcn/components/ui/button";

import { RecommendBadge } from "./components/Recommend_Badge";
import { RenderPrice } from "./components/Render_Price";
import { RenderPricingCard_Title } from "./components/Render_Title";

interface ServiceItem {
  bold?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description?: string;
}

export type PricingCardModel = {
  plan: PlanType;
  totalPrice: number;
  installmentPrice?: number;
  recomendTexts: string[];
  services: ServiceItem[];
  otherServices?: ServiceItem[];
  isRecommended?: boolean;
  recommendedText?: string;
};

interface PricingCardProps {
  isLump?: boolean;
  model: PricingCardModel;
  onClick?: () => void;
}

export default function PricingCard({
  isLump = false,
  model,
  onClick,
}: PricingCardProps) {
  const initialRecommendText = "살려줘닷컴 추천";

  const {
    plan,
    totalPrice,
    installmentPrice,
    recomendTexts,
    services,
    otherServices,
    isRecommended,
    recommendedText,
  } = model;
  const config = getPlanConfig(plan);

  return (
    <div className="relative h-full">
      {/* 추천 배지 */}
      {isRecommended && (
        <RecommendBadge
          recommendedText={recommendedText ?? initialRecommendText}
          badgeColor={config.badgeColor}
        />
      )}

      {/* 카드 컨테이너 */}
      <div
        className={`h-full w-full px-8 py-11 ${config.bgColor} rounded-3xl outline-1 outline-offset-[-1px] ${config.borderColor} flex flex-col items-start gap-8 md:gap-10 lg:gap-12`}
      >
        {/* 헤더 섹션 */}
        <div className="flex w-full flex-col items-start gap-8">
          <div className="flex flex-col items-start justify-start gap-2">
            {/* 플랜 타이틀 */}
            <RenderPricingCard_Title plan={plan} />

            {/* 가격 */}
            <RenderPrice
              isLump={isLump}
              totalPrice={totalPrice}
              installmentPrice={installmentPrice}
            />
          </div>

          {/* 설명 및 버튼 */}
          <div className="max-lg:max-h-[] flex h-full max-h-[280px] min-h-[280px] w-full flex-col gap-8 max-lg:min-h-[0]">
            <div className="flex flex-1 flex-col gap-2">
              {recomendTexts.map((text, index) => (
                <div
                  key={index}
                  className={`flex w-full items-center gap-4 text-sm font-light ${config.primaryColor}`}
                >
                  <Check className={`${config.primaryColor}`} />

                  {text}
                </div>
              ))}
            </div>
            <Button
              className={`flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] ${config.buttonColor} hover:${config.buttonColor}`}
              onClick={onClick}
            >
              <div className="justify-center text-center font-['Pretendard'] text-sm leading-tight font-normal">
                상담 신청하기
              </div>
            </Button>
          </div>
        </div>

        {/* 서비스 구성 */}
        <div className="max-lg:max-h-[] flex h-full max-h-[600px] min-h-[600px] flex-col items-start justify-between gap-6 self-stretch max-lg:min-h-[0] md:gap-7 lg:gap-8">
          <div className="flex flex-col items-start justify-start gap-3 self-stretch md:gap-4">
            <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
              <div
                className={`h-0 flex-1 outline-1 outline-offset-[-0.50px] ${config.borderColor}`}
              ></div>
              <div
                className={`justify-start font-['Pretendard'] text-xs font-light ${config.primaryColor}`}
              >
                서비스 구성
              </div>
              <div
                className={`h-0 flex-1 outline-1 outline-offset-[-0.50px] ${config.borderColor}`}
              ></div>
            </div>

            <div className="flex flex-col items-start justify-start gap-2 self-stretch md:gap-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`inline-flex items-center justify-start gap-3 self-stretch md:gap-4 ${service.bold ? `font-bold` : ""}`}
                >
                  {renderIcon(service.icon, config.iconColor)}
                  <div className="inline-flex flex-1 flex-col items-start justify-center gap-0.5">
                    <div
                      className={`justify-start self-stretch font-['Pretendard'] text-sm leading-normal ${service.bold ? `${config.primaryColor}` : "text-stone-500"} md:text-base`}
                    >
                      {service.title}
                    </div>
                    {service.description && (
                      <div className="justify-start self-stretch font-['Pretendard'] text-xs whitespace-pre-line text-neutral-400">
                        {service.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 기타 서비스 */}
        {otherServices && otherServices.length > 0 && (
          <div className="flex flex-col items-start justify-start gap-3 self-stretch md:gap-4">
            <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
              <div
                className={`h-0 flex-1 outline-1 outline-offset-[-0.50px] ${config.borderColor}`}
              ></div>
              <div
                className={`justify-start font-['Pretendard'] text-xs font-light ${config.primaryColor}`}
              >
                고객님이 해야 할 내용
              </div>
              <div
                className={`h-0 flex-1 outline-1 outline-offset-[-0.50px] ${config.borderColor}`}
              ></div>
            </div>

            <div className="flex flex-col gap-3">
              {otherServices.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="flex items-center justify-start gap-4"
                >
                  {renderIcon(service.icon, config.iconColor)}
                  <div className="justify-start font-['Pretendard'] text-sm font-normal text-stone-500">
                    {service.title}
                    {service.description && (
                      <div className="justify-start self-stretch font-['Pretendard'] text-xs text-neutral-400">
                        {service.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// 아이콘 렌더링
const renderIcon = (
  icon: React.ComponentType<{ className?: string }>,
  color: string,
) => {
  const IconComponent = icon;
  return (
    <div className="flex h-6 w-6 items-center justify-center">
      <IconComponent className={`h-5 w-5 ${color} `} />
    </div>
  );
};

const getPlanConfig = (plan: PlanType) => {
  switch (plan) {
    case PlanType.BASIC:
      return {
        color: "emerald",
        borderColor: "outline-emerald-300",
        bgColor: "bg-gradient-to-b from-emerald-50 to-white",
        buttonColor: "bg-white text-black border border-zinc-100",
        iconColor: "text-green-500",
        badgeColor: "bg-green-500",
        titleColor: "text-black",
        priceColor: "text-black",
        primaryColor: "text-green-500",
      };
    case PlanType.STANDARD:
      return {
        color: "blue",
        borderColor: "outline-blue-500/60",
        bgColor: "bg-gradient-to-b from-indigo-50 to-white",
        buttonColor: "bg-blue-500 text-white",
        iconColor: "text-blue-500",
        badgeColor: "bg-blue-500",
        titleColor: "text-black",
        priceColor: "text-black",
        primaryColor: "text-blue-500",
      };
    case PlanType.PRO:
      return {
        color: "black",
        borderColor: "outline-black/50",
        bgColor: "bg-gradient-to-b from-black/5 to-white",
        buttonColor: "bg-black text-white border border-zinc-100",
        iconColor: "text-black/70",
        badgeColor: "bg-black",
        titleColor: "text-black",
        priceColor: "text-black",
        primaryColor: "text-black",
      };
  }
};
