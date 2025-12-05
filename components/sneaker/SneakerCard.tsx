'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Sneaker } from '@/types';
import { BlurContainer } from '@/components/ui';
import { CardImage } from './CardImage';
import { CardInfo } from './CardInfo';
import { CardBadges } from './CardBadges';
import { CardActions } from './CardActions';

interface SneakerCardProps {
  sneaker: Sneaker;
  index?: number;
}

export function SneakerCard({ sneaker, index = 0 }: SneakerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      layout
    >
      <Link href={`/sneaker/${sneaker.id}`}>
        <BlurContainer
          glowOnHover
          className="group relative overflow-hidden cursor-pointer"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <CardBadges
            isNew={sneaker.isNew}
            isLimited={sneaker.isLimited}
            isSoldOut={sneaker.isSoldOut}
          />
          <CardActions sneaker={sneaker} />
          <CardImage src={sneaker.image} alt={sneaker.name} />
          <CardInfo sneaker={sneaker} />
        </BlurContainer>
      </Link>
    </motion.div>
  );
}
