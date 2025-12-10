import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Sneaker } from '@/types';

interface WishlistState {
  items: Sneaker[];
  addItem: (sneaker: Sneaker) => void;
  removeItem: (sneakerId: string) => void;
  toggleItem: (sneaker: Sneaker) => void;
  isInWishlist: (sneakerId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (sneaker) => {
        if (!get().isInWishlist(sneaker.id)) {
          set({ items: [...get().items, sneaker] });
        }
      },

      removeItem: (sneakerId) => {
        set({ items: get().items.filter((item) => item.id !== sneakerId) });
      },

      toggleItem: (sneaker) => {
        if (get().isInWishlist(sneaker.id)) {
          get().removeItem(sneaker.id);
        } else {
          get().addItem(sneaker);
        }
      },

      isInWishlist: (sneakerId) => {
        return get().items.some((item) => item.id === sneakerId);
      },

      clearWishlist: () => set({ items: [] }),
    }),
    { name: 'kicks-wishlist' }
  )
);
