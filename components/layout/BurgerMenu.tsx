'use client';

import { motion } from 'framer-motion';
import { useUIStore } from '@/stores';

export function BurgerMenu() {
  const isMenuOpen = useUIStore((state) => state.isMenuOpen);
  const toggleMenu = useUIStore((state) => state.toggleMenu);

  return (
    <button
      onClick={toggleMenu}
      className="md:hidden relative w-6 h-5 flex flex-col justify-between cursor-pointer"
      aria-label="Toggle menu"
    >
      <motion.span
        animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        className="w-full h-0.5 bg-white origin-left"
      />
      <motion.span
        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
        className="w-full h-0.5 bg-white"
      />
      <motion.span
        animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        className="w-full h-0.5 bg-white origin-left"
      />
    </button>
  );
}
