'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { forwardRef, type ReactNode } from 'react';

interface BlurContainerProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  glowOnHover?: boolean;
  intensity?: 'low' | 'medium' | 'high';
}

const blurIntensity = {
  low: 'backdrop-blur-md',
  medium: 'backdrop-blur-xl',
  high: 'backdrop-blur-2xl',
};

export const BlurContainer = forwardRef<HTMLDivElement, BlurContainerProps>(
  ({ children, glowOnHover = false, intensity = 'medium', className = '', ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={`
          relative rounded-2xl
          bg-white/[0.03] ${blurIntensity[intensity]}
          border border-white/[0.08]
          ${glowOnHover ? 'hover:border-cyber-blue/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]' : ''}
          transition-all duration-300
          ${className}
        `}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

BlurContainer.displayName = 'BlurContainer';
