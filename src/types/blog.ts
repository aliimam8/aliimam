import { type BlogPost, type GalleryPost } from 'contentlayer/generated'

export type BlogPostCore = Pick<
  BlogPost,
  '_id' | 'slug' | 'title' | 'summary' | 'date' | 'tags'
>

export type GalleryPostCore = Pick<
GalleryPost,
  '_id' | 'slug' | 'title' | 'summary' | 'date' | 'download'  | 'dimention'  | 'size' | 'tags'
>
