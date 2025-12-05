'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { Sneaker } from '@/types';
import { SneakerCard } from './SneakerCard';

interface SneakerGridProps {
  sneakers: Sneaker[];
}

export function SneakerGrid({ sneakers }: SneakerGridProps) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <AnimatePresence mode="popLayout">
        {sneakers.map((sneaker, index) => (
          <SneakerCard key={sneaker.id} sneaker={sneaker} index={index} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
