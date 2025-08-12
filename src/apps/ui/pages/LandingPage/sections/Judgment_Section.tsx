import {
  JudgmentCard,
  JudgmentCardModel,
} from "@/apps/ui/domain-components/landing/JudgmentCard";
import { Marquee } from "@/components/magicui/marquee";

export const JudgmentSection = () => {
  const firstRow = [
    {
      username: "John Doe1",
      review: "This is a review",
    },
    {
      username: "John Doe2",
      review: "This is a review",
    },
    {
      username: "John Doe3",
      review: "This is a review",
    },
    {
      username: "John Doe4",
      review: "This is a review",
    },
  ];

  const secondRow = [
    {
      username: "John Doe5",
      review: "This is a review",
    },
    {
      username: "John Doe6",
      review: "This is a review",
    },
    {
      username: "John Doe7",
      review: "This is a review",
    },
    {
      username: "John Doe8",
      review: "This is a review",
    },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden px-4 py-24">
      <div className="relative flex w-full max-w-[1200px] flex-col gap-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            면책결정 사례
          </h2>
        </div>

        <Marquee pauseOnHover className="[--duration:30s]">
          {firstItems.map((it, index) => (
            <JudgmentCard key={index} {...it} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondItems.map((it, index) => (
            <JudgmentCard key={index} {...it} />
          ))}
        </Marquee>

        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
      </div>
    </div>
  );
};

const ReviewCard = ({
  username,
  review,
}: {
  username: string;
  review: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-2xl font-bold">{username}</h3>
      <p className="text-sm">{review}</p>
    </div>
  );
};

const firstItems = Array.from(
  { length: 10 },
  (_, index): JudgmentCardModel => ({
    title: `John Doe${index + 1}`,
    court: `법원${index + 1}`,
    reductionRate: index % 2 === 0 ? 0 : 50,
    totalDebt: `100000000${index + 1}`,
    monthlyPayment: `100000000${index + 1}`,
    repaymentPeriod: `100000000${index + 1}`,
    image: `https://images.unsplash.com/photo-1526538964379-c7f71c1d7983?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  }),
);

const secondItems = Array.from(
  { length: 10 },
  (_, index): JudgmentCardModel => ({
    title: `John Doe${index + 10}`,
    court: `법원${index + 10}`,
    reductionRate: index % 2 === 0 ? 0 : 50,
    totalDebt: `100000000${index + 10}`,
    monthlyPayment: `100000000${index + 10}`,
    repaymentPeriod: `100000000${index + 10}`,
    image: `https://images.unsplash.com/photo-1526538964379-c7f71c1d7983?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  }),
);
