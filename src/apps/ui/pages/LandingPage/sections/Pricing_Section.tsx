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
  Lock,
  Printer,
  PrinterCheck,
  ScrollText,
  SearchCheck,
  Shield,
  UsersRound,
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
      installmentPrice: PLAN_PRICE_INFO.basic.installmentPrice,

      recomendTexts: [
        "직접 서류 발급이 가능한 분",
        "스스로 서류 정리 할 수 있는 분",
        "회생 경험자 혹은 기본 절차를 알고 있는 분",
        "최소한의 노력으로 비용 절감을 더 우선으로 생각하는 분",
      ],
      services: [
        {
          bold: true,
          icon: AlarmClockCheck,
          title: "3일 내 접수 완료",
        },
        {
          icon: Printer,
          title: "부채증명서 발급 대행",
          description: "여러 기관에 직접 연락하실 필요 없이 대신 처리",
        },
        {
          icon: ScrollText,
          title: "신청서 작성 및 제출",
          description: "어렵고 복잡한 법률 서류를 처음부터 끝까지 대신 작성",
        },
        {
          icon: Ban,
          title: "금지 명령 신청 (무제한)",
          description: "채권자들의 추심을 막아주는 법적 보호 조치 진행",
        },
        {
          icon: Gavel,
          title: "보정 서류 안내 및 제출",
          description: "법원의 보정 명령에 대해 준비하실 내용만 정리하여 안내",
        },
        {
          icon: SearchCheck,
          title: "채무조회 서비스",
        },
        {
          icon: UsersRound,
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
      otherServices: [
        {
          icon: ScrollText,
          title: "신청서 서류 준비",
        },
        {
          icon: ScrollText,
          title: "보정서 서류 준비 및 정리",
        },
        {
          icon: SearchCheck,
          title: "서비스 구성",
        },
      ],
    },
    {
      plan: PlanType.STANDARD,

      totalPrice: !isLump
        ? PLAN_PRICE_INFO.standard.installment
        : PLAN_PRICE_INFO.standard.lump,

      installmentPrice: PLAN_PRICE_INFO.standard.installmentPrice,

      recomendTexts: [
        "서류를 어떻게 준비해야 할지 막막한 분",
        "컴퓨터나 공공기관 사이트 이용이 어려운 분",
        "채무조정 경험이 전혀 없는 초보자",
      ],
      services: [
        {
          bold: true,
          icon: AlarmClockCheck,
          title: "2일 내 접수 완료",
        },
        {
          bold: true,
          icon: Info,
          title: "BASIC 플랜 전체 서비스 포함",
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

      otherServices: [
        {
          icon: ScrollText,
          title: "인감증명서 발급",
        },
        {
          icon: ScrollText,
          title: "신분증 발급",
        },
        {
          icon: Shield,
          title: "공동인증서 내보내기",
        },
        {
          icon: Lock,
          title: "그 외 본인만 발급할 수 있는 서류",
          description: "근로계약서, 거주지 임대차계약서 등",
        },
      ],
      isRecommended: true,
      recommendedText: "살려줘닷컴 추천",
    },
    {
      plan: PlanType.PRO,

      totalPrice: !isLump
        ? PLAN_PRICE_INFO.pro.installment
        : PLAN_PRICE_INFO.pro.lump,

      installmentPrice: PLAN_PRICE_INFO.pro.installmentPrice,

      recomendTexts: [
        "추심 전화, 문자, 방문 등으로 정신적 압박이 심한 분",
        "지급명령을 받아 이의신청 등 법적 방어가 필요한 분",
        "급여나 통장 등 이미 압류 ⋅ 가압류 되었거나 집행이 임박한 분",
        "사정변경 (병원비, 부양가족 증가)으로 변제계획 수정이 예상되는 분",
      ],
      services: [
        {
          bold: true,
          icon: AlarmClockCheck,
          title: "1일 내 접수 완료",
        },
        {
          bold: true,
          icon: Info,
          title: "BASIC, STANDARD 전체 서비스 포함",
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
            "· 지급명령을 받으셨다면, 14일 내 이의 신청으로 대응\n· 놓치면 곧바로 강제 집행이 시작될 수 있어요",
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
            "실직, 질병, 소득 변동 등 상황 변화에 따라 추가 감면 신청\n· 개시 결정 이후 1회\n· 인가 결정 이후 1회",
        },
      ],
      otherServices: [
        {
          icon: ScrollText,
          title: "인감증명서 발급",
        },
        {
          icon: ScrollText,
          title: "신분증 발급",
        },
        {
          icon: Shield,
          title: "공동인증서",
        },
        {
          icon: Lock,
          title: "그 외 본인만 발급할 수 있는 서류",
          description: "근로계약서, 거주지 임대차계약서 등",
        },
      ],
    },
  ];

  return (
    <section id="pricing" className="relative">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-24">
        <div className="inline-flex w-full max-w-[1200px] flex-col items-center justify-start gap-8">
          <div className="flex flex-col items-center justify-start gap-4 self-stretch">
            <div className="justify-center self-stretch text-center font-['Pretendard'] text-3xl leading-tight font-bold text-zinc-800 md:text-4xl md:leading-[63px] lg:text-5xl">
              요금제 안내
            </div>
            <div className="justify-center self-stretch px-4 text-center font-['Pretendard'] text-base leading-relaxed font-normal text-stone-500 md:text-lg">
              고객님의 상황과 필요에 맞는 최적의 요금제를 선택하세요
            </div>
          </div>

          <div className="sticky top-20 z-20 w-full max-md:top-20">
            <PricingTabs isLump={isLump} setIsLump={setIsLump} />
          </div>

          <div className="flex flex-col items-center justify-center gap-4 text-center text-sm text-gray-500">
            채권자 10건 까지(1 건 추가시 10만원 추가)
            <br />
            법원비용 별도(송달료, 인지)
          </div>

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

      {/* <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] bg-[size:35px_35px] opacity-30" />
      </div> */}
    </section>
  );
}
