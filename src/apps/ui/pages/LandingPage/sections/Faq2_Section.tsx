import {
  Landing_ResponsiveAccordion,
  Landing_ResponsiveAccordionContent,
  Landing_ResponsiveAccordionItem,
  Landing_ResponsiveAccordionTrigger,
} from "@/apps/ui/domain-components/landing/Accordion/Landing_ResponsiveAccordion";

export const Faq2Section = () => {
  const titleText = "자주 묻는 질문";
  const descriptionText = "개인회생과 파산에 대해 궁금한 점들을 정리했습니다";

  const items = [
    {
      question: "개인회생과 파산의 차이점은 무엇인가요?",
      answer:
        "개인회생은 일정한 소득이 있는 채무자가 채무를 일부 감면받고 3-5년간 분할 상환하는 제도입니다. 파산은 채무자가 모든 재산을 처분하여 채권자에게 배당하고 남은 채무를 면책받는 제도입니다. 개인회생은 재산을 유지하면서 채무를 줄일 수 있고, 파산은 재산을 잃지만 채무를 완전히 면책받을 수 있습니다.",
    },
    {
      question: "개인회생 신청 자격 조건은 어떻게 되나요?",
      answer:
        "개인회생 신청을 위해서는 다음 조건을 만족해야 합니다: 1) 채무총액이 무담보채무 10억원, 담보채무 15억원 이하 2) 계속적이고 반복적인 수입이 있을 것 3) 개인회생절차 개시신청 전 5년 이내에 면책을 받은 사실이 없을 것 4) 급여소득자의 경우 정기적인 수입이 있고 수입의 변동폭이 작을 것",
    },
    {
      question: "수임료는 얼마나 되나요?",
      answer:
        "수임료는 사건의 복잡성과 채무 규모에 따라 달라집니다. 개인회생의 경우 일반적으로 300-500만원, 파산의 경우 200-400만원 선에서 책정됩니다. 경제적 어려움을 고려하여 분납 시스템을 운영하고 있으며, 상담 시 정확한 견적을 제공해드립니다.",
    },
    {
      question: "절차 진행 기간은 얼마나 걸리나요?",
      answer:
        "개인회생의 경우 신청부터 인가결정까지 약 6-8개월, 파산의 경우 신청부터 면책결정까지 약 4-6개월이 소요됩니다. 다만 사건의 복잡성, 법원의 업무량, 채권자의 이의제기 여부 등에 따라 기간이 달라질 수 있습니다.",
    },
    {
      question: "직장에 알려지게 되나요?",
      answer:
        "개인회생이나 파산 신청 사실이 직장에 자동으로 통보되지는 않습니다. 다만 급여압류가 있었던 경우나 퇴직금을 재산으로 신고해야 하는 경우에는 직장의 협조가 필요할 수 있습니다. 대부분의 경우 비밀리에 진행이 가능하며, 직장 생활에 큰 지장을 주지 않습니다.",
    },
    {
      question: "상담비용은 얼마인가요?",
      answer:
        "초기 상담은 무료로 진행됩니다. 전화상담, 온라인 상담, 방문상담 모두 무료이며, 상담 후 사건 수임을 결정하시면 수임료에 대해 안내해드립니다. 부담 없이 언제든지 상담받으실 수 있습니다.",
    },
  ];

  return (
    <section className="px-4 py-20">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-3xl font-semibold md:text-4xl">
            {titleText}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {descriptionText}
          </p>
        </div>

        <Landing_ResponsiveAccordion type="multiple">
          {items.map((item, index) => (
            <Landing_ResponsiveAccordionItem
              key={index}
              value={`item-${index}`}
            >
              <Landing_ResponsiveAccordionTrigger className="font-semibold hover:no-underline">
                {item.question}
              </Landing_ResponsiveAccordionTrigger>
              <Landing_ResponsiveAccordionContent className="text-muted-foreground">
                {item.answer}
              </Landing_ResponsiveAccordionContent>
            </Landing_ResponsiveAccordionItem>
          ))}
        </Landing_ResponsiveAccordion>
      </div>
    </section>
  );
};
