'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BlurContainer } from '@/components/ui';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  index: number;
}

export function TeamMember({ name, role, image, index }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <BlurContainer glowOnHover className="overflow-hidden">
        <div className="relative h-64">
          <Image src={image} alt={name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
        </div>
        <div className="p-4">
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-cyber-blue font-mono text-sm">{role}</p>
        </div>
      </BlurContainer>
    </motion.div>
  );
}
