import React from 'react'

import Header from './components/Header'
import MessageForm from './components/MessageForm'
import Posts from './components/Posts'

import { MainContainer } from './styles'

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <MessageForm />
        <Posts />
      </MainContainer>
    </>
  )
}

export default App
