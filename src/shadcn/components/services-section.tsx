import {
  CheckCircle,
  Clock,
  CreditCard,
  FileText,
  Phone,
  Scale,
  Shield,
  Users,
  Video,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      icon: Scale,
      title: "전문변호사 사건관리",
      description:
        "경험 풍부한 전문변호사가 직접 사건을 관리하여 최적의 결과를 보장합니다.",
      color: "text-blue-600 bg-blue-100",
    },
    {
      icon: CreditCard,
      title: "수임료 분납",
      description:
        "경제적 부담을 덜어드리기 위해 수임료 분납 시스템을 운영합니다.",
      color: "text-green-600 bg-green-100",
    },
    {
      icon: FileText,
      title: "서류발급 대행",
      description: "복잡한 서류 준비부터 발급까지 모든 과정을 대행해드립니다.",
      color: "text-purple-600 bg-purple-100",
    },
    {
      icon: Clock,
      title: "빠른 접수",
      description:
        "24시간 온라인 접수 시스템으로 언제든지 상담 신청이 가능합니다.",
      color: "text-orange-600 bg-orange-100",
    },
    {
      icon: CheckCircle,
      title: "신속한 결정",
      description: "효율적인 프로세스를 통해 빠른 법원 결정을 이끌어냅니다.",
      color: "text-red-600 bg-red-100",
    },
    {
      icon: Video,
      title: "비대면 진행",
      description:
        "코로나19 시대에 맞춘 안전한 비대면 상담 및 진행이 가능합니다.",
      color: "text-indigo-600 bg-indigo-100",
    },
    {
      icon: Shield,
      title: "인가결정 이후 관리",
      description:
        "개인회생 인가결정 후에도 지속적인 관리와 지원을 제공합니다.",
      color: "text-teal-600 bg-teal-100",
    },
    {
      icon: Users,
      title: "신용회복 지원",
      description:
        "면책결정 이후 신용회복을 위한 체계적인 지원 프로그램을 운영합니다.",
      color: "text-pink-600 bg-pink-100",
    },
    {
      icon: Phone,
      title: "채권추심 관리",
      description:
        "채권추심 대응부터 추심대리인 선임까지 전문적으로 관리합니다.",
      color: "text-cyan-600 bg-cyan-100",
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            전문 서비스
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            개인회생과 파산 전 과정에서 필요한 모든 서비스를 원스톱으로
            제공합니다
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="transform border-0 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardHeader className="pb-4 text-center">
                  <div
                    className={`h-16 w-16 rounded-full ${service.color} mx-auto mb-4 flex items-center justify-center`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* 추가 서비스 섹션 */}
        <div className="mt-16 rounded-2xl bg-white p-8 shadow-lg">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">
            애프터 서비스
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="mb-2 text-lg font-semibold text-gray-800">
                채무조회 서비스
              </h4>
              <p className="text-gray-600">
                정확한 채무 현황 파악을 통해 최적의 해결방안을 제시합니다
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="mb-2 text-lg font-semibold text-gray-800">
                추심대리인 선임
              </h4>
              <p className="text-gray-600">
                채권추심 대응을 위한 전문 추심대리인 선임 서비스를 제공합니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
