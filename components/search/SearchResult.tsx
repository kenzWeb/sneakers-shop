'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { Sneaker } from '@/types';
import { NeonBadge } from '@/components/ui';

interface SearchResultProps {
  sneaker: Sneaker;
  index: number;
  onClose: () => void;
}

export function SearchResult({ sneaker, index, onClose }: SearchResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        href={`/sneaker/${sneaker.id}`}
        onClick={onClose}
        className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
      >
        <div className="relative w-16 h-16 bg-gradient-radial from-cyber-blue/20 to-transparent rounded-lg flex-shrink-0">
          <Image src={sneaker.image} alt={sneaker.name} fill className="object-contain" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-white/50 font-mono text-xs">{sneaker.brand}</p>
            {sneaker.isNew && <NeonBadge variant="cyan">New</NeonBadge>}
          </div>
          <h4 className="text-white font-medium truncate group-hover:text-cyber-blue transition-colors">
            {sneaker.name}
          </h4>
          <p className="text-white/40 text-sm">{sneaker.colorway}</p>
        </div>
        <span className="text-gradient font-bold">${sneaker.price}</span>
      </Link>
    </motion.div>
  );
}
