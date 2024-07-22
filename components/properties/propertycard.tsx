import Image from 'next/image';
import Label from '../label';
import { format_text } from '@/lib/utils';
import Link from 'next/link';
import { Property } from '@/lib/types';
import { routes } from '@/lib/routes';
import clsx from 'clsx';

const skeleton = 'mb-3 animate-pulse rounded';
const items = 'bg-neutral-400 dark:bg-neutral-700';

export function PropertyCardSkeleton() {
  return (
    <div className="border-2 rounded-sm border-gray-700 p-6 min-w-72">
      <div className={clsx(skeleton, items, 'h-60 sm:h-96')} />
      <div className={clsx(skeleton, items, 'h-6 w-20 rounded-full')} />
      <div className={clsx(skeleton, items, 'h-5')} />
      <div className={clsx(skeleton, items, 'h-14 w-36')} />
    </div>
  );
}

export function PropertyCard({
  item,
  currencyCode,
}: {
  item: Property;
  currencyCode: string;
}) {
  return (
    <div className="flex max-w-lg flex-col space-y-6 overflow-hidden border-neutral-200 dark:border-neutral-800 border-2 hover:border-blue-600 rounded-lg p-6 shadow-md dark:bg-gray-900 dark:text-gray-100">
      <div>
        <div className="relative group">
          <Image
            src={item.primary_photo?.href || ''}
            alt={item.primary_photo?.type || 'property'}
            width={860}
            height={960}
            className="mb-4 h-60 w-full object-cover sm:h-96 dark:bg-gray-500 transition duration-300 ease-in-out group-hover:scale-105"
          />

          <Label
            title={format_text(
              item.description.sub_type || item.description.type || ''
            )}
            amount={item.list_price}
            currencyCode={currencyCode}
            position="bottom"
          />
        </div>

        <span className="mb-1 inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500">
          {format_text(item.status || '')}
        </span>
        <p className="text-sm dark:text-gray-400">
          {format_text(item.location.address.line || '')}
        </p>
      </div>
      <div className="flex flex-wrap justify-between">
        <Link
          href={`${routes.listing.path}/${item.property_id}`}
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          See Property
        </Link>
      </div>
    </div>
  );
}
