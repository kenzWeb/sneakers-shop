import type { Sneaker } from '@/types';

export interface Drop {
  sneaker: Sneaker;
  dropDate: string;
}

export const upcomingDrops: Drop[] = [
  {
    dropDate: '2025-01-15T10:00:00',
    sneaker: {
      id: 'jordan-4-military-blue',
      name: 'Air Jordan 4 Retro',
      brand: 'Jordan',
      collection: 'Classic',
      price: 520,
      image: 'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=600',
      colorway: 'Military Blue',
      releaseDate: '2025-01-15',
      isLimited: true,
      sizes: [
        { us: 8, eu: 41, inStock: true },
        { us: 9, eu: 42, inStock: true },
        { us: 10, eu: 43, inStock: true },
      ],
    },
  },
  {
    dropDate: '2025-01-20T12:00:00',
    sneaker: {
      id: 'yeezy-700-wave',
      name: 'Yeezy 700 V3',
      brand: 'Yeezy',
      collection: 'Foam Runner',
      price: 450,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600',
      colorway: 'Azael',
      releaseDate: '2025-01-20',
      isLimited: true,
      sizes: [
        { us: 7, eu: 40, inStock: true },
        { us: 8, eu: 41, inStock: true },
      ],
    },
  },
  {
    dropDate: '2025-02-01T09:00:00',
    sneaker: {
      id: 'nike-sb-dunk-travis',
      name: 'SB Dunk Low',
      brand: 'Nike',
      collection: 'Dunk',
      price: 680,
      image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600',
      colorway: 'Cactus Jack',
      releaseDate: '2025-02-01',
      isLimited: true,
      sizes: [
        { us: 8, eu: 41, inStock: true },
        { us: 9, eu: 42, inStock: true },
      ],
    },
  },
];
