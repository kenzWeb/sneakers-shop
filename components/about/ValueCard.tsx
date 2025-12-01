'use client';

import { motion } from 'framer-motion';
import { BlurContainer } from '@/components/ui';
import type { ReactNode } from 'react';

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export function ValueCard({ icon, title, description, index }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <BlurContainer glowOnHover className="p-6 h-full">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyber-blue to-cyber-purple flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{description}</p>
      </BlurContainer>
    </motion.div>
  );
}
