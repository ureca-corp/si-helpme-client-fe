import {
  Clock,
  CreditCard,
  FileCheck,
  FileSliders,
  Gavel,
  Headset,
  Landmark,
  ListCheck,
  Sprout,
  UserStar,
} from "lucide-react";

import {
  ServiceMain_Item,
} from "@/apps/ui/domain-components/landing/ServiceMain_Item";
import {
  ServiceSub_Item,
} from "@/apps/ui/domain-components/landing/ServiceSub_Item";

import { Facility_Desktop } from "./components/Facility_Desktop";
import { Facility_Mobile } from "./components/Facility_Mobile";

export default function ServicesSection() {
  const subItems = [
    {
      icon: <FileCheck />,
      title: "서류발급 대행",
    },
    {
      icon: <FileSliders />,
      title: "전문변호사 사건관리",
    },
    {
      icon: <FileSliders />,
      title: "인가 결정 이후 관리",
    },
    {
      icon: <Sprout />,
      title: "신용 회복 지원",
    },
    {
      icon: <Clock />,
      title: "빠른 접수",
    },
    {
      icon: <Gavel />,
      title: "신속한 결정",
    },
    {
      icon: <CreditCard />,
      title: "수임료 분납",
    },
    {
      icon: <Headset />,
      title: "비대면 온라인 진행",
    },
  ];

  return (
    <section
      id="services"
      className="flex flex-col items-center overflow-hidden bg-neutral-100 py-24"
    >
      <div className="flex w-full flex-col items-center">
        <div className="flex w-full flex-col items-center px-6">
          <div className="mb-16 max-w-[1200px] text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              전문 서비스
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              개인회생과 파산 전 과정에서 필요한 모든 서비스를 전문적으로
              제공합니다.
            </p>
          </div>

          <div className="flex max-w-[1200px] flex-col gap-6">
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="flex-1" data-aos="fade-up">
                <ServiceMain_Item
                  icon={<ListCheck />}
                  title="채무조회 서비스"
                  description={
                    <>
                      <span className="font-['Pretendard'] text-base leading-normal font-light text-neutral-600">
                        내가 현재 어떤 채무(빚)가 있는지, 혹은 상대방이 어떤
                        채무를 지고 있는지 정확히 파악하는 것이 중요합니다.
                        <br />
                        <br />
                        채무조회 서비스는{" "}
                      </span>
                      <span className="font-['Pretendard'] text-base leading-normal font-normal text-black">
                        신용정보, 금융기관 자료
                      </span>
                      <span className="font-['Pretendard'] text-base leading-normal font-light text-neutral-600">
                        {" "}
                        등을 바탕으로{" "}
                      </span>
                      <span className="font-['Pretendard'] text-base leading-normal font-normal text-black">
                        전체 채무 현황을 한눈에 정리
                      </span>
                      <span className="font-['Pretendard'] text-base leading-normal font-light text-neutral-600">
                        해 드립니다.
                        <br />
                        이를 통해 상환 계획을 세우거나, 채권추심 전략을 수립할
                        때 꼭 필요한 정보를 제공합니다.
                        <br />
                        <br />
                        복잡한 금융 상황도 쉽게 이해할 수 있도록 도와드립니다.
                      </span>
                    </>
                  }
                />
              </div>

              <div className="flex-1" data-aos="fade-up" data-aos-delay={100}>
                <ServiceMain_Item
                  icon={<UserStar />}
                  title="추심대리인 선임 서비스"
                  description={
                    <>
                      <span className="font-['Pretendard'] text-base leading-normal font-light text-neutral-600">
                        채권추심이 복잡하거나, 여러 건을 동시에 진행해야 할 때,
                        또는 해외에 있는 채무자에게 추심을 해야 할 때는 전문
                        추심대리인의 도움이 필요할 수 있습니다.
                        <br />
                        <br />
                        추심대리인 선임 서비스는 검증된 전문가를 연결해
                        드려,{" "}
                      </span>
                      <span className="font-['Pretendard'] text-base leading-normal font-normal text-black">
                        변호사와 협력하여 신속하고 효율적으로 채권을 회수
                      </span>
                      <span className="font-['Pretendard'] text-base leading-normal font-light text-neutral-600">
                        할 수 있도록 지원합니다.
                        <br />
                        <br />
                        의뢰인은 복잡한 절차에 직접 관여하지 않아도 되고,
                        전문가가 대신 진행해주니 안심할 수 있습니다.
                      </span>
                    </>
                  }
                />
              </div>

              <div className="flex-1" data-aos="fade-up" data-aos-delay={100}>
                <ServiceMain_Item
                  icon={<Landmark />}
                  title="채권추심 관리"
                  description={
                    <>
                      <span className="font-['Pretendard'] text-base leading-normal font-light text-neutral-600">
                        소송에서 이기거나 합의가 되었더라도, 실제로 돈을
                        받아내는 과정이 남아 있습니다.
                        <br />
                        <br />
                        채권추심 관리는 판결 이후 상대방에게서{" "}
                      </span>
                      <span className="font-['Pretendard'] text-base leading-normal font-normal text-black">
                        금전이나 재산을 실제로 회수
                      </span>
                      <span className="font-['Pretendard'] text-base leading-normal font-light text-neutral-600">
                        할 수 있도록 도와주는 서비스입니다. <br />
                        <br />
                        변호사가 직접{" "}
                      </span>
                      <span className="font-['Pretendard'] text-base leading-normal font-normal text-black">
                        압류, 강제집행, 협상 등 다양한 방법
                      </span>
                      <span className="font-['Pretendard'] text-base leading-normal font-light text-neutral-600">
                        을 통해 의뢰인의 권리를 끝까지 지켜드립니다.
                        <br />
                        단순히 소송만이 아니라, 실질적인 결과까지 책임지는 것이
                        핵심입니다.
                      </span>
                    </>
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 gap-x-8 gap-y-6 lg:grid-cols-4">
              {subItems.map((it, index) => {
                return <ServiceSub_Item key={index} {...it} />;
              })}
            </div>
          </div>
        </div>

        <div className="mt-15 hidden w-full lg:flex">
          <Facility_Desktop />
        </div>
        <div className="mt-15 flex w-full lg:hidden">
          <Facility_Mobile />
        </div>
      </div>
    </section>
  );
}
