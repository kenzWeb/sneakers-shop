'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { sneakers } from '@/data';
import { ProductGallery, ProductInfo, AddToCartSection, ProductDetails } from '@/components/product';
import { SneakerGrid } from '@/components/sneaker';

export default function ProductPage() {
  const { id } = useParams();
  const sneaker = sneakers.find((s) => s.id === id);

  if (!sneaker) {
    return <NotFound />;
  }

  const related = sneakers.filter((s) => s.brand === sneaker.brand && s.id !== sneaker.id).slice(0, 4);

  return (
    <div className="min-h-screen py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb name={sneaker.name} />

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <ProductGallery image={sneaker.image} name={sneaker.name} />
          <div className="space-y-8">
            <ProductInfo sneaker={sneaker} />
            <AddToCartSection sneaker={sneaker} />
            <ProductDetails sneaker={sneaker} />
          </div>
        </div>

        {related.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">You May Also Like</h2>
            <SneakerGrid sneakers={related} />
          </section>
        )}
      </div>
    </div>
  );
}

function Breadcrumb({ name }: { name: string }) {
  return (
    <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8 font-mono text-sm">
      <Link href="/" className="text-white/40 hover:text-white">Home</Link>
      <span className="text-white/20 mx-2">/</span>
      <Link href="/catalog" className="text-white/40 hover:text-white">Catalog</Link>
      <span className="text-white/20 mx-2">/</span>
      <span className="text-white">{name}</span>
    </motion.nav>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Sneaker Not Found</h1>
        <Link href="/catalog" className="text-cyber-blue hover:underline">Back to Catalog</Link>
      </div>
    </div>
  );
}
