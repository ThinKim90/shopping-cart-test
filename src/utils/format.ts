// 통화 포맷팅 (₩ + 천단위 구분)
export const formatCurrency = (amount: number): string => {
  return `₩${amount.toLocaleString('ko-KR')}`;
};
