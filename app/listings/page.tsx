import { Filter } from '@/components/filter';
import Properties from '@/components/properties';
import { Suspense } from 'react';

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <Filter />

      <Suspense fallback={null}>
        <Properties />
      </Suspense>
    </div>
  );
}
