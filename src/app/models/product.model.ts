export type Gender = 'Women' | 'Men';

export type Category =
  | 'Clothing'
  | 'Shoes'
  | 'Accessories';

export interface Product {
  id: number;
  name: string;
  gender: Gender;
  category: Category;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  rating: number;
  isBestSeller: boolean;
  isPromotion: boolean;
}
