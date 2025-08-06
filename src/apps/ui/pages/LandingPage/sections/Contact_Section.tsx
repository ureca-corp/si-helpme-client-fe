import {
  Clock,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

import { Button } from "@/shadcn/components/ui/button";
import { Checkbox } from "@/shadcn/components/ui/checkbox";
import { Input } from "@/shadcn/components/ui/input";
import { Label } from "@/shadcn/components/ui/label";
import { Textarea } from "@/shadcn/components/ui/textarea";

export const ContactSection = () => {
  const titleText = "무료 상담신청";
  const descriptionText =
    "전문변호사가 직접 상담해드립니다. 부담 없이 문의해주세요.";

  // Contact information
  const phoneNumber = "02-1234-5678";
  const kakaoLink = "#";
  const email = "info@salryeojwo.com";

  return (
    <section className="bg-background py-32">
      <div className="container">
        <div className="mb-14 text-center">
          <h1 className="mt-2 mb-3 text-3xl font-semibold text-balance md:text-4xl">
            {titleText}
          </h1>
          <p className="text-muted-foreground mx-auto max-w-xl text-lg">
            {descriptionText}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Column - Contact Methods */}
          <div className="space-y-6">
            {/* Phone Consultation */}
            <div className="bg-muted rounded-lg p-6">
              <h3 className="mb-2 text-lg font-semibold">전화 상담</h3>
              <p className="text-muted-foreground mb-3">
                지금 바로 전문가와 상담하세요
              </p>
              <div className="mb-3 text-2xl font-bold text-blue-600">
                {phoneNumber}
              </div>
              <div className="text-muted-foreground mb-4 space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>평일 09:00 - 21:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>토요일 09:00 - 18:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>일요일 및 공휴일 휴무</span>
                </div>
              </div>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                <Phone className="mr-2 h-4 w-4" />
                지금 바로 전화하기
              </Button>
            </div>

            {/* KakaoTalk Consultation */}
            <div className="bg-muted rounded-lg p-6">
              <h3 className="mb-2 text-lg font-semibold">카카오톡 상담</h3>
              <p className="text-muted-foreground mb-3">
                편리한 카카오톡으로 상담받으세요
              </p>
              <p className="text-muted-foreground mb-4 text-sm">
                24시간 언제든지 메시지를 남겨주시면 빠른 시간 내에 답변드립니다.
              </p>
              <Button
                className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
                size="lg"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                카카오톡 상담하기
              </Button>
            </div>

            {/* Email Inquiry */}
            <div className="bg-muted rounded-lg p-6">
              <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold">
                <Mail className="h-5 w-5" />
                이메일 문의
              </h3>
              <a
                href={`mailto:${email}`}
                className="text-lg font-semibold text-blue-600 hover:underline"
              >
                {email}
              </a>
            </div>
          </div>

          {/* Right Column - Online Consultation Form */}
          <div className="bg-muted rounded-lg p-6">
            <h3 className="mb-2 text-lg font-semibold">온라인 상담신청</h3>
            <p className="text-muted-foreground mb-6">
              정보를 입력해주시면 전문 상담사가 연락드립니다
            </p>

            <form className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium">
                  이름 *
                </Label>
                <Input
                  id="name"
                  placeholder="성함을 입력해주세요"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium">
                  전화번호 *
                </Label>
                <Input
                  id="phone"
                  placeholder="010-0000-0000"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="inquiry" className="text-sm font-medium">
                  문의사항
                </Label>
                <Textarea
                  id="inquiry"
                  placeholder="궁금한 점이나 상황을 자세히 적어주시면 더 정확한 상담을 받으실 수 있습니다."
                  className="mt-1 min-h-[100px]"
                />
              </div>

              <div>
                <Label className="mb-3 block text-sm font-medium">
                  통화 가능한 시간대 (복수선택 가능)
                </Label>
                <div className="space-y-2">
                  {[
                    "오전 (9-12시)",
                    "오후 (12-18시)",
                    "저녁 (18-21시)",
                    "언제나 가능",
                  ].map((time, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox id={`time-${index}`} />
                      <Label htmlFor={`time-${index}`} className="text-sm">
                        {time}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700"
                size="lg"
              >
                무료 상담신청
              </Button>

              <p className="text-muted-foreground text-center text-xs">
                개인정보는 상담 목적으로만 사용되며, 상담 완료 후 안전하게
                폐기됩니다.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
