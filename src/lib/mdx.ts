import { pick } from 'contentlayer/client'
import { allBlogPosts, allAssetsPosts, allColorsPosts } from 'contentlayer/generated'

type GetAllPostsProps = {
  limit?: number
  sorted?: boolean
}

type GetAllAssetsProps = {
  limit?: number
  sorted?: boolean
}

type GetAllColorsProps = {
  limit?: number
  sorted?: boolean
}

export const getAllBlogPosts = (config: GetAllPostsProps = {}) => {
  const { limit = allBlogPosts.length, sorted = true } = config

  const posts = allBlogPosts
    .slice(0, limit)
    .map((post) => pick(post, ['_id', 'slug', 'title', 'summary', 'date', 'tags']))

  if (sorted) {
    return posts.sort(
      (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
    )
  }

  return posts
}

export const getAllAssetsPosts = (config: GetAllAssetsProps = {}) => {
  const { limit = allAssetsPosts.length, sorted = true } = config

  const posts = allAssetsPosts
    .slice(0, limit)
    .map((post) => pick(post, ['_id', 'slug', 'title', 'summary', 'date', 'download', 'dimention', 'size', 'tags']))

  if (sorted) {
    return posts.sort(
      (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
    )
  }

  return posts
}

export const getAllColorsPosts = (config: GetAllColorsProps = {}) => {
  const { limit = allColorsPosts.length, sorted = true } = config

  const posts = allColorsPosts
    .slice(0, limit)
    .map((post) => pick(post, ['_id', 'slug', 'title', 'summary', 'date', 'download', 'dimention', 'draft', 'size', 'tags', 'color1', 'color2', 'color3', 'color4', 'color5', 'color6']))

  if (sorted) {
    return posts.sort(
      (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
    )
  }

  return posts
}


