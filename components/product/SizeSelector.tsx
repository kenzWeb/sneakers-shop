'use client';

import { motion } from 'framer-motion';
import type { SizeUS } from '@/types';

interface SizeSelectorProps {
  sizes: SizeUS[];
  selectedSize: number | null;
  onSelect: (size: number) => void;
}

export function SizeSelector({ sizes, selectedSize, onSelect }: SizeSelectorProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-white font-medium">Select Size</span>
        <span className="text-white/40 text-sm font-mono">US</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {sizes.map((size) => (
          <motion.button
            key={size.us}
            whileHover={{ scale: size.inStock ? 1.05 : 1 }}
            whileTap={{ scale: size.inStock ? 0.95 : 1 }}
            onClick={() => size.inStock && onSelect(size.us)}
            disabled={!size.inStock}
            className={`
              py-3 rounded-xl font-mono text-sm transition-all cursor-pointer
              ${selectedSize === size.us
                ? 'bg-gradient-to-r from-cyber-blue to-cyber-purple text-white shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                : size.inStock
                  ? 'bg-white/5 border border-white/10 text-white hover:border-white/30'
                  : 'bg-white/[0.02] text-white/20 cursor-not-allowed line-through'
              }
            `}
          >
            {size.us}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
