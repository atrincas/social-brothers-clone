import React from 'react'
import { FormContainer, Paragraph } from '../../styles'

export default function MessageForm() {
  return (
    <FormContainer>
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
    </FormContainer>
  )
}
