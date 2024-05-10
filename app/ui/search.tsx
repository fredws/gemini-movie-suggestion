'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((input) => {
    const params = new URLSearchParams(searchParams);

    if (input) {
      params.set('query', input);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 1500);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <input
        className="w-full mx-6 bg-gray-900 rounded-full text-center text-white border border-gray-200 py-[7px] text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <MagnifyingGlassIcon className="absolute ms-6 left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}