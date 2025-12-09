'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUIStore } from '@/stores';
import { sneakers } from '@/data';
import { BlurContainer, IconButton } from '@/components/ui';
import { SearchInput } from './SearchInput';
import { SearchResult } from './SearchResult';

export function SearchModal() {
  const isSearchOpen = useUIStore((state) => state.isSearchOpen);
  const toggleSearch = useUIStore((state) => state.toggleSearch);
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return sneakers.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.brand.toLowerCase().includes(q) ||
        s.colorway.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') toggleSearch();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggleSearch();
      }
    };

    if (isSearchOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isSearchOpen, toggleSearch]);

  useEffect(() => {
    if (!isSearchOpen) setQuery('');
  }, [isSearchOpen]);

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSearch}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
          >
            <BlurContainer className="p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/40 font-mono text-sm">Search</span>
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-white/5 rounded text-white/40 text-xs font-mono">ESC</kbd>
                  <IconButton variant="ghost" size="sm" onClick={toggleSearch}>
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
              <SearchInput value={query} onChange={setQuery} />
              <SearchResults results={results} query={query} onClose={toggleSearch} />
            </BlurContainer>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function SearchResults({ results, query, onClose }: { results: typeof sneakers; query: string; onClose: () => void }) {
  if (!query.trim()) {
    return (
      <div className="mt-4 text-center py-8 text-white/30">
        <p>Start typing to search...</p>
        <p className="text-xs mt-2">Try &quot;Nike&quot;, &quot;Jordan&quot;, or &quot;Dunk&quot;</p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="mt-4 text-center py-8 text-white/30">
        <p>No results found for &quot;{query}&quot;</p>
      </div>
    );
  }

  return (
    <div className="mt-4 max-h-80 overflow-y-auto space-y-1">
      {results.map((sneaker, i) => (
        <SearchResult key={sneaker.id} sneaker={sneaker} index={i} onClose={onClose} />
      ))}
    </div>
  );
}

function CloseIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
