'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { GlassButton } from '@/components/ui';

export function HeroCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
    >
      <Link href="/catalog">
        <GlassButton variant="primary" size="lg">
          Explore Collection
        </GlassButton>
      </Link>
      <Link href="/drops">
        <GlassButton variant="secondary" size="lg">
          New Drops
        </GlassButton>
      </Link>
    </motion.div>
  );
}
