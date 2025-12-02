'use client';

import { motion } from 'framer-motion';

interface FilterChipProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function FilterChip({ label, isActive, onClick }: FilterChipProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider
        transition-all duration-200 cursor-pointer
        ${
          isActive
            ? 'bg-gradient-to-r from-cyber-blue to-cyber-purple text-white shadow-[0_0_20px_rgba(0,240,255,0.3)]'
            : 'bg-white/5 text-white/60 hover:text-white border border-white/10 hover:border-white/20'
        }
      `}
    >
      {label}
    </motion.button>
  );
}
