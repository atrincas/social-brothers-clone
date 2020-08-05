import React from 'react'
import styled from 'styled-components'

import img from './images/Foto-Social-Brothers.jpg'

const Base = styled.div`
  display: grid;
`

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img}) no-repeat;
  background-position: top center;
  background-size: cover;
  height: 300px;

  @media (min-width: 1080px) {
    background-attachment: fixed;
    background-position: center center;
    min-height: 350px;
  }
`

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  padding: 40px;
  grid-gap: 20px;

  @media (min-width: 1080px) {
    grid-template-columns: 1fr 2fr;
  }
`

const Posts = styled.div`
  background-color: #fff;
`

const Form = styled.form`
  background-color: #fff;
`

const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`

function App() {
  return (
    <Base>
      <Header>
        <h1>Social Brothers</h1>
      </Header>
      <Main>
        <Form>
          <Paragraph>
            <label htmlFor="title">Berichtnaam</label>
            <input type="text" id="title" name="title" placeholder="Geen titel" value="" />
          </Paragraph>

          <Paragraph>
            <label htmlFor="category-select">Categorie</label>
            <select name="categories" id="category-select">
              <option value="">Geen categorie</option>
              <option value="een">een</option>
              <option value="twee">twee</option>
              <option value="drie">drie</option>
            </select>
          </Paragraph>

          <Paragraph>
            <label htmlFor="message">Bericht</label>
            <textarea id="message" name="message" rows={20} cols={33}></textarea>
          </Paragraph>

          <Paragraph>
            <input type="submit" value="Bericht aanmaken" />
          </Paragraph>
        </Form>
        <Posts>Posts</Posts>
      </Main>
    </Base>
  )
}

export default App
