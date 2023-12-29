import type { Metadata, ResolvingMetadata } from 'next';

import AssetsCards from './assets-cards';

import site from '@/config/site';
import { getAllAssetsPosts } from '@/lib/mdx';

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
    <div className="mx-auto mt-10 max-w-6xl px-6">
      <h1 className="my-4 mt-20 text-center text-2xl font-bold sm:text-4xl">
      Burn Your Design
      </h1>
      <h1 className="mb-8 text-center text-sm font-semibold uppercase tracking-[.3em] text-slate-400 ">
        Download Free Assets
      </h1>
      <AssetsCards posts={posts} />
    </div>
  );
};

export default AssetsPage;
