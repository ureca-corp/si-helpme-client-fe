import { Check, FileText, Shield, Users } from "lucide-react";

import { Button } from "@/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "살려줘 '원'",
      price: "160만원",
      discountedPrice: "148만원",
      installment: "최대 7개월 분납 가능",
      description: "기본적인 개인회생 서비스를 제공하는 패키지",
      features: [
        "3일 내 접수 완료",
        "부채증명서 발급 대행",
        "개인회생 신청서 작성 및 제출",
        "금지명령 신청 (최대 2회)",
        "보정서류 안내 및 제출",
        "채무조회 서비스 제공",
        "사건관리 전담팀 배정",
        "실시간 알림 서비스 제공",
        "인가결정 이후 변제금 완납까지 관리",
      ],
      targetAudience: [
        "직접 서류 발급이 가능한 분",
        "스스로 서류 정리 할 수 있는 분",
        "회생 경험자 혹은 기본 절차를 알고 있는 분",
        "최소한의 노력으로 비용 절감을 더 우선으로 생각하는 분",
      ],
      color: "border-blue-200 bg-blue-50",
      icon: FileText,
      iconColor: "text-blue-600 bg-blue-100",
    },
    {
      name: "살려줘 '투'",
      price: "210만원",
      discountedPrice: "195만원",
      installment: "최대 7개월 분납 가능",
      description: "기본 서비스 + 서류 발급 대행 서비스를 포함한 패키지",
      features: [
        "살려줘 '원' 전체 서비스 포함",
        "2일 내 접수 완료",
        "신청서 준비서류 발급 대행",
        "보정서류 발급 및 정리 대행",
      ],
      targetAudience: [
        "서류를 어떻게 준비해야 할지 막막한분",
        "컴퓨터나 공공기관 사이트 이용이 어려운 분",
        "채무조정 경험이 전혀 없는 초보자",
      ],
      color: "border-green-200 bg-green-50",
      icon: Users,
      iconColor: "text-green-600 bg-green-100",
    },
    {
      name: "살려줘 '쓰리'",
      price: "270만원",
      discountedPrice: "255만원",
      installment: "최대 7개월 분납 가능",
      description: "최고급 서비스로 모든 법적 보호와 관리 서비스를 포함",
      features: [
        "살려줘 '원', '투' 전체 서비스 포함",
        "1일 내 접수 완료",
        "채무자대리인 제도 신청 (최대 3회)",
        "지급명령 이의신청 (최대 2회)",
        "중지명령 + 집행정지 신청 (총 2회)",
        "압류해제 신청 (최대 2회)",
        "변제계획안 수정 신청 (2회)",
      ],
      targetAudience: [
        "추심 전화, 문자, 방문 등으로 정신적 압박이 심한 분",
        "지급명령을 받아 이의신청 등 법적 방어가 필요한 분",
        "급여나 통장 등 이미 압류·가압류 되었거나, 집행이 임박한 분",
        "사정변경(병원비, 부양가족 증가)으로 변제계획 수정이 예상되는 분",
      ],
      color: "border-purple-200 bg-purple-50",
      icon: Shield,
      iconColor: "text-purple-600 bg-purple-100",
    },
  ];

  return (
    <section id="pricing" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            요금제 안내
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            고객님의 상황과 필요에 맞는 최적의 요금제를 선택하세요
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card
                key={index}
                className={`relative transform border-2 transition-all duration-300 ${plan.color}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardHeader className="text-center">
                  <div
                    className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${plan.iconColor}`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex h-full flex-col space-y-6">
                  {/* 가격 정보 */}
                  <div className="text-center">
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-gray-800">
                        {plan.discountedPrice}
                      </span>
                      <span className="ml-2 text-lg text-gray-500 line-through">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{plan.installment}</p>
                  </div>

                  {/* 포함 서비스 */}
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-800">
                      포함 서비스
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-green-600" />
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 추천 대상 */}
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-800">
                      추천 대상
                    </h4>
                    <ul className="space-y-2">
                      {plan.targetAudience.map((target, targetIndex) => (
                        <li key={targetIndex} className="flex items-start">
                          <Users className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                          <span className="text-sm text-gray-700">
                            {target}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA 버튼 - 최하단에 위치 */}
                  <div className="mt-auto pt-4">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      상담 신청하기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* 추가 정보 섹션 */}
        {/* <div className="mt-16 rounded-2xl bg-gray-50 p-8">
          <h3 className="mb-6 text-center text-2xl font-bold text-gray-800">
            요금제 선택 가이드
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="mb-2 font-semibold text-gray-800">기본 서비스</h4>
              <p className="text-sm text-gray-600">
                서류 준비가 가능하고 기본 절차를 아시는 분에게 적합합니다
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="mb-2 font-semibold text-gray-800">서류 대행</h4>
              <p className="text-sm text-gray-600">
                서류 준비가 어려우신 분들을 위한 대행 서비스가 포함됩니다
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="mb-2 font-semibold text-gray-800">법적 보호</h4>
              <p className="text-sm text-gray-600">
                추심 중단과 법적 보호가 필요한 분들을 위한 최고급 서비스입니다
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
