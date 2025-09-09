export type TabType = 'home' | 'cart' | 'community' | 'mypage';

interface TabBarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const TabBar = ({ activeTab, onTabChange }: TabBarProps) => {
  const tabs = [
    { id: 'home' as TabType, label: '홈' },
    { id: 'cart' as TabType, label: '장바구니' },
    { id: 'community' as TabType, label: '커뮤니티' },
    { id: 'mypage' as TabType, label: '마이페이지' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 py-3 px-2 text-center ${
              activeTab === tab.id
                ? 'text-blue-500 border-t-2 border-blue-500'
                : 'text-gray-500'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
