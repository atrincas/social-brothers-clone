import { createGlobalStyle } from 'styled-components'
import { ThemeType } from '../App'

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
@font-face {
  font-family: 'Titillium Web';
  src: url('fonts/TitilliumWeb-Regular.ttf');
}

@font-face {
  font-family: 'Mulish';
  src: url('fonts/Mulish-Bold.ttf');
}

body,
div,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
img,
ul,
li,
aside,
footer,
header,
section {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}

body {
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSizes.base};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.lightGray};
}

h1,
h2,
h3,
h4 {
  font-family: ${({ theme }) => theme.typography.fontFamily.headers};
}

#root {
  position: relative;
}
`
