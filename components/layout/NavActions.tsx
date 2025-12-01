'use client';

import Link from 'next/link';
import { IconButton } from '@/components/ui';
import { useCartStore, useUIStore, useWishlistStore } from '@/stores';

export function NavActions() {
  const totalItems = useCartStore((state) => state.totalItems());
  const toggleCart = useCartStore((state) => state.toggleCart);
  const toggleSearch = useUIStore((state) => state.toggleSearch);
  const wishlistCount = useWishlistStore((state) => state.items.length);

  return (
    <div className="flex items-center gap-3">
      <IconButton variant="ghost" size="sm" onClick={toggleSearch} aria-label="Search">
        <SearchIcon />
      </IconButton>
      <Link href="/wishlist">
        <IconButton variant="ghost" size="sm" className="relative" aria-label="Wishlist">
          <HeartIcon />
          {wishlistCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-neon-pink to-cyber-purple rounded-full text-[10px] flex items-center justify-center font-mono">
              {wishlistCount}
            </span>
          )}
        </IconButton>
      </Link>
      <IconButton variant="glass" size="sm" onClick={toggleCart} className="relative" aria-label="Cart">
        <CartIcon />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full text-[10px] flex items-center justify-center font-mono">
            {totalItems}
          </span>
        )}
      </IconButton>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  );
}
