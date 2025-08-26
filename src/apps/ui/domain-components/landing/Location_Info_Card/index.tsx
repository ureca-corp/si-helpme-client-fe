import { ReactNode } from "react";

interface LocationInfoContainerProps {
  children: ReactNode;
  icon?: ReactNode;
  title?: string;
  className?: string;
}

export const LocationInfoContainer = ({
  children,
  icon,
  title,
  className = "",
}: LocationInfoContainerProps) => {
  return (
    <div
      className={`overflow-hidden rounded-xl border p-4 shadow-sm ${className}`}
    >
      {/* 메인 컨텐츠 */}
      <div className="flex flex-col gap-4">
        {/* 헤더 영역 */}
        {(icon || title) && (
          <div className="flex items-center gap-2">
            {icon && icon}
            {title && (
              <span className="text-lg font-semibold text-gray-900">
                {title}
              </span>
            )}
          </div>
        )}

        {/* 컨텐츠 영역 */}
        <div className="flex flex-col gap-2">{children}</div>
      </div>
    </div>
  );
};

// 개별 정보 아이템을 위한 컴포넌트
interface LocationInfoItemProps {
  icon?: ReactNode;
  title?: string;
  value: string;
  etc?: string;
  className?: string;
}

export const LocationInfoItem = ({
  icon,
  title,
  value,
  etc,
  className = "",
}: LocationInfoItemProps) => {
  return (
    <div className={`flex items-start gap-2 sm:gap-3 ${className}`}>
      {icon && (
        <div className="flex h-4 w-4 items-center justify-center text-gray-400 sm:h-5 sm:w-5">
          {icon}
        </div>
      )}
      <div className="flex min-w-0 flex-1 flex-col">
        {title && (
          <span className="text-sm font-medium text-gray-500">{title}</span>
        )}
        <div className="flex w-full flex-wrap whitespace-pre-wrap">
          <span className="font-medium break-words text-gray-700">{value}</span>
          {etc && (
            <span className="font-medium break-words text-gray-700">{etc}</span>
          )}
        </div>
      </div>
    </div>
  );
};
