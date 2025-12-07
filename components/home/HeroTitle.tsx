'use client';

import { motion } from 'framer-motion';

export function HeroTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-8"
    >
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
        <span className="text-white">FUTURE OF</span>
        <br />
        <span className="text-gradient">STREETWEAR</span>
      </h1>
      <p className="mt-6 text-white/50 font-mono text-sm md:text-base max-w-md mx-auto">
        Limited editions. Exclusive drops. Curated for the culture.
      </p>
    </motion.div>
  );
}
