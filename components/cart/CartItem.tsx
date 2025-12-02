'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BlurContainer, IconButton } from '@/components/ui';
import { useCartStore, type CartItem as CartItemType } from '@/stores';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();
  const { sneaker, size, quantity } = item;

  return (
    <motion.div layout initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
      <BlurContainer className="p-4">
        <div className="flex gap-4">
          <div className="relative w-24 h-24 flex-shrink-0 bg-gradient-radial from-cyber-blue/20 to-transparent rounded-xl">
            <Image src={sneaker.image} alt={sneaker.name} fill className="object-contain" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white/50 font-mono text-xs">{sneaker.brand}</p>
            <h3 className="font-bold text-white truncate">{sneaker.name}</h3>
            <p className="text-white/40 text-sm">Size: US {size}</p>
            <div className="flex items-center justify-between mt-2">
              <QuantityControls quantity={quantity} onChange={(q) => updateQuantity(sneaker.id, size, q)} />
              <span className="text-gradient font-bold">${sneaker.price * quantity}</span>
            </div>
          </div>
          <IconButton variant="ghost" size="sm" onClick={() => removeItem(sneaker.id, size)}>
            <TrashIcon />
          </IconButton>
        </div>
      </BlurContainer>
    </motion.div>
  );
}

function QuantityControls({ quantity, onChange }: { quantity: number; onChange: (q: number) => void }) {
  return (
    <div className="flex items-center gap-2">
      <button onClick={() => onChange(quantity - 1)} className="w-6 h-6 rounded bg-white/10 text-white/60 hover:bg-white/20">−</button>
      <span className="font-mono text-white w-6 text-center">{quantity}</span>
      <button onClick={() => onChange(quantity + 1)} className="w-6 h-6 rounded bg-white/10 text-white/60 hover:bg-white/20">+</button>
    </div>
  );
}

function TrashIcon() {
  return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>;
}
