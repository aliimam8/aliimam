import { type AssetsPost } from 'contentlayer/generated';

import Mdx from '@/components/mdx';
import { getHeadings } from '@/utils/get-headings';

import LikeButton from 'src/components/ui/like-button';

type ContentProps = {
  post: AssetsPost;
  slug: string;
};

const Content = (props: ContentProps) => {
  const { post, slug } = props;
  const headings = getHeadings(post.body.raw);

  return (
    <div className="mt-8 flex flex-col justify-between lg:flex-row">
      <article className="w-full">
        <Mdx code={post.body.code} />
      </article>
    </div>
  );
};

export default Content;
