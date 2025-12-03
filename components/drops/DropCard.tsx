'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { Sneaker } from '@/types';
import { BlurContainer, NeonBadge, GlassButton } from '@/components/ui';
import { CountdownTimer } from './CountdownTimer';

interface DropCardProps {
  sneaker: Sneaker;
  dropDate: string;
  index: number;
}

export function DropCard({ sneaker, dropDate, index }: DropCardProps) {
  const isDropped = new Date(dropDate) <= new Date();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
    >
      <BlurContainer glowOnHover className="overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div className="relative h-64 md:h-80">
            <div className="absolute inset-0 bg-gradient-radial from-cyber-purple/30 to-transparent" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative h-full"
            >
              <Image src={sneaker.image} alt={sneaker.name} fill className="object-contain" />
            </motion.div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex gap-2 mb-3">
              {sneaker.isLimited && <NeonBadge variant="purple">Limited</NeonBadge>}
              <NeonBadge variant={isDropped ? 'cyan' : 'pink'}>{isDropped ? 'Available' : 'Upcoming'}</NeonBadge>
            </div>
            <p className="text-white/50 font-mono text-sm">{sneaker.brand}</p>
            <h3 className="text-2xl font-bold text-white mb-2">{sneaker.name}</h3>
            <p className="text-white/40 mb-4">{sneaker.colorway}</p>
            <div className="text-3xl font-bold text-gradient mb-6">${sneaker.price}</div>
            {!isDropped && <CountdownTimer targetDate={dropDate} />}
            {isDropped && (
              <Link href={`/sneaker/${sneaker.id}`}>
                <GlassButton fullWidth>Shop Now</GlassButton>
              </Link>
            )}
          </div>
        </div>
      </BlurContainer>
    </motion.div>
  );
}
