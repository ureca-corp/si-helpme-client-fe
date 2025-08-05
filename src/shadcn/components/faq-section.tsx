"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/shadcn/components/ui/card"

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "개인회생과 파산의 차이점은 무엇인가요?",
      answer:
        "개인회생은 일정한 소득이 있는 채무자가 채무를 일부 감면받고 3-5년간 분할 상환하는 제도입니다. 파산은 채무자가 모든 재산을 처분하여 채권자에게 배당하고 남은 채무를 면책받는 제도입니다. 개인회생은 재산을 유지하면서 채무를 줄일 수 있고, 파산은 재산을 잃지만 채무를 완전히 면책받을 수 있습니다.",
    },
    {
      question: "개인회생 신청 자격 조건은 어떻게 되나요?",
      answer:
        "개인회생 신청을 위해서는 다음 조건을 만족해야 합니다: 1) 채무총액이 무담보채무 10억원, 담보채무 15억원 이하 2) 계속적이고 반복적인 수입이 있을 것 3) 개인회생절차 개시신청 전 5년 이내에 면책을 받은 사실이 없을 것 4) 급여소득자의 경우 정기적인 수입이 있고 수입의 변동폭이 작을 것",
    },
    {
      question: "수임료는 얼마나 되나요?",
      answer:
        "수임료는 사건의 복잡성과 채무 규모에 따라 달라집니다. 개인회생의 경우 일반적으로 300-500만원, 파산의 경우 200-400만원 선에서 책정됩니다. 경제적 어려움을 고려하여 분납 시스템을 운영하고 있으며, 상담 시 정확한 견적을 제공해드립니다.",
    },
    {
      question: "절차 진행 기간은 얼마나 걸리나요?",
      answer:
        "개인회생의 경우 신청부터 인가결정까지 약 6-8개월, 파산의 경우 신청부터 면책결정까지 약 4-6개월이 소요됩니다. 다만 사건의 복잡성, 법원의 업무량, 채권자의 이의제기 여부 등에 따라 기간이 달라질 수 있습니다.",
    },
    {
      question: "신용등급에 미치는 영향은 어떤가요?",
      answer:
        "개인회생이나 파산 신청 시 신용등급이 하락하게 됩니다. 하지만 절차 완료 후에는 점진적으로 신용회복이 가능합니다. 개인회생의 경우 변제계획 이행 중에도 일정 조건 하에 신용회복이 가능하며, 파산의 경우 면책결정 후 신용회복 프로그램을 통해 신용등급을 개선할 수 있습니다.",
    },
    {
      question: "가족에게 미치는 영향은 있나요?",
      answer:
        "개인회생이나 파산은 신청자 본인에게만 적용되며, 가족의 신용이나 재산에는 직접적인 영향을 주지 않습니다. 다만 배우자나 가족이 연대보증인인 경우에는 별도의 대응이 필요할 수 있습니다. 가족 명의의 재산이나 소득은 원칙적으로 절차에 포함되지 않습니다.",
    },
    {
      question: "직장에 알려지게 되나요?",
      answer:
        "개인회생이나 파산 신청 사실이 직장에 자동으로 통보되지는 않습니다. 다만 급여압류가 있었던 경우나 퇴직금을 재산으로 신고해야 하는 경우에는 직장의 협조가 필요할 수 있습니다. 대부분의 경우 비밀리에 진행이 가능하며, 직장 생활에 큰 지장을 주지 않습니다.",
    },
    {
      question: "상담비용은 얼마인가요?",
      answer:
        "초기 상담은 무료로 진행됩니다. 전화상담, 온라인 상담, 방문상담 모두 무료이며, 상담 후 사건 수임을 결정하시면 수임료에 대해 안내해드립니다. 부담 없이 언제든지 상담받으실 수 있습니다.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">자주 묻는 질문</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">개인회생과 파산에 대해 궁금한 점들을 정리했습니다</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </div>
                </button>

                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">더 궁금한 점이 있으시다면 언제든지 문의해주세요</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open("tel:02-1234-5678")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              전화 상담하기
            </button>
            <button
              onClick={() => window.open("https://pf.kakao.com/_example")}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              카카오톡 상담
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
