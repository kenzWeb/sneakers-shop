'use client';

import { motion } from 'framer-motion';
import type { ReactNode, MouseEvent } from 'react';

interface IconButtonProps {
  children: ReactNode;
  variant?: 'glass' | 'solid' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isActive?: boolean;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  'aria-label'?: string;
}

const sizeStyles = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

const variantStyles = {
  glass: 'bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10',
  solid: 'bg-gradient-to-r from-cyber-blue to-cyber-purple hover:opacity-90',
  ghost: 'bg-transparent hover:bg-white/5',
};

export function IconButton({
  children,
  variant = 'glass',
  size = 'md',
  isActive = false,
  className = '',
  onClick,
  disabled,
  'aria-label': ariaLabel,
}: IconButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${isActive ? 'border-cyber-blue/50 shadow-[0_0_15px_rgba(0,240,255,0.2)]' : ''}
        rounded-full flex items-center justify-center
        text-white/80 hover:text-white
        transition-colors duration-200
        cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
