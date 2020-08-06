import React from 'react'
import { PostContainer, PostHeader, PostInfoBox, PostHeading, PostParagraph } from '../../styles'

type Props = {
  id: number
  imgUrl: string
  title: string
  content: string
  updatedAt: string
  category: {
    id: number
    name: string
    created_at: null
    updated_at: null
  } | null
}

function Post({ id, imgUrl, title, content, updatedAt, category }: Props) {
  function renderDate() {
    const timeStamp = Date.parse(updatedAt)
    const dateObj = new Date(timeStamp)

    return `${dateObj.getDay()}-${dateObj.getMonth()}-${dateObj.getFullYear()}`
  }

  function renderCategory() {
    if (!category) return null

    return <span>{category.name}</span>
  }
  return (
    <PostContainer key={id}>
      <PostHeader img={imgUrl}>
        <PostInfoBox>
          <span>{renderDate()}</span>
          {renderCategory()}
        </PostInfoBox>
      </PostHeader>
      <PostHeading>{title}</PostHeading>
      <PostParagraph>{content}</PostParagraph>
    </PostContainer>
  )
}

export { Post }
