import React, { useState } from "react";

import {
  AlarmClockCheck,
  Ban,
  Bell,
  CirclePause,
  CirclePlus,
  DollarSign,
  Gavel,
  Info,
  Printer,
  PrinterCheck,
  ScrollText,
  Search,
  UserCheck,
  UserStar,
} from "lucide-react";

import { PLAN_PRICE_INFO } from "@/apps/domain/plan/price";
import { PlanType } from "@/apps/domain/plan/type";
import PricingCard, {
  PricingCardModel,
} from "@/apps/ui/domain-components/landing/PricingCard";
import { PricingTabs } from "@/apps/ui/domain-components/landing/PricingTabs";

export default function PricingSection() {
  const [isLump, setIsLump] = useState(false);

  const scrollToSection = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pricingPlans: PricingCardModel[] = [
    {
      plan: PlanType.BASIC,

      totalPrice: !isLump
        ? PLAN_PRICE_INFO.basic.installment
        : PLAN_PRICE_INFO.basic.lump,

      description:
        "서류를 직접 발급하실 수 있고, 비용 절감을 우선적으로 생각하시는 분들께 추천드립니다.",
      services: [
        {
          icon: AlarmClockCheck,
          title: "3일 내 접수 완료",
        },
        {
          icon: Printer,
          title: "증명서 발급 대행",
          description: "여러 기관에 직접 연락하실 필요 없이 대신 처리",
        },
        {
          icon: ScrollText,
          title: "서류 작성 및 제출",
          description: "어렵고 복잡한 법률 서류를 처음부터 끝까지 대신 작성",
        },
        {
          icon: Ban,
          title: "금지 명령 신청 (최대 2회)",
          description: "채권자들의 추심을 막아주는 법적 보호 조치 진행",
        },
        {
          icon: Gavel,
          title: "보정 서류 안내 및 제출",
          description: "법원의 보정 명령에 대해 준비하실 내용만 정리하여 안내",
        },
      ],
      otherServices: [
        {
          icon: Search,
          title: "채무 조회 서비스",
        },
        {
          icon: UserCheck,
          title: "사건 전담 팀 배정",
        },
        {
          icon: Bell,
          title: "진행 현황 실시간 알림",
        },
        {
          icon: DollarSign,
          title: "변제금 완납까지 관리",
        },
      ],
    },
    {
      plan: PlanType.STANDARD,

      totalPrice: !isLump
        ? PLAN_PRICE_INFO.standard.installment
        : PLAN_PRICE_INFO.standard.lump,

      description:
        "채무 조정 경험이 없고, 서류 발급부터 이후 절차까지 도움이 필요하신 분들께 추천드립니다.",
      services: [
        {
          icon: Info,
          title: "BASIC 플랜 전체 서비스 포함",
        },
        {
          icon: AlarmClockCheck,
          title: "2일 내 접수 완료",
        },
        {
          icon: PrinterCheck,
          title: "준비 서류 발급 대행",
          description: "정부24, 홈택스, 건강보험공단 등 서류 모두 대신 발급",
        },
        {
          icon: ScrollText,
          title: "보정 서류 발급 및 정리 대행",
          description: "법원에서 추가적으로 요구한 서류 발급 및 정리",
        },
      ],
      isRecommended: true,
      recommendedText: "변호사님 추천",
    },
    {
      plan: PlanType.PRO,

      totalPrice: !isLump
        ? PLAN_PRICE_INFO.pro.installment
        : PLAN_PRICE_INFO.pro.lump,

      description:
        "스탠다드 서비스 이외에, 전문 변호사의 추가적인 도움이 필요하신 분들께 추천드립니다.",
      services: [
        {
          icon: Info,
          title: "BASIC, STANDARD 전체 서비스 포함",
        },
        {
          icon: AlarmClockCheck,
          title: "1일 내 접수 완료",
        },
        {
          icon: UserStar,
          title: "채무자 대리인 제도 신청 (최대 3회)",
          description: "추심 전화, 문자, 방문을 법적 절차를 통해 방지",
        },
        {
          icon: ScrollText,
          title: "지급명령 이의 신청",
          description:
            "지급명령을 받으셨다면, 14일 내 이의 신청으로 대응\n놓치면 곧바로 강제 집행이 시작될 수 있어요",
        },
        {
          icon: Ban,
          title: "중지명령 + 집행정지 신청 (총 2회)",
          description: "압류된 급여통장 잔액 등 보호 목적으로 대응",
        },
        {
          icon: CirclePause,
          title: "압류 해제 신청 (사건 당 최대 2회)",
          description:
            "이미 압류된 통장이나 급여를 해제하여 일상생활이 가능하도록 조치",
        },
        {
          icon: CirclePlus,
          title: "변제 계획안 수정 신청 (각 1회)",
          description:
            "실직, 질병, 소득 변동 등 상황 변화에 따라 추가 감면 신청\n개시 결정 이후 1회\n인가 결정 이후 1회",
        },
      ],
    },
  ];

  return (
    <section id="pricing" className="relative">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-24">
        <div className="inline-flex w-full max-w-[1200px] flex-col items-center justify-start gap-16">
          <div className="flex flex-col items-center justify-start gap-4 self-stretch">
            <div className="justify-center self-stretch text-center font-['Pretendard'] text-3xl leading-tight font-bold text-zinc-800 md:text-4xl md:leading-[63px] lg:text-5xl">
              요금제 안내
            </div>
            <div className="justify-center self-stretch px-4 text-center font-['Pretendard'] text-base leading-relaxed font-normal text-stone-500 md:text-lg">
              고객님의 상황과 필요에 맞는 최적의 요금제를 선택하세요
            </div>
          </div>

          <PricingTabs isLump={isLump} setIsLump={setIsLump} />

          <div className="flex flex-col items-center justify-start gap-20 self-stretch">
            <div className="flex flex-col gap-8 self-stretch lg:grid lg:grid-cols-3 lg:items-stretch">
              {pricingPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  isLump={isLump}
                  model={plan}
                  onClick={scrollToSection}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] bg-[size:35px_35px] opacity-30" />
      </div>
    </section>
  );
}
