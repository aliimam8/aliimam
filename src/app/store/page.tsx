/* eslint-disable react/no-unescaped-entities */

export const runtime = 'edge';

export const metadata = {
  title: 'Store',
  description: 'Search for products in the store.'
};

export default async function Store({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  
  return (
    <main>
      <h1 className="my-10 px-8 text-center text-sm font-semibold uppercase tracking-[.3em] text-aired">
        AI Store. The best way to buy the products you love.
      </h1>
      <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        
      </div>
    </main>
  );
}
