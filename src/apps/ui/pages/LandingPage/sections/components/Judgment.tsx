import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

import {
  JudgmentCard,
  JudgmentCardModel,
} from "@/apps/ui/domain-components/landing/JudgmentCard";

export const RenderJudgments = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      watchDrag: false,
    },
    [
      AutoScroll({
        speed: 1.5,
      }),
    ],
  );

  return (
    <div className="embla w-full overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {firstItems.map((it, index) => (
            <div
              key={index}
              className="embla__slide min-w-0 flex-[0_0_auto] pl-4"
            >
              <JudgmentCard key={index} {...it} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const firstItems = Array.from(
  { length: 10 },
  (_, index): JudgmentCardModel => ({
    title: `파산${index + 1}`,
    court: `OO법원${index + 1}`,
    reductionRate: index % 2 === 0 ? 0 : 50 + index,
    totalDebt: `1${index + 1} 억원`,
    monthlyPayment: `10${index + 1} 만원`,
    repaymentPeriod: `10${index + 1}일`,
    image: `/dumy_document.png`,
  }),
);
