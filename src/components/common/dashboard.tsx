import type { Metadata, ResolvingMetadata } from 'next'

import site from '@/config/site'

import Items from './dashitems'

export const runtime = 'edge'
const title = 'Dashboard'
const description =
  'This is my personal dashboard, built with Next.js API routes deployed as serverless functions. I use this dashboard to track various metrics across platforms like YouTube, GitHub, and more.'

type DashboardPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: DashboardPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/dashboard`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/dashboard`,
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

const DashboardPage = () => {
  return (
    <>
      <h1 className=" left-0 right-0 items-center text-center text-2xl font-bold sm:text-4xl">
              Dashboard
              <hr className="mx-auto my-4 h-1 w-6 rounded-full border-0 bg-aired"></hr>
            </h1>
      <Items />
    </>
  )
}

export default DashboardPage