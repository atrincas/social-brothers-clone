import styled from 'styled-components'

import img from '../assets/images/Foto-Social-Brothers.jpg'
import { ReactComponent as ArrowIcon } from '../assets/icons/arrow-down.svg'

const mobileUp = '@media (min-width: 675px)'
const desktopUp = '@media (min-width: 1080px)'

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 20px;
  grid-gap: 20px;

  ${desktopUp} {
    grid-template-columns: 1fr 2fr;
    padding: 40px;
  }
`

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${img}) no-repeat;
  background-position: top center;
  background-size: cover;
  height: 300px;

  ${desktopUp} {
    background-attachment: fixed;
    background-position: center center;
    min-height: 350px;
  }
`

export const MainHeading = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  margin-left: 5px;

  span {
    color: ${({ theme }) => theme.colors.orange};
  }
`

export const FormContainer = styled.form`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  max-height: 650px;

  ${mobileUp} {
    position: sticky;
    top: 40px;
  }
`

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;

  & label {
    margin: 10px 0;
  }
`

export const PostsContainer = styled.div`
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow-anchor: none;
`

export const PostsList = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

export const PostContainer = styled.article`
  margin: 10px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
`

export const PostHeader = styled.div<{ img: string }>`
  display: flex;
  align-items: flex-end;
  background: ${(props) =>
    `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.img}) no-repeat;`};
  background-position: center center;
  background-size: cover;
  height: 100px;
`

export const PostInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-style: italic;
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 20px;
`

export const PostHeading = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  padding: 20px 30px;
`

export const PostParagraph = styled.p`
  padding: 0 30px 30px;
  color: ${({ theme }) => theme.colors.darkGray};
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const StyledButton = styled.button`
  padding: 10px 70px;
  border: none;
  border-radius: 20px;

  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.orange};
  background-position: center;
  transition: background 0.8s;

  &:hover {
    background: ${({ theme }) => theme.colors.lightOrange}
      radial-gradient(circle, transparent 1%, ${({ theme }) => theme.colors.orange} 1%)
      center/15000%;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.lightOrange};
    background-size: 100%;
    transition: background 0s;
  }
`

export const SubmitButton = styled.input`
  padding: 10px 70px;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`

export const TextInput = styled.input`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 15px;
  border: none;
`

export const SelectContainer = styled.div`
  position: relative;
`

export const StyledArrowIcon = styled(ArrowIcon)`
  position: absolute;
  right: 10px;
  top: 20px;
  width: 0.75rem;
  pointer-events: none;
`

export const StyledSelect = styled.select`
  color: ${({ theme }) => theme.colors.darkGray};
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 15px;
  border: none;
  appearance: none;
  width: 100%;

  option:not(:first-of-type) {
    color: ${({ theme }) => theme.colors.black};
  }
`

export const TextArea = styled.textarea`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 15px;
  border: none;
  resize: none;
`

export const ErrorMessage = styled.div`
  font-style: italic;
  color: ${({ theme }) => theme.colors.lightOrange};
`

export const SuccesMessageContainer = styled.div``

export const SuccesMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-height: 75px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.lightOrange};

  ${mobileUp} {
    position: sticky;
    top: 40px;
  }

  p {
    padding-bottom: 10px;
  }
`
