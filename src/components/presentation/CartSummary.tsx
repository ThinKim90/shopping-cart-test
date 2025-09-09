import { CartItem } from '../../types/cart';
import { formatCurrency } from '../../utils/format';
import {
  getSelectedSubtotal,
  getShippingFee,
  getOrderTotal,
  getExpectedMileage,
  getRemainingForFreeShipping,
  hasSelectedItems
} from '../../selectors/cartSelectors';

interface CartSummaryProps {
  cartItems: CartItem[];
  onPurchase: () => void;
}

export const CartSummary = ({ cartItems, onPurchase }: CartSummaryProps) => {
  const selectedSubtotal = getSelectedSubtotal(cartItems);
  const shippingFee = getShippingFee(selectedSubtotal);
  const orderTotal = getOrderTotal(selectedSubtotal, shippingFee);
  const expectedMileage = getExpectedMileage(selectedSubtotal);
  const remainingForFreeShipping = getRemainingForFreeShipping(selectedSubtotal);
  const hasSelected = hasSelectedItems(cartItems);

  return (
    <div className="p-4 bg-gray-50 border-t">
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>선택한 상품 총액</span>
          <span>{formatCurrency(selectedSubtotal)}</span>
        </div>
        
        <div className="flex justify-between">
          <span>배송비</span>
          <span>{shippingFee === 0 ? '무료' : formatCurrency(shippingFee)}</span>
        </div>
        
        {remainingForFreeShipping > 0 && (
          <div className="text-sm text-blue-600">
            무료배송까지 {formatCurrency(remainingForFreeShipping)} 남았어요
          </div>
        )}
        
        <div className="text-sm text-gray-600">
          ₩30,000 이상 구매 시 배송비 무료
        </div>
      </div>
      
      <div className="border-t pt-4 mb-4">
        <div className="flex justify-between text-lg font-bold">
          <span>총 결제 금액</span>
          <span>{formatCurrency(orderTotal)}</span>
        </div>
      </div>
      
      <div className="text-sm text-gray-600 mb-4">
        예상 적립금: {formatCurrency(expectedMileage)} (5%)
      </div>
      
      <button
        onClick={onPurchase}
        disabled={!hasSelected}
        className={`w-full py-3 px-4 rounded font-semibold ${
          hasSelected
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        구매하기
      </button>
    </div>
  );
};
