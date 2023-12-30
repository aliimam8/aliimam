import { slug } from 'github-slugger';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import PageTitle from '@/components/common/page-title';
import { AssetsFilteredPosts } from '@/components/common/filtered-posts';
import { allAssetsPosts } from 'contentlayer/generated';
import tagData from 'src/app/tag-data.json';
import { getAllAssetsPosts } from '@/lib/mdx';

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const paths = tagKeys.map((tag) => ({
    tag: encodeURI(tag)
  }));
  return paths;
};


export default function TagPage({ params }: { params: { tag: string } }) {
  const posts = getAllAssetsPosts();
  const tag = decodeURI(params.tag);
  // Capitalize first letter and convert space to dash

  const filteredPosts = allCoreContent(
    sortPosts(allAssetsPosts.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
  )
  
  return (
    <div className="mx-auto mt-40 max-w-4xl px-6">
      <PageTitle
        title="Assets"
        description={`I started uploading assets in December 2023, mainly about graphic Design and
      sharing knowledge. I have uploaded a total of ${posts.length} assets on
      my Assets. You can search for assets by title in the search box below.`}
      />
      <AssetsFilteredPosts posts={posts}/>
    </div>
  );
}
