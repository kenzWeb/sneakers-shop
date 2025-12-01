'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type BadgeVariant = 'cyan' | 'purple' | 'pink' | 'gradient';

interface NeonBadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  pulse?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  cyan: 'bg-cyber-blue/10 text-cyber-blue shadow-[inset_0_0_12px_rgba(0,240,255,0.3)]',
  purple: 'bg-cyber-purple/10 text-cyber-purple shadow-[inset_0_0_12px_rgba(168,85,247,0.3)]',
  pink: 'bg-neon-pink/10 text-neon-pink shadow-[inset_0_0_12px_rgba(255,0,255,0.3)]',
  gradient: 'bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 text-white',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-3 py-1 text-xs',
};

export function NeonBadge({ children, variant = 'cyan', size = 'sm', pulse = false }: NeonBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`
        inline-flex items-center justify-center
        font-mono font-medium uppercase tracking-wider
        rounded-full border border-white/10
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${pulse ? 'animate-pulse' : ''}
      `}
    >
      {children}
    </motion.span>
  );
}
