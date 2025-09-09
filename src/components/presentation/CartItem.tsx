import { CartItem as CartItemType } from '../../types/cart';
import { formatCurrency } from '../../utils/format';

interface CartItemProps {
  item: CartItemType;
  onIncreaseQuantity: (id: string) => void;
  onDecreaseQuantity: (id: string) => void;
  onRemoveItem: (id: string) => void;
  onToggleSelection: (id: string) => void;
}

export const CartItem = ({
  item,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveItem,
  onToggleSelection
}: CartItemProps) => {
  const subtotal = item.price * item.qty;

  return (
    <div className="flex items-center space-x-4 p-4 border-b border-gray-200">
      <input
        type="checkbox"
        checked={item.selected}
        onChange={() => onToggleSelection(item.id)}
        className="w-4 h-4 text-blue-600"
      />
      
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-16 h-16 object-cover rounded"
      />
      
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-600">{formatCurrency(item.price)}</p>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onDecreaseQuantity(item.id)}
          disabled={item.qty <= 1}
          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center disabled:opacity-50"
          aria-label="수량 감소"
        >
          -
        </button>
        <span className="w-8 text-center">{item.qty}</span>
        <button
          onClick={() => onIncreaseQuantity(item.id)}
          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
          aria-label="수량 증가"
        >
          +
        </button>
      </div>
      
      <div className="text-right">
        <p className="font-semibold">{formatCurrency(subtotal)}</p>
        <button
          onClick={() => onRemoveItem(item.id)}
          className="text-red-500 text-sm"
          aria-label="상품 삭제"
        >
          삭제
        </button>
      </div>
    </div>
  );
};
