import { ServiceMainItem } from "@/apps/ui/domain-components/landing/Service_Main_Item";

import { RenderJudgments } from "./components/Judgment";

export const ServicesSection = () => {
  const items = [
    {
      src: "/a-main.jpg",
      title: "전문변호사 사건관리",
      desc: "회생 파산 전문변호사가 직접사건을 관리하여 최적의 결과 도출",
    },
    {
      src: "/office.jpg",
      title: "수임료 개혁",
      desc: "업계의 고비용 수임료를 낮추고 분납시스템을 운영",
    },
    {
      src: "/c-1.jpg",
      title: "서류발급 및 정리대행",
      desc: "복잡한 서류발급부터 정리까지 모든 과정을 대행",
    },
    {
      src: "/c-2.jpg",
      title: "빠른 접수",
      desc: "살려줘닷컴의 자동화 기술로 빠른접수 가능(1일~3일이내)",
    },
    {
      src: "/b-1.jpg",
      title: "신속한 결정",
      desc: "효율적인 프로세스를 통해 빠른 법원결정을 이끌어냅니다.",
    },
    {
      src: "/b-2.jpg",
      title: "채권추심 관리",
      desc: "담당자를 배정하여 추심대응방법 지원",
    },
    {
      src: "/dumy1.png",
      title: "추심대리인 선임",
      desc: "채권추심 대응을 위한 전문 추심대리인 선임 서비스 제공",
    },
    {
      src: "/dumy2.png",
      title: "사건관리 전담팀 배정",
      desc: "전담매니저가 모든 절차를 지원",
    },
    {
      src: "/dumy3.png",
      title: "실시간 알림",
      desc: "알림을 통해 실시간 사건 진행 현황 확인 가능",
    },
    {
      src: "/dumy4.png",
      title: "비대면 진행",
      desc: "전국 어디에서도 비대면 상담 및 진행 가능",
    },
    {
      src: "/dumy5.png",
      title: "채무조회 서비스",
      desc: "정확한 채무조회를 통해 모든 채무를 찾아 드립니다.",
    },
    {
      src: "/dumy6.png",
      title: "인가결정 이후 관리",
      desc: "인가결정 이후 ~ 면책결정까지 지속적인 관리와 지원 제공",
    },
    {
      src: "/dumy7.png",
      title: "신용회복 지원",
      desc: "면책결정 이후 신용회복을 위한 체계적인 지원 프로그램 제공",
    },
  ];

  return (
    <div
      id={"services"}
      className="flex w-full flex-col items-center justify-center gap-16 bg-gradient-to-b from-gray-100 to-white px-4 py-24"
    >
      <div className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            <span className="bg-gray-300">살려줘닷컴</span>의 법률서비스
          </h2>

          <span className="text-lg leading-relaxed text-gray-600 sm:text-xl">
            개인회생과 파산 전 과정에서 필요한 모든 서비스를 전문적으로
            제공합니다.
          </span>
        </div>

        <div className="grid grid-cols-2 gap-8 overflow-hidden max-md:gap-4">
          {items.map((i, index) => {
            return (
              <div
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                key={index}
                className={`${index % 2 === 0 ? "mt-0" : "mt-12"}`}
              >
                <ServiceMainItem
                  title={i.title}
                  description={i.desc}
                  image={i.src}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative flex w-full max-w-[1000px] flex-col items-center gap-10">
        <span className="text-3xl font-bold text-gray-800">법원결정 사례</span>
        <RenderJudgments />

        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
      </div>
    </div>
  );
};
