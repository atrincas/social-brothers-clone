import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Header from './components/Header'
import MessageForm from './components/MessageForm'
import Posts from './components/Posts'

import { MainContainer, GlobalStyle, theme } from './styles'

export type ThemeType = typeof theme

const pageNr = 1
const categoriesUrl = 'http://178.62.198.162/api/categories'
const getPostsUrl = `http://178.62.198.162/api/posts?page=${pageNr}`
const postUrl = 'http://178.62.198.162/api/posts'

const tempObj = [
  {
    id: 1,
    created_at: '2019-05-06 08:47:07',
    updated_at: '2019-05-06 08:47:07',
    title: 'Bericht 2',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim',
    category_id: null,
    img_url: 'https://picsum.photos/200/300?random',
    category: null
  },
  {
    id: 2,
    created_at: '2019-05-06 08:53:57',
    updated_at: '2019-05-06 08:53:57',
    title: 'Bericht 3',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim',
    category_id: 1,
    img_url: 'https://picsum.photos/200/300?random',
    category: {
      id: 1,
      name: 'Tech',
      created_at: null,
      updated_at: null
    }
  },
  {
    id: 3,
    created_at: '2019-05-06 08:54:21',
    updated_at: '2019-05-06 08:54:21',
    title: 'Bericht 56',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim',
    category_id: 1,
    img_url: 'https://picsum.photos/200/300?random',
    category: {
      id: 1,
      name: 'Tech',
      created_at: null,
      updated_at: null
    }
  },
  {
    id: 4,
    created_at: '2019-05-06 08:54:28',
    updated_at: '2019-05-06 08:54:28',
    title: 'Bkjekjernfjkn',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim',
    category_id: 1,
    img_url: 'https://picsum.photos/200/300?random',
    category: {
      id: 1,
      name: 'Tech',
      created_at: null,
      updated_at: null
    }
  },
  {
    id: 5,
    created_at: '2019-05-07 15:23:29',
    updated_at: '2019-05-07 15:23:29',
    title: 'Test titel',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim',
    category_id: 3,
    img_url: 'https://picsum.photos/200/300?random',
    category: {
      id: 3,
      name: 'Sports',
      created_at: null,
      updated_at: null
    }
  },
  {
    id: 6,
    created_at: '2019-05-07 15:23:48',
    updated_at: '2019-05-07 15:23:48',
    title: 'nog een test',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim',
    category_id: 2,
    img_url: 'https://picsum.photos/200/300?random',
    category: {
      id: 2,
      name: 'Nieuws',
      created_at: null,
      updated_at: null
    }
  },
  {
    id: 7,
    created_at: '2019-05-07 15:24:14',
    updated_at: '2019-05-07 15:24:14',
    title: 'nog een test',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim',
    category_id: 2,
    img_url: 'https://picsum.photos/200/300?random',
    category: {
      id: 2,
      name: 'Nieuws',
      created_at: null,
      updated_at: null
    }
  },
  {
    id: 8,
    created_at: '2019-05-13 11:34:50',
    updated_at: '2019-05-13 11:34:50',
    title: 'NynkeTest1',
    content: 'Testtesttest',
    category_id: 2,
    img_url: 'https://picsum.photos/200/300?random',
    category: {
      id: 2,
      name: 'Nieuws',
      created_at: null,
      updated_at: null
    }
  },
  {
    id: 9,
    created_at: '2019-05-13 11:54:41',
    updated_at: '2019-05-13 11:54:41',
    title: 'NynkeTest2',
    content: 'Testtestest',
    category_id: 2,
    img_url: 'https://picsum.photos/200/300?random',
    category: {
      id: 2,
      name: 'Nieuws',
      created_at: null,
      updated_at: null
    }
  },
  {
    id: 10,
    created_at: '2019-05-13 13:23:58',
    updated_at: '2019-05-13 13:23:58',
    title: 'Title',
    content: 'assadgadssd',
    category_id: 1,
    img_url: 'https://picsum.photos/200/300?random',
    category: {
      id: 1,
      name: 'Tech',
      created_at: null,
      updated_at: null
    }
  }
]

function App() {
  const [state, setState] = useState(tempObj)

  // useEffect(() => {
  //   fetch(getPostsUrl, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Token': 'pj11daaQRz7zUIH56B9Z'
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((json) => setState(json))
  // }, [])

  function renderPosts() {
    if (state.length === 0) return null

    return <Posts posts={state} />
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainContainer>
        <MessageForm />
        {renderPosts()}
      </MainContainer>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
