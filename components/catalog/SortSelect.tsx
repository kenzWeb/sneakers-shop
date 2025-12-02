'use client';

import type { SortOption } from '@/types';

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const options: { value: SortOption; label: string }[] = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name A-Z' },
];

export function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as SortOption)}
      className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 font-mono text-sm text-white/80 outline-none focus:border-cyber-blue/50 cursor-pointer"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} className="bg-dark">
          {option.label}
        </option>
      ))}
    </select>
  );
}
