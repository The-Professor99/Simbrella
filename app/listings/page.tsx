import { Filter } from '@/components/filter';
import Properties from '@/components/properties';

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <Filter />
      <Properties />
    </div>
  );
}
