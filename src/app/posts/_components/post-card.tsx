import Image from "next/image"
import Link from "next/link"
import { type Post } from "contentlayer/generated"

import { cn, formatDate } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { CardDescription, CardHeader, CardTitle } from "src/components/ui/card"
import { PlaceholderImage } from "src/components/ui/placeholder-image"

interface PostCardProps {
  post: Post
  i: number
}

export function PostCard({ post, i }: PostCardProps) {
  return (
    
      <Link
      key={post.slug}
      href={post.slug}
      className={cn(
        'relative flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 p-6')}
      data-id='post-card'
    >
      <span className="sr-only">{post.title}</span>
      <article className="space-y-4">
        <AspectRatio ratio={16 / 9}>
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, (min-width: 640px) 224px, 100vw"
              className="rounded-lg object-cover saturate-100 transition-all duration-100 hover:saturate-0"
              priority={i <= 1}
            />
          ) : (
            <PlaceholderImage asChild />
          )}
        </AspectRatio>
        <div className="space-y-2">
          <CardHeader className="space-y-2.5 p-0">
            <CardTitle className="line-clamp-1 py-2">{post.title}</CardTitle>
            <CardDescription className="line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
              {post.description}
            </CardDescription>
          </CardHeader>
          <CardDescription>{formatDate(post.date)}</CardDescription>
        </div>
      </article>
    </Link>
  )
}
