'use client';

import { motion } from 'framer-motion';
import type { MouseEvent as ReactMouseEvent } from 'react';
import type { Sneaker } from '@/types';
import { IconButton } from '@/components/ui';
import { useCartStore, useWishlistStore } from '@/stores';

interface CardActionsProps {
  sneaker: Sneaker;
}

export function CardActions({ sneaker }: CardActionsProps) {
  const addToCart = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggleItem);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist(sneaker.id));

  const handleAddToCart = (e: ReactMouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const availableSize = sneaker.sizes.find((s) => s.inStock);
    if (availableSize) {
      addToCart(sneaker, availableSize.us);
    }
  };

  const handleToggleWishlist = (e: ReactMouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(sneaker);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="absolute top-3 right-3 z-20 flex flex-col gap-2"
    >
      <IconButton size="sm" isActive={isInWishlist} onClick={handleToggleWishlist}>
        <HeartIcon filled={isInWishlist} />
      </IconButton>
      <IconButton size="sm" variant="solid" onClick={handleAddToCart}>
        <CartIcon />
      </IconButton>
    </motion.div>
  );
}

function HeartIcon({ filled }: { filled?: boolean }) {
  return (
    <svg className="w-4 h-4" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}
