'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Sneaker } from '@/types';
import { GlassButton, IconButton } from '@/components/ui';
import { useCartStore } from '@/stores';
import { SizeSelector } from './SizeSelector';

interface AddToCartSectionProps {
  sneaker: Sneaker;
}

export function AddToCartSection({ sneaker }: AddToCartSectionProps) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [isAdded, setIsAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem(sneaker, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="space-y-6">
      <SizeSelector sizes={sneaker.sizes} selectedSize={selectedSize} onSelect={setSelectedSize} />

      <div className="flex gap-3">
        <GlassButton fullWidth onClick={handleAddToCart} disabled={!selectedSize || sneaker.isSoldOut}>
          <AnimatePresence mode="wait">
            {isAdded ? (
              <motion.span key="added" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                Added to Cart ✓
              </motion.span>
            ) : (
              <motion.span key="add" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                {sneaker.isSoldOut ? 'Sold Out' : 'Add to Cart'}
              </motion.span>
            )}
          </AnimatePresence>
        </GlassButton>
        <IconButton variant="glass" size="lg">
          <HeartIcon />
        </IconButton>
      </div>

      {!selectedSize && <p className="text-white/40 text-sm text-center">Please select a size</p>}
    </div>
  );
}

function HeartIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
}
