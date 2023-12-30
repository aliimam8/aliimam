import Link from '@/components/common/Link';
import Tag from '@/components/mdx/Tag';
import { getAllTags } from '@/utils/contentlayer';
import { slug } from 'github-slugger'
import { allAssetsPosts } from 'contentlayer/generated';

export default function Tags() {
  const tags = getAllTags(allAssetsPosts);
  const sortedTags = Object.keys(tags);

  return (
    <div className='mx-auto mt-20 max-w-3xl px-4 sm:px-6 md:max-w-7xl'>
      <div className="space-y-2 rounded-lg pt-8 pb-3 md:space-y-5">
      <h1 className="my-10  text-center text-2xl font-bold sm:text-4xl">
          Tags
          <hr className="bg-aired rounded-full mx-auto my-4 h-1 w-6 border-0"></hr>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {Object.keys(tags).length === 0 && 'No tags found.'}
        {sortedTags.map((t) => {
          return (
            <div key={t} className="mb-5 flex items-center">
              <Tag text={t} />
              <Link
                href={`/tags/${slug(t)}`}
                className="text-xs uppercase text-gray-600 dark:text-gray-300"
              >
                {` (${tags[t]})`}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}