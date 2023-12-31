import { type AssetsPost } from 'contentlayer/generated';

import Mdx from '@/components/mdx';
import { getHeadings } from '@/utils/get-headings';

type ContentProps = {
  post: AssetsPost;
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
    </div>
  );
};

export default Content;
