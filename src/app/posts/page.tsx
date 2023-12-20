import * as React from "react"
import { type Metadata } from "next"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import PageTitle from '@/components/common/page-title'

import { PostCard } from "./_components/post-card"
import { PostCardSkeleton } from "./_components/post-card-skeleton"

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore the latest news and updates from the community",
}

export default function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="mx-auto mt-40 max-w-4xl px-6">
      <PageTitle
        title='Posts'
        description={`I started writing articles in December 2023, mainly about Graphic Design and
        sharing knowledge. I have written a total of ${posts.length} articles on
        my blog.`}
      />
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      
        <React.Suspense
          fallback={Array.from({ length: 4 }).map((_, i) => (
            <PostCardSkeleton key={i} />
          ))}
        >
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} i={i} />
          ))}
        </React.Suspense>
      </section>
    </div>
  )
}