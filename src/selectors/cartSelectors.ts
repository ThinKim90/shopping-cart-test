import { CartItem } from '../types/cart';

// 선택한 상품 총액 계산
export const getSelectedSubtotal = (cartItems: CartItem[]): number => {
  return cartItems
    .filter(item => item.selected)
    .reduce((sum, item) => sum + (item.price * item.qty), 0);
};

// 배송비 계산
export const getShippingFee = (selectedSubtotal: number): number => {
  if (selectedSubtotal <= 0) return 0;
  return selectedSubtotal >= 50000 ? 0 : 3000;
};

// 총 결제 금액 계산
export const getOrderTotal = (selectedSubtotal: number, shippingFee: number): number => {
  return selectedSubtotal + shippingFee;
};

// 예상 적립금 계산 (5%, 원단위 내림)
export const getExpectedMileage = (selectedSubtotal: number): number => {
  return Math.floor(selectedSubtotal * 0.05);
};

// 무료배송까지 남은 금액 계산
export const getRemainingForFreeShipping = (selectedSubtotal: number): number => {
  if (selectedSubtotal >= 50000) return 0;
  return 50000 - selectedSubtotal;
};

// 선택된 상품이 있는지 확인
export const hasSelectedItems = (cartItems: CartItem[]): boolean => {
  return cartItems.some(item => item.selected);
};
