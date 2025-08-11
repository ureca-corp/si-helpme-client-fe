import { useRef, useState } from "react";

import { Checkbox } from "@/shadcn/components/ui/checkbox";
import { Input } from "@/shadcn/components/ui/input";
import { Textarea } from "@/shadcn/components/ui/textarea";

import { ConsultationButton } from "../ConsultationButton";

interface ContactFormsProps {
  onClick: () => void;
}

/**
 * 랜딩 페이지 상담 신청 폼
 */
export const ContactForms = ({ onClick }: ContactFormsProps) => {
  const [name, setName] = useState("");
  const [phone1, setPhone1] = useState("010");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");

  // 전화번호 입력 필드 refs
  const phone1Ref = useRef<HTMLInputElement>(null);
  const phone2Ref = useRef<HTMLInputElement>(null);
  const phone3Ref = useRef<HTMLInputElement>(null);

  // 전화번호 입력 처리 함수
  const handlePhoneChange = (
    value: string,
    setter: (value: string) => void,
    prevRef?: React.RefObject<HTMLInputElement | null>,
    nextRef?: React.RefObject<HTMLInputElement | null>,
    maxLength: number = 4,
  ) => {
    // 숫자만 허용
    const numericValue = value.replace(/[^0-9]/g, "");

    // 최대 길이 제한
    if (numericValue.length <= maxLength) {
      setter(numericValue);

      // 다음 필드로 자동 이동
      if (numericValue.length === maxLength && nextRef?.current) {
        nextRef.current.focus();
      }

      if (!value) {
        prevRef?.current?.focus();
      }
    }
  };

  const handleTimeChange = (timeId: string) => {
    if (time === timeId) {
      setTime("");
    } else {
      setTime(timeId);
    }
  };

  return (
    <div className="inline-flex w-full max-w-[1200px] flex-col items-start justify-start gap-8 overflow-hidden rounded-2xl bg-white p-6 outline-1 outline-offset-[-1px] outline-neutral-200">
      <div className="flex flex-col items-start justify-start gap-3 self-stretch">
        <div className="justify-center self-stretch font-['Pretendard'] text-sm leading-tight font-normal text-neutral-950">
          성함
        </div>

        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="성함을 입력해주세요."
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-3 self-stretch">
        <div className="justify-center self-stretch font-['Pretendard'] text-sm leading-tight font-normal text-neutral-950">
          전화번호
        </div>
        <div className="inline-flex items-center justify-center gap-2 self-stretch">
          <div className="flex w-full items-center justify-center gap-2">
            <Input
              ref={phone1Ref}
              value={phone1}
              onChange={(e) =>
                handlePhoneChange(
                  e.target.value,
                  setPhone1,
                  undefined,
                  phone2Ref,
                  3,
                )
              }
              maxLength={3}
              className="text-center"
            />
            <div className="flex items-center justify-center font-['Pretendard'] text-sm leading-tight font-normal text-neutral-950">
              -
            </div>
            <Input
              ref={phone2Ref}
              value={phone2}
              onChange={(e) =>
                handlePhoneChange(
                  e.target.value,
                  setPhone2,
                  phone1Ref,
                  phone3Ref,
                  4,
                )
              }
              maxLength={4}
              className="text-center"
            />
            <div className="flex items-center justify-center font-['Pretendard'] text-sm leading-tight font-normal text-neutral-950">
              -
            </div>
            <Input
              ref={phone3Ref}
              value={phone3}
              onChange={(e) =>
                handlePhoneChange(e.target.value, setPhone3, phone2Ref)
              }
              placeholder=""
              maxLength={4}
              className="text-center"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-3 self-stretch">
        <div className="h-3.5 justify-center self-stretch font-['Pretendard'] text-sm leading-tight font-normal text-neutral-950">
          문의사항
        </div>

        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-24"
          placeholder="궁금하신 내용을 자세히 입력해주시면 상담에 도움이 돼요."
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-3 self-stretch">
        <div className="justify-center self-stretch font-['Pretendard'] text-sm leading-tight font-normal text-neutral-950">
          통화 가능하신 시간대
        </div>
        <div className="flex flex-col items-start justify-start gap-3 self-stretch md:flex-row">
          <div
            className="flex flex-1 cursor-pointer items-center justify-start gap-3"
            onClick={() => handleTimeChange("오전 (9-12시)")}
          >
            <Checkbox checked={time === "오전 (9-12시)"} />
            <div className="flex-1 justify-center font-['Pretendard'] text-sm leading-tight font-normal text-neutral-950">
              오전 (9-12시)
            </div>
          </div>
          <div
            className="flex flex-1 cursor-pointer items-center justify-start gap-3"
            onClick={() => handleTimeChange("오후 (12-18시)")}
          >
            <Checkbox checked={time === "오후 (12-18시)"} />
            <div className="flex-1 justify-center font-['Pretendard'] text-sm leading-tight font-normal text-neutral-950">
              오후 (12-18시)
            </div>
          </div>
          <div
            className="flex flex-1 cursor-pointer items-center justify-start gap-3"
            onClick={() => handleTimeChange("저녁 (18-21시)")}
          >
            <Checkbox checked={time === "저녁 (18-21시)"} />
            <div className="flex-1 justify-center font-['Pretendard'] text-sm leading-tight font-normal text-neutral-950">
              저녁 (18-21시)
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-4 self-stretch">
        <ConsultationButton onClick={onClick} fullWidth />
        <div className="flex flex-col items-center justify-start self-stretch">
          <div className="justify-center self-stretch text-center font-['Apple_SD_Gothic_Neo'] text-xs font-normal text-gray-500">
            개인정보는 상담 목적으로만 사용되며, 상담 완료 후 안전하게
            폐기됩니다.
          </div>
        </div>
      </div>
    </div>
  );
};
