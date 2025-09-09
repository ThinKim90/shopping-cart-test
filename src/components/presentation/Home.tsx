import { mockProducts } from '../../data/mockData';
import { ProductCard } from './ProductCard';
import { Product } from '../../data/mockData';

interface HomeProps {
  onAddToCart: (product: Product) => void;
}

export const Home = ({ onAddToCart }: HomeProps) => {
  return (
    <div className="p-4 pb-20">
      <h1 className="text-2xl font-bold mb-6">상품 목록</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {mockProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};
