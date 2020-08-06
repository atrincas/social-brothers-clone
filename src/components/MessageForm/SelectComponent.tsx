import React from 'react'

import { SelectContainer, StyledSelect, StyledArrowIcon } from '../../styles'

type Props = {
  name: string
  id: string
  children: React.ReactNode
}

function SelectComponent({ name, id, children }: Props) {
  return (
    <SelectContainer>
      <StyledSelect name={name} id={id}>
        {children}
      </StyledSelect>
      <StyledArrowIcon width="0.75rem" />
    </SelectContainer>
  )
}

export { SelectComponent }
