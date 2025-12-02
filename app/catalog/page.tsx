'use client';

import { useState } from 'react';
import type { Brand, SortOption } from '@/types';
import { sneakers } from '@/data';
import { useFilteredSneakers } from '@/hooks';
import { SneakerGrid } from '@/components/sneaker';
import { FilterBar, CatalogHeader } from '@/components/catalog';

export default function CatalogPage() {
  const [activeBrand, setActiveBrand] = useState<Brand | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  const filteredSneakers = useFilteredSneakers({
    sneakers,
    brand: activeBrand,
    sortBy,
  });

  return (
    <div className="min-h-screen py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <CatalogHeader count={filteredSneakers.length} />
        <FilterBar
          activeBrand={activeBrand}
          onBrandChange={setActiveBrand}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
        <SneakerGrid sneakers={filteredSneakers} />
      </div>
    </div>
  );
}
