import { useState, useCallback } from 'react';
import { ToastMessage } from '../../types/cart';

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // 토스트 추가
  const addToast = useCallback((message: string) => {
    const newToast: ToastMessage = {
      id: Date.now().toString(),
      message,
      timestamp: Date.now()
    };
    
    setToasts(prev => [...prev, newToast]);

    // 2초 후 자동 제거
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== newToast.id));
    }, 2000);
  }, []);

  // 토스트 제거
  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  return {
    toasts,
    addToast,
    removeToast
  };
};
