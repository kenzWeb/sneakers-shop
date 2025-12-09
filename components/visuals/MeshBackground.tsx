'use client';

import { GradientOrb } from './GradientOrb';

export function MeshBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <GradientOrb
        color="cyan"
        size="lg"
        position={{ top: '-10%', left: '-5%' }}
        delay={0}
      />
      <GradientOrb
        color="purple"
        size="md"
        position={{ top: '30%', right: '-10%' }}
        delay={2}
      />
      <GradientOrb
        color="pink"
        size="sm"
        position={{ bottom: '20%', left: '30%' }}
        delay={4}
      />
      <GradientOrb
        color="cyan"
        size="sm"
        position={{ bottom: '-5%', right: '20%' }}
        delay={3}
      />
    </div>
  );
}
