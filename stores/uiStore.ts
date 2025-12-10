import { create } from 'zustand';
import type { Brand, SortOption, FilterState } from '@/types';

interface UIState {
  isMenuOpen: boolean;
  isSearchOpen: boolean;
  activeFilter: Brand | null;
  sortBy: SortOption;
  filters: FilterState;
  toggleMenu: () => void;
  setMenuOpen: (isOpen: boolean) => void;
  toggleSearch: () => void;
  setActiveFilter: (brand: Brand | null) => void;
  setSortBy: (sort: SortOption) => void;
  updateFilters: (filters: Partial<FilterState>) => void;
  resetFilters: () => void;
}

const defaultFilters: FilterState = {
  brands: [],
  priceRange: [0, 1000],
  sizes: [],
  inStockOnly: false,
};

export const useUIStore = create<UIState>((set, get) => ({
  isMenuOpen: false,
  isSearchOpen: false,
  activeFilter: null,
  sortBy: 'newest',
  filters: defaultFilters,

  toggleMenu: () => set({ isMenuOpen: !get().isMenuOpen }),
  setMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
  toggleSearch: () => set({ isSearchOpen: !get().isSearchOpen }),
  setActiveFilter: (brand) => set({ activeFilter: brand }),
  setSortBy: (sort) => set({ sortBy: sort }),

  updateFilters: (newFilters) =>
    set({ filters: { ...get().filters, ...newFilters } }),

  resetFilters: () => set({ filters: defaultFilters, activeFilter: null }),
}));
