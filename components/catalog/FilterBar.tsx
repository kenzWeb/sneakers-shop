'use client';

import { motion } from 'framer-motion';
import type { Brand, SortOption } from '@/types';
import { BlurContainer } from '@/components/ui';
import { FilterChip } from './FilterChip';
import { SortSelect } from './SortSelect';

const brands: Brand[] = ['Nike', 'Jordan', 'Adidas', 'Yeezy', 'New Balance', 'Puma'];

interface FilterBarProps {
  activeBrand: Brand | null;
  onBrandChange: (brand: Brand | null) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export function FilterBar({ activeBrand, onBrandChange, sortBy, onSortChange }: FilterBarProps) {
  return (
    <BlurContainer className="p-4 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-wrap gap-2"
        >
          <FilterChip
            label="All"
            isActive={activeBrand === null}
            onClick={() => onBrandChange(null)}
          />
          {brands.map((brand) => (
            <FilterChip
              key={brand}
              label={brand}
              isActive={activeBrand === brand}
              onClick={() => onBrandChange(brand)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <SortSelect value={sortBy} onChange={onSortChange} />
        </motion.div>
      </div>
    </BlurContainer>
  );
}
