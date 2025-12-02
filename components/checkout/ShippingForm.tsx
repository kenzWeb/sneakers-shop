'use client';

import { BlurContainer } from '@/components/ui';
import { CheckoutInput } from './CheckoutInput';

interface ShippingFormProps {
  data: ShippingData;
  onChange: (data: ShippingData) => void;
}

export interface ShippingData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export function ShippingForm({ data, onChange }: ShippingFormProps) {
  const update = (field: keyof ShippingData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <BlurContainer className="p-6">
      <h3 className="text-xl font-bold text-white mb-6">Shipping Information</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <CheckoutInput label="First Name" value={data.firstName} onChange={(e) => update('firstName', e.target.value)} placeholder="John" />
        <CheckoutInput label="Last Name" value={data.lastName} onChange={(e) => update('lastName', e.target.value)} placeholder="Doe" />
        <CheckoutInput label="Email" type="email" value={data.email} onChange={(e) => update('email', e.target.value)} placeholder="john@example.com" className="sm:col-span-2" />
        <CheckoutInput label="Phone" type="tel" value={data.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+1 (555) 000-0000" className="sm:col-span-2" />
        <CheckoutInput label="Address" value={data.address} onChange={(e) => update('address', e.target.value)} placeholder="123 Street Name" className="sm:col-span-2" />
        <CheckoutInput label="City" value={data.city} onChange={(e) => update('city', e.target.value)} placeholder="New York" />
        <CheckoutInput label="State" value={data.state} onChange={(e) => update('state', e.target.value)} placeholder="NY" />
        <CheckoutInput label="ZIP Code" value={data.zip} onChange={(e) => update('zip', e.target.value)} placeholder="10001" />
        <CheckoutInput label="Country" value={data.country} onChange={(e) => update('country', e.target.value)} placeholder="United States" />
      </div>
    </BlurContainer>
  );
}
