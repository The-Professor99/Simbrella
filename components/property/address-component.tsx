import { Address } from '@/lib/types';

export function AddressComponent({ address }: { address: Address }) {
  return (
    <div className="mb-8">
      <div className="mb-4 text-sm uppercase tracking-wide">Located at</div>
      <p className="italic">
        {address.line} - {address.city}, {address.state_code}.
      </p>
    </div>
  );
}
