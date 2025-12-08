'use client';

import { motion } from 'framer-motion';
import { BlurContainer } from '@/components/ui';
import type { Sneaker } from '@/types';

interface ProductDetailsProps {
  sneaker: Sneaker;
}

export function ProductDetails({ sneaker }: ProductDetailsProps) {
  const details = [
    { label: 'Brand', value: sneaker.brand },
    { label: 'Collection', value: sneaker.collection },
    { label: 'Colorway', value: sneaker.colorway },
    { label: 'Release Date', value: new Date(sneaker.releaseDate).toLocaleDateString() },
    { label: 'Style', value: sneaker.id.toUpperCase() },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
      <BlurContainer className="p-6">
        <h3 className="text-lg font-bold text-white mb-4">Product Details</h3>
        <div className="space-y-3">
          {details.map((detail) => (
            <div key={detail.label} className="flex justify-between">
              <span className="text-white/50 font-mono text-sm">{detail.label}</span>
              <span className="text-white">{detail.value}</span>
            </div>
          ))}
        </div>
      </BlurContainer>
    </motion.div>
  );
}

// updated logic 1766962559614
// updated logic 1766962559737
// updated logic 1766962560782
// updated logic 1766962560995
// updated logic 1766962561025
// updated logic 1766962561171
// updated logic 1766962561338
// updated logic 1766962561489
// updated logic 1766962561574
// updated logic 1766962561660
// updated logic 1766962561843
// updated logic 1766962562006