'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCartStore, type CartItem } from '@/stores';

interface CartDrawerItemProps {
  item: CartItem;
}

export function CartDrawerItem({ item }: CartDrawerItemProps) {
  const { updateQuantity, removeItem } = useCartStore();
  const { sneaker, size, quantity } = item;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex gap-3 p-3 bg-white/5 rounded-xl"
    >
      <div className="relative w-16 h-16 bg-gradient-radial from-cyber-blue/20 to-transparent rounded-lg flex-shrink-0">
        <Image src={sneaker.image} alt={sneaker.name} fill className="object-contain" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-medium truncate">{sneaker.name}</p>
        <p className="text-white/40 text-xs">US {size}</p>
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-1">
            <button onClick={() => updateQuantity(sneaker.id, size, quantity - 1)} className="w-5 h-5 rounded bg-white/10 text-white/60 text-xs">−</button>
            <span className="text-white text-xs w-4 text-center">{quantity}</span>
            <button onClick={() => updateQuantity(sneaker.id, size, quantity + 1)} className="w-5 h-5 rounded bg-white/10 text-white/60 text-xs">+</button>
          </div>
          <span className="text-gradient font-bold text-sm">${sneaker.price * quantity}</span>
        </div>
      </div>
      <button onClick={() => removeItem(sneaker.id, size)} className="text-white/30 hover:text-white self-start">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </motion.div>
  );
}
