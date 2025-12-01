'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/catalog', label: 'Catalog' },
  { href: '/drops', label: 'New Drops' },
  { href: '/about', label: 'About' },
];

export function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <motion.div key={link.href} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
          <Link
            href={link.href}
            className="font-mono text-sm text-white/60 hover:text-white transition-colors uppercase tracking-wider"
          >
            {link.label}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}
