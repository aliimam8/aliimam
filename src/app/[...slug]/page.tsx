import { notFound } from "next/navigation"
import { allPages } from "contentlayer/generated"

import { Separator } from "src/components/ui/seperator"
import { Mdx } from "src/components/common/mdx-components"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "src/components/common/page-header"
import { MdxPager } from "src/components/common/mdx-pager"


interface PageProps {
  params: {
    slug: string[]
  }
}

// eslint-disable-next-line @typescript-eslint/require-await
async function getPageFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/") ?? ""
  const page = allPages.find((page) => page.slugAsParams === slug)

  if (!page) {
    null
  }

  return page
}



// eslint-disable-next-line @typescript-eslint/require-await
export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }))
}

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params)

  if (!page) {
    notFound()
  }

  // Remove the /pages prefix from the slug
  const formattedPage = {
    ...page,
    slug: page.slug.replace(/^\/pages/, ""),
  }

  const formattedPages = allPages.map((page) => ({
    ...page,
    slug: page.slug.replace(/^\/pages/, ""),
  }))

  return (
    <div className="mx-auto max-w-4xl mt-20 px-6">
      
      <PageHeader>
      <div className="mt-10">
        <PageHeaderHeading>{page.title}</PageHeaderHeading>
        <PageHeaderDescription>{page.description}</PageHeaderDescription>
        </div>
      </PageHeader>
      <Separator className="my-8" />
      <Mdx code={page.body.code} />
      <MdxPager
        currentItem={formattedPage}
        allItems={formattedPages}
        className="my-10"
      />
      
    </div>
  )
}