import type React from "react"

import { useState } from "react"
import { Button } from "@/shadcn/components/ui/button"
import { Input } from "@/shadcn/components/ui/input"
import { Label } from "@/shadcn/components/ui/label"
import { Textarea } from "@/shadcn/components/ui/textarea"
import { Checkbox } from "@/shadcn/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shadcn/components/ui/card"
import { Phone, MessageCircle, Mail, Clock } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    availableTimes: [] as string[],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const timeOptions = [
    { id: "morning", label: "오전 (9-12시)" },
    { id: "afternoon", label: "오후 (12-18시)" },
    { id: "evening", label: "저녁 (18-21시)" },
    { id: "anytime", label: "언제나 가능" },
  ]

  const handleTimeChange = (timeId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      availableTimes: checked ? [...prev.availableTimes, timeId] : prev.availableTimes.filter((t) => t !== timeId),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 실제 구현에서는 여기에 폼 제출 로직을 추가
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">상담신청이 완료되었습니다</h3>
                <p className="text-gray-600 mb-8">
                  빠른 시일 내에 전문 상담사가 연락드리겠습니다.
                  <br />
                  급하신 경우 아래 번호로 직접 연락주세요.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => window.open("tel:02-1234-5678")} className="bg-blue-600 hover:bg-blue-700">
                    <Phone className="w-4 h-4 mr-2" />
                    02-1234-5678
                  </Button>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    다시 신청하기
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">무료 상담신청</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            전문변호사가 직접 상담해드립니다. 부담 없이 문의해주세요.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* 연락처 정보 */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Phone className="w-5 h-5 mr-2 text-blue-600" />
                  전화 상담
                </CardTitle>
                <CardDescription>지금 바로 전문가와 상담하세요</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 mb-2">02-1234-5678</div>
                <p className="text-gray-600 mb-4">
                  평일 09:00 - 21:00
                  <br />
                  토요일 09:00 - 18:00
                  <br />
                  일요일 및 공휴일 휴무
                </p>
                <Button
                  onClick={() => window.open("tel:02-1234-5678")}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  지금 바로 전화하기
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
                  카카오톡 상담
                </CardTitle>
                <CardDescription>편리한 카카오톡으로 상담받으세요</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  24시간 언제든지 메시지를 남겨주시면
                  <br />
                  빠른 시간 내에 답변드립니다.
                </p>
                <Button
                  onClick={() => window.open("https://pf.kakao.com/_example")}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  카카오톡 상담하기
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Mail className="w-5 h-5 mr-2 text-purple-600" />
                  이메일 문의
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  <strong>info@salryeojwo.com</strong>
                  <br />
                  자세한 문의사항은 이메일로 보내주세요.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 상담신청 폼 */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">온라인 상담신청</CardTitle>
              <CardDescription>정보를 입력해주시면 전문 상담사가 연락드립니다</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">이름 *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="성함을 입력해주세요"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">전화번호 *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="010-0000-0000"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">문의사항</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    placeholder="궁금한 점이나 상황을 자세히 적어주시면 더 정확한 상담을 받으실 수 있습니다."
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    통화 가능한 시간대 (복수선택 가능)
                  </Label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={option.id}
                          checked={formData.availableTimes.includes(option.id)}
                          onCheckedChange={(checked) => handleTimeChange(option.id, checked as boolean)}
                        />
                        <Label htmlFor={option.id} className="text-sm font-normal cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.phone}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg font-semibold"
                >
                  {isSubmitting ? "전송 중..." : "무료 상담신청"}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  개인정보는 상담 목적으로만 사용되며, 상담 완료 후 안전하게 폐기됩니다.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
