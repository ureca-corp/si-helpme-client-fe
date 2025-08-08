import type React from "react";

import {
  ContactFinishDialog,
} from "@/apps/ui/domain-components/landing/Contact_Finish_Dialog";
import {
  ContactForms,
} from "@/apps/ui/domain-components/landing/Contact_Forms";
import { useOverlay } from "@toss/use-overlay";

export default function ContactForm() {
  const overlay = useOverlay();

  const handleSubmit = async () => {
    // 실제 구현에서는 여기에 폼 제출 로직을 추가
    await new Promise((resolve) => setTimeout(resolve, 100));

    handleOpenDialog();
  };

  const handleOpenDialog = () => {
    overlay.open(({ isOpen, close }) => (
      <ContactFinishDialog open={isOpen} onClose={close} />
    ));
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center bg-neutral-50 px-6 py-20"
    >
      <div className="flex w-full max-w-[800px] flex-col items-center justify-center gap-8">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            상담 신청하기
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            전문 변호사에게 맞춤 상담을 받아보세요.
          </p>
        </div>

        <ContactForms onClick={handleSubmit} />
      </div>
    </section>
  );
}

// if (isSubmitted) {
//   return (
//     <section
//       id="contact"
//       className="bg-gradient-to-br from-blue-50 to-green-50 py-20"
//     >
//       <div className="container mx-auto px-4">
//         <div className="mx-auto max-w-2xl text-center">
//           <Card className="border-0 shadow-lg">
//             <CardContent className="p-12">
//               <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
//                 <svg
//                   className="h-8 w-8 text-green-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               </div>
//               <h3 className="mb-4 text-2xl font-bold text-gray-800">
//                 상담신청이 완료되었습니다
//               </h3>
//               <p className="mb-8 text-gray-600">
//                 빠른 시일 내에 전문 상담사가 연락드리겠습니다.
//                 <br />
//                 급하신 경우 아래 번호로 직접 연락주세요.
//               </p>
//               <div className="flex flex-col justify-center gap-4 sm:flex-row">
//                 <Button
//                   onClick={() => window.open("tel:02-1234-5678")}
//                   className="bg-blue-600 hover:bg-blue-700"
//                 >
//                   <Phone className="mr-2 h-4 w-4" />
//                   02-1234-5678
//                 </Button>
//                 <Button
//                   variant="outline"
//                   onClick={() => setIsSubmitted(false)}
//                 >
//                   다시 신청하기
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }

{
  /* 연락처 정보 */
}
//   <div className="space-y-8">
//   <Card className="border-0 shadow-lg">
//     <CardHeader>
//       <CardTitle className="flex items-center text-xl">
//         <Phone className="mr-2 h-5 w-5 text-blue-600" />
//         전화 상담
//       </CardTitle>
//       <CardDescription>지금 바로 전문가와 상담하세요</CardDescription>
//     </CardHeader>
//     <CardContent>
//       <div className="mb-2 text-2xl font-bold text-blue-600">
//         02-1234-5678
//       </div>
//       <p className="mb-4 text-gray-600">
//         평일 09:00 - 21:00
//         <br />
//         토요일 09:00 - 18:00
//         <br />
//         일요일 및 공휴일 휴무
//       </p>
//       <Button
//         onClick={() => window.open("tel:02-1234-5678")}
//         className="w-full bg-blue-600 hover:bg-blue-700"
//       >
//         <Phone className="mr-2 h-4 w-4" />
//         지금 바로 전화하기
//       </Button>
//     </CardContent>
//   </Card>

//   <Card className="border-0 shadow-lg">
//     <CardHeader>
//       <CardTitle className="flex items-center text-xl">
//         <MessageCircle className="mr-2 h-5 w-5 text-green-600" />
//         카카오톡 상담
//       </CardTitle>
//       <CardDescription>
//         편리한 카카오톡으로 상담받으세요
//       </CardDescription>
//     </CardHeader>
//     <CardContent>
//       <p className="mb-4 text-gray-600">
//         24시간 언제든지 메시지를 남겨주시면
//         <br />
//         빠른 시간 내에 답변드립니다.
//       </p>
//       <Button
//         onClick={() => window.open("https://pf.kakao.com/_example")}
//         className="w-full bg-yellow-400 text-gray-800 hover:bg-yellow-500"
//       >
//         <MessageCircle className="mr-2 h-4 w-4" />
//         카카오톡 상담하기
//       </Button>
//     </CardContent>
//   </Card>

