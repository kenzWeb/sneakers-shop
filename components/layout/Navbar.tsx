'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { NavActions } from './NavActions';
import { BurgerMenu } from './BurgerMenu';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const { scrollY } = useScroll();
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 20]);
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(5, 5, 5, 0)', 'rgba(5, 5, 5, 0.8)']
  );

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
      style={{
        backgroundColor,
        backdropFilter: `blur(${backdropBlur}px)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <NavLinks />
          <div className="flex items-center gap-4">
            <NavActions />
            <BurgerMenu />
          </div>
        </div>
      </div>
      <MobileMenu />
    </motion.header>
  );
}
