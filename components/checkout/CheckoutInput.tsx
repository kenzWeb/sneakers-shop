'use client';

import type { InputHTMLAttributes } from 'react';

interface CheckoutInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function CheckoutInput({ label, error, className = '', ...props }: CheckoutInputProps) {
  return (
    <div className={className}>
      <label className="block text-white/60 text-sm font-mono mb-2">{label}</label>
      <input
        {...props}
        className={`
          w-full px-4 py-3 rounded-xl
          bg-white/5 border transition-all duration-200
          text-white placeholder:text-white/30
          focus:outline-none focus:border-cyber-blue/50 focus:shadow-[0_0_20px_rgba(0,240,255,0.1)]
          ${error ? 'border-red-500/50' : 'border-white/10'}
        `}
      />
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
