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
    image: "/Judgment6.png",
    title: "개인회생",
    court: "광주지방법원",
    reductionRate: 70,
    totalDebt: "9,000만원",
    reductionAmount: "6,300만원",
    loanPurpose: "생활비 및 돌려막기",
  },
  {
    image: "/Judgment7.png",
    title: "개인회생",
    court: "대전지방법원",
    reductionRate: 77,
    totalDebt: "8,000만원",
    reductionAmount: "6,160만원",
    loanPurpose: "사업자금(소규모 식당 운영)",
  },
  {
    image: "/Judgment8.png",
    title: "개인회생",
    court: "부산회생법원",
    reductionRate: 77,
    totalDebt: "5,500만원",
    reductionAmount: "4,235만원",
    loanPurpose: "의료비 및 병원비",
  },
  {
    image: "/Judgment9.png",
    title: "개인회생",
    court: "서울회생법원",
    reductionRate: 85,
    totalDebt: "1억 2,000만원",
    reductionAmount: "1억 200만원",
    loanPurpose: "사업비, 생활비, 돌려막기",
  },
  {
    image: "/Judgment10.png",
    title: "개인회생",
    court: "서울회생법원",
    reductionRate: 73,
    totalDebt: "2억 8,000만원",
    reductionAmount: "2억 440만원",
    loanPurpose: "생활비(임대료·카드값)",
  },
  {
    image: "/Judgment11.png",
    title: "개인회생",
    court: "수원회생법원",
    reductionRate: 82,
    totalDebt: "1억 8,000만원",
    reductionAmount: "1억 4,760만원",
    loanPurpose: "생활비 및 자녀 교육비",
  },
  {
    image: "/Judgment12.png",
    title: "개인회생",
    court: "울산지방법원",
    reductionRate: 59,
    totalDebt: "1억 5,000만원",
    reductionAmount: "8,850만원",
    loanPurpose: "주식투자 손실",
  },
  {
    image: "/Judgment13.png",
    title: "개인회생",
    court: "인천지방법원",
    reductionRate: 46,
    totalDebt: "9,000만원",
    reductionAmount: "4,140만원",
    loanPurpose: "사설 도박",
  },
  {
    image: "/Judgment14.png",
    title: "개인회생",
    court: "제주지방법원",
    reductionRate: 88,
    totalDebt: "1억 9,000만원",
    reductionAmount: "1억 6,720만원",
    loanPurpose: "생활비 및 자녀 교육비",
  },
  {
    image: "/Judgment15.png",
    title: "개인회생",
    court: "창원지방법원",
    reductionRate: 63,
    totalDebt: "2억 2,000만원",
    reductionAmount: "1억 3,860만원",
    loanPurpose: "사업자금(창업 실패)",
  },
  {
    image: "/Judgment16.png",
    title: "개인회생",
    court: "청주지방법원",
    reductionRate: 55,
    totalDebt: "1억원",
    reductionAmount: "5,500만원",
    loanPurpose: "코인투자 손실",
  },
  {
    image: "/Judgment17.png",
    title: "개인회생",
    court: "춘천지방법원",
    reductionRate: 68,
    totalDebt: "7,000만원",
    reductionAmount: "4,760만원",
    loanPurpose: "의료비(가족 치료비)",
  },
];
