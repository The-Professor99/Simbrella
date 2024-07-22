import { SearchHomeDescription } from '@/lib/types';

const DescriptionTag = ({ text }: { text: string }) => (
  <span className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 cursor-default ring-2 ring-blue-600">
    {text}
  </span>
);

export function DescriptionTags({
  description,
}: {
  description: SearchHomeDescription;
}) {
  return (
    <dl className="mb-8">
      <dt className="mb-4 text-sm uppercase tracking-wide">Features</dt>
      <dd className="flex flex-wrap gap-3">
        <DescriptionTag text={`${description.beds} Bedrooms`} />
        <DescriptionTag text={`${description.baths} Bathrooms`} />
        <DescriptionTag text={`${description.units || 0} Units`} />
      </dd>
    </dl>
  );
}
