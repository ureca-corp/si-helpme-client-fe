import {
  ServiceMainItem,
} from "@/apps/ui/domain-components/landing/Service_Main_Item";

export const Services2Section = () => {
  const items = [
    {
      src: "https://images.unsplash.com/photo-1750263160585-241fa75dca79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "전문변호사 사건관리",
      desc: "회생 파산 전문변호사가 직접사건을 관리하여 최적의 결과 도출",
    },
    {
      src: "https://images.unsplash.com/photo-1750263160585-241fa75dca79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "수임료 개혁",
      desc: "업계의 고비용 수임료를 낮추고 분납시스템을 운영",
    },
    {
      src: "https://images.unsplash.com/photo-1750263160585-241fa75dca79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "서류발급 및 정리대행",
      desc: "복잡한 서류발급부터 정리까지 모든 과정을 대행",
    },
    {
      src: "https://images.unsplash.com/photo-1750263160585-241fa75dca79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "빠른 접수",
      desc: "살려줘닷컴의 자동화 기술로 빠른접수 가능(1일~3일이내)",
    },
    {
      src: "https://images.unsplash.com/photo-1750263160585-241fa75dca79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "신속한 결정",
      desc: "효율적인 프로세스를 통해 빠른 법원결정을 이끌어냅니다.",
    },
    {
      src: "https://images.unsplash.com/photo-1750263160585-241fa75dca79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "채권추심 관리",
      desc: "담당자를 배정하여 추심대응방법 지원",
    },
    {
      src: "https://images.unsplash.com/photo-1750263160585-241fa75dca79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "추심대리인 선임",
      desc: "채권추심 대응을 위한 전문 추심대리인 선임 서비스 제공",
    },
    {
      src: "https://images.unsplash.com/photo-1750263160585-241fa75dca79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "사건관리 전담팀 배정",
      desc: "전담매니저가 모든 절차를 지원",
    },
    {
      src: "https://images.unsplash.com/photo-1750263160585-241fa75dca79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "실시간 알림",
      desc: "알림을 통해 실시간 사건 진행 현황 확인 가능",
    },
    {
      src: "https://images.unsplash.com/photo-1750263160585-241fa75dca79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "비대면 진행",
      desc: "전국 어디에서도 비대면 상담 및 진행 가능",
    },
    {
      src: "https://images.unsplash.com/photo-1750263160585-241fa75dca79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "채무조회 서비스",
      desc: "정확한 채무조회를 통해 모든 채무를 찾아 드립니다.",
    },
    {
      src: "https://images.unsplash.com/photo-1750263160585-241fa75dca79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "인가결정 이후 관리",
      desc: "인가결정 이후 ~ 면책결정까지 지속적인 관리와 지원 제공",
    },
    {
      src: "https://images.unsplash.com/photo-1750263160585-241fa75dca79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "신용회복 지원",
      desc: "면책결정 이후 신용회복을 위한 체계적인 지원 프로그램 제공",
    },
  ];

  return (
    <div className="flex w-full justify-center px-4">
      <div className="grid max-w-[1200px] grid-cols-4 gap-4 max-lg:grid-cols-2">
        {items.map((i, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className={`${index % 2 === 0 ? "mt-0" : "mt-12"}`}
          >
            <ServiceMainItem
              title={i.title}
              description={i.desc}
              image={i.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
