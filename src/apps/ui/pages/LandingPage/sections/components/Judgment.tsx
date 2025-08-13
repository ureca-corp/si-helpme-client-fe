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
    <div className="embla w-full overflow-hidden pb-1">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {items.map((it, index) => (
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

const items: JudgmentCardModel[] = [
  {
    image: "/Judgment1.jpg",
    title: "개인회생",
    court: "수원회생법원",
    reductionRate: 90,
  },
  {
    image: "/Judgment2.jpg",
    title: "개인회생",
    court: "춘천지방법원",
    reductionRate: 85,
  },
  {
    image: "/Judgment3.jpg",
    title: "개인회생",
    court: "광주지방법원",
    reductionRate: 79,
  },
  {
    image: "/Judgment4.jpg",
    title: "개인회생",
    court: "서울회생법원",
    reductionRate: 87,
  },
  {
    image: "/Judgment5.jpg",
    title: "개인회생",
    court: "인천지방법원",
    reductionRate: 85,
  },
];
