import type { Sneaker } from '@/types';

interface CardInfoProps {
  sneaker: Sneaker;
}

export function CardInfo({ sneaker }: CardInfoProps) {
  const hasDiscount = sneaker.originalPrice && sneaker.originalPrice > sneaker.price;

  return (
    <div className="p-4 space-y-2">
      <p className="text-xs text-white/50 font-mono uppercase tracking-wider">
        {sneaker.brand}
      </p>
      <h3 className="font-mono text-white font-medium truncate">{sneaker.name}</h3>
      <p className="text-xs text-white/40">{sneaker.colorway}</p>
      <div className="flex items-center gap-2 pt-1">
        <span className="text-lg font-bold text-gradient">${sneaker.price}</span>
        {hasDiscount && (
          <span className="text-sm text-white/30 line-through">
            ${sneaker.originalPrice}
          </span>
        )}
      </div>
    </div>
  );
}
