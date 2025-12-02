'use client';

import { motion } from 'framer-motion';

interface CatalogHeaderProps {
  count: number;
}

export function CatalogHeader({ count }: CatalogHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Catalog</h1>
      <p className="text-white/50 font-mono text-sm">
        {count} {count === 1 ? 'sneaker' : 'sneakers'} available
      </p>
    </motion.div>
  );
}
