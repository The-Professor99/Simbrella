// import { Suspense } from 'react';
// import { VariantSelector } from './variant-selector';
import Price from '../price';
import { Property } from '@/lib/types';
import Prose from '../prose';
import { format_text } from '@/lib/utils';
import { DescriptionTags } from './description-tags';
import { AddressComponent } from './address-component';
import { HeartIcon } from '@heroicons/react/24/outline';

export function PropertyDescription({
  property,
  currencyCode,
}: {
  property: Property;
  currencyCode: string;
}) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">
          {format_text(
            property.description.sub_type || property.description.type || ''
          )}
        </h1>

        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price amount={property.list_price} currencyCode={currencyCode} />
        </div>
      </div>
      <AddressComponent address={property.location.address} />
      <DescriptionTags description={property.description} />

      {property.description.text ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          text={property.description.text}
        />
      ) : null}
      <button
        type="button"
        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        <HeartIcon className="flex-shrink-0 size-6" /> Add to Favourites
      </button>
    </>
  );
}
