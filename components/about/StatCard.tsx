'use client';

import { motion } from 'framer-motion';
import { BlurContainer } from '@/components/ui';

interface StatCardProps {
  value: string;
  label: string;
  index: number;
}

export function StatCard({ value, label, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <BlurContainer className="p-6 text-center">
        <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{value}</div>
        <div className="text-white/50 font-mono text-sm uppercase tracking-wider">{label}</div>
      </BlurContainer>
    </motion.div>
  );
}
