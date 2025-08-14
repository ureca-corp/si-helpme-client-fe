import type React from "react";

import { overlay } from "overlay-kit";

import { useCreateCounsel } from "@/apps/applications/counsel/useCreateCounsel";
import { ContactFinishDialog } from "@/apps/ui/domain-components/landing/Contact_Finish_Dialog";
import {
  ContactFormModel,
  ContactForms,
} from "@/apps/ui/domain-components/landing/Contact_Forms";

export default function ContactForm() {
  const { createCounsel } = useCreateCounsel();

  const handleSubmit = async (form: ContactFormModel) => {
    await createCounsel({
      username: form.name,
      phone: form.phone,
      question: form.message,
      availableCallTime: form.times.join(", "),
    });

    // 실제 구현에서는 여기에 폼 제출 로직을 추가
    overlay.open(({ isOpen, close }) => (
      <ContactFinishDialog open={isOpen} onClose={close} />
    ));
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center bg-neutral-50 px-6 py-24"
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
