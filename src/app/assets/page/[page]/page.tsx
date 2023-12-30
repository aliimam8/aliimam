import type { Metadata, ResolvingMetadata } from 'next';

import { AssetsFilteredPosts } from '@/components/common/filtered-posts';
import PageTitle from '@/components/common/page-title';
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

const POSTS_PER_PAGE = 5

const AssetsPage = ({ params }: { params: { page: string } }) => {
  const posts = getAllAssetsPosts();
  const pageNumber = parseInt(params.page as string)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }


  return (
    <div className="mx-auto mt-40 max-w-4xl px-6">
      <PageTitle
        title="Assets"
        description={`I started uploading assets in December 2023, mainly about graphic Design and
        sharing knowledge. I have uploaded a total of ${posts.length} assets on
        my Assets. You can search for assets by title in the search box below.`}
      />
      <AssetsFilteredPosts posts={posts} />
    </div>
  );
};

export default AssetsPage;
