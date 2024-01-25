import { type ColorsPost } from 'contentlayer/generated';

import Mdx from '@/components/mdx';
import { getHeadings } from '@/utils/get-headings';
import TableOfContents from './table-of-contents'

type ContentProps = {
  post: ColorsPost;
  slug: string;
};

const Content = (props: ContentProps) => {
  const { post, slug } = props;
  const headings = getHeadings(post.body.raw);

  return (
    <div className="flex flex-col mt-8 justify-between lg:flex-row">
      <article className="w-full">
        <Mdx code={post.body.code} />
      </article>
      <aside className='lg:min-w-[220px] lg:max-w-[220px]'>
        <div className='sticky top-24 mt-10'>
          {headings && headings.length > 0 && (
            <TableOfContents headings={headings} />
          )}
        </div>
      </aside>
    </div>
  );
};

export default Content;
