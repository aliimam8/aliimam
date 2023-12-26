import { type BlogPost, type AssetsPost } from 'contentlayer/generated'

export type BlogPostCore = Pick<
  BlogPost,
  '_id' | 'slug' | 'title' | 'summary' | 'date'
>

export type AssetsPostCore = Pick<
AssetsPost,
  '_id' | 'slug' | 'title' | 'summary' | 'date'
>
