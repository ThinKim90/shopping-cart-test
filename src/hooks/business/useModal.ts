import { useState } from 'react';
import { ModalType } from '../../types/cart';

export const useModal = () => {
  const [modalType, setModalType] = useState<ModalType>(null);

  // 모달 열기
  const openModal = (type: ModalType) => {
    setModalType(type);
  };

  // 모달 닫기
  const closeModal = () => {
    setModalType(null);
  };

  return {
    modalType,
    openModal,
    closeModal
  };
};
