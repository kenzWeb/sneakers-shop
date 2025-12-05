'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CardImageProps {
  src: string;
  alt: string;
}

export function CardImage({ src, alt }: CardImageProps) {
  return (
    <div className="relative h-48 w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-radial from-cyber-blue/20 via-transparent to-transparent opacity-50" />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="relative h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </div>
  );
}
