'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BlurContainer } from '@/components/ui';

interface ProductGalleryProps {
  image: string;
  name: string;
}

export function ProductGallery({ image, name }: ProductGalleryProps) {
  return (
    <BlurContainer className="p-8 aspect-square relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-cyber-purple/20 via-cyber-blue/10 to-transparent" />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-full h-full"
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain drop-shadow-2xl"
          priority
        />
      </motion.div>
    </BlurContainer>
  );
}
