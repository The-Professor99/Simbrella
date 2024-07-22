import { AgentDetails } from '@/components/property/agent-details';
import { Gallery } from '@/components/property/gallery';
import { PropertyDescription } from '@/components/property/property-description';
import { getProperty } from '@/lib/api';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export default async function Page({
  params,
}: {
  params: { property_id: string };
}) {
  const currencyCode = 'usd';
  const property = await getProperty(params.property_id);
  if (!property) return notFound();

  const photos = property.photos?.slice(0, 5) || [];
  const [agent, office] = property.consumer_advertisers;
  return (
    <div className="mx-auto max-w-screen-2xl px-4">
      <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
        <div className="h-full w-full basis-full lg:basis-4/6">
          <Suspense
            fallback={
              <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
            }
          >
            <Gallery
              images={photos.map((image) => ({
                src: image.href,
                altText: image.type || '',
              }))}
            />
          </Suspense>
        </div>

        <div className="basis-full lg:basis-2/6">
          <PropertyDescription
            property={property}
            currencyCode={currencyCode}
          />
        </div>
      </div>
      <AgentDetails agent={agent} office={office} />
    </div>
  );
}
