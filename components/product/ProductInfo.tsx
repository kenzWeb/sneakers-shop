import type { Sneaker } from '@/types';
import { NeonBadge } from '@/components/ui';

interface ProductInfoProps {
  sneaker: Sneaker;
}

export function ProductInfo({ sneaker }: ProductInfoProps) {
  const hasDiscount = sneaker.originalPrice && sneaker.originalPrice > sneaker.price;

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {sneaker.isNew && <NeonBadge variant="cyan">New</NeonBadge>}
        {sneaker.isLimited && <NeonBadge variant="purple">Limited</NeonBadge>}
      </div>

      <div>
        <p className="text-cyber-blue font-mono text-sm uppercase tracking-widest">
          {sneaker.brand}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-1">{sneaker.name}</h1>
        <p className="text-white/50 mt-2">{sneaker.colorway}</p>
      </div>

      <div className="flex items-baseline gap-3">
        <span className="text-4xl font-bold text-gradient">${sneaker.price}</span>
        {hasDiscount && (
          <>
            <span className="text-xl text-white/30 line-through">${sneaker.originalPrice}</span>
            <NeonBadge variant="pink" size="md">
              {Math.round(((sneaker.originalPrice! - sneaker.price) / sneaker.originalPrice!) * 100)}% OFF
            </NeonBadge>
          </>
        )}
      </div>
    </div>
  );
}
