import { ServiceFooterNumber } from "@/apps/ui/domain-components/landing/ServiceFooterNumber";
import { ServiceMain_Item } from "@/apps/ui/domain-components/landing/ServiceMain_Item";
import { AutomationGearAnimation } from "@/apps/ui/domain-components/landing/ServiceMain_Item/components/AutomationGearAnimation";
import { ChartUpAnimation } from "@/apps/ui/domain-components/landing/ServiceMain_Item/components/ChartUpAnimation";
import { PriceDownAnimation } from "@/apps/ui/domain-components/landing/ServiceMain_Item/components/PriceDownAnimation";
import { cn } from "@/shadcn/lib/utils";

export const MainServiceSection = () => {
  return (
    <div
      className={cn("flex flex-col items-center justify-center gap-16 pt-24")}
    >
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-24 px-4",
          "w-full max-w-[1200px]",
        )}
      >
        <div
          className={cn(
            "flex flex-col items-center justify-center gap-4",
            "w-full max-w-[1200px]",
            "text-center",
          )}
        >
          <span
            className={cn(
              "text-4xl font-bold text-gray-800",
              "max-md:text-3xl",
            )}
          >
            혁신 기술로 달라진 회생파산 서비스
          </span>

          <span
            className={cn(
              "text-xl leading-relaxed text-gray-600",
              "max-md:text-lg",
            )}
          >
            전문성은 유지하되, 비용과 시간은 대폭 단축했습니다
          </span>
        </div>

        <div
          className={cn(
            "flex w-full items-center justify-center gap-10",
            "max-lg:flex-col",
          )}
        >
          <ServiceMain_Item
            icon={<PriceDownAnimation />}
            title={"수임료를 낮췄습니다"}
            description={
              <div className="flex h-full flex-col justify-between gap-3">
                AI 문서 자동화와 프로세스 최적화로 운영비를 대폭 절감하여 기존
                법무법인 대비 40% 저렴한 수임료를 실현했습니다.
                <RenderItemChip label={"평균 200만원 절약"} />
              </div>
            }
          />
          <ServiceMain_Item
            icon={<AutomationGearAnimation />}
            title={"자동화 기술로 업무 효율을 높였습니다"}
            description={
              <div className="flex h-full flex-col justify-between gap-3">
                AI가 서류 작성부터 법원 제출까지 자동으로 처리하여 기존 3개월
                걸리던 업무를 1개월로 단축했습니다.
                <RenderItemChip label={"처리시간 70% 단축"} />
              </div>
            }
            delay={5}
          />
          <ServiceMain_Item
            icon={<ChartUpAnimation />}
            title={"최대 감면 알고리즘을 개발했습니다"}
            description={
              <div className="flex h-full flex-col justify-between gap-3">
                1만 건 이상의 성공 사례를 학습한 AI 알고리즘이 개인별 최적
                감면율을 계산하여 최대한의 채무 감면을 실현합니다.
                <RenderItemChip label={"평균 감면율 85%"} />
              </div>
            }
            delay={10}
          />
        </div>
      </div>

      <div
        className={cn(
          "flex justify-center px-4 py-24",
          "w-full",
          "bg-gradient-to-b from-blue-100/50 to-gray-100",
        )}
      >
        <div
          data-aos="fade-up"
          className={cn(
            "grid grid-cols-4 items-center justify-between gap-8",
            "w-full max-w-[1000px]",
            "max-lg:grid-cols-2",
          )}
        >
          <ServiceFooterNumber value={10247} description={"AI 처리 완료"} />
          <ServiceFooterNumber
            value={85}
            unit={"%"}
            description={"평균 감면율"}
          />
          <ServiceFooterNumber
            value={30}
            unit={"일"}
            description={"평균 처리기간"}
          />
          <ServiceFooterNumber
            value={40}
            unit={"%"}
            description={"비용 절약"}
          />
        </div>
      </div>
    </div>
  );
};

const RenderItemChip = ({ label }: { label: string }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center px-4 py-2",
        "w-fit",
        "rounded-full bg-green-200/50",
        "text-sm font-semibold text-green-700",
      )}
    >
      {label}
    </div>
  );
};
