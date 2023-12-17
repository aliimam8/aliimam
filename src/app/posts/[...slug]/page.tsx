import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import ImageZoom from '@/components/common/image-zoom';

import { Mdx } from '@/components/common/mdx-components';
import LikeButton from '@/components/ui/like-button'

import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon } from '@radix-ui/react-icons';

import { cn, formatDate } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/seperator';
import { MdxPager } from '@/components/common/mdx-pager';

interface PostPageProps {
  params: {
    slug: string[];
  };
}

// eslint-disable-next-line @typescript-eslint/require-await
async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author
    }))
  };
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateStaticParams(): Promise<PostPageProps['params'][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/')
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto mt-20 max-w-4xl px-6">
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-[-200px] top-14 hidden xl:inline-flex'
        )}
      >
        <ChevronLeftIcon className="mr-2 h-4 w-4" aria-hidden="true" />
        See all posts
      </Link>
      <div className="space-y-2">
        <div className="text-muted-foreground flex items-center space-x-2 text-sm">
          {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
          {post.date ? <div>•</div> : null}
          <div>{post.readingTime}min</div>
        </div>
        <h1 className="inline-block text-3xl font-bold leading-tight lg:text-5xl">{post.title}</h1>
      </div>
      <div className="my-6">
        {post.image && (
          <ImageZoom
            zoomImg={{
              src: post.image,
              alt: post.title
            }}
          >
            <AspectRatio ratio={16 / 9}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="bg-muted rounded-3xl border"
                priority
              />
            </AspectRatio>
          </ImageZoom>
        )}
      </div>
      <Mdx code={post.body.code} />
      <Separator className="my-4" />
      <MdxPager currentItem={post} allItems={allPosts} />
      <Link
        href="/blog"
        className={cn(buttonVariants({ variant: 'outline', className: 'mx-auto mt-4 w-fit' }))}
      >
        <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
        See all posts
        <span className="sr-only">See all posts</span>
      </Link>
    </div>
  );
}
