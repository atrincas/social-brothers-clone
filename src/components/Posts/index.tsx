import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Post } from './Post'
import { PostsContainer, PostsList, StyledButton, ButtonContainer } from '../../styles'
import { PostObj } from '../../types'
import { fetchPosts, getLoadMorePosts } from '../../store'

type Props = {
  posts: PostObj[]
}

export default function Posts({ posts }: Props) {
  const loadMorePosts = useSelector(getLoadMorePosts)
  const dispatch = useDispatch()

  function handleOnclick() {
    dispatch(fetchPosts())
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
      {loadMorePosts && (
        <ButtonContainer>
          <StyledButton type="button" onClick={handleOnclick}>
            Meer Laden
          </StyledButton>
        </ButtonContainer>
      )}
    </PostsContainer>
  )
}
