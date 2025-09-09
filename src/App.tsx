import { useState } from 'react';
import { TabBar, TabType } from './components/presentation/TabBar';
import { Home } from './components/presentation/Home';
import { Cart } from './components/presentation/Cart';
import { Modal } from './components/presentation/Modal';
import { ToastContainer } from './components/presentation/Toast';
import { useCart } from './hooks/business/useCart';
import { useToast } from './hooks/business/useToast';
import { useModal } from './hooks/business/useModal';
import { Product } from './data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  
  const {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    toggleSelection,
    removeSelectedItems
  } = useCart();
  
  const { toasts, addToast, removeToast } = useToast();
  const { modalType, openModal, closeModal } = useModal();

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    
    // 커뮤니티나 마이페이지 탭 클릭시 준비중 모달 표시
    if (tab === 'community' || tab === 'mypage') {
      openModal('preparing');
    }
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    addToast('장바구니에 담겼습니다');
  };

  const handlePurchase = () => {
    openModal('payment');
  };

  const handleGoToHome = () => {
    setActiveTab('home');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onAddToCart={handleAddToCart} />;
      case 'cart':
        return (
          <Cart
            cartItems={cartItems}
            onIncreaseQuantity={increaseQuantity}
            onDecreaseQuantity={decreaseQuantity}
            onRemoveItem={removeItem}
            onToggleSelection={toggleSelection}
            onRemoveSelectedItems={removeSelectedItems}
            onPurchase={handlePurchase}
            onGoToHome={handleGoToHome}
          />
        );
      case 'community':
      case 'mypage':
        return null; // 모달로 처리
      default:
        return <Home onAddToCart={handleAddToCart} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {renderContent()}
      <TabBar activeTab={activeTab} onTabChange={handleTabChange} />
      <Modal type={modalType} onClose={closeModal} />
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  );
}

export default App;
