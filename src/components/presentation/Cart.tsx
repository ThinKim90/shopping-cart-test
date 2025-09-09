import { CartItem as CartItemType } from '../../types/cart';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import { hasSelectedItems } from '../../selectors/cartSelectors';

interface CartProps {
  cartItems: CartItemType[];
  onIncreaseQuantity: (id: string) => void;
  onDecreaseQuantity: (id: string) => void;
  onRemoveItem: (id: string) => void;
  onToggleSelection: (id: string) => void;
  onRemoveSelectedItems: () => void;
  onPurchase: () => void;
  onGoToHome: () => void;
  onToggleSelectAll: () => void;
}

export const Cart = ({
  cartItems,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveItem,
  onToggleSelection,
  onRemoveSelectedItems,
  onPurchase,
  onGoToHome,
  onToggleSelectAll
}: CartProps) => {
  const hasSelected = hasSelectedItems(cartItems);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-96 pb-20 space-y-4">
        <p className="text-gray-500 text-lg">장바구니가 비어있습니다</p>
        <button
          onClick={onGoToHome}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          구매하러 가기
        </button>
      </div>
    );
  }

  const allSelected = cartItems.length > 0 && cartItems.every(item => item.selected);

  return (
    <div className="pb-32">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">장바구니</h1>
          <button
            onClick={onRemoveSelectedItems}
            disabled={!hasSelected}
            className={`px-4 py-2 rounded ${
              hasSelected
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            선택 삭제
          </button>
        </div>
        
        <div className="flex items-center mb-4 p-3 bg-gray-50 rounded">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={onToggleSelectAll}
            className="w-4 h-4 text-blue-600 mr-3"
          />
          <span className="text-gray-700">전체 선택</span>
        </div>
        <div className="space-y-0">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onIncreaseQuantity={onIncreaseQuantity}
              onDecreaseQuantity={onDecreaseQuantity}
              onRemoveItem={onRemoveItem}
              onToggleSelection={onToggleSelection}
            />
          ))}
        </div>
      </div>
      
      <CartSummary
        cartItems={cartItems}
        onPurchase={onPurchase}
      />
    </div>
  );
};
