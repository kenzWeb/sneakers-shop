'use client';

import Image from 'next/image';
import { BlurContainer } from '@/components/ui';
import { useCartStore } from '@/stores';

export function OrderSummary() {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice());

  const subtotal = totalPrice;
  const shipping = subtotal > 300 ? 0 : 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <BlurContainer className="p-6">
      <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>

      <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
        {items.map((item) => (
          <div key={`${item.sneaker.id}-${item.size}`} className="flex gap-3">
            <div className="relative w-16 h-16 bg-white/5 rounded-lg flex-shrink-0">
              <Image src={item.sneaker.image} alt={item.sneaker.name} fill className="object-contain" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm truncate">{item.sneaker.name}</p>
              <p className="text-white/40 text-xs">Size: US {item.size} × {item.quantity}</p>
            </div>
            <span className="text-white font-mono">${item.sneaker.price * item.quantity}</span>
          </div>
        ))}
      </div>

      <div className="space-y-2 text-sm border-t border-white/10 pt-4">
        <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
        <Row label="Shipping" value={shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`} />
        <Row label="Tax" value={`$${tax.toFixed(2)}`} />
        <div className="border-t border-white/10 pt-2 mt-2">
          <Row label="Total" value={`$${total.toFixed(2)}`} bold />
        </div>
      </div>
    </BlurContainer>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className={bold ? 'font-bold text-white' : 'text-white/60'}>{label}</span>
      <span className={bold ? 'font-bold text-gradient text-lg' : 'text-white'}>{value}</span>
    </div>
  );
}
