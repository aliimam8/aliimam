'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter, useSearchParams } from 'next/navigation';
import { createUrl } from 'src/lib/utils';
import { Icons } from 'src/components/icons';
import { Button } from 'src/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from 'src/components/ui/dialog';

export function PSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set('q', search.value);
    } else {
      newParams.delete('q');
    }

    router.push(createUrl('/store', newParams));
  }

  return (
    <form onSubmit={onSubmit} className=" relative w-full">
      <input
        key={searchParams?.get('q')}
        type="text"
        name="search"
        placeholder="Search for products..."
        autoComplete="off"
        defaultValue={searchParams?.get('q') || ''}
        className="placeholder:text-neutral-500 dark:placeholder:text-neutral-400 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm dark:border-slate-800"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4" />
      </div>
    </form>
  );
}

export function DSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set('q', search.value);
    } else {
      newParams.delete('q');
    }

    router.push(createUrl('/store', newParams));
  }

  return (
    <div className='hidden md:block'>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm" className="flex ">
          <Icons.search strokeWidth={1.5} className="w-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-lg">
          <form onSubmit={onSubmit} className="relative hidden w-auto md:block">
            <input
              key={searchParams?.get('q')}
              type="text"
              name="search"
              placeholder="Search for products..."
              autoComplete="off"
              defaultValue={searchParams?.get('q') || ''}
              className="w-full rounded-lg border border-slate-200 px-4 py-4 text-sm placeholder:text-slate-600 dark:border-slate-800 dark:placeholder:text-slate-400"
            />
            <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
            <Icons.search strokeWidth={1.5} className="w-5 mx-2" />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
