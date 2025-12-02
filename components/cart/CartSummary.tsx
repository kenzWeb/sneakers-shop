'use client';

import Link from 'next/link';
import { BlurContainer, GlassButton } from '@/components/ui';
import { useCartStore } from '@/stores';

export function CartSummary() {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice());

  const subtotal = totalPrice;
  const shipping = subtotal > 300 ? 0 : 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <BlurContainer className="p-6 sticky top-24">
      <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>

      <div className="space-y-3 mb-6">
        <SummaryRow label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
        <SummaryRow label="Shipping" value={shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`} highlight={shipping === 0} />
        <SummaryRow label="Tax" value={`$${tax.toFixed(2)}`} />
        <div className="border-t border-white/10 pt-3">
          <SummaryRow label="Total" value={`$${total.toFixed(2)}`} bold />
        </div>
      </div>

      {items.length > 0 ? (
        <Link href="/checkout">
          <GlassButton fullWidth>Proceed to Checkout</GlassButton>
        </Link>
      ) : (
        <GlassButton fullWidth disabled>Cart is Empty</GlassButton>
      )}

      {subtotal < 300 && subtotal > 0 && (
        <p className="text-center text-white/40 text-xs mt-4">
          Add ${(300 - subtotal).toFixed(2)} more for free shipping!
        </p>
      )}
    </BlurContainer>
  );
}

function SummaryRow({ label, value, bold, highlight }: { label: string; value: string; bold?: boolean; highlight?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className={`${bold ? 'font-bold text-white' : 'text-white/60'}`}>{label}</span>
      <span className={`${bold ? 'font-bold text-gradient text-lg' : ''} ${highlight ? 'text-cyber-blue' : 'text-white'}`}>{value}</span>
    </div>
  );
}
