import type { Metadata, ResolvingMetadata } from 'next';

import GalleryCards from '../contentmdx/gallery-cards';

import site from '@/config/site';
import { getAllGalleryPosts } from '@/lib/mdx';
import Link from 'next/link';

export const runtime = 'edge';
const title = 'Gallery';
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
      canonical: `${site.url}/gallery`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/gallery`,
      title,
      description
    }
  };
};

const GalleryPage = () => {
  const posts = getAllGalleryPosts();

  return (
    <div className="mx-auto mt-20 max-w-5xl px-6">
      
      <h1 className="text-center text-sm font-semibold uppercase tracking-[.3em] text-slate-400 ">
         Where Every Image Unveils a Story!
        </h1>
      <GalleryCards posts={posts} />
    </div>
  );
};

export default GalleryPage;
