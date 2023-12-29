'use client';

import React from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type BlogPostCore, type AssetsPostCore } from '@/types';

import PostCards from '@/components/common/post-cards';
import AssetsCards from '@/components/common/assets-cards';
import { Icons } from '../icons';

type FilteredBlogPostsProps = {
  posts: BlogPostCore[];
};

type FilteredAssetsPostsProps = {
  posts: AssetsPostCore[];
};

export const BlogFilteredPosts = (props: FilteredBlogPostsProps) => {
  const { posts } = props;
  const [searchValue, setSearchValue] = React.useState('');

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="relative mb-8">
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search Blogs"
          aria-label="Search Blogs"
          className="w-full pl-12"
          id="search"
        />
        <Label htmlFor="search">
          <Icons.search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"/>
        </Label>
      </div>
      {filteredPosts.length === 0 && (
        <div className="my-24 text-center text-xl">No blogs found</div>
      )}
      <PostCards posts={filteredPosts} />
    </>
  );
};

export const AssetsFilteredPosts = (props: FilteredAssetsPostsProps) => {
  const { posts } = props;
  const [searchValue, setSearchValue] = React.useState('');

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="relative mb-8 mx-auto max-w-4xl">
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search Assets"
          aria-label="Search Assets"
          className="w-full pl-12"
          id="search"
        />
        <Label htmlFor="search">
          <Icons.search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"/>
        </Label>
      </div>
      <div className=''>
      {filteredPosts.length === 0 && (
        <div className="my-24 text-center text-xl">No assets found</div>
      )}
      </div>
      <AssetsCards posts={filteredPosts} />
    </>
  );
};
