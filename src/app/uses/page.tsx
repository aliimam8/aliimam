import type { Metadata, ResolvingMetadata } from 'next'

import Mdx from '@/components/mdx'
import PageTitle from '@/components/common/page-title'
import site from '@/config/site'
import getPage from '@/utils/get-uses'

// export const runtime = 'edge'
const title = 'Uses'
const description =
  'This is the equipment I currently use for graphic designing, programming, making videos, and every day.'

type UsesPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: UsesPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/uses`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/uses`,
      title,
      description
    },
    twitter: {
      ...previousTwitter,
      title,
      description
    }
  }
}

const UsesPage = () => {
  const page = getPage('uses')

  return (
    <div className='mx-auto mt-40 max-w-4xl px-6'>
      <PageTitle
        title='Uses'
        description='This is the equipment I currently use for gaming, programming, making
        videos, and every day.'
      />
      <Mdx code={page.body.code} />
    </div>
  )
}

export default UsesPage