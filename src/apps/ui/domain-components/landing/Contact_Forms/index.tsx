import {
  useRef,
  useState,
} from "react";
import { flushSync } from "react-dom";

import { overlay } from "overlay-kit";

import { KakaoIcon } from "@/apps/ui/common-components/KakaoIcon";
import { LoadingDialog } from "@/apps/ui/common-components/LoadingDialog";
import {
  MultipleSelector,
} from "@/apps/ui/domain-components/landing/Multiple_Selector";
import { Input } from "@/shadcn/components/ui/input";
import { Textarea } from "@/shadcn/components/ui/textarea";

import { CallButton } from "../CallButton";
import { ConsultationButton } from "../ConsultationButton";

export interface ContactFormModel {
  name: string;
  phone: string;
  message: string;
  times: string[];
}

interface ContactFormsProps {
  onClick: (form: ContactFormModel) => Promise<void>;
}

/**
 * 랜딩 페이지 상담 신청 폼
 */
export const ContactForms = ({ onClick }: ContactFormsProps) => {
  const [form, setForm] = useState<ContactFormModel>({
    name: "",
    phone: "",
    message: "",
    times: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const [phone1, setPhone1] = useState("010");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");
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

    setForm({ ...form, phone: value });
  };

  const handleSubmit = async () => {
    if (isLoading) {
      return;
    }
    flushSync(() => {
      setIsLoading(true);
    });

    onClick({
      name: form.name,
      phone: `${phone1}-${phone2}-${phone3}`,
      message: form.message,
      times: form.times,
    });

    overlay.open(({ isOpen, close }) => (
      <LoadingDialog open={isOpen} onClose={close} />
    ));

    try {
      await onClick({
        name: form.name,
        phone: `${phone1}-${phone2}-${phone3}`,
        message: form.message,
        times: form.times,
      });
    } catch (error) {
      throw error;
    } finally {
      overlay.closeAll();
      setIsLoading(false);
    }
  };

  const timeItems = Array.from({ length: 25 }, (_, i) => {
    const hour = 9 + Math.floor(i / 2);
    const minute = i % 2 === 0 ? "00" : "30";
    const timeLabel = minute === "00" ? `${hour}시` : `${hour}시 ${minute}분`;
    return timeLabel;
  });

  return (
    <div className="inline-flex w-full max-w-[1200px] flex-col items-start justify-start gap-8 overflow-hidden rounded-2xl bg-white p-6 outline-1 outline-offset-[-1px] outline-neutral-200">
      <div className="flex flex-col items-start justify-start gap-3 self-stretch">
        <div className="justify-center self-stretch font-['Pretendard'] text-sm leading-tight font-normal text-neutral-950">
          성함
        </div>

        <Input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
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
              type="tel"
              value={phone1}
              onChange={(e) =>
                handlePhoneChange(
                  e.target.value,
                  (value) => setPhone1(value),
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
              type="tel"
              value={phone2}
              onChange={(e) =>
                handlePhoneChange(
                  e.target.value,
                  (value) => setPhone2(value),
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
              type="tel"
              value={phone3}
              onChange={(e) =>
                handlePhoneChange(
                  e.target.value,
                  (value) => setPhone3(value),
                  phone2Ref,
                  undefined,
                  4,
                )
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
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="h-24"
          placeholder="궁금하신 내용을 자세히 입력해주시면 상담에 도움이 돼요."
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-3 self-stretch">
        <div className="justify-center self-stretch font-['Pretendard'] text-sm leading-tight font-normal text-neutral-950">
          통화 가능하신 시간대
        </div>
        <MultipleSelector
          searchOption
          items={timeItems}
          selectedValues={form.times}
          onSelectionChange={(value) => setForm({ ...form, times: value })}
          placeholder="시간을 선택해주세요"
          searchPlaceholder="시간 검색..."
          emptyMessage="해당하는 시간이 없습니다."
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-4 self-stretch">
        <div className="flex w-full items-center gap-4 max-md:flex-col">
          <CallButton className="h-10 max-md:w-full" textLabel="전화상담" />
          <CallButton className="h-10" textLabel="전화상담" />
          <div className="flex h-10 min-w-fit cursor-pointer flex-nowrap items-center justify-center gap-1 rounded-full bg-yellow-300 px-6 py-4 max-md:w-full">
            <KakaoIcon />
            <span>카톡 상담</span>
          </div>
          <ConsultationButton
            className="h-10"
            disabled={isLoading}
            textLabel={isLoading ? "상담 신청중..." : "상담 신청하기"}
            onClick={handleSubmit}
            fullWidth
          />
        </div>
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
