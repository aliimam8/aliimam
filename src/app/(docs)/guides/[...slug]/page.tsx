import Link from "next/link"
import { notFound } from "next/navigation"
import { allGuides } from "contentlayer/generated"

import { getTableOfContents } from "@/lib/toc"
import { Icons } from "@/components/icons"
import Mdx from "@/components/mdx"
import { DocsPageHeader } from "@/components/doc/page-header"
import { DashboardTableOfContents } from "@/components/doc/toc"

import "@/styles/mdx.css"


import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/seperator"

interface GuidePageProps {
  params: {
    slug: string[]
  }
}

async function getGuideFromParams(params: { slug: any }) {
  const slug = params?.slug?.join("/")
  const guide = allGuides.find((guide) => guide.slugAsParams === slug)

  if (!guide) {
    null
  }

  return guide
}


export async function generateStaticParams(): Promise<
  GuidePageProps["params"][]
> {
  return allGuides.map((guide) => ({
    slug: guide.slugAsParams.split("/"),
  }))
}

export default async function GuidePage({ params }: GuidePageProps) {
  const guide = await getGuideFromParams(params)

  const toc = await getTableOfContents(guide.body.raw)

  return (
    <main className="relative py-6 lg:grid lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_260px]">
      <div>
        <DocsPageHeader heading={guide.title} text={guide.description} />
        <Mdx code={guide.body.code} />
        <Separator className="my-8"/>
        <div className="flex py-6 lg:py-10">
          <Link
            href="/guides"
            className={cn(buttonVariants({ variant: "outline", size: "md" }))}
          >
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            See all guides
          </Link>
        </div>

      </div>

      <div className="hidden text-sm xl:block">
          <div className="sticky top-24 border-l border-slate-400 dark:border-slate-600 h-[calc(100vh-3.5rem)] -my-10 px-12 py-12 overflow-y-auto">
            <DashboardTableOfContents toc={toc} />
          </div>
        </div>
    </main>
  )
}
