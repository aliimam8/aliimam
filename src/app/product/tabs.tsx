import { Icons } from 'src/components/icons';
import { Separator } from 'src/components/ui/seperator';

export default function Info() {
  return (
    <main className="max-w-3xls mx-auto mt-20 px-4 md:max-w-5xl">
      <div className="grid grid-cols-1 gap-y-8 rounded-3xl border border-slate-200 p-8 dark:border-slate-800 md:grid-cols-3">
        <div className="flex items-start gap-6 px-4">
          <div>
            <Icons.truck strokeWidth={1} className="mb-2 h-6" />
            <span className="font-semibold">Fast delivery</span>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
              Your package will arrive in 3-5 business days at your pick up location or in the
              comfort of your home.
            </p>
          </div>
          <Separator className="hidden md:block" orientation="vertical" />
        </div>

        <Separator className="block md:hidden" />
        <div className="flex items-start gap-6 px-4">
          <div>
            <Icons.shuffle strokeWidth={1} className="mb-2 h-6" />
            <span className="font-semibold">Simple exchanges</span>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
              Is the fit not quite right? No worries - we&apos;ll exchange your product for a new
              one.
            </p>
          </div>
          <Separator className="hidden md:block" orientation="vertical" />
        </div>

        <Separator className="block md:hidden" />
        <div className="flex items-start px-4">
          <div>
            <Icons.undo2 strokeWidth={1} className="mb-2 h-6" />
            <span className="font-semibold">Easy returns</span>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
              Just return your product and we&apos;ll refund your money. No questions asked –
              we&apos;ll do our best to make sure your return is hassle-free.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
