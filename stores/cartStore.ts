import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Sneaker } from '@/types';

export interface CartItem {
  sneaker: Sneaker;
  size: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (sneaker: Sneaker, size: number) => void;
  removeItem: (sneakerId: string, size: number) => void;
  updateQuantity: (sneakerId: string, size: number, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (isOpen: boolean) => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (sneaker, size) => {
        const existingItem = get().items.find(
          (item) => item.sneaker.id === sneaker.id && item.size === size
        );

        if (existingItem) {
          set({
            items: get().items.map((item) =>
              item.sneaker.id === sneaker.id && item.size === size
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ items: [...get().items, { sneaker, size, quantity: 1 }] });
        }
      },

      removeItem: (sneakerId, size) => {
        set({
          items: get().items.filter(
            (item) => !(item.sneaker.id === sneakerId && item.size === size)
          ),
        });
      },

      updateQuantity: (sneakerId, size, quantity) => {
        if (quantity <= 0) {
          get().removeItem(sneakerId, size);
          return;
        }
        set({
          items: get().items.map((item) =>
            item.sneaker.id === sneakerId && item.size === size
              ? { ...item, quantity }
              : item
          ),
        });
      },

      clearCart: () => set({ items: [] }),
      toggleCart: () => set({ isOpen: !get().isOpen }),
      setCartOpen: (isOpen) => set({ isOpen }),
      totalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
      totalPrice: () =>
        get().items.reduce((sum, item) => sum + item.sneaker.price * item.quantity, 0),
    }),
    { name: 'kicks-cart' }
  )
);
