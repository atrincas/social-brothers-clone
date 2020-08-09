import React, { FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SelectComponent } from './SelectComponent'
import {
  FormContainer,
  FormSection,
  ButtonContainer,
  StyledButton,
  TextInput,
  TextArea,
  ErrorMessage,
  SuccesMessage
} from '../../styles'
import { postMessage, newMessageForm, getMessageForm } from '../../store'
import { Category } from '../../types'
import useForm from '../../hooks/useForm'

type Props = {
  categories: Category[]
}

export default function MessageForm({ categories }: Props) {
  const messageForm = useSelector(getMessageForm)
  const { formValues, errors, succes, succesMessage } = messageForm
  const { title, categoryId, content } = formValues
  const { handleOnChange } = useForm()
  const dispatch = useDispatch()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    dispatch(postMessage())
  }

  function handleOnClick() {
    dispatch(newMessageForm())
  }

  function renderForm() {
    return (
      <div>
        <FormContainer onSubmit={(e) => handleSubmit(e)}>
          <FormSection>
            <label htmlFor="title">Berichtnaam</label>
            <TextInput
              type="text"
              id="title"
              name="title"
              placeholder="Geen titel"
              value={title}
              onChange={(e) => handleOnChange(e.target.name, e.target.value)}
            />
            {errors && errors.title && <ErrorMessage>{errors.title[0]}</ErrorMessage>}
          </FormSection>

          <FormSection>
            <label htmlFor="category-select">Categorie</label>
            <SelectComponent
              name="categoryId"
              id="category-select"
              value={!categoryId ? '' : categoryId.toString()}
              onChange={(e) => handleOnChange(e.target.name, e.target.value)}
            >
              <option value="" disabled>
                Geen categorie
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </SelectComponent>
            {errors && errors.category_id && <ErrorMessage>{errors.category_id[0]}</ErrorMessage>}
          </FormSection>

          <FormSection>
            <label htmlFor="message">Bericht</label>
            <TextArea
              id="message"
              name="content"
              rows={20}
              cols={33}
              value={content}
              onChange={(e) => handleOnChange(e.target.name, e.target.value)}
            ></TextArea>
            {errors && errors.content && <ErrorMessage>{errors.content[0]}</ErrorMessage>}
          </FormSection>
          <FormSection>
            <ButtonContainer>
              <StyledButton type="submit">Bericht aanmaken</StyledButton>
            </ButtonContainer>
          </FormSection>
        </FormContainer>
      </div>
    )
  }

  function renderSuccesMessage() {
    return (
      <>
        <SuccesMessage>
          <p>{succesMessage}</p>
          <StyledButton type="button" onClick={handleOnClick}>
            Nieuw bericht
          </StyledButton>
        </SuccesMessage>
      </>
    )
  }

  return succes ? renderSuccesMessage() : renderForm()
}
