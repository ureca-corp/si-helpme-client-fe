import { useState } from "react";

import { Input } from "@/shadcn/components/ui/input";

import { ConsultationButton } from "../ConsultationButton";

interface ContactFormsProps {
  onClick: () => void;
}

/**
 * 랜딩 페이지 상담 신청 폼
 */
export const ContactForms = ({ onClick }: ContactFormsProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="inline-flex w-full max-w-[1200px] flex-col items-start justify-start gap-8 overflow-hidden rounded-2xl bg-white p-6 outline outline-1 outline-offset-[-1px] outline-neutral-200">
      <div className="flex flex-col items-start justify-start gap-3 self-stretch">
        <div className="justify-center self-stretch font-['Pretendard'] text-sm leading-tight font-normal text-neutral-950">
          성함
        </div>
        {/* <div className="flex-1 justify-center font-['Pretendard'] text-sm leading-tight font-normal text-neutral-500">
            성함을 입력해주세요.
          </div> */}
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
          <Input value={"010"} disabled />
          <div className="justify-center font-['Pretendard'] text-sm leading-tight font-normal text-neutral-950">
            -
          </div>
          <Input value={"1234"} disabled />
          <div className="justify-center font-['Pretendard'] text-sm leading-tight font-normal text-neutral-950">
            -
          </div>
          <div className="h-9 flex-1 rounded-lg border border-neutral-200 bg-white/0 px-3 py-1 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-3 self-stretch">
        <div className="h-3.5 justify-center self-stretch font-['Pretendard'] text-sm leading-tight font-normal text-neutral-950">
          문의사항
        </div>
        <div className="flex h-24 flex-col items-start justify-start gap-2.5 self-stretch overflow-hidden rounded-lg bg-white/0 px-3.5 py-3 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-200">
          <div className="justify-center self-stretch font-['Pretendard'] text-sm leading-tight font-normal text-neutral-500">
            궁금하신 내용을 자세히 입력해주시면 상담에 도움이 돼요.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-3 self-stretch">
        <div className="justify-center self-stretch font-['Pretendard'] text-sm leading-tight font-normal text-neutral-950">
          통화 가능하신 시간대
        </div>
        <div className="inline-flex items-start justify-start gap-3 self-stretch">
          <div className="flex flex-1 items-center justify-start gap-3">
            <div className="h-4 w-4 rounded border border-neutral-200 bg-white/0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
            <div className="flex-1 justify-center font-['Pretendard'] text-sm leading-tight font-normal text-neutral-950">
              오전 (9-12시)
            </div>
          </div>
          <div className="flex flex-1 items-center justify-start gap-3">
            <div className="h-4 w-4 rounded border border-neutral-200 bg-white/0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
            <div className="flex-1 justify-center font-['Pretendard'] text-sm leading-tight font-normal text-neutral-950">
              오후 (12-18시)
            </div>
          </div>
          <div className="flex flex-1 items-center justify-start gap-3">
            <div className="h-4 w-4 rounded border border-neutral-200 bg-white/0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
            <div className="flex-1 justify-center font-['Pretendard'] text-sm leading-tight font-normal text-neutral-950">
              저녁 (18-21시)
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-4 self-stretch">
        <ConsultationButton onClick={onClick} fullWidth />
        <div className="flex flex-col items-center justify-start self-stretch">
          <div className="justify-center self-stretch text-center font-['Apple_SD_Gothic_Neo'] text-xs leading-none font-normal text-gray-500">
            개인정보는 상담 목적으로만 사용되며, 상담 완료 후 안전하게
            폐기됩니다.
          </div>
        </div>
      </div>
    </div>
  );
};
