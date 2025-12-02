'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { GlassButton } from '@/components/ui';

export function EmptyCart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-20"
    >
      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
        <svg className="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
      <p className="text-white/50 mb-8 max-w-sm mx-auto">
        Looks like you haven&apos;t added any kicks yet. Let&apos;s fix that.
      </p>
      <Link href="/catalog">
        <GlassButton>Browse Collection</GlassButton>
      </Link>
    </motion.div>
  );
}
