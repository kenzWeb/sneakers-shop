'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

export function HeroSneaker() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), {
    stiffness: 100,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="relative w-80 h-80 md:w-[400px] md:h-[400px] mx-auto"
    >
      <div className="absolute inset-0 bg-gradient-radial from-cyber-blue/30 via-cyber-purple/20 to-transparent rounded-full blur-3xl" />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-full h-full"
      >
        <Image
          src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800"
          alt="Featured Sneaker"
          fill
          className="object-contain drop-shadow-2xl"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
