import { State } from '../types'

export function getState(state: State) {
  return state
}

export function getCategories(state: State) {
  return state.categories
}

export function getPosts(state: State) {
  return state.posts
}

export function getPageNr(state: State) {
  return state.pageNr
}

export function getLoadMorePosts(state: State) {
  return state.loadMorePosts
}

export function getMessageForm(state: State) {
  return state.messageForm
}
