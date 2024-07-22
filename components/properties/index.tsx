'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

import { getProperties } from '@/lib/api';
import { Property } from '@/lib/types';
import { PropertyCard, PropertyCardSkeleton } from './propertycard';
import ErrorUI from '../layout/error';
import { useSearchParams } from 'next/navigation';
import { extractFilterValues } from '@/lib/utils';

export default function Properties() {
  const currencyCode = 'usd';
  const [properties, setProperties] = useState<Property[]>([]);

  const searchParams = useSearchParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const observer = useRef<IntersectionObserver | null>(null);
  const limit = 10;
  const [page, setPage] = useState<number>(1);
  const [resetCount, setResetCount] = useState<number>(1);
  const filters = [
    { name: 'postal_code', isArray: false },
    { name: 'location', isArray: false },
    { name: 'status', isArray: true },
    { name: 'type', isArray: true },
  ];

  useEffect(() => {
    setProperties([]);
  }, [searchParams]);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setError(false);
      try {
        const filterValues = extractFilterValues(searchParams, filters);
        const newProperties = await getProperties(page, limit, filterValues);
        setProperties((prev) => [...prev, ...newProperties]);
        if (newProperties.length === 0) setHasMore(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, [page, resetCount, searchParams]);

  const lastPropertyElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      {/* Handle Cases when no data is returned */}
      {!loading && !error && !properties.length ? (
        <div className="h-screen flex items-center justify-center">
          404 | No Data Found.
        </div>
      ) : null}

      {/* display data */}
      <section className="container mx-auto grid gap-4 py-4  sm:grid-cols-2 lg:grid-cols-3 ">
        {properties.map((property, index) => {
          return (
            <div
              key={property.property_id}
              ref={
                index === properties.length - 1 ? lastPropertyElementRef : null
              }
            >
              <PropertyCard
                item={property}
                currencyCode={currencyCode}
                key={property.property_id}
              />
            </div>
          );
        })}

        {/* Loading state */}
        {loading && (
          <>
            {Array.from(Array(limit).keys()).map((index) => (
              <div key={index}>
                <PropertyCardSkeleton />
              </div>
            ))}
          </>
        )}
      </section>

      {/* Handle Errors */}
      {error && (
        <ErrorUI resetAction={() => setResetCount((prev) => prev + 1)} />
      )}
    </>
  );
}
