'use client'

import React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { type BlogPostCore } from '@/types'

import PostCards from '@/components/common/post-cards'

type FilteredPostsProps = {
  posts: BlogPostCore[]
}

const FilteredPosts = (props: FilteredPostsProps) => {
  const { posts } = props
  const [searchValue, setSearchValue] = React.useState('')

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <>
      <div className='relative mb-8'>
        <Input
          type='text'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='Search articles'
          aria-label='Search articles'
          className='w-full pl-12'
          id='search'
        />
        <Label htmlFor='search'>
          
        </Label>
      </div>
      {filteredPosts.length === 0 && (
        <div className='my-24 text-center text-xl'>No posts found</div>
      )}
      <PostCards posts={filteredPosts} />
    </>
  )
}

export default FilteredPosts
