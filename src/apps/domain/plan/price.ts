/**
 * 플랜 금액 정보
 */
export const PLAN_PRICE_INFO = {
  // 베이직
  basic: {
    lump: 148,
    installment: 161,
    installmentPrice: 23,
  },

  // 스탠다드
  standard: {
    lump: 195,
    installment: 224,
    installmentPrice: 32,
  },

  // 프로
  pro: {
    lump: 265,
    installment: 280,
    installmentPrice: 40,
  },

  // 분할 월
  installmentMonth: 7,
};

export class PlanPriceInfoHelper {
  /**
   * 분할 결제 금액 계산
   * @param totalPrice 총 결제 금액
   * @returns 분할된 결제 금액 (월)
   * 소수점은 반올림 처리
   */
  static getInstallmentPrice(totalPrice: number) {
    return Math.round(totalPrice / PLAN_PRICE_INFO.installmentMonth);
  }
}
