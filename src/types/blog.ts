import { type BlogPost, type AssetsPost, type ColorsPost } from 'contentlayer/generated'

export type BlogPostCore = Pick<
  BlogPost,
  '_id' | 'slug' | 'title' | 'summary' | 'date' | 'tags'
>

export type AssetsPostCore = Pick<
AssetsPost,
  '_id' | 'slug' | 'title' | 'summary' | 'date' | 'download'  | 'dimention'  | 'size' | 'tags'
>

export type ColorsPostCore = Pick<
ColorsPost,
  '_id' | 'slug' | 'title' | 'summary' | 'date' | 'download'  | 'dimention'  | 'size' | 'tags'
>
