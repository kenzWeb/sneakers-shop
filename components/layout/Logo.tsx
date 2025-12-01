'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="relative group">
      <motion.span
        className="font-mono text-xl font-bold tracking-tighter text-white"
        whileHover="glitch"
      >
        <span className="relative">
          KICKS
          <motion.span
            className="absolute inset-0 text-cyber-blue opacity-0 group-hover:opacity-100"
            variants={{
              glitch: {
                x: [0, -2, 2, -1, 0],
                opacity: [0, 1, 1, 1, 0],
                transition: { duration: 0.3 },
              },
            }}
          >
            KICKS
          </motion.span>
        </span>
        <span className="text-gradient">_LAB</span>
      </motion.span>
    </Link>
  );
}
