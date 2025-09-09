export interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  qty: number;
  selected: boolean;
}

export interface ToastMessage {
  id: string;
  message: string;
  timestamp: number;
}

export type ModalType = 'preparing' | 'payment' | null;
