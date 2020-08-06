import React from 'react'

import { SelectComponent } from './SelectComponent'
import {
  FormContainer,
  FormSection,
  ButtonContainer,
  StyledButton,
  TextInput,
  TextArea
} from '../../styles'

export default function MessageForm() {
  return (
    <FormContainer>
      <FormSection>
        <label htmlFor="title">Berichtnaam</label>
        <TextInput type="text" id="title" name="title" placeholder="Geen titel" value="" />
      </FormSection>

      <FormSection>
        <label htmlFor="category-select">Categorie</label>
        <SelectComponent name="categories" id="category-select">
          <option value="">Geen categorie</option>
          <option value="een">een</option>
          <option value="twee">twee</option>
          <option value="drie">drie</option>
        </SelectComponent>
      </FormSection>

      <FormSection>
        <label htmlFor="message">Bericht</label>
        <TextArea id="message" name="message" rows={20} cols={33}></TextArea>
      </FormSection>

      <FormSection>
        <ButtonContainer>
          <StyledButton type="submit">Bericht aanmaken</StyledButton>
        </ButtonContainer>
      </FormSection>
    </FormContainer>
  )
}
