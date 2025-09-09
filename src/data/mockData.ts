export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "무선 이어폰",
    price: 89000,
    rating: 4,
    reviewCount: 1234,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
  },
  {
    id: "2", 
    name: "스마트워치",
    price: 299000,
    rating: 5,
    reviewCount: 567,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
  },
  {
    id: "3",
    name: "블루투스 스피커",
    price: 45000,
    rating: 3,
    reviewCount: 890,
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop"
  },
  {
    id: "4",
    name: "무선 마우스",
    price: 25000,
    rating: 4,
    reviewCount: 234,
    imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop"
  },
  {
    id: "5",
    name: "USB-C 케이블",
    price: 12000,
    rating: 2,
    reviewCount: 156,
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop"
  }
];
