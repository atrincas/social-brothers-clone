import React from 'react'

import { Post } from './Post'
import { PostsContainer, PostsList, StyledButton, ButtonContainer } from '../../styles'

type Post = {
  id: number
  created_at: string
  updated_at: string
  title: string
  content: string
  category_id: number | null
  img_url: string
  category: {
    id: number
    name: string
    created_at: null
    updated_at: null
  } | null
}

type Props = {
  posts: Post[]
}

export default function Posts({ posts }: Props) {
  function loadMorePosts() {
    console.log('load more posts')
  }
  return (
    <PostsContainer>
      <PostsList>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            imgUrl={post.img_url}
            title={post.title}
            content={post.content}
            updatedAt={post.updated_at}
            category={post.category}
          />
        ))}
      </PostsList>
      <ButtonContainer>
        <StyledButton type="button" onClick={loadMorePosts}>
          Meer Laden
        </StyledButton>
      </ButtonContainer>
    </PostsContainer>
  )
}
