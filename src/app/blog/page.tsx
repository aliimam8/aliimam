import * as React from "react"
import { type Metadata } from "next"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { Separator } from "@/components/ui/seperator"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/common/page-header"

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
      <PageHeader>
        <PageHeaderHeading>Blog</PageHeaderHeading>
        <PageHeaderDescription>
          Explore the latest news and updates from the community
        </PageHeaderDescription>
      </PageHeader>
      <Separator className="my-6" />
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
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