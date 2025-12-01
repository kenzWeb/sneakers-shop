import { useMemo } from 'react';
import type { Sneaker, Brand, SortOption } from '@/types';

interface UseFilteredSneakersProps {
  sneakers: Sneaker[];
  brand: Brand | null;
  sortBy: SortOption;
}

export function useFilteredSneakers({ sneakers, brand, sortBy }: UseFilteredSneakersProps) {
  return useMemo(() => {
    let filtered = brand ? sneakers.filter((s) => s.brand === brand) : [...sneakers];

    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
        break;
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [sneakers, brand, sortBy]);
}
