'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="border-neutral-200 text-center mt-40 mx-auto my-4 flex max-w-xl flex-col rounded-3xl border p-8 border-slate-200 dark:border-slate-800 md:p-12">
      <h2 className="text-2xl font-bold">Oh no!</h2>
      <p className="my-4 text-sm">
        There was an issue with our storefront. This could be a temporary issue, please try your
        action again.
      </p>
      <button
        className="bg-aired mx-auto mt-4 flex w-auto items-center justify-center rounded-full p-2 tracking-wide hover:opacity-90"
        onClick={() => reset()}
      >
        <p className="px-6 font-medium text-sm">
        Try Again
        </p>
      </button>
    </div>
  );
}
