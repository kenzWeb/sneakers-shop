'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { SneakerCard } from '@/components/sneaker';
import { SliderArrows } from './SliderArrows';
import { sneakers } from '@/data';

export function NewDrops() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const newSneakers = sneakers.filter((s) => s.isNew);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const scrollAmount = 320;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-cyber-blue font-mono text-sm uppercase tracking-widest mb-2">
              Fresh Releases
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">New Drops</h2>
          </motion.div>
          <SliderArrows onPrev={() => scroll('left')} onNext={() => scroll('right')} />
        </div>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {newSneakers.map((sneaker, index) => (
            <div key={sneaker.id} className="flex-shrink-0 w-72">
              <SneakerCard sneaker={sneaker} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
