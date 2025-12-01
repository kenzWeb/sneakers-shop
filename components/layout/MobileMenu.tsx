'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useUIStore } from '@/stores';

const links = [
  { href: '/', label: 'Home' },
  { href: '/catalog', label: 'Catalog' },
  { href: '/drops', label: 'New Drops' },
  { href: '/about', label: 'About' },
];

export function MobileMenu() {
  const isMenuOpen = useUIStore((state) => state.isMenuOpen);
  const setMenuOpen = useUIStore((state) => state.setMenuOpen);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 glass p-6 md:hidden"
        >
          <nav className="flex flex-col gap-4">
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-lg text-white/80 hover:text-white uppercase tracking-wider block py-2"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
