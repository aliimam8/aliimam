import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function CloseCart({ className }: { className?: string }) {
  return (
    <div className="border-neutral-200 dark:border-neutral-700 relative flex h-11 w-11 items-center justify-center rounded-md border text-black transition-colors dark:text-white">
      <XMarkIcon className={clsx('h-6 transition-all ease-in-out hover:scale-110 ', className)} />
    </div>
  );
}
