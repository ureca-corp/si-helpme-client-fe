import { useSearchFaqs } from "@/apps/applications/faq/useSearchFaqs";
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

  const { error, isLoading, data } = useSearchFaqs();

  if (isLoading) {
    return <></>;
  }

  if (!!error || !data) {
    return <></>;
  }

  const faqs = data!.items ?? [];

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
            {faqs.map((item, index) => (
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
