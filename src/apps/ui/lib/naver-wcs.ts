export type NaverConversionType =
  | "custom001"
  | "custom002"
  | "custom003"
  | "custom004"
  | "custom005"
  | "custom006"
  | "custom007"
  | "custom008"
  | "custom009"
  | "custom010";

export const NAVER_WCS_ACCOUNT_ID = "s_5a3318c599a1";

export function sendNaverConversion(type: NaverConversionType): void {
  if (typeof window === "undefined") return;

  if (typeof window.NA_CONV === "function") {
    window.NA_CONV(type);
    return;
  }

  if (window.wcs) {
    if (!window.wcs_add) window.wcs_add = {};
    window.wcs_add["wa"] = NAVER_WCS_ACCOUNT_ID;
    window.wcs.trans({ type });
  }
}
