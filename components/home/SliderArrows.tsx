'use client';

import { IconButton } from '@/components/ui';

interface SliderArrowsProps {
  onPrev: () => void;
  onNext: () => void;
}

export function SliderArrows({ onPrev, onNext }: SliderArrowsProps) {
  return (
    <div className="flex gap-2">
      <IconButton onClick={onPrev} variant="glass">
        <ChevronLeftIcon />
      </IconButton>
      <IconButton onClick={onNext} variant="glass">
        <ChevronRightIcon />
      </IconButton>
    </div>
  );
}

function ChevronLeftIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
