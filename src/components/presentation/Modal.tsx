import { ModalType } from '../../types/cart';

interface ModalProps {
  type: ModalType;
  onClose: () => void;
}

export const Modal = ({ type, onClose }: ModalProps) => {
  if (!type) return null;

  const getModalContent = () => {
    switch (type) {
      case 'preparing':
        return {
          title: '준비중입니다',
          message: '서비스 준비 중입니다. 조금만 기다려주세요.'
        };
      case 'payment':
        return {
          title: '결제는 준비중입니다',
          message: '결제 기능은 준비 중입니다.'
        };
      default:
        return { title: '', message: '' };
    }
  };

  const { title, message } = getModalContent();

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg p-6 max-w-sm mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          닫기
        </button>
      </div>
    </div>
  );
};
