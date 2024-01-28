import type { Metadata, ResolvingMetadata } from 'next';

import { ColorsFilteredPosts } from '@/components/common/filtered-posts';
import { PeachFuzz } from "./peach-fuzz"
import site from '@/config/site';
import { getAllColorsPosts } from '@/lib/mdx';
import { cn } from '@/lib/utils';
import { Avegra } from '../fonts';
import Colors from '@/components/color/colors';
import ColorPalette from '@/components/color/Palette';

export const runtime = 'edge';
const title = 'Colors';
const description =
  'My personal website and blog where I share my thoughts on various topics including tutorials, notes, and personal experiences. As a full-stack developer from Hong Kong, I started learning web development as a hobby in December 2023. I use Next.js for building websites, GitHub for code hosting, and Vercel for deployment. Explore my site to learn more about my Journey and discover some of the web development resources that have inspired me.';

export const generateMetadata = async (
  _: ColorsPageProps,
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

type ColorsPageProps = {
  params: Record<string, never>;
  searchParams: Record<string, never>;
};


const AssetsPage = () => {
  const posts = getAllColorsPosts();

  return (
    <div className="mx-auto mt-40 max-w-5xl px-6">
      <h1 className={cn(Avegra.className, "text-center text-6xl sm:text-8xl")}>
        The Colors.
      </h1>
      <p className=' text-center text-sm font-light'>
        Find the perfect color idea and resources for any project.
      </p>
      <hr className="bg-aired rounded-full mb-10 mx-auto my-6 h-1 w-6 border-0"></hr>
      <Colors />
      <ColorsFilteredPosts posts={posts} />
      <PeachFuzz />
      <ColorPalette />
    </div>
  );
};

export default AssetsPage;
