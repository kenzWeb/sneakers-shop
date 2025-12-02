'use client';

import { BlurContainer } from '@/components/ui';
import { CheckoutInput } from './CheckoutInput';

interface PaymentFormProps {
  data: PaymentData;
  onChange: (data: PaymentData) => void;
}

export interface PaymentData {
  cardNumber: string;
  cardName: string;
  expiry: string;
  cvv: string;
}

export function PaymentForm({ data, onChange }: PaymentFormProps) {
  const update = (field: keyof PaymentData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const formatCardNumber = (value: string) => {
    return value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim().slice(0, 19);
  };

  const formatExpiry = (value: string) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').slice(0, 5);
  };

  return (
    <BlurContainer className="p-6">
      <h3 className="text-xl font-bold text-white mb-6">Payment Details</h3>
      <div className="space-y-4">
        <CheckoutInput
          label="Card Number"
          value={data.cardNumber}
          onChange={(e) => update('cardNumber', formatCardNumber(e.target.value))}
          placeholder="4242 4242 4242 4242"
          maxLength={19}
        />
        <CheckoutInput
          label="Name on Card"
          value={data.cardName}
          onChange={(e) => update('cardName', e.target.value)}
          placeholder="JOHN DOE"
        />
        <div className="grid grid-cols-2 gap-4">
          <CheckoutInput
            label="Expiry Date"
            value={data.expiry}
            onChange={(e) => update('expiry', formatExpiry(e.target.value))}
            placeholder="MM/YY"
            maxLength={5}
          />
          <CheckoutInput
            label="CVV"
            type="password"
            value={data.cvv}
            onChange={(e) => update('cvv', e.target.value.replace(/\D/g, '').slice(0, 4))}
            placeholder="•••"
            maxLength={4}
          />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-white/40 text-xs">
        <LockIcon />
        <span>Your payment is secured with 256-bit encryption</span>
      </div>
    </BlurContainer>
  );
}

function LockIcon() {
  return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
}
