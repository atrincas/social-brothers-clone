import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Header from './components/Header'
import MessageForm from './components/MessageForm'
import Posts from './components/Posts'
import Loader from './components/Loader'

import { MainContainer, GlobalStyle, theme } from './styles'
import { fetchPosts, fetchCategories, getPosts, getPageNr, getCategories, setPageNr } from './store'

export type ThemeType = typeof theme

function App() {
  const posts = useSelector(getPosts)
  const categories = useSelector(getCategories)
  const pageNr = useSelector(getPageNr)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchCategories())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (posts.length > 0) dispatch(setPageNr(pageNr + 1))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts])

  if (posts.length === 0 || categories.length === 0) return <Loader />

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainContainer>
        <MessageForm categories={categories} />
        <Posts posts={posts} />
      </MainContainer>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
