import { pick } from 'contentlayer/client'
import { allBlogPosts, allAssetsPosts } from 'contentlayer/generated'

type GetAllPostsProps = {
  limit?: number
  sorted?: boolean
}

type GetAllAssetsProps = {
  limit?: number
  sorted?: boolean
}

export const getAllBlogPosts = (config: GetAllPostsProps = {}) => {
  const { limit = allBlogPosts.length, sorted = true } = config

  const posts = allBlogPosts
    .slice(0, limit)
    .map((post) => pick(post, ['_id', 'slug', 'title', 'summary', 'date']))

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
    .map((post) => pick(post, ['_id', 'slug', 'title', 'summary', 'date', 'download', 'dimention', 'size']))

  if (sorted) {
    return posts.sort(
      (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
    )
  }

  return posts
}

