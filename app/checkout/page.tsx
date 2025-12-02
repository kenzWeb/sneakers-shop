'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShippingForm, PaymentForm, OrderSummary, type ShippingData, type PaymentData } from '@/components/checkout';
import { GlassButton } from '@/components/ui';
import { useCartStore } from '@/stores';

const initialShipping: ShippingData = {
  firstName: '', lastName: '', email: '', phone: '',
  address: '', city: '', state: '', zip: '', country: '',
};

const initialPayment: PaymentData = {
  cardNumber: '', cardName: '', expiry: '', cvv: '',
};

export default function CheckoutPage() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const [shipping, setShipping] = useState<ShippingData>(initialShipping);
  const [payment, setPayment] = useState<PaymentData>(initialPayment);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async () => {
    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    clearCart();
    router.push('/order/success');
  };

  if (items.length === 0) {
    return <EmptyCheckout />;
  }

  return (
    <div className="min-h-screen py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-4xl font-bold text-white">Checkout</h1>
          <p className="text-white/50 font-mono text-sm mt-1">Complete your purchase</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <ShippingForm data={shipping} onChange={setShipping} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <PaymentForm data={payment} onChange={setPayment} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <GlassButton fullWidth onClick={handleSubmit} disabled={isProcessing}>
                {isProcessing ? 'Processing...' : 'Complete Order'}
              </GlassButton>
            </motion.div>
          </div>
          <div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="sticky top-24">
              <OrderSummary />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyCheckout() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Your cart is empty</h1>
        <Link href="/catalog"><GlassButton>Continue Shopping</GlassButton></Link>
      </div>
    </div>
  );
}
