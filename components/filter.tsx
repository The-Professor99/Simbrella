'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FormInputField, FormSelectField } from './auth/form-field';
import { SubmitButton } from './auth/submit-button';
import { createUrl } from '@/lib/utils';
import { routes } from '@/lib/routes';
import Modal from './modal';
import { FunnelIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const FilterForm = () => {
  const statusOptions = [
    { value: 'for_sale', label: 'For Sale' },
    { value: 'for_rent', label: 'For Rent' },
    { value: 'ready_to_build', label: 'Ready to build' },
    { value: 'new_community', label: 'New Community' },
  ];
  const typeOptions = [
    { value: 'apartment', label: 'Apartment' },
    { value: 'condo_townhome', label: 'Townhome Condo' },
    { value: 'condos', label: 'Condos' },
    { value: 'duplex_triplex', label: 'Duplex' },
    { value: 'farm', label: 'Farm' },
    { value: 'single_family', label: 'Single Family' },
  ];

  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const newParams = new URLSearchParams(searchParams.toString());

    ['location', 'status', 'type'].forEach((key) => {
      const value = formData.get(key)?.toString() || '';
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });

    router.push(createUrl(routes.listings.path, newParams));
  }

  const handleReset = () => {
    const newParams = new URLSearchParams(searchParams.toString());

    ['location', 'status', 'type'].forEach((key) => newParams.delete(key));

    router.push(createUrl(routes.listings.path, newParams));
  };

  return (
    <form onSubmit={onSubmit}>
      <FormInputField
        name="location"
        label="Location"
        placeholder="Enter postal code or address to look for properties"
      />
      <FormSelectField
        name="status"
        label="Status"
        placeholder="Select property status"
      >
        {statusOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </FormSelectField>

      <FormSelectField
        name="type"
        label="Type"
        placeholder="Select property type"
      >
        {typeOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </FormSelectField>
      <div className="flex gap-4 mt-6">
        <button
          type="button"
          onClick={handleReset}
          className="py-2.5 px-4 w-full inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:border-neutral-800 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
        >
          Reset
        </button>
        <SubmitButton>Filter</SubmitButton>
      </div>
    </form>
  );
};

export const Filter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex justify-end">
        <button
          className="px-4 py-2 flex bg-blue-600 text-white rounded-md"
          onClick={openModal}
        >
          Filter <FunnelIcon className="h-5 w-5 ml-2" />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Filter">
        <FilterForm />
      </Modal>
    </>
  );
};
