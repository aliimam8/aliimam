import type { Metadata, ResolvingMetadata } from 'next';

import { ColorsFilteredPosts } from '@/components/common/filtered-posts';
import PageTitle from '@/components/common/page-title';
import site from '@/config/site';
import { getAllColorsPosts } from '@/lib/mdx';
import { cn } from '@/lib/utils';
import { Avegra } from '../fonts';
import Colors from '@/components/color/colors';

export const runtime = 'edge';
const title = 'Assets';
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
      
      <PageTitle
        title="Download Free Assets"
        description={`I started uploading assets in December 2023, mainly about graphic Design and
        sharing knowledge. I have uploaded a total of ${posts.length} assets on
        my Assets. All freely available for both your commercial and personal projects. 
        You can search for assets by title in the search box below.`}
      />
      <ColorsFilteredPosts posts={posts} />
      <p className='mt-40 text-center my-3 text-xs text-slate-600 dark:text-slate-400 lg:text-md tracking-widest uppercase font-light'> Take a look at what’s new right now.
       </p> 
       <h1 className={cn(Avegra.className, "text-center text-6xl sm:text-8xl")}> 
       The Colors 
       </h1> 
       <hr className="bg-aired rounded-full mx-auto my-4 h-1 w-6 border-0"></hr>
      <Colors />
    </div>
  );
};

export default AssetsPage;
