import { CustomImage } from "@/apps/ui/common-components/CustomImage";
import {
  FaqAccordion,
  FaqAccordionContent,
  FaqAccordionItem,
  FaqAccordionTrigger,
} from "@/apps/ui/domain-components/landing/FAQ_Accordion";

export const FaqSection = () => {
  const titleText = "자주 묻는 질문";
  const descriptionText = "상담 전에 한번 읽어보시면 도움이 되실 거예요.";
  const image = "/company_main.jpg";

  const items = [
    {
      question:
        "소송에서 이겼는데 돈을 아직 못 받았습니다. 어떻게 해야 하나요?",
      answer:
        "판결이나 합의가 끝난 후에도 실제로 금전을 회수하려면 별도의 절차가 필요합니다.\n채권추심 관리 서비스를 이용하면 변호사가 상대방의 재산을 압류하거나 강제집행, 협상 등 다양한 방법을 통해 실질적으로 돈을 받아낼 수 있도록 도와드립니다.",
    },
    {
      question:
        "소송에서 이겼지만 상대방이 항소를 했습니다. 다음 단계는 무엇인가요?",
      answer:
        "개인회생 신청을 위해서는 다음 조건을 만족해야 합니다: 1) 채무총액이 무담보채무 10억원, 담보채무 15억원 이하 2) 계속적이고 반복적인 수입이 있을 것 3) 개인회생절차 개시신청 전 5년 이내에 면책을 받은 사실이 없을 것 4) 급여소득자의 경우 정기적인 수입이 있고 수입의 변동폭이 작을 것",
    },
    {
      question:
        "소송이 진행 중인데, 증거 제출 마감일을 놓쳤습니다. 어떻게 해결할 수 있나요?",
      answer:
        "수임료는 사건의 복잡성과 채무 규모에 따라 달라집니다. 개인회생의 경우 일반적으로 300-500만원, 파산의 경우 200-400만원 선에서 책정됩니다. 경제적 어려움을 고려하여 분납 시스템을 운영하고 있으며, 상담 시 정확한 견적을 제공해드립니다.",
    },
    {
      question:
        "법원에서 판결이 나왔지만 전액을 받지 못했습니다. 어떻게 추가로 청구할 수 있나요?",
      answer:
        "개인회생의 경우 신청부터 인가결정까지 약 6-8개월, 파산의 경우 신청부터 면책결정까지 약 4-6개월이 소요됩니다. 다만 사건의 복잡성, 법원의 업무량, 채권자의 이의제기 여부 등에 따라 기간이 달라질 수 있습니다.",
    },
    {
      question:
        "소송 과정에서 변호사와의 의견 충돌이 발생했습니다. 어떻게 해야 하나요?",
      answer:
        "개인회생이나 파산 신청 사실이 직장에 자동으로 통보되지는 않습니다. 다만 급여압류가 있었던 경우나 퇴직금을 재산으로 신고해야 하는 경우에는 직장의 협조가 필요할 수 있습니다. 대부분의 경우 비밀리에 진행이 가능하며, 직장 생활에 큰 지장을 주지 않습니다.",
    },
    {
      question:
        "소송 중에 새로운 증거가 발견되었습니다. 이를 법원에 어떻게 제출하나요?",
      answer:
        "초기 상담은 무료로 진행됩니다. 전화상담, 온라인 상담, 방문상담 모두 무료이며, 상담 후 사건 수임을 결정하시면 수임료에 대해 안내해드립니다. 부담 없이 언제든지 상담받으실 수 있습니다.",
    },
    {
      question:
        "소송에서 이긴 후에도 상대방이 돈을 지불하지 않으려 합니다. 어떤 조치를 취할 수 있나요?",
      answer:
        "초기 상담은 무료로 진행됩니다. 전화상담, 온라인 상담, 방문상담 모두 무료이며, 상담 후 사건 수임을 결정하시면 수임료에 대해 안내해드립니다. 부담 없이 언제든지 상담받으실 수 있습니다.",
    },
    {
      question:
        "소송이 끝났지만 판결문을 아직 받지 못했습니다. 어떻게 진행해야 하나요?",
      answer:
        "초기 상담은 무료로 진행됩니다. 전화상담, 온라인 상담, 방문상담 모두 무료이며, 상담 후 사건 수임을 결정하시면 수임료에 대해 안내해드립니다. 부담 없이 언제든지 상담받으실 수 있습니다.",
    },
    {
      question:
        "상대방이 항소를 하지 않으면 소송이 종료되나요? 어떤 점을 주의해야 하나요?",
      answer:
        "초기 상담은 무료로 진행됩니다. 전화상담, 온라인 상담, 방문상담 모두 무료이며, 상담 후 사건 수임을 결정하시면 수임료에 대해 안내해드립니다. 부담 없이 언제든지 상담받으실 수 있습니다.",
    },
    {
      question:
        "소송 중인 사건과 관련된 증인을 추가로 요청하려면 어떻게 해야 하나요?",
      answer:
        "초기 상담은 무료로 진행됩니다. 전화상담, 온라인 상담, 방문상담 모두 무료이며, 상담 후 사건 수임을 결정하시면 수임료에 대해 안내해드립니다. 부담 없이 언제든지 상담받으실 수 있습니다.",
    },
    {
      question:
        "변호사를 변경하고 싶습니다. 이전 변호사와의 계약 해지 절차는 어떻게 되나요?",
      answer:
        "초기 상담은 무료로 진행됩니다. 전화상담, 온라인 상담, 방문상담 모두 무료이며, 상담 후 사건 수임을 결정하시면 수임료에 대해 안내해드립니다. 부담 없이 언제든지 상담받으실 수 있습니다.",
    },
    {
      question:
        "재판 중 법원에 제출할 서류를 잘못 작성했습니다. 이를 수정하는 방법은 무엇인가요?",
      answer:
        "초기 상담은 무료로 진행됩니다. 전화상담, 온라인 상담, 방문상담 모두 무료이며, 상담 후 사건 수임을 결정하시면 수임료에 대해 안내해드립니다. 부담 없이 언제든지 상담받으실 수 있습니다.",
    },
  ];

  return (
    <section id="faq" className="flex flex-col items-center px-6 py-[100px]">
      <div className="flex w-full max-w-[1200px] flex-col">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-3xl font-semibold md:text-4xl">
            {titleText}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {descriptionText}
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="hidden aspect-[1.4] h-full w-full overflow-hidden rounded-lg md:flex md:aspect-[0.8] md:h-142 md:w-[40%]">
            <div className="relative h-full w-full">
              <CustomImage src={image} alt="이미지" objectFit="cover" />
            </div>
          </div>
          <FaqAccordion type="multiple" className="w-full md:w-[60%]">
            {items.map((item, index) => (
              <FaqAccordionItem key={index} value={`item-${index}`}>
                <FaqAccordionTrigger>{item.question}</FaqAccordionTrigger>
                <FaqAccordionContent className="text-muted-foreground">
                  {item.answer}
                </FaqAccordionContent>
              </FaqAccordionItem>
            ))}
          </FaqAccordion>
        </div>
      </div>
    </section>
  );
};
