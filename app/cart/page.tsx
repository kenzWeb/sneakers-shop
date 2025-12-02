'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CartItem, CartSummary, EmptyCart } from '@/components/cart';
import { useCartStore } from '@/stores';

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div className="min-h-screen py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-white">Shopping Cart</h1>
            <p className="text-white/50 font-mono text-sm mt-1">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </p>
          </div>
          {items.length > 0 && (
            <button onClick={clearCart} className="text-white/40 hover:text-white text-sm font-mono">
              Clear All
            </button>
          )}
        </motion.div>

        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <CartItem key={`${item.sneaker.id}-${item.size}`} item={item} />
                ))}
              </AnimatePresence>
            </div>
            <div>
              <CartSummary />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
