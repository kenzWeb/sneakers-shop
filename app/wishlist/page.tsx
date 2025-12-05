'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useWishlistStore } from '@/stores';
import { SneakerGrid } from '@/components/sneaker';
import { GlassButton } from '@/components/ui';

export default function WishlistPage() {
  const items = useWishlistStore((state) => state.items);
  const clearWishlist = useWishlistStore((state) => state.clearWishlist);

  return (
    <div className="min-h-screen py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-white">Wishlist</h1>
            <p className="text-white/50 font-mono text-sm mt-1">
              {items.length} {items.length === 1 ? 'item' : 'items'} saved
            </p>
          </div>
          {items.length > 0 && (
            <button onClick={clearWishlist} className="text-white/40 hover:text-white text-sm font-mono">
              Clear All
            </button>
          )}
        </motion.div>

        {items.length === 0 ? <EmptyWishlist /> : <SneakerGrid sneakers={items} />}
      </div>
    </div>
  );
}

function EmptyWishlist() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
        <svg className="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">Your wishlist is empty</h2>
      <p className="text-white/50 mb-8 max-w-sm mx-auto">Save your favorite kicks for later.</p>
      <Link href="/catalog"><GlassButton>Browse Collection</GlassButton></Link>
    </motion.div>
  );
}
