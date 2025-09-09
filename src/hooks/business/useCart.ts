import { useState } from 'react';
import { CartItem } from '../../types/cart';
import { Product } from '../../data/mockData';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // 상품 추가
  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      
      if (existingItem) {
        // 기존 상품이 있으면 수량 증가
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        // 새 상품 추가
        const newItem: CartItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
          qty: 1,
          selected: false
        };
        return [...prev, newItem];
      }
    });
  };

  // 수량 증가
  const increaseQuantity = (id: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // 수량 감소
  const decreaseQuantity = (id: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // 개별 상품 삭제
  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // 선택 상태 토글
  const toggleSelection = (id: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, selected: !item.selected }
          : item
      )
    );
  };

  // 선택된 상품들 삭제
  const removeSelectedItems = () => {
    setCartItems(prev => prev.filter(item => !item.selected));
  };

  // 전체 선택/해제
  const toggleSelectAll = () => {
    const allSelected = cartItems.every(item => item.selected);
    setCartItems(prev =>
      prev.map(item => ({ ...item, selected: !allSelected }))
    );
  };

  return {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    toggleSelection,
    removeSelectedItems,
    toggleSelectAll
  };
};
