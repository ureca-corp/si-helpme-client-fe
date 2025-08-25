import AutoPlay from "embla-carousel-autoplay";
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
      AutoPlay({
        delay: 3000,
      }),

      // AutoScroll({
      //   speed: 1.5,
      // }),
    ],
  );

  return (
    <div className="embla w-full overflow-hidden pb-1">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {items.map((it, index) => (
            <div
              key={index}
              className="embla__slide min-w-0 flex-[0_0_auto] px-5"
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
  {
    image: "/Judgment6.png",
    title: "개인회생",
    court: "광주지방법원",
    reductionRate: 70,
  },
  {
    image: "/Judgment7.png",
    title: "개인회생",
    court: "대전지방법원",
    reductionRate: 77,
  },
  {
    image: "/Judgment8.png",
    title: "개인회생",
    court: "부산회생법원",
    reductionRate: 77,
  },
  {
    image: "/Judgment9.png",
    title: "개인회생",
    court: "서울회생법원",
    reductionRate: 85,
  },
  {
    image: "/Judgment10.png",
    title: "개인회생",
    court: "서울회생법원",
    reductionRate: 73,
  },
  {
    image: "/Judgment11.png",
    title: "개인회생",
    court: "수원회생법원",
    reductionRate: 82,
  },
  {
    image: "/Judgment12.png",
    title: "개인회생",
    court: "울산지방법원",
    reductionRate: 59,
  },
  {
    image: "/Judgment13.png",
    title: "개인회생",
    court: "인천지방법원",
    reductionRate: 46,
  },
  {
    image: "/Judgment14.png",
    title: "개인회생",
    court: "제주지방법원",
    reductionRate: 88,
  },
  {
    image: "/Judgment15.png",
    title: "개인회생",
    court: "창원지방법원",
    reductionRate: 63,
  },
  {
    image: "/Judgment16.png",
    title: "개인회생",
    court: "청주지방법원",
    reductionRate: 55,
  },
  {
    image: "/Judgment17.png",
    title: "개인회생",
    court: "춘천지방법원",
    reductionRate: 68,
  },
];
