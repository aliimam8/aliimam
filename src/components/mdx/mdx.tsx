'use client';

import { type MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

import ImageZoom from '../common/image-zoom';
import Image from './image';
import ItemGrid from './item-grid';
import Link from './link';
import LinkCard from './link-card';
import Logo from './logo';
import Pre from './pre';
import Tree from './tree';
import Video from './video';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import { Icons } from '../icons';

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
            className="not-prose h-full w-full cursor-zoom-in rounded-3xl border border-slate-200 bg-aired object-cover object-center dark:border-slate-800"
            alt={alt}
            {...rest}
          />
        </ImageZoom>
        <figcaption className="mb-2"></figcaption>
      </>
    );
  },
  pre: Pre,
  table: (props: React.ComponentPropsWithoutRef<'table'>) => (
    <Table className="not-prose" {...props} />
  ),
  thead: (props: React.ComponentPropsWithoutRef<'thead'>) => <TableHeader {...props} />,
  tbody: (props: React.ComponentPropsWithoutRef<'tbody'>) => <TableBody {...props} />,
  tr: (props: React.ComponentPropsWithoutRef<'tr'>) => <TableRow {...props} />,
  th: (props: React.ComponentPropsWithoutRef<'th'>) => <TableHead {...props} />,
  td: (props: React.ComponentPropsWithoutRef<'td'>) => <TableCell {...props} />,

  // Custom components
  Alert: (props: React.ComponentPropsWithoutRef<typeof Alert>) => <Alert {...props} />,
  AlertTitle: (props: React.ComponentPropsWithoutRef<typeof AlertTitle>) => (
    <AlertTitle {...props} />
  ),
  AlertDescription: (props: React.ComponentPropsWithoutRef<typeof AlertDescription>) => (
    <AlertDescription {...props} />
  ),
  ItemGrid,
  Tree,
  Video,
  LinkCard,
  Logo
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
