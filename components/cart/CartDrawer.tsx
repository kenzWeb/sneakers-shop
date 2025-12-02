'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useCartStore } from '@/stores';
import { GlassButton, IconButton } from '@/components/ui';
import { CartDrawerItem } from './CartDrawerItem';

export function CartDrawer() {
  const isOpen = useCartStore((state) => state.isOpen);
  const setCartOpen = useCartStore((state) => state.setCartOpen);
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice());

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-dark-secondary border-l border-white/10 z-50 flex flex-col"
          >
            <Header onClose={() => setCartOpen(false)} count={items.length} />
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <CartDrawerItem key={`${item.sneaker.id}-${item.size}`} item={item} />
                ))}
              </AnimatePresence>
              {items.length === 0 && <EmptyState />}
            </div>
            {items.length > 0 && <Footer total={totalPrice} onClose={() => setCartOpen(false)} />}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function Header({ onClose, count }: { onClose: () => void; count: number }) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-white/10">
      <h2 className="text-lg font-bold text-white">Cart ({count})</h2>
      <IconButton variant="ghost" size="sm" onClick={onClose}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      </IconButton>
    </div>
  );
}

function Footer({ total, onClose }: { total: number; onClose: () => void }) {
  return (
    <div className="p-4 border-t border-white/10 space-y-3">
      <div className="flex justify-between text-lg">
        <span className="text-white/60">Total</span>
        <span className="text-gradient font-bold">${total.toFixed(2)}</span>
      </div>
      <Link href="/checkout" onClick={onClose}><GlassButton fullWidth>Checkout</GlassButton></Link>
      <Link href="/cart" onClick={onClose}><GlassButton variant="secondary" fullWidth>View Cart</GlassButton></Link>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-12">
      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
      </div>
      <p className="text-white/50">Your cart is empty</p>
    </div>
  );
}

// updated logic 1766962559320
// updated logic 1766962559962
// updated logic 1766962560396
// updated logic 1766962560426
// updated logic 1766962560722
// updated logic 1766962561782
// updated logic 1766962561871
// updated logic 1766962561943