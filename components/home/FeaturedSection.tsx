'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SneakerGrid } from '@/components/sneaker';
import { GlassButton } from '@/components/ui';
import { sneakers } from '@/data';

export function FeaturedSection() {
  const featuredSneakers = sneakers.slice(0, 4);

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-cyber-purple font-mono text-sm uppercase tracking-widest mb-2">
            Curated Selection
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Kicks</h2>
        </motion.div>

        <SneakerGrid sneakers={featuredSneakers} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/catalog">
            <GlassButton variant="secondary" size="lg">
              View All Collection
            </GlassButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
