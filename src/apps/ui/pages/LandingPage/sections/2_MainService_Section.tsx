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
            스마트하게 진화한 회생파산 솔루션
          </span>

          <span
            className={cn(
              "text-xl leading-relaxed text-gray-600",
              "max-md:text-lg",
            )}
          >
            전문성은 유지하면서 비용 부담과 처리 시간을 대폭 줄였습니다
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
            title={"수임료를 획기적으로 절약했습니다"}
            chipLabel={"평균 200만 원 절약"}
            description={
              <div className="flex h-full flex-col justify-between gap-3">
                고객의 경제 상황과 필요에 따라 선택할 수 있는 맞춤형 요금제를
                운영합니다. 일시납부가 어려운 분들을 위한 분할 납부 옵션으로
                선택권을 보장하고 부담을 줄였습니다.
              </div>
            }
          />
          <ServiceMain_Item
            icon={<AutomationGearAnimation />}
            title={"자동화 기술로 업무 효율을 높였습니다"}
            chipLabel={"처리 시간 70% 단축"}
            description={
              <div className="flex h-full flex-col justify-between gap-3">
                첨단 업무 자동화 기술을 도입하여 인적 오류를 최소화하고 정확성을
                높였습니다. 표준화된 프로세스와 체계적인 업무 관리로 일관된
                서비스 품질을 보장하며 처리 시간을 대폭 단축했습니다.
              </div>
            }
            delay={5}
          />
          <ServiceMain_Item
            icon={<ChartUpAnimation />}
            title={"최대 감면율을 도출하는 스마트 시스템"}
            chipLabel={"평균 감면율 85%"}
            description={
              <div className="flex h-full flex-col justify-between gap-3">
                수많은 사례 데이터를 학습한 고도화된 알고리즘이 각 고객의 상황을
                정밀 분석하여 맞춤형 솔루션을 제공합니다. 개인의 재정 상태와
                채무 구조를 종합적으로 고려해 더 많이 감면받는 방안을
                도출합니다.
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
