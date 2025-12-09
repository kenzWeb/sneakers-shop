'use client';

import { motion } from 'framer-motion';

interface GradientOrbProps {
  color?: 'cyan' | 'purple' | 'pink';
  size?: 'sm' | 'md' | 'lg';
  position?: { top?: string; left?: string; right?: string; bottom?: string };
  delay?: number;
}

const colorVariants = {
  cyan: 'bg-cyber-blue/30',
  purple: 'bg-cyber-purple/30',
  pink: 'bg-neon-pink/20',
};

const sizeVariants = {
  sm: 'w-48 h-48',
  md: 'w-72 h-72',
  lg: 'w-96 h-96',
};

export function GradientOrb({
  color = 'cyan',
  size = 'md',
  position = {},
  delay = 0,
}: GradientOrbProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.1, 1],
        x: [0, 20, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className={`
        absolute rounded-full blur-3xl pointer-events-none
        ${colorVariants[color]}
        ${sizeVariants[size]}
      `}
      style={{
        top: position.top,
        left: position.left,
        right: position.right,
        bottom: position.bottom,
      }}
    />
  );
}
