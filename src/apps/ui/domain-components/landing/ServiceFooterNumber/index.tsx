import { useEffect, useRef, useState } from "react";

import { cn } from "@/shadcn/lib/utils";
import NumberFlow from "@number-flow/react";

export interface ServiceFooterNumberProps {
  value?: number;
  unit?: string;
  description: string;
}

/**
 * 메인 서비스 푸터 숫자
 * @param value 숫자
 * @param description 설명
 */
export const ServiceFooterNumber = ({
  value = 0,
  unit,
  description,
}: ServiceFooterNumberProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Intersection Observer를 사용하여 컴포넌트가 화면에 보이는지 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 한 번 보이면 observer 해제
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // 10% 이상 보일 때 트리거
        rootMargin: "0px 0px -50px 0px", // 하단에서 50px 전에 트리거
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // 컴포넌트가 보이기 시작할 때만 카운트 업데이트
  useEffect(() => {
    if (isVisible) {
      setCount(value);
    }
  }, [value, isVisible]);

  return (
    <div
      ref={ref}
      className={cn("flex flex-col items-center justify-center", "gap-4")}
    >
      <div className="flex items-center gap-1">
        <NumberFlow
          value={count}
          className={cn("text-4xl font-bold text-gray-800")}
        />
        {unit && (
          <span className="text-4xl font-bold text-gray-800">{unit}</span>
        )}
      </div>

      <span>{description}</span>
    </div>
  );
};