//   <Card className="border-0 shadow-lg">
//     <CardHeader>
//       <CardTitle className="flex items-center text-xl">
//         <Mail className="mr-2 h-5 w-5 text-purple-600" />
//         이메일 문의
//       </CardTitle>
//     </CardHeader>
//     <CardContent>
//       <p className="text-gray-600">
//         <strong>info@salryeojwo.com</strong>
//         <br />
//         자세한 문의사항은 이메일로 보내주세요.
//       </p>
//     </CardContent>
//   </Card>
// </div>

{
  /* 상담신청 폼 */
}
//    <Card className="border-0 shadow-lg">
//    <CardHeader>
//      <CardTitle className="text-xl">온라인 상담신청</CardTitle>
//      <CardDescription>
//        정보를 입력해주시면 전문 상담사가 연락드립니다
//      </CardDescription>
//    </CardHeader>
//    <CardContent>
//      <form onSubmit={handleSubmit} className="space-y-6">
//        <div className="space-y-2">
//          <Label htmlFor="name">이름 *</Label>
//          <Input
//            id="name"
//            type="text"
//            value={formData.name}
//            onChange={(e) =>
//              setFormData((prev) => ({ ...prev, name: e.target.value }))
//            }
//            placeholder="성함을 입력해주세요"
//            required
//            className="h-12"
//          />
//        </div>

//        <div className="space-y-2">
//          <Label htmlFor="phone">전화번호 *</Label>
//          <Input
//            id="phone"
//            type="tel"
//            value={formData.phone}
//            onChange={(e) =>
//              setFormData((prev) => ({
//                ...prev,
//                phone: e.target.value,
//              }))
//            }
//            placeholder="010-0000-0000"
//            required
//            className="h-12"
//          />
//        </div>

//        <div className="space-y-2">
//          <Label htmlFor="message">문의사항</Label>
//          <Textarea
//            id="message"
//            value={formData.message}
//            onChange={(e) =>
//              setFormData((prev) => ({
//                ...prev,
//                message: e.target.value,
//              }))
//            }
//            placeholder="궁금한 점이나 상황을 자세히 적어주시면 더 정확한 상담을 받으실 수 있습니다."
//            rows={4}
//            className="resize-none"
//          />
//        </div>

//        <div className="space-y-3">
//          <Label className="flex items-center">
//            <Clock className="mr-2 h-4 w-4" />
//            통화 가능한 시간대 (복수선택 가능)
//          </Label>
//          <div className="grid grid-cols-2 gap-3">
//            {timeOptions.map((option) => (
//              <div
//                key={option.id}
//                className="flex items-center space-x-2"
//              >
//                <Checkbox
//                  id={option.id}
//                  checked={formData.availableTimes.includes(option.id)}
//                  onCheckedChange={(checked) =>
//                    handleTimeChange(option.id, checked as boolean)
//                  }
//                />
//                <Label
//                  htmlFor={option.id}
//                  className="cursor-pointer text-sm font-normal"
//                >
//                  {option.label}
//                </Label>
//              </div>
//            ))}
//          </div>
//        </div>

//        <Button
//          type="submit"
//          disabled={isSubmitting || !formData.name || !formData.phone}
//          className="h-12 w-full bg-gradient-to-r from-blue-600 to-green-600 text-lg font-semibold hover:from-blue-700 hover:to-green-700"
//        >
//          {isSubmitting ? "전송 중..." : "무료 상담신청"}
//        </Button>

//        <p className="text-center text-xs text-gray-500">
//          개인정보는 상담 목적으로만 사용되며, 상담 완료 후 안전하게
//          폐기됩니다.
//        </p>
//      </form>
//    </CardContent>
//  </Card>
