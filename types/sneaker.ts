export type Brand = 'Nike' | 'Adidas' | 'Jordan' | 'New Balance' | 'Yeezy' | 'Puma';

export type Collection = 'Air Max' | 'Dunk' | 'Forum' | '550' | 'Foam Runner' | 'Classic';

export interface SizeUS {
  us: number;
  eu: number;
  inStock: boolean;
}

export interface Sneaker {
  id: string;
  name: string;
  brand: Brand;
  collection: Collection;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  colorway: string;
  releaseDate: string;
  sizes: SizeUS[];
  isNew?: boolean;
  isLimited?: boolean;
  isSoldOut?: boolean;
}

export type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'name';

export interface FilterState {
  brands: Brand[];
  priceRange: [number, number];
  sizes: number[];
  inStockOnly: boolean;
}
