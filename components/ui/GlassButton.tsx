'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlassButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const variantStyles = {
  primary: 'bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold',
  secondary: 'bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10',
  ghost: 'bg-transparent text-white/70 hover:text-white hover:bg-white/5',
};

export function GlassButton({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  onClick,
  disabled,
  type = 'button',
}: GlassButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        rounded-xl font-mono uppercase tracking-wider
        transition-all duration-300
        cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
        ${variant === 'primary' ? 'shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:shadow-[0_0_40px_rgba(0,240,255,0.3)]' : ''}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
