import { Category, Action, PostObj, ErrorObject } from '../types'

/* Categories Reducer */
export function setCategories(categories: Category[]): Action {
  return {
    type: 'CATEGORIES_FETCHED',
    categories
  }
}

/* loadMorePosts Reducer */
export function setLoadMorePosts(boolean: boolean): Action {
  return {
    type: 'ALL_POSTS_FETCHED',
    boolean
  }
}

/* Posts Reducer */
export function setPosts(posts: PostObj[]): Action {
  return {
    type: 'POSTS_FETCHED',
    posts
  }
}

/* PageNr Reducer */
export function setPageNr(nr: number): Action {
  return {
    type: 'POSTS_ADDED_TO_STATE',
    nr
  }
}

/* MessageForm Reducer */
export function saveFormValue(name: string, value: string): Action {
  return {
    type: 'FORM_VALUE_CHANGED',
    name,
    value
  }
}

export function submitMessageForm(): Action {
  return {
    type: 'SUBMIT_BUTTON_CLICKED'
  }
}

export function newMessageForm(): Action {
  return {
    type: 'NEW_MESSAGE_BUTTON_CLICKED'
  }
}

export function setSuccesMessage(value: string): Action {
  return {
    type: 'SUBMIT_MESSAGE_SUCCESFUL',
    value
  }
}

export function setErrors(errors: ErrorObject): Action {
  return {
    type: 'SUBMIT_MESSAGE_FAILED',
    errors
  }
}
