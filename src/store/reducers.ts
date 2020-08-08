import { combineReducers } from 'redux'
import { Action } from '../types'

function pageNr(state = 1, action: Action) {
  switch (action.type) {
    case 'POSTS_ADDED_TO_STATE':
      return action.nr
    default:
      return state
  }
}

function loadMorePosts(state = true, action: Action) {
  switch (action.type) {
    case 'ALL_POSTS_FETCHED':
      return action.boolean
    default:
      return state
  }
}

function posts(state = [], action: Action) {
  switch (action.type) {
    case 'POSTS_FETCHED':
      if (!action.posts) return state
      return [...state, ...action.posts]
    default:
      return state
  }
}

function categories(state = [], action: Action) {
  switch (action.type) {
    case 'CATEGORIES_FETCHED':
      if (!action.categories) return state
      return [...state, ...action.categories]
    default:
      return state
  }
}

const initMessageForm = {
  formValues: {
    title: '',
    categoryId: null,
    content: ''
  },
  errors: null,
  succes: false,
  succesMessage: ''
}

function messageForm(state = initMessageForm, action: Action) {
  let newState = initMessageForm

  switch (action.type) {
    case 'FORM_VALUE_CHANGED':
      if (!action.name) return state
      const formValues = { ...state.formValues, [action.name]: action.value }

      if (state.errors) {
        return { ...state, errors: null, formValues }
      } else {
        return { ...state, formValues }
      }
    case 'SUBMIT_MESSAGE_SUCCESFUL':
      return { ...newState, succes: true, succesMessage: action.value }
    case 'SUBMIT_MESSAGE_FAILED':
      return { ...state, errors: action.errors }
    case 'NEW_MESSAGE_BUTTON_CLICKED':
      return newState
    default:
      return state
  }
}

const rootReducer = combineReducers({
  pageNr,
  loadMorePosts,
  posts,
  categories,
  messageForm
})

export default rootReducer
