import React, { ReactNode } from "react";

import { Button } from "@/shadcn/components/ui/button";

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description?: string;
}

interface PricingCardProps {
  plan: "basic" | "standard" | "pro";
  title: ReactNode;
  payType?: "lump" | "installment";
  price: ReactNode;
  description: string;
  services: ServiceItem[];
  otherServices?: ServiceItem[];
  isRecommended?: boolean;
  recommendedText?: string;
}

/// TODO: 플랜 enum으로 대응
const getPlanConfig = (plan: "basic" | "standard" | "pro") => {
  switch (plan) {
    case "basic":
      return {
        color: "emerald",
        borderColor: "outline-emerald-300",
        bgColor: "bg-white",
        buttonColor: "bg-white text-black border border-zinc-100",
        iconColor: "text-green-500",
        badgeColor: "bg-green-500",
        titleColor: "text-black",
        priceColor: "text-black",
      };
    case "standard":
      return {
        color: "blue",
        borderColor: "outline-blue-500/60",
        bgColor: "bg-gradient-to-b from-indigo-50 to-white",
        buttonColor: "bg-blue-500 text-white",
        iconColor: "text-blue-500",
        badgeColor: "bg-blue-500",
        titleColor: "text-black",
        priceColor: "text-black",
      };
    case "pro":
      return {
        color: "black",
        borderColor: "outline-stone-500",
        bgColor: "bg-white",
        buttonColor: "bg-black text-white border border-zinc-100",
        iconColor: "text-black",
        badgeColor: "bg-black",
        titleColor: "text-black",
        priceColor: "text-black",
      };
  }
};

const renderIcon = (
  icon: React.ComponentType<{ className?: string }>,
  color: string,
) => {
  const IconComponent = icon;
  return (
    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center">
      <IconComponent className={`h-4 w-4 ${color}`} />
    </div>
  );
};

const renderOtherServiceIcon = (
  icon: React.ComponentType<{ className?: string }>,
  color: string,
) => {
  const IconComponent = icon;
  return (
    <div className="flex h-6 w-6 items-center justify-center">
      <IconComponent className={`h-4 w-4 ${color}`} />
    </div>
  );
};

export default function PricingCard({
  plan,
  title,
  payType,
  price,
  description,
  services,
  otherServices,
  isRecommended = false,
  recommendedText = "변호사님 추천",
}: PricingCardProps) {
  const config = getPlanConfig(plan);

  return (
    <div className="relative h-full">
      {/* 추천 배지 */}
      {isRecommended && (
        <div className="absolute left-[50%] z-10 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-start justify-start gap-2.5 rounded-[100px] bg-indigo-50 p-1.5 outline-[3px] outline-offset-[-3px] outline-blue-500">
          <div
            className={`px-3 py-2 ${config.badgeColor} inline-flex items-center justify-center gap-2.5 rounded-[100px]`}
          >
            <div className="justify-start font-['Pretendard'] text-sm font-bold text-indigo-50">
              {recommendedText}
            </div>
          </div>
        </div>
      )}

      {/* 카드 컨테이너 */}
      <div
        className={`h-full w-full self-stretch px-8 py-11 ${config.bgColor} rounded-3xl outline-1 outline-offset-[-1px] ${config.borderColor} flex flex-col items-start justify-start gap-8 md:gap-10 lg:gap-12`}
      >
        {/* 헤더 섹션 */}
        <div className="flex flex-col items-start justify-start gap-6 self-stretch md:gap-7 lg:gap-8">
          <div className="flex flex-col items-start justify-start gap-3 self-stretch md:gap-4">
            {/* 플랜 로고 */}
            <div className="inline-flex items-end justify-start gap-2">
              {title}
            </div>

            {/* 가격 */}
            <div className="inline-flex items-baseline justify-start gap-2">
              <div
                className={`justify-center text-center ${config.priceColor} font-['Pretendard'] text-3xl font-bold md:text-4xl lg:text-5xl`}
              >
                {price}
              </div>
              <div className="justify-center text-center">
                <span
                  className={`${config.priceColor} font-['Pretendard'] text-lg font-light md:text-xl lg:text-2xl`}
                >
                  만원{payType === "installment" ? "/월" : ""}
                </span>

                <span
                  className={`${config.priceColor} font-['Pretendard'] text-xs font-light`}
                >
                  {" "}
                  (부가세 별도)
                </span>
              </div>
            </div>
          </div>

          {/* 설명 및 버튼 */}
          <div className="flex flex-col items-start justify-start gap-3 self-stretch md:gap-4">
            <div className="justify-start self-stretch font-['Pretendard'] text-sm leading-tight font-light text-zinc-500">
              {description}
            </div>
            <Button
              className={`inline-flex items-center justify-center gap-2 self-stretch rounded-md px-4 py-2 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] ${config.buttonColor} hover:${config.buttonColor}`}
            >
              <div className="justify-center text-center font-['Pretendard'] text-sm leading-tight font-normal">
                상담 신청하기
              </div>
            </Button>
          </div>
        </div>

        {/* 서비스 구성 */}
        <div className="flex flex-1 flex-col items-start justify-start gap-6 self-stretch md:gap-7 lg:gap-8">
          <div className="flex flex-col items-start justify-start gap-3 self-stretch md:gap-4">
            <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
              <div className="h-0 flex-1 outline-1 outline-offset-[-0.50px] outline-zinc-100"></div>
              <div className="justify-start font-['Pretendard'] text-xs font-light text-zinc-400">
                서비스 구성
              </div>
              <div className="h-0 flex-1 outline-1 outline-offset-[-0.50px] outline-zinc-100"></div>
            </div>

            <div className="flex flex-col items-start justify-start gap-2 self-stretch md:gap-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="inline-flex items-center justify-start gap-3 self-stretch md:gap-4"
                >
                  {renderIcon(service.icon, config.iconColor)}
                  <div className="inline-flex flex-1 flex-col items-start justify-center gap-0.5">
                    <div className="justify-start self-stretch font-['Pretendard'] text-sm leading-normal font-normal text-stone-500 md:text-base">
                      {service.title}
                    </div>
                    {service.description && (
                      <div className="justify-start self-stretch font-['Pretendard'] text-xs font-normal whitespace-pre-line text-neutral-400">
                        {service.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 기타 서비스 */}
          {otherServices && otherServices.length > 0 && (
            <div className="flex flex-col items-start justify-start gap-3 self-stretch md:gap-4">
              <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                <div className="h-0 flex-1 outline-1 outline-offset-[-0.50px] outline-zinc-100"></div>
                <div className="justify-start font-['Pretendard'] text-xs font-light text-zinc-400">
                  기타 서비스
                </div>
                <div className="h-0 flex-1 outline-1 outline-offset-[-0.50px] outline-zinc-100"></div>
              </div>

              <div
                className="grid w-full gap-6"
                style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                }}
              >
                {otherServices.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="flex min-w-[120px] flex-col items-center justify-center gap-2"
                  >
                    {renderOtherServiceIcon(service.icon, config.iconColor)}
                    <div className="justify-start text-center font-['Pretendard'] text-xs font-normal text-stone-500">
                      {service.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
