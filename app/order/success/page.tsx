'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlurContainer, GlassButton } from '@/components/ui';
import confetti from '@/lib/confetti';

export default function OrderSuccessPage() {
  const [orderNumber] = useState(() => `KL${Date.now().toString(36).toUpperCase()}`);

  useEffect(() => {
    confetti();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-24 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg w-full"
      >
        <BlurContainer className="p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple flex items-center justify-center"
          >
            <CheckIcon />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-white mb-2"
          >
            Order Confirmed!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/50 mb-6"
          >
            Thank you for your purchase. Your kicks are on the way!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 rounded-xl p-4 mb-6"
          >
            <p className="text-white/40 text-sm mb-1">Order Number</p>
            <p className="text-gradient text-xl font-mono font-bold">{orderNumber}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4 text-left mb-8"
          >
            <TimelineItem icon="📦" title="Order Placed" description="We've received your order" done />
            <TimelineItem icon="✅" title="Confirmed" description="Payment verified" done />
            <TimelineItem icon="🚚" title="Shipping Soon" description="Preparing for dispatch" />
            <TimelineItem icon="🎉" title="Delivered" description="Estimated 2-3 business days" />
          </motion.div>

          <div className="flex gap-3">
            <Link href="/catalog" className="flex-1">
              <GlassButton variant="secondary" fullWidth>Continue Shopping</GlassButton>
            </Link>
            <Link href="/" className="flex-1">
              <GlassButton fullWidth>Go Home</GlassButton>
            </Link>
          </div>
        </BlurContainer>
      </motion.div>
    </div>
  );
}

function TimelineItem({ icon, title, description, done }: { icon: string; title: string; description: string; done?: boolean }) {
  return (
    <div className="flex gap-3">
      <span className="text-xl">{icon}</span>
      <div>
        <p className={`font-medium ${done ? 'text-white' : 'text-white/40'}`}>{title}</p>
        <p className="text-white/40 text-sm">{description}</p>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}
