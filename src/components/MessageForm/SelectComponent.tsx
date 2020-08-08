import React, { ChangeEvent } from 'react'

import { SelectContainer, StyledSelect, StyledArrowIcon } from '../../styles'

type Props = {
  name: string
  id: string
  value: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  children: React.ReactNode
}

function SelectComponent({ name, id, value, onChange, children }: Props) {
  return (
    <SelectContainer>
      <StyledSelect name={name} id={id} value={value || ''} onChange={onChange}>
        {children}
      </StyledSelect>
      <StyledArrowIcon />
    </SelectContainer>
  )
}

export { SelectComponent }
