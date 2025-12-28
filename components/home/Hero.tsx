'use client';

import { HeroTitle } from './HeroTitle';
import { HeroSneaker } from './HeroSneaker';
import { HeroCTA } from './HeroCTA';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <HeroTitle />
      <HeroSneaker />
      <HeroCTA />
    </section>
  );
}
