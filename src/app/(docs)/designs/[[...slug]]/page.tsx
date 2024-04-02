import { notFound } from "next/navigation"
import { allDocs } from "contentlayer/generated"

import { getTableOfContents } from "@/lib/toc"
import { Mdx } from "@/components/doc/mdx-components"
import { DocsPageHeader } from "@/components/doc/page-header"
import { DocsPager } from "@/components/doc/pager"
import { DashboardTableOfContents } from "@/components/doc/toc"

import "@/styles/mdx.css"

import { Separator } from "@/components/ui/seperator"

interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams(params: { slug: any }) {
  const slug = params.slug?.join("/") || ""
  const doc = allDocs.find((doc: { slugAsParams: any }) => doc.slugAsParams === slug)

  if (!doc) {
    null
  }

  return doc
}


export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc: { slugAsParams: string }) => ({
    slug: doc.slugAsParams.split("/"),
  }))
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams(params)

  if (!doc) {
    notFound()
  }

  const toc = await getTableOfContents(doc.body.raw)

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 grid xl:grid-cols-[1fr_260px]">
      <div className="mx-auto w-full min-w-0">
        <DocsPageHeader heading={doc.title} text={doc.description} />
        <Mdx code={doc.body.code} />
        <Separator className="my-6" orientation="horizontal"/>
        <DocsPager doc={doc} />
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-24 border-l border-slate-400 dark:border-slate-600 h-[calc(100vh-3.5rem)] p-12 -mt-10  overflow-y-auto pt-10">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  )
}
