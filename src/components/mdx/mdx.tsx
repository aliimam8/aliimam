'use client';

import { type MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import ImageZoom from '../common/image-zoom';
import Image from './image';
import ItemGrid from './item-grid';
import FlexGrid from './flex-grid';
import ImageGrid from './image-grid';
import Link from './link';
import LinkCard from './link-card';
import Pre from './pre';
import Tree from './tree';
import Table from './table';
import Video from './video';

type MdxProps = {
  code: string;
};

const components: MDXComponents = {
  a: Link,
  Image: (props: React.ComponentPropsWithoutRef<typeof Image>) => {
    const { alt, src, ...rest } = props;

    return (
      <>
        <ImageZoom>
          <Image
            src={src}
            className="not-prose flex h-full w-full cursor-zoom-in rounded-3xl border border-slate-200 bg-aired object-cover object-center dark:border-slate-800"
            alt={alt}
            {...rest}
          />
        </ImageZoom>
        <figcaption className="mb-2"></figcaption>
      </>
    );
  },
  pre: Pre,

  // Custom components
  Alert: (props: React.ComponentPropsWithoutRef<typeof Alert>) => <Alert {...props} />,
  AlertTitle: (props: React.ComponentPropsWithoutRef<typeof AlertTitle>) => (
    <AlertTitle {...props} />
  ),
  AlertDescription: (props: React.ComponentPropsWithoutRef<typeof AlertDescription>) => (
    <AlertDescription {...props} />
  ),
  ItemGrid,
  FlexGrid,
  ImageGrid,
  Table,
  Tree,
  Video,
  LinkCard,
};

const Mdx = (props: MdxProps) => {
  const { code } = props;
  const Component = useMDXComponent(code);

  return (
    <div className="prose w-full max-w-none dark:prose-invert">
      <Component components={{ ...components }} />
    </div>
  );
};

export default Mdx;
