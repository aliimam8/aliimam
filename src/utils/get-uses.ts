import { allUses } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

const getPage = (slug: string) => {
  const page = allUses.find((p) => p.slug === slug)

  if (!page) {
    return notFound()
  }

  return page
}

export default getPage
