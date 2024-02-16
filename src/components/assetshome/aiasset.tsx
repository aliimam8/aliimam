import type { Metadata, ResolvingMetadata } from 'next';

import AssetsCards from './assets-cards';

import site from '@/config/site';
import { getAllAssetsPosts } from '@/lib/mdx';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const runtime = 'edge';
const title = 'Assets';
const description =
  'My personal website and blog where I share my thoughts on various topics including tutorials, notes, and personal experiences. As a full-stack developer from Hong Kong, I started learning web development as a hobby in December 2023. I use Next.js for building websites, GitHub for code hosting, and Vercel for deployment. Explore my site to learn more about my Journey and discover some of the web development resources that have inspired me.';

type BlogPageProps = {
  params: Record<string, never>;
  searchParams: Record<string, never>;
};

export const generateMetadata = async (
  _: BlogPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {};

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/assets`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/assets`,
      title,
      description
    }
  };
};

const AssetsPage = () => {
  const posts = getAllAssetsPosts();

  return (
    <div className="mx-auto mt-10 max-w-5xl px-6">
      <div className="my-4 mt-20 flex flex-col items-center">
      <h3 className="inline-flex items-baseline pb-1 mt-6 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 dark:bg-clip-text dark:bg-gradient-to-r dark:from-slate-600 dark:via-slate-200 dark:to-slate-600">
        <span className="text-2xl md:text-4xl">Burn The Design</span>
      </h3>
      </div>
      <Link
        href="/assets"
      >
        <h1 className="mb-8 md:mb-0 text-center hover:text-aired text-sm font-semibold uppercase tracking-[.3em] text-slate-400 ">
          Download Free Assets
        </h1>
      </Link>
      <AssetsCards posts={posts} />
    </div>
  );
};

export default AssetsPage;
