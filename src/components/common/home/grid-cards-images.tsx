'use client';
import { cn } from '@/lib/utils';
import { CardStack } from 'src/components/ui/image-stack';
import Link from 'next/link';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Icons } from 'src/components/icons';

export function CardStackDemo() {
  return (
    <>
      <CardStack items={CARDS} />
    </>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={cn(' h-full bg-slate-100 dark:bg-slate-900 ', className)}>{children}</span>
  );
};

const CARDS = [
  {
    id: 1,
    src: '/images/fav/img1.jpg'
  },
  {
    id: 2,
    src: '/images/fav/img2.jpg'
  },
  {
    id: 3,
    src: '/images/fav/img3.jpg'
  },
  {
    id: 4,
    src: '/images/fav/img4.jpg'
  },
  {
    id: 5,
    src: '/images/fav/img5.jpg'
  },
  {
    id: 6,
    src: '/images/fav/img6.jpg'
  }
];
