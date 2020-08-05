import styled from 'styled-components'
import img from '../images/Foto-Social-Brothers.jpg'

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  padding: 40px;
  grid-gap: 20px;

  @media (min-width: 1080px) {
    grid-template-columns: 1fr 2fr;
  }
`

export const HeaderContainer = styled.header`
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

export const FormContainer = styled.form`
  background-color: #fff;
`

export const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`

export const PostsContainer = styled.div`
  background-color: #fff;
`
