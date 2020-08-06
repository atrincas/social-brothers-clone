import React from 'react'
import logo from '../../assets/images/Social-Brothers-logo.png'

import { HeaderContainer, MainHeading } from '../../styles'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} width="74px" alt="Social Brothers Logo" />
      <MainHeading>
        Social <span>Brothers</span>
      </MainHeading>
    </HeaderContainer>
  )
}
